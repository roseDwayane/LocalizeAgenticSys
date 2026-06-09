---
schema_version: "1.0"
id: P_draft_ACE
type: point
name: "ACE — Agentic Context Engineering"
description: "An evolving-playbook discipline for incremental, structured, append-friendly context updates: +10.6% AppWorld, +8.6% finance, −86.9% adaptation latency."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [context_engineering, paradigm, self_improving]

domain: [AI]
field: [Context Engineering, Agent Harness]

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

source: "ZhangEtAl2025a"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-2"
    - "step5_full_text/ZhangEtAl2025a.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# ACE — Agentic Context Engineering

> **核心主張**：把 context 視為一份可被 agent 自身演化的 playbook——以 incremental / structured / append-friendly 的方式更新——可在不需 labeled supervision 的前提下取得 AppWorld +10.6%、finance +8.6%、adaptation latency −86.9%。

## 來源
- 作者：Zhang et al. (ZhangEtAl2025a)
- 年份：2025
- 出處：arXiv ("Agentic Context Engineering")
- citation key: `ZhangEtAl2025a`

## 目的
回答「context 是否可以被當成一份持續演化的『agent 工作筆記』，並用 natural execution feedback 而非 labeled data 來驅動其更新？」

## 核心主張（展開）
ZhangEtAl2025a 提出 "Agentic Context Engineering" (ACE) 作為一門明確學科。Context 不再是 stateless 的 prompt window，而是一份結構化、可累加、被 agent 自身編輯的 playbook。論文用 incremental update（每次只 append diff，不重寫）、structured representation（明確 sections）、natural feedback loop（agent 自身執行結果回授）三招，取得 AppWorld +10.6%、finance reasoning +8.6%、adaptation latency 降低 86.9%。

## 方法
建立 ACE 框架：playbook 表徵 + incremental update rule + agent-self-feedback loop。在 AppWorld、finance reasoning benchmark 上端到端評估，並對 latency / token 等成本指標做 ablation。

## 發現
- AppWorld +10.6%、finance reasoning +8.6%（兩個獨立 domain 同時 win）。
- Adaptation latency −86.9%——decisive 的成本降幅。
- 「不需 labeled supervision」是方法論的關鍵聲明，使 ACE 可在生產環境部署。
- ZhouEtAl2026 把 ACE 列為 externalisation 的核心案例之一。

## 啟發
- **被啟發**：[[P_draft_Externalization_Framework]] — ACE 是 externalisation 的 context-engineering 化身。
- **啟發了**：[[P_draft_GCC]] — Git-style context management 是另一種版本演化機制；[[P_draft_ACC]] / [[P_draft_PAACE]] — 共享「自動 context curation」目標；[[P_draft_AHE]] — AHE 把 context 也當成 harness 的可演化組件。
