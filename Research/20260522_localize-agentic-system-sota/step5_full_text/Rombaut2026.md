---
citation_key: "Rombaut2026"
paper_id: "paper_038"
title: "Inside the Scaffold: A Source-Code Taxonomy of Coding Agent Architectures"
authors: ["Benjamin Rombaut"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2604.03515"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# Inside the Scaffold: A Source-Code Taxonomy of Coding Agent Architectures

> **Authors / 作者:** Benjamin Rombaut et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> LLM-based coding agents can localize bugs, generate patches, and run tests with diminishing human oversight, yet the scaffolding code that surrounds the language model (the control loop, tool definitions, state management, and context strategy) remains poorly understood. Existing surveys classify agents by abstract capabilities (tool use, planning, reflection) that cannot dis- tinguish between architecturally distinct systems, and trajectory studies observe what agents do without examining the scaffold code that determines why. This paper presents a source-code- level architectural taxonomy derived from analysis of 13 open-source coding agent scaffolds at pinned commit hashes. Each agent is characterized across 12 dimensions organized into three layers: control architecture, tool and environment interface, and resource management. The analysis reveals that scaffold architectures resist discrete classification: control strategies range from fixed pipelines to Monte Carlo Tree Search, tool counts range from 0 to 37, and context compaction spans seven distinct strategies. Five loop primitives (ReAct, generate-test-repair, plan-execute, multi-attempt retry, tree search) function as composable building blocks that agents layer in different combinations; 11 of 13 agents compose multiple primitives rather than relying on a single control structure. Dimensions converge where external constraints dominate (tool capability categories, edit formats, execution isolation) and diverge ...

> [!summary] 繁中
> 本論文針對 coding agent 的 scaffolding code 做 source-code taxonomy，分類常見模組（prompt builder、tool registry、retry/feedback loop、state manager 等）並對應到不同 agent 行為，為 local agent 架構設計提供可比較的詞彙與分類學。

## 2. Problem & Motivation / 問題與動機

Large language models have transformed software engineering practice. Tools such asAider[Gau- thier, 2024],SWE-agent[Yang et al., 2024], andOpenHands[Wang et al., 2025] can navigate un- familiar repositories, localize bugs, generate patches, and run test suites with diminishing human oversight. The most capable of these systems resolve over half of real-world GitHub issues on the SWE-bench Verified benchmark [Jimenez et al., 2024], and seven of the agents analyzed in this study have each accumulated over 15,000 GitHub stars [Borges and Valente, 2018] (Table 1), suggesting adoption by substantial developer communities. As these agents move from research prototypes to production tooling, the scaffolding code that surrounds the language model (the con- trol loop, tool definitions, state management, and context strategy) increasingly determines how the agent behaves, what mistakes it makes, ...

## 3. Method / 方法

> [!method]
> This study performs a source-code-level architectural analysis of open-source coding agent scaffolds,
> deriving taxonomic categories from observed implementation patterns rather than from documen-
> tation claims or conceptual models.
> 3.1 Agent Selection
> Candidate agents were identified through three channels: agents evaluated on SWE-bench and
> reported in the leaderboard literature as of early 2026, agents with substantial adoption in developer
> tooling (measured by GitHub stars as a proxy for community use [Borges and Valente, 2018]), and
> agents cited in recent surveys of LLM-based software engineering [Zhang et al., 2026]. The search
> was not exhaustive within any single channel; the pool reflects the agents the researcher encountered
> through these sources rather than a complete enumeration of all agents meeting a fixed threshold.
> An initial pool of 22 candidates was narrowed using three inclusion criteria (the full candidate list
> and exclusion rationale for each are provided in Appendix A):
> 1.Coding-specific.The agent must be designed for software engineering tasks (code editing,
> bug fixing, repository navigation), not general-purpose task automation. This excluded general-
> purpose frameworks (Open Interpreter [Open Interpreter, Inc., 2023], Deep Agents [LangChain
> AI, 2025]) and multi-agent orchestration platforms (MetaGPT [Hong et al., 2024], CrewAI [Cre-
> wAI Inc., 2024]), ...

## 4. Findings / 發現

> [!findings]
> - 4.1 Layer 1: Control Architecture The control layer determines how an agent orchestrates its actions.
> - Three dimensions capture the key variation: (1) the topology of the control loop, (2) what drives it, and (3) how it is implemented in code.
> - Each dimension is a continuous spectrum with observed endpoints from the corpus of 13 agents.

## 5. Limitations / 局限性

> [!limitation]
> This section organizes threats to validity following the standard framework for empirical software
> engineering studies [Runeson and H¨ ost, 2009]: construct validity (whether the study measures
> what it claims to measure), internal validity (whether the findings follow from the data), external
> validity (whether the findings generalize beyond this study), and reliability (whether the study can
> be reproduced).
> 6.1 Construct Validity
> The primary construct validity threat is single-author bias. All 13 agent analyses were conducted
> by a single author (with LLM-assisted code navigation, as described ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — scaffolding code is the visible surface of any local coding agent.
> **Intervention coverage:** Harness engineering (taxonomy of scaffold code)
> **Outcome evidence:** Source-code taxonomy
> **Strength of fit:** Strong — provides shared vocabulary for the harness chapter.

## 7. Key Quotes / 關鍵引文

- "Large language models have transformed software engineering practice." — Introduction
- "The search was not exhaustive within any single channel; the pool reflects the agents the researcher encountered through these sources rather than a complete enumeration of all agents meeting a fixed threshold." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
