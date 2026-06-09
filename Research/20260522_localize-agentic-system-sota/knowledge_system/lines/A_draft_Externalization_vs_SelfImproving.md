---
schema_version: "1.0"
id: A_draft_Externalization_vs_SelfImproving
type: line
relation_type: analogy
name: "Externalization ≈ Self-Improving (two views of the same shift)"
endpoints:
  # Externalization 側
  - P_draft_Externalization_Framework
  - P_draft_ACE
  - P_draft_NLAH
  - P_draft_AGENTS_md_Effect
  - P_draft_ClaudeCode
  - P_draft_ByteRover
  # Self-improving 側
  - P_draft_AHE
  - P_draft_HGM
  - P_draft_Alita

status: draft
created: 2026-05-22
updated: 2026-05-22

related_planes: [F_draft_T1_Coding_Agent_Harnesses, F_draft_T2_Context_Memory_Engineering, F_draft_T5_Generalist_Self_Improving]
related_body: []

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#cross-theme-3"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# A_draft — Externalization vs Self-Improving (analogy / structural isomorphism)

> step6 §Cross-Theme #3 點名兩條看似獨立的研究線其實在做同一件事，只是「從相反方向」描述：externalisation 派說「模型不動、外面變」；self-improving 派說「外面被 agent 自己改」。把兩者放在一起就構成 SOTA 的完整圖像：「模型不變、周邊變，且周邊由誰來改是可選的」。

## 結構映射表

| 軸 | Externalization 側 | Self-Improving 側 | 結構同形之處 |
|---|---|---|---|
| 不變量 | Model weights | Model weights | 兩者都凍住底模 |
| 變動量 | Memory / Skills / Protocols / Harness | Harness 7-components / Skills / Tools / MCPs | 變動的 surface 完全相同 |
| 變動驅動者 | 人類工程師（CLAUDE.md / AGENTS.md / 手寫 prompt） | 另一個 agent（AHE evolver / HGM tree search） 或 agent 自身（ACE feedback loop, Alita MCP generation） | 唯一差異是「誰寫」 |
| 量測標準 | Cost-of-pass / success rate | Cost-of-pass / success rate | 同 |
| 主要 benchmark | SWE-bench / AppWorld / GAIA | SWE-bench / GAIA / Terminal-Bench 2 | 同 |
| 代表機制 | CLAUDE.md, AGENTS.md, MCP, ACE playbook | AHE auto-evolution, HGM tree search, Alita MCP synth | 機制針對相同 surface |

## 為什麼是同構

兩派看起來主張不同，但拆解三件事就會發現是同一動作：
1. **被外部化的東西**：兩派都把 capability 從 model weights 移到「可編輯外部 surface」（CLAUDE.md / Skills / MCP / memory tree）。
2. **不動的東西**：兩派都不動底模——這跟 RLHF / continued pretraining 那條 train-the-model 路線完全分開。
3. **唯一差異是 actor**：人類編 vs LLM 編 vs agent 自己編。但被編的對象、被量的指標、被引的 benchmark 全部相同。

step6 原文：「the externalisation papers say *the model stops changing, the surrounding layers change*; the self-improving papers add *the surrounding layers are changed by another agent, not a human*. Putting them together suggests the SOTA target is a system in which the harness, context, skills, and tools are continuously edited — sometimes by humans (LullaEtAl2026, SantosEtAl2025), sometimes by another agent (LinEtAl2026, WangEtAl2025b), sometimes by the agent itself (ZhangEtAl2025a, QiuEtAl2025a).」

## 映射的極限

1. **Editing actor 的可信度差異**：人類 review 仍是 high-trust ground truth；agent-edits 還缺結構化驗證機制——HGM 用 CMP、AHE 用三柱 observability，但這些 metric 是否能取代人類 review 仍未知。
2. **可審計性差異**：CLAUDE.md / AGENTS.md 是 git-tracked 可審計的；AHE-evolved harness 演化軌跡未必有同等的 audit trail。
3. **失效模式差異**：人類編的 CLAUDE.md 失效是「人類錯誤」可被 ZhangEtAl2026 bug study 抓到；agent-self-edits 失效可能是 silent capability drift——目前沒有對 self-evolving system 做 cascading-error 研究（HaystackCraft 是 LLM-level，不是 self-evolution-level）。

## 對 user 的意義

User 的 anchor question「如何建 local SOTA agent」可以同時讀兩派文獻：把它們視為**同一張藍圖、不同填寫者**。具體 build path:
1. 起點：所有 surface 由人類編（CLAUDE.md / AGENTS.md / 手選 MCP server）——這是 corpus 的 simple-派起點。
2. 第一階躍：把高頻 surface 編輯交給 agent（ACE 風格的 context playbook、Alita 風格的 run-time MCP 生成）。
3. 第二階躍（選）：把 harness 自身的 7-component 編輯閉環（AHE 風格）——但只在 OAgents-style 標準 protocol 已能可靠 measure baseline 後再啟動。
4. 不管哪一階躍，編輯對象（surface）與量測指標（cost-of-pass）都保持不變——這就是同構帶來的 transfer 紅利。
