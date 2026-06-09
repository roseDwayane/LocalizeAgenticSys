---
citation_key: "ZhangEtAl2025a"
paper_id: "paper_021"
title: "Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models"
authors: ["Qizheng Zhang", "Changran Hu", "Shubhangi Upasani", "Boyuan Ma", "Fenglu Hong", "Vamsidhar Kamanuru", "Jay Rainton", "Chen Wu", "Mengmeng Ji", "Hanchen Li", "Urmish Thakker", "James Zou", "Kunle Olukotun"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2510.04618"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models

> **Authors / 作者:** Qizheng Zhang et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> Large language model (LLM) applications such as agents and domain-specific reasoning increasingly rely oncontext adaptation: modifying inputs with instruc- tions, strategies, or evidence, rather than weight updates. Prior approaches im- prove usability but often suffer from brevity bias, which drops domain insights for concise summaries, and from context collapse, where iterative rewriting erodes details over time. We introduce ACE (AgenticContextEngineering), a frame- work that treats contexts as evolving playbooks that accumulate, refine, and orga- nize strategies through a modular process of generation, reflection, and curation. ACE prevents collapse with structured, incremental updates that preserve detailed knowledge and scale with long-context models. Across agent and domain-specific benchmarks, ACE optimizes contexts both offline (e.g.,system prompts) and on- line (e.g.,agent memory), consistently outperforming strong baselines: +10.6% on agents and +8.6% on finance, while significantly reducing adaptation latency and rollout cost. Notably, ACE could adapt effectively without labeled supervision and instead by leveraging natural execution feedback. On the AppWorld leader- board, ACE matches the top-ranked production-level agent on the overall average and surpasses it on the harder test-challenge split, despite using a smaller open- source model. These results show that comprehensive, evolving contexts enable scalable, efficient, and self-improving LLM systems with low ...

> [!summary] 繁中
> Agentic Context Engineering (ACE) 把 context 視為可演化的 playbook：透過 incremental updates 逐步擴充，避免「context collapse」並支援自我改進。實驗顯示在 agent benchmarks 提升 +10.6%、在金融任務 +8.6%，同時縮短 adaptation 延遲。提供一套可在本機 LLM 上跑的 context 演化機制。

## 2. Problem & Motivation / 問題與動機

Base LLM ICL GEPA DC ACE 40 45 50 55 60Accuracy (%) 42.4% 46.0%46.4% 51.9% 59.5% Agent: AppWorld Base LLM ICL GEPA DC ACE 70.0 72.5 75.0 77.5 80.0 82.5 70.7% 72.3% 73.5%74.2% 78.3% Domain Knowledge: FiNER Base LLM ICL GEPA DC ACE 65 70 75 80 67.5%67.0% 71.5% 69.5% 76.5% Numerical Reasoning: Formula Figure 1:Overall Performance Results.Our proposed framework, ACE, consistently outperforms strong baselines across agent and domain-specific tasks. Modern AI applications based on large language models (LLMs), such as LLM agents (Yao et al., 2023; Yang et al., 2024) and compound AI systems (Zaharia et al., 2024), increasingly depend on context adaptation. Instead of modifying model weights, context adaptation improves performance after model training by incorporating clarified instructions, structured reasoning steps, or domain- 1 arXiv:2510.04618v3 [cs.LG] 29 Mar 2026 Published as a ...

## 3. Method / 方法

> [!method]
> Framework treating contexts as evolving playbooks preventing collapse through incremental updates, achieving +10.6% on agents and +8.6% on finance benchmarks while reducing adaptation latency.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - It boosts accuracy on the AppWorld benchmark by up to 17.1% by learning to engineer better contexts from execution feedback alone, without needing ground-truth labels.
> - (§4.3) •Large Gains on Domain-Specific Benchmarks.On complex financial reasoning benchmarks, ACE delivers an average performance gain of 8.6% over strong baselines by constructing com- prehensive playbooks with domain-specific concepts and insights.
> - (§4.4) 5 Published as a conference paper at ICLR 2026 •Effective by Design.Ablation studies confirm our design choices are key to success, with compo- nents like the Reflector, multi-epoch refinement, and incremental delta update each contributing substantial performance gains.
> - (§4.6) •Lower Cost and Adaptation Latency.ACE achieves these gains efficiently, reducing adaptation latency by 86.9% on average, while requiring fewer rollouts and lower token dollar costs.

## 5. Limitations / 局限性

> [!limitation]
> OFEXISTINGCONTEXTADAPTATIONMETHODS
> Brevity BiasA recurring limitation of context adaptation methods isbrevity bias: the tendency of
> optimization to collapse toward short, generic prompts. Gao et al. (Gao et al., 2025) document this
> effect in prompt optimization for test generation, where iterative methods repeatedly produced near-
> identical instructions (e.g.,, “Create unit tests to ensure methods behave as expected”), sacrificing
> diversity and omitting domain-specific detail. This convergence not only narrows the search space
> but also propagates recurring errors across iterations, since ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — ACE evolves contexts without retraining, friendly to local LLM constraints.
> **Intervention coverage:** Context engineering, self-improvement
> **Outcome evidence:** +10.6% on agent benchmarks; +8.6% on finance
> **Strength of fit:** Strong — concrete recipe for evolving context on local agents.

## 7. Key Quotes / 關鍵引文

- "Modern AI applications based on large language models (LLMs), such as LLM agents (Yao et al., 2023; Yang et al., 2024) and compound AI systems (Zaharia et al., 2024), increasingly depend on context adaptation." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
