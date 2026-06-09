---
citation_key: "FanEtAl2025"
paper_id: "paper_042"
title: "MCPToolBench++: A Large Scale AI Agent Model Context Protocol MCP Tool Use Benchmark"
authors: ["Shiqing Fan", "Xichen Ding", "Liang Zhang", "Linjian Mo"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2508.07575"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "mcp_and_tool_protocols"
date_extracted: "2026-05-22"
---
# MCPToolBench++: A Large Scale AI Agent Model Context Protocol MCP Tool Use Benchmark

> **Authors / 作者:** Shiqing Fan et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** mcp_and_tool_protocols

## 1. Summary / 摘要

> [!summary] EN
> LLMs’ capabilities are enhanced by using function calls to integrate various data sources or API results into the context window. Typical tools include search, web crawlers, maps, financial data, file systems, and browser usage, etc. Integrat- ing these data sources or functions requires a standardized method. The Model Context Protocol (MCP) provides a standardized way to supply context to LLMs. However, the evaluation of LLMs and AI Agents’ MCP tool use abilities suffer from several issues. First, there’s a lack of comprehensive datasets or benchmarks to evaluate various MCP tools. Second, the diverse formats of response from MCP tool call execution further increase the difficulty of evaluation. Addition- ally, unlike existing tool-use benchmarks with high success rates in functions like programming and math functions, the success rate of real-world MCP tool is not guaranteed and varies across different MCP servers. Furthermore, the LLMs’ con- text window also limits the number of available tools that can be called in a single run, because the textual descriptions of tool and the parameters have long token length for an LLM to process all at once. To help address the challenges of evaluating LLMs’ performance on calling MCP tools, we propose MCPToolBench++12, a large-scale, multi-domain AI Agent tool use benchmark. As of July 2025, this benchmark is build upon marketplace of over 4k MCP servers from more than 40 categories, collected from the MCP mar- ketplaces and GitHub ...

> [!summary] 繁中
> MCPToolBench++ 以 4,000+ MCP server、40+ 類別構建大規模 MCP tool use benchmark，解決多元回應格式、可變成功率、context window 限制等評估難題，是目前最完整的 MCP 工具使用評估資料集。

## 2. Problem & Motivation / 問題與動機

Modern LLMs (Anthropic (2025b); OpenAI (2025); Google DeepMind (2025); Yang et al. (2025)) are transforming from pure language-based models to models with more complicated reasoning and agentic tool use capabilities (OpenAI Deep Research (2025a); Gemini Deep Research (2024); An- thropic (2025a); Moonshot AI (2025)). Many state-of-the-art LLMs are trained on function-calling capabilities, such as searching, planning, and browse use, to access real-time information (e.g., weather, financial data) and perform complicated tasks like deep research, planning, and API us- age (e.g., making reservations). To handle various data sources and function-calling results, Model Context Protocol (MCP) (2025) provides a standardized way to provide context to LLMs and in- tegrate data sources and tools from various MCP servers.

## 3. Method / 方法

> [!method]
> Large-scale benchmark built on over 4,000 MCP servers from 40+ categories. Addresses evaluation challenges including diverse tool response formats, variable success rates across MCP servers, and context window limitations for tool descriptions.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - We reported the MCP tool call Abstract Syntax Tree (AST) and Pass@K scores on the evaluated MCPToolBench++ benchmark in Table 2.
> - We illustrate the AST results in Figure 3, Pass@K results in Figure 4 and Tool Call Success Rate in Figure 5.
> - From the result of Abstract Syntax Tree score (function call tool choosing and parameters inferences), we can see that Qwen3-coder achieved top AST accuracy performance in categories including Browser and Map.
> - And Qwen2.5-max achieved top AST accuracy performance in categories including File System and Finance.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — many of the 4,000+ MCP servers are self-hostable.
> **Intervention coverage:** Benchmarks (MCP tool use)
> **Outcome evidence:** Coverage across 40+ MCP server categories
> **Strength of fit:** Strong — broadest MCP eval to date.

## 7. Key Quotes / 關鍵引文

- "Modern LLMs (Anthropic (2025b); OpenAI (2025); Google DeepMind (2025); Yang et al." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Ray2025]]
- [[LuoEtAl2025b]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
