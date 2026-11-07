# ReLEAF — finalist presentation

Fifteen minutes on the Main Stage. Twenty-one slides, six speakers, **13:46 of speech**,
which leaves about a minute and a quarter for handovers and for the pauses a big hall wants.

- **[Script](https://timmy97-tw.github.io/releaf-finalist/)** — every slide with what is said
  over it, its pace in words per minute, and the answer to hold if a judge presses.
- **[Slides](https://timmy97-tw.github.io/releaf-finalist/show.html)** — the deck, whole, one
  click at a time. Present from this one.
- **[Slides + script](https://timmy97-tw.github.io/releaf-finalist/notes.html)** — one slide with
  its script beside it and who says it. Rehearse from this one.

Built on the same design system as the
[five-minute deck](https://timmy97-tw.github.io/releaf-5min/): one white ground, one accent that
means one thing, system sans, and a 1600 × 900 stage so every type size is an absolute number and
nothing drifts between a laptop, the hall projector and a PDF export.

## The titles say the finding

Every title is a sentence with a verb that states what the slide proves, written against
[Say It In The Title](https://timmy97-tw.github.io/say-it-in-the-title/principles.html). Where a
title carries a number, that number is read off the figure on the same slide, so the speaker
cannot drift from what the audience can see.

| # | Title | At | Chapter | Speaker |
| --- | --- | --- | --- | --- |
| 1 | ReLEAF | 0:00 | — | 1 |
| 2 | Ms. Chen waits for her plants to tell her, and by then it is next season | 0:12 | — | 1 |
| 3 | 85.3% of Taiwan’s farmland is small farms, and they sit under the most volatile weather | 0:36 | Problem | 1 |
| 4 | Keeping the protein cold is 77% of what it costs to deliver it | 0:58 | Problem | 1 |
| 5 | So we ship the factory, not the protein | 1:32 | Problem | 1 |
| 6 | We took the chemical inducers out, so the only input left is a colour | 1:58 | Switch | 2 |
| 7 | A C-terminal His tag passed every gate we had written, and still broke the anchor | 2:54 | Switch | 2 |
| 8 | A 0.2 µm hollow-fibre membrane keeps the cells in and lets the protectant out | 3:52 | Reactor | 3 |
| 9 | No B. subtilis grew from the shell side, on two separate runs | 4:36 | Reactor | 3 |
| 10 | The shell side kept delivering ACC deaminase for 72 hours | 5:14 | Reactor | 3 |
| 11 | Seven runs took us from a pump leak at 27 hours to 77 hours under automatic pH control | 5:52 | Reactor | 3 |
| 12 | Five of us measured the same loop by hand and got three different lines | 6:24 | Measure | 4 |
| 13 | Reading inside the sealed loop matched the benchtop: R² 0.9999 against 0.9998 | 6:58 | Measure | 4 |
| 14 | The reference beam flagged the failing lamp 26.7 hours before the OD channel died | 7:32 | Measure | 4 |
| 15 | Three people outside the team built it from our guide, and every place they stuck was a bug in the guide | 8:14 | Measure | 4 |
| 16 | ACC deaminase applied before the salt held about 70% more chlorophyll at 100 mM | 8:44 | Plants | 5 |
| 17 | In soil under heat, treating before the stress beat treating after it — in both trials | 9:36 | Plants | 5 |
| 18 | A forecast reaches three days ahead; a hectare of protectant takes 5.4 days to make | 10:18 | Plants | 5 |
| 19 | The kill switch, the crop and the sprayer were all changed by people who are not on this team | 11:18 | People | 6 |
| 20 | Most of the farmers we interviewed are organic, and organic rules would bar our product | 12:06 | People | 6 |
| 21 | Every farmer, a biomanufacturer | 13:02 | — | 6 |

## The six chapters, and why they are weighted this way

The node strip across the top of every slide carries the six chapters, with the current one lit
and the ones already spoken dimmed. It replaces a menu slide and it replaces the per-slide
kicker — the strip is what says where you are.

| Chapter | Slides | Runs |
| --- | --- | --- |
| Problem | 3 | 1:22 |
| Switch | 2 | 1:54 |
| Reactor | 4 | 2:32 |
| Measure | 4 | 2:20 |
| Plants | 3 | 2:44 |
| People | 2 | 1:44 |

**Hardware, Measurement and Human Practices take ten of the twenty-one slides** and 6:36 of
the 13:46, because those are the three special prizes this deck is
aimed at. The wet-lab fundamentals are present and honest, but they are not where the time goes.

## Where the content came from

Every number, figure and quotation was pulled from the live wiki at
`2026.igem.wiki/gems-taiwan` in November 2026, not carried over from an earlier deck. Figures are
the team's own, downloaded at full resolution from `static.igem.org`; charts that are drawn rather
than photographed are drawn in SVG from the numbers by `assets/charts.js`, so they stay legible at
stage size and the data is auditable in one place.

Claims were then checked against the team's own red lines in `releaf-judging-qa`,
`releaf-plant-judging` and the poster's "What we have not shown". Six slides changed as a result:

- **The circuit slide now says the switch has not been shown working in the reactor.** Every
  integrated run used a constitutive promoter, red at 640 nm does not give a clean off, and the
  honest word is modulation, at n = 2.
- **The containment slide says two platings, no replicate, no log reduction value**, and that
  debris and vesicles of 20–200 nm cross with the protein.
- **The 72-hour slide names the plasmid-free control** that read 4.5–5.5 µg/mL on the same assay,
  and calls 2.5–6.5 µg/mL a low titre for a bioprocess.
- **The plant slide concedes the pseudoreplication.** Nine seedlings share one plate, so the plate
  is the unit and there is one of it.
- **The twin slide names the two links that have never been demonstrated** — forecast to light,
  and permeate to irrigation.
- **The regulation slide uses the Laws page position**, that the Taiwan contained-use pathway is
  unresolved, not the Entrepreneurship page's claim that it exists.

Four claims from the previous version of this deck were **wrong and have been removed**: the
benchtop spectrophotometer costs about US$470, not US$15,000; the 40.9 → 46.9 mm root result is
trehalose, not ACC deaminase; BoPEP4 does not have an 88% chlorophyll result; and in soil under
heat the wiki ranks **pre**-treatment best, not co-treatment.

## Presenting

`→ ↓ space` next, `← ↑` back, `1`–`9` and `0` for ten, `Shift`+`1`–`6` to jump to a chapter,
`f` full screen, `t` start or reset the clock, `Esc` back to the script. `show.html#9` opens at
slide 9.

Beside the chapter strip is a rail of one segment per slide, each as wide as that slide's share of
the running time. Press `t` and a caret appears on it showing the real clock against the plan;
caret to the right of the lit segment means you are running behind, and it turns red when you are
more than five seconds late on that slide. That is the only thing worth knowing mid-sentence.

## Build

No build step, no external requests.

```
index.html        the script page, with the chapter cards and the contents index
show.html         the twenty-one slide show
notes.html        one slide at a time with its script beside it
assets/deck.js    slide markup, speaker, script, numbers and the chapter strip
assets/deck.css   the 1600x900 stage and every slide's own grid
assets/charts.js  bars, grouped bars and line, drawn from a JSON spec
assets/present.js the slideshow, used by show.html
assets/nav.js     the three view names, in one place
img/              the 24 figures the slides use
img/library/      86 more figures pulled from the wiki in the same pass, unused but vetted,
                  kept so a figure can be swapped without going back to static.igem.org
```

Editing a slide, its script or its timing means editing `assets/deck.js` once; all three views
follow. Slide timings are derived from the word count at 152 wpm, so changing the script changes
the budget.

## Still to do

- Replace `Speaker 1`–`6` in `assets/deck.js` with the real names and assign the chapters.
- If the clock is tight on the day, slide 7 — the C-terminal His tag — is the one to drop. It is
  the best dry-lab story in the deck, but it is the only slide that does not serve Hardware,
  Measurement or Human Practices. Dropping it returns 58 seconds.
- iGEM wants a 16:9 PPT. This site is the rehearsal and review surface; the .pptx gets built from
  these layouts once the script is signed off.
