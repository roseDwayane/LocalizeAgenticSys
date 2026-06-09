---
schema_version: "1.0"
id: P_draft_MCP_Bridge
type: point
name: "MCP Bridge (RESTful proxy with risk-tiered execution)"
description: "Lightweight LLM-agnostic RESTful proxy for MCP servers + fine-tuned Qwen3 (4B/8B) hitting F1 73.0% on MCPToolBench++ vs GPT-OSS-120B 62.17%."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [MCP, infrastructure, fine_tuning, local_friendly]

domain: [AI]
field: [MCP, Local Deployment]

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

source: "AhmadiEtAl2025"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-3"
    - "step5_full_text/AhmadiEtAl2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# MCP Bridge (RESTful proxy with risk-tiered execution)

> **核心主張**：在 LLM 與 MCP server 之間加入 lightweight LLM-agnostic RESTful proxy（含 3-tier risk model），並 fine-tune 開源 Qwen3 (4B/8B)，可在 MCPToolBench++ 上取得 F1 73.0%，勝過 GPT-OSS-120B 的 62.17%。

## 來源
- 作者：Ahmadi, Sharif, Banad (AhmadiEtAl2025)
- 年份：2025
- 出處：arXiv (MCP Bridge)
- citation key: `AhmadiEtAl2025`

## 目的
回答「(a) 如何在 production 部署 MCP 時加入結構化 risk control？(b) 開源小模型 + Bridge 能否擊敗大模型？」

## 核心主張（展開）
MCP Bridge 提供 RESTful 代理層，介於 LLM 與 MCP server 之間：每個 tool call 被分到 3-tier risk model（低/中/高風險）並對應不同 confirmation / sandbox / refusal policy。並用 RL（GRPO、DAPO 等）fine-tune Qwen3-4B/8B。結果：F1 73.0% on MCPToolBench++ vs GPT-OSS-120B 62.17%——一個 4B/8B 開源模型擊敗 120B proprietary baseline。

## 方法
工程 + RL：定義 3-tier risk classifier；建構 RESTful proxy；以 GRPO/DAPO 等 RL 演算法 fine-tune Qwen3；在 MCPToolBench++ 評估。

## 發現
- F1 73.0% (Qwen3-4B/8B fine-tuned) > 62.17% (GPT-OSS-120B)。
- 3-tier risk model 是 production-grade MCP 部署的少數 actionable security pattern。
- 對 local agent 設計提供「小模型 + 強 harness + risk gate」的可行性實證。

## 啟發
- **被啟發**：[[P_draft_MCP_Protocol]]、[[P_draft_MCPToolBench]] — 提供 baseline 與評估面。
- **啟發了**：[[P_draft_OpenHands_SDK]] — Bridge 正是 OpenHands SDK 在 production 場景需要的 layer；對 [[F_draft_T6_Local_Inference_Serving]] 提供 local stack 的直接證據。
