---
citation_key: "XingEtAl2025"
paper_id: "paper_050"
title: "MCP-Guard: A Multi-Stage Defense-in-Depth Framework for Securing Model Context Protocol in Agentic AI"
authors: ["Wenpeng Xing", "Zhonghao Qi", "Yupeng Qin", "Yilin Li", "Caini Chang", "Jiahui Yu", "Changting Lin", "Zhenzhen Xie", "Meng Han"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2508.10991"
source: "arxiv_pdf"
tier: 3
composite_score: 3.5
cluster: "mcp_and_tool_protocols"
date_extracted: "2026-05-22"
---
# MCP-Guard: A Multi-Stage Defense-in-Depth Framework for Securing Model Context Protocol in Agentic AI

> **Authors / 作者:** Wenpeng Xing et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** arXiv PDF / arXiv PDF 抽取
> **Cluster / 聚類:** mcp_and_tool_protocols

## 1. Summary / 摘要

> [!summary] EN
> While Large Language Models (LLMs) have achieved remarkable performance, they remain vulnerable to jailbreak. The integration of Large Language Models (LLMs) with exter- nal tools via protocols such as the Model Con- text Protocol (MCP) introduces critical secu- rity vulnerabilities, including prompt injection, data exfiltration, and other threats. To counter these challenges, we propose MCP-GUARD, a robust, layered defense architecture designed for LLM–tool interactions. MCP-GUARDem- ploys a three-stage detection pipeline that bal- ances efficiency with accuracy: it progresses from lightweight static scanning for overt threats and a deep neural detector for seman- tic attacks, to our fine-tuned E5-based model achieves 96.01% accuracy in identifying ad- versarial prompts. Finally, an LLM arbitrator synthesizes these signals to deliver the final decision. To enable rigorous training and eval- uation, we introduce MCP-ATTACKBENCH, a comprehensive benchmark comprising 70,448 samples augmented by GPT-4. This benchmark simulates diverse real-world attack vectors that circumvent conventional defenses in the MCP paradigm, thereby laying a solid foundation for future research on securing LLM-tool ecosys- tems. 1 Introduction The rapid proliferation of Large Language Mod- els (LLMs) has necessitated a dual focus on their security vulnerabilities and intellectual property safeguards. On one hand, the community has ex- tensively scrutinized potentialadversarial attacks and latent ...

> [!summary] 繁中
> MCP-Guard 提出 static scanning → deep neural detector → fine-tuned E5 的三階段 defense-in-depth pipeline，在 MCP-AttackBench（70,448 樣本）達 96.01% 對抗 prompt 偵測準確率，為 MCP-based local agent 提供生產級安全層。

## 2. Problem & Motivation / 問題與動機

The rapid proliferation of Large Language Mod- els (LLMs) has necessitated a dual focus on their security vulnerabilities and intellectual property safeguards. On one hand, the community has ex- tensively scrutinized potentialadversarial attacks and latent risks, ranging from the exploitation of latent features to the development of sophisticated prompt-based manipulations (Xing et al., 2025b,a; Li et al., 2025). Concurrently, thecopyright pro- tectionof these models has emerged as a critical *Equal contribution. †Corresponding author. Table 1: Ecological Niche Analysis of MCP Security Frameworks.

## 3. Method / 方法

> [!method]
> Pre-Ex Runtime Prot.
> Ext.
> Eval.
> ScaleID Iso. Syn. Sem.
> I. Infra & Gateway
> Gateway (Brett, 2025)✓ ✓– – – –
> Zero-Trust (Narajala et al., 2025)✓– – – – –
> II. Audit & Monitor
> Scanners (Radosevich and Halloran, 2025) – –✓– –✓
> Guardian (Kumar et al., 2025) ✓⃝–✓×–×
> III. Protocol & Integrity
> MCIP(Jing et al., 2025) – – – ✓⃝✓ ✓
> Ours – – ✓ ✓ – ✓
> (MCP-GUARD) Proxy F astNeural – 70k+
> ✓Fully supported ✓⃝Partially supported×Not supported – NA
> frontier, with significant research dedicated to ro-
> bust watermarking techniques and traceable copy-
> right frameworks (Xu et al., 2025c,a; Yue et al.,
> 2025). Furthermore, addressing thereliability and
> transparencyof model outputs remains a priority,
> leading to advanced methodologies for information
> erasure and systematic vulnerability assessment
> (Zhang et al., 2025; Xu et al., 2025b, 1906).
> The transition of LLMs into autonomous agents
> relies on theModel Context Protocol (MCP)(An-
> thropic, 2025) to standardize interactions with ex-
> ternal systems. However, this open architecture
> expands the attack surface, introducing protocol-
> specific vulnerabilities that traditional defenses fail
> to address. Attacks or copyright protections of
> LLMs have attracted research attentions (Zhang
> et al., 2025; Xu et al., 2025b; Xing et al., 2025b;
> Xu et al., 1906, 2025c; Yue et al., 2025; Xu et al.,
> 2025a; Li et al., 2025; Xing et al., 2025a). Recent
> audits reveal ...

## 4. Findings / 發現

> [!findings]
> - Three-stage detection pipeline with static scanning, deep neural detector, and fine-tuned E5 model achieving 96.01% accuracy in identifying adversarial prompts.

## 5. Limitations / 局限性

> [!limitation]
> Despite the robust performance of MCP-GUARD,
> several limitations remain inherent to its current
> design and evaluation scope:
> Protocol Dependency and Evolution.Our frame-
> work is tightly coupled with the current specifica-
> tion of the Model Context Protocol. While Stage
> I’s regex patterns are hot-updateable, fundamental
> changes to the MCP transport layer (e.g., a shift
> from JSON-RPC to a binary protocol) would ne-
> cessitate significant re-engineering of the parsing
> logic. Additionally, our evaluation primarily fo-
> cuses on text-based payloads. As MCP evolves to
> support multi-modal data ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — MCP-Guard can sit in front of local MCP servers.
> **Intervention coverage:** MCP security defence pipeline
> **Outcome evidence:** 96.01% accuracy on MCP-AttackBench (70,448 samples)
> **Strength of fit:** Strong — production-grade MCP defence reference.

## 7. Key Quotes / 關鍵引文

- "The rapid proliferation of Large Language Mod- els (LLMs) has necessitated a dual focus on their security vulnerabilities and intellectual property safeguards." — Introduction
- "Infra & Gateway Gateway (Brett, 2025)✓ ✓– – – – Zero-Trust (Narajala et al., 2025)✓– – – – – II." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Ray2025]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
