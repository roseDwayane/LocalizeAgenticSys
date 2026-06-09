---
citation_key: "ZhangEtAl2025b"
paper_id: "paper_052"
title: "MCP Security Bench (MSB): Benchmarking Attacks Against Model Context Protocol in LLM Agents"
authors: ["Dongsen Zhang", "Zekun Li", "Xu Luo", "Xuannan Liu", "Peipei Li", "Wenjun Xu"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2510.15994"
source: "arxiv_pdf"
tier: 3
composite_score: 3.0
cluster: "mcp_and_tool_protocols"
date_extracted: "2026-05-22"
---
# MCP Security Bench (MSB): Benchmarking Attacks Against Model Context Protocol in LLM Agents

> **Authors / 作者:** Dongsen Zhang et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** arXiv PDF / arXiv PDF 抽取
> **Cluster / 聚類:** mcp_and_tool_protocols

## 1. Summary / 摘要

> [!summary] EN
> The Model Context Protocol (MCP) standardizes how large language model (LLM) agents discover, describe, and call external tools. While MCP unlocks broad interoperability, it also enlarges the attack surface by making tools first- class, composable objects with natural-language metadata, and standardized I/O. We presentMSB(MCP Security Benchmark), an end-to-end evaluation suite that systematically measures how well LLM agents resist MCP-specific attacks throughout the full tool-use pipeline: task planning, tool invocation, and re- sponse handling. MSB contributes: (1) ataxonomyof 12 attacks including name- collision, preference manipulation, prompt injections embedded in tool descrip- tions, out-of-scope parameter requests, user-impersonating responses, false-error escalation, tool-transfer, retrieval injection, and mixed attacks; (2) anevaluation harnessthat executes attacks by running real tools (both benign and malicious) via MCP rather than simulation; and (3) arobustness metricthat quantifies the trade-off between security and performance: Net Resilient Performance (NRP). We evaluate ten popular LLM agents across 10 domains and 405 tools, produc- ing 2,000 attack instances. Results reveal the effectiveness of attacks against each stage of MCP. Models with stronger performance are more vulnerable to attacks due to their outstanding tool calling and instruction following capabilities. MSB provides a practical baseline for researchers and practitioners to study, compare, ...

> [!summary] 繁中
> MCP Security Bench (MSB) 是首個 LLM agent 對 MCP 攻擊抵抗力的 end-to-end 評估套件：12 種攻擊跨任務 planning、tool invocation、回應處理三階段，對 9 個 agent、10 個領域、405 個 tool 共 2,000 個攻擊樣本評估，提供 MCP 安全的標準化測試平台。

## 2. Problem & Motivation / 問題與動機

Recent advances in Large Language Models (LLMs) have demonstrated strong performance across diverse tasks such as problem solving, reasoning, tool invocation, and programming (Xu et al., 2024; Jin et al., 2025; Mingyu et al., 2024; Gao et al., 2023). These advances have fueled the development of AI agents that treat LLMs as central decision makers, augmented with external tools (Zheng et al., 2025) and memory mechanisms (Xu et al., 2025). By leveraging tools, LLM-based agents can engage with richer external environments and support applications ranging from project development (Lu et al., 2023) to team management (Li et al., 2025a) and information assistance (Chae et al., 2025). Tools expand the functionality of LLM-based agents, but the absence of a unified standard forces reimplementation across architectures and platforms.

## 3. Method / 方法

> [!method]
> First end-to-end evaluation suite measuring LLM agent resistance to MCP-specific attacks. Presents taxonomy of 12 attacks across task planning, tool invocation, and response handling stages. Evaluates nine agents across 10 domains with 405 tools, producing 2,000 attack instances.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - From the results, we draw the following conclusions:(1) All attack methods demonstrate effectiveness, with an overall average ASR of 40.35%.
> - The impact of OP is the most pronounced, achieving the highest average ASR of 76.5%.
> - For example, DeepSeek-V3.1 achieves both the highest ASR and PUA.
> - LLM Single Attack Mixed Attack AveragePI OP UI FE RI PI-UI PI-FE NC-FE PM-FE PM-UI PM-OP TT-OP Llama3.1 8B4.92% 46.25% 35.08% 19.02%0.00%23.61% 22.95% 15.00% 11.25% 23.75% 1

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — MSB tests local agent stacks.
> **Intervention coverage:** MCP attack benchmark
> **Outcome evidence:** 12 attacks × 9 agents × 10 domains × 405 tools = 2,000 instances
> **Strength of fit:** Strong — standardised MCP attack benchmark.

## 7. Key Quotes / 關鍵引文

- "These advances have fueled the development of AI agents that treat LLMs as central decision makers, augmented with external tools (Zheng et al., 2025) and memory mechanisms (Xu et al., 2025)." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
