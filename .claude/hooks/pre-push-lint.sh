#!/usr/bin/env bash
set -euo pipefail
# Claude hook: auto-fix lint issues before git push

# Read JSON from stdin
input="$(cat)"

# Extract the command from tool_input.command
command="$(printf '%s' "$input" | jq -r '.tool_input.command // empty')"

# Only run for git push commands
case "$command" in
  git\ push*) ;;
  *) exit 0 ;;
esac

# Run lint with auto-fix
pnpm lint:fix

# If any files were changed by the fix, stage and commit them
if [ -n "$(git diff --name-only)" ]; then
  git add -u
  git commit -m "Formatting"
fi

# Final lint check — block push if unfixable errors remain
pnpm lint
