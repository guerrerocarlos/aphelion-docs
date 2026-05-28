---
title: Durable Children
---

# Durable Children

Durable children are child agents with their own identity, state, and permission envelope. They can survive restarts and can be configured for scheduled work, Telegram group admission, or Tailnet remote-host workflows.

## Why They Exist

Use a durable child when a recurring or delegated workflow needs its own bounded lane rather than borrowing ambient parent state.

## Operator Surfaces

From Telegram:

```text
/agents
/status
/health trace
```

From the CLI:

```bash
~/.local/bin/aphelion durable-agent list --config ~/.aphelion/aphelion.toml
```

## Safety

A child agent inherits scope from the enrollment or promotion act. Scaling permissions up or down is an explicit governed step, not a hidden config side effect.

