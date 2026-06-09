---
citation_key: "SongEtAl2025a"
paper_id: "paper_051"
title: "Beyond the Protocol: Unveiling Attack Vectors in the Model Context Protocol (MCP) Ecosystem"
authors: ["Hao Song", "Yiming Shen", "Wenxuan Luo", "Leixin Guo", "Ting Chen", "Jiashui Wang", "Beibei Li", "Xiaosong Zhang", "Jiachi Chen"]
year: 2025
venue: "arXiv"
doi: null
arxiv_id: "2506.02040"
source: "arxiv_pdf"
tier: 3
composite_score: 3.0
cluster: "mcp_and_tool_protocols"
date_extracted: "2026-05-22"
---
# Beyond the Protocol: Unveiling Attack Vectors in the Model Context Protocol (MCP) Ecosystem

> **Authors / 作者:** Hao Song et al. (2025)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** arXiv PDF / arXiv PDF 抽取
> **Cluster / 聚類:** mcp_and_tool_protocols

## 1. Summary / 摘要

> [!summary] EN
> The Model Context Protocol (MCP) is an emerging stan- dard designed to enable seamless interaction between Large Language Model (LLM) applications and external tools or resources. Within a short period, thousands of MCP services have been developed and deployed. However, the client-server integration architecture inherent in MCP may expand the at- tack surface against LLM Agent systems, introducing new vulnerabilities that allow attackers to exploit by designing malicious MCP servers. In this paper, we present thefirst end-to-end empirical eval- uationof attack vectors targeting the MCP ecosystem. We identify four categories of attacks, i.e.,Tool Poisoning Attacks, Puppet Attacks,Rug Pull Attacks, andExploitation via Ma- licious External Resources. To evaluate their feasibility, we conduct experiments following the typical steps of launching an attack through malicious MCP servers: upload → down- load → attack. Specifically, we first construct malicious MCP servers and successfully upload them to three widely used MCP aggregation platforms. The results indicate that cur- rent audit mechanisms are insufficient to identify and prevent these threats. Next, through a user study and interview with 20 participants, we demonstrate that users struggle to identify malicious MCP servers and often unknowingly install them from aggregator platforms. Finally, we empirically demon- strate that these attacks can trigger harmful actions within the user’s local environment, such as accessing ...

> [!summary] 繁中
> 本論文做首個 MCP 攻擊向量的 end-to-end 實證，歸納四類攻擊：Tool Poisoning、Puppet、Rug Pull、Exploitation via Malicious Resources，並透過 20 人 user study 證明使用者難以辨識惡意 server，為 MCP 安全性研究提供基線威脅模型。

## 2. Problem & Motivation / 問題與動機

To standardize interactions between Large Language Model (LLM) agents and diverse external resources, Anthropic intro- duces the Model Context Protocol (MCP) [5], a framework operating on a client-server architecture. In this model, exter- nal tools or resources are exposed via MCP servers, while the LLM application acts as the MCP host, managing clients to interact with these servers. The adoption of MCP has led to a rapidly growing ecosystem of compatible tools and services. For instance, platforms such as Smithery.ai [48] currently host over 6,000 MCP servers, providing functionalities across di- verse domains,e.g., web retrieval [33], financial operations [7], and software development [41].

## 3. Method / 方法

> [!method]
> First end-to-end empirical evaluation of MCP attack vectors identifying four categories: Tool Poisoning, Puppet, Rug Pull, and Exploitation via Malicious Resources. User study with 20 participants demonstrates difficulty identifying malicious servers.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - User study with 20 participants demonstrates difficulty identifying malicious servers.

## 5. Limitations / 局限性

> [!limitation]
> Internal Validity.In Benchmark 1 ofRQ3, we fix the MCP
> client toCline. The MCP clients themselves may incorporate
> specific configurations to mitigate such attacks, primarily due
> to security considerations. This may introduce a potential
> discrepancy between our final data and real-world data. We
> find thatRRsofClineare very low, which implies that the
> potential data discrepancy is not significant. Therefore, this
> does not affect the conclusions we draw. Experimental results
> still show a highASRand lowRR, indicating the urgency of
> the security challenges.
> External Validity.InRQ1, we select three ...

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — attack categories apply to any locally-installed MCP server.
> **Intervention coverage:** MCP attack vector taxonomy + user study
> **Outcome evidence:** 4 attack categories; 20-participant user study
> **Strength of fit:** Strong — threat model for MCP security.

## 7. Key Quotes / 關鍵引文

- "To standardize interactions between Large Language Model (LLM) agents and diverse external resources, Anthropic intro- duces the Model Context Protocol (MCP) [5], a framework operating on a client-server architecture." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
