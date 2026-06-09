---
citation_key: "SenEtAl2026"
paper_id: "paper_036"
title: "Is Grep All You Need? How Agent Harnesses Reshape Agentic Search"
authors: ["Sahil Sen", "Akhil Kasturi", "Elias Lumer", "Anmol Gulati", "Vamse Kumar Subbiah"]
year: 2026
venue: "arXiv"
doi: null
arxiv_id: "2605.15184"
source: "local_pdf"
tier: 1
composite_score: 4.5
cluster: "coding_agents_and_harness"
date_extracted: "2026-05-22"
---
# Is Grep All You Need? How Agent Harnesses Reshape Agentic Search

> **Authors / 作者:** Sahil Sen et al. (2026)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** Local PDF / 本機 PDF 抽取
> **Cluster / 聚類:** coding_agents_and_harness

## 1. Summary / 摘要

> [!summary] EN
> Recent advances in Large Language Model (LLM) agents have en- abled complex agentic workflows where models autonomously retrieve information, call tools, and reason over large corpora to complete tasks on behalf of users. Despite the growing adoption of retrieval-augmented generation (RAG) in agentic systems, ex- isting literature lacks a systematic comparison of how retrieval strategy choice interacts with agent architecture and tool-calling paradigm. Important practical dimensions, including how tool out- puts are presented to the model and how performance changes when searches must cope with more irrelevant surrounding text, re- main under-explored in agent loops. This paper reports an empirical study organized into two experiments. Experiment 1 compares grep and vector retrieval on a 116-question sample from LongMemEval, using a custom agent harness (Chronos) and provider-native CLI harnesses (Claude Code, Codex, and Gemini CLI), for both inline tool results and file-based tool results that the model reads sepa- rately. Experiment 2 compares grep-only and vector-only retrieval while progressively mixing in additional unrelated conversation history, so that each query is embedded in more distracting ma- terial alongside the passages that matter. Across Chronos and the provider CLIs, grep generally yields higher accuracy than vector retrieval in our comparisons in experiment 1; at the same time, over- all scores still depend strongly on which harness and tool-calling style ...

> [!summary] 繁中
> 本論文對 Claude Code、Codex、Gemini CLI 三個 harness 在 LongMemEval 上做 grep vs. vector retrieval 的對照。發現「grep 大多時候比 vector retrieval 準」，且分數受 harness 與 tool-calling 風格影響極大，挑戰了「local agent 一定要 embeddings」的常識。

## 2. Problem & Motivation / 問題與動機

Modern LLM agents increasingly rely on RAG to access external knowledge at inference time [5, 10], enabling them to reason over corpora that far exceed their context windows. Through tool calling, agents issue search queries, receive ranked results, and iteratively refine their understanding before producing an answer [18, 20, 29]. Two retrieval paradigms dominate this landscape: semantic vector search, which embeds queries and documents into a shared latent space for approximate nearest-neighbor matching [8], and lexical search (e.g., grep, BM25, regex), which performs exact or pattern- based matching over raw text. While vector search has become the default choice in most RAG systems [5, 26], lexical search remains widely used in practice due to its simplicity, stability, and low em- bedding cost [ 11, 23].

## 3. Method / 方法

> [!method]
> Our experiments evaluate retrieval strategy effectiveness across
> the two dimensions defined in Section 2.
> 3.1 Task and Dataset
> We evaluate on a 116-question representative subset of the Long-
> MemEval benchmark [ 27], which tests an agent’s ability to an-
> swer questions over long conversations spanning multiple sessions.
> Each question is accompanied by sessions of a certain type: one
> or more oracle sessions containing the information needed to an-
> swer correctly, and a variable number of distractor sessions that are
> irrelevant to the query. Questions span six categories: knowledge-
> update (tracking state changes over time), multi-session (aggregat-
> ing information across sessions), single-session-assistant (recalling
> model-generated content), single-session-preference (user personal
> preferences), single-session-user (user-stated facts), and temporal-
> reasoning (computing durations, ordering events, and resolving
> dates). All conversation turns and extracted temporal events are
> stored locally, serving as the corpus for both grep and vector search.
> 3.2 Retrieval Implementations
> 3.2.1 Structured events via Chronos.Our search layer operates over
> per-question files, serializing LongMemEval dialogue turns together
> with structured temporal events extracted from transcripts using
> the Chronos preprocessing pipeline [ 21]. Chronos targets long-
> horizon conversation memory by surfacing ...

## 4. Findings / 發現

> [!findings]
> - 4.1.3 Results.Table 1 reports overall accuracy (%) on the 116- question LongMemEval-S subset [27] over Chronos-processed ses- sion JSON [21] with the full per-question haystack.
> - The largest margin is Chronos with Gemini 3.1 Flash-Lite (86.2% vs.
> - 62.9%), and the nar- rowest is Claude Code with Claude Opus 4.6 (76.7% vs.
> - On Chronos, inline grep spans 83.6–93.1% across backbones, whereas inline vector spans 62.9–83.6%.

## 5. Limitations / 局限性

> [!limitation]
> Conceptually, our conclusions are tied to long-memory conversa-
> tional QA: questions are grounded in multi-session chat, explicit
> time expressions, and personal/user facts. Lexical tools may be
> disproportionately helpful here because answers often license on
> verbatim spans; in domains where evidence is rarely literal (e.g.,
> scientific synthesis over paraphrased abstracts, visual-heavy docu-
> ments, or code semantics), dense retrieval and hybrid routing may
> look different. We do not claim that grep “beats” vector in general,
> only that it can win end-to-end under the task distribution ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — Claude Code / Codex / Gemini CLI all run locally.
> **Intervention coverage:** Tool design (grep vs vector retrieval)
> **Outcome evidence:** LongMemEval accuracy by harness
> **Strength of fit:** Strong — challenges the embedding-everywhere intuition for local agents.

## 7. Key Quotes / 關鍵引文

- "Modern LLM agents increasingly rely on RAG to access external knowledge at inference time [5, 10], enabling them to reason over corpora that far exceed their context windows." — Introduction
- "Each question is accompanied by sessions of a certain type: one or more oracle sessions containing the information needed to an- swer correctly, and a variable number of distractor sessions that are irrelevant to the query." — Method / Design

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

- [[LiuEtAl2026]]

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
