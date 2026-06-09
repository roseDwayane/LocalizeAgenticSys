---
citation_key: "LiEtAl2025"
paper_id: "paper_023"
title: "Haystack Engineering: Context Engineering for Heterogeneous and Agentic Long-Context Evaluation"
authors: ["Mufei Li", "Dongqi Fu", "Limei Wang", "Si Zhang", "Hanqing Zeng", "Kaan Sancak", "Ruizhong Qiu", "Haoyu Wang", "Xiaoxin He", "Xavier Bresson", "Yinglong Xia", "Chonglin Sun", "Pan Li"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2510.07414"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# Haystack Engineering: Context Engineering for Heterogeneous and Agentic Long-Context Evaluation

> **Authors / 作者:** Mufei Li et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> Modern long-context large language models (LLMs) perform well on synthetic “needle-in-a-haystack” (NIAH) benchmarks, but such tests overlook how noisy contexts arise from biased retrieval and agentic workflows. We argue that haystack engineeringis necessary to construct noisy long contexts that faithfully capture key real-world factors—distraction from heterogeneous biased retrievers and cascading errors in agentic workflows—to test models’ long-context robust- ness. We instantiate it throughHaystackCraft, a new NIAH benchmark built on the full English Wikipedia hyperlink network with multi-hop questions. Haystack- Craft evaluates how heterogeneous retrieval strategies (e.g., sparse, dense, hybrid, and graph-based) affect distractor composition, haystack ordering, and down- stream LLM performance. HaystackCraft further extends NIAH to dynamic, LLM-dependent settings that simulate agentic operations, where models refine queries, reflect on their past reasonings, and decide when to stop. Experiments with 15 long-context models show that (1) while stronger dense retrievers can in- troduce more challenging distractors, graph-based reranking simultaneously im- proves retrieval effectiveness and mitigates more harmful distractors; (2) in agen- tic tests, even advanced models like Gemini 2.5 Pro and GPT-5 suffer cascading failures from self-generated distractors or struggle to perform early stops. These results highlight persistent challenges in agentic long-context reasoning and ...

> [!summary] 繁中
> HaystackCraft 以 Wikipedia hyperlink network 為基礎建構 benchmark，刻意混入 biased retriever 結果與 agentic 連鎖錯誤，用以測試 agent 在「真實雜訊 context」下的 robustness。為 context engineering 提供更接近實戰的壓力測試。

## 2. Problem & Motivation / 問題與動機

Effective context engineering (Mei et al., 2025)—optimizing information for LLMs’ contexts—and robust long-context reasoning are essential for large language models (LLMs) to enable sophisti- cated agents and handle complex, information-intensive tasks. Recent algorithmic and engineering innovations have significantly expanded LLMs’ context windows and enhanced their long-context reasoning capabilities (Su et al., 2024; Peng et al., 2024; Dao et al., 2022; Dao, 2024; Liu et al., 2024a; Xiao et al., 2024; Yuan et al., 2025; Kwon et al., 2023). Consequently, modern LLMs can process extended contexts and often achieve near-perfect recall on synthetic “needle-in-a-haystack (NIAH)” benchmarks (Yen et al., 2025). These benchmarks test whether a model can retrieve and reason over relevant informationneedleburied in a largehaystackcontext that also contains many distractors.

## 3. Method / 方法

> [!method]
> HaystackCraft benchmark constructed on Wikipedia hyperlink network evaluating agent robustness against realistic noisy contexts from biased retrievers and cascading agentic errors.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - Following the practice of MuSiQue, we use the F1 score as the QA metric.
> - To ensure a fair comparison, we standardize token counts using the Qwen2.5-1M tokenizer.
> - 6 Preprint Figure 2: (1) Retrieval performance improves as # retrieved documents(N)increases.
> - 2 shows that retrieval performance for all methods improves asNincreases, justifying con- structing longer contexts with more distractors.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Indirect — benchmark of context robustness, not local-specific.
> **Intervention coverage:** Context engineering, robustness eval
> **Outcome evidence:** HaystackCraft scores under noise
> **Strength of fit:** Moderate — supports the context-engineering chapter.

## 7. Key Quotes / 關鍵引文

- "Consequently, modern LLMs can process extended contexts and often achieve near-perfect recall on synthetic “needle-in-a-haystack (NIAH)” benchmarks (Yen et al., 2025)." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]
- [[YangEtAl2024]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
