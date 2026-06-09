---
schema_version: "1.0"
id: P_draft_AGENTS_md_Effect
type: point
name: "AGENTS.md effect (configuration-document impact)"
description: "Presence of an AGENTS.md file alone cuts coding-agent median runtime by 28.64% and output tokens by 16.58% at comparable success across 10 repos × 124 PRs."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [harness, externalization, empirical]

domain: [AI]
field: [Coding Agents]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T1_Coding_Agent_Harnesses]
related_body: []

source: "LullaEtAl2026"
year: 2026
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
    - "step5_full_text/LullaEtAl2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# AGENTS.md effect (configuration-document impact)

> **核心主張**：在沒有改變模型、工具或 harness 情況下，僅僅加入一個 AGENTS.md 設定檔即可把 coding agent 的 median runtime 砍 28.64%、output tokens 砍 16.58%，success 不顯著下降。

## 來源
- 作者：Lulla et al. (LullaEtAl2026)
- 年份：2026
- 出處：arXiv ("On the Impact of AGENTS.md Files")
- citation key: `LullaEtAl2026`

## 目的
回答「外部化設定文件對 agent 效率的邊際貢獻有多大？是否值得單獨研究？」

## 核心主張（展開）
LullaEtAl2026 在 10 個 repo × 124 個 PR 的對照實驗中（presence vs absence of AGENTS.md），量測到 median runtime −28.64%、output tokens −16.58%。Success rate 無顯著差異。這是當前 corpus 中唯一一篇 experimentally manipulate 設定檔的論文。它把 AGENTS.md / CLAUDE.md / SKILL.md 三種風格的對照研究從文獻空白中往前推一步。

## 方法
控制變因實驗：選 10 個有 AGENTS.md 的 repo，產生 124 個 PR，比較 with vs without AGENTS.md 的執行時間、token 用量、success rate。

## 發現
- Runtime −28.64% (median)，output tokens −16.58%，success rate comparable。
- 是 NLAH 論點的最小版實證——一份簡短 NL 文件就能帶來顯著效率改善。
- 步驟仍以「presence/absence」二元為主，AGENTS.md vs CLAUDE.md vs SKILL.md 樣式對照是 step6 點名的 open issue。

## 啟發
- **被啟發**：[[P_draft_ClaudeCode]] — CLAUDE.md 是 AGENTS.md 同類型 mechanism；[[P_draft_NLAH]] — AGENTS.md 是 NL harness 的極簡版。
- **啟發了**：[[P_draft_Simple_Beats_Fancy]] — 提供 simple-beats-fancy 的最小可量測案例。
