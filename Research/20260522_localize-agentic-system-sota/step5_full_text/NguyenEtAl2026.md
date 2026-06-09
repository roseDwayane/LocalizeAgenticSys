---
citation_key: "NguyenEtAl2026"
paper_id: "paper_024"
title: "ByteRover: Agent-Native Memory Through LLM-Curated Hierarchical Context"
authors: ["Andy Nguyen", "Danh Doan", "Hoang Pham", "Bao Ha", "Dat Pham", "Linh Nguyen", "Hieu Nguyen", "Thien Nguyen", "Cuong Do", "Phat Nguyen", "Toan Nguyen"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2604.01599"
source: "arxiv_pdf"
tier: 3
composite_score: 3.7
cluster: "context_and_memory_engineering"
date_extracted: "2026-05-22"
---
# ByteRover: Agent-Native Memory Through LLM-Curated Hierarchical Context

> **Authors / 作者:** Andy Nguyen et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** arXiv PDF / arXiv PDF 抽取
> **Cluster / 聚類:** context_and_memory_engineering

## 1. Summary / 摘要

> [!summary] EN
> Memory-Augmented Generation (MAG) extends large language models with external mem- ory to support long-context reasoning, but existing approaches universally treat memory as anexternal servicethat agents call into—delegating storage to separate pipelines of chunking, embedding, and graph extraction. This architectural separation means the system that stores knowledge does not understand it, leading to semantic drift between what the agent intended to remember and what the pipeline actually captured, loss of coordination context across agents, and fragile recovery after failures. In this paper, we proposeByteRover, anagent-nativemem- ory architecture that inverts the memory pipeline: the same LLM that reasons about a task also curates, structures, andretrievesknowledge.ByteRoverrepresentsknowledgeinahierarchical Context Tree—a file-based knowledge graph organized asDomain>Topic>Subtopic>En- try—where each entry carries explicit relations, provenance, and an Adaptive Knowledge Life- cycle (AKL) with importance scoring, maturity tiers, and recency decay. Retrieval uses a 5-tier progressive strategy that resolves most queries at sub-100ms latency without LLM calls, escalat- ing to agentic reasoning only for novel questions. Experiments on LoCoMo and LongMemEval demonstrate thatByteRoverachieves state-of-the-art accuracy on LoCoMo and competitive results on LongMemEval while requiringzero external infrastructure—no vector database, no graph database, no embedding service—with all ...

> [!summary] 繁中
> ByteRover 提出 Agent-Native Memory：用 LLM 主動策展（curate）的階層式 context 取代「memory as external service」的傳統做法，把記憶設計成 agent 內建模組，為長時序 local agent 提供更貼合 agentic 工作流的記憶層。

## 2. Problem & Motivation / 問題與動機

Large Language Models (LLMs) have demonstrated remarkable capabilities across a wide range of tasks [Brown et al., 2020, Achiam et al., 2023, Wei et al., 2022], yet they remain fundamentally lim- itedintheirabilitytomaintainandreasonoverlong-termcontext. Thesemodelsprocessinformation within a finite attention window, and their internal representations do not persist across interac- tions, causing earlier details to be forgotten once they fall outside the active context [Brown et al., 2020, Beltagy et al., 2020]. Even within a single long sequence, attention effectiveness degrades with distance due toattention dilution, positional encoding limitations, and token interference, leading to the well-known “lost-in-the-middle” phenomenon [Liu et al., 2024, Press et al., 2022]. To address these limitations, Memory-Augmented Generation (MAG) systems have emerged as a promising direction for ...

## 3. Method / 方法

> [!method]
> Single-Hop Multi-Hop Open-Domain Temporal Overall
> HonCho 93.2 84.0 77.1 88.2 89.9
> Hindsight 86.2 70.895.183.8 89.6
> Memobase 70.9 46.9 77.2 85.1 75.8
> Zep 74.1 66.0 67.7 79.8 75.1
> Mem0 67.1 51.2 72.9 55.5 66.9
> OpenAI Memory 63.8 42.9 62.3 21.7 52.9
> ByteRover(ours) 97.5 93.385.997.8 96.1
> Table 3: LLM-as-Judge accuracy (%) on LoCoMo (4 categories, 1,982 questions). All systems
> evaluated under identical conditions using our benchmark harness with Gemini 3 Flash as the
> judge.
> Appendix B.
> Evaluation prompts.To enable direct, apples-to-apples comparison with Hindsight [Latimer
> et al., 2025], we reuse their publicly available evaluation prompts.3 Specifically, the judge prompts—
> including the default LoCoMo preamble and all five LongMemEval category-specific preambles
> (standard, temporal-reasoning, knowledge-update, and preference)—are adopted without modifica-
> tion, ensuring that scoring criteria are identical across systems. The LoCoMo justifier prompt is
> likewise reused verbatim. For the LongMemEval justifier, we adapt Hindsight’s prompt to reflect
> ByteRover’s single-layer knowledge representation: where Hindsight instructs the model to cross-
> reference atomic facts against raw source chunks (a two-layer retrieval output), our variant replaces
> this with guidance for interpretingkey factswith session-level timestamps, matching theContext
> Tree’s curated entry format. All other ...

## 4. Findings / 發現

> [!findings]
> - We conduct comprehensive experiments to evaluate both the reasoning effectiveness and system properties ofByteRoverover state-of-the-art baselines (Tables 3–5).
> - Metrics.We adopt LLM-as-a-Judge [Zheng et al., 2023] as the primary metric, where a judge model evaluates each generated answer against the ground truth and returns a binary correctness label.
> - The judge uses a token budget of 8,192 with thinking disabled, while the justifier uses 32,768 tokens with low thinking budget.

## 5. Limitations / 局限性

> [!limitation]
> WhileByteRoverdemonstrates strong architectural properties, it has several limitations that
> warrant discussion.
> First, thewrite path is expensive. LLM-curated knowledge requires reasoning per curation
> event, which is slower and more costly than mechanical chunking and embedding. For use cases
> where write throughput is critical (e.g., real-time ingestion of high-frequency data streams), the
> curation overhead may be prohibitive.
> Second,novel queries are slower than vector search. When queries miss the cache and
> index (Tier 3–4),ByteRoverrequires an LLM call that a vector similarity search does ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — ByteRover-style memory can be embedded into a local agent.
> **Intervention coverage:** Agent-native memory architecture
> **Outcome evidence:** Architectural proposal; comparisons with prior MAG
> **Strength of fit:** Moderate-to-strong — emerging memory paradigm.

## 7. Key Quotes / 關鍵引文

- "MAG equips an agent with an external memory module that continuously records interaction histories and allows the agent to retrieve and reintegrate past experiences when generating new responses." — Introduction
- "All systems evaluated under identical conditions using our benchmark harness with Gemini 3 Flash as the judge." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
