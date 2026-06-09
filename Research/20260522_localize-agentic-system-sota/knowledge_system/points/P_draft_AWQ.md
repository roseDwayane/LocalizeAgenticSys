---
schema_version: "1.0"
id: P_draft_AWQ
type: point
name: "AWQ — Activation-aware Weight Quantization"
description: "Activation-aware weight quantisation protecting ~1% salient channels; 3× speedup on mobile GPUs."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [quantization, local_inference, foundational]

domain: [AI]
field: [Local Inference]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T6_Local_Inference_Serving]
related_body: []

source: "LinEtAl2023"
year: 2023
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-6"
    - "step5_full_text/LinEtAl2023.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# AWQ — Activation-aware Weight Quantization

> **核心主張**：在 LLM 量化時保護約 1% 對 activation 最敏感的 salient channel，可在 mobile GPU 上取得 3× speedup 而不掉準確度——成為當前 corpus 中 local inference 路線的量化基線。

## 來源
- 作者：Lin, Ji et al. (LinEtAl2023)
- 年份：2023
- 出處：arXiv (AWQ)
- citation key: `LinEtAl2023`

## 目的
回答「能不能把大 LLM 量化壓縮到可在 consumer / mobile GPU 上跑而幾乎不掉品質？」

## 核心主張（展開）
AWQ 觀察到 LLM weight 中只有約 1% 的 channel 對 activation 真正重要——只要 protect 這些 salient channel，其他可以激進量化（4-bit）。Mobile GPU 上達 3× speedup。這篇是 corpus 中 local inference 的奠基論文，被 SmallThinker 與 AgostinoDSouza2026（22 個 local model）直接引用為量化基底。

## 方法
量化演算法 + 工程：activation-aware salient channel detection；保留 salient + 4-bit quantize rest；mobile GPU 部署 benchmark。

## 發現
- 3× speedup on mobile GPU。
- ≤1% salient channel 保護即足。
- 成為後續 SmallThinker、CATs 的量化基線。

## 啟發
- **被啟發**：早期 GPTQ / SmoothQuant 等 LLM 量化研究。
- **啟發了**：[[P_draft_SmallThinker]] — 共用量化思路；[[P_draft_AgostinoDSouza2026_CATs]]（已 DROP 但邏輯上由 AWQ 啟發 22 model deployment）；對 user 的 local SOTA 路線是核心 enabler。
