---
schema_version: "1.0"
id: P_draft_MSB
type: point
name: "MSB — MCP Security Bench"
description: "12 attacks × 9 agents × 10 domains × 405 tools = 2000 attack instances; overall ASR 40.35%; OP attack 76.5% ASR; stronger models more vulnerable."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [MCP, security, benchmark]

domain: [AI]
field: [MCP Security]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: [P_draft_MCP_Protocol]
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T3_MCP_Tool_Protocols]
related_body: []

source: "ZhangEtAl2025b"
year: 2025
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-3"
    - "step5_full_text/ZhangEtAl2025b.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# MSB — MCP Security Bench

> **核心主張**：在 12 攻擊 × 9 agent × 10 domain × 405 tool 構成的 2000 attack instance 評估上，MCP 系統整體 ASR 40.35%；OP（Operation Prompt）攻擊類 ASR 達 76.5%——並發現 "stronger models more vulnerable due to outstanding tool calling & instruction following."

## 來源
- 作者：Zhang et al. (ZhangEtAl2025b)
- 年份：2025
- 出處：arXiv (MCP Security Bench)
- citation key: `ZhangEtAl2025b`

## 目的
回答「MCP 生態當前的攻擊成功率有多高？哪些攻擊類最致命？模型能力與安全有何關係？」

## 核心主張（展開）
ZhangEtAl2025b 設計 12 個攻擊類別、9 個 agent、10 個 domain、405 個 tool，產生 2000 個 attack instance。整體 ASR 40.35%；OP（Operation Prompt 注入）類 ASR 76.5%。最反直覺的觀察是「能力越強的模型越脆弱」——因為高指令服從讓注入更有效。直接構成 step6 cross-theme #4「MCP 能力 vs 安全的不癒合裂縫」核心證據。

## 方法
建構大規模攻擊矩陣：12 × 9 × 10 × 405 → 端到端執行攻擊並評估 success（兩段式：reach + execute）。

## 發現
- Overall ASR 40.35%、OP 76.5%。
- "Stronger models more vulnerable to attacks"——反直覺但 reproducible。
- 對 MCP 部署的 risk-tier（如 MCP Bridge）與 defense pipeline（如 MCP-Guard）提供 ground truth。

## 啟發
- **被啟發**：[[P_draft_MCP_Protocol]] — MCP 是其攻擊對象；RadosevichHalloran2025 MCPSafetyScanner 與 SongEtAl2025a 的 4-category attack taxonomy 共享攻擊類別。
- **啟發了**：[[P_draft_MCP_Guard]] — Guard 直接 defend MSB 攻擊；[[D_draft_MCP_Capability_vs_Security]] 安全側核心引用。
