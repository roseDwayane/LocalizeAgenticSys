---
schema_version: "1.0"
id: P_draft_ByteRover
type: point
name: "ByteRover (agent-native curated memory)"
description: "LLM-curated hierarchical memory (domain/topic/subtopic/entry) with Adaptive Knowledge Lifecycle; SOTA on LoCoMo, no vector DB."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [memory, agent_native, externalization]

domain: [AI]
field: [Memory, Context Engineering]

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

source: "NguyenEtAl2026"
year: 2026
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-2"
    - "step5_full_text/NguyenEtAl2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# ByteRover (agent-native curated memory)

> **核心主張**：用 LLM 自己 curate 一個 domain/topic/subtopic/entry 的階層式知識庫，搭配 Adaptive Knowledge Lifecycle 管理，可在 LoCoMo 上達 SOTA、LongMemEval 競爭——而且完全不用 vector DB。

## 來源
- 作者：Nguyen et al. (NguyenEtAl2026)
- 年份：2026
- 出處：arXiv (ByteRover)
- citation key: `NguyenEtAl2026`

## 目的
回答「能否完全不依賴 dense vector retrieval 而建立長時序 agent 的 persistent memory？」

## 核心主張（展開）
ByteRover 把 memory 設計成四層階層（domain / topic / subtopic / entry），所有 navigation 由 agent 自身在 prompt-time 做 traversal，沒有 vector DB。新增加的「Adaptive Knowledge Lifecycle」決定 entry 該被擴展、合併、淘汰。LoCoMo benchmark SOTA、LongMemEval 競爭。是 anti-vector-DB 一派與 SenEtAl2026 Grep-beats-Vector 共享同一信念。

## 方法
工程實作：定義階層 schema → agent 以自然語言 query 走訪階層 → Adaptive Knowledge Lifecycle 後處理 → 在 LoCoMo、LongMemEval 上端到端評估。

## 發現
- LoCoMo SOTA、LongMemEval competitive。
- 無 vector DB——這對 local-only 部署是重大優勢（vector DB infra cost 完全省掉）。
- 與 SenEtAl2026 Grep-beats-Vector 共享 anti-vector-DB 立場。

## 啟發
- **被啟發**：[[P_draft_Externalization_Framework]] — agent-native memory 是 externalisation 的範例；[[P_draft_Grep_beats_Vector]] — 共享 anti-vector-DB 信念。
- **啟發了**：[[P_draft_Cost_of_Pass]] — 無 vector DB 顯著改變 cost calculus；構成 [[D_draft_Simple_Beats_Fancy]] 「memory 也走極簡」一支。
