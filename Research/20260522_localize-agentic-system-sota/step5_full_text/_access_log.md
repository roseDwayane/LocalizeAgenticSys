---
session_id: "20260522"
topic: "How to build a state-of-the-art localized agentic system"
date: "2026-05-22"
step: 5
---

# Full-Text Access Log / 全文取得紀錄

> Step 5 of the Research Agent pipeline. 58 shortlisted papers were resolved via:
> - **local_pdf**: 44 papers (T1 + T2) extracted from the user-supplied `full_pdf/` directory using `pypdf` 6.10.0.
> - **arxiv_pdf**: 13 T3 papers fetched from `https://arxiv.org/pdf/{arxiv_id}.pdf` and extracted with the same `pypdf` pipeline.
> - **abstract_only**: 1 paper (`paper_004`, ACM SIGKDD) — DOI URL was paywalled (HTTP 403) so the reading note was written from the step3 abstract.

## Summary / 統計

| Source | Count |
|---|---|
| local_pdf | 44 |
| arxiv_pdf | 13 |
| abstract_only | 1 |
| failed | 0 |
| **Total** | **58** |

## Per-paper status / 逐篇狀態

| paper_id | citation_key | tier | source | status | details |
|---|---|---|---|---|---|
| `paper_002` | `Jimenez-GomezEtAl2023` | T1 | local_pdf | success | pages=52, chars=153737 — `full_pdf/Carlos2024.pdf` |
| `paper_003` | `YangEtAl2024` | T1 | local_pdf | success | pages=118, chars=291755 — `full_pdf/John2024.pdf` |
| `paper_005` | `WangEtAl2024c` | T1 | local_pdf | success | pages=38, chars=104852 — `full_pdf/Xingyao2025.pdf` |
| `paper_006` | `WangEtAl2025c` | T1 | local_pdf | success | pages=19, chars=64567 — `full_pdf/Xingyao2026.pdf` |
| `paper_008` | `ZhouEtAl2026` | T1 | local_pdf | success | pages=54, chars=217943 — `full_pdf/Chenyu2026.pdf` |
| `paper_011` | `Ray2025` | T1 | local_pdf | success | pages=45, chars=234595 — `full_pdf/Ray2025.pdf` |
| `paper_020` | `LindenbauerEtAl2025` | T1 | local_pdf | success | pages=31, chars=95260 — `full_pdf/Tobias2025.pdf` |
| `paper_021` | `ZhangEtAl2025a` | T1 | local_pdf | success | pages=32, chars=111386 — `full_pdf/Qizheng2026.pdf` |
| `paper_022` | `WuEtAl2025` | T1 | local_pdf | success | pages=10, chars=40912 — `full_pdf/Junde2026.pdf` |
| `paper_028` | `LiuEtAl2026` | T1 | local_pdf | success | pages=46, chars=183510 — `full_pdf/Jiacheng2026.pdf` |
| `paper_029` | `SantosEtAl2025` | T1 | local_pdf | success | pages=5, chars=27788 — `full_pdf/Hélio2025.pdf` |
| `paper_031` | `NingEtAl2026` | T1 | local_pdf | success | pages=102, chars=357984 — `full_pdf/Xuying2026.pdf` |
| `paper_032` | `LinEtAl2026` | T1 | local_pdf | success | pages=35, chars=128446 — `full_pdf/Jiahang2026.pdf` |
| `paper_033` | `PanEtAl2026` | T1 | local_pdf | success | pages=22, chars=77168 — `full_pdf/Linyue2026.pdf` |
| `paper_036` | `SenEtAl2026` | T1 | local_pdf | success | pages=9, chars=46485 — `full_pdf/Sahil2026.pdf` |
| `paper_038` | `Rombaut2026` | T1 | local_pdf | success | pages=42, chars=140640 — `full_pdf/Benjamin2026.pdf` |
| `paper_046` | `AgostinoDSouza2026` | T1 | local_pdf | success | pages=8, chars=37687 — `full_pdf/Christopher2026.pdf` |
| `paper_061` | `ZhuEtAl2025` | T1 | local_pdf | success | pages=28, chars=76737 — `full_pdf/OPPO2025.pdf` |
| `paper_001` | `WangEtAl2024a` | T2 | local_pdf | success | pages=42, chars=152474 — `full_pdf/Lei2025.pdf` |
| `paper_009` | `FourneyEtAl2024` | T2 | local_pdf | success | pages=31, chars=95004 — `full_pdf/Fourney2024.pdf` |
| `paper_015` | `LuoEtAl2025b` | T2 | local_pdf | success | pages=31, chars=142459 — `full_pdf/Ziyang2025.pdf` |
| `paper_016` | `YehudaiEtAl2025` | T2 | local_pdf | success | pages=25, chars=115280 — `full_pdf/Yehudai12026.pdf` |
| `paper_017` | `ZhangEtAl2025c` | T2 | local_pdf | success | pages=24, chars=78480 — `full_pdf/Linghao2025.pdf` |
| `paper_018` | `Haseeb2025` | T2 | local_pdf | success | pages=13, chars=39663 — `full_pdf/Muhammad2025.pdf` |
| `paper_019` | `QiuEtAl2025b` | T2 | local_pdf | success | pages=54, chars=125584 — `full_pdf/Jielin2025.pdf` |
| `paper_023` | `LiEtAl2025` | T2 | local_pdf | success | pages=27, chars=81347 — `full_pdf/Mufei2025.pdf` |
| `paper_025` | `QiuEtAl2025a` | T2 | local_pdf | success | pages=12, chars=40519 — `full_pdf/Jiahao2025.pdf` |
| `paper_027` | `Verma2026` | T2 | local_pdf | success | pages=4, chars=18768 — `full_pdf/Nikhil2026.pdf` |
| `paper_030` | `WangEtAl2025b` | T2 | local_pdf | success | pages=30, chars=90239 — `full_pdf/Wenyi2025.pdf` |
| `paper_034` | `LiEtAl2026` | T2 | local_pdf | success | pages=5, chars=32299 — `full_pdf/Hao2026.pdf` |
| `paper_035` | `ZhangEtAl2026` | T2 | local_pdf | success | pages=11, chars=73562 — `full_pdf/Ruixin2026.pdf` |
| `paper_037` | `LullaEtAl2026` | T2 | local_pdf | success | pages=5, chars=29834 — `full_pdf/Lulla2026.pdf` |
| `paper_041` | `WangEtAl2024b` | T2 | local_pdf | success | pages=19, chars=86933 — `full_pdf/Yanlin2024.pdf` |
| `paper_042` | `FanEtAl2025` | T2 | local_pdf | success | pages=20, chars=53465 — `full_pdf/Shiqing2025.pdf` |
| `paper_047` | `LumerEtAl2025` | T2 | local_pdf | success | pages=17, chars=65713 — `full_pdf/Elias2025.pdf` |
| `paper_048` | `GuoEtAl2025` | T2 | local_pdf | success | pages=25, chars=74287 — `full_pdf/Zikang2025.pdf` |
| `paper_054` | `AhmadiEtAl2025` | T2 | local_pdf | success | pages=42, chars=58549 — `full_pdf/Arash2026.pdf` |
| `paper_055` | `YuEtAl2025b` | T2 | local_pdf | success | pages=20, chars=76481 — `full_pdf/Zhongming2025.pdf` |
| `paper_056` | `TangEtAl2025` | T2 | local_pdf | success | pages=58, chars=139573 — `full_pdf/Jiabin2025.pdf` |
| `paper_057` | `SoniEtAl2025` | T2 | local_pdf | success | pages=15, chars=54359 — `full_pdf/Aditya2025.pdf` |
| `paper_058` | `SongEtAl2025b` | T2 | local_pdf | success | pages=15, chars=40713 — `full_pdf/Zenergize2025.pdf` |
| `paper_059` | `Yuksel2025` | T2 | local_pdf | success | pages=10, chars=49693 — `full_pdf/Yuksel2025.pdf` |
| `paper_060` | `YuEtAl2025a` | T2 | local_pdf | success | pages=12, chars=38092 — `full_pdf/Chengyue2025.pdf` |
| `paper_062` | `WangEtAl2025a` | T2 | local_pdf | success | pages=17, chars=52854 — `full_pdf/Wangchunshu2025.pdf` |
| `paper_004` | `MohammadiEtAl2025` | T3 | abstract_only | paywalled | ACM SIGKDD — DOI returns 403 from dl.acm.org; note written from step3 abstract. |
| `paper_007` | `LinEtAl2023` | T3 | arxiv_pdf | success | arxiv:2306.00978, pages=15, chars=67423 |
| `paper_014` | `EhteshamEtAl2025` | T3 | arxiv_pdf | success | arxiv:2505.02279, pages=21, chars=76511 |
| `paper_024` | `NguyenEtAl2026` | T3 | arxiv_pdf | success | arxiv:2604.01599, pages=19, chars=46465 |
| `paper_026` | `JiaEtAl2026` | T3 | arxiv_pdf | success | arxiv:2602.08276, pages=40, chars=91414 |
| `paper_039` | `Wu2025` | T3 | arxiv_pdf | success | arxiv:2504.04650, pages=10, chars=35572 |
| `paper_040` | `RamaEtAl2025` | T3 | arxiv_pdf | success | arxiv:2503.11444, pages=8, chars=25028 |
| `paper_043` | `RadosevichHalloran2025` | T3 | arxiv_pdf | success | arxiv:2504.03767, pages=27, chars=37208 |
| `paper_044` | `LuoEtAl2025a` | T3 | arxiv_pdf | success | arxiv:2502.13965, pages=17, chars=78749 |
| `paper_045` | `RoyEtAl2026` | T3 | arxiv_pdf | success | arxiv:2601.06606, pages=5, chars=20276 |
| `paper_049` | `KulkarniEtAl2026` | T3 | arxiv_pdf | success | arxiv:2601.14735, pages=25, chars=82403 |
| `paper_050` | `XingEtAl2025` | T3 | arxiv_pdf | success | arxiv:2508.10991, pages=14, chars=53245 |
| `paper_051` | `SongEtAl2025a` | T3 | arxiv_pdf | success | arxiv:2506.02040, pages=25, chars=109612 |
| `paper_052` | `ZhangEtAl2025b` | T3 | arxiv_pdf | success | arxiv:2510.15994, pages=32, chars=80702 |

## Notes / 備註

- **PDF section detection.** Headers were detected via heuristic regexes that tolerate the `pypdf` ‘spaced first letter’ artifact (`I NTRODUCTION`, `M ETHOD` …). When a Method header could not be isolated, the Method section of the reading note falls back to the paper's abstract and is clearly labelled as such.
- **Reference stripping.** Reference / Bibliography sections were located by header patterns and truncated before note generation to keep notes focused on substantive content.
- **Table of contents.** A few survey papers (e.g. `ZhouEtAl2026`) have an introduction-like ToC at the front; a dot-leader heuristic detects and skips those, falling back to the abstract for the Problem & Motivation section.
- **paper_004 (`MohammadiEtAl2025`)** is ACM-paywalled. `WebFetch` against `https://dl.acm.org/doi/10.1145/3711896.3736570` returned HTTP 403. The reading note was generated from the step3 abstract only and is tagged `source: abstract_only`.
- **Cross-paper links.** Every reading note section 8 contains Obsidian wiki-links (`[[CitationKey]]`) for shortlist papers referenced via the `citation_network.references` field of `step3_shortlist.json`.

## Tools / 工具

- `pypdf==6.10.0` (Python)
- `urllib.request` (arXiv PDF download)
- `WebFetch` (used only to test the ACM DOI, which returned 403)
