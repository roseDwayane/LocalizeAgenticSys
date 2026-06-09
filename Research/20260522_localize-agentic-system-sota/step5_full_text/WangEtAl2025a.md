---
citation_key: "WangEtAl2025a"
paper_id: "paper_062"
title: "Efficient Agents: Building Effective Agents While Reducing Cost"
authors: ["Ningning Wang", "Xavier Hu", "Pai Liu", "He Zhu", "Yue Hou", "Heyuan Huang", "Shengyu Zhang", "Jian Yang", "Jiaheng Liu", "Ge Zhang", "Changwang Zhang", "Jun Wang", "Yuchen Eleanor Jiang", "Wangchunshu Zhou"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2508.02694"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# Efficient Agents: Building Effective Agents While Reducing Cost

> **Authors / 作者:** Ningning Wang et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> The remarkable capabilities of Large Language Model (LLM)-driven agents have enabled sophisti- cated systems to tackle complex, multi-step tasks, but their escalating costs threaten scalability and accessibility. This work presents the first systematic study of the efficiency-effectiveness trade-off in modern agent systems, addressing the critical need for cost-effective designs without sacrificing performance. We investigate three key questions: (1) How much complexity do agentic tasks inherently require? (2) When do additional modules yield diminishing returns? (3) How much efficiency can be gained through the design of efficient agent frameworks? Through an empirical analysis on the GAIA benchmark, we evaluate the impact of LLM backbone selection, agent framework designs, and test-time scaling strategies. Using the cost-of-pass metric, we quantify the efficiency-performance trade-off across these dimensions. Our findings inform the development of Efficient Agents , a novel agent framework that has an optimal complexity to task requirements. Efficient Agents retains 96.7% of the performance of OWL, one leading open-source agent framework, while reducing operational costs from $0.398 to $0.228, resulting in a 28.4% improvement in cost-of-pass. Our work provides actionable insights for designing efficient, high-performing agent systems, advancing the accessibility and sustainability of AI-driven solutions. Date: August 6, 2025 Correspondence: Wangchunshu Zhou ...

> [!summary] 繁中
> Efficient Agents 系統性研究 agent 在效能/成本之間的取捨，提出的框架保留 OWL 96.7% 效能但成本從 $0.398 降到 $0.228（節省 28.4%），為 cost-aware 的 local agent 設計提供量化指南。

## 2. Problem & Motivation / 問題與動機

The ever-increasing reasoning and creation capabilities of Large Language Models (LLMs) have opened up a broad prospect for real-world applications. Researchers have developed numerous LLM-driven agent systems [1–10] and created a large number of fascinating products capable of handling complex, multi-step tasks. However, this progress mirrors a familiar trajectory in NLP research: from BERT [11] to ChatGPT [12], researchers consistently prioritize scaling up models to achieve breakthrough capabilities [13, 14], only later turning to optimize efficiency, cost, and environmental impact [15, 16]. This pattern has given rise to the critical subfield of efficient NLP, where researchers balance performance with practical constraints like inference latency, energy consumption, and economic viability.

## 3. Method / 方法

> [!method]
> Efficiency Effectiveness Cost
> cost-of-pass↓ Acc./%↑ Cost/$↓ #Tokens↓
> all l1 l2 l3 all l1 l2 l3 all l1 l2 l3 all l1 l2 l3
> GPT-4.1 0.98 0.32 1.07 3.51 53.33 69.81 50.00 30.770.705 0.367 0.710 1.380243K 103K 249K 506K
> Claude 3.7 Sonnet3.54 1.69 3.81 9.04 61.82 73.58 60.47 42.312.190 1.244 2.301 3.824680K 379K 716K 1,196K
> Qwen3-235B-A22B0.22 0.12 0.30 0.27 27.27 37.74 22.09 23.080.040 0.082 0.091 0.09372K 53K 81K 76K
> Qwen3-30B-A3B0.13 0.07 0.16 ∞ 17.58 30.19 15.12 0.000.023 0.022 0.024 0.02265K 61K 70K 60K
> QwQ-32B 0.23 0.15 0.26 0.49 22.42 30.19 20.93 11.540.120 0.102 0.126 0.135142K 129K 148K 149K
> o1 3.66 1.96 3.62 12.6652.12 67.92 50.00 26.921.908 1.328 1.812 3.40869K 47K 66K 127K
> Figure 2 Performance of various backbone LLMs on the GAIA benchmark: Accuracy vs Cost.
> Qwen3-30B-A3B exhibit superior efficiency, with a low cost-of-pass (0.13 overall) despite modest accuracy
> (17.58% overall). Given GAIA’s challenging nature and Qwen3-30B-A3B’s small activated parameter count
> (3B), such models may offer advantages for simpler agent tasks where efficiency is prioritized over raw
> performance. MoE-based sparse models, such as Qwen3-30B-A3B, leverage selective parameter activation to
> achieve remarkable efficiency, making them well-suited for resource-constrained agent tasks. As task difficulty
> increases from Level 1 to Level 3, cost-of-pass rises dramatically across large reasoning ...

## 4. Findings / 發現

> [!findings]
> - Efficient Agents framework retains 96.7% of the performance of OWL while reducing operational costs from $0.398 to $0.228, resulting in a 28.4% improvement.
> - Systematic study of efficiency-effectiveness trade-off in agent systems using GAIA benchmark.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — efficiency framework targets self-hosted deployments.
> **Intervention coverage:** Cost-aware agent architecture
> **Outcome evidence:** 96.7% of OWL effectiveness at 57% cost
> **Strength of fit:** Strong — quantified cost/efficiency trade-off for local agents.

## 7. Key Quotes / 關鍵引文

- "The ever-increasing reasoning and creation capabilities of Large Language Models (LLMs) have opened up a broad prospect for real-world applications." — Introduction
- "Qwen3-30B-A3B exhibit superior efficiency, with a low cost-of-pass (0.13 overall) despite modest accuracy (17.58% overall)." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
