---
schema_version: "1.0"
id: E_draft_Externalization_Lineage
type: line
relation_type: evolution
name: "Externalization lineage: ACI → harnesses → externalisation framework → ACE/NLAH/AHE"
endpoints:
  - P_draft_SWE_agent_ACI
  - P_draft_ClaudeCode
  - P_draft_OpenHands_Platform
  - P_draft_OpenHands_SDK
  - P_draft_Externalization_Framework
  - P_draft_ACE
  - P_draft_NLAH
  - P_draft_AHE
  - P_draft_ByteRover

status: draft
created: 2026-05-22
updated: 2026-05-22

related_planes: [F_draft_T1_Coding_Agent_Harnesses, F_draft_T2_Context_Memory_Engineering, F_draft_T5_Generalist_Self_Improving]
related_body: []

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#cross-theme-1"
    - "step6_sota_review.md#cross-theme-3"
    - "step6_sota_review.md#sota-summary-established"
    - "step6_knowledge_graph.canvas (edges: e-overview-t1, e-ahe-yang, e-claudecode-zouet, e-ace-ext, e-pan-claudecode, e-byterover-zhou, e-hgm-ahe)"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# E_draft — Externalization lineage

> 整條鏈：ACI 提出 harness 是研究對象 → Claude Code / OpenHands 把 harness 落地為 production scaffold → ZhouEtAl2026 把這條路線命名為 *externalisation*（memory / skills / protocols / harness）→ ACE / NLAH / AHE 把 externalisation 進一步分支為 evolving context、自然語言 harness、自動演化 harness。每一步都「把能力推得更遠離模型權重、更接近可治理的外部 surface」。

## 完整鏈條

```
2024 — SWE-agent (YangEtAl2024)         首次把 ACI 立為研究變數，量到 +64% 相對 gain
   ↓
2024–2025 — Claude Code (LiuEtAl2026) + OpenHands platform (WangEtAl2024c)
   harness 從研究 artifact 落地為 production scaffold；簡單 while-loop + tool layer + CLAUDE.md
   ↓
2025 — OpenHands SDK V1 (WangEtAl2025c)
   把 harness 拆成 4 個正交套件 + native MCP + local-to-remote portability
   ↓
2026 — ZhouEtAl2026 Externalization framework
   把過去三年所有看似分散的 harness / context / memory / protocol 研究統一命名為「externalisation」
   ↓
2025 — ACE (ZhangEtAl2025a)            把 context 變成可被 agent 自演化的 playbook（externalisation 的 memory-side 範例）
2026 — NLAH (PanEtAl2026)              把 harness 從 code 改寫為 NL 文件（externalisation 的 harness-side 範例）
2026 — AHE (LinEtAl2026)               把 harness 七組件交由 observability-driven 演化（externalisation 的 self-improving 變體）
2026 — ByteRover (NguyenEtAl2026)      把 memory 推到 agent-curated 階層、無 vector DB（externalisation 的 memory-side 第二支）
```

## 每一步的機制

| 步驟 | 機制 | 主要證據 | 量化效應 |
|---|---|---|---|
| ACI (2024) | 把 shell 介面換成 LM-oriented 指令集 | YangEtAl2024 | +64% relative resolved on SWE-bench Lite |
| Claude Code / OpenHands (2024-25) | While-loop + tool layer + 外部化 CLAUDE.md / sandbox | LiuEtAl2026, SantosEtAl2025, WangEtAl2024c | 13 design principles; 328 CLAUDE.md configs mined |
| OpenHands SDK V1 (2025) | 4 套件解耦 + native MCP + portability | WangEtAl2025c | First publicly composable agent SDK |
| Externalization (2026) | Naming the unified pattern | ZhouEtAl2026 | Survey-level synthesis |
| ACE (2025) | Incremental, structured, append-only context playbook | ZhangEtAl2025a | +10.6% AppWorld, +8.6% finance, −86.9% latency |
| NLAH (2026) | NL document interpreted by IHR at runtime | PanEtAl2026 | 60.1k → 2.9k token at comparable success |
| AHE (2026) | 7-component closed-loop observability-driven evolution | LinEtAl2026 | 69.7% → 77.0% pass@1 on TB2 |
| ByteRover (2026) | Domain/topic/subtopic/entry hierarchy, no vector DB | NguyenEtAl2026 | SOTA on LoCoMo |

## 反例與例外

1. **Self-improving 派的對映**：HGM (WangEtAl2025b) 與 Alita (QiuEtAl2025a) 走的是「同樣的 externalisation 但由 agent 自己改」這條路——詳見 [[A_draft_Externalization_vs_SelfImproving]] 的結構映射。它們不是 lineage 的偏離，而是另一個視角。
2. **Complexity-maximising 派**：ScaleMCP / FAME / 大部分 RAG 工作仍走 complexity-maximising 路線。Externalisation 不等於極簡化——而是「把能力推到外部 surface」這個動作。
3. **hermes-agent 不在鏈上**：step6 §Anchor System Status 確認 hermes-agent 不在 58 篇任何位置；本 lineage 對 hermes-agent 的關係待補（可能 industry-only）。

## 對 user 的意義

User 的 anchor question 是「如何建本地 SOTA agent」。這條 lineage 直接給出 build path:
1. 起點：以 ACI 思維設計 LM-oriented tool layer（不是 shell）。
2. 第一步外部化：寫 CLAUDE.md / AGENTS.md（LullaEtAl2026 量到 −28.64% runtime）。
3. 第二步外部化：以 MCP 接工具（OpenHands SDK 已 native 整合）。
4. 第三步外部化：把 context 外部化為 evolving playbook（ACE 風格）或階層 memory（ByteRover 風格）。
5. 第四步（選）：把 harness 自身的編輯 close the loop（AHE 風格）。

每一步都有 corpus 證據支撐，user 不需要自己 reinvent。
