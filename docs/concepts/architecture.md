---
title: Architecture
---

# Architecture

Aphelion has three main runtime layers:

| Package | Responsibility |
| --- | --- |
| `runtime` | Long-lived shell, transport wiring, locks, background loops, durable-agent lifecycle, and concrete dependency assembly. |
| `turn` | One-turn state machine, stage ordering, run-kind policy, commit contracts, and delivery contracts. |
| `pipeline` | Conversational transforms for the face and governor plus render/floor helpers. |

Other packages such as `config`, `provider`, `session`, `telegram`, `tool`, and `durableagent` support those layers.

## Flow

```text
Telegram user
  -> Telegram API
  -> runtime shell
  -> turn machine
  -> pipeline governor and face
  -> provider, tools, session store, durable children
  -> Telegram delivery
```

## State

Aphelion treats durable records as the source of truth. Conversation text is presentation. Authority, consent, leases, grants, and evidence are typed records or compiled contracts.

## Deployment

The expected service shape is:

```text
~/.local/bin/aphelion
~/.aphelion/aphelion.toml
~/.config/systemd/user/aphelion.service
```

The deploy verdict comes from `verify-deploy`, not merely from a successful restart.

