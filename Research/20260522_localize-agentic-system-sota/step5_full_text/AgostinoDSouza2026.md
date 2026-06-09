---
citation_key: "AgostinoDSouza2026"
paper_id: "paper_046"
title: "Herding CATs: ALARA for Agent Harness Engineering in Portable Composable Multi-Agent Teams"
authors: ["Christopher J. Agostino", "Nayan D'Souza"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2603.20380"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Herding CATs: ALARA for Agent Harness Engineering in Portable Composable Multi-Agent Teams

> **Authors / 作者:** Christopher J. Agostino et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Introduces context-agent-tool (CAT) data layer applying ALARA principle, allowing users to directly declare tool access for each agent. Evaluates 22 locally-hosted models across 115 practical tasks in approximately 2500 total executions.

> [!summary] 繁中
> Herding CATs 提出 Context-Agent-Tool (CAT) data layer，套用核能領域的 ALARA 原則（As Low As Reasonably Achievable）來限制每個 agent 的 tool 存取。作者在 22 個本機部署的模型、115 個任務、共 2500 次執行上做大規模實證，為 portable composable multi-agent 提供 harness 設計範式。

## 2. Problem & Motivation / 問題與動機

Introduces context-agent-tool (CAT) data layer applying ALARA principle, allowing users to directly declare tool access for each agent. Evaluates 22 locally-hosted models across 115 practical tasks in approximately 2500 total executions.

## 3. Method / 方法

> [!method]
> Introduces context-agent-tool (CAT) data layer applying ALARA principle, allowing users to directly declare tool access for each agent. Evaluates 22 locally-hosted models across 115 practical tasks in approximately 2500 total executions.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Evaluates 22 locally-hosted models across 115 practical tasks in approximately 2500 total executions.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — evaluation explicitly uses locally-hosted models.
> **Intervention coverage:** Harness engineering, multi-agent, tool access control (ALARA)
> **Outcome evidence:** 22 local models × 115 tasks × ~2500 executions
> **Strength of fit:** Strong — local-deployment-first study, rare in the literature.

## 7. Key Quotes / 關鍵引文

- "Introduces context-agent-tool (CAT) data layer applying ALARA principle, allowing users to directly declare tool access for each agent." — Abstract

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[LinEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
