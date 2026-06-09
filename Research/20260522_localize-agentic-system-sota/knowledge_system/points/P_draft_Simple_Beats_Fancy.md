---
schema_version: "1.0"
id: P_draft_Simple_Beats_Fancy
type: point
name: "Simple-beats-Fancy (cross-corpus converging finding)"
description: "Across themes, complexity-minimising designs repeatedly match or beat complexity-maximising ones with cost wins. The strongest converging finding in the corpus."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [phenomenon, cross_theme, design_principle]

domain: [AI]
field: [Agent Design]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T1_Coding_Agent_Harnesses, F_draft_T2_Context_Memory_Engineering, F_draft_T5_Generalist_Self_Improving]
related_body: []

source: "synthesis"
year: 2026
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#cross-theme-2"
    - "step6_sota_review.md#sota-summary-contested"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Simple-beats-Fancy (cross-corpus converging finding)

> **核心主張**：「越簡單越好」已從口號變成可量測、反覆出現的跨主題發現——當前 corpus 至少 7 個獨立論文以不同 lever（observation masking、grep、4-tool generalist、AGENTS.md、NL harness、while-loop、Alita minimal predefinition）量到複雜性最小化的成本勝。

## 來源
- 作者：跨論文 synthesis（step6 §Cross-Theme Synthesis #2）
- 年份：2026 (synthesis date)
- 出處：step6_sota_review.md
- citation key: synthesis (not a single paper)

## 目的
回答「不同 lever 上的簡單派發現是否是同一個現象？」——把 7 個獨立 finding 合成為一個可被引用的 named phenomenon。

## 核心主張（展開）
跨主題 7 個 finding：
- LindenbauerEtAl2025: observation masking matches LLM summarisation at ½ cost (Theme 2)
- SenEtAl2026: grep beats vector retrieval across 3 CLIs (Theme 1)
- SoniEtAl2025: 4-tool generalist beats specialised agents on 3 benchmarks (Theme 5)
- LullaEtAl2026: AGENTS.md alone −28.64% runtime (Theme 1)
- PanEtAl2026: 2.9k-token NL harness ≈ 60.1k-token code harness (Theme 1)
- LiuEtAl2026: Claude Code core is a "simple while-loop" (Theme 1)
- QiuEtAl2025a: "Simplicity is the ultimate sophistication" + 75.15% GAIA (Theme 5)
這是 step6 cross-theme #2 命名的「the strongest converging finding in the entire corpus」。

## 方法
Cross-theme synthesis：把跨論文獨立 finding 對位比較，識別共同方向。

## 發現
- 7 個獨立 finding 同向。
- 不同 lever（retrieval / context / tools / config / harness representation / loop / predefinition）都呈現「簡單派勝」。
- 但同時 step6 §What is contested 也點出「ScaleMCP / FAME / ByteRover 等 complexity-maximising 派也持續發表」——並未絕對共識。

## 啟發
- **被啟發**：所有 7 個來源論文（見 source list）。
- **啟發了**：[[D_draft_Simple_Beats_Fancy]] 把此 finding 升格為 named debate；對 user 的 local agent 設計建議直接決定起點（從極簡開始）。
