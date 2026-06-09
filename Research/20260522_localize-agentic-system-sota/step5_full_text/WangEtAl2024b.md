---
citation_key: "WangEtAl2024b"
paper_id: "paper_041"
title: "Agents in Software Engineering: Survey, Landscape, and Vision"
authors: ["Yanlin Wang", "Wanjun Zhong", "Yanxian Huang", "Ensheng Shi", "Min Yang", "Jiachi Chen", "Hui Li", "Yuchi Ma", "Qianxiang Wang", "Zibin Zheng"]
year: 2024
venue: "arXiv"
doi: null
arxiv_id: "2409.09030"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Agents in Software Engineering: Survey, Landscape, and Vision

> **Authors / 作者:** Yanlin Wang et al. (2024)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> In recent years, Large Language Models (LLMs) have achieved remarkable success and have been widely used in various downstream tasks, especially in the tasks of the software en- gineering (SE) field. We find that many studies combining LLMs with SE have employed the concept of agents either explicitly or implicitly. However, there is a lack of an in-depth survey to sort out the development context of existing works, analyze how existing works combine the LLM-based agent technologies to optimize various tasks, and clarify the framework of LLM-based agents in SE. In this paper, we conduct the first survey of the studies on com- bining LLM-based agents with SE and present a framework of LLM-based agents in SE which includes three key modules: perception, memory, and action. We also summarize the current challenges in combining the two fields and propose future opportunities in response to existing challenges. We maintain a GitHub repository of the related papers at: https: //github.com/DeepSoftwareAnalytics/ Awesome-Agent4SE. 1 Introduction In recent years, Large Language Models (LLMs) have achieved remarkable success and have been widely used in many downstream tasks, especially in various tasks in the field of software engineer- ing (SE) (Zheng et al.), such as code summariza- tion (Ahmed et al., 2024; Sun et al., 2023b; Hal- dar and Hockenmaier, 2024; Mao et al., 2024; Guo et al., 2023; Wang et al., 2021), code gen- eration (Jiang et al., 2023a; Hu et al., 2024b; Yang et ...

> [!summary] 繁中
> 本綜述系統整理 LLM-based agent 在軟體工程中的應用，提出 perception / memory / action 三模組框架，並對 agent in SE 的 landscape、挑戰與機會做地圖式整理，是 SE-focused agentic system 設計的入門參考。

## 2. Problem & Motivation / 問題與動機

In recent years, Large Language Models (LLMs) have achieved remarkable success and have been widely used in many downstream tasks, especially in various tasks in the field of software engineer- ing (SE) (Zheng et al.), such as code summariza- tion (Ahmed et al., 2024; Sun et al., 2023b; Hal- dar and Hockenmaier, 2024; Mao et al., 2024; Guo et al., 2023; Wang et al., 2021), code gen- eration (Jiang et al., 2023a; Hu et al., 2024b; Yang et al., 2023a; Tian and Chen, 2023; Li et al., 2023e; Wang et al., 2024b), code translation (Pan et al., 2024; Pan et al.), vulnerability detection and re- pair (Zhou et al., 2024; Islam and Najafirad, 2024; de Fitero-Dominguez et al., 2024; Le et al., 2024; ∗*Corresponding author: Yanxian Huang, huangyx353@ mail2.sysu.edu.cn Liu et al., 2024b; Chen et al., 2023a), etc. Many studies combining LLMs with SE have employed the concept of agents from the ...

## 3. Method / 方法

> [!method]
> First comprehensive survey of LLM-based agent integration in software engineering, presenting framework with perception, memory, and action modules alongside current challenges and opportunities.
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
> **Population fit:** Indirect — landscape survey across SE agents.
> **Intervention coverage:** Agents in software engineering (perception/memory/action)
> **Outcome evidence:** Survey taxonomy
> **Strength of fit:** Moderate — useful framing, not local-specific.

## 7. Key Quotes / 關鍵引文

- "Many studies combining LLMs with SE have employed the concept of agents from the artificial intelligence field, either explicitly or implicitly." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024a]]
- [[Jimenez-GomezEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
