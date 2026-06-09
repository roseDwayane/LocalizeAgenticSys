---
schema_version: "1.0"
id: F_draft_T5_Generalist_Self_Improving
type: plane
name: "Generalist & Self-Improving Agent Frameworks"
description: "The plane of agents that self-construct capability, self-improve their scaffolds, or generalise across task families."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [theme_5, generalist_agent, self_improving]

domain: [AI]
field: [Generalist Agents, Self-Improving]

status: draft
created: 2026-05-22
updated: 2026-05-22

member_points:
  - P_draft_Magentic_One
  - P_draft_Alita
  - P_draft_HGM
  - P_draft_AWorld
  - P_draft_OpenHands_Versa
  - P_draft_WangEtAl2024a_LLMAgent_Survey
  # Cross-listed
  - P_draft_AHE         # primary T1
  - P_draft_OAgents     # primary T4

adjacent_planes:
  - F_draft_T1_Coding_Agent_Harnesses
  - F_draft_T3_MCP_Tool_Protocols
  - F_draft_T6_Local_Inference_Serving
  - F_draft_T4_Agent_Benchmarks_Empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-5"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# F_draft_T5 — Generalist & Self-Improving Agent Frameworks

## Q1 解決什麼問題？

回答：能不能造出「跨任務通用」或「自我成長 capability」的 agent？什麼樣的架構模式最能 scale 與 transfer？

step6 Theme 5 §Landscape：「This is the theme the Step-2 clustering had distributed across `coding_agents_and_harness` and `benchmarks_and_evaluation`, but the papers form a clear cross-cluster strand: agents that *self-construct capabilities*, *self-improve their own scaffolds*, or *generalise across task families*.」

## Q2 核心概念有哪些？

step6 Theme 5 §Methodological patterns 點出三類架構模式，對應 corpus 中的 P 卡：

### (a) Multi-agent orchestration + role specialisation
- [[P_draft_Magentic_One]] (FourneyEtAl2024) — Orchestrator + FileSurfer / WebSurfer / Coder / ComputerTerminal。
- 非升格：AutoAgent (TangEtAl2025) 與 Cerebrum (RamaEtAl2025) 皆屬此類。

### (b) Self-evolution via search over self-modifications
- [[P_draft_HGM]] (WangEtAl2025b) — Tree search + Clade Metric for Performance (CMP)。
- [[P_draft_Alita]] (QiuEtAl2025a) — Run-time MCP 自生成 + minimal predefinition；GAIA pass@1 75.15%。
- [[P_draft_AHE]] — Cross-listed primary T1，但方法論屬此類。

### (c) Minimalist generalists
- [[P_draft_OpenHands_Versa]] — Cross-listed primary T5：4-tool generalist beats specialists on 3 benchmarks。
- [[P_draft_Alita]] 的「Simplicity is the ultimate sophistication」也屬此類。

### 傘狀引用
- [[P_draft_WangEtAl2024a_LLMAgent_Survey]] — 1,058 citations，corpus 中被引最多。

### 訓練配方
- [[P_draft_AWorld]] (YuEtAl2025a) — Open-source training stack；Qwen3-32B beat GPT-4o on GAIA。

### 評估面（跨 listed）
- [[P_draft_OAgents]] — Reproducibility on GAIA。

非升格 member：
- Wu2025 Autono — ReAct-based highly robust framework
- RamaEtAl2025 Cerebrum / AIOS SDK
- TangEtAl2025 AutoAgent — zero-code natural-language agent creation

## Q3 概念之間關係？

- [[A_draft_Externalization_vs_SelfImproving]] — Self-improving 派與 externalisation 派的結構同形分析；T5 是 self-improving 軸的主要承載 plane。
- [[D_draft_Simple_Beats_Fancy]] — T5 內 OpenHands-Versa / Alita 是 simple 派；HGM / AHE 是 fancy（但 controlled）派——step6 §Open issues 直接點名兩派缺 controlled 對照。
- [[E_draft_Externalization_Lineage]] — AHE 與 Alita 在 lineage 末端（self-improving stage）。
- Frontmatter patches:
  - Magentic_One `caused_by` WangEtAl2024a_LLMAgent_Survey（framework reference）。
  - Alita `depends_on` Magentic_One（cites）+ MCP_Protocol（self-generates MCPs）。
  - HGM ↔ AHE `related_lines`（shared: self-evolving agents）。
  - AWorld ↔ SmallThinker / MCP_Bridge `related_lines`（Qwen3 local stack）。
  - AutoAgent / Cerebrum 在 _skipped.md 但於 frontmatter 透過 Magentic_One 的 lineage 補引。

## Q4 常用方法？

step6 Theme 5 §Methodological patterns 點名：

1. **GAIA + BrowseComp 為主要評估面**：Magentic-One 35.1% val；Alita 75.15% pass@1 / 87.27% pass@3；OAgents 73.93%；AWorld Qwen3-32B 32.23% test > GPT-4o 27.91%。
2. **Self-modification search**：HGM 用 tree + CMP；Alita 用 MCP-generation；AHE 用 7-component closed-loop。
3. **Minimalism as design principle**：OpenHands-Versa 4-tool；Alita minimal predefinition。
4. **Open-weights training stack 完整公開**：AWorld 是 T5 中唯一完整 open 訓練 recipe；MCP-AgentBench 在 T3 確認 Qwen3 系列 MCP 上競爭力。

## Q5 常見錯誤？

step6 Theme 5 §Open issues 直接點名：

1. **缺 self-evolving vs minimalist-fixed 同任務分布對照**：HGM、Alita、AHE 各自 SOTA 但在不同 benchmark 上；OpenHands-Versa、OAgents 也各自 SOTA 但在另一組 benchmark。沒有 controlled 對照。
2. **Cost-of-evolution 未被量化**：「The cost-of-evolution question — how many compute-hours / dollars buy each marginal point of self-improvement — is unaddressed.」
3. **依賴 proprietary frontier model**：「Most of these systems are evaluated with proprietary frontier models in the loop (GPT-5, Claude 4, GPT-4o); only AWorld and Alita's MCP-generation pipeline have been demonstrated end-to-end on open weights.」對 user 的 local agent 路線是直接利害關係。
4. **Single-run 結論**：與 T4 共享的 reproducibility 問題在 T5 同樣嚴重——OAgents 點名的危機適用於整個 T5。

(待補：需 /research step 7 後補入 GAP 證據 — 預期 step7 會 lock "self-evolving vs minimalist-fixed 對照"、"open-weights end-to-end self-improvement" 為 T5 主要 GAP；以及 cost-of-evolution metric 缺失。)
