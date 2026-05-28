---
title: Maintenance
---

# Maintenance

Use local commands for service state, logs, verification, and repair.

## Service

```bash
systemctl --user status aphelion
systemctl --user restart aphelion
journalctl --user -u aphelion -f
```

## Verify Deployment

```bash
~/.local/bin/aphelion verify-deploy --config ~/.aphelion/aphelion.toml
```

Treat a failed verifier as a failed deploy. Check logs, fix the cause, and run the verifier again.

## Useful Checks

```bash
~/.local/bin/aphelion paths --config ~/.aphelion/aphelion.toml
~/.local/bin/aphelion sandbox-net check --config ~/.aphelion/aphelion.toml
~/.local/bin/aphelion github-app status --config ~/.aphelion/aphelion.toml
~/.local/bin/aphelion durable-agent list --config ~/.aphelion/aphelion.toml
```

## Source Update Path

From an Aphelion checkout:

```bash
make update
```

The deploy gate is:

1. Build or replace the binary.
2. Validate config.
3. Seed missing prompt files.
4. Restart the user service.
5. Verify the live service.

## Release Update Path

```bash
make update-release
```

When working outside a checkout, use the release installer for the new pinned tag and then verify the service.

