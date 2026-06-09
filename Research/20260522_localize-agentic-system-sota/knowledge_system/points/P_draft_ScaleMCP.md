---
schema_version: "1.0"
id: P_draft_ScaleMCP
type: point
name: "ScaleMCP (dynamic retrieval over MCP servers at scale)"
description: "Dynamic CRUD-synced tool retrieval across 5K financial-metric MCP servers; multi-LLM × multi-embedding ablation."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [MCP, retrieval, scale]

domain: [AI]
field: [MCP, Retrieval]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: [P_draft_MCP_Protocol]
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T3_MCP_Tool_Protocols]
related_body: []

source: "LumerEtAl2025"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-3"
    - "step5_full_text/LumerEtAl2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# ScaleMCP (dynamic retrieval over MCP servers at scale)

> **核心主張**：當 MCP server 規模達 5K 級時，static tool registry 不可行——ScaleMCP 提出 CRUD-synced 動態 tool retrieval 並做 multi-LLM × multi-embedding ablation，是「fancy infrastructure 派」的代表。

## 來源
- 作者：Lumer et al. (LumerEtAl2025)
- 年份：2025
- 出處：arXiv (ScaleMCP)
- citation key: `LumerEtAl2025`

## 目的
回答「MCP server 數量上千甚至上萬時，如何讓 agent 在合理 latency 內找對工具？」

## 核心主張（展開）
ScaleMCP 把 MCP tool registry 做成 CRUD-synced retrieval index：server 增刪改即時同步、tool retrieval 是 multi-embedding × multi-LLM 的 ablated 流程。在 5K 個金融 metric MCP server 上做端到端測試。它是 step6 點名的「complexity-maximising 派」代表，與 SoniEtAl2025 OpenHands-Versa 的 4-tool 極簡形成核心對立。

## 方法
工程 + ablation：建立 CRUD-synced index；ablation 不同 LLM × embedding 組合；在 5K-server 環境量測 retrieval quality 與 latency。

## 發現
- 在 5K-server 規模證明 dynamic retrieval 是必要的。
- Multi-embedding × multi-LLM ablation 提供具體配方選擇指南。
- 是「scale to 5K」這個量級下唯一公開實驗的 benchmark。

## 啟發
- **被啟發**：[[P_draft_MCP_Protocol]] — 共享 MCP 為基底。
- **啟發了**：構成 [[D_draft_Simple_Beats_Fancy]] 中「complexity-maximising」派的代表；[[P_draft_FAME]] 為其 serving-side 對應。
