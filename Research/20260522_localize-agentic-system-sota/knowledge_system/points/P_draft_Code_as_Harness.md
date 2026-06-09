---
schema_version: "1.0"
id: P_draft_Code_as_Harness
type: point
name: "Code as Agent Harness"
description: "A three-layer survey framing of code-based harnesses (interface / mechanisms / scaling) — positions code itself as the harness substrate."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [harness, survey, taxonomy]

domain: [AI]
field: [Coding Agents]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T1_Coding_Agent_Harnesses]
related_body: []

source: "NingEtAl2026"
year: 2026
claim_type: conceptual

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
    - "step5_full_text/NingEtAl2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Code as Agent Harness

> **核心主張**：應該把 code 本身當成 agent harness 的 substrate——介面層、機制層、scaling 層三者皆以「可執行程式碼」為自然形式，而非以 prompt 字串為主體。

## 來源
- 作者：Ning et al. (NingEtAl2026)
- 年份：2026
- 出處：arXiv ("Code as Agent Harness")
- citation key: `NingEtAl2026`

## 目的
回答「在快速演化的 agent harness 領域，是否存在一個 unifying substrate 觀點，能把 OpenHands / Claude Code / AHE / SWE-agent 等系統的設計選擇放進同一個比較框架？」

## 核心主張（展開）
NingEtAl2026 把 code-based agent harnesses 組織為三層：介面層（agent 看到什麼、做什麼）、機制層（while-loop、planner、retry、search 等控制原語）、scaling 層（多 agent、分散式、長 horizon）。三層的共同 substrate 是「code」——而非 prompt。這與 PanEtAl2026 的 NLAH（以自然語言為 harness substrate）形成顯式對位。

## 方法
Survey：跨數十個開源 scaffold 抽取共同設計選擇，歸納成三層分類，並逐層比較 design trade-offs。

## 發現
- 三層分類能涵蓋當前所有主流 code-based harness 的設計選擇。
- Code 作為 substrate 的優勢：靜態檢查、版本控制、IDE 工具鏈；劣勢：cognitive load 與表達彈性。
- 與 NLAH 配對形成 code-vs-NL harness 的關鍵對位。

## 啟發
- **被啟發**：[[P_draft_OpenHands_Platform]]、[[P_draft_ClaudeCode]] — 為其 taxonomy 的具體案例。
- **啟發了**：[[P_draft_NLAH]] — NLAH 是 code-as-harness 的明確對立；構成 [[D_draft_Simple_Beats_Fancy]] 中的方法論論點。
