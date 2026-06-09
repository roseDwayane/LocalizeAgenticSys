---
citation_key: "RadosevichHalloran2025"
paper_id: "paper_043"
title: "MCP Safety Audit: LLMs with the Model Context Protocol Allow Major Security Exploits"
authors: ["Brandon Radosevich", "John Halloran"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2504.03767"
source: "arxiv_pdf"
tier: 3
composite_score: 3.5
cluster: "mcp_and_tool_protocols"
date_extracted: "2026-05-22"
---
# MCP Safety Audit: LLMs with the Model Context Protocol Allow Major Security Exploits

> **Authors / 作者:** Brandon Radosevich et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** arXiv PDF / arXiv PDF 抽取
> **Cluster / 聚類:** mcp_and_tool_protocols

## 1. Summary / 摘要

> [!summary] EN
> To reduce development overhead and enable seamless integration between potential components comprising any given generative AI application, the Model Context Protocol (MCP) (Anthropic, 2025d) has recently been released and, subsequently, widely adapted. The MCP is an open proto- col which standardizes API calls to large language models (LLMs), data sources, and agentic tools. Thus, by connecting multiple MCP servers–each defined with a set of tools, resources, and prompts–users are able to define automated workflows fully driven by LLMs. However, we show that the current MCP design carries a wide range of security risks for end-users. In particular, we show that industry-leading LLMs may be coerced to use MCP tools and compromise an AI developer’s system through a wide range of attacks, e.g., malicious code execution, remote access control, and credential theft. In order to proactively mitigate the demonstrated (and related) attacks, we introduce a safety auditing tool, McpSafetyScanner, the first such agentic tool to assess the security of an arbitrary MCP server. McpSafetyScanner uses several agents to: a) automatically determine ad- versarial samples given an MCP server’s tools and resources, (b) search for related vulnerabilities and remediations given such samples, and (c) generate a security report detailing all findings. Our work thus sheds light on serious security issues with general purpose agentic workflows, while also providing a proactive tool to audit the ...

> [!summary] 繁中
> MCP Safety Audit 證明攻擊者可誘使 LLM 透過 MCP tool 執行惡意程式、取得遠端存取與盜取憑證，並提出 MCPSafetyScanner 自動找漏洞並產出安全報告。對任何 local 部署 MCP 系統的安全評估都是必讀。

## 2. Problem & Motivation / 問題與動機

With the rise of large language models (LLMs) and agentic workflows, AI is being developed and adapted at unprecedented rates. Anticipating such growth, as well as the ensuing complexity resulting from AI-powered assistants and services communicating with one another, Anthropic has recently introduced the Model Context Protocol (MCP) (Anthropic, 2025d). This protocol seeks to integrate LLMs and agents with various external systems and services in an easily adaptable framework. Since it’s debut, the MCP has been widely adapted across a large number of commonly used open-source libraries, e.g., default MCP servers are natively packaged with Claude Desktop Anthropic (2025a), and official integrations include OpenAI’s Agents (OpenAI, 2025), Copilot (Microsoft, 2025), Stripe (Stripe, 2025), Slack (Anthropic, 2025g), and IBM’s Watson (IBM, 2025), to name a few.

## 3. Method / 方法

> [!method]
> Demonstrates LLMs can be coerced into using MCP tools for malicious code execution, remote access, and credential theft. Introduces MCPSafetyScanner, an agentic tool that automatically determines adversarial samples, searches for vulnerabilities, and generates security reports.
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
> **Population fit:** Direct — attacks are demonstrated against local MCP setups.
> **Intervention coverage:** MCP security threat model + scanner
> **Outcome evidence:** Demonstrated exploits + scanner output
> **Strength of fit:** Strong — security baseline for local MCP deployment.

## 7. Key Quotes / 關鍵引文

- "With the rise of large language models (LLMs) and agentic workflows, AI is being developed and adapted at unprecedented rates." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Ray2025]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
