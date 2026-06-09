---
schema_version: "1.0"
id: P_draft_OpenHands_SDK
type: point
name: "OpenHands Software Agent SDK (V1 redesign)"
description: "Composable four-package SDK (openhands.sdk / tools / workspace / agent_server) with native MCP, local-to-remote portability."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [anchor_system, harness, SDK]

domain: [AI]
field: [Coding Agents, Agent Harness]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent: P_draft_OpenHands_Platform
parts: []
depends_on: [P_draft_MCP_Protocol]
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T1_Coding_Agent_Harnesses, F_draft_T3_MCP_Tool_Protocols]
related_body: []

source: "WangEtAl2025c"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
    - "step5_full_text/WangEtAl2025c.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# OpenHands Software Agent SDK (V1 redesign)

> **核心主張**：以四個顯式套件（sdk / tools / workspace / agent_server）解耦 harness 機能，並原生整合 MCP 與 local-to-remote portability，是「openable, composable, portable production agent」的可被研究參考實作。

## 來源
- 作者：Wang et al. (WangEtAl2025c)
- 年份：2025
- 出處：arXiv (OpenHands SDK V1 paper)
- citation key: `WangEtAl2025c`

## 目的
回答「如何把 v0 平台重構成 SDK，使社群能以模組化方式擴展、組合、與在本地/遠端之間移植 agent？」

## 核心主張（展開）
V1 SDK 重新設計把 OpenHands 拆解為四個正交套件：`openhands.sdk` (control loop / agent abstraction)、`openhands.tools` (tool registry)、`openhands.workspace` (sandbox + filesystem)、`openhands.agent_server` (deployment surface)。每一個都可被獨立替換或擴展。MCP 是原生第一公民。Local-to-remote portability 意味著同一個 agent 可以從本地工作站搬到遠端伺服器而不需重寫程式。

## 方法
工程論文：給出架構圖、介面定義、ablation 顯示模組可替換性、對照 v0 的痛點清單，並提出標準的部署模式（local sandbox / remote container / hybrid）。

## 發現
- 四套件解耦顯著降低 community contribution 門檻。
- 原生 MCP 整合讓 OpenHands 可以直接接入 Ray2025、LuoEtAl2025b、FanEtAl2025 等 MCP 生態研究。
- Local-to-remote portability 是學界唯一在 SDK 層級顯式聲明這個性質的開源 agent。
- 已被 AhmadiEtAl2025 與 SoniEtAl2025 引用為 deployment substrate。

## 啟發
- **被啟發**：[[P_draft_OpenHands_Platform]] — V0 platform 是基底；[[P_draft_MCP_Protocol]] — MCP 作為 native tool layer。
- **啟發了**：[[P_draft_OpenHands_Versa]] — Versa 以此 SDK 為 substrate；[[P_draft_AHE]] — AHE 跨 harness transfer 實驗也以此 SDK 為 base。
