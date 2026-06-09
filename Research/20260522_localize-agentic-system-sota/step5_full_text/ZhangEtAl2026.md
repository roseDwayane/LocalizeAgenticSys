---
citation_key: "ZhangEtAl2026"
paper_id: "paper_035"
title: "Engineering Pitfalls in AI Coding Tools: An Empirical Study of Bugs in Claude Code, Codex, and Gemini CLI"
authors: ["Ruixin Zhang", "Wuyang Dai", "Hung Viet Pham", "Gias Uddin", "Jinqiu Yang", "Song Wang"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2603.20847"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Engineering Pitfalls in AI Coding Tools: An Empirical Study of Bugs in Claude Code, Codex, and Gemini CLI

> **Authors / 作者:** Ruixin Zhang et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> The rapid integration of Large Language Models (LLMs) into soft- ware development workflows has given rise to a new class of AI- assisted coding tools, such as Claude-Code, Codex, and Gemini CLIs. While promising significant productivity gains, the engineer- ing process of building these tools, which sit at the complex inter- section of traditional software engineering, AI system design, and human-computer interaction, is fraught with unique and poorly understood challenges. This paper presents the first empirical study of engineering pit- falls in building such tools, on a systematic, manual analysis of over 3.8K publicly reported bugs in the open-source repositories of three AI coding tools (i.e., Claude-Code, Codex, and Gemini CLI) on GitHub. Specifically, we employ an open-coding methodology to manually examine the issue description, associated user discus- sions, and developer responses. Through this process, we catego- rize each bug in multiple dimensions, including bug type, bug lo- cation, root cause, and observed symptoms. This fine-grained an- notation enables us to characterize common failure patterns and identify recurring engineering challenges. Our results show that more than 67% of the bugs in these tools are related to functionality. In terms of root causes, 37.3% of the bugs stem from API, integration, or configuration errors. Conse- quently, the most commonly observed symptoms reported by users are API errors (18.3%), terminal problems (14%), and command ...

> [!summary] 繁中
> 本論文對 Claude Code、Codex、Gemini CLI 三大 coding tool 的 3.8K 個 bug 做實證分析：超過 67% 屬功能性 bug、API/integration errors 佔 36.9% 根因、終端問題佔 14%。為 local coding agent 的 reliability 與錯誤模式提供量化參照。

## 2. Problem & Motivation / 問題與動機

The advent of powerful Large Language Models (LLMs) has fun- damentally altered the software development landscape [ 4, 11, 23, 24]. Moving beyond simple code completion, tools such as Claude Code [1], Codex [ 2], and Gemini CLI [ 3] provide interactive, con- versational interfaces capable of interpreting natural language in- structions, performing task planning, invoking tools, maintaining session memory, modifying existing codebases, and executing sys- tem commands. These tools promise to minimize boilerplate code, expedite debugging workflows, and democratize programming by lowering technical barriers. However, transforming these systems from prototype demonstrations into production-ready, reliable de- veloper tools requires substantial engineering effort.

## 3. Method / 方法

> [!method]
> Analysis of 3.8K bugs in three coding tools shows more than 67% of the bugs are related to functionality. Root causes include API/integration errors (36.9%); most commonly observed symptoms reported by users are API errors (18.3%), terminal problems (14%).
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Analysis of 3.8K bugs in three coding tools shows more than 67% of the bugs are related to functionality.
> - Root causes include API/integration errors (36.9%); most commonly observed symptoms reported by users are API errors (18.3%), terminal problems (14%).

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — Claude Code, Codex, Gemini CLI all run locally and the bug analysis is grounded in that.
> **Intervention coverage:** Reliability / bug taxonomy of coding agents
> **Outcome evidence:** 67%+ functionality bugs; 36.9% API errors
> **Strength of fit:** Strong — sets failure-mode baselines for local coding agents.

## 7. Key Quotes / 關鍵引文

- "The advent of powerful Large Language Models (LLMs) has fun- damentally altered the software development landscape [ 4, 11, 23, 24]." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[LiuEtAl2026]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
