---
citation_key: "LiEtAl2026"
paper_id: "paper_034"
title: "AIDev: Studying AI Coding Agents on GitHub"
authors: ["Hao Li", "Haoxiang Zhang", "Ahmed E. Hassan"]
year: 2026
venue: "arXiv"
doi: "10.1145/3793302.3797249"
arxiv_id: "2602.09185"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# AIDev: Studying AI Coding Agents on GitHub

> **Authors / 作者:** Hao Li et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> AI coding agents are rapidly transforming software engineering by performing tasks such as feature development, debugging, and test- ing. Despite their growing impact, the research community lacks a comprehensive dataset capturing how these agents are used in real- world projects. To address this gap, we introduce AIDev, a large- scale dataset focused on agent-authored pull requests (Agentic- PRs) in real-world GitHub repositories. AIDev aggregates 932,791 Agentic-PRs produced by five agents: OpenAI Codex, Devin, GitHub Copilot, Cursor, and Claude Code. These PRs span 116,211 reposi- tories and involve 72,189 developers. In addition, AIDev includes a curated subset of 33,596 Agentic-PRs from 2,807 repositories with over 100 stars, providing further information such as comments, reviews, commits, and related issues. This dataset offers a founda- tion for future research on AI adoption, developer productivity, and human-AI collaboration in the new era of software engineering. CCS Concepts •Software and its engineering;•Information systems → Data mining; Keywords AI Agent, Agentic AI, Coding Agent, Agentic Coding, Software Engineering Agent 1 High-Level Overview The vision of AI Teammates [13] and recent evidence of their adop- tion in practice [19] signal a major transition in software engineer- ing (SE). Coding Agents are increasingly acting as AI Teammates that participate in core development workflows. They now con- tribute thousands of pull requests (PRs)1 daily, becoming ...

> [!summary] 繁中
> AIDev 是首個大規模 AI 編碼 agent 在 GitHub 上行為的實證資料集：932,791 個由 Codex、Devin、Copilot、Cursor、Claude Code 產出的 PR，橫跨 116,211 repo、72,189 開發者。提供 local / cloud agent 在真實 OSS 工作流上的比較基線。

## 2. Problem & Motivation / 問題與動機

Large-scale dataset aggregating 932,791 Agentic-PRs produced by five agents: OpenAI Codex, Devin, GitHub Copilot, Cursor, and Claude Code spanning 116,211 repositories and 72,189 developers.

## 3. Method / 方法

> [!method]
> Large-scale dataset aggregating 932,791 Agentic-PRs produced by five agents: OpenAI Codex, Devin, GitHub Copilot, Cursor, and Claude Code spanning 116,211 repositories and 72,189 developers.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Laboratory and think-aloud studies sharpen these insights: although participants often prefer working with tools like GitHub Copilot, measurable efficiency gains are inconsistent when tasks require deep comprehension or debugging of suggested code [36].
> - Controlled studies frequently find improvements in perceived productivity and quality of starting points, even when completion time or task success rates do not uniformly improve [1, 36].

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Indirect — empirical study of cloud-hosted agents (Devin, Codex, etc.).
> **Intervention coverage:** Empirical study of coding agents in the wild
> **Outcome evidence:** 932,791 PR dataset
> **Strength of fit:** Moderate — context for production-vs-local comparison.

## 7. Key Quotes / 關鍵引文

- "Large-scale dataset aggregating 932,791 Agentic-PRs produced by five agents: OpenAI Codex, Devin, GitHub Copilot, Cursor, and Claude Code spanning 116,211 repositories and 72,189 developers." — Abstract

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]
- [[WangEtAl2024c]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
