---
schema_version: "1.0"
id: P_draft_MCP_AgentBench
type: point
name: "MCP-AgentBench (open-weights competitive on MCP)"
description: "600 queries × 33 servers × 188 tools; open-source Qwen3-235B-A22B (ReAct) tops MCP-AgentBench overall."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [benchmark, MCP, open_weights]

domain: [AI]
field: [Benchmarks, MCP, Open Models]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: [P_draft_MCP_Protocol]
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T3_MCP_Tool_Protocols, F_draft_T4_Agent_Benchmarks_Empirical]
related_body: []

source: "GuoEtAl2025"
year: 2025
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-3"
    - "step5_full_text/GuoEtAl2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# MCP-AgentBench (open-weights competitive on MCP)

> **核心主張**：在 600 query × 33 server × 188 tool 的真實 MCP 基準上，open-source Qwen3-235B-A22B 以 ReAct 取得 overall 第一——open weights 在 MCP 任務上已具備與 proprietary frontier 競爭的實證。

## 來源
- 作者：Guo et al. (GuoEtAl2025)
- 年份：2025
- 出處：arXiv (MCP-AgentBench)
- citation key: `GuoEtAl2025`

## 目的
回答「在 MCP 任務上 open-weights 模型是否已能 match 或 beat proprietary frontier？」

## 核心主張（展開）
GuoEtAl2025 設計 600 query × 33 server × 188 tool 的 execution-based benchmark，量測各模型在真實 MCP 環境的表現。最重要結果：Qwen3-235B-A22B (ReAct) overall 第一，超越多家 proprietary frontier。直接對 step6 cross-theme synthesis #5「open-weights agents are quietly matching proprietary frontiers」提供強證據。

## 方法
建構：33 個 MCP server，188 個 tool；600 個 query；execution-based grading；對 8 家以上模型對照。

## 發現
- Qwen3-235B-A22B (ReAct) overall 領先。
- Open-weights 在 MCP 任務上已具競爭力，特別是 ReAct-style prompting。
- 與 AhmadiEtAl2025 fine-tuned Qwen3 一起構成 open-weights MCP 競爭力的雙證據。

## 啟發
- **被啟發**：[[P_draft_MCP_Protocol]]、[[P_draft_MCP_Universe]] — 共享 execution-based 範式。
- **啟發了**：[[P_draft_MCP_Bridge]] — Bridge 同樣展示 Qwen3 系列開源 MCP 能力；對 [[F_draft_T6_Local_Inference_Serving]] 的 local-agent 路線是核心 enabler。
