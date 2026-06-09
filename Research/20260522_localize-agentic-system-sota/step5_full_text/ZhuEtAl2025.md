---
citation_key: "ZhuEtAl2025"
paper_id: "paper_061"
title: "OAgents: An Empirical Study of Building Effective Agents"
authors: ["He Zhu", "Tianrui Qin", "King Zhu", "Heyuan Huang", "Yeyi Guan", "Jinxiang Xia", "Yi Yao", "Hanhao Li", "Ningning Wang", "Pai Liu", "Tianhao Peng", "Xin Gui", "Xiaowan Li", "Yuhui Liu", "Yuchen Eleanor Jiang", "Jun Wang", "Changwang Zhang", "Xiangru Tang", "Ge Zhang", "Jian Yang", "Minghao Liu", "Xitong Gao", "Jiaheng Liu", "Wangchunshu Zhou"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2506.15741"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# OAgents: An Empirical Study of Building Effective Agents

> **Authors / 作者:** He Zhu et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> Recently, Agentic AI has become an increasingly popular research field. However, we argue that current agent research practices lack standardization and scientific rigor, making it hard to conduct fair comparisons among methods. As a result, it is still unclear how different design choices in agent frameworks affect effectiveness, and measuring their progress remains challenging. In this work, we conduct a systematic empirical study onGAIA benchmark andBrowseComp to examine the impact of popular design choices in key agent components in a fair and rigorous manner. We find that the lack of a standard evaluation protocol makes previous works, even open-sourced ones, non-reproducible, with significant variance between random runs. Therefore, we introduce a more robust evaluation protocol to stabilize comparisons. Our study reveals which components and designs are crucial for effective agents, while others are redundant, despite seeming logical. Based on our findings, we build and open-sourceOAgents, a new foundation agent framework that achieves state-of-the-art performance among open-source projects.OAgents offers a modular design for various agent components, promoting future research in Agentic AI. Date: June 24, 2025 Correspondence: Wangchunshu Zhou atzhouwangchunshu@oppo.com, Jiaheng Liu atliujiaheng@nju.edu.cn Code: https://github.com/OPPO-PersonalAI/OAgents 1 Introduction In recent years, language agents [11, 19, 22, 29, 31, 38–40] have received significant attention due ...

> [!summary] 繁中
> OAgents 對 agent component 設計做系統性實證，發現「缺乏標準 eval protocol 使既有研究難以重現」是當前主要問題。論文在 GAIA、BrowseComp 上比較不同 planner、memory、tool-routing 設計，並提出更穩健的 eval 流程，為 local agent 開發者提供可比較的設計取捨地圖。

## 2. Problem & Motivation / 問題與動機

In recent years, language agents [11, 19, 22, 29, 31, 38–40] have received significant attention due to their potential in resolving general, complex tasks that traditionally required human intervention. However, despite the surge in the number of research works and open-sourced agent frameworks, current practices in Agentic AI research are far from being rigorous and scientific. Specifically, the current landscape of agent research suffers from a lack of standardized designs and implementation details. Critical components such as planning [12, 21, 35], memory [20, 32, 36, 38], and tool use [17, 27] vary widely across different papers and frameworks, making it difficult to attribute performance improvements to specific innovations.

## 3. Method / 方法

> [!method]
> Systematic empirical study examining agent component design choices on GAIA and BrowseComp benchmarks. We find that the lack of a standard evaluation protocol makes previous works non-reproducible, with significant variance between random runs.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - We follow the evaluation protocol of theGAIAbenchmark [14], which is based on exact match accuracy.
> - In our experiments, unless otherwise stated, we report the averagePass@1 score, reflecting the model’s performance in generating a correct answer across all questions within a single evaluation run.
> - 4.2 Main Results The results in Table 1 reveal several key insights into the performance landscape across various agent frameworks on theGAIA benchmark.
> - Notably, our method (OAgents-Pass@3) achieves the highest overall average score of 73.93%, outperforming all other frameworks, including both closed-source and open-source systems.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — many configurations evaluated are reproducible on a single machine.
> **Intervention coverage:** Harness engineering, evaluation protocol, component design
> **Outcome evidence:** GAIA + BrowseComp variance and ablations
> **Strength of fit:** Strong — gives the SOTA review its 'reproducibility crisis' framing.

## 7. Key Quotes / 關鍵引文

- "In recent years, language agents [11, 19, 22, 29, 31, 38–40] have received significant attention due to their potential in resolving general, complex tasks that traditionally required human intervention." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
