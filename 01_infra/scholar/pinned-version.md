# SCHOLAR pinned version

> 這份檔追蹤 `00_SCHOLAR/` submodule 目前 pin 在哪個 SCHOLAR commit / tag、為什麼 pin 在這裡、什麼時候可以 bump。

---

## 目前 pin

| 欄位 | 值 |
|---|---|
| Tag / commit | `v0.2.1` |
| Pin 日期 | 2026-05-22 |
| Pin 者 | KYC |
| 理由 | satellite 初次接入；SCHOLAR v0.2.1 是當前穩定版（VERSION 檔內容） |
| 下次 bump 條件 | SCHOLAR 釋出 v0.3.x 且 CHANGELOG 無對本衛星的 BREAKING |

---

## 歷史

| 日期 | 從 | 到 | 動機 | 操作者 |
|---|---|---|---|---|
| 2026-05-22 | — | v0.2.1 | 衛星 onboard | KYC |

---

## Bump SOP

```bash
cd 00_SCHOLAR
git fetch --tags
git checkout <new-tag>
cd ..

# 1. 先看本地有沒有未回灌的 hack（你的衛星 .claude/ vs snapshot）
diff -r 00_SCHOLAR/.claude/ .claude/ || true

# 2. 確認 SCHOLAR CHANGELOG 沒有對本衛星的 BREAKING
grep -E '^### .* (BREAKING|breaking)' 00_SCHOLAR/CHANGELOG.md | head

# 3. mirror snapshot 到 live
rm -rf .claude/
cp -R 00_SCHOLAR/.claude/ .claude/

# 4. commit（單獨一個 commit，方便 revert）
git add 00_SCHOLAR .claude/
git commit -m "chore: bump SCHOLAR to <new-tag>"

# 5. 在本檔的「歷史」表加一列、更新「目前 pin」區
```
