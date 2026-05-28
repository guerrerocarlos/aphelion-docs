---
title: Side Threads
---

# Side Threads

Side threads are separate work lanes inside the same Telegram chat.

## Start A Thread

```text
/thread inspect the last 50 service log lines and summarize warnings
```

The reply will be labeled `(thread N)`.

## Continue A Thread

Reply to a side-thread message:

```text
Check whether those warnings happened again after the restart.
```

Or explicitly target the lane:

```text
(thread 2) run the verifier again
```

## Close A Thread

```text
/threads
/absorb 2
```

Absorbing a side thread closes the lane and appends a compact bookkeeping note to the main chat session. It does not write curated memory by itself.

