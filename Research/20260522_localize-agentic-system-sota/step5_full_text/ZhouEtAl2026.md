---
citation_key: "ZhouEtAl2026"
paper_id: "paper_008"
title: "Externalization in LLM Agents: A Unified Review of Memory, Skills, Protocols and Harness Engineering"
authors: ["Chenyu Zhou", "Huacan Chai", "Wenteng Chen", "Zihan Guo", "Rong Shan", "Yuanyi Song", "Tianyi Xu", "Yingxuan Yang", "Aofan Yu", "Weiming Zhang", "Congming Zheng", "Jiachen Zhu", "Zeyu Zheng", "Zhuosheng Zhang", "Xingyu Lou", "Changwang Zhang", "Zhihui Fu", "Jun Wang", "Weiwen Liu", "Jianghao Lin", "Weinan Zhang"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2604.08224"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# Externalization in LLM Agents: A Unified Review of Memory, Skills, Protocols and Harness Engineering

> **Authors / 作者:** Chenyu Zhou et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> Large language model (LLM) agents are increasingly built less by changing model weights than by reorganizing the runtime around them. Capabilities that earlier systems expected the model to recover internally are now externalized into memory stores, reusable skills, interaction protocols, and the surrounding harness that makes these modules reliable in practice. This paper reviews that shift through the lens of externalization. Drawing on the idea of cognitive artifacts, we argue that agent infrastructure matters not merely because it adds auxiliary components, but because it transforms hard cognitive burdens into forms that the model can solve more reliably. Under this view, memory externalizes state across time, skills externalize procedural expertise, protocols externalize interaction structure, and harness engineering serves as the unification layer that coordinates them into governed execution. We trace a historical progression from weights to context to harness, analyze memory, skills, and protocols as three distinct but coupled forms of externalization, and examine how they interact inside a larger agent system. We further discuss the trade-off between parametric and externalized capability, identify emerging directions such as self-evolving harnesses and shared agent infrastructure, and discuss open challenges in evaluation, governance, and the long-term co-evolution of models and external infrastructure. The result is a systems-level framework for explaining why ...

> [!summary] 繁中
> 本論文是 LLM agent 「外部化（externalization）」現象的綜整：把記憶、技能、互動 protocol、harness 等能力從 model weights 抽離，放到外部基礎設施中。作者以認知人造物（cognitive artifact）理論為框架，分四個維度（memory / skill / protocol / harness）統整既有研究，提供 local agentic system 設計時的概念地圖。

## 2. Problem & Motivation / 問題與動機

Reviews how agent capabilities are externalized into memory stores, reusable skills, interaction protocols, and infrastructure rather than encoded in model weights, analyzing this shift through cognitive artifact theory.

## 3. Method / 方法

> [!method]
> Reviews how agent capabilities are externalized into memory stores, reusable skills, interaction protocols, and infrastructure rather than encoded in model weights, analyzing this shift through cognitive artifact theory.
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
> **Population fit:** Direct — covers the externalized layers (memory, skills, MCP protocols, harness) that constitute a local agentic system.
> **Intervention coverage:** Memory, skills, protocols (MCP), harness
> **Outcome evidence:** Conceptual taxonomy; survey of mechanisms
> **Strength of fit:** Strong — concept map for the SOTA review's mid-layer.

## 7. Key Quotes / 關鍵引文

- "Reviews how agent capabilities are externalized into memory stores, reusable skills, interaction protocols, and infrastructure rather than encoded in model weights, analyzing this shift through cognitive artifact theory." — Abstract

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[WangEtAl2024a]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
