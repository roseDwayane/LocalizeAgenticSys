---
citation_key: "LindenbauerEtAl2025"
paper_id: "paper_020"
title: "The Complexity Trap: Simple Observation Masking Is as Efficient as LLM Summarization for Agent Context Management"
authors: ["Tobias Lindenbauer", "Igor Slinko", "Ludwig Felder", "Egor Bogomolov", "Yaroslav Zharov"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2508.21433"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# The Complexity Trap: Simple Observation Masking Is as Efficient as LLM Summarization for Agent Context Management

> **Authors / 作者:** Tobias Lindenbauer et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> Large Language Model (LLM)-based agents solve complex tasks through iterative reasoning, exploration, and tool-use, a process that can result in long, expensive context histories. While state-of-the-art Software Engineering ( SE) agents like OpenHands or Cursor use LLM-based summarization to tackle this issue, it is unclear whether the increased complexity offers tangible performance benefits compared to simply omitting older observations. We present a systematic com- parison of these approaches with SWE-agent on SWE-bench Verified across five diverse model configurations. Moreover, we show initial evidence of our findings generalizing to the OpenHands agent scaffold. We find that a simple environment Observation Masking strategy halves cost relative to the Raw Agent while matching, and sometimes slightly exceeding, the solve rate of LLM-Summary. Additionally, we introduce a novel hybrid approach that further reduces costs by 7% and 11% compared to just Observation Masking or LLM-Summary, respectively. Our find- ings raise concerns regarding the trend towards pure LLM-Summary and provide initial evidence of untapped cost reductions by pushing the efficiency-effectiveness frontier. We release code and data for reproducibility.12 1 Introduction The ambition to create autonomous agents that can independently handle complex SE tasks is rapidly becoming a reality. These agents, powered by LLMs, typically operate in an iterative loop [39, 29], at each turn they reason about the ...

> [!summary] 繁中
> 本論文反直覺地證明「簡單把過去 observation 遮罩掉（observation masking）」幾乎可達到用 LLM 做 context summarization 的效能，但成本卻只有一半。在 SWE-bench 上 hybrid 策略再進一步降低 7–11% 成本，作者把此現象稱為 complexity trap：花大算力做 summarization 不一定比簡單 heuristic 划算，對 local 部署尤其關鍵。

## 2. Problem & Motivation / 問題與動機

The ambition to create autonomous agents that can independently handle complex SE tasks is rapidly becoming a reality. These agents, powered by LLMs, typically operate in an iterative loop [39, 29], at each turn they reason about the current state, devise a plan, and execute a tool (e.g., read a file, run tests). The output, or observation, from this tool is then added to the agent’s context for the next turn, extending its problem-solving trajectory (Figure 3). This agentic loop acts as a powerful test-time scaling mechanism [25, 17, 32], utilizing the reasoning capabilities [31] of LLMs at each turn while grounding them through environment responses.

## 3. Method / 方法

> [!method]
> Demonstrates that simple observation masking matches LLM summarization performance while reducing costs by 50%, with a hybrid approach achieving further 7-11% cost reductions on SWE-bench tasks.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - In all experimental configurations where trajectories are long enough to benefit from efficient context management, both Observation Masking and LLM-Summary significantly reduce the cost per instance, in most cases by more than 50%.
> - As we can see in Table 1, in four out of five experi- mental setups Observation Masking yielded the lowest cost per instance.
> - This results in quicker and more robust cost reductions, even on short trajectories (e.g., Qwen3-32B (thinking), see Section B).
> - 6 Table 1:Comparison of context management strategies with 95% bootstrap confidence inter- vals.We report change and significance (†) compared to theRaw Agent.

## 5. Limitations / 局限性

> [!limitation]
> While our study provides a rigorous evaluation of context management strategies, its scope has three
> main limitations. First, we experiment exclusively within the SE domain, using the SWE-bench [11]
> benchmark. This domain is characterized by long, verbose tool outputs, a condition that naturally
> favors the efficiency of Observation Masking. Consequently, our findings on the superiority of this
> strategy may not generalize to domains where agent-environment interactions are more succinct.
> Second, all strategies investigated use simple, non-adaptive heuristic triggers. Observation ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — observation masking is cheap enough to run on a local model.
> **Intervention coverage:** Context engineering, cost optimization
> **Outcome evidence:** SWE-bench cost & resolution; +7–11% cost reductions
> **Strength of fit:** Strong — empirical anchor for 'simple beats fancy' in local context management.

## 7. Key Quotes / 關鍵引文

- "The ambition to create autonomous agents that can independently handle complex SE tasks is rapidly becoming a reality." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
