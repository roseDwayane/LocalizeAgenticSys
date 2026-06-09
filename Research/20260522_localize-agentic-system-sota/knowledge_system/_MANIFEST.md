---
session_id: "20260522"
topic: "How to build a state-of-the-art localized agentic system"
date: "2026-05-22"
bridge_step: "research-to-knowledge (passes 1–3 only)"
status: complete_partial
---

# Bridge Run Manifest — Passes 1, 2, 3

## Session summary

| Field | Value |
|---|---|
| Session | `20260522_localize-agentic-system-sota` |
| Topic | How to build a state-of-the-art localized agentic system |
| `current_step` (research pipeline) | 6 (post-SOTA) |
| step5 fulltext coverage | 57/58 FULL + 1 abstract-only (`MohammadiEtAl2025`) + 1 thin Problem section (`ZhouEtAl2026`) |
| step6 themes | 6 (T1 Coding Harness, T2 Context/Memory, T3 MCP, T4 Benchmarks, T5 Generalist, T6 Local Inference) |
| Canvas graph | 65 nodes, 85 edges |
| Step7 / Step8 / Step9 status | NOT YET RUN |
| Anchor systems | Claude Code (heavily covered), OpenHands (platform + SDK + Versa), hermes-agent (ABSENT in 58 papers) |
| Run mode | **FULL** (not degraded) |
| Templates source | Fallback `references/templates_summary.md` (user's `20_Knowledge/00-Templates/` is empty) |

## Folder skeleton (created)

```
10_Research/20260522_localize-agentic-system-sota/knowledge_system/
├── _MANIFEST.md                                     (this file)
├── _DEDUP_REPORT.md
├── _skipped.md                                      (16 candidates with reasons)
├── points/                                          (45 P_draft cards)
├── lines/
│   ├── frontmatter_patches.md                       (44 patches)
│   ├── _unclassified_edges.md                       (0 unclassified)
│   ├── E_draft_Externalization_Lineage.md           (1 evolution chain across T1+T2+T5)
│   ├── D_draft_Simple_Beats_Fancy.md                (1 debate, 8 vs 6 endpoints)
│   ├── D_draft_MCP_Capability_vs_Security.md        (1 debate, capability vs security)
│   └── A_draft_Externalization_vs_SelfImproving.md  (1 analogy / structural isomorphism)
└── planes/                                          (6 F_draft cards, one per theme)

# NO body/ folder this run — Pass 4 skipped per user decision.
```

## Per-Pass statistics

### Pass 1 — Points

| Metric | Value |
|---|---|
| Theme sections scanned | 6 |
| Candidates evaluated | ~60 (every paper + cross-theme phenomena) |
| **P_draft cards written** | **45** |
| Cards merged (dedup) | 0 (20_Knowledge/10-Points/ is empty) |
| Candidates skipped | 16 (logged in `_skipped.md` with reason codes) |
| Anchor-system coverage | Claude Code ✓ (own card), OpenHands platform ✓, OpenHands SDK ✓, OpenHands-Versa ✓, AHE ✓, ACE ✓, GCC ✓, MCP ✓, SWE-bench ✓, Alita ✓, Magentic-One ✓, SmallThinker ✓, AWQ ✓. **hermes-agent absent (no card — corpus gap)** |
| Cross-theme phenomena cards | `P_draft_Simple_Beats_Fancy`, `P_draft_Externalization_Framework`, `P_draft_Cost_of_Pass` |

#### P_draft card index (45 unique)

By primary plane:

**Theme 1 — Harness (11)**: `ClaudeCode`, `OpenHands_Platform`, `OpenHands_SDK`, `SWE_agent_ACI`, `AHE`, `Code_as_Harness`, `NLAH`, `AGENTS_md_Effect`, `Grep_beats_Vector`, `OrcaLoca`, `Engineering_Pitfalls` (Engineering_Pitfalls cross-listed primary T4 in some views; primary count placed in T1 here for harness-focused reading)

**Theme 2 — Context/Memory (9)**: `ACE`, `GCC`, `Observation_Masking`, `ACC`, `PAACE`, `ByteRover`, `Structural_Context_Model`, `Externalization_Framework`, `HaystackCraft`

**Theme 3 — MCP (10)**: `MCP_Protocol`, `MCP_Universe`, `MCP_AgentBench`, `MCPToolBench`, `MCP_Bridge`, `ScaleMCP`, `FAME`, `MSB`, `MCP_Guard`, plus `OpenHands_SDK` cross-link

**Theme 4 — Benchmarks (5)**: `SWE_bench`, `SWE_bench_Live`, `LoCoBench_Agent`, `OAgents`, `AIDev` (`Engineering_Pitfalls` and `HaystackCraft` cross-listed)

**Theme 5 — Generalist (6)**: `Magentic_One`, `Alita`, `HGM`, `AWorld`, `OpenHands_Versa`, `WangEtAl2024a_LLMAgent_Survey`

**Theme 6 — Local Inference (4)**: `AWQ`, `SmallThinker`, `Autellix`, `Cost_of_Pass`

**Cross-theme phenomenon (1)**: `Simple_Beats_Fancy`

Totals: 11 + 9 + 9 + 5 + 6 + 4 + 1 = 45 unique. (Theme 3 reads "10" if `OpenHands_SDK` counted as cross-link; the 9 unique cards primary to Theme 3 + 36 elsewhere = 45 total.)

### Pass 2 — Lines

| Metric | Value |
|---|---|
| Canvas edges parsed | 85 |
| Edges classified | 85 (100%) |
| **Frontmatter patches written** | **44** (covers dependency / hierarchy / causal / shared / bibliographic) |
| **Standalone Line cards** | **4** |
| Unclassified edges | 0 (logged confirmation in `_unclassified_edges.md`) |

#### Escalation rationale

Per skill spec, escalate to standalone Line card only if relationship is unpacked across ≥3 paragraphs in step6 OR appears as a major axis in Cross-Theme Synthesis / Diverging Findings.

| Standalone card | Type | Rationale (step6 cross-ref) |
|---|---|---|
| `E_draft_Externalization_Lineage` | evolution | step6 cross-theme #1 + #3 unpacked ≥4 paragraphs; major axis in §SOTA Summary §Established |
| `D_draft_Simple_Beats_Fancy` | debate | step6 cross-theme #2 named "the strongest converging finding in the entire corpus"; ≥7 paragraph mentions across 4 themes; §Contested major axis |
| `D_draft_MCP_Capability_vs_Security` | debate | step6 cross-theme #4 named "the field's biggest unhealed crack"; ≥4 paragraphs across §Theme 3 Open Issues + §Cross-Theme #4 + §What is contested |
| `A_draft_Externalization_vs_SelfImproving` | analogy | step6 cross-theme #3 explicitly titled "two views of the same shift"; structural isomorphism across 3 themes |

### Pass 3 — Planes

| Metric | Value |
|---|---|
| Themes processed | 6 |
| **Plane drafts written** | **6** (F_draft_T1 .. F_draft_T6) |
| Avg Q-filled per Plane | **5/5** (every plane has all 5 questions filled) |
| `(待補)` markers (Q5 awaiting step7) | **6** (one per Plane; each Q5 uses step6 Open Issues content + step7 待補 marker) |

#### Per-Plane summary

| Plane | Q1–Q4 source | Q5 source | 待補 status |
|---|---|---|---|
| F_draft_T1_Coding_Agent_Harnesses | step6 §Theme 1 overview / Q2=11 P cards / Q3=3 standalone Lines / Q4=Methodological patterns | step6 Theme 1 §Open Issues + Engineering_Pitfalls bug taxonomy | step7 GAP 待補 |
| F_draft_T2_Context_Memory_Engineering | step6 §Theme 2 / Q2=9+3 cross-listed P / Q3=3 standalone Lines | step6 Theme 2 §Open Issues + §What is contested | step7 GAP 待補 |
| F_draft_T3_MCP_Tool_Protocols | step6 §Theme 3 / Q2=9 P cards | step6 Theme 3 §Open Issues + §Cross-Theme #4 capability-vs-security debate | step7 GAP 待補 |
| F_draft_T4_Agent_Benchmarks_Empirical | step6 §Theme 4 / Q2=7 P cards | step6 Theme 4 §Open Issues (variance, contamination, cost-per-success, Claude-Code-only concentration) | step7 GAP 待補 |
| F_draft_T5_Generalist_Self_Improving | step6 §Theme 5 / Q2=6+2 cross-listed P / Q3=A_draft + D_draft | step6 Theme 5 §Open Issues (self-evolving vs minimalist-fixed; cost-of-evolution; proprietary dependence) | step7 GAP 待補 |
| F_draft_T6_Local_Inference_Serving | step6 §Theme 6 / Q2=4+3 cross-listed P | step6 Theme 6 §Open Issues + §Cross-Theme #5 (SmallThinker × AHE × SWE-bench Verified gap) | step7 GAP 待補 |

## Known limitations

1. **Pass 4 (Body) skipped per user decision**: `step7_gap_analysis.md`, `step8_hypothesis_specification.md`, `step9_manuscript/*.tex` do not exist. Without these, no Body card can be authored per skill spec. Re-run with `--pass body` once `/research step 7` and step 8 are complete.

2. **Templates fallback used**: User's `20_Knowledge/00-Templates/` is empty (only `.gitkeep`). Fallback templates from `.claude/skills/research-to-knowledge/references/templates_summary.md` were used. If user later populates `00-Templates/`, the schema in the drafts (which extends but does not break the fallback) will need a one-time alignment review.

3. **Plane Q5 uses step6 Open Issues, not step7 GAPs**: All 6 Planes have Q5 filled from step6 Debates / Open Issues content (per skill spec: "If Q5 cannot draw from step6 Debates for a theme, write `(待補：需 /research step 7 後補入 GAP 證據)` explicitly"). All 6 Planes carry the `(待補)` marker pending step7 verification.

4. **Single abstract-only paper**: `MohammadiEtAl2025` (paywalled, KDD eval survey) was DROPPED (logged in `_skipped.md` as `abstract_only`). It is referenced inside `F_draft_T4_Agent_Benchmarks_Empirical` Q4 as background.

5. **Thin-Problem-section paper**: `ZhouEtAl2026` (Externalization survey) has thin auto-extracted Problem section per step6 note; substantive claims for it were taken from step6 Summary/Method instead. `P_draft_Externalization_Framework` 不需 `needs_fulltext` tag — step6 quoted it heavily.

6. **hermes-agent unmapped**: The user's anchor system `hermes-agent` does not appear as primary subject or comparator in any of the 58 papers. No P_draft card was created. Logged here and in step6 §Anchor System Status. If hermes-agent has industry-only documentation (blog / GitHub) it should be brought into the knowledge system manually.

7. **Existing `20_Knowledge/10-Points/` is empty**: No fuzzy dedup possible — `_DEDUP_REPORT.md` lists all 34 cards as NEW. When user later populates 10-Points, a `--pass dedup` re-run (or manual review) will be needed.

8. **Cross-listed P cards counted once**: Cards like `P_draft_OpenHands_Versa` are primary T5 but appear in T1's `member_points`; the unique P card count is 34, not 34 + cross-listings.

## Next step

When `/research step 7` (gap analysis) and `step 8` (hypothesis specification) are complete:

1. **Re-run with `--pass body`** to author the prescriptive Body card from step7 GAP + step8 hypothesis + step9 manuscript intro/related-work. Per skill spec the Body card fills 7 diagnostic questions; expected outcome: 1 `B_draft_localize_agentic_system.md` under `body/`.

2. **Re-run Plane Q5 fields** with step7 GAP evidence to replace the `(待補)` markers. All 6 Planes are flagged.

3. **Promote flow** (manual or future skill) into `20_Knowledge/10-Points/` etc. Estimated workload: ~3-5 minutes per P card × 34 = 100-170 minutes; ~5 minutes per Line × 4 = 20 minutes; ~5-10 minutes per Plane × 6 = 30-60 minutes. **Total promote workload: ~150-250 minutes** for the existing draft set.

## Bridge design feedback (observations from this run)

1. **The 6-field Point template fits step6 + step5 well**. Most cards had all 6 fields fillable directly from step6 distillation without needing to deep-read individual step5 notes — step6's "Key findings" tables and "Landscape" / "Methodological patterns" sections distil enough for the 6 fields. This suggests step6 quality is the binding constraint on Pass 1 fidelity.

2. **Cross-theme synthesis papers cluster the 4 standalone Line cards**: All 4 escalated Lines map to numbered Cross-Theme Synthesis items (#1/#3 → E_draft; #2 → D_draft simple-vs-fancy; #3 → A_draft externalisation-vs-self-improving; #4 → D_draft capability-vs-security). This pattern suggests that step6's Cross-Theme Synthesis numbering could be a deterministic Line-escalation signal in future runs.

3. **Cross-theme phenomenon as Point card**: `P_draft_Simple_Beats_Fancy` was promoted as a Point even though it's not a "single paper" claim. The selection rule "method / model / phenomenon / metric / paradigm" justifies this (phenomenon). Recommend the skill spec explicitly enumerate "cross-theme named phenomenon" as a valid Point source. Similarly `P_draft_Cost_of_Pass` (metric) and `P_draft_Externalization_Framework` (paradigm) are not single-paper artifacts but corpus-level concepts.

4. **anchor system absent → no card**: hermes-agent not appearing in 58 papers is a useful negative finding but the skill spec doesn't currently say where to surface it. Logged here under Known Limitation #6.

5. **Plane Q5 fallback to step6 Open Issues works well**: step6's per-theme §Open Issues paragraphs are dense and pre-validated. Using them with `(待補)` markers is a sound interim solution. Once step7 runs, the Q5 fields can be diff-updated rather than rewritten.
