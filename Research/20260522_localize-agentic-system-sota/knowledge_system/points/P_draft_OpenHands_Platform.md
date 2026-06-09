---
schema_version: "1.0"
id: P_draft_OpenHands_Platform
type: point
name: "OpenHands (open-source generalist agent platform, v0)"
description: "Open community platform for AI software developer agents with sandboxed execution and 15-benchmark evaluation."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [anchor_system, harness, open_source]

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

source: "WangEtAl2024c"
year: 2024
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
    - "step5_full_text/WangEtAl2024c.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# OpenHands (open-source generalist agent platform, v0)

> **核心主張**：開放、社群驅動的 generalist agent 平台是學界研究 production-grade harness 設計的最直接 substrate；以 sandboxed execution + 15-benchmark eval 設立了開源 baseline。

## 來源
- 作者：Wang et al. (WangEtAl2024c)
- 年份：2024
- 出處：arXiv (OpenHands platform paper)
- citation key: `WangEtAl2024c`

## 目的
回答「能否有一個可被學界擴展與覆寫的開源 agent 平台，作為 production scaffold 的研究與對照基準？」

## 核心主張（展開）
OpenHands 提供以 sandboxed execution 為核心的 generalist agent 平台 v0，並以 15-benchmark eval 公開度量其能力，建立了開源 agent 研究的事實標準。它與 Claude Code 同屬「production-grade harness」家族，但是程式碼可被 fork 與 instrument，讓 LindenbauerEtAl2025、SoniEtAl2025、AHE 等後續研究能在同一 substrate 上做受控比較。

## 方法
平台論文：定義 OpenHands 的架構元件（agent runtime、sandbox、event stream、tool layer），在 15 個公開 benchmark 上端到端評估（SWE-bench、WebArena 等），公開原始碼與 docker image 以利重現。

## 發現
- 開源 generalist agent 在 multi-benchmark eval 上達 competitive 成績，證明 community-driven scaffold 可達近 SOTA。
- Sandboxed execution + event-sourced trajectory 成為後續 SDK 改版 (WangEtAl2025c) 的根基。
- 平台層直接成為三篇後續研究的 substrate：LindenbauerEtAl2025 的 observation masking 復現、SoniEtAl2025 OpenHands-Versa 的 4-tool generalist、AHE 的 cross-harness transfer。

## 啟發
- **被啟發**：[[P_draft_SWE_agent_ACI]] — 接受 SWE-agent ACI 論點作為 harness 設計基線。
- **啟發了**：[[P_draft_OpenHands_SDK]] — V1 SDK 重新設計；[[P_draft_OpenHands_Versa]] — 4-tool minimalist generalist 直接建構於 OpenHands 之上；[[P_draft_AHE]] — AHE 把 OpenHands 列為對照基準。
