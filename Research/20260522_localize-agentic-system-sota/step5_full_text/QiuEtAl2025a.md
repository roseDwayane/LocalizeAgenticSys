---
citation_key: "QiuEtAl2025a"
paper_id: "paper_025"
title: "Alita: Generalist Agent Enabling Scalable Agentic Reasoning with Minimal Predefinition and Maximal Self-Evolution"
authors: ["Jiahao Qiu", "Xuan Qi", "Tongcheng Zhang", "Xinzhe Juan", "Jiacheng Guo", "Yifu Lu", "Yimin Wang", "Zixin Yao", "Qihan Ren", "Xun Jiang", "Xing Zhou", "Dongrui Liu", "Ling Yang", "Yue Wu", "Kaixuan Huang", "Shilong Liu", "Hongru Wang", "Mengdi Wang"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2505.20286"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# Alita: Generalist Agent Enabling Scalable Agentic Reasoning with Minimal Predefinition and Maximal Self-Evolution

> **Authors / 作者:** Jiahao Qiu et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> Recent advances in large language models (LLMs) have enabled agents to autonomously perform complex, open-ended tasks. However, many existing frameworks depend heavily on manually predefined tools and workflows, which hinder their adaptability, scalability, and generalization across domains. In this work, we introduce Alita—a generalist agent designed with the principle of "Simplicity is the ultimate sophistication," enabling scalable agentic reasoning through minimal predefinition and maximal self-evolution. For minimal predefinition, Alita is equipped with only one component for direct problem-solving, making it much simpler and neater than previous approaches that relied heavily on hand-crafted, elaborate tools and workflows. This clean design enhances its potential to generalize to challenging questions, without being limited by tools. For Maximal self-evolution, we enable the creativity of Alita by providing a suite of general-purpose components to autonomously construct, refine, and reuse external capabilities by generating task-related model context protocols (MCPs) from open source, which contributes to scalable agentic reasoning. Notably, Alita achieves 75.15% pass@1 and 87.27% pass@3 accuracy, which is top-ranking among general- purpose agents, on the GAIA benchmark validation dataset, 74.00% and 52.00% pass@1, respectively, on Mathvista and PathVQA, outperforming many agent systems with far greater complexity. More details will be updated at ...

> [!summary] 繁中
> Alita 是強調「minimal predefinition + maximal self-evolution」的 generalist agent：給 agent 最少預設，讓它在執行中自行構造能力（工具、流程）。在 GAIA validation 上達 pass@1 75.15%、pass@3 87.27%，示範 self-evolving local agent 的潛力。

## 2. Problem & Motivation / 問題與動機

"Simplicity is the ultimate sophistication." — Leonardo da Vinci Large language models (LLMs) have rapidly evolved from merely generating text to autonomous agents capable of independently planning and executing complex tasks on behalf of users with limited human oversight [ 2]. These capabilities have enabled a wide range of applications, ranging from travel planning [ 3], computer use [ 4, 5, 6], to the multi-step research tasks [ 7]. To support such diverse and demanding tasks, a new class of systems called generalist agents has emerged. These agents are designed to handle a wide range of domains and tasks through a unified architecture, allowing them to generalize beyond task-specific solutions, such as OpenAI Deep Research [1] and Manus.

## 3. Method / 方法

> [!method]
> excels in generating comprehensive reports on complex topics and has shown superior performance on
> benchmarks.
> 4.2 Results
> We run three rounds of testing on GAIA and achieved the best performance on the GAIA leaderboard, surpassing
> other agent systems. Alita with Claude-Sonnet-4 and GPT-4o achieves 75.15% pass@1 and 87.27% pass@3 accuracy,
> which is top-ranking on the GAIA benchmark validation dataset, outperforming many agent systems with far greater
> complexity. Alita with Claude 3.7 Sonnet + GPT-4o achieves 72.73% pass@1 and 86.06% pass@3 on GAIA, and
> further attains 74.00% and 52.00% pass@1 on the Mathvista and PathVQA benchmarks, respectively, outperforming
> Octotools and Open Deep Research by smolagents. More detailed results are shown in Table 1.
> Agent
> GAIA Mathvista PathVQA
> level1 level2 level3 total
> Alita (Claude-3.7-Sonnet, GPT-4o) (%)
> pass@1 81.13 75.58 46.15 72.73 74 52
> pass@2 88.68 80.23 53.85 78.79 - -
> pass@3 96.23 86.04 65.38 86.06 - -
> Alita (Claude-Sonnet-4, GPT-4o) (%)
> pass@1 77.36 76.74 65.38 75.15 - -
> pass@3 88.68 89.53 76.92 87.27 - -
> Baselines (%)
> Octotools - - - 18.40 68 47
> ODR-smolagents 67.92 53.49 34.62 55.15 65 42
> AutoAgent 71.70 53.49 26.92 55.15 - -
> OWL 84.91 67.44 42.31 69.09 - -
> A-World 86.79 69.77 34.62 69.70 - -
> OpenAI-DR 74.29 69.06 47.60 67.36 - -
> Table 1: Performance comparison of Alita and baseline agent systems on the GAIA, Mathvista, and ...

## 4. Findings / 發現

> [!findings]
> - Alita with Claude-Sonnet-4 and GPT-4o achieves 75.15% pass@1 and 87.27% pass@3 accuracy, which is top-ranking on the GAIA benchmark validation dataset, outperforming many agent systems with far greater complexity.
> - Alita with Claude 3.7 Sonnet + GPT-4o achieves 72.73% pass@1 and 86.06% pass@3 on GAIA, and further attains 74.00% and 52.00% pass@1 on the Mathvista and PathVQA benchmarks, respectively, outperforming Octotools and Open Deep Research by smolagents.
> - The pass@1, pass@2, and pass@3 denote the accuracy achieved by running the Alita framework 1, 2, and 3 times, respectively, and selecting the best answer.
> - Alita achieves 75.15% pass@1 and 87.27% pass@3 accuracy on the GAIA benchmark validation dataset.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — Alita is open-source and can be self-hosted.
> **Intervention coverage:** Self-evolution, agent design
> **Outcome evidence:** GAIA 75.15% pass@1 / 87.27% pass@3
> **Strength of fit:** Strong — self-evolving agent reference.

## 7. Key Quotes / 關鍵引文

- "To support such diverse and demanding tasks, a new class of systems called generalist agents has emerged." — Introduction
- "Alita with Claude-Sonnet-4 and GPT-4o achieves 75.15% pass@1 and 87.27% pass@3 accuracy, which is top-ranking on the GAIA benchmark validation dataset, outperforming many agent systems with far greater complexity." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024a]]
- [[FourneyEtAl2024]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
