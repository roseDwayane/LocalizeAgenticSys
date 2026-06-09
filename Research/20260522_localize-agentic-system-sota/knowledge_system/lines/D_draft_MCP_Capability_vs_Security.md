---
schema_version: "1.0"
id: D_draft_MCP_Capability_vs_Security
type: line
relation_type: debate
name: "MCP Capability vs Security — 'stronger models are more vulnerable'"
endpoints:
  # Capability side
  - P_draft_MCP_Universe
  - P_draft_MCP_AgentBench
  - P_draft_MCPToolBench
  # Security side
  - P_draft_MSB
  - P_draft_MCP_Guard
  - P_draft_MCP_Bridge

status: draft
created: 2026-05-22
updated: 2026-05-22

related_planes: [F_draft_T3_MCP_Tool_Protocols]
related_body: []

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-3"
    - "step6_sota_review.md#cross-theme-4"
    - "step6_sota_review.md#sota-summary-contested"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# D_draft — MCP Capability vs Security

> step6 Cross-Theme #4 直接命名為「the field's biggest unhealed crack」：MCP 能力 benchmark 與安全 benchmark 雙線平行推進、但沒有任何論文在同一系統上同時量測。並且 ZhangEtAl2025b 顯式指出「能力越強的模型越脆弱」——使兩條線的張力可量化但未調和。

## 爭論軸

「在 MCP 部署裡，能力提升與安全強化之間是 trade-off 還是正相關？」

兩派並非在 *主張* 上對立，而是在 *研究實踐* 上互不對話：capability 派只報能力數字、不量攻擊；security 派只報 ASR、不量 task performance 損失。**這個張力是結構性 method-gap，不是觀點對立**。

## 兩派主張

### Capability 側

| 論文 | Headline 數字 | 安全方面是否量測 |
|---|---|---|
| LuoEtAl2025b (MCP-Universe) | GPT-5 43.72%, Grok-4 33.33%, Claude-4-Sonnet 29.44% | 未量測 |
| GuoEtAl2025 (MCP-AgentBench) | Qwen3-235B-A22B (ReAct) overall 第一 | 未量測 |
| FanEtAl2025 (MCPToolBench++) | Qwen3-coder top AST in Browser/Map | 未量測 |

### Security 側

| 論文 | Headline 數字 | 任務能力方面是否量測 |
|---|---|---|
| ZhangEtAl2025b (MSB) | 12 attacks × 9 agents × 405 tools = 2000 instances; overall ASR 40.35%; OP attack 76.5% ASR | 未量測 |
| XingEtAl2025 (MCP-Guard) | 96.01% adversarial-prompt detection on 70K-sample bench | 未量測 |
| AhmadiEtAl2025 (MCP Bridge) | 3-tier risk model; Qwen3 fine-tuned F1 73.0% | 量測能力但無攻擊測試 |

## 證據對比

ZhangEtAl2025b 最有意思的觀察：「models with stronger performance are more vulnerable to attacks due to their outstanding tool calling and instruction following capabilities.」**這直接挑戰「能力與安全正相關」的潛在假設**——更強的指令服從 = 更高 ASR。

但 capability 論文中沒有任何一篇引用這條觀察。step6 §Cross-Theme #4 因此說：「No paper in the corpus measures both axes for the same system, so the field cannot yet tell whether security defenses (XingEtAl2025) cost task performance, and how much.」

## 解套提案

從文獻來看（step6 §What is missing #1）解套需要的是同系統雙軸量測：
- 取 1 個 MCP capability benchmark（e.g., MCP-Universe）+ 1 個 MCP security benchmark（e.g., MSB）。
- 在同一 system（base model × harness × defense layer）上同時跑兩者。
- 量測 defense layer 對 capability 的 cost；量測 capability 加強對 ASR 的影響。

這是 corpus 中第一順位的待補實驗——也是 step7 GAP 預期會 lock 的主要候選之一。

## 對 user 的意義

User 要 deploy local agent，**MCP 是其工具層的主流選擇**（OpenHands SDK 原生整合 + Claude Code 都是 MCP target）。本 debate 給出明確的 production 行動建議：
- 不能只看 MCP-AgentBench 的開源模型分數——同模型在 MSB 下 ASR 可能很高。
- 預設「stronger model more vulnerable」前提，部署 risk-tier（MCP Bridge）+ defense pipeline（MCP-Guard）作為標準層。
- 任何 user-side measurement 都應該同時跑能力與安全 benchmark，這正是 corpus 仍欠缺的研究實踐。
