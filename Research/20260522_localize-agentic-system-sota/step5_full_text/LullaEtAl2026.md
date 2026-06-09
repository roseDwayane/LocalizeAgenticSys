---
citation_key: "LullaEtAl2026"
paper_id: "paper_037"
title: "On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents"
authors: ["Jai Lal Lulla", "Seyedmoein Mohsenimofidi", "Matthias Galster", "Jie M. Zhang", "Sebastian Baltes", "Christoph Treude"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2601.20404"
source: "local_pdf"
tier: 2
composite_score: 4.2
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents

> **Authors / 作者:** Jai Lal Lulla et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> AI coding agents such as Codex and Claude Code are increasingly used to autonomously contribute to software repositories. However, little is known about how repository-level configuration artifacts affect operational efficiency of the agents. In this paper, we study the impact of AGENTS.md files on the runtime and token consump- tion of AI coding agents operating on GitHub pull requests. We analyze 10 repositories and 124 pull requests, executing agents under two conditions: with and without an AGENTS.md file. We measure wall-clock execution time and token usage during agent execution. Our results show that the presence ofAGENTS.md is asso- ciated with a lower median runtime (Δ28.64%) and reduced output token consumption (Δ16.58%), while maintaining a comparable task completion behavior. Based on these results, we discuss immediate implications for the configuration and deployment of AI coding agents in practice, and outline a broader research agenda on the role of repository-level instructions in shaping the behavior, effi- ciency, and integration of AI coding agents in software development workflows. CCS Concepts •Software and its engineering → Software configuration management and version control systems. Keywords AI coding agents, AGENTS.md, pull requests, efficiency ACM Reference Format: Jai Lal Lulla, Seyedmoein Mohsenimofidi, Matthias Galster, Jie M. Zhang, Sebastian Baltes, and Christoph Treude. 2026. On the Impact of AGENTS.md Files on the Efficiency of AI Coding ...

> [!summary] 繁中
> 在 10 個 repo、124 個 PR 上分析 AGENTS.md 文件對 coding agent 的影響：有 AGENTS.md 的 PR 中位 runtime 下降 28.64%、output tokens 下降 16.58%、任務完成率不變。為 local agent 的「指令文件設計」提供量化證據。

## 2. Problem & Motivation / 問題與動機

AI-assisted software development has evolved rapidly from tools that support individual programming actions to systems that can autonomously carry out multi-step development tasks. Large lan- guage models are now routinely used for code generation, testing, repair, review, and documentation, covering substantial portions of the software development lifecycle [6, 10, 11]. Building on these capabilities, recent AI coding agents, such as OpenAI Codex and Claude Code, can navigate repositories, reason over multiple files, execute commands, and submit pull requests with limited human intervention, effectively acting as autonomous contributors rather than passive assistants [17, 20]. As these agents operate with increasing autonomy, their behav- ior depends not only on model capabilities but also on the contex- tual information provided by the repository.

## 3. Method / 方法

> [!method]
> Study of 10 repositories and 124 PRs shows AGENTS.md presence associated with a lower median runtime (Δ28.64%) and reduced output token consumption (Δ16.58%), while maintaining comparable task completion.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Mean output token usage decreases from 5,744.81 tokens (with- out AGENTS.md) to 4,591.46 tokens (with AGENTS.md), a reduction of 1,153.35 tokens (≈ 20.08%).
> - Median output tokens decrease more modestly, from 2,925.00 to 2,440.00 (485 tokens, ≈ 16.58%).
> - Mean input and cached input tokens also decline slightly (353,010.01 to 318,651.51;9 .73%and 328,877.31 to 296,078.73;9 .97%, respectively), with medians essentially unchanged or slightly higher.
> - Mean wall-clock time-to-completion decreases from 162.94s (without AGENTS.md, std dev 182.24s) to 129.91s (with AGENTS.md, std dev 136.84s), an absolute reduction of 33.03s (≈ 20.27%).

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — AGENTS.md is a local-readable file that travels with the repo.
> **Intervention coverage:** Harness configuration files
> **Outcome evidence:** −28.64% runtime, −16.58% tokens
> **Strength of fit:** Strong — quantifies an everyday local agent practice.

## 7. Key Quotes / 關鍵引文

- "AI-assisted software development has evolved rapidly from tools that support individual programming actions to systems that can autonomously carry out multi-step development tasks." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[LiuEtAl2026]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
