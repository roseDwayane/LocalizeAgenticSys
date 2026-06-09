---
citation_key: "PanEtAl2026"
paper_id: "paper_033"
title: "Natural-Language Agent Harnesses"
authors: ["Linyue Pan", "Lexiao Zou", "Shuo Guo", "Jingchen Ni", "Hai-Tao Zheng"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2603.25723"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Natural-Language Agent Harnesses

> **Authors / 作者:** Linyue Pan et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Agent performance is strongly shaped by the surrounding harness: the external execution system around a model that organizes a task run. Yet this logic is usually buried in tightly coupled controller code, which makes harnesses hard to inspect, compare, transfer, and ablate. This paper asks whether the reusable design pattern of an agent harness can be represented as an executable natural-language object. We introduceNatural-Language Agent Harnesses(NLAHs), editable documents that describe run-level harness policy, andIntelligent Harness Runtime(IHR), a shared runtime that interprets these documents into agent calls, handoffs, state updates, validation gates, and artifact contracts. Across coding, terminal-use, and computer-use benchmarks, IHR-executed NLAHs achieve comparable task outcomes to code and prompted realizations, while exposing much shorter static harness policies. Module ablations further show that explicit harness modules are analyzable. These results suggest that agent harnesses can be turned from incidental glue around models into scientific representation objects. 1 Introduction Modern language-model agents have become multi-step execution systems. They use tools, keep state, recover from failures, validate intermediate results, and sometimes delegate work to other agents [Yao et al., 2023, Shinn et al., 2023, Wang et al., 2024b, Fourney et al., 2024, Anthropic, 2024]. These behaviors are organized by an externalharness, which can have large effects on ...

> [!summary] 繁中
> Natural-Language Agent Harnesses (NLAH) 把 harness 寫成可編輯的自然語言文件，由 Intelligent Harness Runtime (IHR) 解譯執行。實驗顯示 NLAH 與程式碼版本性能相當，但 policy 描述大幅縮短，方便人類審閱與修改，對需要快速調整 local agent 策略的場景特別有用。

## 2. Problem & Motivation / 問題與動機

Modern language-model agents have become multi-step execution systems. They use tools, keep state, recover from failures, validate intermediate results, and sometimes delegate work to other agents [Yao et al., 2023, Shinn et al., 2023, Wang et al., 2024b, Fourney et al., 2024, Anthropic, 2024]. These behaviors are organized by an externalharness, which can have large effects on measured performance [LangChain, 2026b,a, Bui, 2026]. Similar concerns appear in recent work on agent scaffolds, workflow generation, long-context execution, multi-agent orchestration, and tool-using agents [OpenAI, 2026b, Anthropic, 2025a,b, Ding et al., 2026, Liu et al., 2024, Chroma Research, 2025, Sun et al., 2025].

## 3. Method / 方法

> [!method]
> Inspired by reusable natural-language carriers such as AGENTS.md, CLAUDE.md, and SKILL.md, we
> consider extending natural-language documents from simple tool or workflow descriptions to broader
> harness-level strategies.
> 3.1 NLAHs and IHR
> An NLAH+IHR system has four layers. The first layer is thebase agent: a code-form minimal
> executable substrate. In our setting, the base agent is only an LLM loop: it can call a model, but the
> only external tool exposed to the model is a terminal. Through the terminal, the base agent can read
> and write files, run processes, record events, and launch child agents when needed. Launching a child
> agent does not require a separate dedicated tool: the base agent can use the terminal to start a new
> instance of itself and pass that instance a child task packet. The second layer is theruntime policy: a
> fixed instruction that turns the base agent into IHR by defining how it should interpret and execute
> harness documents. The third layer is theNLAH: the natural-language policy document that describes
> the stages, roles, state rules, verification rules, recovery rules, and stopping conditions of a task run.
> The fourth layer is the set ofscripts and adapters: deterministic code used for exact operations such
> as running tests, parsing results, calling benchmark tools, or checking artifacts.
> 3
> This separation is the main design choice. The base agent and ...

## 4. Findings / 發現

> [!findings]
> - For Live-SWE, the readable harness policy is reduced from 60.1k tokens of code materials to a 2.9k-token NLAH.
> - For MHTBA, it is reduced from 10.5k to 0.8k tokens.
> - Benchmark Harness Token Files Code NLAH Code NLAH SWE Verified Live-SWE 60.10k 2.90k 68.00 3.00 TB2 MHTBA 10.50k 0.80k 3.00 1.00 OSWorld SeeAct 47.50k 1.40k 5.00 1.00 Table 3:RQ2: NLAHs preserve recognizable harn
> - IHR-executed NLAHs are operationally viable.Across the audited settings, NLAHs achieve task performance in the same regime as the corresponding code harnesses.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — NLAH is a human-editable harness file, very natural for local debug loops.
> **Intervention coverage:** Harness engineering (natural-language-based)
> **Outcome evidence:** Comparable pass-rate to code harnesses, shorter policies
> **Strength of fit:** Strong — complementary harness paradigm to paper_031.

## 7. Key Quotes / 關鍵引文

- "Modern language-model agents have become multi-step execution systems." — Introduction
- "The first layer is thebase agent: a code-form minimal executable substrate." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[Jimenez-GomezEtAl2023]]
- [[WangEtAl2024c]]
- [[LiuEtAl2026]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
