---
citation_key: "LinEtAl2026"
paper_id: "paper_032"
title: "Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses"
authors: ["Jiahang Lin", "Shichun Liu", "Chengjun Pan", "Lizhi Lin", "Shihan Dou", "Zhiheng Xi", "Xuanjing Huang", "Hang Yan", "Zhenhua Han", "Tao Gui", "Yu-Gang Jiang"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2604.25850"
source: "local_pdf"
tier: 1
composite_score: 5.0
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses

> **Authors / 作者:** Jiahang Lin et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Harnesses are now central to agent performance, mediating how models interact with tools and execution environments. Yet harness engineering remains a manual craft, because automating it faces a heterogeneous action space across editable components, voluminous trajectories that bury actionable signal, and edits whose effect is hard to attribute. We introduceAgenticHarnessEngineering (AHE), a closed loop that addresses these challenges through three matched observability pillars: ❶ component observabilitygives every editable harness component a file- level representation so the action space is explicit and revertible; ❷ experience observabilitydistills millions of raw trajectory tokens into a layered, drill-down evidence corpus that an evolving agent can actually consume; and ❸ decision observabilitypairs every edit with a self-declared prediction, later verified against the next round’s task-level outcomes. Together, these pillars turn every edit into a falsifiable contract, so harness evolution proceeds autonomously without collapsing into trial-and-error. Empirically, ten AHE iterations lift pass@1 on Terminal-Bench 2 from 69.7% to 77.0%, surpassing the human-designed harness Codex (71.9%) and the self-evolving baselines ACE and Training-Free GRPO. The frozen harness transfers without re-evolution: on SWE-bench-verified it achieves the highest aggregate success while using 12% fewer tokens than the seed, and on Terminal- Bench 2 it yields +5.1 to +10.1 pp cross-family ...

> [!summary] 繁中
> Agentic Harness Engineering (AHE) 提出以「可觀測性」驅動 harness 自動演化：component / experience / decision 三層 observability 讓 agent 能持續微調自身 harness。在 Terminal-Bench 2 達到 77.0% pass@1，超越人工設計的 Codex-CLI（71.9%），示範「會自己改 harness 的 agent」的可行性。

## 2. Problem & Motivation / 問題與動機

Coding agents are increasingly deployed on long-horizon software-engineering tasks, with measurable progress on issue resolution over real-world code repositories [ 14, 46, 7] and multi-step terminal workflows [21]. In practice, such progress relies not only on the underlying language model, but equally on the surrounding engineering components: the system prompt that shapes work style, the tools that expose the file system and shell, and the middleware that controls context, execution, and recovery. This collection of model-external, editable components is collectively referred to as the agent’sharness[29, 18, 42, 45, 33, 31]. ∗Equal contributions. †Corresponding authors: hzhua201@gmail.com, tgui@fudan.edu.cn. ‡Work done during an internship at Shanghai Qiji Zhifeng Co., Ltd. Preprint. arXiv:2604.25850v4 [cs.CL] 18 May 2026 1 2 3 4 5 6 7 8 9 10 Automatic evolution iteration 68 70 72 74 ...

## 3. Method / 方法

> [!method]
> AHE turns harness optimization into a closed loop driven by another agent, with the base model held
> fixed and only the explicit harness edited. Our design principle is that every phase of this loop must
> beobservable: AHE faithfully records the artifacts each phase produces (the harness components
> an iteration writes, the rollout trajectories it generates, the edit decisions it commits) and represents
> them in structured, layered forms that another agent can read and act on.
> 3
> NexAU Harness
> Skills
> System
> Prompt
> Tools
> Middleware
> Sub-agent
> Memory
> Coding Agent
> History
> Environment
> Raw trace
> Agent
> Debugger
> ~10M tokens
> ~10K tokens
> Overview
> Evolve Agent
> Evidence
> I. Component
> Observability
> II. Experience
> Observability
> III. Decision
> Observability
>  Modify Component
> Figure 2:The AHE pipeline links three observable surfaces into one closed loop.Components,
> rollout experience, and edit decisions each surface as structured artifacts another agent reads, and
> every edit becomes a falsifiable prediction the next round verifies.
> Three observability layers implement this principle.Component observability(§3.1) is realized by
> a decoupled, file-level harness substrate that maps each failure pattern to a single component class.
> Experience observability(§3.2) is realized by a layered evidence corpus distilled from raw rollouts
> and indexed for drill-down access.Decision observability(§3.3) is realized ...

## 4. Findings / 發現

> [!findings]
> - For cross-benchmark transfer we evaluate the AHE harness on SWE-bench-verified [ 14], 500 tasks across seven repositories.
> - We report two metrics per configuration:pass@1, the mean binary success rate over k rollouts per task; andtokens/trial, the mean per-trial total of prompt plus completion tokens across all LLM calls, in thousands.
> - Infrastructure-aborted or timed-out trials count as failures under pass@1 (matching the official terminal-bench leaderboard) and are excluded from token means to avoid truncated figures.
> - 4.2 RQ1: Main Results Table 1: Pass@1 on Terminal-Bench 2 across 89 tasks, by official difficulty.

## 5. Limitations / 局限性

> [!limitation]
> This work studies a promising but high-variance setting, and the scope of our claims should be
> interpreted accordingly.
> 9
> Benchmark scope.Our evaluation drives evolution on Terminal-Bench 2 and probes transfer on
> SWE-bench-verified. Even though the frozen harness transfers to a second task surface and to three
> alternate base-model families, broader programming languages, repository-scale deployments, and
> human-in-the-loop workflows remain untested.
> Evolution operating point.AHE’s step budget and per-task timeout were fitted to GPT-5.4 high
> during evolution, so cross-model transfer numbers ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — AHE evaluates on Terminal-Bench, which runs locally in a container.
> **Intervention coverage:** Harness engineering, observability, automation
> **Outcome evidence:** 77.0% pass@1 on Terminal-Bench 2 vs Codex-CLI 71.9%
> **Strength of fit:** Strong — concrete numbers for auto-evolving local harnesses.

## 7. Key Quotes / 關鍵引文

- "Coding agents are increasingly deployed on long-horizon software-engineering tasks, with measurable progress on issue resolution over real-world code repositories [ 14, 46, 7] and multi-step terminal workflows [21]." — Introduction
- "AHE turns harness optimization into a closed loop driven by another agent, with the base model held fixed and only the explicit harness edited." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]
- [[WangEtAl2024c]]
- [[LiuEtAl2026]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
