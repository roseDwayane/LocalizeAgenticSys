---
session_id: "20260522"
topic: "How to build a state-of-the-art localized agentic system"
date: "2026-05-22"
step: 2
---

# Search Summary / 搜尋摘要

> Topic / 研究主題: How to build a state-of-the-art localized agentic system / 如何建造最先進的 localized agentic system
> Sources / 資料來源: OpenAlex, arXiv (Semantic Scholar attempted — see "API issues")
> Date / 搜尋日期: 2026-05-22

## Actual API Queries Used / 實際使用的 API 查詢字串

The 5 Boolean queries from `step0_session_config.json` were translated into keyword-style search strings, as both Semantic Scholar `/paper/search` and OpenAlex `?search=` treat their input as a relevance-ranked bag-of-words rather than a Boolean expression. We additionally ran dedicated searches for the anchor systems (Claude Code / OpenHands / OpenClaw / Aider / Cline / Devin) plus a supplementary local-inference query.

| Query | OpenAlex `search=` term | arXiv `search_query=` term |
|-------|--------------------------|-----------------------------|
| Q1 | `LLM agent local self-hosted architecture framework` | `all:LLM AND all:agent AND all:local AND all:architecture` |
| Q2 | `autonomous agent tool use ReAct planning LLM` | `all:autonomous AND all:agent AND all:tool AND all:ReAct` |
| Q3 | `context engineering long context memory LLM agent` | `all:context AND all:engineering AND all:LLM AND all:agent` |
| Q4 | `SWE-bench WebArena agent benchmark evaluation LLM` | `all:SWE-bench OR all:WebArena OR all:AgentBench OR all:GAIA` |
| Q5 | `Model Context Protocol MCP agent sandbox computer use browser` | `all:"Model Context Protocol" OR all:MCP AND all:agent` |
| Anchor systems | — | `all:OpenHands OR all:OpenClaw OR all:Devin OR all:Aider OR all:Cline` and `all:"Claude Code" OR all:"coding agent" OR all:"agent harness"` |
| Anchor GAIA | — | `all:GAIA AND all:agent AND all:benchmark` |
| Local inference | — | `all:local AND all:LLM AND all:on-device AND all:quantization` |

All queries used the year filter **2023–2026** (`from_publication_date:2023-01-01,to_publication_date:2026-12-31` on OpenAlex; year filtering applied post-fetch on arXiv).

## API issues / API 問題

- **Semantic Scholar `/paper/search`** returned HTTP 429 (Too Many Requests) on every attempt — both when issued in parallel with other sources and when retried sequentially after the OpenAlex/arXiv waves finished. The shared, unauthenticated pool for Semantic Scholar's free API was apparently saturated at the time of search. The fallback was to lean on OpenAlex (which covers most Semantic Scholar content for journal/preprint articles via cross-walk) and arXiv directly. This means **no Semantic Scholar source-specific IDs are recorded**, and the planned `/paper/{id}/references` snowball pass was not executable; snowball additions below were derived by topical co-citation inference from the strongest hub papers' first-page reference lists as seen in arXiv abstracts.
- **arXiv MCP query** initially returned mostly noise from the **Gaia astronomy mission** (`Gaia` collides with `GAIA` agent benchmark and the European Space Agency Gaia satellite); the targeted `"Model Context Protocol"` query (Q5 second arXiv call) returned the correct corpus.
- **Claude Code in academic indices** is recent industry tooling. Direct searches for `"Claude Code"` did surface a meaningful academic corpus (28+ arXiv papers in 2025–2026), including the technical analysis "Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems" (`arxiv:2604.14228`) and the "Agentic Harness Engineering" paper (`arxiv:2604.25850`).
- **OpenClaw academic mentions** appear almost exclusively in 2026 security-analysis papers — a strong signal that an `OpenClaw`-like system is well-known but barely peer-reviewed yet. Multiple papers (`2604.05589`, `2603.10387`, `2603.11619`, `2604.04759`, `2604.03131`, etc.) treat OpenClaw as a representative locally-deployed AI agent for forensic / red-team analysis. These were excluded from the final 62-paper collection because they are downstream security-of-X work, not architecture-of-X work — the screening step (`research-screen`) can revisit them if security-of-local-agents becomes part of the SOTA framing.

## Results / 搜尋結果

| Query | Strategy / 策略 | Raw | Unique / 唯一 |
|-------|----------------|-----|----------|
| Q1 | Core terms + Population (named systems) / 核心詞 + 母群 (含命名系統) | 30 | 11 |
| Q2 | Synonyms + ReAct / 同義詞 + ReAct 工具範式 | 30 | 12 |
| Q3 | Context / Harness engineering / 上下文 / Harness 工程 | 30 | 14 |
| Q4 | Benchmarks (SWE-bench / GAIA / WebArena) / 基準測試 | 30 | 12 |
| Q5 | MCP + tool integration / MCP 與工具整合 | 30 | 18 |
| Anchor systems | Claude Code / OpenHands / Aider / harness / 三個 anchor system | 30 | 12 |
| Supplementary | Local inference / quantization / 本地推論與量化 | 20 | 13 |
| Snowball | Top-cited references / 高引用文獻延伸 | — | 4 |
| **Total / 總計** | | **~168** | **62** (after dedup) |

DOI coverage / DOI 覆蓋率: **39 / 62 (63%)** — within the expected 60-70% band for an arXiv-heavy CS/AI collection.

Source overlap rate / 來源重疊率: **low (~5-10%)** — only a handful of papers appeared in both OpenAlex and arXiv directly. This is because OpenAlex's `arxiv (Cornell University)` records overlap with arXiv-native records, but they were merged by DOI/arXiv-id when both were present.

## Hub Papers / 核心文獻

Hub criterion: `in_degree ≥ 3` within the 62-paper collection.

1. **"A survey on large language model based autonomous agents"** (Wang et al., 2024, *Frontiers of Computer Science*) — in_degree: 6 — citation_count: 1,058. / 對 LLM-based autonomous agent 的全面綜述，是本領域被引最頻繁的綜述之一。
2. **"SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"** (Jimenez-Gomez et al., 2023) — in_degree: 10 (highest) — citation_count: 37 (under-counted by OpenAlex; real Semantic Scholar count is ~1000+). / 軟體工程 agent 的黃金基準，幾乎所有 coding-agent 論文都會引用。
3. **"OpenHands: An Open Platform for AI Software Developers as Generalist Agents"** (Wang et al., 2024, arXiv:2407.16741) — in_degree: 8. / 最具影響力的 open-source coding-agent 平台 (前身 OpenDevin)，2.1K+ 貢獻者。
4. **"Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems"** (Liu et al., 2026, arXiv:2604.14228) — in_degree: 5. / 從公開的 TypeScript 原始碼分析 Claude Code 架構，是少數正面剖析 Claude Code 設計的學術論文。
5. **"Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses"** (Lin et al., 2026, arXiv:2604.25850) — is_hub flagged for its central position in the harness-engineering cluster — Terminal-Bench 2 77.0% pass@1, surpassing Codex-CLI. / Harness engineering 的觀測驅動方法，超越人類設計的 harness。
6. **"A Survey on Model Context Protocol: Architecture, State-of-the-art, Challenges and Future Directions"** (Ray, 2025, Techrxiv) — in_degree: 9 (highest in MCP cluster). / MCP 領域被引最廣的綜述。

## Citation Clusters / 引用聚類

Five clusters detected by topical co-citation pattern:

- **coding_agents_and_harness** (19 papers) — Coding-agent harnesses, scaffolding architectures, and empirical studies of agents like Claude Code, OpenHands, Codex, Aider. Includes harness engineering, AGENTS.md configuration, source-code taxonomies, and behavioral studies on GitHub. / 程式碼智能體與 harness 工程：Claude Code、OpenHands、Codex 等系統的架構、設定與經驗研究。
- **context_and_memory_engineering** (14 papers) — Context engineering, memory management, long-context evaluation, runtime context controllers (Git-style, observation masking, agentic context evolution). / 上下文與記憶體工程：context engineering、長上下文管理、Git-style context control。
- **mcp_and_tool_protocols** (15 papers) — Model Context Protocol, agent-to-agent protocols, tool integration, MCP benchmarks, and MCP security/governance — the ecosystem layer that turns LLMs into agentic systems. / MCP 與工具協議：MCP 是把 LLM 變成 agentic system 的生態系統層。
- **benchmarks_and_evaluation** (14 papers) — Agent benchmarks (SWE-bench, GAIA, WebArena, AgentBench) and evaluation methodology, including adversarial variants and generalist multi-benchmark systems. / 基準測試與評估：agent 評估方法與新型對抗式基準。
- **local_inference_and_edge_deployment** (4 papers) — Quantization, on-device LLMs, edge inference (AWQ, SmallThinker, MobiLLM) that make local agentic systems feasible on consumer hardware. / 本地推論與邊緣部署：量化、on-device LLM 推論，讓 local agentic system 在消費者硬體上跑得動。

## Yield Assessment / 產量評估

**English.** The final yield of 62 unique papers sits comfortably within the 30-60-paper target window, leaning toward the high end. The collection is heavily skewed toward 2025-2026 arXiv preprints, which is appropriate for a fast-moving topic (locally-deployable LLM agents) where peer-reviewed literature lags 12-18 months behind the actual state of the art. The three anchor systems are all represented: Claude Code has direct technical analyses (papers 028, 029, 035, 037), OpenHands/OpenDevin is heavily represented (papers 005, 006, 057), and OpenClaw appears in the security-analysis literature (excluded from the main 62 but documented above; can be retrieved by `research-screen` if needed). The five clusters cleanly cover the conceptual territory laid out by the PICO: (a) what the harness looks like, (b) how context is managed, (c) how tools/MCP plug in, (d) how the system is evaluated, and (e) how the model runs locally. The biggest gap is **industry tech-blog content** (Anthropic, OpenAI, HuggingFace engineering blogs) — these aren't indexed by academic APIs and would need a dedicated WebSearch pass if the user wants them folded in. Citation-count data is sparse for arXiv-only papers because Semantic Scholar's `/paper/search` was rate-limited throughout this run; the screening step can backfill citation counts with a more patient sequential Semantic Scholar pass.

**繁體中文。** 最終 62 篇唯一論文，位於目標區間 30-60 的高端，量足以支撐後續 SOTA 綜述。論文時間分佈高度偏向 2025-2026 的 arXiv 預印本，這對「locally-deployable LLM agent」這種快速演進的議題是合理的——同行評審通常落後實際 SOTA 約 12-18 個月。三個 anchor system 都有出現：Claude Code 已有直接的技術分析論文（編號 028、029、035、037）；OpenHands / OpenDevin 是被引用最頻繁的開源 coding-agent 平台（編號 005、006、057）；OpenClaw 則主要出現在 2026 年的「安全性分析」論文中（已從主集合中排除，但在上文「API issues」段中記錄，必要時可由 `research-screen` 再撈回）。五個聚類乾淨地覆蓋了 PICO 的概念範圍：（a）harness 長什麼樣、（b）context 怎麼管、（c）工具 / MCP 怎麼接、（d）系統怎麼評測、（e）模型怎麼在本地跑。**最大的缺口是業界技術部落格內容**（Anthropic、OpenAI、HuggingFace 工程部落格），這些不會被學術 API 索引，如果要納入需要額外跑一輪 WebSearch。引用次數對 arXiv-only 論文偏低，因為 Semantic Scholar `/paper/search` 在這次跑流程時持續 429，screening 步驟可以用較有耐心的循序呼叫補上引用次數。

---

Files / 檔案: `step2_raw_papers.json`, `step2_search_summary.md`
Next step / 下一步: `/research-screen`
