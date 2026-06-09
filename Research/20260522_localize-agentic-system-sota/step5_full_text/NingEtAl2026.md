---
citation_key: "NingEtAl2026"
paper_id: "paper_031"
title: "Code as Agent Harness"
authors: ["Xuying Ning", "Katherine Tieu", "Dongqi Fu", "Tianxin Wei", "Zihao Li", "Yuanchen Bei", "Jiaru Zou", "Mengting Ai", "Zhining Liu", "Ting-Wei Li", "Lingjie Chen", "Yanjun Zhao", "Ke Yang", "Bingxuan Li", "Cheng Qian", "Gaotang Li", "Xiao Lin", "Zhichen Zeng", "Ruizhong Qiu", "Sirui Chen", "Yifan Sun", "Xiyuan Yang", "Ruida Wang", "Rui Pan", "Chenyuan Yang", "Dylan Zhang", "Liri Fang", "Zikun Cui", "Yang Cao", "Pan Chen", "Dorothy Sun", "Ren Chen", "Mahesh Srinivasan", "Nipun Mathur", "Yinglong Xia", "Hong Li", "Hong Yan", "Pan Lu", "Lingming Zhang", "Tong Zhang", "Hanghang Tong", "Jingrui He"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2605.18747"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Code as Agent Harness

> **Authors / 作者:** Xuying Ning et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Code increasingly serves as an operational substrate for agent reasoning, acting, environment modeling, and execution-based verification. Survey examining code as infrastructure for AI agents across three layers: harness interface, mechanisms (planning, memory, tool use), and multi-agent scaling.

> [!summary] 繁中
> Code as Agent Harness 主張「程式碼本身就是 agent 的底層基礎」：planning、memory、tool use 都可以以程式碼形式表達並由 interpreter 驗證。論文分三層分析（harness interface / mechanisms / multi-agent scaling）並比較不同程式語言、執行環境的取捨，是 code-based harness 的綜述。

## 2. Problem & Motivation / 問題與動機

Recent large language models (LLMs) have demonstrated strong capabilities in understanding and generating code[1,2,3], achievingstrongperformanceintasksrangingfromcompetitiveprogramming[ 4]torepository- level software engineering [5]. Building on these capabilities, the role of code in agentic systems is expanding beyond a target artifact to be generated. Programs are increasingly used as the medium through which 1 arXiv:2605.18747v1 [cs.CL] 18 May 2026 Code as Agent Harness Harness Interface (▷§Sec. 2) Harness Mechanisms (▷§Sec. 3)Scaling the Harness (▷§Sec. 4) Emerging Fields and Open Problems (▷§Section 5) Code for Code forCode for Plan Execution FeedbackTrack state and dynamics Translate intent into executable actions Externalize internal reasoning to verifiable steps ØPre-run decompositionØRuntime adjustmentØLinear/StructuralØSingle/Multi-agent ØTrack states chain & experience ...

## 3. Method / 方法

> [!method]
> Code increasingly serves as an operational substrate for agent reasoning, acting, environment modeling, and execution-based verification. Survey examining code as infrastructure for AI agents across three layers: harness interface, mechanisms (planning, memory, tool use), and multi-agent scaling.
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
> **Population fit:** Direct — code-as-harness is realised by local Python/JS interpreters.
> **Intervention coverage:** Harness engineering (code-based), tool use
> **Outcome evidence:** Layered survey of code harnesses
> **Strength of fit:** Strong — direct survey of one of the two major harness paradigms in the SOTA review.

## 7. Key Quotes / 關鍵引文

- "Building on these capabilities, the role of code in agentic systems is expanding beyond a target artifact to be generated." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024a]]
- [[WangEtAl2024c]]
- [[LiuEtAl2026]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
