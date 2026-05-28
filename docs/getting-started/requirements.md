---
title: Requirements
---

# Requirements

Aphelion is designed for a Linux host that can run a user-level service.

## Host

- Linux with `systemd --user`
- `curl` or `wget`
- `tar`, `install`, and `sha256sum`
- A user account that will own the service and config

Source builds also require Go 1.26 or newer. Release installs do not require Go.

## Accounts And Keys

You need:

- A Telegram bot token from BotFather
- Your numeric Telegram user ID
- One model provider route:
  - OpenAI API key
  - Anthropic API key
  - OpenRouter API key
  - Gemini API key
  - Or a running local Ollama server with the configured model pulled

## Files Created

The quickstart path writes:

```text
~/.aphelion/aphelion.toml
~/.aphelion/agent/
~/.aphelion/state/
~/.config/systemd/user/aphelion.service
```

The config file is written with private file permissions. Treat it as a secret because it contains the Telegram token and provider credentials.

