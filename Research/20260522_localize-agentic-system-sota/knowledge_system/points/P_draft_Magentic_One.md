---
schema_version: "1.0"
id: P_draft_Magentic_One
type: point
name: "Magentic-One (orchestrator + specialists generalist system)"
description: "Orchestrator + 4 specialist agents (FileSurfer / WebSurfer / Coder / ComputerTerminal) achieving competitive GAIA / AssistantBench / WebArena."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [generalist_agent, multi_agent, orchestration]

domain: [AI]
field: [Generalist Agents]

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

source: "FourneyEtAl2024"
year: 2024
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-5"
    - "step5_full_text/FourneyEtAl2024.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Magentic-One (orchestrator + specialists generalist system)

> **核心主張**：以 Orchestrator 統籌 4 個 specialist agent（FileSurfer、WebSurfer、Coder、ComputerTerminal）的 multi-agent 編排，是 generalist agent 領域第一個 broad-task competitive 的開源實作；在 GAIA 上達 35.1% (validation)。

## 來源
- 作者：Fourney et al. (FourneyEtAl2024)
- 年份：2024
- 出處：arXiv (Magentic-One)
- citation key: `FourneyEtAl2024`

## 目的
回答「generalist agent 該不該分工？orchestrator + specialist 是不是好的編排型態？」

## 核心主張（展開）
Magentic-One 是 Microsoft Research 開源的 generalist agent system：一個 Orchestrator 負責分派任務給 4 個 specialist (FileSurfer / WebSurfer / Coder / ComputerTerminal)，在 GAIA / AssistantBench / WebArena 上取得 competitive。35.1% on GAIA validation。其架構成為後續 Alita、AutoAgent、Cerebrum 的引用基底。

## 方法
工程：定義 Orchestrator + 4 specialist 介面；端到端在 GAIA、AssistantBench、WebArena 評估。

## 發現
- 3 個 diverse benchmark 上 competitive。
- 多 agent 編排 + 角色分工成為主流範式之一。
- 是 corpus 中 generalist agent 軸最早的「open competitive」開源實作。

## 啟發
- **被啟發**：[[P_draft_WangEtAl2024a_LLMAgent_Survey]] — Profile/memory/planning/action 框架。
- **啟發了**：[[P_draft_Alita]]、[[P_draft_AutoAgent]] — 直接引用；構成 [[F_draft_T5_Generalist_Self_Improving]] 「multi-agent orchestration」軸的基準。
