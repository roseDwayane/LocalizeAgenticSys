---
citation_key: "QiuEtAl2025b"
paper_id: "paper_019"
title: "LoCoBench-Agent: An Interactive Benchmark for LLM Agents in Long-Context Software Engineering"
authors: ["Jielin Qiu", "Zuxin Liu", "Zhiwei Liu", "Rithesh Murthy", "Jianguo Zhang", "Haolin Chen", "Shiyu Wang", "Ming Zhu", "Liangwei Yang", "Juntao Tan", "Roshan Ram", "Akshara Prabhakar", "Tulika Awalgaonkar", "Zixiang Chen", "Zhepeng Cen", "Cheng Qian", "Shelby Heinecke", "Weiran Yao", "Silvio Savarese", "Caiming Xiong", "Huan Wang"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2511.13998"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# LoCoBench-Agent: An Interactive Benchmark for LLM Agents in Long-Context Software Engineering

> **Authors / 作者:** Jielin Qiu et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> As large language models (LLMs) evolve into sophisticated autonomous agents capable of complex software development tasks, evaluating their real-world capabilities be- comes critical. While existing benchmarks like LoCoBench [1] assess long-context code understanding, they focus on single-turn evaluation and cannot capture the multi-turn arXiv:2511.13998v1 [cs.SE] 17 Nov 2025 LoCoBench-Agent: An Interactive Benchmark for LLM Agents in Long-Context Software Engineering interactive nature, tool usage patterns, and adaptive reasoning required by real-world coding agents. We introduceLoCoBench-Agent, a comprehensive evaluation frame- work specifically designed to assess LLM agents in realistic, long-context software engineering workflows. Our framework extends LoCoBench’s 8,000 scenarios into interactive agent environments, enabling systematic evaluation of multi-turn conversa- tions, tool usage efficiency, error recovery, and architectural consistency across extended development sessions. We also introduce an evaluation methodology with 9 metrics across comprehension and efficiency dimensions. Our framework provides agents with 8 specialized tools (file operations, search, code analysis) and evaluates them across context lengths ranging from 10K to 1M tokens, enabling precise assessment of long-context performance. Through systematic evaluation of state-of-the-art models, we reveal several key findings: (1) agents exhibit remarkable long-context robustness; (2) ...

> [!summary] 繁中
> LoCoBench-Agent 提供 8,000 個長 context 軟體工程任務情境、附專用 tools 與多維度 metric（comprehension / efficiency 等），是專為 long-context coding agent 設計的 interactive benchmark。可用來測試 local LLM 在長程式碼庫上的記憶、檢索與行動能力。

## 2. Problem & Motivation / 問題與動機

The evolution of large language models (LLMs) from passive code completion tools to autonomous software engineering agents represents a fundamental shift in AI-assisted development. Modern LLM agents can now engage in multi-turn conversations, utilize diverse toolsets, adapt strategies based on feedback, and maintain context across extended development sessions [2–4]. How- ever, evaluating these sophisticated capabilities requires fundamentally different approaches than traditional single-turn code generation benchmarks. The Agent Evaluation Gap.While LoCoBench [1] established comprehensive evaluation for long-context code understanding, it focuses on single-turn evaluation where models receive com- plete context and generate responses in isolation.

## 3. Method / 方法

> [!method]
> of LoCoBench-Agent
> LoCoBench-Agent transforms LoCoBench’s 8,000 static evaluation scenarios into interactive agent
> environments. The benchmark design consists of four components: (1) scenario transformation from
> static to interactive format, (2) an intelligent context management system for long-context handling,
> (3) an interactive agent system with specialized development tools, and (4) a comprehensive
> multi-turn evaluation pipeline.
> 2.1. From LoCoBench to LoCoBench-Agent
> Systematic Scenario Conversion Pipeline.We transform LoCoBench’s 8,000 single-turn scenarios
> into multi-turn interactive environments through a structured three-stage process with caching for
> efficiency.
> Stage 1: Project Extraction and Normalization.For each scenario, we extract the complete project
> codebase from LoCoBench’s generation pipeline output, preserving the original file structure,
> 3
> LoCoBench-Agent: An Interactive Benchmark for LLM Agents in Long-Context Software Engineering
> dependency relationships, and architectural organization. Projects span 10 programming languages
> (Python, JavaScript, Java, C++, Go, Rust, TypeScript, PHP , Ruby, C#) across 36 domain categories
> (web applications, machine learning systems, data processing pipelines, system utilities, etc.). Each
> project contains 10-100 files with 100-10,000 lines of code, generating contexts ranging from 10K
> to 1M tokens based on difficulty ...

## 4. Findings / 發現

> [!findings]
> - We present comprehensive experimental results evaluating six state-of-the-art LLM agents across all 8,000 LoCoBench-Agent scenarios.
> - High-comprehension models (>0.74) achieve their scores through extensive interaction patterns, averaging 19+ conversation turns and modifying 35K+ files, suggest- ing they prioritize exhaustive codebase understanding over operational efficiency.
> - Conversely,efficiency-optimized architectures(>0.63 efficiency) demonstrate that targeted exploration can achieve competitive comprehension (0.73-0.74, only 1-2% lower) while significantly reducing resource consumption.
> - Models with shorter context windows (128K tokens) achieve higher multi-session memory retention than models 13 LoCoBench-Agent: An Interactive Benchmark for LLM Agents in Long-Context Software Engineering with massive contexts (1M tokens), despite 8× fewer available tokens.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — long-context coding benchmark, runnable locally.
> **Intervention coverage:** Benchmarks (long-context SE)
> **Outcome evidence:** 8,000-scenario benchmark with multidimensional metrics
> **Strength of fit:** Strong — fills the long-context-coding eval gap.

## 7. Key Quotes / 關鍵引文

- "The evolution of large language models (LLMs) from passive code completion tools to autonomous software engineering agents represents a fundamental shift in AI-assisted development." — Introduction
- "of LoCoBench-Agent LoCoBench-Agent transforms LoCoBench’s 8,000 static evaluation scenarios into interactive agent environments." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
