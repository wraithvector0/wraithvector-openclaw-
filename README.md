# WraithVector Governance Plugin for OpenClaw

Runtime enforcement and cryptographic audit trail for OpenClaw agents.

> Early access — contact wraithvector0@gmail.com to get your API key.

## What it does

Every tool call made by your OpenClaw agent is evaluated by WraithVector before execution:

- `exec` — command scope control (only allowed commands execute)
- `read` — path scope control (only allowed paths are accessible)
- Every decision generates a cryptographic audit trail (EU AI Act / DORA compliant)

## Why this matters

In February 2026, an OpenClaw agent created a MoltMatch dating profile without explicit user consent. WraithVector would have blocked it and generated forensic evidence of the attempt.

## Install
```bash
mkdir -p ~/.openclaw/workspace/plugins/wraithvector
curl -o ~/.openclaw/workspace/plugins/wraithvector/index.mjs https://raw.githubusercontent.com/wraithvector0/wraithvector-openclaw-/main/index.mjs
curl -o ~/.openclaw/workspace/plugins/wraithvector/openclaw.plugin.json https://raw.githubusercontent.com/wraithvector0/wraithvector-openclaw-/main/openclaw.plugin.json
openclaw gateway restart
```

## Test ALLOW

In OpenClaw UI:
```
run the command: ls
```

## Test BLOCK

In OpenClaw UI:
```
run the command: rm -rf test
```

## Audit evidence

Every decision is stored with a SHA-256 cryptographic hash verifiable by third parties.

## License

MIT
