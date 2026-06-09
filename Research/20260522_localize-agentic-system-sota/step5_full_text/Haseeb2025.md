---
citation_key: "Haseeb2025"
paper_id: "paper_018"
title: "Context Engineering for Multi-Agent LLM Code Assistants Using Elicit, NotebookLM, ChatGPT, and Claude Code"
authors: ["Muhammad Haseeb"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2508.08322"
source: "local_pdf"
tier: 2
composite_score: 4.2
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Context Engineering for Multi-Agent LLM Code Assistants Using Elicit, NotebookLM, ChatGPT, and Claude Code

> **Authors / 作者:** Muhammad Haseeb et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Large Language Models (LLMs) have shown promise in automating code generation and software engineering tasks, yet they often struggle with complex, multi-file projects due to context limitations and knowledge gaps. We propose a novel context engineering workflow that combines multiple AI components—an Intent Translator (GPT-5) for clarifying user requirements, an Elicit-powered semantic literature retrieval for injecting domain knowledge, NotebookLM-based document synthesis for contextual understanding, and a Claude Code multi-agent system for code generation and validation. Our integrated approach leverages in- tent clarification, retrieval-augmented generation, and specialized sub-agents orchestrated via Claude’s agent framework. We demonstrate that this method significantly improves the ac- curacy and reliability of code assistants in real-world repositories, yielding higher single-shot success rates and better adherence to project context than baseline single-agent approaches. Qualitative results on a large Next.js codebase show the multi-agent system effectively plans, edits, and tests complex features with minimal human intervention. We compare our system with recent frameworks like CodePlan, MASAI, and HyperAgent, highlighting how targeted context injection and agent role decomposition lead to state-of-the-art performance. Finally, we discuss the implications for deploying LLM-based coding assistants in production, along with lessons learned on context management and ...

> [!summary] 繁中
> 本論文提出多階段 context engineering workflow：用 Elicit 做語意 retrieval、NotebookLM 做文件 synthesis、Claude Code multi-agent 做程式碼生成。實證顯示比 single-agent baseline 在複雜軟體任務的準確率更高，提供 local agentic coding 在 context curation 上的具體工作流範例。

## 2. Problem & Motivation / 問題與動機

Recent advances in large language models (LLMs) have led to powerful code assistant tools capable of generating code, fixing bugs, and even synthesizing simple programs from natural language descriptions. Models like OpenAI’s Codex and Anthropic’s Claude have demonstrated that LLMs can understand and generate human-like code snippets with impressive accuracy. However, as software engineering tasks grow in complexity, there is an emerging need for more sophisticated solutions that can handle the intricacies of real-world software development. Repository-level tasks often involve coordinating changes across multiple files, understanding existing code architecture, and incorporating domain-specific knowledge that may lie outside the model’s training data.

## 3. Method / 方法

> [!method]
> : Context Engineering Workflow
> Intent Translation with GPT-5. The process begins when a user submits a natural language
> query describing a desired code change or feature. This query may be ambiguous or underspecified.
> 4
> Source
> Code
> AST
> Chunker Embedder
> Chroma
> Zilliz
> Vector Index
> Query Rerank Snippets Agent
> Gen
> Unified adapter
> Figure 2: Retrieval pipeline: code-aware chunking and dual-index backend with a unified adapter.
> To ensure the system accurately grasps the requirements, we employ a high-end LLM (GPT-5,
> in our case) to act as an Intent Translator. This agent reformulates the query into a structured
> specification that can guide subsequent steps. For example, a user request like ”Add a calendar
> view to the scheduling page” might be translated into a more explicit list of tasks (e.g., ”update
> UI component X to include a calendar widget; fetch data Y from the backend API; adjust styling
> and add unit tests”). The translator prompt is engineered to elicit a step-by-step breakdown,
> clarifying any implicit requirements (such as which library to use for the calendar, or what data
> needs to be displayed). The output is a well-defined task specification or outline. By front-loading
> this clarification step, we reduce the burden on the coding agents to interpret fuzzy instructions,
> similar in spirit to the planning step in CodePlan but performed by a distinct, specialized ...

## 4. Findings / 發現

> [!findings]
> - Proposes a novel workflow combining intent translation, semantic literature retrieval, document synthesis, and multi-agent code generation to improve accuracy in complex software projects, demonstrating superior performance compared to single-agent baselines.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — workflow combines locally-runnable Claude Code with research aids.
> **Intervention coverage:** Context engineering, multi-agent coding workflow
> **Outcome evidence:** Accuracy vs single-agent baselines
> **Strength of fit:** Strong — concrete pipeline for local coding agent context curation.

## 7. Key Quotes / 關鍵引文

- "Recent advances in large language models (LLMs) have led to powerful code assistant tools capable of generating code, fixing bugs, and even synthesizing simple programs from natural language descriptions." — Introduction
- ": Context Engineering Workflow Intent Translation with GPT-5." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024a]]
- [[Jimenez-GomezEtAl2023]]
- [[WangEtAl2024c]]
- [[ZhouEtAl2026]]
- [[LiuEtAl2026]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
