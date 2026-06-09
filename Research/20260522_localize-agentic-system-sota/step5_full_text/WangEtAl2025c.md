---
citation_key: "WangEtAl2025c"
paper_id: "paper_006"
title: "The OpenHands Software Agent SDK: A Composable and Extensible Foundation for Production Agents"
authors: ["Xingyao Wang", "Simon Rosenberg", "Juan Michelini", "Calvin Smith", "Hoang Tran", "Engel Nyst", "Rohit Malhotra", "Xuhui Zhou", "Valerie Chen", "Robert Brennan", "Graham Neubig"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2511.03690"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# The OpenHands Software Agent SDK: A Composable and Extensible Foundation for Production Agents

> **Authors / 作者:** Xingyao Wang et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Agents are now used widely in the process of software development, but building production-ready software engineering agents is a complex task. Deploying software agents effectively requires flexibility in implementation and experimentation, reliable and secure execution, and interfaces for users to interact with agents. In this paper, we present the OpenHands Software Agent SDK, a toolkit for implementing software development agents that satisfy these desiderata. This toolkit is a complete architectural redesign of the agent components of the popular OpenHands framework for software development agents. To achieve flexibility, we design a simple interface for implementing agents that requires only a few lines of code in the default case, but is easily extensible to more complex full-featured agents with features such as custom tools, memory management, and more. For security and reliability, it delivers seamless local-to-remote execution portability, integrated REST/WebSocket services. For interaction with human users, it can connect directly to a variety of interfaces, such as visual workspaces (VSCode, VNC, browser), command-line interfaces, and APIs. Compared with existing SDKs from OpenAI, Claude and Google, OpenHands uniquely integrates native sandboxed execution, lifecycle ...

> [!summary] 繁中
> OpenHands Software Agent SDK 是原平台的下一代架構，把 agent server、sandbox runtime、orchestration 拆解為可組合元件，使同一份 agent 定義可在本機、遠端 VM 或多 worker 一致執行。論文詳述 event-stream protocol、tool registry 與安全執行策略，定位為後續 production agentic deployment 的基礎 SDK，是 local agentic stack 的關鍵零件。

## 2. Problem & Motivation / 問題與動機

In software engineering, AI agents have evolved from assistive tools (GitHub, 2021; Cursor Team, 2024) to autonomous systems capable of hours-long async execution on complex tasks (e.g., Devin (Cognition AI, 2024), Claude Code (Anthropic, 2025b), OpenHands (Wang et al., 2025)). Reliably deploying autonomous agents in production requiressystem foundations—including durable state management, safe execution in a sandbox, and consistent behavior across environments ranging from local to containerized cloud deployments—that were 1 arXiv:2511.03690v2 [cs.SE] 22 Apr 2026 The OpenHands Software Agent SDK: A Composable and Extensible Foundation for Production Agents S e s s i o n I n t e g r a t i o n s G i t h u b A p p , G i t l a b A p p , . . . O p e n H a n d s C L I C o m m a n d - l i n e i n t e r f a c e O p e n H a n d s G U I R e a c t F r o n t e n d A P I S e r v e r H T T P & W e b ...

## 3. Method / 方法

> [!method]
> OpenHands V1’s architecture emerged from both the operational challenges we encountered in V0 analyzed
> in§3. OpenHands V1 is abroader ecosystemwith applications like CLI and GUI. Its foundation is the
> OpenHands Software Agent SDK—a standalone developer framework comprising nine interlocking
> components: Event-Sourced State Management (§4.2), LLM (§4.3), Tool System (§4.4), Agent (§4.5), Context
> Window Management (§4.6), Local Conversation (§4.7), Secret Registry (§4.8), Security and Confirmation
> Page 5
> The OpenHands Software Agent SDK: A Composable and Extensible Foundation for Production Agents
> (§4.9), and deployment architecture (§4.10) with local and remote workspace support (§4.10). This section
> focuses on describing theSDK architecturerather than the full application and explains how these components
> collectively support both local and production deployments.
> 4.1 Modular Four-Package Design
> The OpenHands Software Agent SDK is organized into four Python packages that compose together based on
> deployment needs. Fig. 1b shows how these packages interact:
> •openhands.sdk: Core abstractions (Agent, Conversation, LLM, Tool, MCP, etc) and the event system.
> •openhands.tools: Concrete tool implementations based on abstractions defined inopenhands.sdk.
> •openhands.workspace: Execution environments (e.g., Docker, hosted API) that extend SDK base classes.
> •openhands.agent server: A web ...

## 4. Findings / 發現

> [!findings]
> - To achieve flexibility, we design a simple interface for implementing agents that requires only a few lines of code in the default case, but is easily extensible to more complex full-featured agents with features such as custom tools, memory management, and more.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — explicitly designed for local Docker execution; canonical SDK for local agentic systems.
> **Intervention coverage:** Harness engineering, sandboxing, planning, tool integration
> **Outcome evidence:** Architectural description; ergonomics over OpenHands v1
> **Strength of fit:** Strong — anchor SDK reference for any 'how to build' guide on local agents.

## 7. Key Quotes / 關鍵引文

- "The design assumed all executions occur in a sandbox, making later support for local execution workflows (CLI) cumbersome — requiring special-case handling in the CLI runtime and duplicated local implementations of MCP and tools." — Introduction
- "OpenHands V1’s architecture emerged from both the operational challenges we encountered in V0 analyzed in§3." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024c]]
- [[Jimenez-GomezEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
