---
citation_key: "SongEtAl2025b"
paper_id: "paper_058"
title: "SmallThinker: A Family of Efficient Large Language Models Natively Trained for Local Deployment"
authors: ["Yixin Song", "Zhenliang Xue", "Dongliang Wei", "Feiyang Chen", "Jianxiang Gao", "Junchen Liu", "Hangyu Liang", "Guangshuo Qin", "Chengrong Tian", "Bo Wen", "Longyu Zhao", "Xinrui Zheng", "Zeyu Mi", "Haibo Chen"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2507.20984"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "local_inference_and_edge_deployment"
date_extracted: "2026-05-22"
---
# SmallThinker: A Family of Efficient Large Language Models Natively Trained for Local Deployment

> **Authors / 作者:** Yixin Song et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** local_inference_and_edge_deployment

## 1. Summary / 摘要

> [!summary] EN
> Models architecturally designed for local deployment using sparse MoE with quantization support, exceeding 20 tokens/s on consumer CPUs with minimal memory footprint.

> [!summary] 繁中
> SmallThinker 是專為本機部署設計的高效 LLM 家族，採 sparse MoE + 量化支援，在消費級 CPU 上達 20+ tokens/s、佔用極低記憶體，是 local agentic system 的 model layer 重要候選。

## 2. Problem & Motivation / 問題與動機

Models architecturally designed for local deployment using sparse MoE with quantization support, exceeding 20 tokens/s on consumer CPUs with minimal memory footprint.

## 3. Method / 方法

> [!method]
> Models architecturally designed for local deployment using sparse MoE with quantization support, exceeding 20 tokens/s on consumer CPUs with minimal memory footprint.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Models architecturally designed for local deployment using sparse MoE with quantization support, exceeding 20 tokens/s on consumer CPUs with minimal memory footprint.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — explicitly designed for on-device deployment.
> **Intervention coverage:** Local inference (sparse MoE + quantization)
> **Outcome evidence:** 20+ tokens/s on consumer CPU
> **Strength of fit:** Strong — model layer for local agentic stack.

## 7. Key Quotes / 關鍵引文

- "Introduction The AI revolution has reached an inflection point." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[LinEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
