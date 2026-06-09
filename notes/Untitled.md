我現在想釐清 現在最先進的AI Agent 架構，目前我比較熟悉的是Openclaw 跟 Claude code，我該要從哪裡下手呢？

第一個問題：
claude code 跟 claude cowork 差在哪裡？

第二個問題：
.claude 裡面可以分成，agent, commands, hooks, roles, skills，這些怎麼運作的呢？

你必須根據以下文件回答：
1. context engineering: https://github.com/davidkimai/Context-Engineering
2. Harness engineering: https://openai.com/index/harness-engineering/
3. claude code documentation: https://code.claude.com/docs/en/overview
4. claude 官方教學： https://www.anthropic.com/learn 

我現在有reference 檔案，那claude code 要怎麼精準根據 reference產出？

我今天想要復刻像claude 或 openclaw 這樣的 AI Agent，我該從哪開始？目的是為了研究開發 不同的agent 會造成什麼樣的結果，所以需要自己動手修改 AI Agent 的原始碼

有沒有實際案例，能讓我詳細理解，如何讓 skills, MCP, hooks, subagents 在一個專案內完美配合？

1. model
2. tools
	1. file operations
	2. search
	3. execution
	4. web
	5. code intelligence
3. Extensions
	1. skills
	2. MCP
	3. hooks
	4. subagents
4. Context:
	1. your project
	2. your terminal
	3. your git state
	4. your claude.md
	5. auto memory
	6. extensions
5. session:
	1. rewinding
	2. resuming
	3. forking
	4. across branches: CLAUDE.md
6. when context window fills up: manage context with skill and subagent
7. claude mode:
	1. plan mode: read only
	2. edit mode: write file but not excute
	3. auto mode: yes everything
8. how to use:
	1. start conversation
	2. export before implement
	3. interrupt and steer
	4. give sth to verify
	5. delegate, don't dictate


Skill (knowledge): 教它怎麼做
MCP (capability): 給它做的能力
Subagent (context economy): 把重活包起來保護主對話
Hook (verification): 在它做完後驗收