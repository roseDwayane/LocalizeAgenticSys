---
schema_version: "1.0"
id: P_draft_SWE_agent_ACI
type: point
name: "SWE-agent & the Agent-Computer Interface (ACI) thesis"
description: "Designing an LM-oriented Agent-Computer Interface yields a 64% relative SWE-bench gain holding the base model constant."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [harness, paradigm, foundational]

domain: [AI]
field: [Coding Agents, Agent Harness]

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

source: "YangEtAl2024"
year: 2024
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
    - "step5_full_text/YangEtAl2024.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# SWE-agent & the Agent-Computer Interface (ACI) thesis

> **核心主張**：為 LLM 設計（而非為人類設計）的 Agent-Computer Interface (ACI) 在同一底模上能取得 SWE-bench 解題率 +64% 相對提升——確立「harness > model」的論點基線。

## 來源
- 作者：Yang et al. (YangEtAl2024)
- 年份：2024
- 出處：arXiv (SWE-agent)
- citation key: `YangEtAl2024`

## 目的
回答「在固定底模下，介面設計對 agent 能力的邊際貢獻有多大？」——把 harness 從工程細節升格為研究變數。

## 核心主張（展開）
SWE-agent 提出 Agent-Computer Interface (ACI) 概念：把 shell-only 介面換成為 LLM 重新設計的 file_editor / search / command_runner 等指令集後，同一 base model 在 SWE-bench Lite 上的相對解題率提升 64%。此論點此後成為整個 corpus 的奠基命題——所有後續 harness 論文都接受或延伸 ACI。

## 方法
控制變因實驗：固定 base model（GPT-4 系列），對照「shell-only」與「ACI」兩種介面，在 SWE-bench Lite 上量測相對解題率。並開源完整 agent 與工具集供社群復現。

## 發現
- +64% 相對 resolved-rate gain，數值在後續研究中被反覆引用為 harness-engineering 的存在性證明。
- 介面的「LM-oriented」設計（短輸出、明確錯誤、結構化回傳）比指令數量更重要。
- 成為 OpenHands、AHE、NLAH、Code-as-Harness 的共同祖先論文。

## 啟發
- **被啟發**：[[P_draft_SWE_bench]] — 直接以 SWE-bench 為評估面。
- **啟發了**：[[P_draft_ClaudeCode]] — Claude Code 的 tool/permission 層接受 ACI 為 table stakes；[[P_draft_OpenHands_Platform]] — OpenHands 平台延伸 ACI 並開源；[[P_draft_AHE]] — AHE 引用 SWE-agent；[[P_draft_NLAH]] — NLAH 改以自然語言形式重述 harness 的 ACI 觀點；[[P_draft_Code_as_Harness]] — Code-as-Harness 把 ACI 升格為 substrate 論點。
