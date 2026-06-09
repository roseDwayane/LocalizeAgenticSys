---
citation_key: "Verma2026"
paper_id: "paper_027"
title: "Active Context Compression: Autonomous Memory Management in LLM Agents"
authors: ["Nikhil Verma"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2601.07190"
source: "local_pdf"
tier: 2
composite_score: 4.2
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# Active Context Compression: Autonomous Memory Management in LLM Agents

> **Authors / 作者:** Nikhil Verma et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> Agent-centric architecture enabling autonomous consolidation of learnings and history pruning, achieving 22.7% token reduction while maintaining task performance on SWE-bench instances.

> [!summary] 繁中
> Active Context Compression (ACC) 提出 agent-centric architecture，讓 agent 自主整併歷史學習並修剪冗餘 context，在 SWE-bench 達成 22.7% token 縮減且任務效能不降，為長時序 local agent 提供關鍵的 memory management 方案。

## 2. Problem & Motivation / 問題與動機

Agent-centric architecture enabling autonomous consolidation of learnings and history pruning, achieving 22.7% token reduction while maintaining task performance on SWE-bench instances.

## 3. Method / 方法

> [!method]
> Agent-centric architecture enabling autonomous consolidation of learnings and history pruning, achieving 22.7% token reduction while maintaining task performance on SWE-bench instances.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Agent-centric architecture enabling autonomous consolidation of learnings and history pruning, achieving 22.7% token reduction while maintaining task performance on SWE-bench instances.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — ACC's compression keeps long sessions tractable on local context limits.
> **Intervention coverage:** Memory / context compression
> **Outcome evidence:** 22.7% SWE-bench token reduction at parity
> **Strength of fit:** Strong — direct cost optimisation for local agents.

## 7. Key Quotes / 關鍵引文

- "Agent-centric architecture enabling autonomous consolidation of learnings and history pruning, achieving 22.7% token reduction while maintaining task performance on SWE-bench instances." — Abstract

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
