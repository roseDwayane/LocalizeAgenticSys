---
schema_version: "1.0"
id: P_draft_SmallThinker
type: point
name: "SmallThinker (natively-local LLM family)"
description: "Sparse-MoE LLM family natively trained with quantisation support; 20+ tokens/s on consumer CPU."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [local_inference, MoE, model_architecture]

domain: [AI]
field: [Local Inference, Model Architecture]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: [P_draft_AWQ]
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T6_Local_Inference_Serving]
related_body: []

source: "SongEtAl2025b"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-6"
    - "step5_full_text/SongEtAl2025b.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# SmallThinker (natively-local LLM family)

> **核心主張**：以 sparse-MoE + 原生 quantisation 支援架構出的 LLM 家族，可在消費級 CPU 上跑出 20+ tokens/s——把「本地 LLM」從『勉強跑起來』升級為『可用 throughput』。

## 來源
- 作者：Song et al. (SongEtAl2025b)
- 年份：2025
- 出處：arXiv (SmallThinker)
- citation key: `SongEtAl2025b`

## 目的
回答「能不能設計一個專為本地部署而生的 LLM 架構？」

## 核心主張（展開）
SmallThinker 是少數從架構層就為「本地部署」優化的 LLM 家族：sparse-MoE 降低 active parameter、原生支援量化（與 AWQ 一脈相承）、跑在消費級 CPU 上達 20+ tokens/s。step6 指出這是 corpus 中唯一一篇 natively-local 模型架構論文，亦點名「SmallThinker 在 Theme-1 harness × Theme-4 benchmark 上的端到端評估缺席」是 open issue。

## 方法
模型架構 + 訓練：sparse-MoE 設計；native quantisation；CPU 部署實測。

## 發現
- Consumer CPU 上 20+ tokens/s——對 local agent 落地是門檻突破。
- Sparse-MoE 對 active parameter 的設計是 key trade-off。
- 缺端到端 agentic benchmark 評估——step7 GAP。

## 啟發
- **被啟發**：[[P_draft_AWQ]] — 量化基線。
- **啟發了**：[[P_draft_AWorld]] — Qwen3 local stack 在 SmallThinker 級硬體可行；對 user 的 local SOTA 直接核心 enabler。
