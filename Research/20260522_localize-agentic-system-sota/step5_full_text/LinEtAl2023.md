---
citation_key: "LinEtAl2023"
paper_id: "paper_007"
title: "AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration"
authors: ["Ji Lin", "Jiaming Tang", "Haotian Tang", "Shang Yang", "Wei-Ming Chen", "Wei-Chen Wang", "Guangxuan Xiao", "Xingyu Dang", "Chuang Gan", "Song Han"]
year: 2023
venue: "arXiv"
doi: null
arxiv_id: "2306.00978"
source: "arxiv_pdf"
tier: 3
composite_score: 3.5
cluster: "local_inference_and_edge_deployment"
date_extracted: "2026-05-22"
---
# AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration

> **Authors / 作者:** Ji Lin et al. (2023)
> **Venue / 發表場域:** arXiv
> **Source / 來源:** arXiv PDF / arXiv PDF 抽取
> **Cluster / 聚類:** local_inference_and_edge_deployment

## 1. Summary / 摘要

> [!summary] EN
> Large language models (LLMs) have transformed numerous AI applications.On-deviceLLM is becoming increas- ingly important: running LLMs locally on edge devices can reduce the cloud computing cost and protect users’ privacy. However, the astronomical model size and the limited hardware resource pose significant deployment challenges. We propose Activation-aware Weight Quantization (AWQ), a hardware-friendly approach for LLM low-bit weight-only quantization. AWQ finds that not all weights in an LLM are equally important. Protecting only 1%salient weights can greatly reduce quantization error. To identify salient weight channels, we should refer to the activation distribution, not weights. To avoid the hardware-inefficient mix-precision quantization, we mathematically derive that scaling up the salient channels can reduce the quantization error. AWQ employs an equivalent transformation to scale the salient weight channels to protect them. The scale is determined by collecting the activation statistics offline. AWQ does not rely on any backpropagation or reconstruction, so it generalizes to different domains and modalities without overfitting the calibration set. AWQ outperforms existing work on various language modeling and domain-specific benchmarks (coding and math). Thanks to better generalization, it achieves excellent quantization performance forinstruction-tunedLMs and, for the first time,multi-modalLMs. Alongside AWQ, we implement TinyChat, an efficient and flexible ...

> [!summary] 繁中
> AWQ 提出 activation-aware weight quantization：保留少數對 activation 影響最大的 salient channel 不量化，其他 channel 安全縮放後量化，在邊緣裝置上達成 3× 加速，是 local LLM 推論的關鍵技術之一。

## 2. Problem & Motivation / 問題與動機

Deploying large language models (LLMs) directly on edge devices is crucial. On-device usage eliminates delays caused by sending data to a cloud server and enables LLMs to op- erate offline, which is beneficial for real-time applications like virtual assistants, chatbots, and autonomous vehicles. The operational costs associated with maintaining and scal- ing centralized cloud infrastructure can also be reduced. On-device LLM also enhances data security by keeping sensitive information local, reducing the chance of data breaches.

## 3. Method / 方法

> [!method]
> Proposes activation-aware weight quantization for efficient LLM deployment on edge devices by identifying and protecting salient weight channels while scaling others, achieving 3x speedup on mobile GPUs.
> 
> (Note: Method section was not isolated by header extraction — the above is drawn from the paper's abstract. See the source PDF for the full Method section.)

## 4. Findings / 發現

> [!findings]
> - As shown in previous work (Dettmers & Zettlemoyer, 2022; Frantar et al., 2022), grouped quantiza- tion is always helpful for improving performance/model size trade-off.
> - Models.We benchmarked our method on LLaMA (Tou- vron et al., 2023a) and OPT (Zhang et al., 2022) families.
> - We further benchmark an instruction- tuned model Vicuna (Chiang et al., 2023) and visual lan- guage models OpenFlamingo-9B (Awadalla et al., 2023) and LLaV A-13B (Liu et al., 2023a) to demonstrate the gen- erability of our method.
> - AWQ consistently improves the quantized performance compared to RTN and GPTQ (Frantar et al., 2022), showing generalization to instruction-tuned models.

## 5. Limitations / 局限性

> [!limitation]
> Limitations not explicitly demarcated in the extracted text; see Discussion of source PDF.

## 6. Relevance to PICO / 與研究主題的關聯

> [!relevance]
> **Population fit:** Direct — AWQ is the de facto quantisation for local LLM inference.
> **Intervention coverage:** Local inference acceleration / weight quantisation
> **Outcome evidence:** 3× speedup on mobile GPU; minimal accuracy loss
> **Strength of fit:** Strong — model-compression baseline cited everywhere.

## 7. Key Quotes / 關鍵引文

- "Deploying large language models (LLMs) directly on edge devices is crucial." — Introduction

## 8. Citations to Other Shortlist Papers / 引用集合內其他論文

_No references to other shortlist papers found in this paper's citation_network metadata._

## 9. Open Questions / 待釐清問題

- How does this work generalise beyond its evaluation setting to the broader local-agentic stack (memory, planning, tool routing)?
- What are the engineering costs of deploying this approach on a single-developer machine — memory, latency, dependencies?
- How does it interact with adjacent components in the SOTA stack (MCP servers, context engineering, sandboxing)?
