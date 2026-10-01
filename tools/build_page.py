#!/usr/bin/env python3
"""Assemble the player into:
  index.html            standalone page (open locally / host anywhere, next to audio/)
  dist/artifact.html    fragment for claude.ai Artifact publishing (skeleton added by the host)
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
frag = (ROOT / "src" / "player.html").read_text(encoding="utf-8")
data = "".join(
    f"<script>\n{(ROOT / 'src' / n).read_text(encoding='utf-8')}</script>\n" for n in ("scenes.js", "timing.js")
)
marker = "<script>\n(() => {"
assert frag.count(marker) == 1
body = frag.replace(marker, data + marker)

(ROOT / "dist").mkdir(exist_ok=True)
(ROOT / "dist" / "artifact.html").write_text(body, encoding="utf-8")
(ROOT / "index.html").write_text(
    '<!doctype html>\n<html lang="zh-Hant">\n<head>\n<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    "</head>\n<body>\n" + body + "\n</body>\n</html>\n",
    encoding="utf-8",
)
print("wrote index.html and dist/artifact.html")
