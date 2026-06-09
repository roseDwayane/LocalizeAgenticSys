---
schema_version: "1.0"
id: P_draft_FAME
type: point
name: "FAME (FaaS-decomposed ReAct for MCP serving)"
description: "Decomposes ReAct into FaaS Planner/Actor/Evaluator; 13× latency cut, −88% input tokens, −66% cost on MCP workloads."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [MCP, serving, FaaS, cost_reduction]

domain: [AI]
field: [MCP, Serving]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: [P_draft_MCP_Protocol]
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T3_MCP_Tool_Protocols, F_draft_T6_Local_Inference_Serving]
related_body: []

source: "KulkarniEtAl2026"
year: 2026
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-3"
    - "step6_sota_review.md#theme-6"
    - "step5_full_text/KulkarniEtAl2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# FAME (FaaS-decomposed ReAct for MCP serving)

> **核心主張**：把 ReAct 的 Planner / Actor / Evaluator 三個角色拆到 FaaS 平台上做 program-aware 排程，可在 MCP 工作負載取得 13× latency 降低、−88% input tokens、−66% cost。

## 來源
- 作者：Kulkarni et al. (KulkarniEtAl2026)
- 年份：2026
- 出處：arXiv ("Optimizing FaaS Platforms for MCP-enabled Agentic Workflows")
- citation key: `KulkarniEtAl2026`

## 目的
回答「能不能把 agent 的 control loop 解構，讓不同階段在不同的 FaaS function 上跑、彼此 cache 與並行？」

## 核心主張（展開）
FAME 解構 ReAct 為三個 FaaS function：Planner（規劃下一步）、Actor（執行 tool call）、Evaluator（評估與決定終止）。每個 function 可獨立 scale、cache、warm-start。實驗：13× latency reduction、−88% input tokens、−66% cost。和 Autellix 的 program-aware serving 同屬「serving 層做 agent-aware scheduling」陣營。

## 方法
工程：把 ReAct 角色 map 到 FaaS function；測量 latency / token / cost；對照 monolithic ReAct 部署。

## 發現
- 13× latency cut, −88% input tokens, −66% cost。
- 把 serving 層作為 cost-of-pass 的主要槓桿之一。
- 在 step6 Theme 3 與 Theme 6 都被引用——是 MCP infra 與 serving infra 的交點。

## 啟發
- **被啟發**：[[P_draft_MCP_Protocol]]、[[P_draft_Autellix]] — 共享 program-aware serving。
- **啟發了**：[[P_draft_Cost_of_Pass]] — 為 cost-of-pass 提供具體可動的 serving-side 槓桿。
