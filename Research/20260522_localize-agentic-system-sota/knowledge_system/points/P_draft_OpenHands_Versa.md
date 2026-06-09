---
schema_version: "1.0"
id: P_draft_OpenHands_Versa
type: point
name: "OpenHands-Versa (4-tool minimalist generalist)"
description: "A coding agent with only four general tools (code, search, browse, file-access) beats specialist agents on SWE-Bench MM / GAIA / Agent Company by +9.1 / +1.3 / +9.1 pp."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [generalist_agent, minimalism, harness]

domain: [AI]
field: [Coding Agents, Generalist Agents]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent: P_draft_OpenHands_Platform
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T1_Coding_Agent_Harnesses, F_draft_T5_Generalist_Self_Improving]
related_body: []

source: "SoniEtAl2025"
year: 2025
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
    - "step6_sota_review.md#theme-5"
    - "step5_full_text/SoniEtAl2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# OpenHands-Versa (4-tool minimalist generalist)

> **核心主張**：四個 general tool (code、search、browse、file-access) 已足以讓一個 generalist agent 在三個 diverse benchmark (SWE-Bench MM / GAIA / Agent Company) 上勝過最佳專門 agent，差距分別 +9.1 / +1.3 / +9.1 pp。

## 來源
- 作者：Soni et al. (SoniEtAl2025)
- 年份：2025
- 出處：arXiv (OpenHands-Versa)
- citation key: `SoniEtAl2025`

## 目的
回答「generalist agent 真正需要多少工具？」——把「越多工具越好」假設改為一個可被否證的命題。

## 核心主張（展開）
OpenHands-Versa 把工具集刻意減到 4 個 general-purpose tool，並在三個 diverse benchmark 上同時測試。結果三個 benchmark 都同時打敗各自的最佳 specialist agent。這直接挑戰 ScaleMCP / FAME / ByteRover 一派「擴張 infrastructure」的路線。

## 方法
工程設計：精簡工具集 → 在 SWE-Bench Multimodal、GAIA、The Agent Company 三個 benchmark 上端到端評估 → 跟各 benchmark 之 prior SOTA specialist 對比。

## 發現
- +9.1 pp on SWE-Bench MM, +1.3 pp on GAIA, +9.1 pp on The Agent Company。
- 跨三個極不同 benchmark 同時 win，是 generalist 假設的強證據。
- 與 LindenbauerEtAl2025、SenEtAl2026、LullaEtAl2026 一起構成「simple beats fancy」的反覆量測證據鏈。

## 啟發
- **被啟發**：[[P_draft_OpenHands_Platform]] — 直接以 OpenHands 為 substrate。
- **啟發了**：[[P_draft_Simple_Beats_Fancy]] — 提供主軸證據；[[D_draft_Simple_Beats_Fancy]] 標記為 debate 中的「simple 派」核心案例。
