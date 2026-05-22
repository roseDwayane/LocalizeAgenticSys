# 最小可控 Agent 研究路徑

> 復刻 Claude Code / Openclaw 風格的 AI Agent 並進行 ablation 研究的三階段規劃。
>
> **核心反直覺**：不要 fork Claude Code 或 Openclaw 來改。它們是 production code（VS Code extension、Electron wrapper、遙測、加密授權），改一行 agent 行為要先穿過 50 行膠水。研究要的是「**最小可控的 agent loop**」加上「**Claude Code / Openclaw 當對照組**」。

---

## 路徑總覽

```
Phase 1: 200 行 from-scratch agent              ← 把核心想透
Phase 2: 加 harness 層（tools / memory / subagent / hook）  ← 建立 baseline
Phase 3: 設計 ablation 研究                      ← 真正的研究
```

每個階段的產出都能單獨成果（repo / blog / paper），不要急著跳到 Phase 3。預估時程：

| Phase | 時程 | 產出 |
|---|---|---|
| 1 | 1 週 | 能跑簡單 coding 任務的 200 行 agent |
| 2 | 2–3 週 | 模組化 baseline，每層可拔可換 |
| 3 | 4 週起 | Ablation 實驗 + 結果報告 |

---

## Phase 1：先寫一個 200 行的 minimal agent

整個 Claude Code 的核心其實就是這個 loop——從零實作一遍是建立 mental model 的唯一方法。

### 目標

寫一個 agent 能完成：
- 讀取檔案
- 執行 shell 指令
- 在多輪 tool use 後給出最終答案

### 程式骨架

```python
# minimal_agent.py
import anthropic
from anthropic import Anthropic

client = Anthropic()

TOOLS = [
    {
        "name": "read_file",
        "description": "Read a file from disk",
        "input_schema": {
            "type": "object",
            "properties": {"path": {"type": "string"}},
            "required": ["path"],
        },
    },
    {
        "name": "run_bash",
        "description": "Run a shell command",
        "input_schema": {
            "type": "object",
            "properties": {"cmd": {"type": "string"}},
            "required": ["cmd"],
        },
    },
]

def execute_tool(name, args):
    if name == "read_file":
        return open(args["path"]).read()
    if name == "run_bash":
        import subprocess
        return subprocess.run(
            args["cmd"], shell=True, capture_output=True, text=True
        ).stdout

def agent_loop(user_prompt, system_prompt, max_iters=20):
    messages = [{"role": "user", "content": user_prompt}]
    for step in range(max_iters):
        resp = client.messages.create(
            model="claude-opus-4-7",
            max_tokens=4096,
            system=system_prompt,
            tools=TOOLS,
            messages=messages,
        )
        messages.append({"role": "assistant", "content": resp.content})

        if resp.stop_reason == "end_turn":
            return resp

        # Execute every tool_use block, append results
        tool_results = []
        for block in resp.content:
            if block.type == "tool_use":
                output = execute_tool(block.name, block.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": str(output),
                })
        messages.append({"role": "user", "content": tool_results})

    raise RuntimeError("Max iterations exceeded")
```

### 為什麼一定要先寫這個

1. 你會親手碰到 `stop_reason == "tool_use"` vs `"end_turn"`、tool_result 必須 echo 回 `tool_use_id` 等細節——這些是 harness 的最底層
2. 你會發現整個 Claude Code 的精華是「**system prompt + tools 的設計**」，其他都是 elaboration
3. 後面要做 ablation，你需要一個 100% 自己掌控的 baseline

### Phase 1 出口條件

當這 200 行能完成「讀 repo、改一個簡單 bug、跑測試」之後，才進 Phase 2。

---

## Phase 2：把 harness 一層一層加上去

四層每加一層就是一個獨立的研究維度——也是 Phase 3 ablation 的切點。**每一層都應該是可拔除的模組，不要寫死**。

### 四層 harness

| 層 | 對應 Claude Code 元件 | 研究問題範例 |
|---|---|---|
| **Tool design** | `Read / Write / Edit / Bash / Grep` | 工具粒度（atomic vs composite）對任務成功率的影響？工具描述長度的 sweet spot？ |
| **Context management** | Auto-compact、CLAUDE.md、歷史摘要 | FIFO vs summarization vs vector retrieval，哪種在 long-horizon task 不會崩？ |
| **Sub-agent orchestration** | `Task` tool + 獨立 context | 何時該 spawn subagent？多深的階層會反而拖慢？ |
| **Verification loop** | Hooks（PostToolUse）、self-critique | 程式驗證 vs LLM-as-judge vs human-in-loop，對哪類錯誤最有效？ |

### 模組化結構建議

```python
class Agent:
    def __init__(self, *, planner, memory, tools, verifier):
        self.planner = planner      # ReAct / Reflexion / Plan-and-Solve
        self.memory = memory         # FIFO / Summary / Retrieval
        self.tools = tools           # 一組 tool spec
        self.verifier = verifier     # None / Hook / SelfCritique
```

這樣 Phase 3 做 ablation 就是：
```python
Agent(planner=ReAct(),    memory=FIFO(),    ...)
Agent(planner=Reflexion(), memory=Summary(), ...)
```
直接可比、可重現。

### Phase 2 出口條件

四個模組各有至少 2 種實作可切換，且能跑一個小 benchmark（例如 HumanEval 100 題）並完整記錄結果。

---

## Phase 3：研究設計（這才是論文）

### 3.1 研究問題的形式

**不要問**：「我的 agent 比 Claude Code 強嗎？」（你贏不了，且這不是研究問題）

**要問**：「**A 設計選擇 vs B，在 X 任務類別上，造成 Y 指標多少差異？**」

範例：
- ReAct vs Plan-and-Solve，在多步驟 debug 任務上的成功率差異
- Tool 粒度（10 個 atomic tool vs 3 個 composite tool），對 token 使用量與任務時間的影響
- 有 hook 驗證 vs 無 hook，phantom citation 發生率

### 3.2 Benchmark 選擇

不要自己 hand-craft，會被 reviewer 質疑代表性。直接用既有：

| Benchmark | 領域 | 備註 |
|---|---|---|
| **SWE-bench / SWE-bench Verified** | 軟體工程 | 最接近 Claude Code 的領域 |
| **τ-bench** | Tool use + 多輪對話 | 客服 / agentic 互動 |
| **MLE-bench** | ML 工程 | OpenAI 出品 |
| **HumanEval / MBPP** | 程式生成 | 太簡單，僅適合 sanity check |
| 領域特定 | 你的 research / journal pipeline | 例如：給 abstract → 找 5 篇 cite → 寫 RW 段落，用 hook 驗證 phantom citation 率 |

### 3.3 Logging 與可重現性

- 全程記錄每次 LLM call 的 `(messages, response, tokens, cost, latency)` 到 SQLite 或 W&B
- 固定 `temperature=0` + 固定 model 版本（`claude-opus-4-7` 而非 `claude-opus-latest`）
- **研究時把 prompt cache 關掉**（cache hit 會讓計時失準），production 才開
- Anthropic 沒有強保證 seed，多跑 N=5 求平均

### 3.4 對照組怎麼用 Claude Code 與 Openclaw

**不要 fork**，當 **black-box reference** 用：

1. 同一個 task 餵給 Claude Code（`claude -p "task"` headless mode），記錄輸出與 token
2. 同一個 task 餵給 Openclaw（用它的 CLI 或 API）
3. 同一個 task 餵給你自己的 agent
4. 比較三者——這就是 paper 的對照表

這樣你不必維護 production code，但讀者能看到「最先進的閉源 / 開源 agent vs 你的 ablation」。

---

## 工具棧建議

| 用途 | 推薦 |
|---|---|
| Model API | Anthropic SDK（與目標 agent 同棧）；production 開 prompt caching，研究時關 |
| 快速 scaffold | **Claude Agent SDK**（Anthropic 官方，本來就是給人客製化 Claude Code 用的）或 **smolagents**（HuggingFace，code-first，研究友善） |
| Sandbox | Docker + 受限 user；Bash 工具一定關在容器裡 |
| Eval harness | **inspect-ai**（UK AISI，學術界用得多）或自寫 pytest pipeline |
| Logging | W&B / LangSmith（如不介意 trace 上傳）；不上傳就 SQLite + Streamlit dashboard |
| 對照 baselines | Claude Code headless / Openclaw / Aider / SWE-agent |

---

## 三個容易踩的坑

1. **過早優化 production 細節**
   MCP、IDE 整合、權限管理在研究階段都不重要。研究要的是「能不能精確控制 agent 的行為並量測結果」。

2. **比較 apples to oranges**
   你的 agent 用 Opus、Claude Code 用 Sonnet，這比較沒意義。**固定 base model** 才能比 harness 設計。

3. **Token 黑洞**
   一個 ablation 跑 SWE-bench 200 題 × 5 種設計 × 重複 3 次 = 3000 次完整任務，輕鬆破萬美元。**先用 SWE-bench Lite（300 題子集）+ Haiku 做 pilot**，確認流程沒 bug 再上 Opus。

---

## 與 Context Engineering 階層的對應

| Context-Engineering 階層 | Phase 2 模組 | 研究問題 |
|---|---|---|
| Atoms（單一 prompt） | system prompt 設計 | prompt 結構對 tool selection 的影響 |
| Molecules（few-shot） | tool description 內的 examples | examples 數量 vs 描述長度的 trade-off |
| Cells（memory） | Context management 模組 | summarization vs retrieval |
| Organs（multi-agent） | Sub-agent orchestration 模組 | 何時該 spawn、深度上限 |
| Neural systems（cognitive tools） | Verifier 模組 | hook vs self-critique |
| Fields（持續性 context） | 跨 session 的 memory store | long-term memory 對重複任務的助益 |

這份對應表可以直接當論文的 framework section——理論架構由 Context-Engineering 提供，實作與量化由 Phase 2/3 提供。

---

## 一句話總結

**不要 fork Claude Code，要 reproduce Claude Code**。寫 200 行從零開始的 agent，把 harness 拆成可拔的模組，用 SWE-bench 之類既有 benchmark 量化，把 Claude Code / Openclaw 當對照 baseline 而非起點——這是研究路徑；想做 production 才需要 fork。
