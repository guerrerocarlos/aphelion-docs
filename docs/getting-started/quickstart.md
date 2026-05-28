---
title: Quickstart
---

# Quickstart

After installation, verify the service locally:

```bash
systemctl --user status aphelion
~/.local/bin/aphelion verify-deploy --config ~/.aphelion/aphelion.toml
```

Then open Telegram and send:

```text
/start
/health
/status
/help
```

## First Five Minutes

Start with low-risk requests:

```text
Summarize your current setup and tell me what you can access.
```

```text
Check your service status and explain any warnings.
```

```text
Inspect the README in your working directory and summarize the install path.
```

Normal work runs under `ask_first`, so Aphelion asks before material actions.

## If Something Looks Wrong

Use Telegram:

```text
/stop
/new
/health
```

Use the shell:

```bash
journalctl --user -u aphelion -f
~/.local/bin/aphelion verify-deploy --config ~/.aphelion/aphelion.toml
```

