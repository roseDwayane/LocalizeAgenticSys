---
citation_key: "EhteshamEtAl2025"
paper_id: "paper_014"
title: "A survey of agent interoperability protocols: Model Context Protocol (MCP), Agent Communication Protocol (ACP), Agent-to-Agent Protocol (A2A), and Agent Network Protocol (ANP)"
authors: ["Abul Ehtesham", "Aditi Singh", "Gaurav Kumar Gupta", "Saket Kumar"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2505.02279"
source: "arxiv_pdf"
tier: 3
composite_score: 3.7
cluster: "mcp_and_tool_protocols"
date_extracted: "2026-05-22"
---
# A survey of agent interoperability protocols: Model Context Protocol (MCP), Agent Communication Protocol (ACP), Agent-to-Agent Protocol (A2A), and Agent Network Protocol (ANP)

> **Authors / 作者:** Abul Ehtesham et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** arXiv PDF / arXiv PDF 抽取
> **Cluster / 聚類:** mcp_and_tool_protocols

## 1. Summary / 摘要

> [!summary] EN
> Large language model (LLM)-powered autonomous agents demand robust, standardized protocols to integrate tools, share contextual data, and coordinate tasks across heterogeneous systems. Ad-hoc integrations are difficult to scale, secure, and generalize across domains. This survey examines four emerging agent communication protocols: Model Context Protocol (MCP), Agent Communication Protocol (ACP), Agent-to-Agent Protocol (A2A), and Agent Network Protocol (ANP), each ad- dressing interoperability in distinct deployment contexts. MCP provides a JSON-RPC client-server interface for secure tool invocation and typed data exchange. ACP defines a general-purpose com- munication protocol over RESTful HTTP, supporting MIME-typed multipart messages and both synchronous and asynchronous interactions. Its lightweight and runtime-independent design enables scalable agent invocation, while features like session management, message routing, and integration with role-based and decentralized identifiers (DIDs).A2A enables peer-to-peer task delegation using capability-based Agent Cards, supporting secure and scalable collaboration across enterprise agent workflows. ANP supports open-network agent discovery and secure collaboration using W3C de- centralized identifiers (DIDs) and JSON-LD graphs. The protocols are compared across multiple dimensions, including interaction modes, discovery mechanisms, communication patterns, and secu- rity models. Based on the comparative analysis, a phased ...

> [!summary] 繁中
> 本綜述比較四種 agent 互通 protocol：MCP（tool access）、ACP（multimodal messaging）、A2A（協作任務執行）、ANP（去中心化市集），提出分階段採用路線圖，為 local agentic system 的對外溝通協定選型提供決策框架。

## 2. Problem & Motivation / 問題與動機

Large Language Models (LLMs) have become central to modern artificial intelligence, powering autonomous agents that operate across cloud, edge, and desktop environments [ 1, 2]. These agents [ 3] ingest contextual information, execute tasks, and interact with external services or tools. However, inconsistent and fragmented interoperability practices make it difficult to integrate, secure, and scale communication among LLM-driven agents [4]. Interoperability (the ability of distinct agents and systems to discover capabilities, exchange context, and coordinate actions seamlessly) is essential for modular, reusable, and resilient multi-agent [5] workflows.

## 3. Method / 方法

> [!method]
> Model
> Client–Server with
> JSON-RPC primitives
> Brokered Client–Server
> (Registry + Task
> Routing)
> Peer-like Client ↔
> Remote Agent
> Decentralized
> Peer-to-Peer
> Agent Discovery Manual registration or
> static URL lookup
> Registry-based Agent Card retrieval via
> HTTP
> Search Engine
> Discovery
> Identity & Auth Token-based auth;
> supports DIDs
> optionally
> Bearer tokens, mutual
> TLS, JWS
> DID-based handshake
> or out-of-band headers
> Decentralized
> Identifiers (DID),
> especially did:wba
> Message Format JSON-RPC 2.0 with
> Prompts, Tools,
> Resources
> Structured multipart
> messages with
> MIME-typed parts
> Task + Artifact
> messaging over JSON
> JSON-LD with
> Schema.org and
> ADP/Meta-Protocol
> negotiation
> Core
> Components
> Tools, Prompts,
> Resources, Sampling
> Agent Detail, Message,
> Task Request, Artifact
> Agent Card, Task,
> Message, Artifact
> DID Document, Agent
> Description,
> Meta-Protocol,
> Structured Interface
> Transport Layer HTTP, Stdio,
> Server-Sent Events
> (SSE)
> HTTP with incremental
> streams
> HTTP with optional
> SSE + Push
> Notifications
> HTTP with JSON-LD
> over TLS
> Session Support Stateless + optional
> persistent tool context
> Session-aware with run
> state tracking
> Session-aware or
> stateless;
> client-managed IDs
> Stateless;
> DID-authenticated
> tokens used across
> connections
> Target Scope LLM ↔ External
> Tool/Service integration
> Model-Agnostic,
> Infrastructure-level
> agents
> Trusted enterprise task
> delegation
> Open Internet ...

## 4. Findings / 發現

> [!findings]
> - Proposes phased adoption roadmap beginning with MCP for tool access, progressing through ACP for multimodal messaging, A2A for collaborative task execution, and ANP for decentralized marketplaces.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — protocol selection is a key local-system decision.
> **Intervention coverage:** Agent interoperability protocols (MCP/ACP/A2A/ANP)
> **Outcome evidence:** Phased adoption roadmap
> **Strength of fit:** Strong — single-stop guide to agent protocols.

## 7. Key Quotes / 關鍵引文

- "Large Language Models (LLMs) have become central to modern artificial intelligence, powering autonomous agents that operate across cloud, edge, and desktop environments [ 1, 2]." — Introduction
- "ANP facilitates decentralized agent discovery, DID-based identity verification, and peer-to-peer communication using JSON- LD graphs." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Ray2025]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
