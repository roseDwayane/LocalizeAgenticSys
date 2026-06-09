---
schema_version: "1.0"
id: P_draft_Structural_Context_Model
type: point
name: "Structural Context Model (formal LLM-agent design)"
description: "Formal structural context model + semantic dynamics analysis yields +32 pp success rate on dynamic problem-solving."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [context_engineering, formalization]

domain: [AI]
field: [Context Engineering, Formal Methods]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T2_Context_Memory_Engineering]
related_body: []

source: "JiaEtAl2026"
year: 2026
claim_type: theoretical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-2"
    - "step5_full_text/JiaEtAl2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Structural Context Model (formal LLM-agent design)

> **核心主張**：把 LLM-based agent 的 context 以「結構化 + 語意動態」形式 formalize，可在 dynamic problem-solving benchmark 取得 +32pp success rate——把 context engineering 由 heuristic 推往 formal model。

## 來源
- 作者：Jia, Haoyu et al. (JiaEtAl2026)
- 年份：2026
- 出處：arXiv ("Toward Formalizing LLM-Based Agent Designs")
- citation key: `JiaEtAl2026`

## 目的
回答「能否給 context engineering 一個 formal model，使它從 art 變 science？」

## 核心主張（展開）
JiaEtAl2026 把 context 分解為結構化的 state 與 semantic dynamics（context state 隨 action 如何遷移）。基於此 formal model 設計 agent 在 dynamic problem-solving benchmark 上取得 +32pp success rate。雖然 step6 把它放在 Theme 2 工程化部分，但本質是 theoretical contribution。

## 方法
形式化：定義 structural context state 與 transition function → 在 dynamic problem-solving benchmark 上端到端評估。

## 發現
- +32pp success rate gain 是 corpus 中 theoretical-leaning 論文最高的單項提升。
- Formalisation 開啟對 context 行為的可分析性。

## 啟發
- **被啟發**：[[P_draft_Externalization_Framework]] — formalisation 是 externalisation 思想的 theoretical 版。
- **啟發了**：未來 context engineering 的形式化研究方向（step7 待補）。
