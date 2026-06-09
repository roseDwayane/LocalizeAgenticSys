---
schema_version: "1.0"
id: P_draft_MCP_Guard
type: point
name: "MCP-Guard (multi-stage defense framework)"
description: "3-stage defense (static analysis + neural detection + behavioural monitoring) reaching 96.01% adversarial-prompt detection accuracy on MCP-AttackBench (70,448 samples)."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [MCP, security, defense]

domain: [AI]
field: [MCP Security]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: [P_draft_MCP_Protocol]
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T3_MCP_Tool_Protocols]
related_body: []

source: "XingEtAl2025"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-3"
    - "step5_full_text/XingEtAl2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# MCP-Guard (multi-stage defense framework)

> **核心主張**：MCP 攻擊不能靠單一 detection 解決——MCP-Guard 提出 3-stage defense（static analysis + neural detection + behavioural monitoring）在 70K-sample MCP-AttackBench 上取得 96.01% adversarial-prompt detection accuracy。

## 來源
- 作者：Xing et al. (XingEtAl2025)
- 年份：2025
- 出處：arXiv (MCP-Guard)
- citation key: `XingEtAl2025`

## 目的
回答「面對 MSB 揭露的 40.35% ASR，能否設計可被部署的多層 defense？」

## 核心主張（展開）
MCP-Guard 把 defense 拆成三階段：(1) static analysis 偵測明顯惡意 server signatures、(2) neural detection 偵測 adversarial prompts、(3) behavioural monitoring 偵測異常 tool call patterns。在 70,448 sample MCP-AttackBench 達 96.01% detection accuracy。但 step6 cross-theme #4 指出，沒有任何 paper 同時量測 capability + security 的 trade-off——MCP-Guard 對任務性能的影響仍是空白。

## 方法
工程：3-stage 串接架構；建立 MCP-AttackBench (70K sample)；端到端評估 detection accuracy。

## 發現
- 96.01% detection accuracy。
- 是 corpus 中對 MCP 攻擊規模最大的 defense study。
- Open issue：對 task performance 的影響未量測。

## 啟發
- **被啟發**：[[P_draft_MSB]] — defends MSB-style attacks; [[P_draft_MCP_Protocol]] — 操作對象。
- **啟發了**：[[D_draft_MCP_Capability_vs_Security]] 的 defense 側引用；step7 可能識別此為 capability×security 待補實驗。
