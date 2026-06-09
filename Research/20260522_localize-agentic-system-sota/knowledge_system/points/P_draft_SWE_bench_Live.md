---
schema_version: "1.0"
id: P_draft_SWE_bench_Live
type: point
name: "SWE-bench-Live (continuously updated SWE benchmark)"
description: "1,319 fresh post-2024 issues × 93 repos; top SOTA drops from >60% (Verified) to 19.25% — sharp contamination/recency signal."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [benchmark, contamination, recency]

domain: [AI]
field: [Benchmarks, Coding Agents]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent: P_draft_SWE_bench
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T4_Agent_Benchmarks_Empirical]
related_body: []

source: "ZhangEtAl2025c"
year: 2025
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-4"
    - "step5_full_text/ZhangEtAl2025c.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# SWE-bench-Live (continuously updated SWE benchmark)

> **核心主張**：把 SWE-bench 從 static set 改為持續更新的 live set——把 1,319 個 post-2024 fresh issue 跨 93 個 repo 餵進來，top SOTA agent 的 resolved rate 從 >60% (Verified) 摔到 19.25%，顯示 contamination + recency 是 SWE-bench Verified 高分的重要解釋。

## 來源
- 作者：Zhang et al. (ZhangEtAl2025c)
- 年份：2025
- 出處：arXiv (SWE-bench Goes Live!)
- citation key: `ZhangEtAl2025c`

## 目的
回答「SWE-bench Verified 上的高分有多少來自真 capability、多少來自訓練資料污染？」

## 核心主張（展開）
SWE-bench-Live 自動 mine 2024 年後的 fresh issue（1,319 個 × 93 repo），確保模型在訓練時不可能見過。Top SOTA agent 的 resolved rate 在 Verified 上 >60%，在 Live 上摔到 19.25%。這是 corpus 中對「SWE-bench saturation 是因為模型真的進步」假設最 decisive 的反駁——大幅落差表明 contamination + recency 解釋了相當部分。

## 方法
建構：自動 PR mining pipeline 持續抓 2024+ issues；93 repo cover；對照 same agent 在 Verified vs Live 的差距。

## 發現
- Top SOTA: Verified >60% → Live 19.25%。
- Recency / contamination 是顯著 confound。
- 此後每篇做 SWE-bench 評估的論文都被建議至少標記 Verified vs Live 結果。

## 啟發
- **被啟發**：[[P_draft_SWE_bench]] — 直接延伸。
- **啟發了**：[[P_draft_LoCoBench_Agent]] — long-context interactive 是另一條 anti-saturation 路線；[[P_draft_OAgents]] — 共享 reproducibility / variance 觀察。
