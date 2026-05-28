---
title: Install
---

# Install

Use the release install unless you are actively developing Aphelion itself.

## Release Install

Pin the installer ref and release asset to the same public release tag:

```bash
APHELION_VERSION=v0.1.5
curl -fsSL "https://raw.githubusercontent.com/idolum-ai/aphelion/${APHELION_VERSION}/scripts/install-release.sh" | bash -s -- "${APHELION_VERSION}"
```

This installs the binary to:

```text
~/.local/bin/aphelion
```

Then run quickstart:

```bash
~/.local/bin/aphelion quickstart --detect-admin --install-service
```

Admin detection waits for a fresh Telegram message from the account that should administer the bot.

## Headless Install

Use explicit values when you already know the Telegram admin user ID:

```bash
APHELION_TELEGRAM_BOT_TOKEN='your-telegram-bot-token' \
OPENAI_API_KEY='your-openai-api-key' \
~/.local/bin/aphelion quickstart \
  --admin-user-id 123456789 \
  --provider openai \
  --install-service
```

Supported provider names are:

```text
openai
anthropic
openrouter
gemini
ollama
```

## Source Install

Use this path from an Aphelion checkout:

```bash
make build
./bin/aphelion quickstart --detect-admin
make install-user-service
```

Run source verification on Linux:

```bash
go test ./...
make architecture
```
