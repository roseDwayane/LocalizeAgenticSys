---
schema_version: "1.0"
id: P_draft_Alita
type: point
name: "Alita (minimal-predefinition self-evolving generalist)"
description: "'Simplicity is the ultimate sophistication' — minimal predefinition + maximum self-evolution; GAIA validation pass@1 75.15%, pass@3 87.27%."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [generalist_agent, self_evolution, minimalism]

domain: [AI]
field: [Generalist Agents, Self-Improving]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T5_Generalist_Self_Improving]
related_body: []

source: "QiuEtAl2025a"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-5"
    - "step5_full_text/QiuEtAl2025a.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Alita (minimal-predefinition self-evolving generalist)

> **核心主張**：以「minimal predefinition + maximum self-evolution」為設計原則——agent 在執行期自動產生新 MCP——在 GAIA 上達 pass@1 75.15% / pass@3 87.27%，居 2025 通用型 agent 之首。

## 來源
- 作者：Qiu et al. (QiuEtAl2025a)
- 年份：2025
- 出處：arXiv (Alita)
- citation key: `QiuEtAl2025a`

## 目的
回答「能否最小化 agent 預先設計、改由 agent 在執行期自己長出新工具？」

## 核心主張（展開）
Alita 把 generalist agent 的「預設工具集」極度精簡，並讓 agent 在執行期自主生成新 MCP（Model Context Protocol server）以擴展自身能力。在 GAIA validation 上 pass@1 75.15%、pass@3 87.27%——是 2025 年通用型 agent 領域的 top 結果。論文中引用「Simplicity is the ultimate sophistication」作為設計箴言，與 OpenHands-Versa 同屬「simple beats fancy」核心案例。

## 方法
工程：minimal predefinition core + run-time MCP-generation pipeline；在 GAIA 端到端評估。

## 發現
- GAIA pass@1 75.15% / pass@3 87.27%。
- 自動 MCP 生成在 production 已可行。
- 是極簡 + 自演化兩條主軸的交點。

## 啟發
- **被啟發**：[[P_draft_Magentic_One]] — 引用其 orchestrator 思想；[[P_draft_MCP_Protocol]] — MCP 是其自演化的 substrate。
- **啟發了**：[[P_draft_HGM]]、[[P_draft_AHE]] — 同屬 self-evolving family；構成 [[D_draft_Simple_Beats_Fancy]] 的核心引用之一。
