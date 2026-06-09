---
session_id: "20260522"
topic: "How to build a state-of-the-art localized agentic system"
topic_original: "如何建造最先進的 localize agentic system？"
date: "2026-05-22"
---

# Search Queries / 搜尋策略

> Topic / 研究主題: How to build a state-of-the-art localized agentic system / 如何建造最先進的本地化（localize）AI Agent 系統
> Generated / 產生日期: 2026-05-22

## PICO Framework

| Component | English | 繁體中文 |
|-----------|---------|---------|
| **P** Population | Local / on-device AI agent systems (open-source LLM-based agents running on consumer or edge hardware — Claude Code, OpenClaw / OpenHands, ReAct, AutoGen, Cline, Aider, self-hosted LLM stacks) | 在地化／本地端運行的 AI Agent 系統（基於開源 LLM、可在個人或邊緣裝置運作的 agent 框架，例如 Claude Code、OpenClaw / OpenHands、ReAct、AutoGen、Cline、Aider 與自架 LLM 堆疊） |
| **I** Intervention | Architectural patterns and engineering practices that constitute SOTA agentic design — context engineering, harness engineering, extensions (skills / tools / MCP / hooks / subagents), planning loops, memory / state, sandboxing, local inference (quantization, LoRA, speculative decoding) | 構成最先進 agentic 系統的架構與工程實務 — context engineering（脈絡工程）、harness engineering（外殼工程）、擴充機制（skills / tools / MCP / hooks / subagents）、規劃與推理迴圈、記憶／狀態管理、沙箱執行、本地推論（量化、LoRA、speculative decoding） |
| **C** Comparison | Cloud-hosted frontier agents (Claude.ai, GPT agents, Devin), naive single-shot LLM pipelines, and earlier ReAct / AutoGPT-style baselines | 雲端前沿 agent（Claude.ai、GPT agents、Devin）、單次 prompt 的簡單 LLM 管線、以及早期 ReAct / AutoGPT 風格的基線系統 |
| **O** Outcome | Task success rate on agent benchmarks (SWE-bench, WebArena, GAIA, AgentBench, OSWorld), context-window utilization & cost, latency on local hardware, tool-use reliability, autonomy depth (steps without human intervention), privacy & data locality, reproducibility / ablation of components | Agent 基準上的任務成功率（SWE-bench、WebArena、GAIA、AgentBench、OSWorld）、context window 使用效率與成本、在本地硬體上的延遲、工具呼叫穩定度、自主深度（無需人介入的步數）、隱私與資料在地性、各架構元件的可重現性／消融分析 |
| Setting | Local developer workstations, edge devices, privacy-sensitive enterprise environments; open-source ecosystem (GitHub, HuggingFace, arXiv) | 本地開發者工作站、邊緣裝置、對隱私敏感的企業環境；開源生態系（GitHub、HuggingFace、arXiv） |
| Timeframe | 2023–2026 (emphasis on 2024–2026 for SOTA agent architectures and context-engineering practices) | 2023–2026（重點放在 2024–2026 的 SOTA agent 架構與 context engineering 實務） |

## Queries

### Q1: Core Terms + Population (with anchor systems)
**Query:** `("LLM agent" OR "agentic system" OR "AI agent" OR "Claude Code" OR "OpenClaw" OR "hermes-agent") AND ("local" OR "on-device" OR "self-hosted" OR "open-source") AND (architecture OR framework OR design)`
**Rationale / 策略說明:** Direct hit on locally-deployable LLM agent architectures, anchored on the three reference systems (Claude Code, OpenClaw, hermes-agent). / 直接命中可本地部署的 LLM agent 架構研究，並用三個錨點系統（Claude Code、OpenClaw、hermes-agent）定錨搜尋範圍。

### Q2: Synonyms + Alternative Terminology
**Query:** `("autonomous agent" OR "tool-using LLM" OR "LLM-based agent" OR "language agent") AND ("ReAct" OR "planning" OR "tool use" OR "function calling") AND ("open source" OR "edge" OR "private")`
**Rationale / 策略說明:** Catches papers using older / adjacent terminology — 'autonomous agent', 'tool-using LLM', 'language agent' — that frequently describe the same systems under different names. / 抓取使用較舊或鄰近術語的論文（autonomous agent、tool-using LLM、language agent），這些詞彙常常指涉同樣的系統但名稱不同。

### Q3: Mechanism + Theoretical Basis
**Query:** `("context engineering" OR "harness engineering" OR "prompt engineering for agents") AND ("context window" OR "long context" OR "memory" OR "context management") AND (LLM OR agent)`
**Rationale / 策略說明:** Finds the underlying engineering principles — how SOTA agents manage limited context, memory, and harness behavior — which is the central design problem of agentic systems. / 找出底層的工程原理 — SOTA agent 如何管理有限的 context、記憶與外殼行為，這是 agentic 系統的核心設計挑戰。

### Q4: Methodology + Evaluation (incl. industry tech reports)
**Query:** `("agent benchmark" OR "SWE-bench" OR "WebArena" OR "GAIA" OR "AgentBench" OR "OSWorld") AND ("open-source" OR "local" OR "open-weights" OR "Claude Code" OR "OpenClaw" OR "hermes-agent") AND (evaluation OR ablation OR benchmark OR "technical report" OR "engineering blog")`
**Rationale / 策略說明:** Targets empirical evidence — benchmark results, ablation studies, **and industry technical reports / engineering blogs** (Anthropic, OpenAI, HuggingFace, GitHub) comparing open-weights / local agents to frontier baselines. / 鎖定實證資料 — 基準測試結果、消融研究，並**納入產業技術報告與工程部落格**（Anthropic、OpenAI、HuggingFace、GitHub），比較開源／本地 agent 與前沿基線。

### Q5: Cross-Disciplinary + Adjacent Fields
**Query:** `("Model Context Protocol" OR MCP OR "tool integration" OR "agent extensibility") AND (sandbox OR "code execution" OR "computer use" OR "browser agent") AND (LLM OR agent OR "Claude Code" OR "OpenClaw" OR "hermes-agent" OR "open weights")`
**Rationale / 策略說明:** Broadens to ecosystem-level extension mechanisms — MCP, sandboxes, computer-use, browser agents — anchored on the three reference systems. / 擴展到生態系層級的擴充機制 — MCP、沙箱、computer-use、瀏覽器 agent — 並以三個錨點系統定錨。

---

> **Checkpoint 1: 初始定向核准**
>
> Please review the PICO framework and search queries above. / 請審查上方的 PICO 框架與搜尋查詢。
>
> - Are the PICO components accurate? / PICO 各元素是否正確？
> - Any missing keywords or synonyms? / 有遺漏的關鍵字或同義詞嗎？（e.g., 是否要加入 "Devin", "Cursor agent", "Continue", "Open Interpreter", "GPT-engineer" 等具體系統名稱？）
> - Any off-target dimensions to remove? / 有需要移除的偏離維度嗎？
> - Should we restrict to specific venues (NeurIPS / ICLR / arXiv only) or include industry tech blogs (Anthropic, OpenAI, HuggingFace)? / 要限制特定發表場域，還是要納入產業技術部落格？
>
> When ready, greenlight to proceed to `/research-search`. / 確認後請回覆「通過」/「approved」進入 Step 2 搜尋。

---

## Checkpoint 1 Resolution / 檢查點 1 結果

**Status / 狀態:** ✅ Approved (2026-05-22)
**User feedback / 使用者回饋:**
1. PICO accurate / PICO 正確
2. Added anchor systems: **Claude Code**, **OpenClaw**, **hermes-agent** (now embedded in Q1, Q4, Q5)
3. Include industry tech blogs (Anthropic, OpenAI, HuggingFace, GitHub) — Q4 now explicitly mentions "technical report" / "engineering blog"
4. Timeframe 2023–2026 retained

**Next step / 下一步:** Step 2 — `research-search` (multi-database literature search)
