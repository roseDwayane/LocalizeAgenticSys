---
citation_key: "WuEtAl2025"
paper_id: "paper_022"
title: "Git Context Controller: Manage the Context of LLM-based Agents like Git"
authors: ["Junde Wu", "Minhao Hu", "Jiayuan Zhu", "Jiazhen Pan", "Yuyuan Liu", "Min Xu", "Yueming Jin"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2508.00031"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# Git Context Controller: Manage the Context of LLM-based Agents like Git

> **Authors / 作者:** Junde Wu et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> Large language model (LLM) agents have demon- strated strong capabilities in long-horizon tasks by interleaving reasoning with tool use. However, as these agents scale to complex workflows such as software engineering and open-ended research, context management becomes a fundamental bottleneck: interaction histories grow unbounded, become costly to maintain, and are difficult to reuse across sessions and agents. We introduce Git-Context-Controller (GCC), a structured context management framework inspired by software version control systems. GCC elevates agent context from a transient token stream to a persistent, navigable memory workspace with explicit operations— COMMIT, BRANCH, MERGE, and CONTEXT, that enable milestone-based checkpointing, isolated exploration of alternative reasoning paths, and hierarchical retrieval of historical context. By organizing agent memory as a versioned file system, GCC allows agents to manage long-term goals, recover and transfer reasoning across sessions, and coordinate multi- trajectory problem solving in a principled manner. Empirically, agents equipped with GCC achieve state-of-the-art performance on both SWE-Bench and BrowseComp benchmarks. On SWE-Bench Verified, GCC improves task resolution by over 13% relative to strong long-context baselines and outperforms 26 existing open and commercial sys- tems, reaching over 80% success rate. The project will be open-sourced for the research community. 1. Introduction LLM-based agents have been ...

> [!summary] 繁中
> Git Context Controller (GCC) 把 LLM agent 的 context 管理仿照 git：支援里程碑式 checkpoint、探索性分支以及階層式 retrieval，讓 agent 能像工程師回滾、切支線。整合到 coding agent harness 後，在 SWE-Bench 解題率提升 13 個百分點。為長時序 local agent 提供可審計、可回溯的 context 管理範式。

## 2. Problem & Motivation / 問題與動機

LLM-based agents have been capable of interleaving internal chain-of-thought reasoning with external tool calls (Wu et al., 2025). Such architecture has shown strong performance 1University of Oxford 2Technical University of Munich 3Carnegie Mellon University 4National University of Singapore. Correspondence to: Junde Wu<jundewu@ieee.org>, Yueming Jin <ymjin@nus.edu.sg>. Preprint.

## 3. Method / 方法

> [!method]
> We proposedGit-Context-Controller (GCC) as an
> abstraction layer for agent memory, consisting of a struc-
> tured file system paired with a series of callable commands
> that agents use to externalize, organize, and retrieve their
> 2
> Git Context Controller: Manage the Context of Agents by Agentic Git
> Figure 2.Illustration of GCC in action across two workflows: web-search reasoning and software debugging—showing how agents branch,
> explore, and merge structured context during long-horizon tasks.
> reasoning, as shown in Fig. 2. Inspired by version control
> systems like Git, GCC transforms the agent’s ephemeral con-
> text into a persistent and navigable workspace. The core of
> GCC is a directory-based data structure that systematically
> organizes all historical context (GCC File System), together
> with a set of commands that enable agents to interact with
> and manipulate this structure (GCC Commands). Concretely,
> agents communicate with the controller via commands such
> as COMMIT, BRANCH, MERGE, and CONTEXT, which oper-
> ate over a hierarchical workspace rooted at .GCC/. This
> workspace contains global planning artifacts (main.md),
> branch-specific execution traces ( log.md), milestone-
> level summaries (commit.md), and structured metadata
> (metadata.yaml) that record architectural decisions and
> project states. In the following, we provide a detailed intro-
> duction to the structured file system and ...

## 4. Findings / 發現

> [!findings]
> - Structured context management framework inspired by version control enabling milestone checkpointing, exploration branching, and hierarchical retrieval, improving SWE-Bench resolution by 13%.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — GCC sits at the harness layer of any agent stack, including local.
> **Intervention coverage:** Context management, branching, checkpointing
> **Outcome evidence:** +13% SWE-bench resolution
> **Strength of fit:** Strong — operational context-mgmt scheme that maps directly onto local workflows.

## 7. Key Quotes / 關鍵引文

- "LLM-based agents have been capable of interleaving internal chain-of-thought reasoning with external tool calls (Wu et al., 2025)." — Introduction
- "Inspired by version control systems like Git, GCC transforms the agent’s ephemeral con- text into a persistent and navigable workspace." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
