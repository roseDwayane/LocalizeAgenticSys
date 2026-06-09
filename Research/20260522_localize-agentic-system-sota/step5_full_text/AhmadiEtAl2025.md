---
citation_key: "AhmadiEtAl2025"
paper_id: "paper_054"
title: "MCP Bridge: A Lightweight, LLM-Agnostic RESTful Proxy for Model Context Protocol Servers"
authors: ["Arash Ahmadi", "Sarah Sharif", "Yaser M. Banad"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2504.08999"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "mcp_and_tool_protocols"
date_extracted: "2026-05-22"
---
# MCP Bridge: A Lightweight, LLM-Agnostic RESTful Proxy for Model Context Protocol Servers

> **Authors / 作者:** Arash Ahmadi et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** mcp_and_tool_protocols

## 1. Summary / 摘要

> [!summary] EN
> Large Language Models (LLMs) are increasingly augmented with external tools through standardized interfaces like the Model Context Protocol (MCP). How- ever, current MCP implementations face critical limitations: they typically require local process execution through STDIO transports, making them imprac- tical for resource-constrained environments like mobile devices, web browsers, and edge computing. We present MCP Bridge, a lightweight RESTful proxy that connects to multiple MCP servers and exposes their capabilities through a unified API. Unlike existing solutions, MCP Bridge is fully LLM-agnostic, supporting any backend regardless of vendor. The system implements a risk-based execution model with three security levels—standard execution, confirmation workflow, and Docker isolation—while maintaining backward compatibility with standard MCP clients. However, reliable execution within this framework requires mod- els that can strictly adhere to protocol schemas. To this end, we also fine-tuned the Qwen3 4B and 8B model family on the Agent-Ark/Toucan-1.5M dataset using four Reinforcement Learning techniques: Group Relative Policy Optimiza- tion (GRPO), Dr. GRPO, Beta Normalization Policy Optimization (BNPO), and Decoupled Clip and Dynamic sAmpling Policy Optimization (DAPO). Eval- uated on the MCPToolBench++ benchmark, our optimized model achieves an F1 score of 73.0% that outperforms GPT-OSS-120B (62.17%) and remains com- petitive with the 70B+ parameter baselines. ...

> [!summary] 繁中
> MCP Bridge 是輕量級 LLM-agnostic RESTful proxy，把多個 MCP server 統一為單一 API，並依風險分三級執行。fine-tuned Qwen3 模型在 MCPToolBench++ 上取得 F1 73.0%，勝過 GPT-OSS-120B，為資源受限的 local 部署提供安全且高效的 MCP 接取方案。

## 2. Problem & Motivation / 問題與動機

Large Language Models (LLMs) have revolutionized natural language processing. They enable sophisticated conversational agents that can understand and generate human-like text across numerous domains [1]. Despite their impressive capabilities, these models are inherently limited by their training data and lack access to real-time information, specialized tools, and the ability to perform actions in external systems [2]. To overcome these limitations, there has been a significant push toward augment- ing LLMs with external tools and data sources, allowing them to retrieve information, execute computations, and interact with various services [3].

## 3. Method / 方法

> [!method]
> : Policy Optimization for Tool
> Alignment
> This section describes how we align open-weight Qwen3 models for reliable MCP-
> style tool use via reinforcement learning, while keeping the MCP Bridge interface
> model-agnostic. We focus on two practical objectives: selecting the correct tool(s) and
> emitting a parseable MCP-compliant tool-call structure that MCP Bridge can execute.
> 4.1 Problem Setup and Output Interface
> Each example consists of a natural-language queryq, a set of available toolsT(tool
> name and description, optionally schema), and a reference set of expected tool names
> T ⋆. The model produces a responseythat may include one or more tool calls. In
> training and evaluation, tool calls are expected to appear as JSON enclosed in explicit
> tags:
> <tool_call>
> {"name": "tool_name", "arguments": {"arg1": "...", "arg2": "..."}}
> </tool_call>
> We extract the predicted tool set bT(y) from the model output and compare
> it toT ⋆. Tool calls are extracted using robust pattern matching over (i) tagged
> <tool call>blocks and (ii) common JSON-like formats produced by LLMs during
> tool use. To avoid false mismatches arising from server prefixes and naming conven-
> tions, tool names are normalized by lowercasing, removing known server prefixes (e.g.,
> Server::tool name→tool name), stripping common MCP prefixes/suffixes, and
> canonicalizing separators (hyphens/underscores/spaces) before matching.
> 4.2 ...

## 4. Findings / 發現

> [!findings]
> - and Results We evaluate tool-use behavior on MCPToolBench++ [10], reporting Precision, Recall, F1, and Accuracy for six tool categories (Browser, File System, Search, Map, Pay, Finance), with 50 randomly sampled evaluation instances per category (N=300 total; see Table 8).
> - We compare the base Qwen3 models against four RL methods (GRPO, Dr.
> - All reported 95% confidence intervals (CIs) are computed via 10,000-iteration bootstrap resampling of per-sample scores.1 5.1 Per-category F1 trends Figure 8 summarizes per-category F1 scores.
> - 8Per-category F1 score heatmaps on MCPToolBench++ for Qwen3-4B (top) and Qwen3-8B (bottom).

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — MCP Bridge is explicitly lightweight and LLM-agnostic, ideal for local Qwen3.
> **Intervention coverage:** MCP gateway / proxy, security tiers
> **Outcome evidence:** F1 73.0% on MCPToolBench++ vs GPT-OSS-120B
> **Strength of fit:** Strong — concrete local-deployable MCP proxy.

## 7. Key Quotes / 關鍵引文

- "Large Language Models (LLMs) have revolutionized natural language processing." — Introduction
- ": Policy Optimization for Tool Alignment This section describes how we align open-weight Qwen3 models for reliable MCP- style tool use via reinforcement learning, while keeping the MCP Bridge interface model-agnostic." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[FanEtAl2025]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
