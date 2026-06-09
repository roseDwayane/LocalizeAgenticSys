---
schema_version: "1.0"
id: F_draft_T1_Coding_Agent_Harnesses
type: plane
name: "Coding-Agent Harnesses & Scaffolding Architectures"
description: "The architectural plane for production AI coding agents — small while-loop + tool layer + permission gate + externalised configuration."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [theme_1, harness]

domain: [AI]
field: [Coding Agents]

status: draft
created: 2026-05-22
updated: 2026-05-22

member_points:
  - P_draft_ClaudeCode
  - P_draft_OpenHands_Platform
  - P_draft_OpenHands_SDK
  - P_draft_SWE_agent_ACI
  - P_draft_AHE
  - P_draft_Code_as_Harness
  - P_draft_NLAH
  - P_draft_AGENTS_md_Effect
  - P_draft_Grep_beats_Vector
  - P_draft_OrcaLoca
  - P_draft_Engineering_Pitfalls
  # Cross-listed (primary plane elsewhere):
  - P_draft_OpenHands_Versa  # primary F_draft_T5

adjacent_planes:
  - F_draft_T2_Context_Memory_Engineering
  - F_draft_T4_Agent_Benchmarks_Empirical
  - F_draft_T5_Generalist_Self_Improving

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# F_draft_T1 — Coding-Agent Harnesses & Scaffolding Architectures

## Q1 解決什麼問題？

把「為 LLM 設計的 agent 介面」從工程細節升格為研究變數，並回答：在固定底模下，介面設計、tool 層、權限/安全閘、外部化設定文件這些「圍繞模型的東西」應該長什麼樣，才能取得 SOTA 表現？

step6 Theme 1 §Landscape 原文：「The harness theme is the most architecturally consequential cluster in the corpus and the one where the SOTA picture is clearest.」

## Q2 核心概念有哪些？

- [[P_draft_SWE_agent_ACI]] — 奠基論點：ACI 取代 shell 介面，+64% 相對 gain。
- [[P_draft_ClaudeCode]] — 標竿 production scaffold；13 design principles；產業 Skills/Hooks/Sub-agents 機制。
- [[P_draft_OpenHands_Platform]] — Open community baseline；sandboxed execution + 15-benchmark eval。
- [[P_draft_OpenHands_SDK]] — V1 SDK 4-package decoupling + native MCP + local-to-remote。
- [[P_draft_AHE]] — 7-component closed-loop observability-driven 自動演化。
- [[P_draft_Code_as_Harness]] — Code-as-substrate 三層 taxonomy (NingEtAl2026)。
- [[P_draft_NLAH]] — Code 的對偶：2.9k-token NL document via IHR (PanEtAl2026)。
- [[P_draft_AGENTS_md_Effect]] — 單一設定檔效應 −28.64% runtime (LullaEtAl2026)。
- [[P_draft_Grep_beats_Vector]] — Retrieval × harness 強耦合 (SenEtAl2026)。
- [[P_draft_OrcaLoca]] — Priority-scheduled localization。
- [[P_draft_Engineering_Pitfalls]] — Bug taxonomy 3.8K bugs 跨三家 CLI agent。
- [[P_draft_OpenHands_Versa]] — Cross-listed from T5; 4-tool minimalist generalist substrate on OpenHands。

非升格 member（在 _skipped.md 已記錄但屬 T1）：
- Rombaut2026 — 12-dimension source-code taxonomy 對 13 個 scaffold（survey）
- SantosEtAl2025 — 328 CLAUDE.md 設定檔實證（融入 P_draft_ClaudeCode）
- AgostinoDSouza2026 — CATs/ALARA over 22 local models × 115 tasks
- Haseeb2025 — Multi-agent context workflow on Claude Code
- WangEtAl2024b — SE-agent survey

## Q3 概念之間關係？

- [[E_draft_Externalization_Lineage]]：SWE-agent ACI → Claude Code/OpenHands → OpenHands SDK → ZhouEtAl2026 Externalization → ACE / NLAH / AHE（跨 T1 + T2 + T5）。
- [[D_draft_Simple_Beats_Fancy]]：T1 內以 OpenHands-Versa / NLAH / AGENTS.md / while-loop 為 simple 派；AHE 為 fancy 派（但屬於 fancy 中相對受控的一支）。
- [[A_draft_Externalization_vs_SelfImproving]]：T1 是兩派的最大交集——CLAUDE.md（人類編）vs AHE（agent 編）共享同一外部 surface。
- Frontmatter patches（見 `lines/frontmatter_patches.md`）：
  - OpenHands_SDK `parent` OpenHands_Platform；OpenHands_Versa `parent` OpenHands_Platform。
  - AHE `depends_on` SWE_agent_ACI, OpenHands_Platform, ClaudeCode。
  - NLAH `depends_on` ClaudeCode, OpenHands_Platform。
  - Engineering_Pitfalls / AGENTS_md_Effect / Grep_beats_Vector / AIDev `caused_by` ClaudeCode (Claude Code 是研究對象)。

## Q4 常用方法？

step6 Theme 1 §Methodological patterns 點名兩條方法論主軸：

1. **Empirical archaeology（實證考古）**：把生產 agent 視為資料集。
   - LiuEtAl2026 解 Claude Code TypeScript 原始碼 → 13 設計原則。
   - SantosEtAl2025 分析 328 CLAUDE.md 設定檔。
   - Rombaut2026 對 13 個 scaffold 做 12-dimension source-code taxonomy。
   - ZhangEtAl2026 分類 3.8K 跨三家 CLI agent bug。
   - LullaEtAl2026 對 10 repo × 124 PR 做 with/without AGENTS.md 對照。

2. **Generative engineering（生成式工程）**：提出新原語、上 benchmark。
   - LinEtAl2026 AHE：closed-loop harness 演化 + 三柱 observability。
   - PanEtAl2026 NLAH：自然語言 harness + Interpreter-Harness Runtime。
   - NingEtAl2026 Code-as-Harness：把 code 立為 substrate。
   - AgostinoDSouza2026 ALARA / CATs：22 local models × 115 tasks。

兩條方法論在 LinEtAl2026 AHE 中正式交會——AHE 使用 Rombaut2026 + LiuEtAl2026 的 component 表徵作為演化空間。

## Q5 常見錯誤？

> 註：step7 GAP 分析尚未執行；以下從 step6 §Open issues 與 §What is contested 抽取「已被文獻 surface 的常見錯誤 / 待解問題」，加 `(待補：需 /research step 7 後補入 GAP 證據)` 標記等待 step7 完成後修訂。

step6 Theme 1 §Open issues 點名：
1. **盲信 leaderboard**：Rombaut2026 刻意不對 13 scaffold 排名，因為混淆變數（model、prompt、eval setup）讓 leaderboard 不可信。直接違反此 caution 是 corpus 中最常見的方法論錯誤。
2. **未測 cross-base-model transfer 就宣稱 portability**：AHE 宣稱跨 base model 仍 +5–10pp 但測試規模有限。
3. **AGENTS.md vs CLAUDE.md vs SKILL.md 風格對照空白**：LullaEtAl2026 只測 presence/absence；風格差異對效率的影響未量。
4. **以 Claude Code 為 production-agent 唯一第三方研究對象**：corpus 中 5+ 篇 deeply study Claude Code，OpenHands 同等深度的第三方研究稀少（WangEtAl2025c 是 self-authored）。

ZhangEtAl2026 §Findings 直接列舉的 production bug 類別：
- >67% 屬 functionality bug
- 36.9% 根因在 API / integration 層
- 18.3% 為純 API error
即「介面層」與「整合層」是當前 production agent 最高風險的失敗熱點。

(待補：需 /research step 7 後補入 GAP 證據 — 例如 "OpenHands 第三方深度架構研究缺"、"hermes-agent 不在文獻中"、"SKILL.md 大規模研究空白" 等是否被 step7 lock 為主要 GAP。)
