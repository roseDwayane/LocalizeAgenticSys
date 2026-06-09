---
schema_version: "1.0"
id: P_draft_Engineering_Pitfalls
type: point
name: "Engineering Pitfalls (3.8K bugs in Claude Code / Codex / Gemini CLI)"
description: "3.8K real bugs across three AI coding tools; >67% are functionality; 36.9% root cause API/integration; 18.3% API errors."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [empirical, bug_study, reliability]

domain: [AI]
field: [Coding Agents, Reliability]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T4_Agent_Benchmarks_Empirical, F_draft_T1_Coding_Agent_Harnesses]
related_body: []

source: "ZhangEtAl2026"
year: 2026
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-4"
    - "step5_full_text/ZhangEtAl2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Engineering Pitfalls (3.8K bugs in Claude Code / Codex / Gemini CLI)

> **核心主張**：把 3,800 個真實 AI coding tool bug 跨三家（Claude Code、Codex、Gemini CLI）做分類分析，發現 >67% 是 functionality bug、36.9% 的 root cause 在 API/integration、18.3% 為 API error——把 reliability 變成 corpus 中第一份結構化的研究主題。

## 來源
- 作者：Zhang et al. (ZhangEtAl2026)
- 年份：2026
- 出處：arXiv ("Engineering Pitfalls in AI Coding Tools")
- citation key: `ZhangEtAl2026`

## 目的
回答「production AI coding tool 的失敗模式是什麼？bug 根因分布在哪？」

## 核心主張（展開）
ZhangEtAl2026 從三家 production CLI agent 蒐集 3,800 個 bug，做 manual + LLM-assisted 分類。結果：>67% 是 functionality 類；36.9% 根因在 API/integration；18.3% 是 API error。這是 corpus 中對「為什麼 production agent 會失敗」最系統的分析，與 LiuEtAl2026 / SantosEtAl2025 的「Claude Code 怎麼設計」形成正反兩面對照。

## 方法
Bug mining + manual triage + LLM-assisted classification；分跨三家 agent 比對；計算 root cause 分布。

## 發現
- >67% 為 functionality bug。
- 36.9% root cause = API/integration——指出 API 介面層是失敗熱區。
- 18.3% 為純 API error。
- 提供未來 harness 與 MCP 設計改善的具體靶點。

## 啟發
- **被啟發**：[[P_draft_ClaudeCode]] — 是分析對象之一；[[P_draft_AIDev]] — 共享大規模觀察方法。
- **啟發了**：[[F_draft_T1_Coding_Agent_Harnesses]] 在「常見錯誤」維度的具體填料；step7 GAP 預期會把 API/integration reliability 列為熱點。
