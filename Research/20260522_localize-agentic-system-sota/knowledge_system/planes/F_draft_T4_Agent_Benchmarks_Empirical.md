---
schema_version: "1.0"
id: F_draft_T4_Agent_Benchmarks_Empirical
type: plane
name: "Agent Benchmarks, Empirical Studies & Reproducibility"
description: "The evaluation plane: from SWE-bench backbone to live benchmarks, reproducibility crisis, and large-scale empirical observation."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [theme_4, benchmark, empirical]

domain: [AI]
field: [Benchmarks, Empirical Studies]

status: draft
created: 2026-05-22
updated: 2026-05-22

member_points:
  - P_draft_SWE_bench
  - P_draft_SWE_bench_Live
  - P_draft_LoCoBench_Agent
  - P_draft_OAgents
  - P_draft_AIDev
  - P_draft_Engineering_Pitfalls
  - P_draft_HaystackCraft

adjacent_planes:
  - F_draft_T1_Coding_Agent_Harnesses
  - F_draft_T2_Context_Memory_Engineering
  - F_draft_T3_MCP_Tool_Protocols
  - F_draft_T5_Generalist_Self_Improving

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-4"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# F_draft_T4 — Agent Benchmarks, Empirical Studies & Reproducibility

## Q1 解決什麼問題？

回答：怎麼可重現地量 agent 能力？SWE-bench 飽和後該怎麼辦？大規模 production agent 行為怎麼觀察？

step6 Theme 4 §Landscape：「The benchmark landscape has both *consolidated* and *destabilised* itself in the past three years. Consolidated, because SWE-bench has become the unavoidable backbone — it is referenced by 10 of the 58 papers (the highest in-degree in the corpus). Destabilised, because every recent paper that revisits SWE-bench reports *the saturation problem*.」

## Q2 核心概念有哪些？

- [[P_draft_SWE_bench]] (Jimenez-GomezEtAl2023) — 2,294 issues × 12 repos；corpus in-degree 第一（10）。
- [[P_draft_SWE_bench_Live]] (ZhangEtAl2025c) — 1,319 fresh post-2024；top SOTA 從 >60% → 19.25%（contamination signal）。
- [[P_draft_LoCoBench_Agent]] (QiuEtAl2025b) — 8,000 interactive scenario × 9 metric；128K > 1M 反直覺發現。
- [[P_draft_OAgents]] (ZhuEtAl2025) — Reproducibility crisis 命名者；OAgents-Pass@3 73.93% on GAIA。
- [[P_draft_AIDev]] (LiEtAl2026) — 932,791 agentic PR × 116K repo；五家 production agent 比較資料集。
- [[P_draft_Engineering_Pitfalls]] (ZhangEtAl2026) — 3.8K bug 跨 Claude Code / Codex / Gemini CLI。
- [[P_draft_HaystackCraft]] (LiEtAl2025) — Cross-listed primary T2；cascading-error long-context benchmark。

非升格 member：
- YehudaiEtAl2025 — 5-perspective evaluation survey（融入 OAgents 的 reproducibility framing）
- MohammadiEtAl2025 — KDD evaluation taxonomy（abstract-only，低信度）

## Q3 概念之間關係？

- [[E_draft_Externalization_Lineage]]：SWE-bench 是整條 lineage 的共同評估面；SWE-bench-Live 與 LoCoBench-Agent 是 lineage 推進到 saturation 後的下一代 eval。
- Frontmatter patches:
  - SWE_bench_Live / LoCoBench_Agent 共同 `parent` SWE_bench。
  - OAgents `related_lines` "critique-of SWE_bench" (reproducibility critique edge)。
  - AIDev `related_lines` "scale-extends SWE_bench"。
  - AIDev / Engineering_Pitfalls / Grep_beats_Vector / AGENTS_md_Effect 共同 `caused_by` ClaudeCode（Claude Code 為研究對象）。
  - Engineering_Pitfalls 在 T4 與 T1 雙駐。
- 跨 plane 連結：
  - SWE_bench 是 T1（harness 評估）、T2（context 評估）、T5（self-evolving 評估）的共同 hub。

## Q4 常用方法？

step6 Theme 4 §Methodological patterns 點名兩個方法論轉向：

1. **靜態 → live executable**：
   - SWE-bench-Live 自動 curation 持續更新。
   - MCP-Universe（T3）建 execution-based grader。
   - LoCoBench-Agent 8K-scenario interactive environment + 8 specialized tools。
   - OAgents 標準化 protocol 來穩定變異。

2. **Aggregate → per-dimension + cost-of-pass**：
   - LoCoBench-Agent 9 維 metric。
   - OAgents Pass@3 + per-component analysis。
   - YehudaiEtAl2025 把 cost-efficiency / safety / robustness 列為 critical eval gap。
   - 但 cost-per-success 在 T4 仍未普及（WangEtAl2025a [Theme 6] 是少數例外）——這是 T4 最大方法論缺口。

## Q5 常見錯誤？

step6 Theme 4 §Open issues 直接點名：

1. **單次跑分當結論**：ZhuEtAl2025 量化「random-run variance 大過宣稱的進步幅度」。從單次跑分作結論是 T4 內最普遍的錯誤模式。
2. **盲信 SWE-bench Verified 高分**：ZhangEtAl2025c 顯示 top SOTA 在 SWE-bench Verified >60% 但在 Live 上 19.25%——contamination/recency 解釋了大半。引用 Verified 分數不附 Live 對照是當前文獻的普遍方法論盲點。
3. **Cost-per-success 不報告**：step6 §Open issues：「almost no benchmark in the corpus reports cost-per-success as a primary outcome — WangEtAl2025a is one of the few that does.」
4. **Production observation 偏 Claude Code**：「The 'engineering' empirical studies (LiEtAl2026, ZhangEtAl2026, SantosEtAl2025, LullaEtAl2026) are heavily concentrated on Claude Code; equivalent OpenHands or self-hosted-agent studies are absent.」對 user 的 anchor system OpenHands 是直接利害關係的研究空白。

step6 Theme 4 §Key findings 中 ZhangEtAl2026 列出的 production bug 模式（>67% functionality、36.9% API/integration、18.3% API error）也應視為「常見錯誤類」基準分布。

(待補：需 /research step 7 後補入 GAP 證據 — 預期 step7 會 lock "cost-per-success 普及"、"OpenHands 第三方 production observation"、"OAgents protocol 跨論文採用率" 為主要 GAP。)
