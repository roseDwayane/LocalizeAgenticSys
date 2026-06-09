---
citation_key: "YuEtAl2025a"
paper_id: "paper_060"
title: "AWorld: Orchestrating the Training Recipe for Agentic AI"
authors: ["Chengyue Yu", "Siyuan Lu", "Chenyi Zhuang", "Dong Wang", "Qintong Wu", "Zongyue Li", "Runsheng Gan", "Chunfeng Wang", "Siqi Hou", "Gaochi Huang", "Wenlong Yan", "Lifeng Hong", "Aohui Xue", "Yanfeng Wang", "Jinjie Gu", "David Tsai", "Tao Lin"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2508.20404"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# AWorld: Orchestrating the Training Recipe for Agentic AI

> **Authors / 作者:** Chengyue Yu et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> The “learning from practice” paradigm is crucial for developing capable Agentic AI systems, yet it is severely hampered by inefficient experience generation, a bottleneck especially pronounced in complex benchmarks like GAIA. To address this, we introduce AWORLD , an open-source system engineered for large-scale agent-environment interaction. By distribut- ing tasks across a cluster, AWORLD accelerates experience collection by 14.6x compared to standard single-node, sequential execution. This critical speedup makes extensive reinforce- ment learning practical and scalable. Leveraging this capability, we trained a Qwen3-32B- based agent that achieves pass@1 accuracy of 32.23% on the GAIA test set, which surpasses GPT-4o (27.91%) and rivals DeepSeek-V3 (31.89%). Our open-source system and the result- ing agent provide a practical blueprint for a complete agentic AI training pipeline, from efficient interaction to demonstrable model improvement. Figure 1: AWORLD : High Efficiency Enables High Performance on GAIA. (Left) By using the AWORLD framework to conduct fine-tuning and reinforcement learning on the Qwen3-32B base model, our resulting agent (Qwen3-32B-AWORLD ) demonstrates a substantial performance gain. It achieves a pass@1 score that is highly competitive with frontier proprietary models like GPT-4o. (Right) This effective training is made practical by AWORLD ’s core design. Its distributed architecture accelerates the critical experience generation (rollout) phase by a ...

> [!summary] 繁中
> AWorld 是用於大規模 agent-environment 互動的開源訓練系統，作者以 Qwen3-32B 訓練的 agent 在 GAIA test set 達 pass@1 32.23%，超越 GPT-4o 的 27.91%，提供 local-trainable agent 的端到端 recipe。

## 2. Problem & Motivation / 問題與動機

Since the release of ChatGPT (Achiam et al., 2023) by OpenAI in 2022, Large Language Models (LLMs) (An- thropic, 2025; Touvron et al., 2023; Google et al., 2023) have demonstrated remarkable capabilities across diverse domains, achieving expert human-level performance in many domains like mathematics (The Google DeepMind Team, 2024), demonstrating that AI has reached intellectual capabilities that rival human exper- tise in numerous domains. However, despite the impressive capabilities of individual LLMs, current AI systems still struggle to solve real-world, complex tasks effectively. For instance, on the challenging GAIA benchmark (Mialon et al., 2023), even closed-source models like GPT-4 (Achiam et al., 2023) achieve only 3.99% accuracy, highlighting the significant gap between LLM capabilities and agent performance in complex, multi-step reasoning scenarios. The future direction of ...

## 3. Method / 方法

> [!method]
> Open-source system for large-scale agent-environment interaction. Trained a Qwen3-32B-based agent that achieves pass@1 accuracy of 32.23% on the GAIA test set, which surpasses GPT-4o (27.91%).
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Trained a Qwen3-32B-based agent that achieves pass@1 accuracy of 32.23% on the GAIA test set, which surpasses GPT-4o (27.91%).

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — AWorld is open-source and the Qwen3-32B agent is self-hostable.
> **Intervention coverage:** Agent training recipe, environment orchestration
> **Outcome evidence:** GAIA pass@1 32.23% vs GPT-4o 27.91%
> **Strength of fit:** Strong — local-trainable end-to-end recipe.

## 7. Key Quotes / 關鍵引文

- "However, despite the impressive capabilities of individual LLMs, current AI systems still struggle to solve real-world, complex tasks effectively." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
