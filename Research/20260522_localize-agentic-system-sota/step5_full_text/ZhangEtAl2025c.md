---
citation_key: "ZhangEtAl2025c"
paper_id: "paper_017"
title: "SWE-bench Goes Live!"
authors: ["Linghao Zhang", "Shilin He", "Chaoyun Zhang", "Yu Kang", "Bowen Li", "Chengxing Xie", "Junhao Wang", "Maoquan Wang", "Yufan Huang", "Shengyu Fu", "Elsie Nallipogu", "Qingwei Lin", "Yingnong Dang", "Saravan Rajmohan", "Dongmei Zhang"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2505.23419"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# SWE-bench Goes Live!

> **Authors / 作者:** Linghao Zhang et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> The issue-resolving task, where a model generates patches to fix real-world bugs, has emerged as a key benchmark for evaluating the capabilities of large language models (LLMs). While SWE-bench has become the dominant benchmark in this domain, it suffers from several limitations: it has not been updated since its re- lease, is restricted to only 12 repositories, and relies heavily on manual effort for constructing test instances and setting up executable environments, significantly limiting its scalability. We present SWE-bench-Live1, a live-updatable benchmark designed to address these limitations. Our initial release includes 1,319 tasks derived from real GitHub issues created since 2024, spanning 93 repositories. Each task is accompanied by a dedicated Docker image to ensure reproducible execu- tion. Additionally, we introduce an automated curation pipeline that streamlines the entire process from instance creation to environment setup, removing manual bottlenecks and enabling scalability and continuous updates. We evaluate a range of state-of-the-art models and agent frameworks on SWE-bench-Live, offering de- tailed empirical insights into their real-world bug-fixing capabilities. By providing a fresh, diverse, and executable benchmark grounded in live repository activity, SWE-bench-Live supports reliable, large-scale assessment of code LLMs and code agents in realistic development settings. 1 Introduction Large language models (LLMs) have fundamentally reshaped the ...

> [!summary] 繁中
> SWE-bench-Live 是 SWE-bench 的 live-updatable 後繼版本，初始包含 2024 年後 GitHub issue 的 1,319 道題、跨 93 個 repo，每題附專屬 Docker image。自動化 curation pipeline 讓 benchmark 持續更新，作者在 SOTA agent 上發現「現場版」分數比 static SWE-bench 顯著低，反映 contamination 與環境飄移問題。

## 2. Problem & Motivation / 問題與動機

Large language models (LLMs) have fundamentally reshaped the landscape of software engineering [7], powering tools such as Cursor [ 4] and GitHub Copilot [ 5] that are now integral to modern development workflows. These models have transformed key stages of the software development lifecycle—automated code generation, bug detection, and issue resolution—leading to substantial gains in developer productivity. To systematically assess LLM capabilities across these tasks, a variety of curated benchmarks have been developed, including HumanEval [ 3], MBPP [ 2], SWE-bench [10], DI-Bench [31], and OpenRCA [19]. These benchmarks are instrumental in identifying both the strengths and limitations of LLMs in diverse programming and maintenance settings.

## 3. Method / 方法

> [!method]
> SWE-bench-Live is presented as a live-updatable benchmark for evaluating LLMs on issue-resolving tasks. The initial release contains 1,319 tasks from real GitHub issues created since 2024, spanning 93 repositories with dedicated Docker images. An automated curation pipeline streamlines instance creation and environment setup. Evaluation of state-of-the-art agents reveals substantial performance gap compared to static benchmarks like SWE-bench, even under controlled evaluation conditions.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - We test these agents using four recent state-of-the-art LLMs, covering both proprietary and open-source models: GPT-4o [ 11] (gpt-4o-2024-11-20), GPT-4.1 [12] (gpt-4.1-2025-04-14), Claude 3.7 Sonnet [1] (claude-3-7-sonnet-20250219), and DeepSeek V3 [6] (DeepSeek-V3-0324).
> - Following the evaluation protocol of SWE-bench [10], we adopt the Resolved Rate (%) as our primary metric.
> - For example, recent state-of-the-art agents and models report a resolved rate exceeding 60% on the SWE-bench Verified subset4.
> - In contrast, the highest resolved rate on SWE-bench-Live is only 19.25%.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — Docker images make SWE-bench-Live runnable locally.
> **Intervention coverage:** Benchmarks (live coding agent eval)
> **Outcome evidence:** 1,319 issues; static vs live gap
> **Strength of fit:** Strong — successor to SWE-bench for ongoing local eval.

## 7. Key Quotes / 關鍵引文

- "These models have transformed key stages of the software development lifecycle—automated code generation, bug detection, and issue resolution—leading to substantial gains in developer productivity." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]
- [[YangEtAl2024]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
