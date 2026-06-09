---
schema_version: "1.0"
id: D_draft_Simple_Beats_Fancy
type: line
relation_type: debate
name: "Simple vs Fancy — how much machinery does a local agent actually need?"
endpoints:
  # Simple 派
  - P_draft_Observation_Masking
  - P_draft_Grep_beats_Vector
  - P_draft_OpenHands_Versa
  - P_draft_AGENTS_md_Effect
  - P_draft_NLAH
  - P_draft_ClaudeCode
  - P_draft_Alita
  - P_draft_ByteRover
  # Fancy 派
  - P_draft_ScaleMCP
  - P_draft_FAME
  - P_draft_ACE
  - P_draft_GCC
  - P_draft_AHE
  - P_draft_HGM

status: draft
created: 2026-05-22
updated: 2026-05-22

related_planes: [F_draft_T1_Coding_Agent_Harnesses, F_draft_T2_Context_Memory_Engineering, F_draft_T3_MCP_Tool_Protocols, F_draft_T5_Generalist_Self_Improving]
related_body: []

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#cross-theme-2"
    - "step6_sota_review.md#sota-summary-contested"
    - "step6_sota_review.md#executive-summary"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# D_draft — Simple Beats Fancy

> step6 Executive Summary 直接點名：「the field has converged on harness/context engineering as the dominant lever, but has not yet converged on how much machinery a local agent actually needs — a tension the user's own engineering question lives inside.」這是 corpus 中最強的 named tension。

## 爭論軸

「在固定 base model 與 task 下，達成 X% success 所需的 infrastructure 應該多大？」
- *Simple 派*：「越少越好；先量到瓶頸再加。」
- *Fancy 派*：「production 需要 scale，必須前置 infrastructure（scale tool registry、自動 compression、自演化 harness）。」

## Simple 派主張

| 論文 | Lever | 量到的 win |
|---|---|---|
| LindenbauerEtAl2025 | Observation masking（無 LLM 參與的 heuristic） | ½ cost at parity vs LLM-summary |
| SenEtAl2026 | grep（lexical） vs vector retrieval | 三個 CLI 上 grep 不輸甚至勝 |
| SoniEtAl2025 (OpenHands-Versa) | 4 個 general tool | +9.1 / +1.3 / +9.1 pp on 3 benchmarks |
| LullaEtAl2026 (AGENTS.md) | 一份 markdown 設定檔 | −28.64% runtime |
| PanEtAl2026 (NLAH) | 2.9k-token NL 文件取代 60.1k code | success comparable |
| LiuEtAl2026 (Claude Code) | 簡單 while-loop 為核心 | production-grade scaffold |
| QiuEtAl2025a (Alita) | minimal predefinition + self-evolution | 75.15% pass@1 on GAIA |
| NguyenEtAl2026 (ByteRover) | 無 vector DB | SOTA on LoCoMo |

## Fancy 派主張

| 論文 | Lever | 為何複雜是必要 |
|---|---|---|
| LumerEtAl2025 (ScaleMCP) | 5K-server CRUD-synced retrieval | 「5K MCP server 規模下 static registry 不可行」 |
| KulkarniEtAl2026 (FAME) | ReAct 拆成 FaaS Planner/Actor/Evaluator | 13× latency cut, −66% cost 在 production MCP 工作負載上需要 program-aware serving |
| ZhangEtAl2025a (ACE) | Evolving playbook + structured update rule | +10.6% AppWorld, latency −86.9%：context 不能 stateless |
| WuEtAl2025 (GCC) | Git COMMIT/BRANCH/MERGE | +13% SWE-bench Verified；long-horizon 任務需要 version control |
| LinEtAl2026 (AHE) | 7-component 自動演化 harness | +7.3pp on TB2 + cross-model transfer |
| WangEtAl2025b (HGM) | Tree search over self-modifications + CMP | human-level on SWE-bench Verified |

## 證據對比

| 比較維度 | Simple 派證據 | Fancy 派證據 | 同向 / 異向 |
|---|---|---|---|
| 跨 benchmark 廣度 | ≥7 個獨立 finding (step6 §cross-theme #2) | ACE / GCC / AHE / HGM 各自單 benchmark | Simple 派的廣度勝 |
| Cost-of-pass | LindenbauerEtAl2025 ½ cost, LullaEtAl2026 −28%, NLAH −95% token | FAME −66% cost; PAACE −35-60% token | 兩派都 cost-aware |
| Cross-model robustness | AGENTS.md 在多家 agent 上量到效應 | AHE 宣稱 cross-base-model transfer 但測試規模有限 | Simple 派證據較分散但更廣，Fancy 派 deep but narrow |
| Production maturity | Claude Code 是 production deployed | 多數 fancy 派仍 research-stage | Simple 派在 production 顯著 |

## 解套提案

step6 §Implications 給出 actionable 建議，本質是「先 simple，再依 observability 加 fancy」：
1. 起點：簡單 while-loop + 小工具集 + AGENTS.md（這就帶 −28% runtime）。
2. 加 fancy 的 trigger 條件：(a) MCP server 數量 → 上百才考慮 ScaleMCP；(b) Long-horizon task → context >100K token 才考慮 GCC/ACE；(c) 多階段 latency → 才考慮 FAME/Autellix。
3. Self-evolution（AHE/HGM）只在你已能可靠 measure 並 reproduce 自己 baseline 後再加。

## 對 user 的意義

User 的 PICO 強調「local」與「state-of-the-art」。這條 debate 直接決定 user 的工程策略：**先以 Simple 派為起點**（local 下硬體預算少、infra 簡單，符合 simple-派證據鏈），**再依 OAgents-style 標準 protocol 量測自身瓶頸**，**只在 measurement 顯示需要時引入 fancy 元件**。Step6 Executive Summary 已預先警告：「the field has converged ... but has not converged ... a tension the user's own engineering question lives inside」——意味 user 是「先簡後繁」與「先繁後簡」決策的真正主體。
