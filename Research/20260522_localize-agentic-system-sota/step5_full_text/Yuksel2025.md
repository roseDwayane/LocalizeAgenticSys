---
citation_key: "Yuksel2025"
paper_id: "paper_059"
title: "PAACE: A Plan-Aware Automated Agent Context Engineering Framework"
authors: ["Kamer Ali Yuksel"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2512.16970"
source: "local_pdf"
tier: 2
composite_score: 4.2
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# PAACE: A Plan-Aware Automated Agent Context Engineering Framework

> **Authors / 作者:** Kamer Ali Yuksel et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> Large Language Model (LLM) agents are in- creasingly deployed in complex, multi-step work- flows involving planning, tool use, reflection, and interaction with external knowledge systems. These workflows generate rapidly expanding con- texts that must be curated, transformed, and com- pressed to maintain fidelity, avoid attention di- lution, and reduce inference cost. Prior work on summarization and query-aware compression largely ignores themulti-step, plan-awarenature of agentic reasoning. In this work, we intro- ducePAACE(Plan-AwareAutomatedContext Engineering), a unified framework for optimiz- ing the evolving state of LLM agents through next-k-task relevance modeling, plan-structure analysis, instruction co-refinement, and function- preserving compression. PAACE comprises (1) PAACE-Syn, a large-scale generator of synthetic agent workflows annotated with stepwise com- pression supervision, and (2)PAACE-FT, a fam- ily of distilled, plan-aware compressors trained from successful teacher demonstrations. Experi- ments on long-horizon benchmarks—AppWorld, OfficeBench, and 8-Objective QA—demonstrate that PAACE consistently improves agent correct- ness while substantially reducing context load. On AppWorld, PAACE achieves higher accuracy than all baselines, while lowering peak context and cumulative dependency. On OfficeBench and multi-hop QA, PAACE improves both accuracy and F1, achieving lower steps, peak tokens, and at- tention dependency. Distilled PAACE-FT retains 97% of ...

> [!summary] 繁中
> PAACE 提出 plan-aware 的自動 context engineering 框架：透過 next-k-task relevance 模型 + plan-structure 分析，僅在 context 中保留與下一步最相關的內容，在多個 benchmark 上以更小 context 達成更高準確率，為長流程 local agent 節省 token。

## 2. Problem & Motivation / 問題與動機

LLM-driven agents have emerged as a central paradigm for solving complex, multi-step tasks across domains such as software development, research assistance, operations automation, legal workflows, data analysis, and enterprise decision-making. Systems such as ReAct (Yao et al., 2023a), Toolformer (Schick et al., 2023a), AutoGPT, Devin, We- bArena (Zhou et al., 2024), and AgentBench (Liu et al., 2023) highlight the promise and challenges of designing agents with reasoning, planning, and tool-use capabilities. As these systems evolve, a consistent bottleneck has become apparent:context management. An LLM agent’s state is represented not by model parameters but by itsprompt con- text: the system instructions, the evolving plan, previous reasoning traces, tool results, user instructions, long-term memories, retrieved knowledge, and intermediate outputs.

## 3. Method / 方法

> [!method]
> PAACE optimizes the evolving context of multi-step LLM
> agents through a two-stage paradigm: (1) ateacherLLM
> that performs plan- and next- k-task–aware compression
> guided by an evolving natural-language prompt, and (2)
> a distilledstudentmodel that imitates the teacher’s suc-
> cessful compressions at low cost. Unlike prior work that
> hand-engineers context-editing operators, PAACE learns
> the entire compression policy in a data-driven way: the
> teacher’s prompt is meta-learned via an LLM-driven evolu-
> tionary loop over real multi-step workflows, and the student
> is trained purely from the teacher’s best demonstrations.
> PAACE learns this policy empirically via outcome-level
> filtering over long-horizon trajectories rather than through a
> differentiable objective or closed-form guarantees, prioritiz-
> ing robust state fidelity and task success in realistic agentic
> workloads. The framework consists of two components:
> • PAACE-Syn: large-scale generation of long-horizon,
> noisy agent workflows and paired full- vs. compressed-
> context trajectories;
> • PAACE-FT: distillation of high-quality teacher com-
> pressions into a specialized, plan-aware compressor.
> We treat the agent context as a latent execution state and
> learn a plan-conditioned, outcome-preserving compression
> policy. At step t, an LLM agent maintains a context state
> Ct =
> 
> I0, P,Π, H 0:t, O 0:t, R 0:t, M
> 	
> where
> I0 is the initial user ...

## 4. Findings / 發現

> [!findings]
> - Theteacher compressoris implemented using the OpenAIGPT-OSS-120Bmodel with a 65,536-token context window.
> - PAACE-Syn consists of approximately 1.2M synthetic work- flows comprising roughly 9.5B tokens before compression, generated entirely offline and amortized across all down- stream tasks within benchmarks.
> - Using the synthetic supervision produced by PAACE-Syn, the distilled compressor PAACE- FT preserves 97–98% of the teacher’s performance while reducing inference cost by more than an order of magnitude.
> - At inference time, PAACE-FT adds less than 8% latency per step while reducing total input tokens by 35–60%, yielding net reductions in agent cost.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — plan-aware context engineering fits long workflows on local LLMs.
> **Intervention coverage:** Context engineering (plan-aware)
> **Outcome evidence:** Higher accuracy with smaller context across benchmarks
> **Strength of fit:** Strong — directly applicable to local-LLM token budgets.

## 7. Key Quotes / 關鍵引文

- "As these systems evolve, a consistent bottleneck has become apparent:context management." — Introduction
- "We treat the agent context as a latent execution state and learn a plan-conditioned, outcome-preserving compression policy." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
