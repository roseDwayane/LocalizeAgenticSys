---
schema_version: "1.0"
id: P_draft_Autellix
type: point
name: "Autellix (program-aware LLM serving engine)"
description: "LLM serving engine treating programs as first-class citizens; 4–15× program throughput over vLLM-class baselines."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [serving, infrastructure, throughput]

domain: [AI]
field: [LLM Serving]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T6_Local_Inference_Serving]
related_body: []

source: "LuoEtAl2025a"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-6"
    - "step5_full_text/LuoEtAl2025a.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Autellix (program-aware LLM serving engine)

> **核心主張**：把 LLM serving engine 從 token-by-token 觀點升級為 program-aware 觀點——把 agent 的整個 program（多步 LLM call + tool call）作為一級公民排程，可達 4–15× program throughput 改善。

## 來源
- 作者：Luo, Michael et al. (LuoEtAl2025a)
- 年份：2025
- 出處：arXiv (Autellix)
- citation key: `LuoEtAl2025a`

## 目的
回答「現有 LLM serving engine（vLLM 等）對 agent 工作負載是否最佳？是否有更好的 abstraction？」

## 核心主張（展開）
Autellix 觀察到 agent 工作負載與單次 LLM call 截然不同——程式整體有 cache reuse 機會、有並行 branch、有 tool wait time。把這些 program-level structure 暴露給 scheduler，可達 4–15× throughput 於 vLLM-class baseline。和 FAME 同屬 program-aware serving 陣營（但 Autellix 在 serving engine 層，FAME 在 FaaS 層）。

## 方法
工程：定義 program-aware scheduling abstraction；實作 serving engine；與 vLLM-class 對照 throughput / latency。

## 發現
- 4-15× throughput vs vLLM。
- 把「program」作為 scheduler 一級公民是 corpus 中 serving 層的關鍵 abstraction。
- 與 FAME 共構 program-aware serving 趨勢。

## 啟發
- **被啟發**：vLLM 等 token-level serving 研究。
- **啟發了**：[[P_draft_FAME]] — 共享 program-aware；[[P_draft_Cost_of_Pass]] — 在 serving 層直接降 cost-per-success。
