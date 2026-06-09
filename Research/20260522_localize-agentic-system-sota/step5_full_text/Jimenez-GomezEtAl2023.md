---
citation_key: "Jimenez-GomezEtAl2023"
paper_id: "paper_002"
title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
authors: ["Carlos Jimenez-Gomez", "John Yang", "Alexander Wettig", "Shunyu Yao", "Kexin Pei", "Ofir Press", "Karthik Narasimhan"]
year: 2023
venue: "arXiv"
doi: "10.48550/arxiv.2310.06770"
arxiv_id: "2310.06770"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# SWE-bench: Can Language Models Resolve Real-World GitHub Issues?

> **Authors / 作者:** Carlos Jimenez-Gomez et al. (2023)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> Language models have outpaced our ability to evaluate them effectively, but for their future development it is essential to study the frontier of their capabilities. We find real-world software engineering to be a rich, sustainable, and challenging testbed for evaluating the next generation of language models. To this end, we in- troduce SWE-bench, an evaluation framework consisting of 2,294 software engi- neering problems drawn from real GitHub issues and corresponding pull requests across 12 popular Python repositories. Given a codebase along with a description of an issue to be resolved, a language model is tasked with editing the codebase to address the issue. Resolving issues in SWE-bench frequently requires under- standing and coordinating changes across multiple functions, classes, and even files simultaneously, calling for models to interact with execution environments, process extremely long contexts and perform complex reasoning that goes far be- yond traditional code generation tasks. Our evaluations show that both state-of- the-art proprietary models and our fine-tuned model SWE-Llama can resolve only the simplest issues. The best-performing model, Claude 2, is able to solve a mere 1.96% of the issues. Advances on SWE-bench represent steps towards LMs that are more practical, intelligent, and autonomous. 1 I NTRODUCTION Language models (LMs) are rapidly being deployed in commercial products such as chatbots and coding assistants. At the same time, existing ...

> [!summary] 繁中
> SWE-bench 是首個以真實 GitHub issue 與 PR 為材料、要求模型直接修改 codebase 來解決問題的軟體工程 benchmark，共 2,294 題涵蓋 12 個 Python repo。任務通常需跨多個檔案、函式做協調修改，遠超既有 LM eval 的難度。實驗顯示當時 SOTA 模型解決率極低，凸顯 LM 在真實長脈絡程式工程任務的瓶頸。SWE-bench 後續成為 OpenHands、SWE-agent、Claude Code 等系統共同的標竿。

## 2. Problem & Motivation / 問題與動機

Language models (LMs) are rapidly being deployed in commercial products such as chatbots and coding assistants. At the same time, existing benchmarks have become saturated (Kiela et al., 2021; Ott et al., 2022) and fail to capture the frontier of what state-of-the-art LMs can and cannot do. There is a need for challenging benchmarks that more accurately reflect real-world applications of LMs to help shape their future development and usage (Srivastava et al., 2023). euclidean_diff ma trix_transf orm ds tack_s truc t_col v s tack_s truc t_col join_s truc t_col Pr e PR P os t PR T es ts Unit T es ts data leak in GBD T due t o w arm s tart (This is about the non- his t o gram-bas ed v ersion of ... Issue Codebase sklearn/ e x amples/ se tup.cf g se tup.p yREADME.rs t r eqs.txt Language Model Genera t ed PR sklearn gradient_boosting.py utils helper.py +20 -12 Figure 1: SWE-bench sources ...

## 3. Method / 方法

> [!method]
> Language models have advanced faster than our capacity to assess them properly. Yet evaluating frontier capabilities requires studying real-world software engineering as a rich, sustainable testbed. This work introduces SWE-bench: 2,294 problems from GitHub issues and pull requests across 12 Python repositories. Given a codebase and issue description, models must edit code to resolve it. Solving these issues frequently requires understanding and coordinating changes across multiple functions, classes, and files, calling for complex reasoning.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - The best performing model, Claude 2, is only able to resolve 1.96% of the issues.
> - There, Claude 2 is able to resolve 4.8% of issues using the “oracle” retriever.
> - Yet of these instances, Claude 2 only solves 42% of the instances solved by SWE-Llama.
> - Some repositories naturally feature more instances with images; for example 32% of matplotlib and 10% of seaborn instances contain embedded images in their issue text compared to just 2% of all instances.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Indirect — defines evaluation rather than the agent itself; every local coding agent is benchmarked against this.
> **Intervention coverage:** Benchmarks (evaluation methodology)
> **Outcome evidence:** Resolved rate over 2,294 real GitHub issues
> **Strength of fit:** Strong — universal benchmark that every coding-agent paper in the shortlist references.

## 7. Key Quotes / 關鍵引文

- "Language models (LMs) are rapidly being deployed in commercial products such as chatbots and coding assistants." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
