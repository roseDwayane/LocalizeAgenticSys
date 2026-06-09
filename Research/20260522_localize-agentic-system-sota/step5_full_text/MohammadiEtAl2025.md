---
citation_key: "MohammadiEtAl2025"
paper_id: "paper_004"
title: "Evaluation and Benchmarking of LLM Agents: A Survey"
authors: ["Mahmoud Mohammadi", "Yipeng Li", "Jane C. Lo", "Wendy Yip"]
year: 2025
venue: "Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining V.2"
doi: "10.1145/3711896.3736570"
arxiv_id: null
source: "abstract_only"
tier: 3
composite_score: 3.8
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# Evaluation and Benchmarking of LLM Agents: A Survey

> **Authors / 作者:** Mahmoud Mohammadi et al. (2025)
> **Venue / 發表場域:** Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining V.2
> **Source / 來源:** Abstract only / 僅摘要（DOI paywalled）
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> The emergence of LLM-based agents has opened new frontiers in AI, yet evaluating them remains complex and underdeveloped. This survey provides an in-depth overview of LLM agent evaluation through a two-dimensional taxonomy: evaluation objectives (behavior, capabilities, reliability, safety) and evaluation processes (interaction modes, datasets, metrics, tooling).

> [!summary] 繁中
> 本綜述以二維分類學整理 LLM agent 的評估：縱軸為 evaluation objective（behavior / capability / reliability / safety），橫軸為 evaluation process（interaction mode / dataset / metric / tooling）。為 local agentic system 的 eval pipeline 設計提供分類框架。

## 2. Problem & Motivation / 問題與動機

The emergence of LLM-based agents has opened new frontiers in AI, yet evaluating them remains complex and underdeveloped. This survey provides an in-depth overview of LLM agent evaluation through a two-dimensional taxonomy: evaluation objectives (behavior, capabilities, reliability, safety) and evaluation processes (interaction modes, datasets, metrics, tooling).

## 3. Method / 方法

> [!method]
> The emergence of LLM-based agents has opened new frontiers in AI, yet evaluating them remains complex and underdeveloped. This survey provides an in-depth overview of LLM agent evaluation through a two-dimensional taxonomy: evaluation objectives (behavior, capabilities, reliability, safety) and evaluation processes (interaction modes, datasets, metrics, tooling).
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
> **Population fit:** Indirect — broad evaluation survey.
> **Intervention coverage:** Evaluation taxonomy (behavior / capability / reliability / safety)
> **Outcome evidence:** Survey of methods
> **Strength of fit:** Moderate — useful for organising the eval chapter.

## 7. Key Quotes / 關鍵引文

- "The emergence of LLM-based agents has opened new frontiers in AI, yet evaluating them remains complex and underdeveloped." — Abstract

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]
- [[WangEtAl2024c]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
