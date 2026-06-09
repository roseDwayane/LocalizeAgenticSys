---
schema_version: "1.0"
id: P_draft_AHE
type: point
name: "Agentic Harness Engineering (AHE)"
description: "Observability-driven closed-loop automatic evolution of coding-agent harnesses; +7.3 pp on Terminal-Bench 2, transfers across base models."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [harness, self_evolution, observability]

domain: [AI]
field: [Coding Agents, Agent Harness]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: [P_draft_ClaudeCode, P_draft_SWE_agent_ACI]
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T1_Coding_Agent_Harnesses, F_draft_T5_Generalist_Self_Improving]
related_body: []

source: "LinEtAl2026"
year: 2026
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
    - "step5_full_text/LinEtAl2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Agentic Harness Engineering (AHE)

> **核心主張**：把 harness 視為由 7 個可編輯組件（Skills / Memory / Sub-agent / History / Tools / Middleware / System Prompt）構成的演化對象，以三柱 observability（component / experience / decision）驅動 10 輪 closed-loop 自動演化。

## 來源
- 作者：Lin, Jiahang et al. (LinEtAl2026)
- 年份：2026
- 出處：arXiv ("Agentic Harness Engineering")
- citation key: `LinEtAl2026`

## 目的
回答「能否把 harness 設計從手工調參變成可自動演化、可量測、可重現的工程學科？」

## 核心主張（展開）
AHE 把 coding-agent harness 形式化為 7 個顯式可編輯組件的集合，然後以三類 observability 訊號（component-level、experience-level、decision-level）作為驅動力，做 10 輪 closed-loop 演化。每一次編輯都是可被驗證的 hypothesis。實驗顯示 AHE 從 Terminal-Bench 2 的 69.7% 提升到 77.0% pass@1（GPT-5.4），超越 Codex-CLI 的 71.9%，且 cross-model transfer 也帶來 +5.1 ~ +10.1pp 提升、token 用量減少 12%。

## 方法
建立 7-component harness 表徵 → 在每輪迭代中蒐集三類 observability 訊號 → LLM 提出對某個 component 的修改 → 在 benchmark 上驗證 → 保留正向修改、丟棄負向。10 輪後 freeze。並設計 cross-base-model transfer 實驗。

## 發現
- Terminal-Bench 2: 69.7% → 77.0% pass@1，beats Codex-CLI 71.9%。
- Cross-base-model transfer: +5.1 ~ +10.1pp gain, 12% fewer tokens（但測試規模有限——這是 step6 提到的 open issue）。
- 七組件中以 Skills 與 Memory 編輯的邊際貢獻最高。

## 啟發
- **被啟發**：[[P_draft_ClaudeCode]] — 引用 Claude Code 的 Skills/Memory/Sub-agent 設計；[[P_draft_SWE_agent_ACI]] — 接受 ACI 為 baseline；[[P_draft_ACE]] — 與 ACE 的「context as evolving artifact」共享方法論。
- **啟發了**：[[P_draft_HGM]] — HGM 同屬 self-evolving family；構成 [[E_draft_Externalization_Lineage]] 演化鏈一環。
