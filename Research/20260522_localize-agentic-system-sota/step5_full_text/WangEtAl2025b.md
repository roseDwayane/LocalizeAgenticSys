---
citation_key: "WangEtAl2025b"
paper_id: "paper_030"
title: "Huxley-Gödel Machine: Human-Level Coding Agent Development by an Approximation of the Optimal Self-Improving Machine"
authors: ["Wenyi Wang", "Piotr Piękos", "Li Nanbo", "Firas Laakom", "Yimeng Chen", "Mateusz Ostaszewski", "Mingchen Zhuge", "Jürgen Schmidhuber"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2510.21614"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# Huxley-Gödel Machine: Human-Level Coding Agent Development by an Approximation of the Optimal Self-Improving Machine

> **Authors / 作者:** Wenyi Wang et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> Recent studies operationalize self-improvement through coding agents that edit their own codebases. They grow a tree of self-modifications through expansion strategies that favor higher software engineering benchmark performance, assum- ing that this implies more promising subsequent self-modifications. However, we identify a mismatch between the agent’s self-improvement potential (metapro- ductivity) and its coding benchmark performance, namely theMetaproductivity- Performance Mismatch. Inspired by Huxley’s concept of clade, we propose a metric (CMP) that aggregates the benchmark performances of thedescendantsof an agent as an indicator of its potential for self-improvement. We show that, in our self-improving coding agent development setting, access to the trueCMPis suf- ficient to simulate how the Gödel Machine would behave under certain assump- tions. We introduce the Huxley-Gödel Machine (HGM), which, by estimating CMPand using it as guidance, searches the tree of self-modifications. On SWE- bench Verified and Polyglot, HGM outperforms prior self-improving coding agent development methods while using fewer allocated CPU hours. Last but not least, HGM demonstrates strong transfer to other coding datasets and LLMs. The agent optimized by HGM on SWE-bench Verified with GPT-5-mini and evaluated on SWE-bench Lite with GPT-5achieves human-level performance, matching the best officially checked results of human-engineered coding agents. Our code is publicly available ...

> [!summary] 繁中
> Huxley-Gödel Machine 以「clade metric (CMP)」彙總某 agent 後代族系的 benchmark 表現，逼近最佳 self-improving machine。搭配 GPT-5-mini 在 SWE-bench Verified 達到與最佳官方紀錄齊平的人類水準表現。

## 2. Problem & Motivation / 問題與動機

Processes of self-modification drive the growth of complex systems, from biological evolution (Hen- drikse et al., 2007; Dawkins, 2019) to cultural and scientific innovation (Good, 1966; Hall, 2007). These general ideas have been instantiated in concrete algorithms for self-improving agents (Schmidhuber, 1987; 2003; Nivel et al., 2013; Everitt et al., 2016), demonstrating how ab- stract principles of self-modification can be translated into operational mechanisms. Unlike static systems constrained by fixed architectures, such agents can incrementally modify their own self- modification mechanisms and learning strategies, reusing newly gained abilities to fuel subsequent improvements. This capacity fosters continual adaptation, reduces reliance on human intervention, and enables problem-solving capabilities that cannot be fully anticipated at design time.

## 3. Method / 方法

> [!method]
> Proposes Huxley-Gödel Machine using clade metric (CMP) aggregating benchmark performances of descendants of an agent. On SWE-bench Verified with GPT-5-mini achieves human-level performance, matching the best officially checked results.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - On SWE-bench Verified with GPT-5-mini achieves human-level performance, matching the best officially checked results.
> - Proposes Huxley-Gödel Machine using clade metric (CMP) aggregating benchmark performances of descendants of an agent.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — Huxley-Gödel runs evolutionary search over local agent configs.
> **Intervention coverage:** Self-improving agent search (CMP metric)
> **Outcome evidence:** SWE-bench Verified parity with best official
> **Strength of fit:** Strong — automated agent improvement reference.

## 7. Key Quotes / 關鍵引文

- "Processes of self-modification drive the growth of complex systems, from biological evolution (Hen- drikse et al., 2007; Dawkins, 2019) to cultural and scientific innovation (Good, 1966; Hall, 2007)." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
