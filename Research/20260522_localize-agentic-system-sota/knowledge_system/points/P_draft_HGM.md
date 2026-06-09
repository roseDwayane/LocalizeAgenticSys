---
schema_version: "1.0"
id: P_draft_HGM
type: point
name: "Huxley-Gödel Machine (HGM)"
description: "Clade-metric-guided (CMP) self-modification search reaching human-level performance on SWE-bench Verified with GPT-5-mini."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [generalist_agent, self_evolution, search]

domain: [AI]
field: [Self-Improving Agents]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T5_Generalist_Self_Improving]
related_body: []

source: "WangEtAl2025b"
year: 2025
claim_type: methodological

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-5"
    - "step5_full_text/WangEtAl2025b.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Huxley-Gödel Machine (HGM)

> **核心主張**：把 agent 的「自我修改」做成 tree search，並以 Clade Metric for Performance (CMP) 作為剪枝信號——在 SWE-bench Verified 上以 GPT-5-mini 達到 human-level，並具強跨任務 transfer。

## 來源
- 作者：Wang et al. (WangEtAl2025b)
- 年份：2025
- 出處：arXiv (Huxley-Gödel Machine)
- citation key: `WangEtAl2025b`

## 目的
回答「self-improving agent 怎麼決定『哪個 self-modification 該保留』？」

## 核心主張（展開）
HGM 把 self-improving agent 形式化為 tree search over self-modifications。每次 mutation 後用 Clade Metric for Performance (CMP) 衡量「這群修改的後代是不是普遍變好」，作為剪枝信號。結果：SWE-bench Verified 上以 GPT-5-mini 達 human-level，並有 strong transfer to 其他 coding benchmark。與 AHE 同屬 self-evolving family。

## 方法
搜尋演算法：tree of self-modifications；CMP 作 evaluator；在 SWE-bench Verified 端到端評估。

## 發現
- Human-level on SWE-bench Verified with GPT-5-mini——以較小 base model 達到頂端表現。
- CMP 提供可被引用的「clade-level」評估指標。
- 與 AHE 共同代表「searched self-evolution」典範。

## 啟發
- **被啟發**：[[P_draft_AHE]] — 共享 self-evolving 範式；[[P_draft_SWE_bench]] — 評估面。
- **啟發了**：[[D_draft_Simple_Beats_Fancy]] 的「self-evolving 派」核心引用；對 step7 「self-evolving vs minimalist-fixed 對照」缺口為直接利益相關。
