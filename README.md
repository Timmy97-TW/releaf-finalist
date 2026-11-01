# ReLEAF — Finalist Presentation

Fifteen minutes on the Main Stage, Final Day. Eight speakers, 24 slides,
about 14:20 of speech. Adapted from the presentation video (v6), with the
evidence density dropped for a whole-Jamboree audience.

## The three views

| file | what it is |
| --- | --- |
| `index.html` | **Script** — every slide with its spoken text, timing, pace, and an amber "If pressed" note for the judges' Q&A |
| `show.html` | **Slides** — minimal animation: cross-fade only. Present from this one. |
| `animate.html` | **With animation** — the same deck with three cues: numbers roll up, bullet lines follow the title by a beat. Nothing is ever held back waiting for a click. |

Keys: arrows / space to step, `1`–`8` to jump to a speaker, `Home` / `End`.
Click the left quarter of the stage to go back, anywhere else to go forward.

## Editing

`assets/deck.js` is the only file with content in it. Both stage views read
from it, so they cannot drift apart. Each slide has:

- `sp` — which of the eight speakers
- `secs` — budgeted seconds, derived from the word count at 150 wpm
- `bare` — the source frame is already a finished slide, so no text is drawn over it
- `cue` — `count` or `reveal`, used only by `animate.html`
- `note` — Q&A backup, never shown on stage

## Images

`img/*.webp` are frames lifted from `ReLeaf_presentation_v6.mp4` and cropped.
Nothing is upscaled. Two dense figures (`s-timing`, `s-soil15`) were cropped
down to the pictures that read from the back of a hall.

## Still to do

- Replace `Speaker 1…8` in `SPEAKERS` with real names and assign parts.
- 14:53 including handovers is tight against a 15:00 slot. If the tech check
  runs long, the first thing to cut is `cycles` (Speaker 5, 0:42).
- The deck must be handed to iGEM as a 16:9 **PPT**. This HTML is the rehearsal
  and review surface; the PPTX gets built from the same frames once the script
  is signed off.
