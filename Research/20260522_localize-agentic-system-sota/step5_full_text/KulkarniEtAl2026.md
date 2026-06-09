---
citation_key: "KulkarniEtAl2026"
paper_id: "paper_049"
title: "Optimizing FaaS Platforms for MCP-enabled Agentic Workflows"
authors: ["Varad Kulkarni", "Vaibhav Jha", "Nikhil Reddy", "Anand Eswaran", "Praveen Jayachandran", "Yogesh Simmhan"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2601.14735"
source: "arxiv_pdf"
tier: 3
composite_score: 3.5
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Optimizing FaaS Platforms for MCP-enabled Agentic Workflows

> **Authors / 作者:** Varad Kulkarni et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** arXiv PDF / arXiv PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Agentic workflows that use autonomous AI Agents powered by Large Language Models (LLMs) and Model Context Protocol (MCP) servers is rapidly rising. This introduces chal- lenges in scalable cloud deployment and state management. Traditional hosting on Virtual Machines (VMs) is resource-intensive and lacks elasticity. Functions-as-a-Service (FaaS) platforms offer modularity, autoscaling and cost efficiency but are inherently stateless. In this paper, we present the FAME, a FaaS-based architecture for orchestrating MCP-enabled agentic workflows. FAME decomposes agentic patterns such as ReAct into composable agents: Planner, Actor and Evaluator, that are each a FaaS function built using LangGraph and are orchestrated as a FaaS workflow. This enables modular composition as AWS Step Functions and avoids function timeouts seen for monolithic agentic workflows. To address context persistence across user requests in a conversation, FAME automates agent mem- ory persistence and injection using DynamoDB. It also optimizes MCP server deployment through AWS Lambda wrappers, caches tool outputs in S3 and proposes function fusion strategies. We evaluate FAME on two representative applications, on research paper sum- marization and log analytics, under diverse memory and caching configurations. Results show up to 13×latency reduction, 88% fewer input tokens and 66% in cost savings, along with improved workflow completion rates. This demonstrates the viability of serverless platforms for ...

> [!summary] 繁中
> 本論文把 ReAct pattern 拆成 Planner / Actor / Evaluator 三個 FaaS function 並以 workflow 編排，達成 13× 延遲下降、輸入 token 減少 88%、成本節省 66%，為 cost-sensitive 的 MCP 工作流提供 serverless 部署範式。

## 2. Problem & Motivation / 問題與動機

The last year has seen the dramatic rise ofAI Agents, which are autonomous software systems powered by foundational Large Language Models (LLMs) that interact with the environment to solve user tasks, with minimal human intervention [1]. These agents exhibit cognitive ca- pabilities, including planning, reasoning, memory and adaptation, and in particular, perform “tool calling” to translate their plans into actions in the digital or the real world.Agentic AI systems go beyond simple tasks and define complex, multi-step operations that are executed as workflows by coordinating across multiple agents [2]. Agentic AI is actively being evaluated in software engineering [3], data center management [4], finance [5], healthcare [6], scientific (digital and experimental) workflows [7, 8], and have the potential to bring tectonic shifts in the way enterprises and science is conducted [9]. ...

## 3. Method / 方法

> [!method]
> of FAME
> In this section, we present the architecture of ourFaaS-based agentic AI and MCP Engine
> (FAME), which orchestrates agentic workflows, their associated memory and MCP servers on
> FaaS platforms (Fig. 2). Rather than relying on monolithic agentic workflows, we use the ReAct
> pattern as our reference agentic workflow [10], though this can be expanded to others, such as
> MagenticOne [11], etc. We decompose the ReAct pattern into a set of event-driven Agents, each
> of which is defined as a FaaS function, and the pattern is formed from these functions composed
> into a FaaS workflow. Specifically, we expose thePlan, Act and Evaluate agent rolesas stateless
> functions that are composed using AWS Step Functions, with communication through explicit
> message passing. This workflow has cycles; based on the output of the evaluator, asuccessful
> output may be returned to the user or afailedresult may return control back to the Planner.
> We first describe how the ReAct agentic pattern is realized within this FaaS workflows’
> execution model (§3.1). We then address the key challenge of supporting agentic memory
> across simultaneous invocations of the workflow, for the same user session (§3.2). Then, we
> offer a lower-overhead means of wrapping MCP servers as Lambda functions, and automate and
> optimize tool I/O caching (§3.3). We also discuss alternate deployments of one or more MCP
> servers on the ...

## 4. Findings / 發現

> [!findings]
> - Achieves 13x latency reduction, 88% fewer input tokens, and 66% cost savings with improved completion rates.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Indirect — focuses on FaaS / serverless rather than single-machine local.
> **Intervention coverage:** FaaS-based ReAct decomposition
> **Outcome evidence:** 13× latency reduction, 88% fewer tokens, 66% cost cut
> **Strength of fit:** Moderate — useful comparison point against local deployment costs.

## 7. Key Quotes / 關鍵引文

- "The last year has seen the dramatic rise ofAI Agents, which are autonomous software systems powered by foundational Large Language Models (LLMs) that interact with the environment to solve user tasks, with minimal human intervention [1]." — Introduction
- "of FAME In this section, we present the architecture of ourFaaS-based agentic AI and MCP Engine (FAME), which orchestrates agentic workflows, their associated memory and MCP servers on FaaS platforms (Fig. 2)." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
