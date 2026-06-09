---
schema_version: "1.0"
id: F_draft_T2_Context_Memory_Engineering
type: plane
name: "Context & Memory Engineering for Long-Horizon Agents"
description: "The architectural plane for managing what an agent sees, remembers, and forgets across long-horizon tasks."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [theme_2, context_engineering, memory]

domain: [AI]
field: [Context Engineering, Memory]

status: draft
created: 2026-05-22
updated: 2026-05-22

member_points:
  - P_draft_ACE
  - P_draft_GCC
  - P_draft_Observation_Masking
  - P_draft_ACC
  - P_draft_PAACE
  - P_draft_ByteRover
  - P_draft_HaystackCraft
  - P_draft_Structural_Context_Model
  - P_draft_Externalization_Framework
  # Cross-listed
  - P_draft_Grep_beats_Vector  # primary T1
  - P_draft_OrcaLoca           # primary T1
  - P_draft_LoCoBench_Agent    # primary T4

adjacent_planes:
  - F_draft_T1_Coding_Agent_Harnesses
  - F_draft_T4_Agent_Benchmarks_Empirical
  - F_draft_T5_Generalist_Self_Improving

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-2"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# F_draft_T2 — Context & Memory Engineering for Long-Horizon Agents

## Q1 解決什麼問題？

回答：當 agent 必須跨多步、多 session、多工具呼叫工作時，context 與 memory 應該怎麼被組織、壓縮、版本化、外部化？

step6 Theme 2 §Landscape 原文：「This is the theme that has matured fastest in the 2025–2026 window. ZhangEtAl2025a coined 'Agentic Context Engineering' (ACE) as a discipline and immediately showed +10.6% on AppWorld and +8.6% on finance reasoning, while reducing adaptation latency by 86.9%.」

## Q2 核心概念有哪些？

step6 Theme 2 把 context management 分化為 6 種哲學，對應 corpus 中的 P 卡：

1. **Evolving playbook**：[[P_draft_ACE]] (ZhangEtAl2025a)
2. **Version-controlled snapshot**：[[P_draft_GCC]] (WuEtAl2025)
3. **Active compression / pruning**：[[P_draft_ACC]] (Verma2026), [[P_draft_PAACE]] (Yuksel2025)
4. **Agent-native curated memory**：[[P_draft_ByteRover]] (NguyenEtAl2026)
5. **Simple heuristic**：[[P_draft_Observation_Masking]] (LindenbauerEtAl2025)
6. **Formalisation**：[[P_draft_Structural_Context_Model]] (JiaEtAl2026)

統合框架：[[P_draft_Externalization_Framework]] (ZhouEtAl2026) — memory / skills / protocols / harness 四種 externalisation。

評估面 P 卡：[[P_draft_HaystackCraft]] (LiEtAl2025) 把 cascading agentic error 注入 long-context。

非升格 member：
- RoyEtAl2026 CEDAR — data-science 領域 context engineering（domain-specialisation of ACE）
- Haseeb2025 — multi-agent context workflow on Claude Code

## Q3 概念之間關係？

- [[E_draft_Externalization_Lineage]]：ACE / NLAH / ByteRover 全部是 externalisation 在 context/memory 軸的延伸。
- [[D_draft_Simple_Beats_Fancy]]：Observation Masking + Grep + ByteRover 是 simple 派；ACE / GCC / ACC / PAACE 是 fancy 派。**這個 debate 是 T2 內部最強的論點分歧**。
- [[A_draft_Externalization_vs_SelfImproving]]：ACE 是 agent-self-curated（externalisation × self-edit），與 AHE 等 self-improving 派同構。
- Frontmatter patches：
  - GCC / ACC / PAACE 共同 `related_lines` ACE (shared: structured context mgmt)
  - ByteRover `related_lines` Externalization_Framework (agent-native externalisation)
  - Grep_beats_Vector ↔ ByteRover (anti-vector-DB)
  - OrcaLoca ↔ ACE (priority + context pruning)
  - Structural_Context_Model ↔ Externalization_Framework (formal context model)

## Q4 常用方法？

step6 Theme 2 §Methodological patterns 點名兩條方法論收斂：

1. **評估面收斂**：SWE-bench Verified（LindenbauerEtAl2025、WuEtAl2025、Verma2026）、AppWorld（ZhangEtAl2025a、Yuksel2025）、LongMemEval/LoCoMo（NguyenEtAl2026）。
2. **Cost-per-success 取代 raw success**：所有 ablation 都隔離 context length × token cost；很少論文還只報 raw resolved rate。

關鍵方法論轉向：**inference-time substitution** —— ZhangEtAl2025a 明確說「ACE adapts effectively without labeled supervision … by leveraging natural execution feedback」；LindenbauerEtAl2025 整個貢獻都是 inference-time 替換。retraining 路線在這個 theme 已被邊緣化。

## Q5 常見錯誤？

step6 Theme 2 §Open issues 點名：

1. **Context 策略與 harness 強耦合，但常被當成可獨立評估**：SenEtAl2026 顯示同樣的 retrieval 在 Claude Code vs Codex vs Gemini CLI 下表現差很多。把 context strategy 從 harness 抽離評估會誤導。
2. **跨域過度推廣**：LindenbauerEtAl2025 明確警告「only validates observation masking on SE workloads … cautions against generalising to domains where tool outputs are succinct」。違反此 caution 是常見錯誤。
3. **ByteRover (agent-native memory) 與 ACE (evolving playbook) 兩種主流 external memory 缺直接對照**——step6 §Open issues 直接點名為空白。
4. **無 compression 觸發共識**：何時該壓縮 context，每篇論文用不同 trigger（token threshold、plan-step boundary、manual command）。沒有 cross-paper 標準。

step6 Theme 2 §What is contested:
- 「dense retrieval 對 long-memory agent 是否必要？」SenEtAl2026 與 ByteRover 顯示「不必要」；但 corpus 外的 RAG 文獻假設「必要」——這是隱性錯誤前提。

(待補：需 /research step 7 後補入 GAP 證據 — 預期 step7 會 lock "ByteRover vs ACE 同系統對照" 與 "compression trigger 標準化" 為主要 GAP；CEDAR 在領域特化下的 generalisability 亦可能被 lock。)
