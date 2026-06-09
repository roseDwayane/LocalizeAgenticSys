---
schema_version: "1.0"
id: P_draft_Externalization_Framework
type: point
name: "Externalisation framework (memory / skills / protocols / harness)"
description: "Modern agent capability is externalised cognition: memory + skills + protocols + harness are four coupled forms of pushing capability out of model weights."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [paradigm, externalization, unifying_framework]

domain: [AI]
field: [Agent Architecture]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T2_Context_Memory_Engineering, F_draft_T1_Coding_Agent_Harnesses, F_draft_T3_MCP_Tool_Protocols, F_draft_T5_Generalist_Self_Improving]
related_body: []

source: "ZhouEtAl2026"
year: 2026
claim_type: conceptual

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-2"
    - "step6_sota_review.md#cross-theme-3"
    - "step5_full_text/ZhouEtAl2026.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Externalisation framework (memory / skills / protocols / harness)

> **核心主張**：現代 agent 的能力提升不是模型變強，而是「外部化」——把 memory、skills、protocols、harness 四件事從模型權重裡推出來，由可治理、可編輯、可審計的外部 surface 承擔。

## 來源
- 作者：Zhou et al. (ZhouEtAl2026)
- 年份：2026
- 出處：arXiv ("Externalization in LLM Agents: A Unified Review")
- citation key: `ZhouEtAl2026`

## 目的
回答「2024–2026 的 agent 進步來源是什麼？是否存在一個 unifying frame 解釋『大家其實在做同一件事』？」

## 核心主張（展開）
ZhouEtAl2026 把 corpus 中各派研究歸納為四種 externalisation 形式：(a) memory（ByteRover、ACE playbook）、(b) skills（CLAUDE.md、AGENTS.md、Skills）、(c) protocols（MCP、A2A、ANP）、(d) harness（OpenHands SDK、SWE-agent ACI、Claude Code while-loop）。論點是「模型不變、周邊變」這條敘事在 2025–2026 已成顯式範式。Step6 把此 framework 視為 corpus 最重要的理論貢獻之一。

## 方法
Survey：把 memory / skills / protocols / harness 四條獨立發展的研究線拉到同一座標下對位比較，並引用每條線最具代表性的 5–10 篇論文。

## 發現
- 四種 externalisation 在不同 cluster 並行發展，但目標同形。
- 把 ACE、ByteRover、MCP、Claude Code、OpenHands SDK 統一在同一概念底下。
- 給整個 corpus 一個可被引用的 umbrella 詞彙。

## 啟發
- **被啟發**：[[P_draft_WangEtAl2024a_LLMAgent_Survey]] — 是更早的 agent profile/memory/planning/action 框架的承接者。
- **啟發了**：[[P_draft_ClaudeCode]]、[[P_draft_ACE]]、[[P_draft_ByteRover]]、[[P_draft_MCP_Protocol]]、[[P_draft_OpenHands_SDK]]、[[P_draft_AHE]] — 全部被重新詮釋為 externalisation 的特例；構成 [[E_draft_Externalization_Lineage]] 的主敘事。
