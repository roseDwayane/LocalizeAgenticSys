---
schema_version: "1.0"
id: P_draft_LoCoBench_Agent
type: point
name: "LoCoBench-Agent (interactive long-context benchmark)"
description: "8,000 long-context interactive scenarios with 9 metrics; 128K-context models outperform 1M-context models on multi-session retention."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [benchmark, long_context, interactive]

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
related_planes: [F_draft_T4_Agent_Benchmarks_Empirical, F_draft_T2_Context_Memory_Engineering]
related_body: []

source: "QiuEtAl2025b"
year: 2025
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-4"
    - "step5_full_text/QiuEtAl2025b.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# LoCoBench-Agent (interactive long-context benchmark)

> **核心主張**：把 long-context evaluation 從 static needle-in-haystack 改成 8,000 個 interactive scenario + 9 維 metric，揭示「128K-context 模型在 multi-session retention 上反而勝過 1M-context 模型」這個反直覺發現。

## 來源
- 作者：Qiu et al. (QiuEtAl2025b)
- 年份：2025
- 出處：arXiv (LoCoBench-Agent)
- citation key: `QiuEtAl2025b`

## 目的
回答「long-context 模型的真實 multi-session 工作表現是什麼？context window 越大越好嗎？」

## 核心主張（展開）
LoCoBench-Agent 用 8,000 個 interactive scenario（10K–1M tokens）測試 agent 的長時序工作能力，並設計 9 個維度 metric（包含 retention、coherence、tool-use 等）。反直覺結果：128K-context 模型在 multi-session retention 上優於 1M-context 模型——表示「大 window 就好」是錯的，retention quality 與 window size 不單調。

## 方法
建構：8,000 個 scenario；9 metric；對照不同 context-length 模型在 multi-session 設定下的 retention。

## 發現
- 128K > 1M 在 multi-session retention（樣本 × 8 token 少）。
- 9 維 metric 把 long-context eval 從「Pass」單值升級為多維評估。
- 與 HaystackCraft 同屬「下一代 long-context 評估」family。

## 啟發
- **被啟發**：[[P_draft_SWE_bench]] — 把 SWE-bench 多步驟風格延伸到 long-context；[[P_draft_HaystackCraft]] — 互補。
- **啟發了**：[[P_draft_ACE]] / [[P_draft_PAACE]] — context engineering 派可在這個 benchmark 上重新驗證自己的論點。
