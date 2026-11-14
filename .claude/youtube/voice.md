# voice.md · 진짜 삼국지 (Real Three Kingdoms)

Channel voice profile read by every `/yt-*` skill in `.claude/skills/`. Written from the narration
of episodes 1 to 8 (`samguk/ep*.md`, `samguk/i18n/ep*.<lang>.json` in the project files) and the
performance notes in `samguk/analytics/insights.md`. Template it was filled from:
`voice.template.md`.

## Who I am talking to

One person: a Korean viewer in their 20s to 40s who read 삼국지 (이문열 or 고우영) or played the
games as a kid, knows 도원결의 and 적벽대전 by name, and half-suspects the "famous scene" never
happened. They are scrolling the Shorts feed and give us about two seconds. They want the story
first and the twist second: "the scene you remember" then "what the record actually says".

The same episode ships in five languages (ko, en, ja, zh-TW, vi). Each language's viewer is the
local equivalent: the Japanese reader of 吉川英治/横山光輝, the Taiwanese reader of 三國演義, the
Vietnamese reader of Tam Quốc Diễn Nghĩa, and an English viewer who knows the games (Dynasty
Warriors / Total War) more than the novel. Korean is the source script; the others are adapted,
not word-for-word translated.

## How I actually talk

Narrator only, no host on camera. Calm documentary storyteller, polite 합니다/-죠 endings, present
tense for the story ("~합니다", "~하죠"), short sentences, one fact per line. Read by Gemini TTS
(Charon) at about 1.2x, so every line must be easy to say out loud with no ambiguous Hanja names.

Best performer so far (ep4, 군사 3천으로 수도를 삼킨 속임수, ~4,600 views), verbatim:

> 서기 백팔십구 년, 한나라 영제가 세상을 떠나고, 열네 살 아들 유변이 황제가 됩니다.
> 실권은 황제의 외삼촌, 대장군 하진. 그의 눈엣가시는 궁궐을 쥐고 흔들던 환관들, 십상시였습니다.
> …
> 동탁의 군사는 겨우 삼천. 그래서 며칠마다 밤에 몰래 군사를 성 밖으로 내보냈다가, 다음 날 깃발과
> 북을 앞세워 다시 들어오게 합니다. 끝없는 대군처럼 보이게요.
> 결국 동탁은 대신들 앞에서 칼을 짚고, 황제를 폐한 뒤 진류왕을 세웁니다. 그가 한나라의 마지막 황제, 헌제입니다.
> 실제 기록은 어떨까요? 이번 이야기는 놀랍게도 대부분 정사 그대로입니다.
> 다만 하나, 십상시는 열 명이 아니었습니다. 후한서에 이름이 오른 중상시는 열두 명.
> 여러분이 하진이었다면 동탁을 불렀을까요? 다음 화, 적토마 한 마리에 주인을 벤 남자. 여포입니다.

ep7 punchline style: "잠시 뒤 말방울 소리와 함께 돌아온 관우. 화웅의 머리를 땅에 던집니다. 그 술은,
아직 따뜻했습니다."

## Words I never use

- Hype and clickbait filler: "충격", "소름", "레전드", "역대급", "미쳤다", "여러분 이거 아세요?"
- English creator filler in the en version: "unlock", "game-changer", "dive in", "let's get into it",
  "smash that like button".
- Casual 반말 or internet slang in narration. No swearing.
- Qing-dynasty or modern framing for Han people (변발, "중국 황제" for 한나라 황제 etc.).
- Celebrity / actor names. Character names never go into video-model prompts either (policy fails).

## Words I do use

- "실제 기록은 어떨까요?" as the turn into the history section (every episode, ~70% mark).
- "정사에는 ~이 없습니다" / "기록에는 ~로 남아 있죠" / "놀랍게도 정사 그대로입니다".
- Source names said plainly: 정사 삼국지, 진수, 배송지 주석, 후한서, 손견전, 선주전, 영웅기.
- Closing pair: a question to the viewer ("여러분이 하진이었다면…?") then "다음 화, …" teaser.
- Years and numbers spoken in Korean words for TTS ("서기 백팔십구 년", "군사 삼천").
- Famous lines quoted in Korean with the Hanja phrase as on-screen caption (영교아부천하인, 온주참화웅).

## What I will not claim

- Nothing about the historical record that is not in 정사 삼국지 (with 배송지 주석) or 후한서. If a
  detail is only in 연의, say "연의에서는". If the sources disagree, say so (ep6: 여백사 사건 세 가지 기록).
- No invented numbers in titles. Titles lead with a real number when the episode has one
  (insights.md 11/11 change: numeric titles outperform) but never a made-up one.
- No view counts, subscriber counts or "다들 모르는" claims about the audience.
- Always disclose AI production (Google Flow) in the description; never imply real footage.

## My format

- YouTube Shorts, about 1 to 3 minutes, 9:16, one episode a day in story order from 황건적의 난.
- Structure: wordless hook clip with a big caption line (0) → 배경 → 전개 → 클라이맥스 (연의 version)
  → "실제 기록은?" (정사 version) → viewer question → 다음 화 teaser.
- Two 8-second AI video clips per episode (Flow), the rest still images with narration, BGM ducked
  under the voice, a short top caption per scene.
- No host, no face, no intro, no sponsor read. No swearing.
- Title pattern: "<concrete claim or number, 정사 vs 연의 twist> | 삼국지 N화" (en "| Three Kingdoms
  Ep. N", and the local equivalent in ja/zh-TW/vi).
- Channels: 진짜 삼국지 @realsamguk (ko), Real Three Kingdoms @ThreeKingdomsReal (en),
  本当の三国志 @realsangokushi (ja), 三國真相 @realsanguo (zh-TW), Tam Quốc Sự Thật @tamquocsuthat (vi).
