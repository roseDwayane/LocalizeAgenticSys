---
citation_key: "WangEtAl2024c"
paper_id: "paper_005"
title: "OpenHands: An Open Platform for AI Software Developers as Generalist Agents"
authors: ["Xingyao Wang", "Boxuan Li", "Yufan Song", "Frank F. Xu", "Xiangru Tang", "Mingchen Zhuge", "Jiayi Pan", "Yueqi Song", "Bowen Li", "Jaskirat Singh", "Hoang H. Tran", "Fuqiang Li", "Ren Ma", "Mingzhang Zheng", "Bill Qian", "Yanjun Shao", "Niklas Muennighoff", "Yizhe Zhang", "Binyuan Hui", "Junyang Lin", "Robert Brennan", "Hao Peng", "Heng Ji", "Graham Neubig"]
year: 2024
venue: "arXiv"
doi: null
arxiv_id: "2407.16741"
source: "local_pdf"
tier: 1
composite_score: 5.0
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# OpenHands: An Open Platform for AI Software Developers as Generalist Agents

> **Authors / 作者:** Xingyao Wang et al. (2024)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Software is one of the most powerful tools that we humans have at our disposal; it allows a skilled programmer to interact with the world in complex and pro- found ways. At the same time, thanks to improvements in large language models (LLMs), there has also been a rapid development in AI agents that interact with and affect change in their surrounding environments. In this paper, we introduce OpenHands (f.k.a. OpenDevin), a platform for the development of powerful and flexible AI agents that interact with the world in similar ways to those of a human developer: by writing code, interacting with a command line, and browsing the web. We describe how the platform allows for the implementation of new agents, safe interaction with sandboxed environments for code execution, coordination between multiple agents, and incorporation of evaluation benchmarks. Based on our currently incorporated benchmarks, we perform an evaluation of agents over 15 challenging tasks, including software engineering (e.g., SWE-BENCH ) and web browsing (e.g., WEBARENA ), among others. Released under the permissive MIT license, OpenHands is a community project spanning academia and industry with more than 2.1K contributions from over 188 contributors. Code https://github.com/All-Hands-AI/OpenHands Slack http://bit.ly/OpenHands-Slack 1 I NTRODUCTION Powered by large language models (LLMs; OpenAI 2024b; Team et al. 2023; Jiang et al. 2024; Chang et al. 2024), user-facing AI systems (such as ChatGPT) have ...

> [!summary] 繁中
> OpenHands（前身 OpenDevin）是開源的通用 agent 開發平台，讓 AI agent 能像人類工程師一樣寫程式、操作 CLI、瀏覽網頁。核心提供 sandbox 程式執行、multi-agent 協作機制與內建 benchmark harness，作者在 SWE-bench、WebArena 等 15 個任務上評估。以 MIT 授權開源，累積 2.1K+ commits、188+ contributors，是 community agentic system 的指標性 anchor。

## 2. Problem & Motivation / 問題與動機

Powered by large language models (LLMs; OpenAI 2024b; Team et al. 2023; Jiang et al. 2024; Chang et al. 2024), user-facing AI systems (such as ChatGPT) have become increasingly capable of performing complex tasks such as accurately responding to user queries, solving math problems, and generating code. In particular, AI agents, systems that can perceive and act upon the external environment, have recently received ever-increasing research focus. They are moving towards performing complex tasks such as developing software (Jimenez et al., 2024), navigating real-world websites (Zhou et al., 2023a), doing household chores (Ahn et al., 2022), or even performing scientific research (Boiko et al., 2023; Tang et al., 2024a). As AI agents become capable of tackling complex problems, their development and evaluation have also become challenging.

## 3. Method / 方法

> [!method]
> Software is one of the most powerful tools that we humans have at our disposal; it allows a skilled programmer to interact with the world in complex and profound ways. At the same time, thanks to improvements in large language models (LLMs), there has also been a rapid development in AI agents that interact with and affect change in their surrounding environments. In this paper, we introduce OpenHands (f.k.a. OpenDevin), a platform for the development of powerful and flexible AI agents that interact with the world in similar ways to those of a human developer: by writing code, interacting with a command line, and browsing the web. We describe how the platform allows for the implementation of new agents, safe interaction with sandboxed environments for code execution, coordination between multiple agents, and incorporation of evaluation benchmarks. Based on our currently incorporated benchmarks, we perform an evaluation of agents over 15 challenging tasks, including software ...
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - 2, we integrate 15 es- tablished benchmarks into OpenHands.
> - 6 (miscellaneous assistance) for full results across benchmarks.
> - Based on our currently incorporated benchmarks, we perform an evaluation of agents over 15 challenging tasks, including software engineering (e.g., SWE-BENCH) and web browsing (e.g., WEBARENA), among others.
> - These benchmarks cover software en- gineering, web browsing, and miscel- laneous assistance.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — open-source local-runnable agent platform (Docker sandbox runs locally on a developer machine).
> **Intervention coverage:** Harness engineering, sandboxing, tool integration, multi-agent
> **Outcome evidence:** SWE-bench, WebArena, GAIA, MINT, BIRD scores
> **Strength of fit:** Strong — canonical anchor system for the entire PICO; cited by many of the included papers.

## 7. Key Quotes / 關鍵引文

- "In particular, AI agents, systems that can perceive and act upon the external environment, have recently received ever-increasing research focus." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024a]]
- [[Jimenez-GomezEtAl2023]]
- [[YangEtAl2024]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
