---
title: Configuration
---

# Configuration

The default config path is:

```text
~/.aphelion/aphelion.toml
```

Quickstart writes this file with private permissions and refuses to replace it unless `--force` is passed.

## Minimum Shape

```toml
[telegram]
bot_token = "your-telegram-bot-token"

[principals.telegram]
admin_user_ids = [123456789]

[providers]
selection = "manual"
default = "openai"
fallback_chain = []

[providers.openai]
api_key = "your-openai-api-key"
```

## Root Paths

Keep roots narrow:

```toml
[agent]
prompt_root = "~/.aphelion/agent"
exec_root = "/home/user/src/aphelion"
shared_memory_root = "~/.aphelion/agent"
user_workspace_root = "~/.aphelion/state/isolated/workspaces"
user_memory_root = "~/.aphelion/state/isolated/memory"
```

`exec_root` is the default shell scope for the execution tool. Do not point it at a broader tree than you mean to operate inside.

## Autonomy

```toml
[autonomy]
default_mode = "ask_first"
ceiling = "leased"
allow_live_overrides = true
max_override_duration = "4h"
```

Config sets the standing ceiling. Live authority still moves through proposals, leases, approvals, and grants.
