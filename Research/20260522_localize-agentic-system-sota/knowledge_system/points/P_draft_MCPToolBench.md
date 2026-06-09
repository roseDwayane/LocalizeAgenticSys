---
schema_version: "1.0"
id: P_draft_MCPToolBench
type: point
name: "MCPToolBench++ (large-scale MCP tool-use benchmark)"
description: "4K+ MCP servers × 40+ categories; Qwen3-coder tops AST in Browser/Map; Qwen2.5-max top in FS/Finance."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [benchmark, MCP, scale]

domain: [AI]
field: [Benchmarks, MCP]

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

source: "FanEtAl2025"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-3"
    - "step5_full_text/FanEtAl2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# MCPToolBench++ (large-scale MCP tool-use benchmark)

> **核心主張**：在跨 4K+ MCP server、40+ category 的大規模 tool-use benchmark 上，open-weights 系列（Qwen3-coder、Qwen2.5-max）已能在多個子類別取得 AST 領先——再次確認 open weights 對 MCP 任務的競爭力。

## 來源
- 作者：Fan et al. (FanEtAl2025)
- 年份：2025
- 出處：arXiv (MCPToolBench++)
- citation key: `FanEtAl2025`

## 目的
回答「MCP tool 生態的 scale 是否足以支撐覆蓋性 benchmark？open vs proprietary 在大規模 cover 下誰勝？」

## 核心主張（展開）
MCPToolBench++ 規模空前——4K+ servers, 40+ categories。Qwen3-coder 在 Browser、Map 類別取得 AST top；Qwen2.5-max 在 FS、Finance 類別 top。後續 MCP Bridge (AhmadiEtAl2025) 直接使用此 benchmark 對 fine-tuned Qwen3 做評估。

## 方法
建構大規模 benchmark：4K+ servers across 40+ categories；AST grading；對主流 open + proprietary 模型評估。

## 發現
- Qwen3-coder 在 Browser/Map 領先；Qwen2.5-max 在 FS/Finance 領先。
- 4K+ server 規模讓 long-tail 的 tool 也能納入評估。
- 為 AhmadiEtAl2025 fine-tuning 提供 ground truth。

## 啟發
- **被啟發**：[[P_draft_MCP_Universe]] — 共享 execution-based 方法論。
- **啟發了**：[[P_draft_MCP_Bridge]] — MCP Bridge 直接 fine-tune to this benchmark。
