# Pass 2 — Unclassified Edges

Canvas edges whose labels did not cleanly match the edge-label keyword table in the skill spec and were not promoted to frontmatter patches or standalone Line cards.

After scanning all 85 edges in `step6_knowledge_graph.canvas`, **0 edges remain unclassified**.

All edges were covered as one of:
- Anchor / overview meta-edge (5 edges) — handled via `related_planes` on the target P_draft cards
- Bibliographic ("cites", "benchmark for", "evaluated on") — frontmatter patches under `depends_on`
- Hierarchy ("v1 redesign of", "extended by", "substrate for") — frontmatter patches under `parent`
- Causal ("config study of", "bug study of", "AGENTS.md ↔ CLAUDE.md", "defends against") — frontmatter patches under `caused_by`
- Shared ("shared: …") — frontmatter `related_lines` cross-links
- Major cross-theme — escalated to E_draft_Externalization_Lineage / D_draft_Simple_Beats_Fancy / D_draft_MCP_Capability_vs_Security / A_draft_Externalization_vs_SelfImproving

If subsequent canvas revisions introduce new edge labels not in this table, log them here for human triage.
