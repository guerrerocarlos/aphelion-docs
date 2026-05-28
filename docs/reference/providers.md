---
title: Providers
---

# Providers

Aphelion can route native model work through:

- OpenAI
- Anthropic
- OpenRouter
- Gemini
- Ollama

## OpenAI

```bash
APHELION_TELEGRAM_BOT_TOKEN='your-telegram-bot-token' \
OPENAI_API_KEY='your-openai-api-key' \
~/.local/bin/aphelion quickstart \
  --admin-user-id 123456789 \
  --provider openai \
  --install-service
```

## Ollama

Run Ollama locally and pull the configured model:

```bash
ollama serve
ollama pull llama3.2
```

Then quickstart with:

```bash
~/.local/bin/aphelion quickstart \
  --admin-user-id 123456789 \
  --provider ollama \
  --install-service
```

Ollama keeps inference local, but model quality and latency depend on the model and host hardware.

## Switching Providers

Quickstart can rewrite the config:

```bash
~/.local/bin/aphelion quickstart \
  --force \
  --admin-user-id 123456789 \
  --provider openai \
  --install-service
```

Back up custom config changes before using `--force`.
