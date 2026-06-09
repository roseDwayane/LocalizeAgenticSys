---
citation_key: "SoniEtAl2025"
paper_id: "paper_057"
title: "Coding Agents with Multimodal Browsing are Generalist Problem Solvers"
authors: ["Aditya Bharat Soni", "Boxuan Li", "Xingyao Wang", "Valerie Chen", "Graham Neubig"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2506.03011"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# Coding Agents with Multimodal Browsing are Generalist Problem Solvers

> **Authors / 作者:** Aditya Bharat Soni et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> Modern human labor is characterized by specialization; we train for years and develop particular tools that allow us to perform well across a variety of tasks. In addition, AI agents have been specialized for domains such as software engineering, web navigation, and workflow automation. However, this results in agents that are good for one thing but fail to generalize beyond their intended scope. One reason for this is that agent developers provide a highly specialized set of tools or make architectural decisions optimized for a specific use case or benchmark. In this work, we ask the question: what is the minimal set of general tools that can be used to achieve high performance across a diverse set of tasks? Our answer is OpenHands-Versa, a generalist agent built with a modest number of general tools: code editing and execution, web search, as well as multimodal web browsing and file access. Importantly, OpenHands-Versa demonstrates superior or competitive performance over leading specialized agents across three diverse and challenging benchmarks: SWE-Bench Multimodal [23], GAIA [11], and The Agent Company [20], outperforming the best-performing previously published results with absolute improvements in success rate of 9.1, 1.3, and 9.1 points respectively. Further, we show how existing state-of-the-art multi-agent systems fail to generalize beyond their target domains. These results demonstrate the feasibility of developing a generalist agent to solve diverse tasks and ...

> [!summary] 繁中
> OpenHands-Versa 用極簡工具集（code editing、web search、browsing、file access）做 generalist agent，在 SWE-Bench Multimodal、GAIA、The Agent Company 三個截然不同 benchmark 上勝過或匹敵專用 agent，證明少而精的 multimodal tool 比大型專用 toolbox 更通用。

## 2. Problem & Motivation / 問題與動機

AI agents powered by Large Language Models hold great promise to accelerate or automate a wide variety of practical tasks. For instance, agents have demonstrated strong software engineering capa- bilities and have been able to fix as many as two-thirds of issues in open-source Python repositories from SWE-Bench [9] and around one-third of issues in Javascript-based front-end libraries from SWE-Bench Multimodal [23]. In addition, agents have shown impressive web navigation capabilities, and can complete over half of the tasks from WebArena [27] and over one-third of the tasks from VisualWebArena [10]. Agents have also exhibited strong performance as general assistants, solving over half of the tasks from GAIA [11] that require various capabilities like gathering and synthesizing information from the web and processing multimodal data from diverse files.

## 3. Method / 方法

> [!method]
> OpenHands-Versa generalist agent with minimal tool set (code editing, web search, browsing, file access). Achieves superior or competitive performance over leading specialized agents across three diverse and challenging benchmarks: SWE-Bench Multimodal, GAIA, and The Agent Company.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Benchmarks We evaluate OpenHands-Versa on three benchmarks that cover a diverse range of capabilities and agent use cases—which can be roughly gleaned from Figure 2.
> - SWE-Bench Multimodal (SWE-Bench M) [ 23] : This benchmark evaluates the ability of agents to fix software issues in GitHub repositories of front-end, user-facing libraries.
> - The benchmark requires the agent to solve GitHub issues from 17 popular JavaScript code repositories for various use-cases like web development, syntax highlighting, and data visualization.
> - Unlike SWE-Bench ([23]), where all the reference solutions only require editing Python files, more than 28% of SWE-Bench M instances require editing files across two or more programming languages.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — OpenHands-Versa is an OpenHands variant, runs locally in Docker.
> **Intervention coverage:** Multimodal browsing + minimal toolset, generalist agent
> **Outcome evidence:** SWE-Bench Multimodal / GAIA / Agent Company
> **Strength of fit:** Strong — multimodal extension of the anchor system.

## 7. Key Quotes / 關鍵引文

- "AI agents powered by Large Language Models hold great promise to accelerate or automate a wide variety of practical tasks." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024c]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
