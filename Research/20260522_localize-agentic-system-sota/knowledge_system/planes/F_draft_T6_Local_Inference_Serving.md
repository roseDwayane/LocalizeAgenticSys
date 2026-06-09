---
schema_version: "1.0"
id: F_draft_T6_Local_Inference_Serving
type: plane
name: "Local Inference & Cost-Efficient Serving Infrastructure"
description: "The model-and-infrastructure plane: quantization, native-local model architectures, program-aware serving, cost-of-pass framing."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [theme_6, local_inference, serving]

domain: [AI]
field: [Local Inference, Model Architecture, Serving]

status: draft
created: 2026-05-22
updated: 2026-05-22

member_points:
  - P_draft_AWQ
  - P_draft_SmallThinker
  - P_draft_Autellix
  - P_draft_Cost_of_Pass
  # Cross-listed
  - P_draft_FAME       # primary T3
  - P_draft_MCP_Bridge # primary T3
  - P_draft_AWorld     # primary T5

adjacent_planes:
  - F_draft_T3_MCP_Tool_Protocols
  - F_draft_T5_Generalist_Self_Improving
  - F_draft_T1_Coding_Agent_Harnesses

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-6"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# F_draft_T6 — Local Inference & Cost-Efficient Serving Infrastructure

## Q1 解決什麼問題？

回答：怎麼讓 agent 在本地或低成本基礎設施上跑得起來、跑得有競爭力？模型量化、native-local 架構、serving 層怎麼針對 agent 工作負載重新設計？

step6 Theme 6 §Landscape：「This is the smallest theme but the only one that touches the *model* and *infrastructure* layers of the PICO.」

## Q2 核心概念有哪些？

step6 Theme 6 把架構分成 model layer + serving layer 兩層：

### Model layer
- [[P_draft_AWQ]] (LinEtAl2023) — Activation-aware weight quantization；mobile GPU 3× speedup；corpus 量化基線。
- [[P_draft_SmallThinker]] (SongEtAl2025b) — 為本地部署而生的 sparse-MoE LLM；consumer CPU 20+ tokens/s。

### Serving layer
- [[P_draft_Autellix]] (LuoEtAl2025a) — Program-aware LLM serving；4-15× throughput vs vLLM-class。
- [[P_draft_FAME]] — Cross-listed primary T3；FaaS-decomposed ReAct；13× latency / −66% cost。

### Cost framing
- [[P_draft_Cost_of_Pass]] (WangEtAl2025a) — Efficient Agents 框架；96.7% of OWL at −28.4% cost-of-pass。

### Cross-listed
- [[P_draft_MCP_Bridge]] — Primary T3；fine-tuned Qwen3-4B/8B beats GPT-OSS-120B（local-friendly MCP）。
- [[P_draft_AWorld]] — Primary T5；Qwen3-32B beats GPT-4o on GAIA；open-source training recipe。

## Q3 概念之間關係？

- Frontmatter patches:
  - SmallThinker `depends_on` AWQ（quantization baseline）。
  - Autellix ↔ SmallThinker `related_lines`（serving for local models）。
  - FAME ↔ Autellix `related_lines`（program-aware serving）。
  - AWorld ↔ SmallThinker / MCP_Bridge `related_lines`（Qwen3 local stack）。
- 跨 plane 連結：
  - AgostinoDSouza2026 CATs（已 DROP）作為 AWQ → ClaudeCode 的 bridging 案例（22 local models × 115 tasks）。
  - Cost_of_Pass 是 T4 評估面與 T6 infrastructure 的概念橋。
- 與其他 plane 的關係：T6 在 corpus 中相對單薄，但其概念被 T1（harness instrumentation cost）、T2（context compression cost）、T3（MCP serving）、T5（local self-improvement）全部使用。

## Q4 常用方法？

step6 Theme 6 §Methodological patterns 點名兩個模式：

1. **Protect-the-important / quantize-the-rest（模型層）**：AWQ 保護 ~1% salient channel；SmallThinker MoE+quantization 從架構層 integrate。
2. **Program-aware scheduling（服務層）**：Autellix 把 program 當一級公民；FAME 把 ReAct 拆成 FaaS function。

step6 原文：「Both treat the LLM as a fixed asset and optimise everything around it — which mirrors the Theme 1 thesis that the harness is the main lever.」這個 mirror 是 corpus 中 T6 與 T1 同構性的核心——兩層都是「模型不動、周邊優化」。

## Q5 常見錯誤？

step6 Theme 6 §Open issues 直接點名：

1. **AWQ 是 2023 年作品，後續無 agent-workload-aware 量化研究**：「the next quantisation paper that explicitly tests *agentic* workloads (e.g., long tool-call trajectories with cached prefixes) is missing.」對 local agent 是直接缺口。
2. **SmallThinker 端到端缺席**：「SmallThinker is the only natively-local model architecture paper in the shortlist — there is no comparison paper that benchmarks SmallThinker-class models inside Theme-1 harnesses on Theme-4 benchmarks.」即 SmallThinker × AHE × SWE-bench Verified 的端到端評估缺。這是 step6 Cross-Theme #5 命名為 "glaring experimental gap" 的核心。
3. **Cost-of-pass 沒在 T2 / T3 普及**：「The 'cost-of-pass' metric (WangEtAl2025a) has not yet propagated into Theme-2 / Theme-3 evaluations.」
4. **T6 與 anchor system 直接連結弱**：step6 §Anchor system connection：「None of these papers studies Claude Code, OpenClaw/OpenHands, or hermes-agent directly.」對 user 的 local agent 落地，T6 提供 enabler 但不提供 anchor 系統的可比較研究——這是 anchor-coverage 的弱點。

step6 Cross-Theme #5 補充：「open-weights / locally-runnable systems beat or match proprietary baselines on agent tasks ... 但在 *coding* benchmarks 上，the leaderboard is still dominated by harnessed proprietary models (GPT-5, Claude 4.0-Sonnet).」即 *coding* benchmark 上 local 路線仍未證實競爭力。

(待補：需 /research step 7 後補入 GAP 證據 — 預期 step7 會 lock 兩項主要 GAP：(a) "本地模型 × SOTA harness × coding benchmark 端到端評估"——即 SmallThinker + AHE + OpenHands SDK on SWE-bench Verified；(b) "Cost-of-pass 在 T2/T3 普及"。)
