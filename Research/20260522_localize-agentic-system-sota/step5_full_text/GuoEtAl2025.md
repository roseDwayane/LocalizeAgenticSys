---
citation_key: "GuoEtAl2025"
paper_id: "paper_048"
title: "MCP-AgentBench: Evaluating Real-World Language Agent Performance with MCP-Mediated Tools"
authors: ["Zikang Guo", "Benfeng Xu", "Chiwei Zhu", "Wentao Hong", "Xiaorui Wang", "Zhendong Mao"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2509.09734"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "mcp_and_tool_protocols"
date_extracted: "2026-05-22"
---
# MCP-AgentBench: Evaluating Real-World Language Agent Performance with MCP-Mediated Tools

> **Authors / 作者:** Zikang Guo et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** mcp_and_tool_protocols

## 1. Summary / 摘要

> [!summary] EN
> Comprehensive benchmark with 33 MCP servers (188 tools) and 600 systematically designed queries across six complexity categories. Introduces MCP-Eval, outcome-oriented evaluation prioritizing real-world task success over simulation metrics.

> [!summary] 繁中
> MCP-AgentBench 提供 33 個 MCP server、188 個 tool、600 道跨六種複雜度的查詢，引入 outcome-oriented 的 MCP-Eval，以實際任務成功率而非模擬指標來評估 agent。為 MCP-based local agent 提供標準化的評估環境。

## 2. Problem & Motivation / 問題與動機

Figure 1: BFCL [34] vs. MCP-AgentBench Language agents, leveraging Large Language Models (LLMs) for reasoning and interaction [ 27, 30, 10, 26], are rapidly emerging as a transformative force in AI. Their ability to au- tonomously operate in digital environments, including navigat- ing the web [40, 23, 33], controlling applications [32, 19, 2], and interfacing with software tools [35, 16], signals significant advancements. However, a primary hurdle to widespread agent utility is achieving effective and scalable interaction with the external world.

## 3. Method / 方法

> [!method]
> Comprehensive benchmark with 33 MCP servers (188 tools) and 600 systematically designed queries across six complexity categories. Introduces MCP-Eval, outcome-oriented evaluation prioritizing real-world task success over simulation metrics.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - 6 Model Comparsion.The results in Table 1 reveal a surprising and significant trend: the leading open-source models demonstrate exceptional capabilities, rivaling and even surpassing their proprietary counterparts.
> - Most notably, Qwen3- 235B-A22B, using the ReAct framework, achieved the highest overall score in the entire benchmark, challenging the prevailing narrative of proprietary model dominance.
> - Comprehensive benchmark with 33 MCP servers (188 tools) and 600 systematically designed queries across six complexity categories.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — 33 MCP servers are easy to self-host.
> **Intervention coverage:** Benchmarks (MCP-mediated tool use)
> **Outcome evidence:** 188 tools × 600 queries, outcome-oriented
> **Strength of fit:** Strong — outcome-based eval complementing MCP-Universe.

## 7. Key Quotes / 關鍵引文

- "MCP-AgentBench Language agents, leveraging Large Language Models (LLMs) for reasoning and interaction [ 27, 30, 10, 26], are rapidly emerging as a transformative force in AI." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Ray2025]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
