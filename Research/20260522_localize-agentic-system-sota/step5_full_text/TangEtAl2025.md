---
citation_key: "TangEtAl2025"
paper_id: "paper_056"
title: "AutoAgent: A Fully-Automated and Zero-Code Framework for LLM Agents"
authors: ["Jiabin Tang", "Tianyu Fan", "Chao Huang"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2502.05957"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# AutoAgent: A Fully-Automated and Zero-Code Framework for LLM Agents

> **Authors / 作者:** Jiabin Tang et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> Large Language Model (LLM) Agents have demonstrated remarkable capabili- ties in task automation and intelligent decision-making, driving the widespread adoption of agent development frameworks such as LangChain and AutoGen. How- ever, these frameworks predominantly serve developers with extensive technical expertise—a significant limitation considering that only 0.03% of the global pop- ulation possesses the necessary programming skills. This stark accessibility gap raises a fundamental question:Can we enable everyone, regardless of technical background, to build their own LLM agents using natural language alone?To address this challenge, we introduce AutoAgent - aFully-Automatedand highly Self-Developingframework that enables users to create and deploy LLM agents throughNatural Language Alone. Operating as an autonomous Agent Operating System, AutoAgent comprises four key components: i) Agentic System Utilities, ii) LLM-powered Actionable Engine, iii) Self-Managing File System, and iv) Self- Play Agent Customization module. This lightweight yet powerful system enables efficient and dynamic creation and modification of tools, agents, and workflows without coding requirements or manual intervention. Beyond its code-free agent ∗Chao Huang is the Corresponding Author. Preprint. Under review. arXiv:2502.05957v3 [cs.AI] 9 Oct 2025 development capabilities, AutoAgent also serves as a versatile multi-agent system forGeneral AI Assistants. Comprehensive evaluations on the GAIA ...

> [!summary] 繁中
> AutoAgent 是「完全自動化 / 零程式碼」的 agent 框架，讓使用者用自然語言創建 agent。本質為 Autonomous Agent Operating System，在 GAIA 上以 multi-agent 設定超越既有 SOTA，為非程式背景使用者建立 local agent 提供 zero-code 路徑。

## 2. Problem & Motivation / 問題與動機

The emergence of Large Language Models (LLMs) has revolutionized AI agent development, enabling unprecedented breakthroughs in autonomous task execution and intelligent problem-solving. LLM- powered agents excel at understanding context, making informed decisions, and seamlessly integrating with various tools and APIs. Leading frameworks like LangChain [1], AutoGPT [2], AutoGen [3], CAMEL [4], and MetaGPT [5] have demonstrated remarkable success in automating increasingly complex workflows - from sophisticated web navigation to advanced data analysis and innovative creative content production. By leveraging advanced mechanisms such as role-playing, structured operating procedures, and dynamic agent coordination, these frameworks deliver exceptional problem- solving capabilities while significantly reducing human intervention.

## 3. Method / 方法

> [!method]
> Autonomous Agent Operating System enabling natural language agent creation. Comprehensive evaluations on the GAIA benchmark demonstrate AutoAgent's effectiveness in generalist multi-agent tasks, surpassing existing state-of-the-art methods.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - 4.1 Evaluation for a Generalist Agent System Benchmark Dataset and Evaluation Protocols.
> - The GAIA benchmark [ 29] is a comprehensive evaluation framework to assess General AI Assistants.
> - Overall Superiority of AutoAgent: Our method significantly outperforms all open- source agent systems and achieves performance close to the latest agent system, h2oGPTe Agent v1.6.8 (submitted on December 16, 2024), securing a stable position in the top
> - These diverse baselines represent the current state-of-the-art in open-source and proprietary multi-agent systems, providing a comprehensive landscape for evaluating the performance and capabilities of our proposed AutoAgent framework.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — AutoAgent runs locally and is zero-code.
> **Intervention coverage:** Zero-code agent OS, multi-agent
> **Outcome evidence:** GAIA SOTA among generalist agents
> **Strength of fit:** Strong — accessibility-focused local agent.

## 7. Key Quotes / 關鍵引文

- "The emergence of Large Language Models (LLMs) has revolutionized AI agent development, enabling unprecedented breakthroughs in autonomous task execution and intelligent problem-solving." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[FourneyEtAl2024]]
- [[QiuEtAl2025a]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
