---
schema_version: "1.0"
id: P_draft_AIDev
type: point
name: "AIDev (932K Agentic-PR observational study)"
description: "932,791 agentic PRs across 116,211 repos from Codex / Devin / GitHub Copilot / Cursor / Claude Code — first large-scale comparative dataset of coding-agent behaviour."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [empirical, observational, scale]

domain: [AI]
field: [Coding Agents, Empirical Studies]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T4_Agent_Benchmarks_Empirical]
related_body: []

source: "LiEtAl2026"
year: 2026
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-4"
    - "step5_full_text/LiEtAl2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# AIDev (932K Agentic-PR observational study)

> **核心主張**：以 932,791 個 agentic PR 跨 116,211 個 repo 的觀察級資料集，提供首個 production coding agent 跨家族（Codex / Devin / Copilot / Cursor / Claude Code）的比較尺度。

## 來源
- 作者：Li, Hao; Zhang, Haoxiang; Hassan (LiEtAl2026)
- 年份：2026
- 出處：arXiv (AIDev)
- citation key: `LiEtAl2026`

## 目的
回答「production 上不同 AI coding agent 的行為到底怎麼樣？能不能跨家族做大規模比較？」

## 核心主張（展開）
AIDev 從 GitHub 抓 932,791 個由 AI agent 產生的 PR（Codex、Devin、GitHub Copilot、Cursor、Claude Code），跨 116K repo。它是 corpus 中 production agent 比較資料規模最大的一篇——其他研究都是少數 agent × 少數 task；AIDev 是 5 家 agent × 百萬量級 PR。Claude Code 也在 5 家之列，是 user anchor system 的直接 production observation。

## 方法
資料工程：GitHub crawl + AI-author signature 識別 + 五個 agent 家族分類；提供 schema + 公開資料集。

## 發現
- 五大 agent 之間的 PR success rate、review pattern、commit size、language distribution 有顯著差異。
- 為任何後續 production-agent 行為研究提供 ground truth。
- 是 step6 「engineering 實證大量集中於 Claude Code」這條 open issue 的代表。

## 啟發
- **被啟發**：[[P_draft_SWE_bench]] — 觀念上的真實世界版本。
- **啟發了**：[[P_draft_Engineering_Pitfalls]] — bug 視角研究；對 step7 GAP「OpenHands 的第三方 production 觀察缺」直接相關。
