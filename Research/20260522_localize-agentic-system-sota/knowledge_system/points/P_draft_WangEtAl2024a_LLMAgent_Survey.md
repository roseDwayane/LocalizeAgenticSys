---
schema_version: "1.0"
id: P_draft_WangEtAl2024a_LLMAgent_Survey
type: point
name: "LLM-Based Autonomous Agents (founding survey)"
description: "Profile / memory / planning / action framework — the umbrella reference (1,058 citations, most-cited paper in this corpus)."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [survey, foundational, framework]

domain: [AI]
field: [LLM Agents]

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

source: "WangEtAl2024a"
year: 2024
claim_type: conceptual

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-5"
    - "step5_full_text/WangEtAl2024a.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# LLM-Based Autonomous Agents (founding survey)

> **核心主張**：LLM-based autonomous agent 可以以 profile / memory / planning / action 四元框架統一描述——這是 corpus 中被引用最多 (1,058 cites) 的論文，是後續所有 generalist agent 工作的傘狀基底。

## 來源
- 作者：Wang et al. (WangEtAl2024a)
- 年份：2024
- 出處：期刊（自然+綜合）survey
- citation key: `WangEtAl2024a`

## 目的
回答「LLM-based agent 是否有可被共同引用的概念框架？」

## 核心主張（展開）
WangEtAl2024a 把 LLM agent 統一為 profile（agent 是誰）/ memory（agent 記得什麼）/ planning（agent 想怎麼做）/ action（agent 做什麼）四元框架。1,058 citations 使它成為 corpus 中 in-degree 最高的 survey。後續 Magentic-One、Alita、AutoAgent、Cerebrum 都以此為基線敘事。

## 方法
Survey：歸納當時 LLM agent 設計選擇，提出 4-元框架，並 categorize 數十個系統。

## 發現
- Profile/memory/planning/action 框架成為通用語言。
- 是 ZhouEtAl2026 externalisation 框架的概念前身。

## 啟發
- **被啟發**：傳統 autonomous agent 文獻（BDI、SOAR 等）。
- **啟發了**：[[P_draft_Magentic_One]]、[[P_draft_Externalization_Framework]] — 直接引用其框架。
