---
schema_version: "1.0"
id: P_draft_MCP_Universe
type: point
name: "MCP-Universe (real-world MCP benchmark)"
description: "231 tasks × 11 servers × 6 domains; GPT-5 tops out at 43.72% — capability ceiling on real MCP servers."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [benchmark, MCP, execution_based]

domain: [AI]
field: [Benchmarks, MCP]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: [P_draft_MCP_Protocol]
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T3_MCP_Tool_Protocols, F_draft_T4_Agent_Benchmarks_Empirical]
related_body: []

source: "LuoEtAl2025b"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-3"
    - "step5_full_text/LuoEtAl2025b.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# MCP-Universe (real-world MCP benchmark)

> **核心主張**：在 231 個 task × 11 個真實 MCP server × 6 個 domain 的 execution-based benchmark 上，frontier 模型只達到 GPT-5 43.72% / Grok-4 33.33% / Claude-4-Sonnet 29.44% 的成功率——揭示「real MCP servers」是當前 LLM agent 能力的硬性天花板。

## 來源
- 作者：Luo et al. (LuoEtAl2025b)
- 年份：2025
- 出處：arXiv (MCP-Universe)
- citation key: `LuoEtAl2025b`

## 目的
回答「frontier LLM 在真實 MCP server 上的能力到哪？」

## 核心主張（展開）
MCP-Universe 跨 6 個 domain、11 個 server、231 個 task 量測 frontier 模型在實際 MCP 環境的成功率。重要結果：GPT-5 43.72%、Grok-4 33.33%、Claude-4-Sonnet 29.44%。Execution-based evaluation 是核心方法論貢獻——量測 agent *做了什麼*，而非評分 tool-call 字串。這項 benchmark 直接證明能力天花板還很低，與 MCP 安全 benchmark（MSB）的 40.35% ASR 形成 step6 點名的「能力 vs 安全裂縫」。

## 方法
建構：選擇 11 個生產 MCP server、設計 231 個 task、用 execution-based grader 量測 success → 對 frontier 模型做 evaluation。

## 發現
- GPT-5 43.72%、Grok-4 33.33%、Claude-4-Sonnet 29.44%。
- Execution-based evaluation 成為後續 MCP benchmark 的方法論標準。
- 與 MSB 同系統未對照——step6 cross-theme analysis 點名為結構性缺口。

## 啟發
- **被啟發**：[[P_draft_MCP_Protocol]] — 以 MCP 為評估基底。
- **啟發了**：[[P_draft_MCPToolBench]]、[[P_draft_MCP_AgentBench]] — 共享 execution-based 範式；[[D_draft_MCP_Capability_vs_Security]] 的能力側核心引用。
