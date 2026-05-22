# 01_infra — Satellite-local infrastructure

衛星本地的基礎建設區。任何**跟 LocalizeAgenticSys 這個衛星的研究內容無關、但跟「怎麼使用 SCHOLAR」有關**的東西都放這裡。

> 在 SCHOLAR 的 satellite layout 中，`01_infra/` 是固定的第二個編號目錄。
> 詳見 [SCHOLAR/00_docs/overview.md §4](../00_SCHOLAR/00_docs/overview.md)
> 與 [SCHOLAR/02_playbooks/_TEMPLATE.md](../00_SCHOLAR/02_playbooks/_TEMPLATE.md).

---

## 目錄

```text
01_infra/
├── README.md              ← 你正在讀的這份
├── .gitignore             ← .state/ 不進 git；.logs/**/*.tmp 等噪音
├── scholar/               ← 對 00_SCHOLAR submodule 的衛星筆記區
│   ├── README.md          ← 本資料夾使用守則
│   ├── notes/             ← 「怎麼用 SCHOLAR」累積筆記（永久，不刪）
│   ├── overrides.md       ← 「為什麼不照 SCHOLAR 走」豁免清單
│   ├── pinned-version.md  ← pin 在哪個 commit + 為什麼 + 解鎖條件
│   └── upstream/
│       ├── INDEX.md       ← 上游 feedback 索引表
│       ├── _outbox/       ← UFC 卡草稿（待送 core）
│       └── _sent/         ← 已送出存檔
├── .logs/                 ← 工具產出（進 git）
│   ├── hooks/             ← Claude Code hook 觸發紀錄
│   ├── arch-check/        ← import-linter / 拔插頭測試輸出
│   └── sessions/          ← AI agent 對話摘要（選擇性）
└── .state/                ← 當前 session 狀態（不進 git）
```

---

## 四種 log 的歸屬規則

| 種類            | 路徑                  | 進 git？ | 保留週期        |
| ------------- | ------------------- | ------ | ----------- |
| Hook 觸發紀錄     | `.logs/hooks/`      | ✅      | 月檔輪替        |
| Arch 檢查輸出     | `.logs/arch-check/` | ✅      | 永久          |
| Session 對話摘要  | `.logs/sessions/`   | ✅（選擇性） | 自決          |
| Session 當前狀態  | `.state/`           | ❌      | ad-hoc，可隨時刪 |

---

## 黃金規則（核心—衛星介面的操作哲學）

> 發現 SCHOLAR 有問題（bug / 文件錯 / 設計缺陷）時：
>
> - **不**直接改 `00_SCHOLAR/`（read-only submodule）
> - **不**塞進 `scholar/notes/`（那是「怎麼用」的累積筆記，不是 feedback）
> - **要**在 `scholar/upstream/_outbox/` 開一張 **UFC 卡**（Upstream Feedback Card）
> - **要**繼續手上的當前任務，**不要中斷**
>
> 批次處理上游 feedback 是另一個時段的事 — 不要打斷心流。
