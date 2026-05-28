---
title: Telegram Operations
---

# Telegram Operations

Telegram is the live operator surface. The CLI and `systemd` are for install, repair, and local inspection.

## Core Commands

| Command | Use |
| --- | --- |
| `/start` | Show the role-aware intro and command menu. |
| `/help` | Show available commands. |
| `/health` | Show readiness, status, trace, and diagnosis controls. |
| `/status` | Show active work, pending decisions, and chat state. |
| `/context` | Inspect what is shaping the next reply. |
| `/memory` | Inspect memory and recall state. |
| `/thread` | Start a side lane. |
| `/threads` | List open and recently closed side lanes. |
| `/absorb N` | Close side thread `N` and return its outcome to the main lane. |
| `/mission` | Review objectives and mission-ledger entries. |
| `/model` | Admin model-routing controls. |
| `/stop` | Stop current work. |
| `/new` | Start a fresh chat session while preserving memory. |
| `/detach` | Stop work, clear queued work, and revoke continuation for the current scope. |

Admin users may also see controls such as `/agents`, `/tailnet`, `/restart`, and `/reinstall`.

## Side Threads

Use `/thread` when a request should not mix into the main chat.

```text
/thread summarize the last deploy logs
```

Side-thread replies are prefixed as `(thread N)`. Replying to a known side-thread message continues that lane. Use `/threads` to inspect open lanes and `/absorb N` when the outcome is no longer active.

## Approval Flow

Normal turns ask before material action. After a manual approval succeeds, Telegram can show an `Approve 15m` control. That opens a bounded temporary approval window for the current chat or side thread.

The active window can be doubled or canceled. Tightening the config later takes precedence over older live overrides.

