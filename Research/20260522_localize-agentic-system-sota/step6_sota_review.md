---
session_id: "20260522"
topic: "How to build a state-of-the-art localized agentic system"
date: "2026-05-22"
step: 6
total_papers: 58
themes: 6
full_text_papers: 57
abstract_only_papers: 1
---

# State-of-the-Art Review / 文獻綜述

> Topic / 研究主題: How to build a state-of-the-art localized agentic system / 如何建造最先進的本地化 AI Agent 系統
> Papers reviewed / 綜述論文數: 58 (T1: 18, T2: 26, T3: 14)
> Themes identified / 主題數: 6
> Anchor systems / 錨點系統: Claude Code, OpenClaw / OpenHands, hermes-agent
> Date / 完成日期: 2026-05-22

> [!note] Source quality / 來源品質
> 57 of 58 papers were synthesised from full text (`local_pdf` or `arxiv_pdf`). One paper, `MohammadiEtAl2025` (ACM SIGKDD), was paywalled and is cited from abstract only — it is treated as a low-confidence source and is used only for the evaluation-taxonomy framing. `ZhouEtAl2026` had a thin auto-extracted Problem section; substantive claims for it are taken from Summary/Method.

## Executive Summary / 摘要綜論

The 58 papers shortlisted under this session collectively document a sharp shift in how the field thinks about "building an agent": from designing larger or more clever **models** to engineering everything **around** the model — the *harness*, the *context*, the *tools/protocols*, the *memory*, and the *serving stack*. ZhouEtAl2026 makes this thesis explicit by re-framing modern agent capability as *externalisation* of cognition into memory, skills, protocols and harness, and the empirical record across the corpus confirms it: every double-digit benchmark gain reported in the shortlist comes from a harness or context change with the base LLM held constant (LinEtAl2026 +5–10pp on Terminal-Bench, WuEtAl2025 +13% on SWE-bench, OrcaLoca/YuEtAl2025b +6.33pp Resolved Rate, JiaEtAl2026 +32pp). Where the literature does still claim a model-level win, the work is almost always paired with a harness redesign (WangEtAl2025b Huxley-Gödel, YuEtAl2025a AWorld). Three independent design-space papers — LiuEtAl2026 ("Dive into Claude Code"), Rombaut2026 (source-code taxonomy of 13 scaffolds), and NingEtAl2026 ("Code as Agent Harness") — converge on the same architectural shape: a small while-loop, a permission/tool layer, a context-assembly stage, and externalised skill/memory documents. This is now the canonical SOTA agent shape, even when the surface vocabulary differs.

At the same time the corpus reveals real tension between the *complexity-maximising* and *complexity-minimising* schools. LindenbauerEtAl2025 names the "complexity trap" and shows that observation masking matches LLM summarisation at half the cost; SenEtAl2026 shows grep beats vector retrieval across Claude Code / Codex / Gemini CLI; SoniEtAl2025 (OpenHands-Versa) wins three diverse benchmarks with a minimal four-tool kit; LullaEtAl2026 quantifies a 28.64% runtime drop just from adding an `AGENTS.md` file. Against this, papers in the MCP and serving clusters (LumerEtAl2025 ScaleMCP, KulkarniEtAl2026 FAME, LuoEtAl2025a Autellix) build increasingly elaborate infrastructure. The honest summary is that the field has *converged on harness/context engineering as the dominant lever*, but has *not* yet converged on how much machinery a local agent actually needs — a tension the user's own engineering question lives inside.

跨 58 篇文獻可以看出，AI agent 的研究重心已從「把模型做大」明顯轉向「把模型周邊做好」：harness、context、tool/protocol、memory、serving stack 才是當前 SOTA 的真正槓桿。ZhouEtAl2026 用 *externalisation*（外部化）一詞統整這個趨勢，而所有兩位數百分比的 benchmark 提升幾乎都來自 harness 或 context 的工程改良（LinEtAl2026、WuEtAl2025、YuEtAl2025b、JiaEtAl2026）。三篇獨立的 design-space 論文（LiuEtAl2026 解析 Claude Code 原始碼、Rombaut2026 對 13 個開源 scaffold 做 source-code taxonomy、NingEtAl2026 「Code as Agent Harness」綜述）對 SOTA agent 的形狀達成共識：一個簡單 while-loop、權限/工具層、context 組裝階段，加上 externalised skills / memory 文件。

但文獻內部也有一條清楚的張力：一派主張「越簡單越好」（LindenbauerEtAl2025 observation masking、SenEtAl2026 grep 勝 vector、SoniEtAl2025 極簡 tool set、LullaEtAl2026 AGENTS.md 即可減 28.64% runtime），另一派則繼續建構更大的 infrastructure（ScaleMCP、FAME、Autellix）。對使用者「如何建本地 SOTA agent」這個問題而言，這條張力本身就是核心設計取捨。

## Theme Map / 主題地圖

Six themes emerged after re-clustering the Step-2 citation network against the actual content of the 58 reading notes. The two largest themes (Theme 1 *harness* and Theme 3 *MCP*) closely follow Step-2 clusters but were each tightened; Theme 2 *context & memory* merges what was originally two adjacent clusters; Theme 5 *generalist & self-improving frameworks* is a cross-cluster theme constructed from papers that the Step-2 clustering had scattered across `coding_agents_and_harness` and `benchmarks_and_evaluation`. Theme 6 *local inference & serving* is small but distinct enough to keep separate because it is the only theme that touches the model-level (rather than harness-level) PICO axis.

六大主題在重新檢視 58 篇 reading note 之後成形。Theme 1（harness）與 Theme 3（MCP）大致沿用 Step 2 的 citation cluster；Theme 2 把原本分散的 context 與 memory 兩個 cluster 合併；Theme 5「generalist / self-improving framework」是跨 cluster 的新主題；Theme 6「local inference & serving」是唯一觸及 model-level 的主題，因此單獨保留。

| # | Theme EN | Theme 中文 | Papers |
|---|---|---|---|
| 1 | Coding-Agent Harnesses & Scaffolding Architectures | 編碼 Agent Harness 與 Scaffold 架構 | 13 |
| 2 | Context & Memory Engineering for Long-Horizon Agents | 長時序 Agent 的 Context 與 Memory 工程 | 11 |
| 3 | MCP & Tool / Protocol Ecosystem | MCP 與工具／協定生態 | 11 |
| 4 | Agent Benchmarks, Empirical Studies & Reproducibility | Agent 基準、實證研究與可重現性 | 9 |
| 5 | Generalist & Self-Improving Agent Frameworks | 通用型與自我演化 Agent 框架 | 9 |
| 6 | Local Inference & Cost-Efficient Serving Infrastructure | 本地推論與低成本服務基礎設施 | 5 |
| | | **Total** | **58** |

---

## Theme 1: Coding-Agent Harnesses & Scaffolding Architectures / 編碼 Agent Harness 與 Scaffold 架構

**Papers / 論文 (13):** `WangEtAl2024c` (OpenHands), `WangEtAl2025c` (OpenHands SDK), `YangEtAl2024` (SWE-agent), `LiuEtAl2026` (Dive into Claude Code), `SantosEtAl2025` (Claude Code configs), `LinEtAl2026` (Agentic Harness Engineering / AHE), `NingEtAl2026` (Code as Agent Harness), `PanEtAl2026` (Natural-Language Agent Harnesses), `SenEtAl2026` (Grep vs vector across harnesses), `Rombaut2026` (Source-code taxonomy of 13 scaffolds), `AgostinoDSouza2026` (Herding CATs / ALARA), `LullaEtAl2026` (AGENTS.md impact), `WangEtAl2024b` (Agents in SE survey)

### Landscape / 現況

The harness theme is the most architecturally consequential cluster in the corpus and the one where the SOTA picture is clearest. YangEtAl2024 set the foundational thesis with SWE-agent — that an *Agent-Computer Interface (ACI)* designed for an LM rather than a human is worth a 64% relative gain with the same base model. The thesis has held: every subsequent harness paper in the shortlist either accepts ACI as table stakes (WangEtAl2024c OpenHands, WangEtAl2025c OpenHands SDK) or extends it (LinEtAl2026 AHE, PanEtAl2026 NLAH, NingEtAl2026 Code-as-Harness). Three independent design-space mappings now exist: LiuEtAl2026 reverse-engineers Claude Code's public TypeScript source into 13 design principles built around a "simple while-loop", Rombaut2026 builds a 12-dimension source-code taxonomy across 13 open scaffolds and finds 11/13 compose multiple loop primitives (ReAct, generate-test-repair, plan-execute, multi-attempt retry, tree search), and NingEtAl2026 organises code-based harnesses as a three-layer survey (interface / mechanisms / scaling). They differ in vocabulary but agree on shape — small loop, explicit tool layer, externalised configuration documents, opt-in permission/safety check, and an event-sourced state log.

Harness 主題是這個 corpus 中架構意義最重的一群，也是 SOTA 形狀最清楚的一群。YangEtAl2024 的 SWE-agent 奠定了「ACI（Agent-Computer Interface）就是模型周邊的關鍵變數」這個論點：同一個 LLM 接到專為 agent 設計的介面後，SWE-bench 解題率相對提升 64%。後續所有 harness 論文都接受這個前提（OpenHands、OpenHands SDK），或進一步延伸（AHE、NLAH、Code-as-Harness）。三篇獨立的「design space 地圖」LiuEtAl2026、Rombaut2026、NingEtAl2026 雖然用語不同，但對 SOTA agent 的骨架達成共識：小型 while-loop + 工具層 + 外部化設定文件 + 權限／安全檢查 + event-sourced 狀態紀錄。

### Methodological patterns / 方法論模式

Two methodological currents run through the cluster. The *empirical-archaeology* current (LiuEtAl2026 source-code analysis of Claude Code; SantosEtAl2025 study of 328 Claude Code config files; Rombaut2026 12-dimension source-code taxonomy; ZhangEtAl2026 3.8K bug analysis across Claude Code, Codex, Gemini CLI; LullaEtAl2026 124-PR controlled comparison of AGENTS.md presence) treats existing production agents as the dataset. The *generative-engineering* current (LinEtAl2026 AHE closed-loop harness evolution; PanEtAl2026 natural-language harness documents interpreted by IHR; NingEtAl2026 code-as-substrate framing; AgostinoDSouza2026 ALARA-principle CAT data layer over 22 local models × 115 tasks) proposes new harness primitives and measures them on standard benchmarks. The two currents intersect explicitly in LinEtAl2026, whose AHE pipeline *uses* the file-level component representation that the empirical taxonomies (Rombaut2026, LiuEtAl2026) had documented.

文獻中有兩條方法論主軸：一條是「實證考古」（LiuEtAl2026 解 Claude Code 原始碼、SantosEtAl2025 分析 328 個 Claude Code 設定檔、Rombaut2026 對 13 個 scaffold 做 source-code taxonomy、ZhangEtAl2026 對 3.8K bug 做分類、LullaEtAl2026 124 個 PR 對照實驗）；另一條是「生成式工程」（AHE、NLAH、Code-as-Harness、Herding CATs），提出新 harness 原語並在 benchmark 上量測。兩者在 LinEtAl2026 AHE 中正式交會。

### Key findings / 核心發現

| Paper | Harness intervention | Benchmark | Result |
|---|---|---|---|
| `YangEtAl2024` | SWE-agent ACI vs shell-only | SWE-bench Lite | +64% relative resolved rate |
| `LinEtAl2026` | AHE (10 iterations, GPT-5.4) | Terminal-Bench 2 | 69.7% → 77.0% pass@1 (beats Codex-CLI 71.9%) |
| `WuEtAl2025` | Git Context Controller | SWE-bench Verified | +13% resolved; ≥80% overall |
| `YuEtAl2025b` | OrcaLoca priority-scheduled localization | SWE-bench Lite | 65.33% function match rate (open-source SOTA); +6.33pp resolved |
| `SoniEtAl2025` | OpenHands-Versa minimal-tool generalist | SWE-bench MM / GAIA / Agent Company | +9.1 / +1.3 / +9.1 pp over best prior |
| `LullaEtAl2026` | Presence of `AGENTS.md` | 10 repos × 124 PRs | −28.64% median runtime; −16.58% output tokens; comparable success |
| `PanEtAl2026` | NLAH (NL doc) vs code harness | SWE Verified / TB2 / OSWorld | Comparable success; harness size 60.1k → 2.9k tokens (Live-SWE) |
| `AgostinoDSouza2026` | CAT data layer (ALARA) | 22 local models × 115 tasks × ~2500 runs | Tool-access scoping enables generalisable local multi-agent teams |

### Open issues / 未解問題

The most important open question is *how harnesses transfer*. LinEtAl2026's AHE harness "transfers without re-evolution" across base-model families with +5.1 to +10.1pp gains and 12% fewer tokens, but the AHE step budget was fitted to one model and cross-model transfer numbers were not exhaustive. Rombaut2026 explicitly avoids ranking the 13 scaffolds because confounds (model, prompt, evaluation setup) make leaderboard comparisons unreliable — a methodological caution that the rest of the cluster largely ignores. There is also no published controlled comparison of `AGENTS.md` vs `CLAUDE.md` vs `SKILL.md` styles; LullaEtAl2026 is the only paper that experimentally manipulates a configuration document, and it only studies presence/absence.

最重要的未解問題是「harness 是否可移植」：AHE 宣稱跨 base model 仍提升 5–10pp 但測試規模有限；Rombaut2026 刻意不對 13 個 scaffold 排名，因為混淆變數使得 leaderboard 不可信。`AGENTS.md` vs `CLAUDE.md` vs `SKILL.md` 三種設定文件風格的對照研究目前文獻空白，LullaEtAl2026 只測了「有 vs 沒有」。

### Anchor system connection / 錨點系統關聯

This is the theme where the user's anchor systems are most heavily represented. **Claude Code** appears directly in LiuEtAl2026 (full architectural reverse-engineering of the public TypeScript source), SantosEtAl2025 (empirical study of 328 CLAUDE.md configs), and as a *comparator* in SenEtAl2026 (grep vs vector across Claude Code / Codex / Gemini CLI), ZhangEtAl2026 (3.8K-bug study), LullaEtAl2026 (AGENTS.md), and LiEtAl2026 (932K Agentic-PRs). **OpenClaw / OpenHands** is the anchor for WangEtAl2024c (platform), WangEtAl2025c (SDK redesign with explicit `openhands.sdk` / `openhands.tools` / `openhands.workspace` / `openhands.agent_server` four-package architecture, native sandboxed execution, local-to-remote portability), and SoniEtAl2025 (OpenHands-Versa generalist). **hermes-agent** did *not* surface as a primary subject in any of the 58 reading notes; this is an evidence gap the user should be aware of.

這是錨點系統覆蓋最完整的主題。Claude Code 在 LiuEtAl2026（原始碼級分析）、SantosEtAl2025（328 個 config 實證）以及多篇對照研究中出現；OpenClaw / OpenHands 由 WangEtAl2024c、WangEtAl2025c、SoniEtAl2025 三篇直接覆蓋；hermes-agent 在 58 篇中未出現，是已知的證據缺口。

---

## Theme 2: Context & Memory Engineering for Long-Horizon Agents / 長時序 Agent 的 Context 與 Memory 工程

**Papers / 論文 (11):** `ZhangEtAl2025a` (ACE — Agentic Context Engineering), `LindenbauerEtAl2025` (Complexity Trap / observation masking), `WuEtAl2025` (Git Context Controller), `Verma2026` (Active Context Compression), `NguyenEtAl2026` (ByteRover agent-native memory), `LiEtAl2025` (Haystack Engineering / HaystackCraft), `Yuksel2025` (PAACE plan-aware compression), `JiaEtAl2026` (Structural Context Model), `Haseeb2025` (Multi-agent context engineering for Claude Code), `RoyEtAl2026` (CEDAR for data science), `ZhouEtAl2026` (Externalization review)

### Landscape / 現況

This is the theme that has matured fastest in the 2025–2026 window. ZhangEtAl2025a coined "Agentic Context Engineering" (ACE) as a discipline and immediately showed +10.6% on AppWorld and +8.6% on finance reasoning, while reducing adaptation latency by 86.9%. Multiple distinct *philosophies* of context management have crystallised in the corpus: (a) *evolving playbooks* (ACE — incremental, structured, append-friendly), (b) *version-controlled snapshots* (WuEtAl2025 GCC — COMMIT/BRANCH/MERGE on context), (c) *active compression and pruning* (Verma2026 ACC: 22.7% token reduction at constant SWE-bench performance; Yuksel2025 PAACE: 35–60% token reduction at <8% latency penalty), (d) *agent-native curated memory* (NguyenEtAl2026 ByteRover, externalising the entire context tree under domain/topic/subtopic/entry with Adaptive Knowledge Lifecycle), (e) *simple masking heuristics* (LindenbauerEtAl2025 — observation masking matches LLM summarisation at half the cost), and (f) *formalisation* (JiaEtAl2026 Structural Context Model, +32pp on dynamic problem-solving). ZhouEtAl2026 stitches these together by arguing that memory, skills, protocols, and harness are four coupled forms of *externalisation* — capability moved out of model weights and into governed surfaces around the model.

本主題在 2025–2026 之間發展最快。ZhangEtAl2025a 把 "Agentic Context Engineering" 立為一門學科，並在 AppWorld 上取得 +10.6%、finance 上 +8.6% 提升。在這條主題下，context 管理已分化出至少六種哲學：(a) 演化型 playbook（ACE）；(b) 版本控制式 snapshot（GCC）；(c) 主動壓縮與修剪（ACC、PAACE）；(d) Agent-native 策展記憶（ByteRover）；(e) 極簡 heuristic（observation masking）；(f) 形式化（Structural Context Model）。ZhouEtAl2026 統合這些做法為「externalisation」框架。

### Methodological patterns / 方法論模式

The cluster shows convergence on a small set of evaluation surfaces: SWE-bench / SWE-bench Verified (LindenbauerEtAl2025, WuEtAl2025, Verma2026), AppWorld (ZhangEtAl2025a, Yuksel2025), and LongMemEval / LoCoMo for memory-specific work (NguyenEtAl2026). Where ablations are reported they almost always isolate context length, token cost, or both — reflecting how strongly *cost-per-success* has replaced *raw success* as the unit of progress. The corpus also marks a methodological shift away from training-time interventions: ZhangEtAl2025a explicitly notes that ACE "adapts effectively without labeled supervision … by leveraging natural execution feedback", and LindenbauerEtAl2025 frames its whole contribution as inference-time substitution.

評估面已收斂到少數 benchmark（SWE-bench、AppWorld、LongMemEval），且都以 token-cost 為主要進步單位而非單純成功率。文獻同時轉向 inference-time 策略，避免 retraining。

### Key findings / 核心發現

| Paper | Mechanism | Outcome |
|---|---|---|
| `ZhangEtAl2025a` (ACE) | Incremental playbook update | +10.6% AppWorld, +8.6% finance, −86.9% adaptation latency |
| `WuEtAl2025` (GCC) | Git-style branching of context | +13% SWE-bench Verified resolved; >80% absolute |
| `LindenbauerEtAl2025` | Observation masking | ≈50% cost cut at parity vs LLM-Summary; hybrid −7…−11% extra |
| `Verma2026` (ACC) | Autonomous consolidation/pruning | −22.7% tokens at constant SWE-bench performance |
| `Yuksel2025` (PAACE) | Plan-aware next-k-task compression | −35…−60% input tokens at <8% latency cost; PAACE-FT keeps 97% of teacher |
| `NguyenEtAl2026` (ByteRover) | Agent-curated hierarchical memory | SOTA on LoCoMo, competitive on LongMemEval, no vector DB |
| `LiEtAl2025` (HaystackCraft) | Realistic noisy long-context benchmark | Even Gemini 2.5 Pro / GPT-5 show cascading agentic failure |
| `JiaEtAl2026` | Structural Context Model | +32pp success rate on dynamic problem-solving |
| `Haseeb2025` | Multi-agent context workflow on Claude Code | Higher single-shot success on real Next.js repo |

### Open issues / 未解問題

The cluster's biggest open issue is the *coupling between context strategy and harness*. SenEtAl2026 shows that even grep vs. vector retrieval — a context choice — has very different effects under Claude Code vs Codex vs Gemini CLI; LindenbauerEtAl2025 only validates observation masking on SE workloads and explicitly cautions against generalising to domains where tool outputs are succinct. NguyenEtAl2026 (ByteRover) and ZhangEtAl2025a (ACE) have not been directly compared. Beyond that, the field has no consensus answer to *when an agent should compress* — every paper uses a different trigger (token threshold, plan-step boundary, manual command).

主要未解問題是「context 策略與 harness 強耦合」：同一個 retrieval 選擇在不同 harness 下表現差異極大；且 ByteRover 與 ACE 兩種主流外部記憶尚無直接對照。何時該壓縮 context 仍無共識，每篇用不同 trigger。

### Anchor system connection / 錨點系統關聯

Claude Code is the substrate that several papers in this theme either *use* (Haseeb2025 builds a context-engineering multi-agent workflow on Claude Code) or *measure* (SenEtAl2026 retrieval study includes Claude Code). OpenHands appears as the context-management substrate in LindenbauerEtAl2025 (replication of masking findings) and in Verma2026's SWE-bench setup. hermes-agent is absent.

---

## Theme 3: MCP & Tool / Protocol Ecosystem / MCP 與工具／協定生態

**Papers / 論文 (11):** `Ray2025` (MCP survey), `EhteshamEtAl2025` (MCP / ACP / A2A / ANP protocol comparison), `LuoEtAl2025b` (MCP-Universe benchmark), `FanEtAl2025` (MCPToolBench++), `GuoEtAl2025` (MCP-AgentBench), `LumerEtAl2025` (ScaleMCP), `AhmadiEtAl2025` (MCP Bridge), `KulkarniEtAl2026` (FAME / FaaS MCP), `RadosevichHalloran2025` (MCP Safety Audit), `SongEtAl2025a` (Attack vectors in MCP ecosystem), `ZhangEtAl2025b` (MCP Security Bench / MSB), `XingEtAl2025` (MCP-Guard defense pipeline)

> Note: Theme 3 has 12 papers — XingEtAl2025 is grouped here because its primary contribution (a defense framework) belongs to the MCP cluster, even though Step-2 placed it in `mcp_and_tool_protocols`.

### Landscape / 現況

MCP has become, within roughly 18 months of Anthropic's release, the de facto integration layer for agentic tool access — what LuoEtAl2025b calls the "USB-C of AI" and what Ray2025 frames as the answer to three long-standing barriers (stateless interfaces, ad-hoc security, no unified multi-turn context mechanism). The corpus splits into three sub-currents. *Infrastructure*: Ray2025, EhteshamEtAl2025 (which positions MCP as the first phase in a 4-protocol roadmap MCP → ACP → A2A → ANP), AhmadiEtAl2025 (MCP Bridge — RESTful proxy with 3-tier risk model), LumerEtAl2025 (ScaleMCP, dynamic retrieval over 5K MCP servers), KulkarniEtAl2026 (FAME, ReAct decomposed into FaaS Planner/Actor/Evaluator). *Benchmarks*: LuoEtAl2025b (MCP-Universe, 231 tasks × 11 servers × 6 domains, GPT-5 at 43.72% success), FanEtAl2025 (MCPToolBench++, 4K+ servers across 40+ categories), GuoEtAl2025 (MCP-AgentBench, 600 queries × 33 servers; Qwen3-235B-A22B beats proprietary). *Security*: RadosevichHalloran2025 (MCPSafetyScanner demonstrating malicious code execution / remote access / credential theft), SongEtAl2025a (4-category attack taxonomy + 20-person user study showing users cannot identify malicious servers), ZhangEtAl2025b (MSB, 12 attacks × 9 agents × 10 domains × 405 tools = 2000 attack instances; overall ASR 40.35%), XingEtAl2025 (MCP-Guard 3-stage defense reaching 96.01% adversarial-prompt detection on MCP-AttackBench / 70,448 samples).

MCP 已在大約 18 個月內成為 agent tool-access 的事實標準。文獻分三條主流：基礎設施（Ray2025、AhmadiEtAl2025、LumerEtAl2025、KulkarniEtAl2026）、評估基準（LuoEtAl2025b、FanEtAl2025、GuoEtAl2025）、安全（RadosevichHalloran2025、SongEtAl2025a、ZhangEtAl2025b、XingEtAl2025）。

### Methodological patterns / 方法論模式

Two patterns dominate. First, *execution-based evaluation* (LuoEtAl2025b, GuoEtAl2025, FanEtAl2025) — measuring what an agent *did* against real MCP servers rather than scoring tool-call strings — has become the methodological norm; simulation-only benchmarks are now treated as inadequate. Second, *open-weights competitiveness* on MCP tasks is a recurring finding: GuoEtAl2025 reports Qwen3-235B-A22B leading MCP-AgentBench overall, and AhmadiEtAl2025 reports fine-tuned Qwen3 (4B/8B) hitting F1 73.0% on MCPToolBench++ vs GPT-OSS-120B's 62.17% — both directly relevant for the user's local PICO. Security work has converged on attack taxonomies (4 categories in SongEtAl2025a, 12 in ZhangEtAl2025b) plus end-to-end attack execution against real MCP aggregator platforms.

兩個主要方法論：一是 execution-based 評估已取代純模擬指標；二是開源模型在 MCP 任務上展現競爭力（Qwen3 系列領先），對 local 部署是直接利多。安全研究則收斂到攻擊分類學（4 類 / 12 類）加上端到端攻擊實證。

### Key findings / 核心發現

| Paper | Contribution | Key number |
|---|---|---|
| `LuoEtAl2025b` (MCP-Universe) | 231 tasks × 11 servers × 6 domains | GPT-5 43.72%, Grok-4 33.33%, Claude-4-Sonnet 29.44% |
| `FanEtAl2025` (MCPToolBench++) | 4K+ MCP servers × 40+ categories | Qwen3-coder top AST in Browser/Map; Qwen2.5-max top in FS/Finance |
| `GuoEtAl2025` (MCP-AgentBench) | 600 queries × 33 servers × 188 tools | Open-source Qwen3-235B-A22B (ReAct) tops overall |
| `AhmadiEtAl2025` (MCP Bridge) | Fine-tuned Qwen3 + RL (GRPO/DAPO/etc.) | F1 73.0% vs GPT-OSS-120B 62.17% on MCPToolBench++ |
| `KulkarniEtAl2026` (FAME) | FaaS-decomposed ReAct | 13× latency cut, −88% input tokens, −66% cost |
| `LumerEtAl2025` (ScaleMCP) | Dynamic CRUD-synced tool retrieval | Tested across 5K financial-metric servers, multi-LLM × multi-embedding ablation |
| `RadosevichHalloran2025` | Demonstrated MCP attacks (RCE, credential theft) + MCPSafetyScanner | First end-to-end MCP attack tool |
| `SongEtAl2025a` | 4-category attack taxonomy + 20-user study | Users cannot reliably identify malicious servers |
| `ZhangEtAl2025b` (MSB) | 12 attacks × 9 agents × 405 tools | Average ASR 40.35%; OP attack 76.5% ASR; stronger models more vulnerable |
| `XingEtAl2025` (MCP-Guard) | 3-stage defense + 70K-sample benchmark | 96.01% adversarial-prompt detection accuracy |

### Open issues / 未解問題

The most striking pattern is that *MCP capability and MCP security are advancing in opposite directions*. Capability benchmarks find that even top models top out around 43% success on real MCP servers (LuoEtAl2025b); security benchmarks find that the same systems are highly exploitable (ZhangEtAl2025b overall 40.35% ASR; "stronger models more vulnerable"). No paper in the shortlist measures both axes for the same system, so the field cannot yet tell whether security defenses (XingEtAl2025) cost task performance, and how much. EhteshamEtAl2025's phased roadmap (MCP → ACP → A2A → ANP) is a proposal, not an evaluation — multi-protocol comparisons are absent.

最戲劇性的觀察是「MCP 能力」與「MCP 安全」朝相反方向發展：能力 benchmark 顯示頂尖模型只能達 ~43% 成功率，安全 benchmark 顯示同樣這些系統 ASR 約 40%。目前沒有論文在同一系統上同時量測兩軸。

### Anchor system connection / 錨點系統關聯

Claude Code is evaluated on MCP servers in LuoEtAl2025b (43.72% Claude-4-Sonnet) and is a target system in ZhangEtAl2025b. OpenHands integrates MCP natively in its SDK (WangEtAl2025c §4.4 Tool System / MCP), and AhmadiEtAl2025's MCP Bridge is precisely the layer that an OpenHands-style local agent would deploy in front of multiple MCP servers. hermes-agent does not appear.

---

## Theme 4: Agent Benchmarks, Empirical Studies & Reproducibility / Agent 基準、實證研究與可重現性

**Papers / 論文 (9):** `Jimenez-GomezEtAl2023` (SWE-bench), `ZhangEtAl2025c` (SWE-bench-Live), `QiuEtAl2025b` (LoCoBench-Agent), `LiEtAl2025` (HaystackCraft — also Theme 2), `ZhuEtAl2025` (OAgents empirical study), `LiEtAl2026` (AIDev / 932K Agentic-PRs), `ZhangEtAl2026` (Engineering Pitfalls 3.8K bugs), `YehudaiEtAl2025` (Evaluation survey), `MohammadiEtAl2025` (abstract only — KDD eval taxonomy)

### Landscape / 現況

The benchmark landscape has both *consolidated* and *destabilised* itself in the past three years. Consolidated, because SWE-bench (Jimenez-GomezEtAl2023, 2,294 issues × 12 Python repos) has become the unavoidable backbone — it is referenced by 10 of the 58 papers (the highest in-degree in the corpus). Destabilised, because every recent paper that revisits SWE-bench reports *the saturation problem*: ZhangEtAl2025c (SWE-bench-Live) shows that 1,319 fresh post-2024 issues across 93 repos drop top-model resolved rate from >60% on SWE-bench Verified to 19.25% on SWE-bench-Live — a stark contamination/recency signal. QiuEtAl2025b (LoCoBench-Agent) extends to 8,000 long-context interactive scenarios with 9 metrics, and reveals counter-intuitive findings (128K-context models outperform 1M-context models on multi-session retention, despite 8× fewer tokens). LiEtAl2025's HaystackCraft is the first benchmark to inject *cascading agentic errors* into long-context evaluation. The reproducibility crisis is named most directly by ZhuEtAl2025 (OAgents): "the lack of a standard evaluation protocol makes previous works, even open-sourced ones, non-reproducible, with significant variance between random runs." LiEtAl2026 (AIDev) supplies the largest empirical observation set in the literature: 932,791 agentic PRs across 116,211 repositories from Codex / Devin / GitHub Copilot / Cursor / Claude Code. ZhangEtAl2026 inverts the lens and looks at *failure* — 3.8K bugs across Claude Code / Codex / Gemini CLI, with 36.9% rooted in API/integration errors. The two evaluation surveys (YehudaiEtAl2025, MohammadiEtAl2025) provide taxonomy but flag the same gap: lack of fine-grained, scalable, cost-aware evaluation.

過去三年 benchmark 同時「整合」與「動搖」。整合的一面：SWE-bench 是被引最多（in-degree=10）的論文。動搖的一面：每篇新做 SWE-bench 的論文都指出 saturation / contamination 問題——ZhangEtAl2025c 顯示 top model 在 SWE-bench-Live 上跌到 19.25%；QiuEtAl2025b 發現 128K context 反而比 1M context 更會記事。可重現性危機由 ZhuEtAl2025 直接點名：缺乏標準 eval protocol 使既有研究不可重現。LiEtAl2026 提供 932K agentic PR 大資料集；ZhangEtAl2026 從 bug 反向看 reliability。

### Methodological patterns / 方法論模式

The cluster's defining methodological move is the shift from static, curated test sets toward *live, executable, observation-based* benchmarks. ZhangEtAl2025c automates curation so SWE-bench can update continuously; LuoEtAl2025b (Theme 3) builds execution-based evaluators that retrieve real-time ground truth; QiuEtAl2025b builds an interactive 8K-scenario environment with 8 specialized tools; ZhuEtAl2025 introduces a standardised protocol expressly to stabilise variance. There is also a shift from *aggregate scores* toward *cost-of-pass* and per-dimension metrics (efficiency, comprehension, robustness, safety).

### Key findings / 核心發現

| Paper | Scale | Key finding |
|---|---|---|
| `Jimenez-GomezEtAl2023` (SWE-bench) | 2,294 issues × 12 repos | Best LM (Claude 2) at release: 1.96% resolved |
| `ZhangEtAl2025c` (SWE-bench-Live) | 1,319 post-2024 tasks × 93 repos | Top SOTA agents drop to 19.25% (vs >60% on Verified) |
| `QiuEtAl2025b` (LoCoBench-Agent) | 8,000 scenarios, 10K–1M tokens | 128K-context models > 1M-context on multi-session retention |
| `LiEtAl2025` (HaystackCraft) | Wikipedia hyperlink graph | Gemini 2.5 Pro / GPT-5 suffer cascading agentic failure |
| `ZhuEtAl2025` (OAgents) | GAIA + BrowseComp | OAgents-Pass@3 highest average 73.93%; large random-run variance |
| `LiEtAl2026` (AIDev) | 932,791 Agentic-PRs × 116K repos | First large-scale comparative dataset of Codex/Devin/Copilot/Cursor/Claude Code |
| `ZhangEtAl2026` | 3.8K bugs × 3 tools | >67% bugs are functionality; 36.9% root cause API/integration; 18.3% API errors |
| `YehudaiEtAl2025` | 5-perspective taxonomy | Identifies cost-efficiency / safety / robustness as critical eval gaps |

### Open issues / 未解問題

Two things are missing. First, almost no benchmark in the corpus reports *cost-per-success* as a primary outcome — WangEtAl2025a (Efficient Agents, Theme 6) is one of the few that does. Second, ZhuEtAl2025 documents the variance problem but does not yet have a published standardised harness adoption rate; OAgents is too new for the rest of the literature to have re-evaluated against it. The "engineering" empirical studies (LiEtAl2026, ZhangEtAl2026, SantosEtAl2025, LullaEtAl2026) are heavily concentrated on Claude Code; equivalent OpenHands or self-hosted-agent studies are absent.

兩個未解問題：(1) 幾乎沒有 benchmark 以 cost-per-success 為主要指標；(2) 大型實證研究高度集中於 Claude Code，OpenHands 或 self-hosted agent 的對照研究空白。

### Anchor system connection / 錨點系統關聯

SWE-bench was *built around* the kind of repositories Claude Code and OpenHands now agent-on. LiEtAl2026 (AIDev) is the only paper that comparatively studies Claude Code alongside its peers (Codex/Devin/Copilot/Cursor) at scale. OpenHands appears in the methodology of LindenbauerEtAl2025 and indirectly in QiuEtAl2025b. hermes-agent is again absent.

---

## Theme 5: Generalist & Self-Improving Agent Frameworks / 通用型與自我演化 Agent 框架

**Papers / 論文 (9):** `FourneyEtAl2024` (Magentic-One), `QiuEtAl2025a` (Alita), `WangEtAl2025b` (Huxley-Gödel Machine), `TangEtAl2025` (AutoAgent), `YuEtAl2025a` (AWorld), `SoniEtAl2025` (OpenHands-Versa), `Wu2025` (Autono), `RamaEtAl2025` (Cerebrum / AIOS SDK), `WangEtAl2024a` (LLM-agent survey)

### Landscape / 現況

This is the theme the Step-2 clustering had distributed across `coding_agents_and_harness` and `benchmarks_and_evaluation`, but the papers form a clear cross-cluster strand: agents that *self-construct capabilities*, *self-improve their own scaffolds*, or *generalise across task families*. WangEtAl2024a is the umbrella reference (1,058 citations, the most-cited paper in the corpus) and provides the profile / memory / planning / action framework that almost every later system inherits. FourneyEtAl2024 (Magentic-One) demonstrates the *orchestrator + specialists* pattern that achieves competitive performance on GAIA / AssistantBench / WebArena. QiuEtAl2025a (Alita) pushes "minimal predefinition / maximal self-evolution" to 75.15% pass@1 and 87.27% pass@3 on GAIA validation — top among general-purpose agents in 2025. WangEtAl2025b (Huxley-Gödel Machine) introduces the *clade metric* (CMP) for picking which self-modifications to keep and reaches human-level performance on SWE-bench Verified with GPT-5-mini. TangEtAl2025 (AutoAgent) attacks accessibility — natural-language-only agent creation in a "zero-code framework". YuEtAl2025a (AWorld) is an open-source training-recipe system whose Qwen3-32B agent hits 32.23% pass@1 on GAIA test, *beating GPT-4o (27.91%)* — a direct demonstration that locally-trainable agents can match or exceed proprietary ones. SoniEtAl2025 (OpenHands-Versa) is the *minimalist* counter-example: with only four general tools (code, search, browse, file-access) it surpasses leading specialised agents on SWE-Bench Multimodal / GAIA / The Agent Company (+9.1, +1.3, +9.1 pp). Wu2025 (Autono) and RamaEtAl2025 (Cerebrum) provide concrete framework artifacts.

這個主題涵蓋「會自己長能力／自己改 scaffold／跨任務通用」的 agent。WangEtAl2024a 是傘狀引用基礎（1,058 cites）。Magentic-One 證明 orchestrator + 專家 agent 模式；Alita 在 GAIA 達 pass@1 75.15%；Huxley-Gödel Machine 用 clade metric 達 SWE-bench Verified 人類水準；AWorld 訓的 Qwen3-32B 在 GAIA 上 32.23% 超越 GPT-4o（27.91%）；OpenHands-Versa 用四個極簡 tool 通殺三個 benchmark。

### Methodological patterns / 方法論模式

The cluster shows three architectural patterns. (a) *Multi-agent orchestration with role specialisation* — Magentic-One (Orchestrator + FileSurfer/WebSurfer/Coder/ComputerTerminal), Cerebrum, AutoAgent. (b) *Self-evolution via search over self-modifications* — Huxley-Gödel Machine (tree of self-modifications guided by CMP), Alita (autonomous capability construction generating new MCPs at runtime), LinEtAl2026 AHE (auto-evolving harness — methodologically belongs here as well as Theme 1). (c) *Minimalist generalists* — OpenHands-Versa (4 tools), Alita ("simplicity is the ultimate sophistication"). Methodologically, GAIA and BrowseComp are the dominant evaluation surfaces; cost-of-pass appears in WangEtAl2025a (Theme 6).

三個架構模式：(a) 多 agent + 角色分工；(b) 透過對「自身修改」做搜尋來自演化；(c) 極簡通才（少工具勝多工具）。GAIA + BrowseComp 是主要評估面。

### Key findings / 核心發現

| Paper | System | Result |
|---|---|---|
| `FourneyEtAl2024` (Magentic-One) | Orchestrator + 4 specialist agents | Competitive on GAIA / AssistantBench / WebArena; 35.1% val on GAIA |
| `QiuEtAl2025a` (Alita) | Min-predefinition, max self-evolution | GAIA validation pass@1 75.15%, pass@3 87.27% |
| `WangEtAl2025b` (HGM) | Clade-metric-guided self-improvement | SWE-bench Verified human-level (GPT-5-mini); strong transfer |
| `YuEtAl2025a` (AWorld) | Open-source training recipe | Qwen3-32B 32.23% GAIA pass@1 > GPT-4o 27.91% |
| `SoniEtAl2025` (OpenHands-Versa) | 4-tool minimalist generalist | +9.1 / +1.3 / +9.1 pp over best prior on SWE-Bench MM / GAIA / Agent Company |
| `TangEtAl2025` (AutoAgent) | Zero-code natural-language agent creation | Top open-source on GAIA |
| `ZhuEtAl2025` (OAgents) | Empirical component-design study | OAgents-Pass@3 73.93% on GAIA; named reproducibility crisis |

### Open issues / 未解問題

The cluster has not converged on a controlled comparison of *self-evolving* (HGM, Alita, AHE) vs *fixed-but-well-engineered* (OpenHands-Versa, OAgents) agents on the same task distribution. Both regularly hit SOTA on different benchmarks. The cost-of-evolution question — how many compute-hours / dollars buy each marginal point of self-improvement — is unaddressed. Most of these systems are evaluated with proprietary frontier models in the loop (GPT-5, Claude 4, GPT-4o); only AWorld and Alita's MCP-generation pipeline have been demonstrated end-to-end on open weights.

最大未解問題是「自演化 vs 固定但工程精良」誰勝。兩派都在不同 benchmark 取得 SOTA，但無受控對照。多數系統評估時仍用 proprietary frontier model，只有 AWorld、Alita 的部分流程在 open weights 上端到端驗證。

### Anchor system connection / 錨點系統關聯

OpenHands appears directly as the substrate for OpenHands-Versa (SoniEtAl2025) and OpenHands SDK (WangEtAl2025c, Theme 1). Claude Code is the comparator for several of these frameworks via shared benchmarks (GAIA, SWE-bench Verified) rather than as a tested system. hermes-agent absent.

---

## Theme 6: Local Inference & Cost-Efficient Serving Infrastructure / 本地推論與低成本服務基礎設施

**Papers / 論文 (5):** `LinEtAl2023` (AWQ), `SongEtAl2025b` (SmallThinker), `LuoEtAl2025a` (Autellix), `WangEtAl2025a` (Efficient Agents), `KulkarniEtAl2026` (FAME — also Theme 3)

### Landscape / 現況

This is the smallest theme but the only one that touches the *model* and *infrastructure* layers of the PICO. LinEtAl2023 (AWQ) is the field's quantisation baseline — activation-aware weight quantisation that protects ~1% salient channels and achieves 3× speedup on mobile GPUs. SongEtAl2025b (SmallThinker) extends to *natively-trained* local LLMs: sparse-MoE with quantisation support hitting 20+ tokens/s on consumer CPUs. These are the building blocks that make AgostinoDSouza2026 (Theme 1, 22 locally-hosted models × 115 tasks) and AhmadiEtAl2025 (Theme 3, fine-tuned Qwen3 beating GPT-OSS-120B) practically feasible. LuoEtAl2025a (Autellix) tackles the serving side: an LLM serving engine that treats *programs* as first-class citizens, achieving 4–15× throughput at the same latency over vLLM. KulkarniEtAl2026 (FAME) gives 13× latency reduction, 88% fewer input tokens, 66% cost savings by decomposing ReAct into FaaS Planner/Actor/Evaluator. WangEtAl2025a (Efficient Agents) is the cost-aware framework reference: 96.7% of OWL's performance at $0.228/task vs $0.398 (−28.4% cost-of-pass).

這個主題小但獨特：唯一觸及 model / infrastructure 層的主題。AWQ 是量化基線；SmallThinker 把架構為本機部署而生（消費 CPU 上 20+ tokens/s）；Autellix 把 program 當一級公民達 4–15× 吞吐量；WangEtAl2025a 用 cost-of-pass 量化效率—效能取捨。

### Methodological patterns / 方法論模式

Two patterns: (a) *protect-the-important / quantise-the-rest* at the model level (AWQ, SmallThinker MoE+quantisation), and (b) *program-aware scheduling* at the serving level (Autellix, FAME). Both treat the LLM as a fixed asset and optimise everything around it — which mirrors the Theme 1 thesis that the harness is the main lever.

兩個模式：模型層「保護重要、量化其他」（AWQ、SmallThinker）；服務層「程式感知排程」（Autellix、FAME）。兩者都把 LLM 視為固定資產，優化周邊——與 Theme 1 的 harness 論點同構。

### Key findings / 核心發現

| Paper | Layer | Result |
|---|---|---|
| `LinEtAl2023` (AWQ) | Quantisation | 3× speedup on mobile GPUs; <1% salient channels protected |
| `SongEtAl2025b` (SmallThinker) | Model architecture | Sparse MoE + quant → 20+ tokens/s on consumer CPU |
| `LuoEtAl2025a` (Autellix) | LLM serving | 4–15× program throughput vs vLLM-class serving |
| `KulkarniEtAl2026` (FAME) | FaaS / MCP serving | 13× latency cut, −88% input tokens, −66% cost |
| `WangEtAl2025a` (Efficient Agents) | Framework | 96.7% of OWL at $0.228 (vs $0.398) = −28.4% cost-of-pass |

### Open issues / 未解问题

The cluster is thin relative to the rest of the corpus and to the PICO weight on locality. AWQ is from 2023; the next quantisation paper that explicitly tests *agentic* workloads (e.g., long tool-call trajectories with cached prefixes) is missing. SmallThinker is the only natively-local model architecture paper in the shortlist — there is no comparison paper that benchmarks SmallThinker-class models inside Theme-1 harnesses on Theme-4 benchmarks. The "cost-of-pass" metric (WangEtAl2025a) has not yet propagated into Theme-2 / Theme-3 evaluations.

這是相對於 PICO 上 *local* 的份量來看顯得最薄的主題：AWQ 已是 2023 年作品，沒有後續 agentic-workload-aware 量化論文；SmallThinker 在 Theme-1 harness × Theme-4 benchmark 上的端到端評估缺席；cost-of-pass 指標還沒在 Theme 2 / 3 普及。

### Anchor system connection / 錨點系統關聯

None of these papers studies Claude Code, OpenClaw/OpenHands, or hermes-agent directly. AgostinoDSouza2026 (Theme 1) is the bridge — it cites AWQ and runs 22 locally-hosted models in a harness. WangEtAl2025c (OpenHands SDK) addresses the serving / sandbox-portability concern infrastructurally but not at the quantisation/serving-engine level that Autellix and FAME work on.

---

## Cross-Theme Synthesis / 跨主題整合

### 1. Harness engineering and context engineering are converging into the same discipline

Theme 1 and Theme 2 increasingly cite each other and use overlapping methods. LinEtAl2026 (AHE, Theme 1) lists *Skills / Memory / Sub-agent / History / Tools / Middleware / System Prompt* as the seven editable harness components — i.e., the harness *is* the context plus its assembly logic. ZhangEtAl2025a's ACE (Theme 2) treats the system prompt as an evolving playbook — i.e., context strategy *is* a harness component. ZhouEtAl2026 makes the unification explicit (memory / skills / protocols / harness as four coupled forms of externalisation). The practical implication is that "context engineering" and "harness engineering" should be designed *together*, not in serial layers — which is precisely what the SOTA systems (AHE, OpenHands SDK, Claude Code) already do.

Theme 1 與 Theme 2 在 2025-2026 之間快速融合。AHE 把 skills/memory/tools/middleware/prompt 一起當 harness 組件；ACE 把 system prompt 當演化 playbook；ZhouEtAl2026 統合為 *externalisation*。意味著 context 與 harness 必須一起設計。

### 2. "Simple beats fancy" is now a measurable, repeated finding — not a slogan

Across themes, *complexity-minimising* designs repeatedly match or beat *complexity-maximising* ones, with cost wins:
- LindenbauerEtAl2025: observation masking matches LLM summarisation at ½ cost (Theme 2)
- SenEtAl2026: grep beats vector retrieval across three CLIs (Theme 1)
- SoniEtAl2025: 4-tool generalist beats specialised agents on 3 benchmarks (Theme 5)
- LullaEtAl2026: just adding `AGENTS.md` cuts runtime 28.64% (Theme 1)
- PanEtAl2026: 2.9k-token NL harness ≈ 60.1k-token code harness (Theme 1)
- LiuEtAl2026: Claude Code's core is a "simple while-loop" (Theme 1)
- QiuEtAl2025a: "Simplicity is the ultimate sophistication" + 75.15% GAIA (Theme 5)

This is the strongest converging finding in the entire corpus. It directly informs the user's "how to build" question: starting minimal and adding only what observability shows is missing is better-supported by the literature than starting from a heavy framework.

跨主題最強的匯聚發現：「簡單者勝」已從口號變成可量測的反覆結果（observation masking、grep、4-tool generalist、AGENTS.md、NL harness、while-loop、Alita）。對 user 的工程問題直接含意：從極簡出發、觀察缺什麼再加，比一開始就引入重型框架更有文獻支撐。

### 3. Self-improving agents and externalised infrastructure are two views of the same shift

Theme 5's "self-improving" papers (HGM, Alita, AHE, AutoAgent) and Theme 1/2's "externalised harness/context" papers (ZhouEtAl2026, NingEtAl2026, PanEtAl2026, ZhangEtAl2025a) are doing the same thing from opposite directions: the externalisation papers say *the model stops changing, the surrounding layers change*; the self-improving papers add *the surrounding layers are changed by another agent, not a human*. Putting them together suggests the SOTA target is a system in which the harness, context, skills, and tools are continuously edited — sometimes by humans (LullaEtAl2026, SantosEtAl2025), sometimes by another agent (LinEtAl2026, Wang2025b), sometimes by the agent itself (ZhangEtAl2025a, QiuEtAl2025a). This is exactly what Claude Code already does in practice with its `/skill`, hooks, subagents, and `CLAUDE.md` mechanisms — but the literature still lags the product.

「自我演化」與「externalisation」是同一個現象的兩個視角：模型不變、周邊變。差別只在「周邊由誰來改」（人類、另一個 agent、自身）。三者合起來的 SOTA 目標就是 Claude Code 已在實作的 `/skill` / hooks / subagents / `CLAUDE.md`，但學界文獻仍落後產品。

### 4. The MCP capability/security divergence is the field's biggest unhealed crack

Theme 3 capability benchmarks (LuoEtAl2025b, FanEtAl2025, GuoEtAl2025) and Theme 3 security benchmarks (RadosevichHalloran2025, SongEtAl2025a, ZhangEtAl2025b, XingEtAl2025) advance in parallel but do not cross. ZhangEtAl2025b explicitly observes "models with stronger performance are more vulnerable to attacks due to their outstanding tool calling and instruction following capabilities" — yet capability papers report no security results. No paper in the corpus measures *both* on the same system. This is a structural gap, not a missing reference.

最大裂縫：MCP 能力與安全兩條線平行推進但沒交會。ZhangEtAl2025b 點出「能力越強的模型越脆弱」，但能力 benchmark 完全不報安全。沒有任何一篇在同系統上同時量兩軸——這是結構性空白。

### 5. Locally-runnable open-weights agents are quietly matching proprietary frontiers — but mostly outside coding

The corpus contains at least four independent demonstrations that open-weights / locally-runnable systems beat or match proprietary baselines on agent tasks: AhmadiEtAl2025 (Qwen3-4B/8B F1 73.0% > GPT-OSS-120B on MCPToolBench++), GuoEtAl2025 (Qwen3-235B-A22B tops MCP-AgentBench overall), YuEtAl2025a (AWorld's Qwen3-32B 32.23% > GPT-4o 27.91% on GAIA), and AgostinoDSouza2026 (22 locally-hosted models across 115 tasks). On *coding* benchmarks, however, the leaderboard is still dominated by harnessed proprietary models (GPT-5, Claude 4.0-Sonnet). The literature does not yet contain a paper that combines a SmallThinker-class local model with a SOTA harness like AHE on SWE-bench Verified — that's a glaring experimental gap.

至少 4 篇獨立論文已證明開源／本地模型在非編碼 agent 任務上能匹敵或勝過 proprietary frontier（Qwen3 在 MCPToolBench++、MCP-AgentBench、GAIA 上的多項結果）。但在 *coding* benchmark 上 SOTA 仍由 proprietary 主導。沒有任何一篇把 SmallThinker 級本地模型放進 AHE 級 harness 在 SWE-bench Verified 上做端到端對照——明顯實驗缺口。

---

## State of the Art Summary / SOTA 整體狀態

### What is established / 已確立

- **The SOTA agent shape is a small while-loop + tool layer + permission/safety gate + externalised configuration/skill/memory** — converged on by LiuEtAl2026, Rombaut2026, NingEtAl2026, PanEtAl2026, WangEtAl2025c (OpenHands SDK).
- **Harness/context engineering produces 5–30% gains while the base model is held constant** — repeatedly measured (LinEtAl2026 +7.3pp, WuEtAl2025 +13%, YuEtAl2025b +6.33pp, LindenbauerEtAl2025 −50% cost at parity, LullaEtAl2026 −28.64% runtime, Verma2026 −22.7% tokens).
- **MCP is now the integration layer** for tool access, with execution-based evaluation as the dominant methodology (Ray2025, LuoEtAl2025b, FanEtAl2025, GuoEtAl2025).
- **Open-weights agents are competitive outside coding**, especially when paired with thoughtful tool/MCP infrastructure (AhmadiEtAl2025, GuoEtAl2025, YuEtAl2025a).
- **Reproducibility variance between random runs is large** and a standardised protocol is needed (ZhuEtAl2025).

### What is contested / 有爭議

- **How much complexity an agent needs.** SOTA can come from minimal-tool generalists (SoniEtAl2025) and observation masking (LindenbauerEtAl2025), but also from elaborate scaffolding (LumerEtAl2025 ScaleMCP, KulkarniEtAl2026 FAME, NguyenEtAl2026 ByteRover).
- **Whether dense retrieval is necessary for long-memory agents.** SenEtAl2026 shows grep wins in many cases; NguyenEtAl2026 designs an agent-curated memory specifically to *avoid* vector DBs; ZhangEtAl2025a's ACE never uses dense retrieval. Counter-positions exist in the broader RAG literature but are largely absent from this shortlist.
- **Whether self-evolution beats human-engineered harnesses.** WangEtAl2025b (HGM) and LinEtAl2026 (AHE) both claim wins over hand-designed harnesses, but on different benchmarks and base models.
- **Whether stronger models are safer or more vulnerable on MCP.** ZhangEtAl2025b explicitly finds *more vulnerable*; capability papers implicitly assume the opposite.

### What is missing / 缺口 (feeds Step 7 gap analysis)

1. *Same-system capability × security measurement on MCP* — no paper in the corpus does both.
2. *Local-model + SOTA-harness end-to-end on coding benchmarks* — e.g., SmallThinker + AHE + OpenHands SDK on SWE-bench Verified. Each component exists; the integration does not.
3. *Controlled comparison of self-evolving vs minimalist-fixed agents on the same task distribution.*
4. *Cost-per-success* as a default metric in context/harness papers (only WangEtAl2025a routinely reports it).
5. *Replication studies of harness-engineering claims on different base models* — Rombaut2026 explicitly notes that 13-scaffold leaderboard comparisons are confounded.
6. *Architectural studies of OpenClaw / OpenHands at the depth that LiuEtAl2026 / SantosEtAl2025 have done for Claude Code.* WangEtAl2025c is the closest, but it is a self-authored architecture paper, not a third-party empirical study.
7. *Studies of `SKILL.md` and slash-command style extension mechanisms.* PanEtAl2026 hints at the design space (NLAH) but no paper directly studies `SKILL.md` files at scale.
8. *Industry tech-blog corpus.* Many SOTA techniques in Claude Code's harness (sub-agent system, hooks, plan mode, etc.) and Cursor's agent are published as engineering blogs / documentation rather than papers — the shortlist necessarily excluded these and that is a known evidence boundary.

主要缺口包括：(1) MCP 能力×安全同系統量測缺；(2) 本地模型+SOTA harness 端到端 coding 評估缺；(3) 自演化 vs 固定極簡對照缺；(4) cost-per-success 未普及；(5) harness 跨 base model 重複實驗缺；(6) OpenClaw/OpenHands 的第三方深度架構研究稀少；(7) `SKILL.md` 等擴展機制的大規模研究空白；(8) 業界工程部落格（Anthropic、Cursor、HuggingFace）系統性研究缺。

---

## Anchor System Status / 錨點系統狀態

- **Claude Code** — heavily covered. LiuEtAl2026 (architectural reverse-engineering from public TypeScript source; 13 design principles; "simple while-loop" core), SantosEtAl2025 (empirical study of 328 CLAUDE.md configs), SenEtAl2026 (grep vs vector benchmark), ZhangEtAl2026 (3.8K-bug failure-mode study), LullaEtAl2026 (AGENTS.md effect), LiEtAl2026 (932K-PR comparative dataset), and used as substrate in Haseeb2025. The user can rely on this evidence base for harness, context, and configuration-file design choices.
- **OpenClaw / OpenHands** — covered at the platform and SDK level. WangEtAl2024c (platform v0; sandboxed execution; 15-benchmark eval), WangEtAl2025c (V1 SDK redesign; nine interlocking components; local-to-remote portability; native MCP), SoniEtAl2025 (OpenHands-Versa minimalist generalist beating prior SOTA). LindenbauerEtAl2025 also replicates findings on the OpenHands scaffold. The user's note that *security-of-OpenClaw* papers were excluded at Step 2 means there is no third-party empirical security study of OpenHands in the shortlist — that is the *biggest* evidence gap on this anchor and a candidate gap for Step 7.
- **hermes-agent** — **not present** in the 58 reading notes. It does not appear as a primary subject, comparator, or background reference in any paper. This is an explicit evidence gap. If the user's working knowledge of hermes-agent is correct, then either (a) hermes-agent is industry-published only (engineering blog / GitHub), or (b) it operates under a different name in the literature. Either way the user should treat hermes-agent as an *unmapped* anchor relative to this corpus.

---

## Implications for Building a SOTA Local Agentic System / 對建造本地 SOTA Agent 系統的啟示

Combining the converging findings into actionable engineering guidance:

1. **Start from a simple while-loop and a small tool set; instrument before you add.** The Claude Code / OpenHands SDK / Rombaut2026 taxonomy / OpenHands-Versa results all converge on this shape. AGENTS.md / CLAUDE.md alone gives measurable wins (LullaEtAl2026 −28.64% runtime).
2. **Treat the harness as the main lever, not the model.** Every double-digit gain in the corpus comes from harness or context change with the base LLM held constant.
3. **Adopt MCP for tool access, but plan for the security gap.** Use MCP Bridge / risk-tiered execution (AhmadiEtAl2025) and a defense layer like MCP-Guard's static + neural detection (XingEtAl2025). Assume your local users cannot identify malicious MCP servers (SongEtAl2025a).
4. **Externalise memory and skills explicitly.** Choose either an agent-native curated approach (ByteRover) or an evolving-playbook approach (ACE) — but do not leave context as an unmanaged token stream. For long-horizon work, version-control it (GCC).
5. **Prefer grep / lexical search first for code and conversation memory.** SenEtAl2026 and ByteRover's no-vector-DB design suggest vector retrieval is not the default win it is often assumed to be.
6. **For local models, AWQ-quantised open-weights (Qwen3 family) + a strong harness is competitive on tool-use tasks** even if not yet on coding. Pair with FAME / Autellix-style serving when scaling.
7. **Budget for evaluation variance.** Adopt an OAgents-style standardised protocol; do not draw conclusions from single runs.
8. **For self-improvement, AHE-style closed-loop observability is the most reproducible recipe in the corpus** — three observability pillars (component / experience / decision), and every edit becomes a falsifiable prediction.

實務建議（綜合所有 convergent 發現）：(1) 從極簡 while-loop + 小工具集開始，先 instrument 再加東西；AGENTS.md 自帶量化收益；(2) 把 harness 視為主要槓桿；(3) 採 MCP 但同時部署 risk-tier + defense；(4) 顯式 externalise memory 與 skills；(5) grep 與 lexical search 是更穩定的預設；(6) 本機 Qwen3 + 量化 + 強 harness 在 tool-use 已具競爭力；(7) 採 OAgents 的標準 eval protocol；(8) 想做 self-improvement 從 AHE 的 observability 三柱開始。

---

## Methodology Legend / 方法學圖例

(Adapted to this corpus — the default colour categories from the skill spec do not all apply, so labels are renamed.)

| Color / 顏色 | Methodology / 方法學 | Count / 數量 |
|-------------|---------------------|-------------|
| 🟠 Orange (2) | Engineering / system contribution (frameworks, SDKs, harnesses) | 25 |
| 🟡 Yellow (3) | Survey / review / taxonomy | 11 |
| 🔴 Red (1) | Empirical study (controlled comparison, observational, bug study) | 10 |
| 🟢 Green (4) | Benchmark / evaluation suite | 10 |
| 🔵 Cyan (5) | Local inference / serving infrastructure | 5 |
| 🟣 Purple (6) | Security audit / defense | 4 |

(Sums exceed 58 because four security/benchmark papers carry a primary plus secondary category.)

---

## Paper–Theme Mapping / 論文主題對照

| Citation Key | Theme | Methodology | Tier | Bridge to |
|---|---|---|---|---|
| `AgostinoDSouza2026` | T1 Harness | Engineering | T1 | T6 (local models) |
| `AhmadiEtAl2025` | T3 MCP | Engineering | T2 | T6 (Qwen3 local) |
| `EhteshamEtAl2025` | T3 MCP | Survey | T3 | — |
| `FanEtAl2025` | T3 MCP | Benchmark | T2 | — |
| `FourneyEtAl2024` | T5 Generalist | Engineering | T2 | T4 (GAIA eval) |
| `GuoEtAl2025` | T3 MCP | Benchmark | T2 | — |
| `Haseeb2025` | T2 Context | Engineering | T2 | T1 (Claude Code) |
| `JiaEtAl2026` | T2 Context | Engineering | T3 | — |
| `Jimenez-GomezEtAl2023` | T4 Benchmark | Benchmark | T1 | hub |
| `KulkarniEtAl2026` | T6 Local/Serving | Engineering | T3 | T3 (MCP) |
| `LiEtAl2025` | T2 Context | Benchmark | T2 | T4 |
| `LiEtAl2026` | T4 Benchmark | Empirical | T2 | T1 (Claude Code) |
| `LindenbauerEtAl2025` | T2 Context | Empirical | T1 | T1 (OpenHands) |
| `LinEtAl2023` | T6 Local/Serving | Engineering | T3 | — |
| `LinEtAl2026` | T1 Harness | Engineering | T1 | T5 (self-evolution) |
| `LiuEtAl2026` | T1 Harness | Empirical (source-code) | T1 | hub (Claude Code) |
| `LullaEtAl2026` | T1 Harness | Empirical | T2 | T4 |
| `LumerEtAl2025` | T3 MCP | Engineering | T2 | — |
| `LuoEtAl2025a` | T6 Local/Serving | Engineering | T3 | — |
| `LuoEtAl2025b` | T3 MCP | Benchmark | T2 | T4 |
| `MohammadiEtAl2025` | T4 Benchmark | Survey (abstract-only) | T3 | — |
| `NguyenEtAl2026` | T2 Context | Engineering | T3 | — |
| `NingEtAl2026` | T1 Harness | Survey | T1 | T2 |
| `PanEtAl2026` | T1 Harness | Engineering | T1 | T2 |
| `QiuEtAl2025a` | T5 Generalist | Engineering | T2 | T3 (MCP gen) |
| `QiuEtAl2025b` | T4 Benchmark | Benchmark | T2 | T2 |
| `RadosevichHalloran2025` | T3 MCP | Security | T3 | — |
| `RamaEtAl2025` | T5 Generalist | Engineering | T3 | — |
| `Ray2025` | T3 MCP | Survey | T1 | hub |
| `Rombaut2026` | T1 Harness | Survey (taxonomy) | T1 | — |
| `RoyEtAl2026` | T2 Context | Engineering | T3 | — |
| `SantosEtAl2025` | T1 Harness | Empirical | T1 | T4 (Claude Code) |
| `SenEtAl2026` | T1 Harness | Empirical | T1 | T2 |
| `SongEtAl2025a` | T3 MCP | Security | T3 | — |
| `SongEtAl2025b` | T6 Local/Serving | Engineering | T2 | — |
| `SoniEtAl2025` | T5 Generalist | Engineering | T2 | T1 (OpenHands-Versa) |
| `TangEtAl2025` | T5 Generalist | Engineering | T2 | — |
| `Verma2026` | T2 Context | Engineering | T2 | T4 |
| `WangEtAl2024a` | T5 Generalist | Survey | T2 | hub |
| `WangEtAl2024b` | T1 Harness | Survey | T2 | — |
| `WangEtAl2024c` | T1 Harness | Engineering | T1 | hub (OpenHands) |
| `WangEtAl2025a` | T6 Local/Serving | Engineering | T2 | T5 |
| `WangEtAl2025b` | T5 Generalist | Engineering | T2 | T1 (HGM ↔ AHE) |
| `WangEtAl2025c` | T1 Harness | Engineering | T1 | T3 (MCP built-in) |
| `Wu2025` | T5 Generalist | Engineering | T3 | T3 (MCP) |
| `WuEtAl2025` | T2 Context | Engineering | T1 | T4 |
| `XingEtAl2025` | T3 MCP | Security | T3 | — |
| `YangEtAl2024` | T1 Harness | Engineering | T1 | hub (SWE-agent) |
| `YehudaiEtAl2025` | T4 Benchmark | Survey | T2 | — |
| `YuEtAl2025a` | T5 Generalist | Engineering | T2 | T6 (Qwen3-32B local) |
| `YuEtAl2025b` | T1 Harness | Engineering | T2 | T2 |
| `Yuksel2025` | T2 Context | Engineering | T2 | T5 (plan-aware) |
| `ZhangEtAl2025a` | T2 Context | Engineering | T1 | hub (ACE) |
| `ZhangEtAl2025b` | T3 MCP | Security/Benchmark | T3 | — |
| `ZhangEtAl2025c` | T4 Benchmark | Benchmark | T2 | — |
| `ZhangEtAl2026` | T4 Benchmark | Empirical (bug) | T2 | T1 |
| `ZhouEtAl2026` | T2 Context | Survey | T1 | hub (externalisation) |
| `ZhuEtAl2025` | T4 Benchmark | Empirical | T1 | T5 (OAgents) |

---

## References / 參考文獻

All 58 citation keys above match `step4_citation_keys.md`. The full APA list lives in `step4_references_apa.md`; the BibTeX in `step4_references.bib`.

---

Files / 檔案: `step6_sota_review.md`, `step6_knowledge_graph.canvas`
Next step / 下一步: `/research-gaps`
