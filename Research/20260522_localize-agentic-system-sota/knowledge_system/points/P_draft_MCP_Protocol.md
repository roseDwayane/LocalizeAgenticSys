---
schema_version: "1.0"
id: P_draft_MCP_Protocol
type: point
name: "Model Context Protocol (MCP)"
description: "The 'USB-C of AI' — open protocol unifying tool access, multi-turn context, and stateful integration for LLM agents."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [protocol, anchor_concept, infrastructure]

domain: [AI]
field: [Agent Protocols, Tool Use]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T3_MCP_Tool_Protocols]
related_body: []

source: "Ray2025"
year: 2025
claim_type: conceptual

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-3"
    - "step5_full_text/Ray2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Model Context Protocol (MCP)

> **核心主張**：MCP 是 LLM agent 與外部世界互動的事實標準層——以 USB-C 般的統一介面解決三個長期障礙：stateless interface、ad-hoc security、缺乏 unified multi-turn context mechanism。

## 來源
- 作者：Ray (Ray2025)
- 年份：2025
- 出處：arXiv ("A Survey on Model Context Protocol")
- citation key: `Ray2025`

## 目的
回答「LLM agent 該以什麼形式接外部工具？是否存在跨家族通用的整合層？」

## 核心主張（展開）
Ray2025 survey 把 MCP 定位為 agent ecosystem 的 USB-C：以單一協議統一 tool access、session state、multi-turn context、權限與認證。論文同時點名 MCP 解決了三個結構性問題：(1) 每個工具自定 stateless API，(2) 安全模型雜亂，(3) multi-turn context 沒有 protocol-level 規範。MCP 釋出後約 18 個月內成為事實標準——後續 11+ 篇 MCP 論文都以 MCP 為前提。

## 方法
Survey + 架構回顧：歸納 MCP 的設計原則、現有實作生態、應用範例與 open challenges。

## 發現
- MCP 在 ~18 個月內成為 de facto integration layer。
- 為後續所有 MCP benchmark / security / infra 研究奠定共同詞彙。
- 列出三個長期障礙（stateless / security / multi-turn）作為 MCP 的設計動機。

## 啟發
- **被啟發**：早期 LLM tool-use 文獻（WangEtAl2024a 等 survey）。
- **啟發了**：[[P_draft_MCP_Universe]]、[[P_draft_MCPToolBench]]、[[P_draft_MCP_AgentBench]]、[[P_draft_MCP_Bridge]]、[[P_draft_ScaleMCP]]、[[P_draft_FAME]]、[[P_draft_MSB]]、[[P_draft_MCP_Guard]] — 都以 MCP 為前提；[[P_draft_OpenHands_SDK]] — 把 MCP 列為 native 第一公民。
