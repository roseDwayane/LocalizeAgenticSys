---
schema_version: "1.0"
id: P_draft_OrcaLoca
type: point
name: "OrcaLoca (priority-scheduled localization)"
description: "Priority-scheduled software-issue localization; SWE-bench Lite 65.33% function match (open-source SOTA), +6.33pp resolved."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [harness, localization, scheduling]

domain: [AI]
field: [Coding Agents, Issue Localization]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T1_Coding_Agent_Harnesses, F_draft_T2_Context_Memory_Engineering]
related_body: []

source: "YuEtAl2025b"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
    - "step5_full_text/YuEtAl2025b.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# OrcaLoca (priority-scheduled localization)

> **核心主張**：把 software-issue localization 重新設計為 priority-scheduled 搜尋，並結合 context pruning——在 SWE-bench Lite 上達 65.33% function match rate（open-source SOTA），+6.33pp resolved。

## 來源
- 作者：Yu et al. (YuEtAl2025b)
- 年份：2025
- 出處：arXiv (OrcaLoca)
- citation key: `YuEtAl2025b`

## 目的
回答「software issue localization 該怎麼讓 LLM agent 高效率地找對檔案 + 函式？」

## 核心主張（展開）
OrcaLoca 採用 priority-scheduled search：把候選 file/function 排優先序，並做 context pruning（只把 top-priority 候選的 context 留在 prompt）。SWE-bench Lite function match 65.33%（open-source SOTA），resolved +6.33pp。與 ACE 的 priority-driven context curation 同屬「先 prioritize 再 prune」共識。

## 方法
工程：priority scoring of candidate locations；context pruning policy；在 SWE-bench Lite 端到端評估。

## 發現
- Function match 65.33%。
- Resolved +6.33pp。
- 對 GCC、ACE 等 context 管理工作提供 priority-scheduling 維度的證據。

## 啟發
- **被啟發**：[[P_draft_SWE_bench]] — 評估面；[[P_draft_ACE]] — 共享 priority-driven context curation。
- **啟發了**：[[F_draft_T1_Coding_Agent_Harnesses]] 在 localization 子問題的具體實踐。
