---
schema_version: "1.0"
id: P_draft_PAACE
type: point
name: "PAACE — Plan-Aware Automated Agent Context Engineering"
description: "Plan-aware next-k-task compression cuts input tokens 35–60% at <8% latency penalty; PAACE-FT keeps 97% teacher performance."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [context_engineering, compression, plan_aware]

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

source: "Yuksel2025"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-2"
    - "step5_full_text/Yuksel2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# PAACE — Plan-Aware Automated Agent Context Engineering

> **核心主張**：根據 agent 的下一個 k 個計畫步驟動態壓縮 context，可減 35–60% input tokens、延遲只增加不到 8%；PAACE-FT 蒸餾版可保留 97% teacher 表現。

## 來源
- 作者：Yuksel (Yuksel2025)
- 年份：2025
- 出處：arXiv (PAACE)
- citation key: `Yuksel2025`

## 目的
回答「context 壓縮要怎麼決定『哪些資訊立刻會用到』？」——把 plan structure 作為壓縮 trigger。

## 核心主張（展開）
PAACE 把 agent 已生成的 next-k-task plan 作為壓縮的相關性訊號：與 next-k 強相關的 context chunk 保留、弱相關的壓縮。在 AppWorld 等場景下節省 35-60% 輸入 token、增加不到 8% 延遲。並提供 PAACE-FT 蒸餾版以更低成本保留 97% 教師模型表現。

## 方法
工程實作 + 蒸餾：把 plan-aware compression 接到 ACE-style 框架；用 teacher–student 蒸餾把 compression decision 壓進小模型。

## 發現
- −35…−60% input tokens, <8% latency cost。
- PAACE-FT 在小模型下達 97% teacher performance——對 local 部署直接友善。
- 與 ACC 的 active compression 形成互補（PAACE = plan-driven, ACC = agent-curation-driven）。

## 啟發
- **被啟發**：[[P_draft_ACE]]、[[P_draft_ACC]] — 同屬 context-engineering family。
- **啟發了**：[[P_draft_Cost_of_Pass]] — token 節省可進入 cost-of-pass 評估。
