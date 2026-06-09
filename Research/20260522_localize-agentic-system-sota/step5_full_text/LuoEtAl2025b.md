---
citation_key: "LuoEtAl2025b"
paper_id: "paper_015"
title: "MCP-Universe: Benchmarking Large Language Models with Real-World Model Context Protocol Servers"
authors: ["Ziyang Luo", "Zhiqi Shen", "Wenzhuo Yang", "Zirui Zhao", "Prathyusha Jwalapuram", "Amrita Saha", "Doyen Sahoo", "Silvio Savarese", "Caiming Xiong", "Junnan Li"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2508.14704"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "mcp_and_tool_protocols"
date_extracted: "2026-05-22"
---
# MCP-Universe: Benchmarking Large Language Models with Real-World Model Context Protocol Servers

> **Authors / 作者:** Ziyang Luo et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** mcp_and_tool_protocols

## 1. Summary / 摘要

> [!summary] EN
> The Model Context Protocol (MCP) has emerged as a transformative standard for connecting large language models (LLMs) to external data sources and tools, rapidly gaining adoption across major AI providers and development platforms. However, existing benchmarks are overly simplistic and fail to capture real application challenges such as long-horizon reasoning and large, unfamiliar tool spaces. To address this critical gap, we introduce MCP-Universe, the first comprehensive benchmark specifically designed to evaluate LLMs in realistic and hard tasks through interaction with real-world MCP servers. Our benchmark encompasses 6 core domains spanning 11 different MCP servers: Location Navigation , Repository Management , Financial Analysis , 3D Design , Browser Automation, and Web Searching. To ensure rigorous evaluation, we implement execution- based evaluators, including format evaluators for agent format compliance, static evaluators for time- invariant content matching, and dynamic evaluators that automatically retrieve real-time ground truth for temporally sensitive tasks. Through extensive evaluation of leading LLMs, we find that even top-performing models such as GPT-5 (43.72% success rate), Grok-4 (33.33% success rate) and Claude-4.0-Sonnet (29.44% success rate) exhibit significant performance limitations. In addition, our benchmark poses a significant long-context challenge for LLM agents, as the number of input tokens increases rapidly with the number of interaction ...

> [!summary] 繁中
> MCP-Universe 是首個以「實際 MCP server」做評估的 benchmark，涵蓋 Location Navigation、Repository Management、Financial Analysis、3D Design、Browser Automation、Web Searching 六大領域。透過 execution-based evaluator 對 GPT-5、Grok-4、Claude-4.0-Sonnet 等 SOTA 模型測試，顯示在真實 MCP 工具下仍有顯著效能落差。

## 2. Problem & Motivation / 問題與動機

The Model Context Protocol (MCP), introduced by Anthropic [1], represents a major paradigm shift in how AI systems interface with external data sources and tools. Dubbed the “USB-C of AI”[2], MCP addresses the long-standing issue of fragmented, bespoke integrations that trap language models in isolated information silos[3]. Since its release, MCP has gained rapid traction: major AI providers, including OpenAI [4] and Google Gemini [5], have committed to adoption, while development platforms such as Cursor [6] and Cline [7] have begun integrating it to enhance their products. Despite the transformative potential of MCPs, current evaluations remain insufficient for assessing the true capabilities of LLMs operating within this new paradigm.

## 3. Method / 方法

> [!method]
> Comprehensive benchmark evaluating LLMs through interaction with real-world MCP servers across six domains (Location Navigation, Repository Management, Financial Analysis, 3D Design, Browser Automation, Web Searching). Introduces execution-based evaluators and demonstrates significant performance limitations in state-of-the-art models including GPT-5, Grok-4, and Claude-4.0-Sonnet.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Our benchmark encompasses 6 core domains, with 11 MCP servers spanning diverse applications: Location Navigation, Repository Management, Financial Analysis, 3D Design, Browser Automation, and Web Searching, comprising a total of 231 tasks.
> - Comprehensive benchmark evaluating LLMs through interaction with real-world MCP servers across six domains (Location Navigation, Repository Management, Financial Analysis, 3D Design, Browser Automation, Web Searching).
> - Introduces execution-based evaluators and demonstrates significant performance limitations in state-of-the-art models including GPT-5, Grok-4, and Claude-4.0-Sonnet.
> - Our benchmark is also equipped with a UI for intuitive, user-friendly access.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — MCP servers tested are mostly self-hostable.
> **Intervention coverage:** Benchmarks, MCP tool evaluation
> **Outcome evidence:** Six-domain execution-based scores for SOTA models
> **Strength of fit:** Strong — primary MCP benchmark reference.

## 7. Key Quotes / 關鍵引文

- "The Model Context Protocol (MCP), introduced by Anthropic [1], represents a major paradigm shift in how AI systems interface with external data sources and tools." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Ray2025]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
