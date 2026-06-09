---
citation_key: "FourneyEtAl2024"
paper_id: "paper_009"
title: "Magentic-One: A Generalist Multi-Agent System for Solving Complex Tasks"
authors: ["Adam Fourney", "Gagan Bansal", "Hussein Mozannar", "Cheng Tan", "Eduardo Salinas", "Erkang Zhu", "Friederike Niedtner", "Grace Proebsting", "Griffin Bassman", "Jack Gerrits", "Jacob Alber", "Peter Chang", "Ricky Loynd", "Robert West", "Victor Dibia", "Ahmed Hassan Awadallah", "Ece Kamar", "Rafah Hosn", "Saleema Amershi"]
year: 2024
venue: "arXiv"
doi: "10.48550/arxiv.2411.04468"
arxiv_id: "2411.04468"
source: "local_pdf"
tier: 2
composite_score: 4.3
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# Magentic-One: A Generalist Multi-Agent System for Solving Complex Tasks

> **Authors / 作者:** Adam Fourney et al. (2024)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> Modern AI agents, driven by advances in large foundation models, promise to enhance our productivity and transform our lives by augmenting our knowledge and capabilities. To achieve this vision, AI agents must effectively plan, perform multi-step reasoning and actions, respond to novel observations, and recover from errors, to successfully complete complex tasks across a wide range of scenarios. In this work, we introduce Magentic-One, a high-performing open-source agentic system for solving such tasks. Magentic-One uses a multi-agent architecture where a lead agent, the Orchestrator, plans, tracks progress, ⋆: Research Leads, †: Core Contributors, ⋄: Program Leads. Contact: magentic-one@microsoft.com 1 arXiv:2411.04468v1 [cs.AI] 7 Nov 2024 and re-plans to recover from errors. Throughout task execution, the Orchestrator also di- rects other specialized agents to perform tasks as needed, such as operating a web browser, navigating local files, or writing and executing Python code. Our experiments show that Magentic-One achieves statistically competitive performance to the state-of-the-art on three diverse and challenging agentic benchmarks: GAIA, AssistantBench, and WebArena. No- tably, Magentic-One achieves these results without modification to core agent capabilities or to how they collaborate, demonstrating progress towards the vision of generalist agentic sys- tems. Moreover, Magentic-One’s modular design allows agents to be added or removed from the team without ...

> [!summary] 繁中
> Magentic-One 是微軟提出的開源 multi-agent 系統，由 Orchestrator 帶領多個專責 agent（FileSurfer、WebSurfer、Coder、ComputerTerminal）協作。Orchestrator 同時負責規劃、追蹤進度與遇錯重規劃，在多個 benchmark（GAIA、AssistantBench、WebArena）上取得競爭力結果，是 multi-agent 設計的代表系統。

## 2. Problem & Motivation / 問題與動機

Recent advances in artificial intelligence and foundation models are driving a renewed interest in agentic systems that can perceive, reason, and act in the world to complete tasks on our behalf [32, 59]. These systems promise to enhance our productivity by relieving us from mundane and laborious tasks, and revolutionize our lives by augmenting our knowledge and capabilities [16, 54, 6]. By leveraging the powerful reasoning and generative capabilities of large language models (LLMs), agentic systems are already making strides in fields like software engineering [66, 55], data analysis [4], scientific research [26, 7] and web navigation [79, 75]. Realizing the vision of agentic systems to transform our lives requires these systems to not only achieve high performance in specific domains, but also to generalize to the diverse range of tasks people may encounter throughout their day-to-day ...

## 3. Method / 方法

> [!method]
> Modern AI agents powered by foundation models promise to enhance productivity and augment human capabilities. To realize this vision, agents must effectively plan, perform multi-step reasoning, respond to observations, recover from errors, and complete complex tasks across diverse scenarios. Magentic-One is introduced as a high-performing, open-source agentic system using multi-agent architecture with an Orchestrator lead agent that plans, tracks progress, and re-plans upon errors. Specialized agents handle web browsing, file navigation, and Python code execution as needed. Magentic-One achieves competitive performance on three diverse benchmarks (GAIA, AssistantBench, WebArena) without modification to core capabilities, demonstrating progress toward generalist agentic systems.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Magentic-One (GPT-4o, o1-preview) achieves statistically comparable performance to SOTA methods on both GAIA and AssistantBench.
> - On WebArena, only the GPT-4o variant was eval- uated12, and it achieved comparable performance to most SOTA methods except for WebPilot [75] and Jace.AI (which achieve statistically higher scores).
> - On the the validation set, Magentic-One correctly performed 35.1% of tasks (148 of 422), falling to 30.5% (119 of 390) for the test set.
> - Comparing Magentic-One (GPT-4o) and Magentic-One (GPT-4o, o1), the biggest gains are observed on the GAIA benchmark.

## 5. Limitations / 局限性

> [!limitation]
> Our work necessarily comes with certain limitations, some of which affect today’s state of the
> field in general, and some of which are specific to our solution:
> • Accuracy-focused evaluation: Similar to other state-of-the-art systems, Magentic-
> One was evaluated on benchmarks that consider only the accuracy or correctness of final
> results. While considerably easier and more convenient to measure, such evaluations
> overlook important considerations such as cost, latency, user preference and user value
> [18]. For example, even a partially correct trajectory may be valuable [9], whereas ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — Magentic-One is open-source and runs locally in containers.
> **Intervention coverage:** Multi-agent orchestration, planning, re-planning
> **Outcome evidence:** GAIA / AssistantBench / WebArena scores
> **Strength of fit:** Strong — open-source multi-agent reference.

## 7. Key Quotes / 關鍵引文

- "Recent advances in artificial intelligence and foundation models are driving a renewed interest in agentic systems that can perceive, reason, and act in the world to complete tasks on our behalf [32, 59]." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024a]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
