---
schema_version: "1.0"
id: P_draft_Observation_Masking
type: point
name: "Observation Masking (Complexity Trap)"
description: "Simple heuristic masking of stale observations matches LLM-Summary context management at ~½ the cost on SE workloads."

asjc: []
asjc_label: []
cpc: []
cpc_label: []
tags: [context_engineering, minimalism, empirical]

domain: [AI]
field: [Context Engineering]

status: draft
created: 2026-05-22
updated: 2026-05-22

parent:
parts: []
depends_on: []
caused_by: []
causes: []

related_lines: []
related_planes: [F_draft_T2_Context_Memory_Engineering]
related_body: []

source: "LindenbauerEtAl2025"
year: 2025
claim_type: empirical

provenance:
  session_id: "20260522"
  source_files:
    - "step6_sota_review.md#theme-2"
    - "step6_sota_review.md#cross-theme-2"
    - "step5_full_text/LindenbauerEtAl2025.md"
  generated_at: 2026-05-22
source_session: "20260522_localize-agentic-system-sota"
---

# Observation Masking (Complexity Trap)

> **核心主張**：一個簡單的 heuristic「把舊 observation 蒙起來」在 SE workload 上達到與 LLM-summary context management 同等準確度，但成本只有約一半——把這條 finding 命名為「Complexity Trap」。

## 來源
- 作者：Lindenbauer et al. (LindenbauerEtAl2025)
- 年份：2025
- 出處：arXiv ("The Complexity Trap")
- citation key: `LindenbauerEtAl2025`

## 目的
回答「context management 真的需要 LLM-summary 那麼複雜的機制嗎？」——直接對 ACE / GCC / ACC / PAACE 一派的繁複作法提出 cost-baseline 反證。

## 核心主張（展開）
LindenbauerEtAl2025 在 OpenHands 上實作三種 context management 機制：(a) LLM-summary、(b) observation masking heuristic、(c) hybrid。結果 (b) 在 SWE 工作負載上與 (a) 表現持平但 cost 約砍一半；(c) hybrid 再追加 −7~−11% cost。論文把這條 finding 形象化為「Complexity Trap」——名詞本身成為文獻中複雜性最小化派的口號。注意：作者明確指出此結論僅對 SE workloads（tool outputs 偏長），不應擴展到 tool outputs 簡短的領域。

## 方法
受控比較：固定 base model 與 harness (OpenHands)，三種 context management 機制做 ablation；在 SWE-bench 量測 success / cost。

## 發現
- Masking 與 LLM-summary 在 success rate 上 parity，cost ≈ ½。
- Hybrid 再 −7…−11% 成本。
- 「Complexity Trap」這個命名是其方法論貢獻——把現象提升為可被引用的概念。
- 為 SoniEtAl2025、SenEtAl2026、LullaEtAl2026 提供同向觀察的方法論譜系。

## 啟發
- **被啟發**：[[P_draft_OpenHands_Platform]] — substrate 是 OpenHands。
- **啟發了**：[[P_draft_Simple_Beats_Fancy]] — 是 simple-beats-fancy 的主軸案例；[[D_draft_Simple_Beats_Fancy]] 的核心引用。
