---
citation_key: "YuEtAl2025b"
paper_id: "paper_055"
title: "OrcaLoca: An LLM Agent Framework for Software Issue Localization"
authors: ["Zhongming Yu", "Hejia Zhang", "Yujie Zhao", "Hanxian Huang", "Matrix Yao", "Ke Ding", "Jishen Zhao"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2502.00350"
source: "local_pdf"
tier: 2
composite_score: 4.0
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# OrcaLoca: An LLM Agent Framework for Software Issue Localization

> **Authors / 作者:** Zhongming Yu et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Recent developments in Large Language Model (LLM) agents are revolutionizing Autonomous Software Engineering (ASE), enabling automated coding, problem fixes, and feature improvements. However, localization – precisely identifying software problems by navigating to relevant code sections – remains a significant challenge. Current approaches often yield suboptimal results due to a lack of effective integration between LLM agents and precise code search mechanisms. This paper introduces ORCALOCA, an LLM agent frame- work that improves accuracy for software issue localization by integrating priority-based schedul- ing for LLM-guided action, action decomposition with relevance scoring, and distance-aware context pruning. Experimental results demonstrate that ORCALOCAbecomes the new open-source state- of-the-art (SOTA) in function match rate (65.33%) on SWE-bench Lite. It also improves the final resolved rate of an open-source framework by 6.33 percentage points through its patch generation integration. ORCALOCAis available at https: //github.com/fishmingyu/OrcaLoca. 1. Introduction Large Language Models (LLMs) have advanced rapidly, driving intelligent agents across diverse domains. In Autonomous Software Engineering (ASE) (Devin, 2024), LLM-driven agents enable automatic code generation, pro- gram repair, and feature enhancement. Incorporating LLMs into software development processes has been demonstrated promising by tools such as GitHub Copilot (Microsoft, 2023) and LLM-based ...

> [!summary] 繁中
> OrcaLoca 是專做軟體 issue localization 的 LLM agent 框架，整合 priority-based scheduling 與 distance-aware context pruning，在 SWE-bench Lite 達到 SOTA 65.33% function match rate，整合後另提升 6.33 個百分點，為 local debugging agent 提供精準的問題定位機制。

## 2. Problem & Motivation / 問題與動機

Large Language Models (LLMs) have advanced rapidly, driving intelligent agents across diverse domains. In Autonomous Software Engineering (ASE) (Devin, 2024), LLM-driven agents enable automatic code generation, pro- gram repair, and feature enhancement. Incorporating LLMs into software development processes has been demonstrated promising by tools such as GitHub Copilot (Microsoft, 2023) and LLM-based agents like AutoCodeRover (Zhang et al., 2024b) and SWE-agent (Yang et al., 2024b). To navigate repositories, create patches, and fix problems, these agents *Equal contribution 1University of California, San Diego, USA 2Intel Corporation.

## 3. Method / 方法

> [!method]
> 3.1. Search System Setup and Agent Workflow
> Our search system is inspired by prior works such as (Ma
> et al., 2024a; Ouyang et al., 2024), which employ graph
> databases for indexing code repositories. Similarly, we
> construct aCodeGraph, a graph-based representation
> of the codebase G= (V,E) , to facilitate indexing and
> searching code entities. As illustrated in Figure 2. (b), the
> CodeGraph G contains two primary edge typese1,e2 ∈ E. e1
> is containment, which represents hierarchical relationships,
> such as methods within classes or classes within files.e2 is
> the reference that represents relationships such as function
> calls between entities. The entities include functions,
> classes, methods, and files. Each code entity v∈ V in
> the CodeGraph is assigned with a unique identifier (UID)
> using the format file path(::cls)(::method).
> For example, in standalone functions, the UID is simply
> file path::method. These identifiers encode the
> containment hierarchy directly, with :: representing the
> ”containment” relationship. To enhance compatibility
> with theCodeGraph, we redeveloped the API from
> AutoCodeRover (Zhang et al., 2024a) to provide better
> support for CodeGraph-based searches (See Appendix A).
> Building upon the ideas of Chain of Thought (CoT) (Wei
> et al., 2022) and ReACT (Yao et al., 2022), ORCALOCA
> follows a reason-and-act workflow with a constrained action
> space. We design a ...

## 4. Findings / 發現

> [!findings]
> - PERFORMANCE ONLEADERBOARD As shown in Table 1, our ORCALOCAsets a new open-source State-Of-The-Art (SOTA) with a Function Match Rate of 65.33% (196 out of 300) and a File Match Rate of 83.33% (250 out of 300).
> - Moreover, ORCALOCAdemonstrates strong performance on the Resolved Rate metric, successfully resolving 41.00% (123 out of 300) issues in the SWE-bench Lite dataset.
> - By integrating the editing capabilities of Agentless-1.5, we achieved 6.67 percentage points improvement in function match rate and 6.33 percentage points increase in the final resolved rate over its performance.
> - IMPACT OFLOCALIZATION ONRESOLVEDRATE To evaluate how ORCALOCA’s improved localization enhances the final patch resolved rate, we fully reproduced Agentless-1.5 (Xia et al., 2024) on SWE-bench Lite as a baseline.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — issue localisation runs against a local repo clone.
> **Intervention coverage:** Issue localisation agent (scheduling + pruning)
> **Outcome evidence:** 65.33% function match on SWE-bench Lite
> **Strength of fit:** Strong — local-friendly debugging agent.

## 7. Key Quotes / 關鍵引文

- "Large Language Models (LLMs) have advanced rapidly, driving intelligent agents across diverse domains." — Introduction
- "Search System Setup and Agent Workflow Our search system is inspired by prior works such as (Ma et al., 2024a; Ouyang et al., 2024), which employ graph databases for indexing code repositories." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
