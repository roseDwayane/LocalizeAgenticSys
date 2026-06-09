# Pass 1 — Skipped Candidates

Candidates considered but dropped per the skill spec's selection rules.
Reason codes:
- `single_paper_term` — terminology not used outside its origin paper
- `engineering_artifact` — concrete framework with no distinct claim beyond its parent paradigm
- `low_mention_count` — fewer than 2 mentions in Consensus / Methods / Key Results
- `survey_only` — survey/taxonomy with no novel claim
- `abstract_only` — paywalled paper with insufficient evidence

| Candidate | Source paper(s) | Reason | Notes |
|---|---|---|---|
| CEDAR (data-science context engineering) | RoyEtAl2026 | single_paper_term | Domain-specific specialisation of ACE; surfaces in F_draft_T2 member list but not a separate P card |
| Autono (ReAct-based framework) | Wu2025 | engineering_artifact | Concrete ReAct implementation; no distinct claim vs Magentic-One / Alita |
| Cerebrum (AIOS SDK) | RamaEtAl2025 | engineering_artifact | Platform paper; subsumed by Magentic-One/Alita pattern |
| AutoAgent (zero-code framework) | TangEtAl2025 | engineering_artifact | Accessibility-focused framework; cites Magentic-One as base |
| Haseeb2025 multi-agent workflow on Claude Code | Haseeb2025 | engineering_artifact | Production workflow on Claude Code, no distinct concept beyond parent |
| Herding CATs / ALARA | AgostinoDSouza2026 | engineering_artifact | Bridges local-models + harness; cited inside ClaudeCode / AWQ / OpenHands_Platform cards |
| Engineering-pitfalls bug categories | ZhangEtAl2026 | already_captured | Captured by P_draft_Engineering_Pitfalls; sub-categories not promoted |
| MCPSafetyScanner | RadosevichHalloran2025 | engineering_artifact | Distinct tool but methodologically subsumed by MSB |
| SongEtAl2025a 4-attack taxonomy | SongEtAl2025a | survey_only | Taxonomy; covered by MSB's 12-attack matrix |
| EhteshamEtAl2025 4-protocol roadmap | EhteshamEtAl2025 | survey_only | Roadmap proposal not yet evaluated; covered as Theme 3 mention |
| WangEtAl2024b SE-agent survey | WangEtAl2024b | survey_only | Survey overlapping WangEtAl2024a and ZhouEtAl2026 |
| YehudaiEtAl2025 evaluation survey | YehudaiEtAl2025 | survey_only | Survey; subsumed by P_draft_OAgents for the reproducibility framing |
| MohammadiEtAl2025 KDD evaluation taxonomy | MohammadiEtAl2025 | abstract_only | Paywalled; abstract-only, marked low-confidence in step6 |
| Rombaut2026 12-dimension taxonomy | Rombaut2026 | survey_only | Empirical taxonomy; surfaces in F_draft_T1 member list and as cross-ref in P_draft_ClaudeCode but not a standalone P card |
| LiuEtAl2026 13 design principles | LiuEtAl2026 | already_captured | Captured inside P_draft_ClaudeCode |
| SantosEtAl2025 328 CLAUDE.md analysis | SantosEtAl2025 | already_captured | Captured inside P_draft_ClaudeCode |
| NingEtAl2026 3-layer code-harness taxonomy | NingEtAl2026 | retained | KEPT as P_draft_Code_as_Harness — has distinct conceptual claim (code = substrate) |
| PanEtAl2026 NL harness | PanEtAl2026 | retained | KEPT as P_draft_NLAH — paradigmatic opposite of code-harness |

Total skipped: 16 candidates.
Total retained as P_draft cards: 45.

Notes on retained sub-extracts:
- Rombaut2026 and SantosEtAl2025 do not get own P cards but are heavily referenced inside ClaudeCode / OpenHands cards and surface in F_draft_T1 member_points.
- AgostinoDSouza2026 (CATs / ALARA) is referenced inside ClaudeCode and AWQ cards as the bridge that demonstrated harness × local model end-to-end.
- The dropped 4 surveys (Ehtesham / WangEtAl2024b / Yehudai / Mohammadi) are captured by their corresponding Theme's Plane card (Q4 / Q5 fields).
