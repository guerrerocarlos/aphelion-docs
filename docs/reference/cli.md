---
title: CLI Reference
---

# CLI Reference

Aphelion's CLI is the local maintenance surface.

## Common Commands

```bash
~/.local/bin/aphelion --help
~/.local/bin/aphelion version --json
~/.local/bin/aphelion --config ~/.aphelion/aphelion.toml --check-config
~/.local/bin/aphelion verify-deploy --config ~/.aphelion/aphelion.toml
```

## Setup And Deploy

```bash
~/.local/bin/aphelion quickstart --detect-admin --install-service
~/.local/bin/aphelion init --config ~/.aphelion/aphelion.toml
~/.local/bin/aphelion park-restart --config ~/.aphelion/aphelion.toml --source manual
```

## Inspection

```bash
~/.local/bin/aphelion paths --config ~/.aphelion/aphelion.toml
~/.local/bin/aphelion sandbox-net check --config ~/.aphelion/aphelion.toml
~/.local/bin/aphelion github-app status --config ~/.aphelion/aphelion.toml
~/.local/bin/aphelion durable-agent list --config ~/.aphelion/aphelion.toml
```

## Systemd

```bash
systemctl --user status aphelion
systemctl --user restart aphelion
journalctl --user -u aphelion -f
```

