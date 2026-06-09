---
citation_key: "YangEtAl2024"
paper_id: "paper_003"
title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
authors: ["John Yang", "Carlos Jimenez-Gomez", "Alexander Wettig", "K. Lieret", "Shunyu Yao", "Karthik Narasimhan", "Ofir Press"]
year: 2024
venue: "arXiv"
doi: "10.48550/arxiv.2405.15793"
arxiv_id: "2405.15793"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering

> **Authors / 作者:** John Yang et al. (2024)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> Language model (LM) agents are increasingly being used to automate complicated tasks in digital environments. Just as humans benefit from powerful software applications, such as integrated development environments, for complex tasks like software engineering, we posit that LM agents represent a new category of end users with their own needs and abilities, and would benefit from specially-built interfaces to the software they use. We investigate how interface design affects the performance of language model agents. As a result of this exploration, we introduce SWE-agent: a system that facilitates LM agents to autonomously use computers to solve software engineering tasks. SWE-agent’s custom agent-computer interface (ACI) significantly enhances an agent’s ability to create and edit code files, navigate entire repositories, and execute tests and other programs. We evaluate SWE-agent on SWE-bench and HumanEvalFix, achieving state-of-the-art performance on both with a pass@1 rate of 12.5% and 87.7%, respectively, far exceeding the previous state-of-the-art achieved with non-interactive LMs. Finally, we provide insight on how the design of the ACI can impact agents’ behavior and performance. 1 Introduction Recent work has demonstrated the efficacy of LM agents for code generation with execution feed- back [39]. However, applying agents to more complex code tasks like software engineering remains unexplored. To solve programming tasks, LM agents are typically designed to use ...

> [!summary] 繁中
> SWE-agent 主張「Agent-Computer Interface (ACI) 才是 LM agent 的關鍵效能變數」。作者設計了一組量身打造的 file viewer、編輯器、shell wrapper，讓 agent 能更精準地讀寫程式、跑測試。把同一 LM 接到 ACI 後，SWE-bench 解題率大幅提升，證明 harness/interface 設計與 model capability 同等重要。論文為後續所有 coding agent 提供 ACI 設計思想的起點。

## 2. Problem & Motivation / 問題與動機

Recent work has demonstrated the efficacy of LM agents for code generation with execution feed- back [39]. However, applying agents to more complex code tasks like software engineering remains unexplored. To solve programming tasks, LM agents are typically designed to use existing applica- tions, such as the Linux shell or Python interpreter [53, 57, 59]. However, to perform more complex programming tasks such as software engineering [20], human engineers benefit from sophisticated ap- plications like VSCode with powerful tools and extensions.

## 3. Method / 方法

> [!method]
> Language model agents benefit from specialized software applications like integrated development environments for complex engineering tasks. This work investigates how interface design affects agent performance. SWE-agent is presented as a system enabling LM agents to autonomously use computers for software engineering tasks. Its custom agent-computer interface significantly enhances agents' ability to create, edit, and navigate code and repositories while executing tests.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Across all systems, SWE-agent w/ GPT-4 Turbo achieves the best performance all-around, success- fully solving 12.47% (286/2,294) of the full SWE-bench test set and 18.00% (54/300) of the Lite split.
> - As shown in Table 1, compared to RAG on Lite, SWE-agent is 8-13x more costly but yields a 6.7-fold improved % Resolved rate.
> - An LM-friendly ACI’s value is confirmed by SWE-agent’s64% relative increase compared to Shell-only, both with GPT-4 Turbo.
> - In Table 2, SWE-agent yields strong performance on HumanEvalFix with 88.3% pass@1 rate.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — SWE-agent runs on a single workstation with a custom CLI/editor stack.
> **Intervention coverage:** Harness engineering, tool interface design
> **Outcome evidence:** SWE-bench resolution rate, pass@1
> **Strength of fit:** Strong — ACI thesis is foundational for local agent harness design.

## 7. Key Quotes / 關鍵引文

- "Recent work has demonstrated the efficacy of LM agents for code generation with execution feed- back [39]." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
