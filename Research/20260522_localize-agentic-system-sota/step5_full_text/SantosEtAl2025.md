---
citation_key: "SantosEtAl2025"
paper_id: "paper_029"
title: "Decoding the Configuration of AI Coding Agents: Insights from Claude Code Projects"
authors: ["Helio Victor F. Santos", "Vitor Costa", "Joao Eduardo Montandon", "Marco Tulio Valente"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2511.09268"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Decoding the Configuration of AI Coding Agents: Insights from Claude Code Projects

> **Authors / 作者:** Helio Victor F. Santos et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Agentic code assistants are a new generation of AI systems capable of performing end-to-end software engineering tasks. While these systems promise unprecedented productivity gains, their behavior and effectiveness depend heavily on configuration files that define architectural constraints, coding practices, and tool usage policies. However, little is known about the structure and content of these configuration artifacts. This paper presents an empirical study of the configuration ecosystem of Claude Code, one of the most widely used agentic coding systems. We collected and analyzed 328 con- figuration files from public Claude Code projects to identify (i) the software engineering concerns and practices they specify and (ii) how these concerns co-occur within individual files. The results highlight the importance of defining a wide range of concerns and practices in agent configuration files, with particular emphasis on specifying the architecture the agent should follow. ACM Reference Format: Hélio Victor F. Santos, Vitor Costa, João Eduardo Montandon and Marco Tulio Valente. 2025. Decoding the Configuration of AI Coding Agents: In- sights from Claude Code Projects. In Proceedings of ACM Conference (Con- ference’17).ACM, New York, NY, USA, 5 pages. https://doi.org/10.1145/ nnnnnnn.nnnnnnn 1 INTRODUCTION Agentic code assistants are autonomous AI systems that indepen- dently execute complex software development workflows. Emerg- ing in 2024 with tools like Claude Code ...

> [!summary] 繁中
> 對 328 個 Claude Code 專案配置檔（CLAUDE.md、settings 等）做實證研究，歸納出工程師在 agent config 中表達的軟體工程關切，特別強調「指定 agent 應遵守的架構」是普遍模式。提供 local agentic system config 文件設計實務證據。

## 2. Problem & Motivation / 問題與動機

Agentic code assistants are autonomous AI systems that indepen- dently execute complex software development workflows. Emerg- ing in 2024 with tools like Claude Code (Anthropic), Codex (Ope- nAI), and Jules (Google), these agents mark a fundamental shift from code completion tools—such as the early versions of GitHub Copilot—to systems capable of performing end-to-end software engineering tasks. Rather than requiring constant human guidance, they autonomously plan solutions, generate and refactor code, de- bug issues, run tests, query documentation, and perform version control operations, including creating commits and submitting pull requests. Although agentic code assistants are built for autonomy, they should be configured with rules that guide their behavior and help to improve their performance and effectiveness.

## 3. Method / 方法

> [!method]
> Empirical study of 328 configuration files from Claude Code projects identifying software engineering concerns and practices specified in agent configurations, with particular emphasis on specifying the architecture the agent should follow.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Empirical study of 328 configuration files from Claude Code projects identifying software engineering concerns and practices specified in agent configurations, with particular emphasis on specifying the architecture the agent should follow.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — Claude Code configs run locally on developer machines.
> **Intervention coverage:** Harness engineering, config files (CLAUDE.md)
> **Outcome evidence:** 328-config empirical taxonomy
> **Strength of fit:** Strong — empirical baseline for AGENTS.md / CLAUDE.md design.

## 7. Key Quotes / 關鍵引文

- "Agentic code assistants are autonomous AI systems that indepen- dently execute complex software development workflows." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]
- [[LiuEtAl2026]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
