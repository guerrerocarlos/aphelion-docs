---
title: Troubleshooting
---

# Troubleshooting

## The Bot Does Not Respond

Check the user service:

```bash
systemctl --user status aphelion
journalctl --user -u aphelion -n 100 --no-pager
```

Run the deploy verifier:

```bash
~/.local/bin/aphelion verify-deploy --config ~/.aphelion/aphelion.toml
```

## Admin Detection Times Out

Admin detection only sees messages sent after detection starts. Retry and send a fresh message to the Telegram bot during the timeout window.

You can avoid detection by passing the numeric user ID:

```bash
~/.local/bin/aphelion quickstart \
  --admin-user-id 123456789 \
  --provider openai \
  --install-service
```

## Provider Calls Fail

Validate that the provider section in `~/.aphelion/aphelion.toml` is correct and that the key is valid.

For Ollama:

```bash
ollama serve
ollama pull llama3.2
ollama list
```

For hosted providers, check logs for redacted provider failures:

```bash
journalctl --user -u aphelion -f
```

## Config Problems

```bash
~/.local/bin/aphelion --config ~/.aphelion/aphelion.toml --check-config
```

If you need to rewrite the quickstart config, pass `--force`. Keep a copy of any custom settings before replacing the file.

