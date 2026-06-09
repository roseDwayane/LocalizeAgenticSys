---
schema_version: "1.0"
id: P_draft_ACC
type: point
name: "ACC — Active Context Compression"
description: "Autonomous consolidation and pruning of agent memory yields −22.7% tokens at constant SWE-bench performance."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [context_engineering, compression, cost_reduction]

domain: [AI]
field: [Context Engineering]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T2_Context_Memory_Engineering]
related_body: []

source: "Verma2026"
year: 2026
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-2"
    - "step5_full_text/Verma2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# ACC — Active Context Compression

> **核心主張**：讓 agent 自主決定 context 中哪些段落應該被 consolidate / prune，可以在 SWE-bench 不掉效能下節省 22.7% token。

## 來源
- 作者：Verma (Verma2026)
- 年份：2026
- 出處：arXiv ("Active Context Compression")
- citation key: `Verma2026`

## 目的
回答「能否把 context 壓縮從靜態 heuristic 改為 agent-driven 的 active decision？」

## 核心主張（展開）
ACC 不是固定窗口或 sliding-window 壓縮，而是讓 agent 主動 inspect 自身 context 並決定哪些 chunk 該 consolidate（壓成摘要）或 prune（直接丟棄）。在 SWE-bench 上 token −22.7%、success 保持 parity。與 ACE 同屬「自動 context curation」家族但著重 compression-side。

## 方法
工程實作：把 compression decision 暴露給 agent 作為一個 tool action → 在 SWE-bench 上端到端對照 baseline context window。

## 發現
- Token −22.7% at constant success rate。
- Agent-driven 比 heuristic-driven 在 long trajectory 更有彈性。
- 與 PAACE 的 plan-aware 視角形成方法論補集。

## 啟發
- **被啟發**：[[P_draft_ACE]] — 共享 context-as-evolving-artifact 前提。
- **啟發了**：[[P_draft_PAACE]] — plan-aware 是 ACC 的延伸；構成 [[E_draft_Externalization_Lineage]] 在 context-engineering 軸的一節。
