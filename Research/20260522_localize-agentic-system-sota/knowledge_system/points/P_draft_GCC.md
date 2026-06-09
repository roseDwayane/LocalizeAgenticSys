---
schema_version: "1.0"
id: P_draft_GCC
type: point
name: "GCC — Git Context Controller"
description: "Git-style COMMIT/BRANCH/MERGE semantics applied to agent context; +13% resolved on SWE-bench Verified, >80% absolute."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [context_engineering, version_control, harness]

domain: [AI]
field: [Context Engineering]

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

source: "WuEtAl2025"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-2"
    - "step5_full_text/WuEtAl2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# GCC — Git Context Controller

> **核心主張**：把 git 的 COMMIT / BRANCH / MERGE 語義搬到 agent context 管理層——讓 agent 能 snapshot、回溯、分支地探索 context 演化路徑，在 SWE-bench Verified 上取得 +13% resolved，絕對解決率超過 80%。

## 來源
- 作者：Wu et al. (WuEtAl2025)
- 年份：2025
- 出處：arXiv (Git Context Controller)
- citation key: `WuEtAl2025`

## 目的
回答「long-horizon agent 在處理多階段任務時，能否像 git 一樣對 context 做版本管理？」

## 核心主張（展開）
GCC 把 git 的版本控制概念（COMMIT/BRANCH/MERGE）作為一級操作引入 agent context 層。Agent 可在不同 trajectory 分支之間切換、可在 long-horizon 任務的 milestone 處 commit、可在失敗時回滾。在 SWE-bench Verified 上 +13%，absolute resolved rate >80%。GCC 與 ACE 同屬 "structured context management"。

## 方法
工程實作：在 agent runtime 加入 context VCS layer，定義 COMMIT/BRANCH/MERGE 介面 → 在 SWE-bench Verified 上端到端評估。

## 發現
- +13% resolved on SWE-bench Verified，絕對 >80% 是這個 benchmark 上罕見的高分。
- Branch+merge 機制讓 agent 能 explore 多種 context 配置而不污染主線。
- 與 ACE 同屬「結構化 context 管理」陣營但採用 snapshot 而非 incremental 方式。

## 啟發
- **被啟發**：[[P_draft_ACE]] — 共享「context as structured artifact」前提。
- **啟發了**：[[P_draft_OrcaLoca]] — OrcaLoca 的 priority + context pruning 與 GCC branch 邏輯互補；[[E_draft_Externalization_Lineage]] 演化鏈一環。
