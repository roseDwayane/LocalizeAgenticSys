---
schema_version: "1.0"
id: P_draft_HaystackCraft
type: point
name: "HaystackCraft (cascading-error long-context benchmark)"
description: "Wikipedia hyperlink-graph benchmark that injects cascading agentic errors into long-context evaluation; even Gemini 2.5 Pro / GPT-5 show cascading failure."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [benchmark, long_context, robustness]

domain: [AI]
field: [Benchmarks, Long Context]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T2_Context_Memory_Engineering, F_draft_T4_Agent_Benchmarks_Empirical]
related_body: []

source: "LiEtAl2025"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-2"
    - "step6_sota_review.md#theme-4"
    - "step5_full_text/LiEtAl2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# HaystackCraft (cascading-error long-context benchmark)

> **核心主張**：把 long-context evaluation 從「能不能找到 needle」升級成「能不能在錯誤層層累積後復原」——以 Wikipedia hyperlink graph 為背景注入 cascading agentic errors，揭示 Gemini 2.5 Pro / GPT-5 等 frontier 模型仍會累積性失敗。

## 來源
- 作者：Li, Mufei et al. (LiEtAl2025)
- 年份：2025
- 出處：arXiv ("Haystack Engineering")
- citation key: `LiEtAl2025`

## 目的
回答「現有 long-context benchmark 是否低估了 agent 在 noisy / multi-hop 條件下的失敗模式？」

## 核心主張（展開）
LiEtAl2025 用 Wikipedia hyperlink graph 作為 background corpus，注入 cascading agentic errors（每一步小錯都會被下一步放大）。Frontier 模型如 Gemini 2.5 Pro、GPT-5 在這個 benchmark 上呈現顯著的 cascading agentic failure 模式。HaystackCraft 因此是首個 explicit 把 cascading error 寫進 benchmark 設計的研究。

## 方法
建構：以 Wikipedia hyperlink graph 作為 context source → 注入可控制的 noisy / contradictory chunk → 設計 multi-hop 任務 → 量測各 frontier 模型的失敗模式。

## 發現
- Even Gemini 2.5 Pro / GPT-5 顯示 cascading agentic failure。
- 是 long-context benchmark 中對 agent robustness 最 informative 的一支。
- 與 QiuEtAl2025b LoCoBench-Agent 共同代表「下一代 long-context eval」方向。

## 啟發
- **被啟發**：[[P_draft_SWE_bench]] — 同樣以 real-world data 構建 benchmark。
- **啟發了**：[[P_draft_LoCoBench_Agent]] — 共享 long-context interactive eval 範式。
