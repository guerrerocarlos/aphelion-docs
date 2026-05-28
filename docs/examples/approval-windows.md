---
title: Approval Windows
---

# Approval Windows

Aphelion's default posture is approval-first. That keeps ordinary operation explicit, but repeated small follow-up actions can be noisy.

## Manual Approval

When Aphelion proposes an action, approve or deny from Telegram. The approval is recorded as typed state.

## Temporary Window

After an approval succeeds, use `Approve 15m` on the approved message when the current task needs a short run of follow-up work.

The window is scoped to the current chat or side thread. It is not a global permission change.

## Cancel

Use `Cancel approvals` from the active window controls or tighten the config. Live mode overrides outside the configured ceiling are ignored.

