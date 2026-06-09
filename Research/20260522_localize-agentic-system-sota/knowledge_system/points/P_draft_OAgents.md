---
schema_version: "1.0"
id: P_draft_OAgents
type: point
name: "OAgents (reproducibility-protocol empirical study)"
description: "Named the reproducibility crisis: 'lack of standard evaluation protocol makes previous works, even open-sourced ones, non-reproducible with significant variance between random runs.' OAgents-Pass@3 73.93% on GAIA."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [empirical, reproducibility, methodology]

domain: [AI]
field: [Benchmarks, Methodology]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T4_Agent_Benchmarks_Empirical, F_draft_T5_Generalist_Self_Improving]
related_body: []

source: "ZhuEtAl2025"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-4"
    - "step6_sota_review.md#theme-5"
    - "step5_full_text/ZhuEtAl2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# OAgents (reproducibility-protocol empirical study)

> **核心主張**：當前 agent 文獻有結構性的 reproducibility 危機——OAgents 直接點名「缺乏標準 evaluation protocol 使得先前研究（包含 open-source）不可重現，random run 之間變異顯著」並提出 OAgents 作為對策；OAgents-Pass@3 在 GAIA 達 73.93%。

## 來源
- 作者：Zhu et al. (ZhuEtAl2025)
- 年份：2025
- 出處：arXiv (OAgents)
- citation key: `ZhuEtAl2025`

## 目的
回答「為什麼相同 agent 在不同 lab 跑出的數字差這麼多？」

## 核心主張（展開）
OAgents 做受控 empirical study：把 same agent 在 same task 重複跑數次，量化跨 run 變異；發現變異往往大於宣稱的進步幅度。論文把「lack of standardized protocol」明確點名為文獻的結構性問題，並提供 OAgents 作為候選 protocol；OAgents-Pass@3 平均 73.93%。

## 方法
受控重複跑：固定 base model、harness、task；做數十次 run；量化平均 + 變異。

## 發現
- Random-run variance 大到讓多數論文結論不可比。
- OAgents-Pass@3 73.93% 在 GAIA 上 highest average。
- 點名 reproducibility 危機是其最具影響力的方法論貢獻。

## 啟發
- **被啟發**：[[P_draft_SWE_bench]]、[[P_draft_SWE_bench_Live]] — 共享「benchmark variance」觀察。
- **啟發了**：對後續所有 harness 與 context 論文施加更嚴的 protocol 要求；構成 [[F_draft_T4_Agent_Benchmarks_Empirical]] 中 reproducibility 軸的核心。
