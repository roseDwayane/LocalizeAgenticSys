---
schema_version: "1.0"
id: P_draft_NLAH
type: point
name: "Natural-Language Agent Harness (NLAH)"
description: "Harness expressed as a natural-language document interpreted at runtime by an Interpreter-Harness Runtime; 60.1k-token code harness → 2.9k-token NL harness at comparable success."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [harness, paradigm, natural_language]

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

source: "PanEtAl2026"
year: 2026
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
    - "step5_full_text/PanEtAl2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Natural-Language Agent Harness (NLAH)

> **核心主張**：harness 不必以程式碼撰寫——一個 2.9k-token 的自然語言文件被 Interpreter-Harness Runtime 解讀，可以在 SWE Verified / TB2 / OSWorld 上達到與 60.1k-token code harness 相當的 success rate。

## 來源
- 作者：Pan et al. (PanEtAl2026)
- 年份：2026
- 出處：arXiv ("Natural-Language Agent Harnesses")
- citation key: `PanEtAl2026`

## 目的
回答「harness 的最少必要表達形式是什麼？code 是必須的，還是 prompt-style document 已足夠？」

## 核心主張（展開）
NLAH 用一份自然語言文件描述 agent 應如何操作（工具、決策、回退、終止條件），由 Interpreter-Harness Runtime (IHR) 在執行期解讀。實驗顯示在 Live-SWE 等場景下，2.9k-token 的 NL harness 達到與 60.1k-token code harness 相當的 success rate——表示大量 harness 邏輯可從 code 移到自然語言層。

## 方法
把現有 code harness (例如 Live-SWE) 重寫成同義的 NL document，使用 IHR 執行；在 SWE Verified、Terminal-Bench 2、OSWorld 三個 benchmark 上比較 success / token 用量。

## 發現
- Live-SWE: 60.1k → 2.9k token，success comparable。
- 跨三個 benchmark 都不顯著低於 code harness。
- NLAH 是「simple beats fancy」主題的方法論證據之一——少量 NL 等價於大量 code。

## 啟發
- **被啟發**：[[P_draft_SWE_agent_ACI]] — 以 ACI 為論點起點；[[P_draft_ClaudeCode]] / [[P_draft_OpenHands_Platform]] — 引用為對照系統。
- **啟發了**：[[P_draft_AGENTS_md_Effect]] — AGENTS.md 是 NLAH 的極簡 production 化；構成 [[D_draft_Simple_Beats_Fancy]] 與 [[E_draft_Externalization_Lineage]] 的關鍵節點。
