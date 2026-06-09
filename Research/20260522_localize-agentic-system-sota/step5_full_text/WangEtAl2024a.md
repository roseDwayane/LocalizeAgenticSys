---
citation_key: "WangEtAl2024a"
paper_id: "paper_001"
title: "A survey on large language model based autonomous agents"
authors: ["Lei Wang", "Chen Ma", "Xueyang Feng", "Zeyu Zhang", "Hao Yang", "Jingsen Zhang", "Zhiyuan Chen", "Jiakai Tang", "Xu Chen", "Yankai Lin", "Wayne Xin Zhao", "Zhewei Wei", "Ji-Rong Wen"]
year: 2024
venue: "Frontiers of Computer Science"
doi: "10.1007/s11704-024-40231-1"
arxiv_id: null
source: "local_pdf"
tier: 2
composite_score: 4.2
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# A survey on large language model based autonomous agents

> **Authors / 作者:** Lei Wang et al. (2024)
> **Venue / 發表場域:** Frontiers of Computer Science
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> Autonomous agents have long been a research focus in academic and industry communities. Previous research often focuses on training agents with limited knowledge within isolated environments, which diverges significantly from human learning processes. Recently, through the acquisition of vast amounts of Web knowledge, large language models (LLMs) have shown potential in human-level intelligence, leading to a surge in LLM-based autonomous agents.

> [!summary] 繁中
> 本綜述以「為何過去 RL agent 與人類學習差距甚大」起頭，論證 LLM agent 帶來的轉變：透過 web-scale 知識，agent 開始具備接近人類層級的智慧。論文系統整理 LLM-based autonomous agent 的構造（agent profile、memory、planning、action）、應用領域與評估方式，是 agentic system 領域最常被引用的 framing 之一。

## 2. Problem & Motivation / 問題與動機

“An autonomous agent is a system situated within and a part of an environment that senses that environment and acts on it, over time, in pursuit of its own agenda and so as to effect what it senses in the future. ” Franklin and Graesser (1997) Autonomous agents have long been recognized as a promising approach to achieving artificial gen- eral intelligence (AGI), which is expected to ac- Received month dd, yyyy; accepted month dd, yyyy E-mail: xu.chen@ruc.edu.cn;yankailin@ruc.edu.cn *Both authors contribute equally to this paper. arXiv:2308.11432v7 [cs.AI] 2 Mar 2025 2 Front. Comput. Sci., 2025, 0(0): 1–42 2021-1 2022-1 2023-2 2023-4 2023-6 2023-8 Time（Year-Month） NumberofPapers（cumulated） WebGPT 2021-12 Generative Agent2023-4 Voyager 2023-5 ToolBench 2023-7 AgentSims 2023-8 Tool Agent Simulation Agent General Agent Embodied Agent TALM2022-5 HuggingGPT2023-3 Game Agent CoT 2022-1 Web ...

## 3. Method / 方法

> [!method]
> Autonomous agents have long been a research focus in academic and industry communities. Previous research often focuses on training agents with limited knowledge within isolated environments, which diverges significantly from human learning processes. Recently, through the acquisition of vast amounts of Web knowledge, large language models (LLMs) have shown potential in human-level intelligence, leading to a surge in LLM-based autonomous agents.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - 5 The applications (left) and evaluation strategies (right) of LLM-based agents. “hyper-accuracy distortion”), which may influence the downstream applications.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Indirect — survey covers cloud and local agents; framework is general.
> **Intervention coverage:** Agent profile, memory, planning, action (taxonomy)
> **Outcome evidence:** Taxonomy + application + eval review
> **Strength of fit:** Moderate — heavily cited framing; not local-specific.

## 7. Key Quotes / 關鍵引文

- "We present the cumulative number of papers published from January 2021 to August 2023." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
