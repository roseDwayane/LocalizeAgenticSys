# 01_infra/scholar — Satellite-side notes about SCHOLAR

這個資料夾是 LocalizeAgenticSys 對 `00_SCHOLAR/` submodule 的**衛星端筆記區**，跟 SCHOLAR core 本體分開：

| 子資料夾 / 檔案          | 用途                                                | 寫入時機                       |
| ------------------ | ------------------------------------------------- | -------------------------- |
| `notes/`           | 「**怎麼用** SCHOLAR」的累積筆記（永久，不刪）                     | 學會新用法、踩坑後的解決方案、跨 session 心得 |
| `overrides.md`     | 「**為什麼不照** SCHOLAR 走」豁免清單（含解除條件）                  | 本衛星刻意偏離 SCHOLAR 標準做法時      |
| `pinned-version.md`| pin 在哪個 SCHOLAR commit / tag + 為什麼 + 解鎖條件          | 每次 bump submodule          |
| `upstream/`        | 衛星 → SCHOLAR core 的回饋通道（UFC 卡）                    | 踩到 SCHOLAR bug / 想要 feature |

---

## 三條硬規則

1. **`notes/` 不是 feedback**。是「我學會怎麼用 X」的私房筆記。如果是「X 壞掉了」或「X 設計不好」，去開 UFC 卡。
2. **`00_SCHOLAR/` 永遠不直接改**。read-only submodule，動了就 dirty。要改，去 SCHOLAR core repo 改、跑完 close-loop、再 `git submodule update --remote` 帶回來。
3. **UFC 卡是顯性人工介面**。寫好草稿在 `upstream/_outbox/`，由衛星 owner 手動複製貼上到 SCHOLAR core 的 `03_feedback/issues/`，本地原稿搬到 `_sent/` 存檔。不做半自動 sync 腳本。
