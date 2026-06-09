---
schema_version: "1.0"
id: P_draft_Cost_of_Pass
type: point
name: "Cost-of-Pass (Efficient Agents framework)"
description: "Cost-per-success metric: Efficient Agents reach 96.7% of OWL performance at $0.228/task vs $0.398 — −28.4% cost-of-pass."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [metric, cost_aware, evaluation]

domain: [AI]
field: [Evaluation, Cost]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T6_Local_Inference_Serving, F_draft_T4_Agent_Benchmarks_Empirical]
related_body: []

source: "WangEtAl2025a"
year: 2025
claim_type: conceptual

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-6"
    - "step6_sota_review.md#cross-theme-5"
    - "step5_full_text/WangEtAl2025a.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Cost-of-Pass (Efficient Agents framework)

> **核心主張**：把 agent 評估從 raw success 升級為 cost-per-success（cost-of-pass）——Efficient Agents 在保持 96.7% OWL 表現的同時把 $/task 從 0.398 降到 0.228（−28.4% cost-of-pass）——這個 metric 應該成為 context / harness 文獻的默認指標。

## 來源
- 作者：Wang et al. (WangEtAl2025a)
- 年份：2025
- 出處：arXiv ("Efficient Agents")
- citation key: `WangEtAl2025a`

## 目的
回答「agent 進步應該怎麼量？raw success 還是 $/success？」

## 核心主張（展開）
WangEtAl2025a 觀察到 corpus 大量論文以 raw success 為主指標，但 production 真正關心的是「達成某成功率所需 cost」。提出 cost-of-pass（$/successful task）作為主指標，並以 Efficient Agents 框架展示：在保持 96.7% OWL 表現下把單 task 成本從 $0.398 降到 $0.228——降幅 28.4%。step6 cross-theme #5 點名「cost-of-pass 還沒在 Theme 2 / 3 普及」是當前文獻的方法論缺口。

## 方法
框架 + 工程：定義 cost-of-pass 指標；建構 Efficient Agents framework；端到端對照成本與成功率。

## 發現
- 96.7% performance at −28.4% cost-of-pass。
- Cost-of-pass 在 corpus 中只有 WangEtAl2025a 與 FAME / Autellix 在用，是大量論文缺的 metric。
- 對 user 的 local agent 路線（cost 敏感）特別 relevant。

## 啟發
- **被啟發**：[[P_draft_AWQ]]、[[P_draft_Autellix]]、[[P_draft_FAME]]、[[P_draft_PAACE]] — 都在「成本」側做貢獻但沒共用 metric。
- **啟發了**：對 step7 預期會把「cost-of-pass 未普及」列為 methodological GAP；對 [[F_draft_T6_Local_Inference_Serving]] 的可被引用評估 metric 來源。
