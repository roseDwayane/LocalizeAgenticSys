# Pass 2 — Frontmatter Patches

Patches to apply to P_draft cards when promoted. Each line corresponds to one or more canvas edges (`step6_knowledge_graph.canvas`). Edge labels in quotes.

## Anchor / overview edges (bibliographic — for context only, not applied)

- `overview → LiuEtAl2026` "anchor: Claude Code" → handled by P_draft_ClaudeCode.related_planes
- `overview → WangEtAl2024c` "anchor: OpenHands" → handled by P_draft_OpenHands_Platform.related_planes
- `overview → ZhangEtAl2025a` "core: ACE" → handled by P_draft_ACE.related_planes
- `overview → Ray2025` "core: MCP survey" → handled by P_draft_MCP_Protocol.related_planes
- `overview → Jimenez-GomezEtAl2023` "hub: SWE-bench" → handled by P_draft_SWE_bench.related_planes

## Bibliographic ("benchmark for", "cites", "evaluated on") — hierarchy / dependency patches

- `P_draft_SWE_agent_ACI` ← `caused_by`: `[]`; ← `depends_on`: `[P_draft_SWE_bench]`  (source: e-swebench-yang "benchmark for")
- `P_draft_OpenHands_Platform` ← `depends_on`: append `P_draft_SWE_bench`  (source: e-swebench-openhands "benchmark for")
- `P_draft_OpenHands_SDK` ← `depends_on`: append `P_draft_SWE_bench`  (source: e-swebench-openhands2 "benchmark for")
- `P_draft_OrcaLoca` ← `depends_on`: append `P_draft_SWE_bench`  (source: e-swebench-orcaloca "benchmark for")
- `P_draft_GCC` ← `depends_on`: append `P_draft_SWE_bench`  (source: e-swebench-gcc "benchmark for")
- `P_draft_ACC` ← `depends_on`: append `P_draft_SWE_bench`  (source: e-swebench-acc "benchmark for")
- `P_draft_Observation_Masking` ← `depends_on`: append `P_draft_SWE_bench`  (source: e-swebench-mask "benchmark for")
- `P_draft_HaystackCraft` ← `depends_on`: append `P_draft_SWE_bench`  (source: e-swebench-haystack "benchmark for")
- `P_draft_NLAH` ← `depends_on`: append `P_draft_SWE_bench`  (source: e-swebench-pan "benchmark for")
- `P_draft_AHE` ← `depends_on`: append `P_draft_SWE_bench`  (source: e-swebench-ahe "transfer benchmark")
- `P_draft_HGM` ← `depends_on`: append `P_draft_SWE_bench`  (source: e-hgm-swe "evaluated on")

## Hierarchy / parent ("v1 redesign of", "extended by", "substrate for")

- `P_draft_OpenHands_SDK` ← `parent`: `P_draft_OpenHands_Platform`  (source: e-openhands-sdk "v1 redesign of")
- `P_draft_OpenHands_Versa` ← `parent`: `P_draft_OpenHands_Platform`  (source: e-openhands-versa "substrate for OpenHands-Versa")
- `P_draft_SWE_bench_Live` ← `parent`: `P_draft_SWE_bench`  (source: e-swebench-live "extended by")
- `P_draft_LoCoBench_Agent` ← `parent`: `P_draft_SWE_bench`  (source: e-swebench-loco "extended by")

## Dependency / "cites" / "uses"

- `P_draft_AHE` ← `depends_on`: append `P_draft_SWE_agent_ACI`  (source: e-ahe-yang "cites SWE-agent")
- `P_draft_AHE` ← `depends_on`: append `P_draft_OpenHands_Platform`  (source: e-ahe-openhands "cites OpenHands")
- `P_draft_AHE` ← `depends_on`: append `P_draft_ClaudeCode`  (source: e-ahe-claudecode "cites Claude Code")
- `P_draft_ClaudeCode` ← `parts`: append `P_draft_Externalization_Framework`  (source: e-claudecode-zouet "cites externalization") — Note: actually a citation, not part-of; capturing as related_lines instead
- `P_draft_Code_as_Harness` ← `depends_on`: append `P_draft_OpenHands_Platform`  (source: e-ning-openhands "cites OpenHands")
- `P_draft_NLAH` ← `depends_on`: append `P_draft_ClaudeCode`, `P_draft_OpenHands_Platform`  (source: e-pan-claudecode + e-pan-openhands "cites …")
- `P_draft_Code_as_Harness` ↔ `P_draft_NLAH` `related_lines`: link via "code vs NL harness pair" (source: e-ning-code) — escalated below to A_draft / D_draft? — see escalation reasoning; here treated as paired-pair patch
- `P_draft_OpenHands_SDK` ← `depends_on`: append `P_draft_MCP_Protocol`  (source: e-openhands-sdk-mcp "native MCP integration")
- `P_draft_Alita` ← `depends_on`: append `P_draft_MCP_Protocol`  (source: e-alita-mcp "self-generates MCPs")
- `P_draft_WangEtAl2024a_LLMAgent_Survey` ← `caused_by`: `[]`; pre-dates externalization; for reverse direction: `P_draft_Externalization_Framework` ← `caused_by`: append `P_draft_WangEtAl2024a_LLMAgent_Survey`  (source: e-wang24a-zhou "founding survey ↔ unified externalisation review")

## SWE-bench critique / reproducibility / scale-extending ("reproducibility critique", "extends with PR-scale dataset", "survey covering …")

- `P_draft_OAgents` ← `related_lines`: append "critique-of P_draft_SWE_bench" (source: e-zhuoagents-jimenez "reproducibility critique")
- `P_draft_AIDev` ← `related_lines`: append "scale-extends P_draft_SWE_bench" (source: e-aidev-jimenez "extends with PR-scale dataset")

## Causal / "config study of", "AGENTS.md ↔ CLAUDE.md", "bug study of"

- `P_draft_ClaudeCode` ← `causes` (downstream studies): conceptually `P_draft_AGENTS_md_Effect`, `P_draft_Engineering_Pitfalls`, `P_draft_AIDev`, `P_draft_Grep_beats_Vector` all *study* Claude Code as object — these reverse-direction edges are best captured in the *downstream* cards' `caused_by` field:
  - `P_draft_AGENTS_md_Effect` ← `caused_by`: append `P_draft_ClaudeCode`  (source: e-lulla-claudecode "AGENTS.md ↔ CLAUDE.md")
  - `P_draft_Engineering_Pitfalls` ← `caused_by`: append `P_draft_ClaudeCode`  (source: e-zhang26-claudecode "bug study of Claude Code")
  - `P_draft_AIDev` ← `caused_by`: append `P_draft_ClaudeCode`  (source: e-liev26-claudecode "932K PRs incl. Claude Code")
  - `P_draft_Grep_beats_Vector` ← `caused_by`: append `P_draft_ClaudeCode`  (source: e-sen-claudecode "evaluates Claude Code harness")

## Shared / Analogy ("shared: …")

For canvas edges that say "shared: X", these are weaker than full analogy and become `related_lines` cross-links:

- `P_draft_ACE` ↔ `P_draft_Externalization_Framework`: `related_lines` cross-link "context as evolving artifact" (source: e-ace-ext)
- `P_draft_GCC` ↔ `P_draft_ACE`: `related_lines` cross-link "structured context mgmt" (source: e-gcc-ace)
- `P_draft_ACC` ↔ `P_draft_ACE`: `related_lines` cross-link "autonomous context curation" (source: e-acc-ace)
- `P_draft_PAACE` ↔ `P_draft_ACE`: `related_lines` cross-link "automated context engineering" (source: e-paace-ace)
- `P_draft_ByteRover` ↔ `P_draft_Externalization_Framework`: `related_lines` cross-link "agent-native externalization" (source: e-byterover-zhou)
- `P_draft_Structural_Context_Model` ↔ `P_draft_Externalization_Framework`: `related_lines` cross-link "formal context model" (source: e-jia-ext)
- `P_draft_OrcaLoca` ↔ `P_draft_ACE`: `related_lines` cross-link "priority + context pruning" (source: e-orca-context)
- `P_draft_Grep_beats_Vector` ↔ `P_draft_ByteRover`: `related_lines` cross-link "anti-vector-DB" (source: e-sen-byterover)
- `P_draft_AHE` ↔ `P_draft_HGM`: `related_lines` cross-link "self-evolving agents" (source: e-hgm-ahe) — but ALSO escalated below to E_draft
- `P_draft_AWorld` ↔ `P_draft_SmallThinker`: `related_lines` cross-link "Qwen3 local stack" (source: e-aworld-smallthinker)
- `P_draft_AWorld` ↔ `P_draft_MCP_Bridge`: `related_lines` cross-link "open-weights Qwen3 SOTA" (source: e-aworld-bridge)
- `P_draft_Cost_of_Pass` ↔ `P_draft_AWorld`: `related_lines` cross-link "cost-of-pass" (source: e-efficient-aworld)
- `P_draft_FAME` ↔ `P_draft_Autellix`: `related_lines` cross-link "program-aware serving" (source: e-fame-autellix)
- `P_draft_FAME` ↔ `P_draft_MCP_Universe`: `related_lines` cross-link "MCP infrastructure" (source: e-fame-mcpuni)
- `P_draft_MSB` ← `caused_by`: append related "MCPSafetyScanner family" (source: e-safety-msb "shared: MCP attack taxonomy") — RadosevichHalloran2025 was dropped as a P card; relation captured as note
- `P_draft_MSB` ← `caused_by`: append related "SongEtAl2025a attack taxonomy" (source: e-song-msb "shared: MCP attack taxonomy") — SongEtAl2025a dropped; relation noted

## Causal / "defends against"

- `P_draft_MCP_Guard` ← `caused_by`: append `P_draft_MSB`  (source: e-guard-msb "defends against MSB attacks")

## Ray2025 fan-out (MCP infrastructure / benchmark / security)

- `P_draft_MCP_Universe` ← `depends_on`: append `P_draft_MCP_Protocol`  (source: e-ray-mcpuni "benchmarked by")
- `P_draft_MCPToolBench` ← `depends_on`: append `P_draft_MCP_Protocol`  (source: e-ray-mcptool "benchmarked by")
- `P_draft_MCP_AgentBench` ← `depends_on`: append `P_draft_MCP_Protocol`  (source: e-ray-mcpagent "benchmarked by")
- `P_draft_ScaleMCP` ← `depends_on`: append `P_draft_MCP_Protocol`  (source: e-ray-scalemcp "extended by")
- `P_draft_MCP_Bridge` ← `depends_on`: append `P_draft_MCP_Protocol`  (source: e-ray-bridge "proxy implementation of")
- `P_draft_MSB` ← `depends_on`: append `P_draft_MCP_Protocol`  (source: e-ray-safety "security audit of")
- `P_draft_MCP_Guard` ← `depends_on`: append `P_draft_MCP_Protocol`  (source: e-ray-guard "defense for")
- `P_draft_MCPToolBench` ← `related_lines`: cross-link to `P_draft_MCP_Bridge` "benchmark used by" (source: e-mcptool-bridge)
- `P_draft_MCPToolBench` ↔ `P_draft_MCP_Universe`: `related_lines` "cites" (source: e-mcptool-mcpuni)

## Theme-5 (generalist family) lineage

- `P_draft_Magentic_One` ← `caused_by`: append `P_draft_WangEtAl2024a_LLMAgent_Survey`  (source: e-wang24a-magentic "framework reference")
- `P_draft_Alita` ← `depends_on`: append `P_draft_Magentic_One`  (source: e-alita-magentic "cites Magentic-One")
- `P_draft_HGM` ↔ `P_draft_AHE`: see E_draft escalation below.

## Local / serving misc

- `P_draft_Autellix` ↔ `P_draft_SmallThinker`: `related_lines` "serving for local models" (source: e-autellix-smallthinker)
- `P_draft_SmallThinker` ← `depends_on`: append `P_draft_AWQ`  (source: e-awq-smallthinker "quantization baseline")
- `P_draft_AWQ` ↔ AgostinoDSouza2026: noted in P_draft_AWQ.啟發 (CATs dropped; relation captured as cross-ref) (source: e-awq-cats "enables 22 local models")

## Cross-theme (no standalone card needed)

- `P_draft_AIDev` ↔ misc — already covered above
- `P_draft_Engineering_Pitfalls` ↔ misc — already covered above
- WangEtAl2024b → YangEtAl2024 "SE-agents survey" — WangEtAl2024b is a dropped survey; relation captured in F_draft_T1.Q4 reference (source: e-wangse-yang)
- WangEtAl2024c → SoniEtAl2025 "substrate for OpenHands-Versa" — already covered in P_draft_OpenHands_Versa.parent
- RoyEtAl2026 (CEDAR) → ZhangEtAl2025a (ACE): CEDAR dropped; relation captured in F_draft_T2 Q2 (source: e-cedar-ace "domain-specific context engineering")
- Wu2025 → Ray2025: Wu2025 dropped; relation captured in F_draft_T5 Q4 (source: e-wu2025-mcp "uses MCP")
- RamaEtAl2025 → Ray2025: RamaEtAl2025 dropped; relation captured in F_draft_T5 Q4 (source: e-rama-mcp "agent SDK over MCP")
- AgostinoDSouza2026 → LiuEtAl2026: AgostinoDSouza2026 dropped; relation captured in P_draft_ClaudeCode.啟發 (source: e-cats-claudecode "shared: harness for local agents")
- LiuEtAl2026 → SantosEtAl2025 "config study of" — SantosEtAl2025 dropped (captured inside P_draft_ClaudeCode); already covered
- Rombaut2026 → LiuEtAl2026 / WangEtAl2024c "compares scaffolds incl. …" — Rombaut2026 dropped; captured in F_draft_T1.Q4 (source: e-rombaut-claudecode + e-rombaut-openhands)
- Haseeb2025 → LiuEtAl2026 "uses Claude Code" — Haseeb2025 dropped; captured in F_draft_T2.member_points note (source: e-haseeb-claudecode)
- Haseeb2025 → ZhouEtAl2026 "cites externalization" — Haseeb2025 dropped; captured as F_draft_T2 cross-ref (source: e-haseeb-zhou)
- MohammadiEtAl2025 → YehudaiEtAl2025: both dropped; captured in F_draft_T4.Q4 (source: e-mohammadi-yehudai)

## Escalated to standalone Line cards (see lines/E_draft_*.md, lines/D_draft_*.md)

- **E_draft_Externalization_Lineage** — captures the multi-paper evolution `SWE-agent ACI → Claude Code/OpenHands → ZhouEtAl2026 Externalization → ACE / NLAH / AHE` (step6 cross-theme #1 + #3 unpacked across ≥3 paragraphs; major axis in step6's Cross-Theme Synthesis)
- **D_draft_Simple_Beats_Fancy** — captures the cross-theme debate between simple-派 (Observation Masking, Grep, Versa, AGENTS.md, NLAH, while-loop, Alita) and fancy-派 (ScaleMCP, FAME, ByteRover) (step6 cross-theme #2 + §Contested explicitly unpacked across ≥7 mentions across 4 themes; named "the strongest converging finding" → major axis)
- **D_draft_MCP_Capability_vs_Security** — captures the capability-vs-security divergence (step6 cross-theme #4 explicitly called "the field's biggest unhealed crack"; ≥3 paragraphs across theme overview + methodology + open issues + cross-theme synthesis)
- **A_draft_Externalization_vs_SelfImproving** — captures the structural isomorphism between "externalisation" papers and "self-improving" papers (step6 cross-theme #3 explicitly "two views of the same shift")
