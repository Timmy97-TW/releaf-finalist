# ReLEAF — Finalist Presentation
https://timmy97-tw.github.io/releaf-finalist/

Fifteen minutes on the Main Stage, Final Day. Eight speakers, 18 slides,
about 13:00 of speech.

Every slide is **designed, not screenshotted**. Charts are drawn in SVG from the
numbers (`assets/charts.js`), so they stay legible at stage size and the data is
auditable in one place. Photographs appear only where the subject is genuinely
photographic — Ms. Chen, the plant pots, the plates, the hardware renders.

## The three views

| file | what it is |
| --- | --- |
| `index.html` | **Script** — every slide rendered live at thumbnail size, with its spoken text, timing, pace and an amber "If pressed" note for the judges' Q&A |
| `show.html` | **Slides** — cross-fade only. Present from this one. |
| `animate.html` | **With animation** — the same deck, with a cued element on six slides arriving a beat after the rest. Nothing is ever held back waiting for a click. |

Keys: arrows / space to step, `1`–`8` to jump to a speaker, `Home` / `End`.
Click the left quarter of the stage to go back, anywhere else to go forward.

## How it is put together

- `assets/deck.js` — the only file with content in it. Each slide is authored HTML
  on a fixed **1600 × 900** canvas, so every type size is an absolute number and
  nothing drifts between a laptop, the hall projector and a PDF export.
- `assets/charts.js` — `bars`, `grouped` and `line`, drawn from a JSON spec in a
  `data-chart` attribute.
- `assets/deck.css` — the design system: heading anatomy, stat blocks, cards,
  process strips, tables, the two-state comparison and the chart type scale.
- `assets/stage.js` — scaling, navigation, cues. Shared by both stage views, so
  they cannot drift apart.

## Numbers on the slides

Read off the presentation video's own figures and cross-checked:

- Western blot, relative band intensity — 13 h G 1.00 / R 0.75; 16 h G 1.06 / R 0.75
- ELISA — 13 h 6.3 / 5.7 µg/mL; 16 h 6.1 / 5.9 µg/mL
- DNPH activity — 13 h 10.4 ± 5.6 green vs 0.7 ± 2.4 red; 16 h 1.05 vs 3.7 (n = 2)
- Integrated cycle 4 — peak 6.5 µg/mL at 12 h, above 2 µg/mL to 72 h, active from 18 h
- Heat timing, relative chlorophyll — 22 °C 1.00 · heat untreated 0.83 · co-treatment 1.00 · post-treatment 0.48

The 16-hour activity reversal and the n = 2 are **on the slide**, not hidden in
the notes.

## Still to do

- Replace `Speaker 1…8` in `SPEAKERS` with real names and assign the parts.
- 13:00 of speech plus handovers leaves roughly 1:30 of slack in a 15:00 slot.
  That is deliberate — a big hall wants pauses.
- iGEM requires a 16:9 **PPT**. This site is the rehearsal and review surface;
  the .pptx gets built from these layouts once the script is signed off.
