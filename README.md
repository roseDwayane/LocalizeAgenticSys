<p align="center">
  <img src="assets/nanoclaw-logo.png" alt="NanoClaw" width="400">
</p>

<p align="center">
  An AI assistant that runs agents securely in their own containers. Lightweight, built to be easily understood and completely customized for your needs.
</p>

<p align="center">
  <a href="https://nanoclaw.dev">nanoclaw.dev</a>&nbsp; • &nbsp;
  <a href="https://docs.nanoclaw.dev">docs</a>&nbsp; • &nbsp;
  <a href="README_zh.md">中文</a>&nbsp; • &nbsp;
  <a href="README_ja.md">日本語</a>&nbsp; • &nbsp;
  <a href="https://discord.gg/VDdww8qS42"><img src="https://img.shields.io/discord/1470188214710046894?label=Discord&logo=discord&v=2" alt="Discord" valign="middle"></a>&nbsp; • &nbsp;
  <a href="repo-tokens"><img src="repo-tokens/badge.svg" alt="repo tokens" valign="middle"></a>
</p>

---

## Why I Built NanoClaw

[OpenClaw](https://github.com/openclaw/openclaw) is an impressive project, but I wouldn't have been able to sleep if I had given complex software I didn't understand full access to my life. OpenClaw has nearly half a million lines of code, 53 config files, and 70+ dependencies. Its security is at the application level (allowlists, pairing codes) rather than true OS-level isolation. Everything runs in one Node process with shared memory.

NanoClaw provides that same core functionality, but in a codebase small enough to understand: one process and a handful of files. Claude agents run in their own Linux containers with filesystem isolation, not merely behind permission checks.

## Quick Start

```bash
git clone https://github.com/nanocoai/nanoclaw.git nanoclaw-v2
cd nanoclaw-v2
bash nanoclaw.sh
```

`nanoclaw.sh` walks you from a fresh machine to a named agent you can message. It installs Node, pnpm, and Docker if missing, registers your Anthropic credential with OneCLI, builds the agent container, and pairs your first channel (Telegram, Discord, WhatsApp, or a local CLI). If a step fails, Claude Code is invoked automatically to diagnose and resume from where it broke.

<details>
<summary><strong>Migrating from NanoClaw v1?</strong></summary>

Run from a fresh v2 checkout next to your v1 install:

```bash
git clone https://github.com/nanocoai/nanoclaw.git nanoclaw-v2
cd nanoclaw-v2
bash migrate-v2.sh
```

`migrate-v2.sh` finds your v1 install (sibling directory, or `NANOCLAW_V1_PATH=/path/to/nanoclaw`), migrates state into the v2 checkout, then `exec`s into Claude Code to finish the parts that need judgment (owner seeding, CLAUDE.local.md cleanup, fork-customisation replay).

Run the script directly, not from inside a Claude session — the deterministic side needs interactive prompts and real shell I/O for Node/pnpm bootstrap, Docker, OneCLI, and the container build.

**What it does:** merges `.env`, seeds the v2 DB from `registered_groups`, copies group folders + session data + scheduled tasks, installs the channel adapters you select, copies channel auth state (including Baileys keystore + LID mappings for WhatsApp), builds the agent container.

**What it doesn't:** flip the system service. Pick *"switch to v2"* at the prompt, or do it manually after testing — your v1 install is left untouched.

See [docs/v1-to-v2-changes.md](docs/v1-to-v2-changes.md) for what's different and [docs/migration-dev.md](docs/migration-dev.md) for development notes.

</details>

## 本專案教學：從 Clone 到 `pnpm run talk`

> 這是本 fork（LocalizeAgenticSys）的最短上手路徑：clone 下來、在終端機跟 agent 對話。
> 上游官方的完整安裝流程是 `bash nanoclaw.sh`（會走 OneCLI 憑證金庫）；下面的步驟改用 `.env` 直接帶憑證（native credentials），不需要安裝 OneCLI。

### 0. 前置需求

- **Node.js 22**（見 `nanoclaw/.nvmrc`）與 **pnpm 10**（`corepack enable` 或 `npm i -g pnpm`）
- **Docker Desktop**（必須先啟動 — agent 是跑在容器裡的）
- （可選）**Ollama** — 想完全本地推論才需要

### 1. Clone 並安裝相依套件

```bash
git clone https://github.com/roseDwayane/LocalizeAgenticSys.git
cd LocalizeAgenticSys/nanoclaw
pnpm install
```

### 2. 設定 `.env`

```bash
cp .env.example .env
```

打開 `.env`，二選一：

**A. 用 Anthropic 憑證（最簡單）**

```bash
NANOCLAW_NATIVE_CREDENTIALS=true
ANTHROPIC_API_KEY=sk-ant-...        # 或改填 CLAUDE_CODE_OAUTH_TOKEN=...
```

**B. 用本地 Ollama（零 API 費用）**

```bash
NANOCLAW_NATIVE_CREDENTIALS=true
ANTHROPIC_API_KEY=ollama            # 佔位用，Ollama 不驗證
ANTHROPIC_BASE_URL=http://host.docker.internal:11434
```

並確認 Ollama 在跑、模型已拉好（例如 `ollama pull gemma4`）。模型選擇與 prompt cache 加速等細節見 [nanoclaw/docs/ollama.md](nanoclaw/docs/ollama.md)。

### 3. Build agent 容器映像

```bash
./container/build.sh
```

第一次 build 要下載基底映像，會花幾分鐘。

> ⚠️ **每個 clone 都要自己 build，不能共用別台機器的 image。**
> Image 名稱是 `nanoclaw-agent-v2-<hash>`，其中 hash 由「專案的絕對路徑」算出（讓同機多個 checkout 不互相干擾）。換機器、換路徑、或搬移/改名專案資料夾，host 期待的 image 名稱就不同 — 重跑 `./container/build.sh` 即可。

### 4. 啟動 host（terminal 1，保持開著）

第一次啟動前要先蓋「升級標記」。NanoClaw 啟動時會檢查 `data/upgrade-state.json`，沒有它會直接拒絕啟動（`Upgrade tripwire: install not on the sanctioned path`）— 這個標記正常由官方 setup 流程產生，我們走捷徑所以手動蓋：

```bash
pnpm exec tsx scripts/upgrade-state.ts set   # 只需做一次
pnpm run dev
```

啟動後 host 會在 `data/cli.sock` 開出 CLI channel 的 Unix socket。

### 5. 建立第一個 CLI agent（terminal 2，只需做一次）

> ⚠️ 新開的 terminal 記得也要先 `cd` 進 `nanoclaw/` 目錄，否則會報
> `ERR_PNPM_NO_PKG_MANIFEST: No package.json found`。

```bash
cd LocalizeAgenticSys/nanoclaw   # 路徑依你 clone 的位置調整
pnpm exec tsx scripts/init-cli-agent.ts --display-name "你的名字" --agent-name "Andy"
```

這會建立 `cli:local` 使用者（並授予 owner）、建立 agent group、把它接上 CLI channel。host 不用重啟。

### 6. 開始對話

```bash
pnpm run talk
```

打字、按 Enter、等回覆。第一輪會比較慢（容器冷啟動 + 模型載入）。輸入 `/exit` 離開。

### 常見問題

| 症狀 | 原因 / 解法 |
|------|------------|
| `connect ENOENT .../data/cli.sock` | host 沒在跑 — 回到步驟 4 |
| 送出訊息後完全沒回應 | 看 `logs/nanoclaw.error.log`；常見原因是容器映像沒 build（步驟 3）或 `.env` 憑證錯誤 |
| `OneCLI gateway not applied — refusing to spawn` | `.env` 少了 `NANOCLAW_NATIVE_CREDENTIALS=true`（沒有它就會走 OneCLI 金庫路線） |
| 第一輪等很久才回 | 正常 — 冷啟動最長可達數分鐘（本地模型尤其明顯），`talk` 的單輪 timeout 是 3 分鐘 |
| `ERR_PNPM_NO_PKG_MANIFEST: No package.json found` | 指令不是在 `nanoclaw/` 目錄下跑的 — 先 `cd` 進去 |
| `Circuit breaker: delaying startup due to repeated crashes` | host 之前連續 crash 觸發的保護機制。用 Ctrl-C 乾淨關閉會重置計數（看到 `Circuit breaker reset on clean shutdown`），重跑 `pnpm run dev` 即可。若再 crash，去 `logs/nanoclaw.error.log` 找根本原因 |
| `Upgrade tripwire: install not on the sanctioned path` | fresh clone 沒有升級標記 — 跑 `pnpm exec tsx scripts/upgrade-state.ts set` 後重啟（見步驟 4）。注意：若你是用 `git pull` 拉新版後出現這個，不要手動蓋標記，改用 `/update-nanoclaw` 正規升級 |
| 容器啟動失敗 / 找不到 image（`nanoclaw-agent-v2-xxxxxxxx`） | image 名稱的 hash 綁定專案絕對路徑 — 別台機器 build 的 image、或專案資料夾搬移/改名後，名稱都對不上。在現在的路徑重跑 `./container/build.sh` |

## Philosophy

**Small enough to understand.** One process, a few source files and no microservices. If you want to understand the full NanoClaw codebase, just ask Claude Code to walk you through it.

**Secure by isolation.** Agents run in Linux containers and they can only see what's explicitly mounted. Bash access is safe because commands run inside the container, not on your host.

**Built for the individual user.** NanoClaw isn't a monolithic framework; it's software that fits each user's exact needs. Instead of becoming bloatware, NanoClaw is designed to be bespoke. You make your own fork and have Claude Code modify it to match your needs.

**Customization = code changes.** No configuration sprawl. Want different behavior? Modify the code. The codebase is small enough that it's safe to make changes.

**AI-native, hybrid by design.** The install and onboarding flow is an optimized scripted path, fast and deterministic. When a step needs judgment, whether a failed install, a guided decision, or a customization, control hands off to Claude Code seamlessly. Beyond setup there's no monitoring dashboard or debugging UI either: describe the problem in chat and Claude Code handles it.

**Skills over features.** Trunk ships the registry and infrastructure, not specific channel adapters or alternative agent providers. Channels (Discord, Slack, Telegram, WhatsApp, …) live on a long-lived `channels` branch; alternative providers (OpenCode, Ollama) live on `providers`. You run `/add-telegram`, `/add-opencode`, etc. and the skill copies exactly the module(s) you need into your fork. No feature you didn't ask for.

**Best harness, best model.** NanoClaw natively uses Claude Code via Anthropic's official Claude Agent SDK, so you get the latest Claude models and Claude Code's full toolset, including the ability to modify and expand your own NanoClaw fork. Other providers are drop-in options: `/add-codex` for OpenAI's Codex (ChatGPT subscription or API key), `/add-opencode` for OpenRouter, Google, DeepSeek and more via OpenCode, and `/add-ollama-provider` for local open-weight models. Provider is configurable per agent group.

## What It Supports

- **Multi-channel messaging** — WhatsApp, Telegram, Discord, Slack, Microsoft Teams, iMessage, Matrix, Google Chat, Webex, Linear, GitHub, WeChat, and email via Resend. Installed on demand with `/add-<channel>` skills. Run one or many at the same time.
- **Flexible isolation** — connect each channel to its own agent for full privacy, share one agent across many channels for unified memory with separate conversations, or fold multiple channels into a single shared session so one conversation spans many surfaces. Pick per channel via `/manage-channels`. See [docs/isolation-model.md](docs/isolation-model.md).
- **Per-agent workspace** — each agent group has its own `CLAUDE.md`, its own memory, its own container, and only the mounts you allow. Nothing crosses the boundary unless you wire it to.
- **Scheduled tasks** — recurring jobs that run Claude and can message you back
- **Web access** — search and fetch content from the web
- **Container isolation** — agents are sandboxed in Docker (macOS/Linux/WSL2), with optional [Docker Sandboxes](docs/docker-sandboxes.md) micro-VM isolation or Apple Container as a macOS-native opt-in
- **Credential security** — agents never hold raw API keys. Outbound requests route through [OneCLI's Agent Vault](https://github.com/onecli/onecli), which injects credentials at request time and enforces per-agent policies and rate limits.

## Usage

Talk to your assistant with the trigger word (default: `@Andy`):

```
@Andy send an overview of the sales pipeline every weekday morning at 9am (has access to my Obsidian vault folder)
@Andy review the git history for the past week each Friday and update the README if there's drift
@Andy every Monday at 8am, compile news on AI developments from Hacker News and TechCrunch and message me a briefing
```

From a channel you own or administer, you can manage groups and tasks:
```
@Andy list all scheduled tasks across groups
@Andy pause the Monday briefing task
@Andy join the Family Chat group
```

## Customizing

NanoClaw doesn't use configuration files. To make changes, just tell Claude Code what you want:

- "Change the trigger word to @Bob"
- "Remember in the future to make responses shorter and more direct"
- "Add a custom greeting when I say good morning"
- "Store conversation summaries weekly"

Or run `/customize` for guided changes.

The codebase is small enough that Claude can safely modify it.

## Contributing

**Don't add features. Add skills.**

If you want to add a new channel or agent provider, don't add it to trunk. New channel adapters land on the `channels` branch; new agent providers land on `providers`. Users install them in their own fork with `/add-<name>` skills, which copy the relevant module(s) into the standard paths, wire the registration, and pin dependencies.

This keeps trunk as pure registry and infra, and every fork stays lean — users get the channels and providers they asked for and nothing else.

### RFS (Request for Skills)

Skills we'd like to see:

**Communication Channels**
- `/add-signal` — Add Signal as a channel

## Requirements

- macOS or Linux (Windows via WSL2)
- Node.js 20+ and pnpm 10+ (the installer will install both if missing)
- [Docker Desktop](https://docker.com/products/docker-desktop) (macOS/Windows) or Docker Engine (Linux)
- [Claude Code](https://claude.ai/download) for `/customize`, `/debug`, error recovery during setup, and all `/add-<channel>` skills

## Architecture

```
messaging apps → host process (router) → inbound.db → container (Bun, Claude Agent SDK) → outbound.db → host process (delivery) → messaging apps
```

A single Node host orchestrates per-session agent containers. When a message arrives, the host routes it via the entity model (user → messaging group → agent group → session), writes it to the session's `inbound.db`, and wakes the container. The agent-runner inside the container polls `inbound.db`, runs Claude, and writes responses to `outbound.db`. The host polls `outbound.db` and delivers back through the channel adapter.

Two SQLite files per session, each with exactly one writer — no cross-mount contention, no IPC, no stdin piping. Channels and alternative providers self-register at startup; trunk ships the registry and the Chat SDK bridge, while the adapters themselves are skill-installed per fork.

For the full architecture writeup see [docs/architecture.md](docs/architecture.md); for the three-level isolation model see [docs/isolation-model.md](docs/isolation-model.md).

Key files:
- `src/index.ts` — entry point: DB init, channel adapters, delivery polls, sweep
- `src/router.ts` — inbound routing: messaging group → agent group → session → `inbound.db`
- `src/delivery.ts` — polls `outbound.db`, delivers via adapter, handles system actions
- `src/host-sweep.ts` — 60s sweep: stale detection, due-message wake, recurrence
- `src/session-manager.ts` — resolves sessions, opens `inbound.db` / `outbound.db`
- `src/container-runner.ts` — spawns per-agent-group containers, OneCLI credential injection
- `src/db/` — central DB (users, roles, agent groups, messaging groups, wiring, migrations)
- `src/channels/` — channel adapter infra (adapters installed via `/add-<channel>` skills)
- `src/providers/` — host-side provider config (`claude` baked in; others via skills)
- `container/agent-runner/` — Bun agent-runner: poll loop, MCP tools, provider abstraction
- `groups/<folder>/` — per-agent-group filesystem (`CLAUDE.md`, skills, container config)

## FAQ

**Why Docker?**

Docker provides cross-platform support (macOS, Linux and Windows via WSL2) and a mature ecosystem. On macOS, Apple Container is also supported as a lighter-weight native runtime. For additional isolation, [Docker Sandboxes](docs/docker-sandboxes.md) run each container inside a micro VM.

**Can I run this on Linux or Windows?**

Yes. Docker is the default runtime and works on macOS, Linux, and Windows (via WSL2). Just run `bash nanoclaw.sh`.

**Is this secure?**

Agents run in containers, not behind application-level permission checks. They can only access explicitly mounted directories. Credentials never enter the container — outbound API requests route through [OneCLI's Agent Vault](https://github.com/onecli/onecli), which injects authentication at the proxy level and supports rate limits and access policies. You should still review what you're running, but the codebase is small enough that you actually can. See the [security documentation](https://docs.nanoclaw.dev/concepts/security) for the full security model.

**Why no configuration files?**

We don't want configuration sprawl. Every user should customize NanoClaw so that the code does exactly what they want, rather than configuring a generic system. If you prefer having config files, you can tell Claude to add them.

**Can I use third-party or open-source models?**

Yes. The supported path is `/add-opencode` (OpenRouter, OpenAI, Google, DeepSeek, and more via OpenCode config) or `/add-ollama-provider` (local open-weight models via Ollama). Both are configurable per agent group, so different agents can run on different backends in the same install.

For one-off experiments, any Claude API-compatible endpoint also works via `.env`:

```bash
ANTHROPIC_BASE_URL=https://your-api-endpoint.com
ANTHROPIC_AUTH_TOKEN=your-token-here
```

**How do I debug issues?**

Ask Claude Code. "Why isn't the scheduler running?" "What's in the recent logs?" "Why did this message not get a response?" That's the AI-native approach that underlies NanoClaw.

**Why isn't the setup working for me?**

If a step fails, `nanoclaw.sh` hands off to Claude Code to diagnose and resume. If that doesn't resolve it, run `claude`, then `/debug`. If Claude identifies an issue likely to affect other users, open a PR against the relevant setup step or skill.

**What changes will be accepted into the codebase?**

Only security fixes, bug fixes, and clear improvements will be accepted to the base configuration. That's all.

Everything else (new capabilities, OS compatibility, hardware support, enhancements) should be contributed as skills on the `channels` or `providers` branch.

This keeps the base system minimal and lets every user customize their installation without inheriting features they don't want.

## Community

Questions? Ideas? [Join the Discord](https://discord.gg/VDdww8qS42).

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for breaking changes, or the [full release history](https://docs.nanoclaw.dev/changelog) on the documentation site.

## License

MIT

<img referrerpolicy="no-referrer-when-downgrade" src="https://static.scarf.sh/a.png?x-pxid=47894bd5-353b-42fe-bb97-74144e6df0bf" />
