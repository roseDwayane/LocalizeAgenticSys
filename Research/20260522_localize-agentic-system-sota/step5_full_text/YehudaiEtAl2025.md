---
citation_key: "YehudaiEtAl2025"
paper_id: "paper_016"
title: "Survey on Evaluation of LLM-based Agents"
authors: ["Asaf Yehudai", "Lilach Eden", "Alan Li", "Guy Uziel", "Yilun Zhao", "Roy Bar-Haim", "Arman Cohan", "Michal Shmueli-Scheuer"]
year: 2025
venue: "arXiv"
doi: "10.48550/arxiv.2503.16416"
arxiv_id: "2503.16416"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "benchmarks_and_evaluation"
date_extracted: "2026-05-22"
---
# Survey on Evaluation of LLM-based Agents

> **Authors / 作者:** Asaf Yehudai et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** benchmarks_and_evaluation

## 1. Summary / 摘要

> [!summary] EN
> LLM-based agents represent a paradigm shift in AI, enabling autonomous systems to plan, reason, and use tools while interacting with dynamic environments. This paper provides the first comprehensive survey of evaluation methods for these increasingly capable agents. We analyze the field of agent evaluation across five perspectives: (1) Core LLM capabilities needed for agentic workflows, like planning, and tool use; (2) Application-specific bench- marks such as web and SWE agents; (3) Evalu- ation of generalist agents; (4) Analysis of agent benchmarks’ core dimensions; and (5) Evalu- ation frameworks and tools for agent develop- ers. Our analysis reveals current trends, includ- ing a shift toward more realistic, challenging evaluations with continuously updated bench- marks. We also identify critical gaps that future research must address—particularly in assess- ing cost-efficiency, safety, and robustness, and in developing fine-grained, scalable evaluation methods 1. 1 Introduction LLMs have recently made remarkable progress, tackling a wide range of challenging tasks. Yet, LLMs are static, having fixed knowledge, and confined to text-to-text interaction. LLM-based agents address those gaps by building on LLMs as a backbone, integrating them into multi-step workflows and equipping them with external tools (Wang et al., 2024a). Hence, LLM agents can perform computations, retrieve up-to-date informa- tion, and interact with their environment. Crucially, they can autonomously ...

> [!summary] 繁中
> 本綜述是首篇針對 LLM-based agent 評估方法的全面回顧，從 core LLM capability、agent-specific task、application benchmark、evaluation framework、開源 tooling 五個角度切入，分析現有 benchmark 的覆蓋盲點，為 local agent 的 evaluation pipeline 設計提供 checklist。

## 2. Problem & Motivation / 問題與動機

LLMs have recently made remarkable progress, tackling a wide range of challenging tasks. Yet, LLMs are static, having fixed knowledge, and confined to text-to-text interaction. LLM-based agents address those gaps by building on LLMs as a backbone, integrating them into multi-step workflows and equipping them with external tools (Wang et al., 2024a). Hence, LLM agents can perform computations, retrieve up-to-date informa- tion, and interact with their environment.

## 3. Method / 方法

> [!method]
> LLM-based agents represent a paradigm shift in AI, enabling autonomous systems to plan, reason, and use tools while interacting with dynamic environments. This paper provides the first comprehensive survey of evaluation methods for these increasingly capable agents, analyzing the field across five perspectives including core LLM capabilities and application-specific benchmarks.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - This paper provides the first comprehensive survey of evaluation methods for these increasingly capable agents, analyzing the field across five perspectives including core LLM capabilities and application-specific benchmarks.

## 5. Limitations / 局限性

> [!limitation]
> While this survey provides a comprehensive
> overview of the evaluation landscape for LLM-
> based agents, it is important to acknowledge certain
> limitations inherent to a review of such a rapidly
> evolving field.
> First, the domain of LLM-based agents and their
> evaluation is exceptionally dynamic. New bench-
> marks, evaluation frameworks, agent architectures,
> and research findings are being published at an
> unprecedented pace. Although we have striven to
> incorporate the most current and impactful work up
> to the time of writing, this survey inevitably repre-
> sents a snapshot. Some very recent or ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Indirect — methodology survey, not a system.
> **Intervention coverage:** Evaluation methodology
> **Outcome evidence:** Five-perspective evaluation taxonomy
> **Strength of fit:** Strong — checklist for the eval chapter.

## 7. Key Quotes / 關鍵引文

- "LLMs have recently made remarkable progress, tackling a wide range of challenging tasks." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024a]]
- [[Jimenez-GomezEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
