---
session_id: "20260522"
date: "2026-05-22"
bridge_step: "research-to-knowledge dedup"
target_library: "20_Knowledge/10-Points/"
target_status: empty
---

# Dedup Report — Bridge Run 20260522

## TL;DR

**No existing `20_Knowledge/10-Points/` cards to dedup against — the target knowledge base is empty (only `.gitkeep`). All 45 P_draft cards from this run are NEW.**

The skill spec calls for fuzzy matching (Levenshtein ratio ≥ 0.85, lowercase + strip punctuation) against existing Point card names. With an empty target library, that loop has zero matches — no `MERGE` actions and no borderline cases.

## 高信度撞名 (≥0.85 fuzzy match) — `MERGE → P{NN}_X`

None. Target library empty.

## 中信度（待確認） — borderline cases

None. Target library empty.

## 既存可引用的 Knowledge 卡 — existing P cards new drafts depend on

None. Target library empty.

> Note: When `20_Knowledge/10-Points/` is populated in the future, re-run the dedup pass to (a) collapse drafts that duplicate existing cards via `MERGE` flags, and (b) rewrite the cross-references in drafts from `[[P_draft_X]]` to `[[P{NN}_X]]` style at promote time.

## New drafts (summary list — all 34 are new)

| Draft slug | Name | Primary plane | Notes |
|---|---|---|---|
| `P_draft_ClaudeCode` | Claude Code (Anthropic agent harness) | T1 | Anchor system #1 |
| `P_draft_OpenHands_Platform` | OpenHands (open-source generalist agent platform, v0) | T1 | Anchor system #2 |
| `P_draft_OpenHands_SDK` | OpenHands Software Agent SDK (V1 redesign) | T1 | Anchor system #2 (V1) |
| `P_draft_SWE_agent_ACI` | SWE-agent & the ACI thesis | T1 | Foundational |
| `P_draft_AHE` | Agentic Harness Engineering | T1 | Self-evolving harness |
| `P_draft_Code_as_Harness` | Code as Agent Harness | T1 | Code-as-substrate |
| `P_draft_NLAH` | Natural-Language Agent Harness | T1 | NL-as-substrate |
| `P_draft_OpenHands_Versa` | OpenHands-Versa (4-tool generalist) | T5 (cross-listed T1) | Minimalist generalist |
| `P_draft_AGENTS_md_Effect` | AGENTS.md effect | T1 | Empirical config-document study |
| `P_draft_Grep_beats_Vector` | Grep-beats-Vector | T1 (cross T2) | Retrieval × harness coupling |
| `P_draft_OrcaLoca` | OrcaLoca (priority-scheduled localization) | T1 | |
| `P_draft_Engineering_Pitfalls` | Engineering Pitfalls (3.8K bug taxonomy) | T4 (cross T1) | |
| `P_draft_ACE` | Agentic Context Engineering | T2 | Evolving playbook |
| `P_draft_GCC` | Git Context Controller | T2 | Version-controlled snapshot |
| `P_draft_Observation_Masking` | Observation Masking (Complexity Trap) | T2 | Simple-派核心 |
| `P_draft_ACC` | Active Context Compression | T2 | |
| `P_draft_PAACE` | Plan-Aware Automated Agent Context Engineering | T2 | |
| `P_draft_ByteRover` | ByteRover (agent-native curated memory) | T2 | No-vector-DB |
| `P_draft_Structural_Context_Model` | Structural Context Model | T2 | Formalisation |
| `P_draft_Externalization_Framework` | Externalisation framework | T2 (cross T1/T3/T5) | Unifying paradigm |
| `P_draft_HaystackCraft` | HaystackCraft (cascading-error benchmark) | T2 (cross T4) | |
| `P_draft_MCP_Protocol` | Model Context Protocol | T3 | Anchor concept |
| `P_draft_MCP_Universe` | MCP-Universe | T3 (cross T4) | Capability benchmark |
| `P_draft_MCP_AgentBench` | MCP-AgentBench | T3 (cross T4) | Open-weights compete |
| `P_draft_MCPToolBench` | MCPToolBench++ | T3 (cross T4) | Large-scale tool bench |
| `P_draft_MCP_Bridge` | MCP Bridge | T3 (cross T6) | RESTful proxy + Qwen3 |
| `P_draft_ScaleMCP` | ScaleMCP | T3 | 5K-server retrieval |
| `P_draft_FAME` | FAME | T3 (cross T6) | FaaS-decomposed ReAct |
| `P_draft_MSB` | MCP Security Bench | T3 | Security capability gap |
| `P_draft_MCP_Guard` | MCP-Guard | T3 | Defense pipeline |
| `P_draft_SWE_bench` | SWE-bench | T4 | Foundational hub |
| `P_draft_SWE_bench_Live` | SWE-bench-Live | T4 | Contamination signal |
| `P_draft_LoCoBench_Agent` | LoCoBench-Agent | T4 (cross T2) | Interactive long-context |
| `P_draft_OAgents` | OAgents (reproducibility crisis) | T4 (cross T5) | |
| `P_draft_AIDev` | AIDev (932K agentic PRs) | T4 | |
| `P_draft_Magentic_One` | Magentic-One | T5 | Orchestrator + specialists |
| `P_draft_Alita` | Alita (minimal-predefinition self-evolving) | T5 | |
| `P_draft_HGM` | Huxley-Gödel Machine | T5 | Tree-search self-modification |
| `P_draft_AWorld` | AWorld (Qwen3-32B > GPT-4o GAIA) | T5 (cross T6) | Open-source training |
| `P_draft_WangEtAl2024a_LLMAgent_Survey` | LLM Autonomous Agents (founding survey) | T5 | Umbrella reference |
| `P_draft_AWQ` | Activation-aware Weight Quantization | T6 | Foundational |
| `P_draft_SmallThinker` | SmallThinker (natively-local LLM) | T6 | |
| `P_draft_Autellix` | Autellix (program-aware serving) | T6 | |
| `P_draft_Cost_of_Pass` | Cost-of-Pass (Efficient Agents) | T6 (cross T4) | Methodological metric |
| `P_draft_Simple_Beats_Fancy` | Simple-beats-Fancy (cross-corpus phenomenon) | T1/T2/T5 | Cross-theme named phenomenon |

**Total new P drafts: 45** (verified by `ls points/P_draft_*.md | wc -l` = 45).

## Standalone Line drafts (4 new)

| Draft slug | Type | Endpoints summary |
|---|---|---|
| `E_draft_Externalization_Lineage` | evolution | 9 P endpoints across T1/T2/T5 |
| `D_draft_Simple_Beats_Fancy` | debate | 14 P endpoints (8 simple + 6 fancy) across T1/T2/T3/T5 |
| `D_draft_MCP_Capability_vs_Security` | debate | 6 P endpoints (3 capability + 3 security/defense) in T3 |
| `A_draft_Externalization_vs_SelfImproving` | analogy | 9 P endpoints across T1/T2/T5 |

## Plane drafts (6 new)

`F_draft_T1_Coding_Agent_Harnesses`, `F_draft_T2_Context_Memory_Engineering`, `F_draft_T3_MCP_Tool_Protocols`, `F_draft_T4_Agent_Benchmarks_Empirical`, `F_draft_T5_Generalist_Self_Improving`, `F_draft_T6_Local_Inference_Serving` — one per theme.

## Estimated promote workload

| Card type | Count | Per-card minutes | Sub-total |
|---|---|---|---|
| Point (P_draft) | 45 | 4 min (review + light edit + cross-link rewrite + frontmatter patch application) | 180 min |
| Line (E/D/A) | 4 | 8 min (longer body; review endpoints + Cary 意義) | 32 min |
| Plane (F_draft) | 6 | 10 min (review 5 Q + member list + Q5 待補 reconcile if step7 exists) | 60 min |
| **Total promote workload** | **55 drafts** | — | **~272 min (≈ 4.5 hours)** |

If step7 (gap analysis) and step8 (hypothesis) are not yet run, promote can proceed but Plane Q5 fields will carry the `(待補)` marker into 20_Knowledge until a follow-up re-run.

## Recommended order at promote time

1. Plane drafts first (`F_draft_T1` … `F_draft_T6`) — they ground the new Knowledge spine.
2. Point drafts grouped by Plane — process each Plane's `member_points` together so cross-refs can be rewritten coherently.
3. Line drafts last — these need endpoint P card IDs to be assigned first.
4. After Pass 4 (Body) runs, promote the Body card as the cap.
