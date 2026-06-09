---
schema_version: "1.0"
id: P_draft_AWorld
type: point
name: "AWorld (open-source training recipe; Qwen3-32B > GPT-4o on GAIA)"
description: "Open-source agentic AI training recipe; Qwen3-32B fine-tuned reaches 32.23% pass@1 on GAIA test vs GPT-4o 27.91%."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [generalist_agent, open_weights, training_recipe]

domain: [AI]
field: [Generalist Agents, Training]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T5_Generalist_Self_Improving, F_draft_T6_Local_Inference_Serving]
related_body: []

source: "YuEtAl2025a"
year: 2025
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-5"
    - "step5_full_text/YuEtAl2025a.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# AWorld (open-source training recipe; Qwen3-32B > GPT-4o on GAIA)

> **核心主張**：把 agentic AI 的 training recipe 完整開源——以 Qwen3-32B 訓出的 AWorld agent 在 GAIA test 上 32.23% pass@1，超過 GPT-4o 的 27.91%——直接驗證「locally-trainable agent 可以超過 proprietary frontier」。

## 來源
- 作者：Yu et al. (YuEtAl2025a)
- 年份：2025
- 出處：arXiv (AWorld)
- citation key: `YuEtAl2025a`

## 目的
回答「能否完整 open-source 一個 agent 訓練流水線，讓社群在 open weights 上端到端打敗 proprietary?」

## 核心主張（展開）
AWorld 提供完整 training recipe，包括資料、訓練腳本、推理 harness。用 Qwen3-32B fine-tune 後在 GAIA test 上 32.23% pass@1，超過 GPT-4o 的 27.91%。在 user 的「local SOTA」題目上這是最直接的存在性證據：open weights + 良好的 training stack 已具備 frontier 競爭力。

## 方法
工程 + 訓練：開放 recipe；以 Qwen3-32B 為 base；用其 stack 復現端到端訓練。

## 發現
- Qwen3-32B 32.23% > GPT-4o 27.91% on GAIA。
- Training stack 完整公開，可被社群復現。
- 與 SmallThinker、AhmadiEtAl2025 共同支撐 open-weights 路線。

## 啟發
- **被啟發**：[[P_draft_SmallThinker]] — 共享 Qwen3 local stack；[[P_draft_MCP_Bridge]] — 同屬 open-weights MCP family。
- **啟發了**：對 [[F_draft_T6_Local_Inference_Serving]] 的 model-layer 路線是直接 enabler；構成 [[E_draft_Externalization_Lineage]] 中「locally-trainable」分支。
