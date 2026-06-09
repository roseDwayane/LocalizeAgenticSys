---
schema_version: "1.0"
id: P_draft_SWE_bench
type: point
name: "SWE-bench (real-world GitHub issue benchmark)"
description: "2,294 issues × 12 Python repos; the unavoidable backbone benchmark for coding agents (in-degree 10 in this corpus)."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [benchmark, foundational, hub]

domain: [AI]
field: [Benchmarks, Coding Agents]

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

source: "Jimenez-GomezEtAl2023"
year: 2023
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-4"
    - "step5_full_text/Jimenez-GomezEtAl2023.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# SWE-bench (real-world GitHub issue benchmark)

> **核心主張**：把 2,294 個 real GitHub issue 跨 12 個 Python repo 包成 reproducible benchmark，使 coding agent 的能力可被量化——成為 corpus 中 in-degree 最高（10）的 hub 論文。

## 來源
- 作者：Jimenez-Gomez et al. (Jimenez-GomezEtAl2023)
- 年份：2023
- 出處：ICLR / arXiv
- citation key: `Jimenez-GomezEtAl2023`

## 目的
回答「能不能把『coding agent 能否解 GitHub issue』變成一個可重現、可比較的 benchmark？」

## 核心主張（展開）
SWE-bench 從 12 個熱門 Python repo 挖出 2,294 個 issue + PR 對，每個都附 test，使 agent 必須產生能通過原 PR 測試的 patch。發表時 best LM (Claude 2) 只解 1.96%——一個明顯極低的 baseline。然而 SWE-bench 此後成為 corpus in-degree 第一的 benchmark hub（被 10 篇引用為直接評估面），所有 harness 與 context 研究都以它為參照。SWE-bench Verified（人工驗證版）與 SWE-bench Live (ZhangEtAl2025c) 是其後續演化。

## 方法
建構：自動 mine GitHub PR + test；驗證 test 在 issue 環境可執行；產生 reproducible Docker container。

## 發現
- 2023 best LM 1.96% → 2025/2026 best 已 >80%（如 GCC 在 SWE-bench Verified 上 +13% / 絕對 >80%）。
- 但 SWE-bench-Live 顯示 top model 在 fresh post-2024 issue 仍只 19.25%——飽和 + 污染問題顯著。
- ZhuEtAl2025 點名其單次跑分變異大、缺乏標準 protocol。

## 啟發
- **被啟發**：軟體工程的 issue tracker 文化。
- **啟發了**：[[P_draft_SWE_agent_ACI]]、[[P_draft_SWE_bench_Live]]、[[P_draft_LoCoBench_Agent]]、[[P_draft_HGM]]、[[P_draft_AIDev]]、[[P_draft_OAgents]] 等大量後續研究；是 [[F_draft_T4_Agent_Benchmarks_Empirical]] 的中心。
