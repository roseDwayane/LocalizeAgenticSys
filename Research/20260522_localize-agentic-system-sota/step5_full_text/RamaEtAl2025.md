---
citation_key: "RamaEtAl2025"
paper_id: "paper_040"
title: "Cerebrum (AIOS SDK): A Platform for Agent Development, Deployment, Distribution, and Discovery"
authors: ["Balaji Rama", "Kai Mei", "Yongfeng Zhang"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2503.11444"
source: "arxiv_pdf"
tier: 3
composite_score: 3.5
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Cerebrum (AIOS SDK): A Platform for Agent Development, Deployment, Distribution, and Discovery

> **Authors / 作者:** Balaji Rama et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** arXiv PDF / arXiv PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Autonomous LLM-based agents have emerged as a powerful paradigm for complex task ex- ecution, yet the field lacks standardized tools for development, deployment, distribution and discovery of agents. We present Cerebrum, an Agent SDK for AIOS that addresses this gap through three key components: (1) a compre- hensive SDK featuring a modular four-layer architecture for agent development, encom- passing LLM, memory, storage, and tool man- agement; (2) a community-driven Agent Hub for sharing and discovering agents, complete with version control and dependency manage- ment; (3) an interactive web interface for test- ing and evaluating agents. The platform’s ef- fectiveness is demonstrated through implemen- tations of various agent architectures, including Chain of Thought (CoT), ReAct, and tool-use agents. Cerebrum advances the field by pro- viding a unified framework that standardizes agent development while maintaining flexibil- ity for researchers and developers to innovate and distribute their agents. The live website is at https://app.aios.foundation, the code is at https://github.com/agiresearch/Cerebrum, and video https://app.aios.foundation/video-demo. 1 Introduction Autonomous LLM-based agents (agents for short) have emerged as a transformative paradigm in ap- plying and advancing the capabilities of Large Lan- guage Models (LLMs) beyond text prediction to executing complex tasks through planning, reason- ing, tool using, and goal-directed actions (Ge et al., 2023a; ...

> [!summary] 繁中
> Cerebrum (AIOS SDK) 提供四層模組化 agent 開發架構（Development / Deployment / Distribution / Discovery）、社群驅動的 Agent Hub 與互動 web 介面，示範 CoT / ReAct / tool-use 三種主流 agent 架構，為 local agent SDK 設計提供藍本。

## 2. Problem & Motivation / 問題與動機

Autonomous LLM-based agents (agents for short) have emerged as a transformative paradigm in ap- plying and advancing the capabilities of Large Lan- guage Models (LLMs) beyond text prediction to executing complex tasks through planning, reason- ing, tool using, and goal-directed actions (Ge et al., 2023a; Shinn et al., 2024; Li et al., 2023; Deng et al., 2024; Mei et al., 2024). The paradigm scales to real-world issues such as web browsing (Iong et al., 2024; Deng et al., 2024), social simulation (Park et al., 2023; Pang et al., 2024), and decision- making (Hua et al., 2024; Mao et al., 2023). Although with the fast advancement of LLM- based agent research in the recent year, there still lacks a unified platform for researchers and devel- opers to develop, deploy, and distribute their agents, and for users to discover and use the agents. This demonstration paper introduces Cerebrum Agen- ...

## 3. Method / 方法

> [!method]
> Agent SDK featuring modular four-layer architecture for development, community-driven Agent Hub for sharing, and interactive web interface. Demonstrates implementations of CoT, ReAct, and tool-use agent architectures.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - See Results / Evaluation section of the source paper — quantitative claims could not be auto-extracted from the PDF.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — Cerebrum is an open SDK aimed at local deployment.
> **Intervention coverage:** Agent SDK + Hub
> **Outcome evidence:** Implementations of CoT / ReAct / tool-use
> **Strength of fit:** Moderate — overlaps with OpenHands SDK.

## 7. Key Quotes / 關鍵引文

- "The paradigm scales to real-world issues such as web browsing (Iong et al., 2024; Deng et al., 2024), social simulation (Park et al., 2023; Pang et al., 2024), and decision- making (Hua et al., 2024; Mao et al., 2023)." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
