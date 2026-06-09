---
citation_key: "JiaEtAl2026"
paper_id: "paper_026"
title: "Toward Formalizing LLM-Based Agent Designs through Structural Context Modeling and Semantic Dynamics Analysis"
authors: ["Haoyu Jia", "Kento Kawaharazuka", "Kei Okada"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2602.08276"
source: "arxiv_pdf"
tier: 3
composite_score: 3.7
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# Toward Formalizing LLM-Based Agent Designs through Structural Context Modeling and Semantic Dynamics Analysis

> **Authors / 作者:** Haoyu Jia et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** arXiv PDF / arXiv PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> Current research on large language model (LLM) agents is fragmented: dis- cussions of conceptual frameworks and methodological principles are frequently intertwined with low-level implementation details, causing both readers and authors to lose track amid a proliferation of superficially distinct concepts. We argue that this fragmentation largely stems from the absence of an analyzable, self-consistent formal model that enables implementation-independent charac- terization and comparison of LLM agents. To address this gap, we propose the Structural Context Model, a formal model for analyzing and comparing LLM agents from the perspective of context structure. Building upon this founda- tion, we introduce two complementary components that together span the full lifecycle of LLM agent research and development: (1) a declarative implemen- tation framework; and (2) a sustainable agent engineering workflow,Semantic Dynamics Analysis. The proposed workflow provides principled insights into agent mechanisms and supports rapid, systematic design iteration. We demon- strate the effectiveness of the complete framework on dynamic variants of the monkey-banana problem, where agents engineered using our approach achieve up to a 32 percentage points improvement in success rate on the most challenging setting. Keywords:Agents, Context Engineering, Large Language Models 1 arXiv:2602.08276v1 [cs.AI] 9 Feb 2026 Fig. 1: We present a composable, explainable, and sustainable framework for LLM ...

> [!summary] 繁中
> 本論文嘗試把 LLM agent 設計形式化，提出 Structural Context Model 與 Semantic Dynamics Analysis 工作流，在動態問題解決任務上提升 32 個百分點。提供把模糊 prompt-engineering 轉成可分析 model 的工具。

## 2. Problem & Motivation / 問題與動機

In recent years, LLM-based agents have become a prominent research topic in robot task planning, primarily because they are not constrained by the limitations faced by classic symbolic planners such asPDDL[1] andTLPLAN[2]: namely static environments, deterministic action outcomes, and complete prior knowledge. Thus, LLM-powered task agents can achieve relatively robust performance under uncertainty. As a result, a large body of research on LLM-powered agents has emerged. These agents are largely built upon similar loop-based real-time architectures, typically following theReAct[3] paradigm, as shown in Figure 2.

## 3. Method / 方法

> [!method]
> In this section, we describe a workflow for discovering reusable patterns from existing
> prompts, which consists of two main steps: segmentation and parameterization.
> We have developed a software tool to analyze a prompt and generate the cor-
> responding analysis charts; however, the level of automation remains limited. In
> particular, the parameterization step still requires manual intervention.
> The workflow consists of the following steps:
> 1.Tokenization.A tokenizer is applied to the prompt to obtain a token sequence,
> which serves as the input for subsequent analysis.
> 2.Semantic dynamics analysis.Based on the definitions in Section 3.2, we com-
> pute the ∆Semantics for each token, as well as the Global Drift and Global ∆Drift
> for each prefix.
> 3.Segmentation via Global∆Drift.Prefixes associated with abnormally high
> Global ∆Drift values are identified. As discussed in Section 3.2, such anomalies
> suggest the presence of nearby semantic sub-centroids. The ending tokens of these
> prefixes are therefore used as semantic separation points, partitioning the prompt
> into multiple segments.
> 4.Property verification of segments.The propositions introduced in
> Section 3.3.2 are applied to examine whether the extracted segments exhibit the
> semantic properties and relationships described in Section 3.3.1.
> 5.Segment refinement.Within each segment, tokens with high ∆Semantics are
> treated as locally ...

## 4. Findings / 發現

> [!findings]
> - In these experiments, we collect and analyze following metrics: (1) success rate; (2) three average indicators computed over all trials (including failures): average steps, average time cost, and average token cost; (3) two specialized metrics,Time-to-Success andToken-to-Success.
> - Proposes formal Structural Context Model with declarative framework and Semantic Dynamics Analysis workflow, achieving 32 percentage points improvement on dynamic problem-solving tasks.
> - Denote the success rate asr, denote the average value of a given metricsX(time consumption, token consumption, etc.) over successful trials asx s , and denote the corresponding average value over failed trials asx f.
> - Dif- ferent metrics correspond to different real-world considerations: for instance, when the cost of failure dominates, success rate is the primary reference, whereas when the cost of each action is high, the average number of steps becomes more relevant.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Indirect — formalisation paper, not a system.
> **Intervention coverage:** Formal agent design (structural context model)
> **Outcome evidence:** +32 pp on dynamic problem-solving tasks
> **Strength of fit:** Moderate — useful theoretical scaffolding.

## 7. Key Quotes / 關鍵引文

- "Thus, LLM-powered task agents can achieve relatively robust performance under uncertainty." — Introduction
- "In this section, we describe a workflow for discovering reusable patterns from existing prompts, which consists of two main steps: segmentation and parameterization." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024a]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
