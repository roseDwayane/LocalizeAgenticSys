---
citation_key: "LumerEtAl2025"
paper_id: "paper_047"
title: "ScaleMCP: Dynamic and Auto-Synchronizing Model Context Protocol Tools for LLM Agents"
authors: ["Elias Lumer", "Anmol Gulati", "Vamse Kumar Subbiah", "Pradeep Honaganahalli Basavaraju", "James A. Burke"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2505.06416"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "mcp_and_tool_protocols"
date_extracted: "2026-05-22"
---
# ScaleMCP: Dynamic and Auto-Synchronizing Model Context Protocol Tools for LLM Agents

> **Authors / 作者:** Elias Lumer et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** mcp_and_tool_protocols

## 1. Summary / 摘要

> [!summary] EN
> Recent advancements in Large Language Models (LLMs) and the introduction of the Model Context Protocol (MCP) have significantly expanded LLM agents’ capability to interact dynamically with external tools and APIs. However, existing tool selection frameworks do not integrate MCP servers, instead relying heavily on error-prone manual updates to monolithic local tool repositories, leading to duplication, inconsistencies, and inefficiencies. Additionally, current approaches abstract tool selection before the LLM agent is invoked, limiting its autonomy and hindering dynamic re-querying capabilities during multi-turn interactions. To address these issues, we introduce ScaleMCP, a novel tool selection approach that dynamically equips LLM agents with a MCP tool retriever, giving agents the autonomy to add tools into their memory, as well as an auto-synchronizing tool storage system pipeline through CRUD (create, read, update, delete) operations with MCP servers as the single source of truth. We also propose a novel embedding strategy, Tool Document Weighted Average (TDW A), designed to selectively emphasize critical components of tool documents (e.g. tool name or synthetic questions) during the embedding process. Comprehensive evaluations conducted on a created dataset of 5,000 financial metric MCP servers, across 10 LLM models, 5 embedding models, and 5 retriever types, demonstrate substantial improvements in tool retrieval and agent invocation performance, emphasizing ScaleMCP’s ...

> [!summary] 繁中
> ScaleMCP 提出「動態工具選擇」機制：MCP tool retriever 讓 agent 能自主增刪工具，並以 CRUD 自動同步 storage。論文提出 Tool Document Weighted Average (TDWA) embedding 策略，在 5,000 個金融指標 server 測試中顯著提升選工具的準確度。

## 2. Problem & Motivation / 問題與動機

Recent advancements in Large Language Models (LLMs) and tool learning have enabled LLM agents to dynamically interact with external tools and APIs. The introduction of the Model Context Protocol (MCP) standardizes this connection between LLMs and external tools, data sources, and prompts [Anthropic, 2024]. Concurrently, to deal with LLM architecture limitations in calling the correct tools or model providers not allowing more than 128 tools to be equipped to the LLM, breakthroughs in tool-applied Retrieval-Augmented Generation (RAG) have enabled LLM agents to efficiently scale to a large number of tools [Lumer et al., 2025a, Chen et al., 2024]. Despite technological advancements in tool selection and LLM invocation in prior work, three critical limitations remain.

## 3. Method / 方法

> [!method]
> 3.1 ScaleMCP Overview
> We introduce ScaleMCP, a novel approach to LLM agent tool selection for MCP servers (tools), encompassing an
> auto-synchronizing tool storage system indexing pipeline and a modern agentic RAG approach that gives the tool
> invocation autonomy to the LLM agent (See Figure 1). By using the built-in function-calling capability of the LLM,
> ScaleMCP allows LLM agents to have access and use thousands of MCP servers, autonomously managing its tool
> storage which the underlying tool storage system is synced to the available MCP servers automatically.
> 3.2 ScaleMCP Auto-Synchronization Indexing Pipeline
> The tool storage system can be chosen by the tool selection use case and the retrieval method. While the most common
> storage system is a vector database and vector retrieval, other options include graph database, a hybrid graph RAG
> approach, or lexical term matching in a standard database. For example, if MCP servers are independent of each other,
> a vector database can scale independently. If MCP servers are dependent on each other in a graphical manner, a graph
> database can scale this dependency information for retrieval. ScaleMCP is driven by its auto-synchronization tool
> storage indexing pipeline, which uses the MCP servers as the single source of truth to determine any net new CRUD
> (create, read, update, delete) operations to the tool storage system. In Algorithm 1, ...

## 4. Findings / 發現

> [!findings]
> - Testing across 5,000 financial metric servers demonstrated substantial improvements.

## 5. Limitations / 局限性

> [!limitation]
> and Future Work
> While ScaleMCP pushes the needle forward in a modern adaption of the tool selection field, several limitations remain.
> First, the Model Context Protocol (MCP) is still in its early stages of development. Its reliance on a stateful client-server
> architecture, although practical for certain applications, may pose scalability and flexibility challenges compared
> to stateless or serverless alternatives that better align with modern distributed system design. Future iterations of
> ScaleMCP could explore hybrid architectures or serverless integrations to mitigate these concerns. ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — ScaleMCP can run alongside a local agent.
> **Intervention coverage:** Dynamic tool selection / MCP retrieval
> **Outcome evidence:** TDWA gains across 5,000 servers
> **Strength of fit:** Strong — addresses scaling MCP toolboxes in local agents.

## 7. Key Quotes / 關鍵引文

- "Recent advancements in Large Language Models (LLMs) and tool learning have enabled LLM agents to dynamically interact with external tools and APIs." — Introduction
- "While the most common storage system is a vector database and vector retrieval, other options include graph database, a hybrid graph RAG approach, or lexical term matching in a standard database." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Ray2025]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
