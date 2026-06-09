---
citation_key: "LuoEtAl2025a"
paper_id: "paper_044"
title: "Autellix: An Efficient Serving Engine for LLM Agents as General Programs"
authors: ["Michael Luo", "Xiaoxiang Shi", "Colin Cai", "Tianjun Zhang", "Justin Wong", "Yichuan Wang", "Chi Wang", "Yanping Huang", "Zhifeng Chen", "Joseph E. Gonzalez", "Ion Stoica"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2502.13965"
source: "arxiv_pdf"
tier: 3
composite_score: 3.5
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# Autellix: An Efficient Serving Engine for LLM Agents as General Programs

> **Authors / 作者:** Michael Luo et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** arXiv PDF / arXiv PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> Large language model (LLM) applications are evolving be- yond simple chatbots into dynamic, general-purpose agentic programs, which scale LLM calls and output tokens to help AI agents reason, explore, and solve complex tasks. However, existing LLM serving systems ignore dependencies between programs and calls, missing significant opportunities for optimization. Our analysis reveals that programs submitted to LLM serving engines experience long cumulative wait times, primarily due to head-of-line blocking at both the individual LLM request and the program. To address this, we introduce Autellix, an LLM serving system that treats programs as first-class citizens to minimize their end-to-end latencies. Autellix intercepts LLM calls submitted by programs, enriching schedulers with program- level context. We propose two scheduling algorithms—for single-threaded and distributed programs—that preempt and prioritize LLM calls based on their programs’ previously completed calls. Our evaluation demonstrates that across diverse LLMs and agentic workloads, Autellix improves throughput of programs by 4-15 × at the same latency compared to state-of-the-art systems, such as vLLM. 1 Introduction Large language models (LLMs) as autonomous agents en- hance their problem solving capabilities by scaling their infer- ence computation—that is, increasing the number of output to- kens or LLM calls [9,12,22,30,31,65]. With more calls and to- kens, LLMs endow agents with improved reasoning ...

> [!summary] 繁中
> Autellix 是把「程式」當一級公民的 LLM serving engine，提出 program-aware scheduling，相較 SOTA 提升 4–15× 的 program throughput，為 local 多 agent 程序型工作負載提供關鍵基礎設施。

## 2. Problem & Motivation / 問題與動機

Large language models (LLMs) as autonomous agents en- hance their problem solving capabilities by scaling their infer- ence computation—that is, increasing the number of output to- kens or LLM calls [9,12,22,30,31,65]. With more calls and to- kens, LLMs endow agents with improved reasoning [19,76,84, 85], planning and search capabilities [56, 91], self-reflection from prior experiences [34,64,87], and collaboration between multiple agents [20, 78, 95]. These techniques enable agents to effectively navigate external environments via tools [54,59, 85] and solve complex tasks, such as autonomously browsing the web [27, 83, 92], resolving GitHub issues [29, 74, 80], and proving difficult math problems [18, 35]. The rise of inference-time techniques and agentic ap- plications signifies a shift from static, specialized LLM †Equal and significant contribution.

## 3. Method / 方法

> [!method]
> LLM serving system treating programs as first-class citizens with program-aware scheduling algorithms, improving program throughput by 4-15x compared to state-of-the-art systems.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - 6.1 Workloads Our real-world experiments evaluate Autellix over four repre- sentative agentic workloads, which widely vary in the number of decode tokens, prefill tokens, and the LLM calls (Fig.
> - Average latency for different LLM serving systems across four real-world workloads. is evident in its decode-heavy calls, averaging 277 decode tokens versus 256 prefill tokens, where short prompts gen- erate detailed responses (Fig.
> - BFCL is prefill-heavy, averaging 735.06 tokens per call due to long system prompts and detailed tool signatures, while decodes are short, averaging 34.14 tokens (Fig.
> - Moreover, the prefill and decoding phase of each call averages 467.2 and 72.6 tokens respectively (Fig.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Indirect — serving-engine paper for LLM-program workloads.
> **Intervention coverage:** LLM serving infrastructure, program-aware scheduling
> **Outcome evidence:** 4–15× program throughput
> **Strength of fit:** Moderate — relevant if local stack serves multiple agent programs.

## 7. Key Quotes / 關鍵引文

- "Large language models (LLMs) as autonomous agents en- hance their problem solving capabilities by scaling their infer- ence computation—that is, increasing the number of output to- kens or LLM calls [9,12,22,30,31,65]." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
