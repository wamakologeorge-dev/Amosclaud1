"""Verify the privileged GitHub credential contract for Amosclaud1 workflows."""
from __future__ import annotations

from pathlib import Path

CUSTOM_SECRET = "secrets.AMOSCLAUD_GITHUB_TOKEN"
LEGACY_SECRETS = (
    "secrets.GITHUB_TOKEN",
    "secrets.AMOSCLAUD_ENGINE_TOKEN",
    "secrets.AMOSCLAUD_AUTONOMOUS_TOKEN",
)
PRIVILEGED_WORKFLOWS = (
    ".github/workflows/send-command.yml",
    ".github/workflows/amosclaud-doctor.yml",
    ".github/workflows/amosclaud-preflight-fixer.yml",
)
READ_ONLY_WORKFLOWS = (
    ".github/workflows/verify-dashboard.yml",
)


def verify(root: Path = Path(".")) -> list[str]:
    errors: list[str] = []

    for relative in PRIVILEGED_WORKFLOWS:
        path = root / relative
        if not path.is_file():
            errors.append(f"{relative}: required workflow is missing")
            continue
        text = path.read_text(encoding="utf-8")
        if CUSTOM_SECRET not in text:
            errors.append(f"{relative}: does not reference {CUSTOM_SECRET}")
        for legacy in LEGACY_SECRETS:
            if legacy in text:
                errors.append(f"{relative}: legacy secret reference {legacy}")
        for alias in ("AMOSCLAUD_GITHUB_TOKEN:", "GH_TOKEN:", "GITHUB_TOKEN:"):
            if alias not in text:
                errors.append(f"{relative}: missing runtime alias {alias}")

    for relative in READ_ONLY_WORKFLOWS:
        path = root / relative
        if not path.is_file():
            errors.append(f"{relative}: required workflow is missing")
            continue
        text = path.read_text(encoding="utf-8")
        if CUSTOM_SECRET in text:
            errors.append(
                f"{relative}: read-only verification must not receive the privileged token"
            )

    return errors


def main() -> int:
    errors = verify()
    if errors:
        print("Amosclaud GitHub token contract failed:")
        for error in errors:
            print(f"- {error}")
        return 1
    print("Amosclaud GitHub token contract passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
