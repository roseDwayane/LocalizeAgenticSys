---
schema_version: "1.0"
id: P_draft_ClaudeCode
type: point
name: "Claude Code (Anthropic agent harness)"
description: "Production AI coding agent built around a simple while-loop, externalised CLAUDE.md configuration, MCP tools, hooks and sub-agents."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [anchor_system, harness, coding_agent]

domain: [AI]
field: [Coding Agents, Agent Harness]

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

source: "LiuEtAl2026"
year: 2026
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-1"
    - "step5_full_text/LiuEtAl2026.md"
    - "step5_full_text/SantosEtAl2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Claude Code (Anthropic agent harness)

> **核心主張**：Claude Code 的 SOTA 形狀是「簡單 while-loop + 工具層 + 權限/安全閘 + 外部化的 CLAUDE.md / Skills / Sub-agents」——複雜性外部化到文件而非塞進核心迴圈。

## 來源
- 作者：Liu, Jiacheng; Zhao, Xiaohan; Shang, Xinyi; Shen, Zhiqiang (LiuEtAl2026); Santos et al. (SantosEtAl2025)
- 年份：2026 / 2025
- 出處：arXiv preprint "Dive into Claude Code" + "Decoding the Configuration of AI Coding Agents"
- citation key: `LiuEtAl2026`, `SantosEtAl2025`

## 目的
回答「production-grade agent harness 真正的設計形狀是什麼？」——透過逆向工程 Claude Code 公開 TypeScript 原始碼 (LiuEtAl2026) 與實證分析 328 個 CLAUDE.md 設定檔 (SantosEtAl2025) 來建立可被研究的設計空間參照點。

## 核心主張（展開）
LiuEtAl2026 從 Claude Code 原始碼中萃取出 13 個設計原則，並指出整個 agent 的核心其實是一個簡單的 while-loop，搭配工具註冊表、權限/安全閘、event-sourced 狀態記錄、以及外部化的 CLAUDE.md / Skills / Sub-agents 機制。SantosEtAl2025 則從 328 個 CLAUDE.md 設定檔的實證證明這些外部化文件已被廣泛採用為 harness 行為的真正載體。Claude Code 因此是當前 corpus 中三條「設計空間」線（LiuEtAl2026 / Rombaut2026 / NingEtAl2026）匯聚出的標準 SOTA 形狀的最具體實例。

## 方法
LiuEtAl2026 採用源碼級的 empirical archaeology：閱讀公開的 TypeScript 原始碼、追蹤其 control flow、把每個機制歸納成可被命名的設計原則 (13 原則)。SantosEtAl2025 採取大規模 config-mining：在 GitHub 上蒐集 328 個 CLAUDE.md 檔案，分類其指令類型、長度、結構樣式。兩者都把生產系統視為資料集而非 hypothesis 對象。

## 發現
- 核心 control loop 結構極簡：while-loop + tool dispatch，與 ReAct/plan-execute 等學術 pattern 同形。
- 13 個可命名的設計原則涵蓋 permission gating、event sourcing、context window 管理、sub-agent 派遣。
- 328 個 CLAUDE.md 顯示外部化已是 de-facto pattern，大多數設定都集中在 project-conventions / tool-allowlist / agent-behaviour 三類。
- Claude Code 也是其他研究的對照基準：被 SenEtAl2026 (grep vs vector)、ZhangEtAl2026 (3.8K bug)、LullaEtAl2026 (AGENTS.md)、LiEtAl2026 (932K PR) 引用為 baseline。

## 啟發
- **被啟發**：[[P_draft_SWE_agent_ACI]] — 接受 ACI (Agent-Computer Interface) 為 table stakes；[[P_draft_Externalization_Framework]] — Claude Code 的 CLAUDE.md/Skills 設計被 ZhouEtAl2026 重新詮釋為 externalisation。
- **啟發了**：[[P_draft_AHE]] — AHE 引用 Claude Code 並把其 Skills/Memory/Sub-agent/History/Tools/Middleware/System-Prompt 列為七個可編輯 harness 組件；[[P_draft_AGENTS_md_Effect]] — LullaEtAl2026 直接量測 AGENTS.md/CLAUDE.md 風格設定檔的效應；[[P_draft_Grep_beats_Vector]] — SenEtAl2026 把 Claude Code 當測試對象之一。
