---
schema_version: "1.0"
id: F_draft_T3_MCP_Tool_Protocols
type: plane
name: "MCP & Tool / Protocol Ecosystem"
description: "The integration plane: protocol, capability benchmarks, infrastructure, security, defense — all built around the Model Context Protocol."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [theme_3, MCP, protocol]

domain: [AI]
field: [Agent Protocols, Tool Use]

status: draft
created: 2026-05-22
updated: 2026-05-22

member_points:
  - P_draft_MCP_Protocol
  - P_draft_MCP_Universe
  - P_draft_MCP_AgentBench
  - P_draft_MCPToolBench
  - P_draft_MCP_Bridge
  - P_draft_ScaleMCP
  - P_draft_FAME
  - P_draft_MSB
  - P_draft_MCP_Guard

adjacent_planes:
  - F_draft_T1_Coding_Agent_Harnesses
  - F_draft_T4_Agent_Benchmarks_Empirical
  - F_draft_T6_Local_Inference_Serving

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-3"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# F_draft_T3 — MCP & Tool / Protocol Ecosystem

## Q1 解決什麼問題？

回答：LLM agent 該以什麼形式接外部世界？是否能有一個跨家族的標準 integration layer？同時，怎麼 benchmark 它、怎麼 scale 它、怎麼 secure 它？

step6 Theme 3 §Landscape：「MCP has become, within roughly 18 months of Anthropic's release, the de facto integration layer for agentic tool access — what LuoEtAl2025b calls the 'USB-C of AI' and what Ray2025 frames as the answer to three long-standing barriers (stateless interfaces, ad-hoc security, no unified multi-turn context mechanism).」

## Q2 核心概念有哪些？

step6 Theme 3 把 MCP 子場分成三條子流：

### 基礎設施
- [[P_draft_MCP_Protocol]] (Ray2025) — 協議本身、USB-C 隱喻、3 個長期障礙的解方。
- [[P_draft_MCP_Bridge]] (AhmadiEtAl2025) — RESTful proxy + 3-tier risk model + fine-tuned Qwen3。
- [[P_draft_ScaleMCP]] (LumerEtAl2025) — CRUD-synced dynamic retrieval over 5K servers。
- [[P_draft_FAME]] (KulkarniEtAl2026) — FaaS-decomposed ReAct (Planner / Actor / Evaluator)。

### Benchmarks
- [[P_draft_MCP_Universe]] (LuoEtAl2025b) — 231 task × 11 server × 6 domain；GPT-5 43.72% 天花板。
- [[P_draft_MCPToolBench]] (FanEtAl2025) — 4K+ server × 40+ category。
- [[P_draft_MCP_AgentBench]] (GuoEtAl2025) — 600 query × 33 server × 188 tool；open-weights Qwen3 overall top。

### 安全
- [[P_draft_MSB]] (ZhangEtAl2025b) — 12 attack × 9 agent × 405 tool；ASR 40.35%；"stronger models more vulnerable"。
- [[P_draft_MCP_Guard]] (XingEtAl2025) — 3-stage defense；96.01% detection on 70K-sample bench。

非升格 member：
- EhteshamEtAl2025 — 4-protocol roadmap (MCP → ACP → A2A → ANP) survey
- RadosevichHalloran2025 — MCPSafetyScanner end-to-end attack tool（融入 MSB / MCP-Guard 上下文）
- SongEtAl2025a — 4-category attack taxonomy + 20-user study（融入 MSB）

## Q3 概念之間關係？

- [[D_draft_MCP_Capability_vs_Security]] — **這是 T3 內部最大的張力**，step6 Cross-Theme #4 直接稱「the field's biggest unhealed crack」。
- Frontmatter patches（見 `lines/frontmatter_patches.md`）：
  - 所有 MCP-* card `depends_on` MCP_Protocol。
  - MCP_Guard `caused_by` MSB（defends against MSB attacks）。
  - MCP_Bridge `caused_by` MCP_Protocol；`related_lines` MCPToolBench（fine-tune base）。
  - FAME `related_lines` Autellix（program-aware serving）+ MCP_Universe（MCP infrastructure）。
- 跨 plane 連結：
  - MCP_Bridge 連 [[F_draft_T6_Local_Inference_Serving]]（Qwen3 fine-tuning + local deployment）。
  - FAME 同樣連 T6（serving 層）。
  - MCP_AgentBench / MCPToolBench / MCP_Universe 連 [[F_draft_T4_Agent_Benchmarks_Empirical]]（benchmark methodology）。
  - OpenHands_SDK 連 MCP_Protocol（native integration; T1 ↔ T3）。
  - Alita 連 MCP_Protocol（run-time MCP 生成；T5 ↔ T3）。

## Q4 常用方法？

step6 Theme 3 §Methodological patterns 點名兩個主要方法論：

1. **Execution-based evaluation**：MCP-Universe / MCP-AgentBench / MCPToolBench++ 都量 *what the agent did* against real MCP servers, not how it scored tool-call strings。Simulation-only benchmark 已被視為 inadequate。
2. **Open-weights 競爭力的反覆觀察**：
   - MCP-AgentBench: Qwen3-235B-A22B overall top。
   - MCP Bridge: fine-tuned Qwen3-4B/8B F1 73.0% > GPT-OSS-120B 62.17%。
   - Security 研究均收斂到攻擊分類學（SongEtAl2025a 4 類；ZhangEtAl2025b 12 類）+ 端到端攻擊執行對 production MCP aggregator。

實作層常用 pattern：Ray2025 設定的 client-server abstraction；AhmadiEtAl2025 的 RESTful proxy + risk-tier；KulkarniEtAl2026 的 FaaS decomposition；XingEtAl2025 的 multi-stage defense pipeline。

## Q5 常見錯誤？

step6 Theme 3 §Open issues 直接點名：

1. **同系統 capability × security 量測缺**：「No paper in the corpus measures both axes for the same system, so the field cannot yet tell whether security defenses (XingEtAl2025) cost task performance, and how much.」這是 T3 最具結構性的方法論錯誤模式。
2. **誤把能力等同安全**：ZhangEtAl2025b 直接觀察「models with stronger performance are more vulnerable to attacks due to their outstanding tool calling and instruction following capabilities」——但 capability 論文中無一引用此觀察，仍預設能力強 = 安全好。
3. **Roadmap proposal 不是 evaluation**：EhteshamEtAl2025 提出 MCP → ACP → A2A → ANP roadmap 但屬提案性質；當前 corpus 無 multi-protocol 對照。把 roadmap 當作 evidence 是錯誤模式。

step6 Theme 3 §Anchor system connection 點名：**Claude Code 在 LuoEtAl2025b 上只達 29.44% 成功率 / 在 MSB 中是 attack target——但 Claude Code 同時是當前 production 上最普及的 agent 之一。對 user 而言，這個 capability 天花板與 security 風險是直接相關的部署 caveat。**

(待補：需 /research step 7 後補入 GAP 證據 — 預期 step7 會 lock "MCP 同系統 capability×security 量測" 為 T3 第一 GAP；可能會把 MCP-Guard 對 task performance 影響量化列為 second GAP。)
