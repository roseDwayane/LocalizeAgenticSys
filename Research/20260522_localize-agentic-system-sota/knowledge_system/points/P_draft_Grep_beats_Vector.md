---
schema_version: "1.0"
id: P_draft_Grep_beats_Vector
type: point
name: "Grep-beats-Vector (lexical retrieval dominance across harnesses)"
description: "Across Claude Code / Codex / Gemini CLI, grep (lexical) retrieval matches or beats dense vector retrieval for code search."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [retrieval, harness, empirical]

domain: [AI]
field: [Coding Agents, Information Retrieval]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T1_Coding_Agent_Harnesses, F_draft_T2_Context_Memory_Engineering]
related_body: []

source: "SenEtAl2026"
year: 2026
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
    - "step6_sota_review.md#cross-theme-2"
    - "step5_full_text/SenEtAl2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Grep-beats-Vector (lexical retrieval dominance across harnesses)

> **核心主張**：在 Claude Code / Codex / Gemini CLI 三個 harness 上，grep（lexical retrieval）對 code search 任務匹配或勝過 dense vector retrieval——而且不同 harness 下兩者差距會被放大或縮小，顯示 retrieval 選擇與 harness 設計強耦合。

## 來源
- 作者：Sen et al. (SenEtAl2026)
- 年份：2026
- 出處：arXiv ("Is Grep All You Need?")
- citation key: `SenEtAl2026`

## 目的
回答「coding agent 真的需要 vector DB 嗎？」——對 RAG 在 agentic 場景下的預設地位提出挑戰。

## 核心主張（展開）
SenEtAl2026 在三個 production-grade CLI agent (Claude Code, Codex, Gemini CLI) 上對照 grep vs vector retrieval 對 code search 任務的影響。結果顯示 grep 整體匹配或勝過 vector retrieval，並且不同 harness 下兩者落差不同——意味 retrieval-vs-harness 是強耦合系統，不能單獨評估 retrieval method。

## 方法
控制變因實驗：固定 task set 與 base model，改變 retrieval method (grep vs vector)，在三個不同 harness 上分別評估。

## 發現
- Grep 在多數 code-search 子任務上不輸 vector retrieval。
- 同樣的 retrieval 選擇在不同 harness 下表現差異很大——step6 指 retrieval 選擇與 harness 強耦合。
- 直接呼應 NguyenEtAl2026 ByteRover 的「anti-vector-DB」設計選擇。

## 啟發
- **被啟發**：[[P_draft_ClaudeCode]] — 以 Claude Code 為測試平台之一。
- **啟發了**：[[P_draft_ByteRover]] — 共享 anti-vector-DB 信念；[[P_draft_Simple_Beats_Fancy]] — 提供 retrieval 層的 simple-beats-fancy 證據。
