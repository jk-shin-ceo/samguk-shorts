# YouTube agent skills in this repo

`.claude/skills/yt-*` are the eleven skills from
[jakeschincariol/youtube-agent-skill](https://github.com/jakeschincariol/youtube-agent-skill)
v1.0.0 (commit a2feb21), MIT licensed (see `.claude/skills/LICENSE-youtube-agent-skill`). They are
loaded by any Claude Code session (local or cloud) that runs in this repository.

## Changes from upstream

Only one: in the six skills that read a voice profile (yt-audit, yt-comment, yt-package, yt-plan,
yt-script, yt-seo) the first step now falls back to this folder when `~/.claude/youtube/voice.md`
does not exist. Cloud sessions start with an empty home directory, so without this fallback the
skills would ask for three videos every time. Scripts and `hooks.json` are unchanged; their sibling
relative paths (`../yt-edit`, `../yt-script/hooks.json`) work because the folder layout is kept.

## Voice profile

`voice.md` here is the channel profile (진짜 삼국지 / Real Three Kingdoms, 5 languages). Update it
when the narration style or title rules change. To use a personal profile instead on your own Mac,
put one at `~/.claude/youtube/voice.md`; it takes precedence. `voice.template.md` is the blank
upstream template.

## Caveats

- `hookscore.py`, `title.py` and `swipe.py` are tuned for English: word lists, character limits and
  hook formula matching assume English text. Use the scores for the en channel; for ko/ja/zh-TW/vi
  treat them as rough and judge the hook by hand (the 21 formulas themselves still apply).
- No skill uploads anything. Uploading stays with `samguk/tools/yt_upload.py` and the daily routine.
- `yt-retention` needs a retention CSV exported from YouTube Studio (no Analytics API access).
