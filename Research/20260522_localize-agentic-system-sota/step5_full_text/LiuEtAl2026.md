---
citation_key: "LiuEtAl2026"
paper_id: "paper_028"
title: "Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems"
authors: ["Jiacheng Liu", "Xiaohan Zhao", "Xinyi Shang", "Zhiqiang Shen"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2604.14228"
source: "local_pdf"
tier: 1
composite_score: 4.7
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems

> **Authors / 作者:** Jiacheng Liu et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Technical analysis of Claude Code architecture from publicly available TypeScript source code, identifying five human values (decision authority, safety, reliable execution, capability amplification, contextual adaptability) traced through thirteen design principles. Core system is a simple while-loop that calls the model, runs tools, and repeats.

> [!summary] 繁中
> 本論文逆向工程公開的 Claude Code TypeScript 原始碼，析出五個核心人類價值（decision authority / safety / reliable execution / capability amplification / contextual adaptability）與十三條設計原則。指出 Claude Code 核心其實只是一個「呼叫 model → 跑 tool → 回圈」的 simple while-loop，極簡 harness 加細膩的工程細節成就 SOTA。

## 2. Problem & Motivation / 問題與動機

AI-assisted software development has evolved from autocomplete-style tools such as GitHub Copilot (Chen et al., 2021), through IDE-integrated assistants like Cursor (Cursor, 2026), to fully agentic systems that autonomously plan multi-step modifications, execute shell commands, read and write files, and iterate on their own outputs. Claude Code (Anthropic, 2026a) is an agentic coding tool released by Anthropic (Anthropic, 2026c). Its official documentation describes an “agentic loop” that plans and executes actions toward accomplishing a goal and can call tools, evaluate results, and continue until the task is done1. This shift from suggestion to autonomous action introduces architectural requirements that have no counterpart in completion-based tools.

## 3. Method / 方法

> [!method]
> Overview
> Building a production coding agent requires answering several recurring design questions: where should
> reasoning live, how many execution engines are needed, what safety posture to adopt, and what resource
> to treat as the binding constraint. Claude Code’s architecture can be read as one set of answers to these
> questions. At the implementation level, the system has seven components connected by a main data flow: a
> user submits a prompt through one of several interfaces, which feeds into a shared agent loop. The agent loop
> assembles context, calls the Claude model, receives responses that may include tool-use requests, routes those
> requests through a permission system, and dispatches approved actions to concrete tools that interact with the
> execution environment. Throughout this process, state and persistence mechanisms record the conversation
> 5
> transcript, manage session identity, and support resume, fork, and rewind operations.
> 3.1 Design Questions and Running Example
> The description is organized around four design questions that recur across production coding agents, each
> grounding one or more of the design principles identified in Table 1. Each question is introduced here
> with Claude Code’s answer, a note on plausible alternatives, and then demonstrated progressively through
> Sections 4 to 9.
> Where does reasoning live?In Claude Code, the model reasons about what to ...

## 4. Findings / 發現

> [!findings]
> - The memoized context assembly functions (getSystemContext() and getUserContext() both use lodashmemoize at con- 4Complexity +40.7% (p <0.001); velocity spike +281% in month one, baseline by month three.

## 5. Limitations / 局限性

> [!limitation]
> Beyond the methodological limitations in Section B.3, several analytical constraints apply. The memoized
> context assembly functions (getSystemContext() and getUserContext() both use lodashmemoize at con-
> 4Complexity +40.7% (p <0.001); velocity spike +281% in month one, baseline by month three.
> 30
> text.ts) mean that git status and CLAUDE.md content are cached rather than recomputed on every turn.
> Dynamic changes during a conversation may not be reflected immediately, though compaction can clear caches
> and lazy-loaded path-scoped rules provide a partial counter-mechanism.
> Feature flags create ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — Claude Code is the canonical reference local coding agent.
> **Intervention coverage:** Harness engineering, design principles
> **Outcome evidence:** Design space taxonomy; 13 principles
> **Strength of fit:** Strong — design-space map that the SOTA review reuses as a backbone.

## 7. Key Quotes / 關鍵引文

- "Claude Code (Anthropic, 2026a) is an agentic coding tool released by Anthropic (Anthropic, 2026c)." — Introduction
- "Claude Code’s architecture can be read as one set of answers to these questions." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024a]]
- [[WangEtAl2024c]]
- [[ZhouEtAl2026]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
