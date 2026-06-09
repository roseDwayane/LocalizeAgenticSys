---
session_id: "20260522"
topic: "How to build a state-of-the-art localized agentic system"
date: "2026-05-22"
step: 3
threshold: 3.5
weights: "relevance=0.50, quality=0.30, recency_impact=0.20"
---

# Screening Results / 篩選結果

> Topic / 研究主題: How to build a state-of-the-art localized agentic system / 如何建造最先進的本地化代理系統
> Papers screened / 篩選論文數: 62
> Date / 篩選日期: 2026-05-22
> Threshold / 門檻: composite >= 3.50

## Screening Criteria / 篩選標準

### Inclusion / 納入條件
- **Population fit / 對象吻合**: Studies local, on-device, open-source, or self-hosted LLM agent systems (Claude Code, OpenHands, ReAct, AutoGen, Cline, Aider, MCP-based agents). Cloud-frontier agents are acceptable when they reveal architectural principles transferable to local stacks. / 研究本地、邊端、開源、或自管 LLM 代理系統，雲端前沿代理若提供可轉移的架構洞見也納入。
- **Intervention fit / 介入吻合**: Addresses at least one architectural pillar — context engineering, harness engineering, extension mechanisms (skills/tools/MCP/hooks/subagents), planning, memory, sandboxing, or local inference. / 涵蓋上下文工程、harness 工程、擴展機制、規劃、記憶、沙箱、或本地推理之至少一項。
- **Outcome fit / 結果吻合**: Reports an outcome on agent benchmarks (SWE-bench, WebArena, GAIA, AgentBench, OSWorld, Terminal-Bench), context cost, latency on local hardware, tool reliability, or autonomy depth. / 報告代理基準分數、上下文成本、本地延遲、工具可靠性、或自主深度。
- **Study type / 研究類型**: Empirical study, systematic review, technical report, engineering blog/white paper, or methodological proposal with evaluation. Preprints accepted (arXiv is a primary venue here). / 接受實證研究、系統綜述、技術報告、含評估的方法論提案；接受 arXiv 預印本。
- **Timeframe / 時間範圍**: 2023–2026, with emphasis on 2024–2026. / 2023–2026，重點 2024–2026。

### Exclusion / 排除條件
- Off-topic systems (e.g., recommendation systems, robotics manipulation, vision-only models with no agentic loop). / 偏離主題的系統。
- Pure prompt-engineering tricks for non-agentic chatbots. / 純粹針對非代理聊天機器人的提示工程。
- No abstract AND ambiguous title. / 無摘要且標題模糊者。
- Pure MCP-security exploit reports without architectural contribution (note: penalised on **relevance** axis, not **quality** — the security work itself is rigorous, but its alignment to the SOTA-architecture question is partial). / 純粹的 MCP 安全攻擊報告，未提供架構洞見者在「相關性」軸上扣分。

> **Note on OpenClaw security papers**: The Step-2 corpus excludes a subset of arXiv 2604.xxxxx OpenClaw security-analysis papers by design (per search-agent note). They are not present in `step2_raw_papers.json` and therefore not scored here. / 注意：第二步語料依設計排除了部分 OpenClaw 安全分析論文。

> **Note on Semantic Scholar outage**: Many arXiv-only entries have `citation_count: null` because the SS rate-limit during Step 2 prevented citation enrichment. Per skill spec, missing citation_count was NOT penalised — recency & impact were judged on year + topical importance + venue/anchor-system relevance. / 注意：Semantic Scholar 在第 2 步發生限流，許多 arXiv 論文無引用數，已依規範不對此扣分。

## Summary / 摘要

| Category / 分類 | Count / 數量 | Percentage / 百分比 |
|-----------------|-------------|-------------------|
| **Included / 納入** | **56** | **90.3%** |
| Borderline / 邊緣 | 6 | 9.7% |
| Excluded / 排除 | 0 | 0.0% |
| **Total / 總計** | **62** | **100.0%** |

> Inclusion rate is high because Step 2's targeted multi-query strategy (anchored on Claude Code / OpenHands / hermes-agent) produced an unusually on-topic corpus. The 6 borderline papers cluster around MCP-security edge cases and one reasoning-survey adjacency. / 納入率偏高，因第 2 步多查詢策略對主題集中度高；邊緣論文集中於 MCP 安全與一篇推理綜述。

## Tier 1: Core / 核心論文 (Score >= 4.5)

These 18 papers form the structural core for the SOTA review — anchor-system architectures, harness engineering, context engineering, and the MCP protocol survey. / 此 18 篇構成 SOTA 綜述的結構核心。

| ID | Title | Authors | Year | Rel | Qual | Rec | **Composite** | Rationale |
|----|-------|---------|------|-----|------|-----|---------------|-----------|
| paper_005 | OpenHands: An Open Platform for AI Software Developers as Generalist Agents | Wang et al. | 2024 | 5 | 5 | 5 | **5.00** | Hub paper (in-degree 8); the canonical open-source agentic platform — sandboxed exec + multi-benchmark eval + 188 contributors. Direct anchor system. |
| paper_032 | Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses | Lin et al. | 2026 | 5 | 5 | 5 | **5.00** | Hub paper; defines harness engineering as a discipline, Terminal-Bench 2 77.0% surpassing human-designed Codex-CLI. The crown empirical paper. |
| paper_011 | A Survey on Model Context Protocol: Architecture, State-of-the-art, Challenges and Future Directions | Ray | 2025 | 5 | 4 | 5 | **4.70** | Hub paper (in-degree 9); MCP foundational survey, 25 cites despite recent year. The reference work for the protocol layer. |
| paper_028 | Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems | Liu et al. | 2026 | 5 | 4 | 5 | **4.70** | Hub paper (in-degree 5); source-code-level analysis of Claude Code architecture — directly answers "how is the anchor system built". |
| paper_002 | SWE-bench: Can Language Models Resolve Real-World GitHub Issues? | Jimenez-Gomez et al. | 2023 | 4 | 5 | 5 | **4.50** | Hub paper (in-degree 10, highest); the gold-standard coding-agent benchmark. Cited by virtually every coding-agent paper. |
| paper_003 | SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering | Yang et al. | 2024 | 5 | 4 | 4 | **4.50** | Hub paper; introduced the agent-computer interface concept — foundational to harness design. |
| paper_006 | The OpenHands Software Agent SDK: A Composable and Extensible Foundation for Production Agents | Wang et al. | 2025 | 5 | 4 | 4 | **4.50** | Local-to-remote portability, native sandboxed exec, model-agnostic routing — direct production-grade local-agent blueprint. |
| paper_008 | Externalization in LLM Agents: A Unified Review of Memory, Skills, Protocols and Harness Engineering | Zhou et al. | 2026 | 5 | 4 | 4 | **4.50** | Unified review of all four PICO extension dimensions — a near-perfect framing paper. |
| paper_020 | The Complexity Trap: Simple Observation Masking Is as Efficient as LLM Summarization for Agent Context Management | Lindenbauer et al. | 2025 | 5 | 4 | 4 | **4.50** | Strong ablation on SWE-bench; "simpler beats fancier" — exactly the kind of empirical insight a local-cost-sensitive SOTA needs. |
| paper_021 | Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models | Zhang et al. | 2025 | 5 | 4 | 4 | **4.50** | Coins "agentic context engineering"; +10.6% gain on agents; central context-engineering reference. |
| paper_022 | Git Context Controller: Manage the Context of LLM-based Agents like Git | Wu et al. | 2025 | 5 | 4 | 4 | **4.50** | Concrete +13% SWE-bench improvement with version-controlled context — a strong "harness mechanism" example. |
| paper_029 | Decoding the Configuration of AI Coding Agents: Insights from Claude Code Projects | Santos et al. | 2025 | 5 | 4 | 4 | **4.50** | Empirical study of 328 Claude Code CLAUDE.md/AGENTS.md files — directly evidence-based on the anchor system's extension mechanism. |
| paper_031 | Code as Agent Harness | Ning et al. | 2026 | 5 | 4 | 4 | **4.50** | Three-layer survey (harness interface / mechanisms / multi-agent scaling) — clean framing for the SOTA review's structure. |
| paper_033 | Natural-Language Agent Harnesses | Pan et al. | 2026 | 5 | 4 | 4 | **4.50** | NLAH + Intelligent Harness Runtime — directly addresses the "skills as natural-language extensions" pattern. |
| paper_036 | Is Grep All You Need? How Agent Harnesses Reshape Agentic Search | Sen et al. | 2026 | 5 | 4 | 4 | **4.50** | Compares grep vs vector retrieval across Claude Code / Codex / Gemini CLI on LongMemEval — direct harness-comparison evidence. |
| paper_038 | Inside the Scaffold: A Source-Code Taxonomy of Coding Agent Architectures | Rombaut | 2026 | 5 | 4 | 4 | **4.50** | Taxonomy of scaffolding code — the missing structural reference for "how is a coding agent built". |
| paper_046 | Herding CATs: ALARA for Agent Harness Engineering in Portable Composable Multi-Agent Teams | Agostino & D'Souza | 2026 | 5 | 4 | 4 | **4.50** | Evaluates 22 **locally-hosted models** across 115 tasks — directly tests the "local" pillar of the PICO. |
| paper_061 | OAgents: An Empirical Study of Building Effective Agents | Zhu et al. | 2025 | 5 | 4 | 4 | **4.50** | Systematic ablation of agent component design on GAIA + BrowseComp; calls out the reproducibility gap — methodologically valuable. |

## Tier 2: Strong Supporting / 強力支撐 (Score 4.0–4.4)

26 papers providing benchmark systems, MCP ecosystem, context-engineering variants, and supporting empirical studies. / 26 篇提供基準系統、MCP 生態、上下文工程變體與支援性實證。

| ID | Title | Authors | Year | Rel | Qual | Rec | **Composite** | Rationale |
|----|-------|---------|------|-----|------|-----|---------------|-----------|
| paper_001 | A survey on large language model based autonomous agents | Wang et al. | 2024 | 4 | 4 | 5 | **4.20** | Hub paper (in-degree 6); 1058 cites — the field's go-to LLM-agent survey. |
| paper_018 | Context Engineering for Multi-Agent LLM Code Assistants Using Elicit, NotebookLM, ChatGPT, and Claude Code | Haseeb | 2025 | 5 | 3 | 4 | **4.20** | Direct Claude Code multi-agent context-engineering workflow; methodology is light but topically central. |
| paper_027 | Active Context Compression: Autonomous Memory Management in LLM Agents | Verma | 2026 | 5 | 3 | 4 | **4.20** | 22.7% token reduction with maintained SWE-bench performance — concrete memory-management contribution. |
| paper_037 | On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents | Lulla et al. | 2026 | 5 | 3 | 4 | **4.20** | Quantifies AGENTS.md effect (-28.64% runtime, -16.58% tokens); small-N (10 repos) tempers quality. |
| paper_059 | PAACE: A Plan-Aware Automated Agent Context Engineering Framework | Yuksel | 2025 | 5 | 3 | 4 | **4.20** | Plan-aware context engineering — directly named PICO mechanism. Single-author preprint limits quality. |
| paper_009 | Magentic-One: A Generalist Multi-Agent System for Solving Complex Tasks | Fourney et al. | 2024 | 4 | 5 | 4 | **4.30** | Hub paper; multi-benchmark eval (GAIA / AssistantBench / WebArena), Microsoft's open-source generalist agent. |
| paper_015 | MCP-Universe: Benchmarking Large Language Models with Real-World Model Context Protocol Servers | Luo et al. | 2025 | 4 | 4 | 4 | **4.00** | Six-domain MCP benchmark with execution-based evaluators. |
| paper_016 | Survey on Evaluation of LLM-based Agents | Yehudai et al. | 2025 | 4 | 4 | 4 | **4.00** | Five-perspective eval survey; complements paper_004. |
| paper_017 | SWE-bench Goes Live! | Zhang et al. | 2025 | 4 | 4 | 4 | **4.00** | Live-updatable SWE-bench (1319 tasks, 93 repos) — addresses benchmark-saturation problem. |
| paper_019 | LoCoBench-Agent: An Interactive Benchmark for LLM Agents in Long-Context Software Engineering | Qiu et al. | 2025 | 4 | 4 | 4 | **4.00** | 8000-scenario long-context SE benchmark. |
| paper_023 | Haystack Engineering: Context Engineering for Heterogeneous and Agentic Long-Context Evaluation | Li et al. | 2025 | 4 | 4 | 4 | **4.00** | HaystackCraft benchmark for cascading agentic errors. |
| paper_025 | Alita: Generalist Agent Enabling Scalable Agentic Reasoning with Minimal Predefinition and Maximal Self-Evolution | Qiu et al. | 2025 | 4 | 4 | 4 | **4.00** | GAIA 75.15% pass@1 — strong empirical contribution to autonomy depth. |
| paper_030 | Huxley-Gödel Machine: Human-Level Coding Agent Development by an Approximation of the Optimal Self-Improving Machine | Wang et al. | 2025 | 4 | 4 | 4 | **4.00** | Self-improving SWE-bench Verified human-level result. |
| paper_034 | AIDev: Studying AI Coding Agents on GitHub | Li et al. | 2026 | 4 | 4 | 4 | **4.00** | 932K agentic PRs across Codex/Devin/Copilot/Cursor/Claude Code — largest empirical comparison. |
| paper_035 | Engineering Pitfalls in AI Coding Tools | Zhang et al. | 2026 | 4 | 4 | 4 | **4.00** | 3.8K bug analysis across Claude Code / Codex / Gemini CLI — direct failure-mode reference. |
| paper_041 | Agents in Software Engineering: Survey, Landscape, and Vision | Wang et al. | 2024 | 4 | 4 | 4 | **4.00** | First comprehensive SE-agents survey. |
| paper_042 | MCPToolBench++: A Large Scale AI Agent Model Context Protocol MCP Tool Use Benchmark | Fan et al. | 2025 | 4 | 4 | 4 | **4.00** | 4000-MCP-server benchmark across 40 categories. |
| paper_047 | ScaleMCP: Dynamic and Auto-Synchronizing Model Context Protocol Tools for LLM Agents | Lumer et al. | 2025 | 4 | 4 | 4 | **4.00** | Dynamic MCP tool selection — addresses the "too many tools" scalability problem. |
| paper_048 | MCP-AgentBench: Evaluating Real-World Language Agent Performance with MCP-Mediated Tools | Guo et al. | 2025 | 4 | 4 | 4 | **4.00** | Outcome-oriented MCP eval, 600 queries. |
| paper_054 | MCP Bridge: A Lightweight, LLM-Agnostic RESTful Proxy for Model Context Protocol Servers | Ahmadi et al. | 2025 | 4 | 4 | 4 | **4.00** | Local Qwen3 fine-tune beats GPT-OSS-120B on MCPToolBench++ — directly demonstrates competitive local MCP stack. |
| paper_055 | OrcaLoca: An LLM Agent Framework for Software Issue Localization | Yu et al. | 2025 | 4 | 4 | 4 | **4.00** | SOTA on SWE-bench Lite (65.33%) via priority scheduling + distance-aware pruning. |
| paper_056 | AutoAgent: A Fully-Automated and Zero-Code Framework for LLM Agents | Tang et al. | 2025 | 4 | 4 | 4 | **4.00** | Zero-code agent OS reaching GAIA SOTA. |
| paper_057 | Coding Agents with Multimodal Browsing are Generalist Problem Solvers | Soni et al. | 2025 | 4 | 4 | 4 | **4.00** | OpenHands-Versa across SWE-Bench MM, GAIA, Agent Company — minimal-tool generalist evidence. |
| paper_058 | SmallThinker: A Family of Efficient Large Language Models Natively Trained for Local Deployment | Song et al. | 2025 | 4 | 4 | 4 | **4.00** | Sparse-MoE 20 tok/s on consumer CPUs — direct local-inference contribution. |
| paper_060 | AWorld: Orchestrating the Training Recipe for Agentic AI | Yu et al. | 2025 | 4 | 4 | 4 | **4.00** | Open-source training recipe; Qwen3-32B beats GPT-4o on GAIA — strong open-weights evidence. |
| paper_062 | Efficient Agents: Building Effective Agents While Reducing Cost | Wang et al. | 2025 | 4 | 4 | 4 | **4.00** | 96.7% performance at 57% cost on GAIA — efficiency-effectiveness frontier evidence. |

## Tier 3: Contextual / 脈絡背景 (Score 3.5–3.9)

12 contextual papers — broader surveys, adjacent protocols, local-inference building blocks, single-domain frameworks. / 12 篇脈絡背景論文。

| ID | Title | Authors | Year | Rel | Qual | Rec | **Composite** | Rationale |
|----|-------|---------|------|-----|------|-----|---------------|-----------|
| paper_004 | Evaluation and Benchmarking of LLM Agents: A Survey | Mohammadi et al. | 2025 | 4 | 4 | 3 | **3.80** | ACM KDD eval-taxonomy survey; useful framing reference. |
| paper_014 | A survey of agent interoperability protocols: MCP, ACP, A2A, ANP | Ehtesham et al. | 2025 | 4 | 3 | 4 | **3.70** | Comparative protocol survey; preprint-light but topically central. |
| paper_024 | ByteRover: Agent-Native Memory Through LLM-Curated Hierarchical Context | Nguyen et al. | 2026 | 4 | 3 | 4 | **3.70** | Memory-Augmented Generation framing; brief abstract limits quality assessment. |
| paper_026 | Toward Formalizing LLM-Based Agent Designs through Structural Context Modeling and Semantic Dynamics Analysis | Jia et al. | 2026 | 4 | 3 | 4 | **3.70** | Structural Context Model — formalism-leaning contribution. |
| paper_045 | CEDAR: Context Engineering for Agentic Data Science | Saha Roy et al. | 2026 | 4 | 3 | 4 | **3.70** | Domain-specific (data science) context engineering. |
| paper_007 | AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration | Lin et al. | 2023 | 3 | 4 | 4 | **3.50** | Widely used quantization technique; building block for local inference. |
| paper_039 | Autono: A ReAct-Based Highly Robust Autonomous Agent Framework | Wu | 2025 | 4 | 3 | 3 | **3.50** | ReAct + MCP framework; single-author. |
| paper_040 | Cerebrum (AIOS SDK): A Platform for Agent Development, Deployment, Distribution, and Discovery | Rama et al. | 2025 | 4 | 3 | 3 | **3.50** | Platform/SDK paper — moderate empirical depth. |
| paper_043 | MCP Safety Audit: LLMs with the Model Context Protocol Allow Major Security Exploits | Radosevich & Halloran | 2025 | 3 | 4 | 4 | **3.50** | MCP security — rigorous demonstrations, but security-only focus reduces architectural relevance. |
| paper_044 | Autellix: An Efficient Serving Engine for LLM Agents as General Programs | Luo et al. | 2025 | 3 | 4 | 4 | **3.50** | Serving infrastructure — adjacent to agent architecture. |
| paper_049 | Optimizing FaaS Platforms for MCP-enabled Agentic Workflows | Kulkarni et al. | 2026 | 3 | 4 | 4 | **3.50** | FaaS / serverless ReAct decomposition — infrastructure adjacent. |
| paper_050 | MCP-Guard: A Multi-Stage Defense-in-Depth Framework for Securing Model Context Protocol in Agentic AI | Xing et al. | 2025 | 3 | 4 | 4 | **3.50** | MCP security defense — useful but security-axis. |

---

## Borderline Papers / 邊緣論文 (Score 3.0–3.49)

> **⛳ Checkpoint 2: 邊緣打撈 / Borderline-Salvage Checkpoint**
>
> Review the papers below. These scored close to the threshold and may contain relevant work that the scoring missed — especially MCP-security papers that the algorithm treated as "off-axis" but which might still inform the security/sandboxing pillar of a local agentic system.
>
> 請審核以下邊緣論文。這些論文分數接近門檻，特別是 MCP 安全相關論文，雖被算法視為偏軸，但仍可能影響本地代理系統的安全/沙箱層設計。
>
> Mark any paper you want to include with `include` (by ID) and I will add it to the shortlist with `manually_included: true`.

| ID | Title | Authors | Year | Rel | Qual | Rec | **Composite** | Rationale | Hub? |
|----|-------|---------|------|-----|------|-----|---------------|-----------|------|
| paper_010 | Towards Large Reasoning Models: A Survey of Reinforced Reasoning with Large Language Models | Xu et al. | 2025 | 3 | 4 | 3 | **3.30** | Reasoning-RL survey; relevant only to the "planning & reasoning loops" pillar; broad scope dilutes PICO fit. | — |
| paper_012 | Internet of Agents: Fundamentals, Applications, and Challenges | Wang et al. | 2025 | 3 | 4 | 3 | **3.30** | IoA framing for cross-agent interconnection — adjacent to MCP/A2A but operates at a higher level than the local-system PICO. | — |
| paper_013 | A Review on Agent-to-Agent Protocol: Concept, State-of-the-art, Challenges and Future Directions | Ray | 2025 | 3 | 3 | 3 | **3.00** | A2A protocol review; useful complement to paper_011 (MCP survey) but tier-3 paper_014 already covers A2A in the protocol-comparison survey. | — |
| paper_051 | Beyond the Protocol: Unveiling Attack Vectors in the Model Context Protocol (MCP) Ecosystem | Song et al. | 2025 | 2 | 4 | 4 | **3.00** | MCP attack-vector taxonomy — rigorous user study (N=20) but pure-security focus. Recommend include if SOTA discusses local-agent threat model. | — |
| paper_052 | MCP Security Bench (MSB): Benchmarking Attacks Against Model Context Protocol in LLM Agents | Zhang et al. | 2025 | 2 | 4 | 4 | **3.00** | First MCP attack benchmark (12 attacks × 9 agents × 10 domains). Recommend include if security is a SOTA pillar. | — |
| paper_053 | Securing the Model Context Protocol (MCP): Risks, Controls, and Governance | Errico et al. | 2025 | 3 | 3 | 3 | **3.00** | Position-paper-style controls + governance — overlaps with paper_050/051/052 already in the corpus. | — |

**Borderline summary / 邊緣摘要**:
- 4 of 6 borderlines are MCP-security papers — the algorithm penalised their **relevance** axis because they answer "how to defend MCP" rather than "how to build SOTA local agent". If the SOTA review will have a **security/sandboxing pillar**, recommend selectively including paper_051 + paper_052 (the empirical/benchmark ones, not the position paper paper_053).
- paper_010 (reasoning-RL survey) is tangential to architecture but might be useful if the SOTA review treats "reinforced planning" as a pillar.
- paper_012 (Internet of Agents) is adjacent — include only if multi-agent IoA scope is in.

**邊緣論文中沒有 hub paper** — all hub papers (paper_001, 002, 003, 005, 009, 011, 028, 032) are already in Tier 1 or Tier 2.

---

## Excluded Papers / 排除論文 (Score < 3.0)

| ID | Title | Year | Rel | Qual | Rec | **Composite** | Exclusion Reason / 排除原因 |
|----|-------|------|-----|------|-----|---------------|---------------------------|
| _none_ | — | — | — | — | — | — | No paper in the 62-paper corpus scored below 3.00. This reflects the strong on-topic targeting of Step 2's anchor-system queries. / 第 2 步的錨點查詢策略產生高度集中的語料，無論文低於 3.00。 |

---

## Hub Paper Summary / 核心引用論文摘要

The Step-2 citation network identified 5 hub papers (`is_hub == true`) plus 3 additional papers with hub-level in-degree (paper_003, paper_009, paper_028 also flagged `is_hub: true`). All 8 hub-flagged papers are **included** — none in borderline or excluded zones. / 第 2 步的引用網路標記出 8 篇 hub 論文，全部納入。

| ID | Title | In-Degree | Cluster | Status | Note |
|----|-------|-----------|---------|--------|------|
| paper_002 | SWE-bench | 10 | benchmarks_and_evaluation | **Tier 1 (Included)** | Highest in-degree; foundational benchmark — every coding-agent paper cites this. |
| paper_011 | MCP Survey | 9 | mcp_and_tool_protocols | **Tier 1 (Included)** | Hub of the entire MCP-cluster; 25 SS cites despite being from 2025. |
| paper_005 | OpenHands | 8 | coding_agents_and_harness | **Tier 1 (Included)** | Hub of coding-agent cluster; canonical open-source platform. |
| paper_001 | LLM-Agent Survey (Wang) | 6 | context_and_memory_engineering | **Tier 2 (Included)** | 1058 cites; broad-scope survey — slightly tangent on intervention axis, hence Tier 2 not Tier 1. |
| paper_028 | Dive into Claude Code | 5 | coding_agents_and_harness | **Tier 1 (Included)** | Hub of Claude-Code-specific subcluster; source-code-level analysis. |
| paper_003 | SWE-agent | 4 | benchmarks_and_evaluation | **Tier 1 (Included)** | Foundational agent-computer interface paper. |
| paper_009 | Magentic-One | 3 | benchmarks_and_evaluation | **Tier 2 (Included)** | Microsoft generalist agent; 3-benchmark eval. |
| paper_032 | Agentic Harness Engineering | 0* | coding_agents_and_harness | **Tier 1 (Included)** | *Out-degree 3 to other hubs; flagged is_hub=true by Step-2 agent — recent (2026) and Terminal-Bench-2 SOTA. |

**Corpus-design note** / 語料設計說明: the Step-2 agent **excluded by design** a set of 2604.xxxxx OpenClaw-security-analysis arXiv papers; they are not present in `step2_raw_papers.json` and therefore not screened here. The remaining 62-paper corpus is the working set. / 第 2 步代理依設計排除了部分 OpenClaw 安全分析論文，未進入本次篩選。

---

## Checkpoint 2 Resolution / 檢查點 2 結果

**Status / 狀態:** ✅ Resolved (2026-05-22)
**User decision / 使用者決定:** `include 51, 52` — promote the two empirical MCP-security papers to the shortlist as evidence for the **MCP security & sandboxing pillar** of the SOTA review. / 將兩篇 MCP 安全性實證論文升級納入精選清單，作為 SOTA 綜述中「MCP 安全與沙箱」支柱的實證依據。

| ID | Title | Promotion reason |
|---|---|---|
| **paper_051** | Beyond the Protocol: Unveiling Attack Vectors in the MCP Ecosystem (Song 2025) | MCP attack-vector taxonomy with N=20 user study; canonical evidence for MCP security pillar |
| **paper_052** | MCP Security Bench (MSB) (Zhang 2025) | First empirical MCP attack benchmark — 12 attacks × 9 agents × 10 domains |

Both flagged in `step3_shortlist.json` with `"manually_included": true`. Tier 3 grew from 12 → 14 papers; final shortlist **58 papers**.

Remaining 4 borderlines (paper_010, paper_012, paper_013, paper_053) stay excluded per user decision.

---

Files / 檔案: `step3_screening_results.md`, `step3_shortlist.json` (updated)
Next step / 下一步: Steps 4 → 5 → 6 (`research-export`, `research-fulltext`, `research-sota`) — no checkpoint between them.
