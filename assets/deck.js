/* ReLEAF — Finalist Presentation, Grand Jamboree Main Stage.
   One source of truth for both show.html (minimal) and animate.html (some animation).

   Per slide:
     id      stable anchor
     sp      speaker number 1-8
     secs    budgeted seconds of speech
     img     image file in img/
     kicker  small line above the title
     title   the one idea, large
     lines   0-3 short stage lines (keep under ~8 words each)
     say     the spoken script
     note    what to have ready if a judge presses in the Q&A
     cue     animate.html only: 'reveal' holds the lines back, 'count' rolls a number
*/

const SPEAKERS = [
  { n: 1, name: 'Speaker 1', part: 'The wait' },
  { n: 2, name: 'Speaker 2', part: 'Why help arrives late' },
  { n: 3, name: 'Speaker 3', part: 'The switch' },
  { n: 4, name: 'Speaker 4', part: 'It is light controlled' },
  { n: 5, name: 'Speaker 5', part: 'Cells stay in' },
  { n: 6, name: 'Speaker 6', part: 'Built to be rebuilt' },
  { n: 7, name: 'Speaker 7', part: 'The plants' },
  { n: 8, name: 'Speaker 8', part: 'Before the stress, and after us' },
];

const SLIDES = [

/* ───────── Speaker 1 — the wait ───────── */
{
  id: 'chen', sp: 1, secs: 34, img: 's-chen.webp', ground: 'photo',
  kicker: 'Yunlin, Taiwan',
  title: 'She waits for the plant to tell her.',
  lines: [],
  say: `Good afternoon. This is Ms. Chen. She grows vegetables in Yunlin, and we asked her a simple question: how do you know when your plants are in trouble? She told us she waits. She waits for the pests. She waits for the disease. And once she can see what went wrong, she adjusts — next season. That worked for a very long time, because the weather used to repeat itself. It doesn't anymore. The season she is learning from is not the season that is coming.`,
  note: 'Ms. Chen is one of the farmers interviewed during the nine-month stakeholder programme.',
},
{
  id: 'scale', sp: 1, secs: 28, bare: true, img: 's-992.webp', ground: 'dark',
  kicker: 'Not a marginal population',
  title: '99.2%',
  lines: ['of Taiwan’s farmers work small-scale farms', '85.3% of all our agricultural land'],
  say: `And she is not an edge case. She is the case. 99.2% of Taiwan's farmers work small-scale farms, holding 85.3% of our agricultural land. We laid every farmland parcel over a climate volatility index, and the small farms cluster precisely along the stretch of coast where the weather is hardest to predict. The people with the least margin for error are farming the ground that makes the most.`,
  note: 'Farmland parcels × climate volatility index, west coast clustering.',
  cue: 'count',
},
{
  id: 'world', sp: 1, secs: 28, img: 's-world2080.webp', ground: 'dark',
  kicker: 'Projected, 2045',
  title: 'The same map, everywhere.',
  lines: ['Heat and salinity stress keep rising', 'Yields keep falling'],
  say: `And this is not a Taiwan problem. Run the hottest summer day and agro-climatic yield potential forward together, and the same squeeze shows up on every continent that grows food. Heat climbing, yield falling. Which raises the question this project started from. Synthetic biology has a great deal to say about climate and agriculture. What has it actually put in the hands of a farmer like Ms. Chen?`,
  note: 'FAO GAEZ agro-climatic potential yield, SSP5-8.5.',
},

/* ───────── Speaker 2 — why help arrives late ───────── */
{
  id: 'coldchain', sp: 2, secs: 44, bare: true, img: 's-coldcost.webp', ground: 'dark',
  kicker: 'Biostimulants exist. They just can’t get there.',
  title: '77%',
  lines: ['of logistics cost is cold storage and transport'],
  say: `The honest answer is that good science already exists. Biostimulants — active proteins and peptides that help a crop hold on through heat or salt. They work. We did not need to invent them. The problem is everything after they are made. A protein has to stay cold from the factory, through the warehouse, onto the truck, down the last road to the farm. And in comparable cold-chain products, storage and transport are around three quarters of the logistics bill. So the help exists, but it is expensive, it is slow, and it arrives last at the farms with the thinnest margins. The molecule was never the bottleneck. The distance was.`,
  note: 'Figure is from a vaccine cold-chain costing study, used as the closest published analogue.',
  cue: 'count',
},
{
  id: 'nofactory', sp: 2, secs: 16, bare: true, img: 's-nofactory.webp', ground: 'brand',
  kicker: 'This is why we came up with',
  title: 'ReLEAF',
  lines: ['No central factory', 'No cold chain', 'No waiting for a delivery'],
  say: `So we stopped trying to ship the protein, and started shipping the thing that makes it. ReLEAF produces plant protectants on site, on demand. No central factory. No cold chain. Nothing to throw away when it warms up on a loading dock.`,
  note: '',
  cue: 'reveal',
},
{
  id: 'besidecrop', sp: 2, secs: 24, bare: true, img: 's-besidecrop.webp', ground: 'illus',
  kicker: '',
  title: 'The protectant is made beside the crop, in the hours the crop needs it.',
  lines: [],
  say: `A box at the edge of the field. Engineered bacteria inside it, making the protectant in the hours the crop needs it, and the protectant leaving the box without the bacteria. That is the whole idea, and it is the only sentence you need to keep from this talk. Everything after this is us finding out what breaks.`,
  note: '',
},

/* ───────── Speaker 3 — the switch ───────── */
{
  id: 'tubes', sp: 3, secs: 40, img: 's-tubes.webp', ground: 'white',
  kicker: 'Our chassis: Bacillus subtilis WB800',
  title: 'Green light on. Red light off.',
  lines: [],
  say: `This is our chassis: Bacillus subtilis WB800, protease-deficient, so it does not eat what it secretes. Under green light it makes the protectant. Under red light it does not. Notice what is missing from that sentence — there is no chemical. The published versions of this circuit run on IPTG and xylose, which are fine in a lab. Nobody is pipetting IPTG into a bucket in a rice field. So we took the chemistry out of the control and put light in instead. Light is free, it is instant, and you can switch it off from a phone.`,
  note: 'WB800 is protease-deficient, from Prof. Huang at NCHU.',
},
{
  id: 'circuit', sp: 3, secs: 32, img: 's-circuit.webp', ground: 'white',
  kicker: 'ccaS/ccaR · four modules',
  title: 'A light switch borrowed from cyanobacteria.',
  lines: [],
  say: `The switch itself is borrowed — the ccaS/ccaR system from cyanobacteria, building on Castillo-Hair and colleagues. Four modules. The first makes the sensor's pigment from the cell's own heme. That pigment clips onto CcaS, sitting in the membrane. Under red, CcaS stays quiet and the circuit is off. Under green it changes shape and hands a phosphate to CcaR, which switches on the output promoter and starts transcribing the protectant. Four modules, one input, and the input is a colour.`,
  note: 'Castillo-Hair et al. 2019; we swapped their chemically inducible promoters for constitutive ones.',
},
{
  id: 'lpa', sp: 3, secs: 30, img: 's-lpa.webp', ground: 'dark',
  kicker: 'Light Plate Apparatus',
  title: 'So we built the thing that asks the question.',
  lines: [],
  say: `To test a light switch you need identical cultures under different light, at the same time, in the same incubator. There is no catalogue number for that. So we built one — an addressable LED array under standard culture tubes. Green under this one, red under that one. Same medium, same shaker, same hands. The only variable is colour. It is the cheapest thing in this talk, and the build files are published.`,
  note: 'Build guide published; one of the four hardware guides.',
},

/* ───────── Speaker 4 — it is light controlled ───────── */
{
  id: 'dnph', sp: 4, secs: 42, bare: true, img: 's-dnph.webp', ground: 'white',
  kicker: 'Enzyme activity in the supernatant, 13 h',
  title: 'The green tubes were working. The red ones were not.',
  lines: [],
  say: `Then we ran the assays. The blot is the clean one: more secreted protectant under green than under red, at thirteen hours and again at sixteen. And because our first protectant is an enzyme, we could ask a better question than how much is there — we could ask whether it works. At thirteen hours, activity under green is far above red. I will be straight with you about the size of this: two replicates, and the sixteen-hour point does not hold the same way. So the claim is narrow. This circuit answers to colour, and what comes out of it is a working enzyme.`,
  note: 'DNPH 13 h: green 10.4 ± 5.6 vs red 0.7 ± 2.4. ELISA at the same point is near-identical (12.9 vs 12.5), and the 16 h DNPH point reverses. n = 2, so no statistic. The blot is the cleanest light-dependence evidence; say so plainly if pressed.',
},
{
  id: 'trio', sp: 4, secs: 42, img: 's-trio.webp', ground: 'dark',
  kicker: 'Chosen with Prof. Sattely and Dr. Brophy',
  title: 'Three protectants, on purpose.',
  lines: ['ACC deaminase — an enzyme we can measure', 'BoPEP4 — a novel peptide, 23 residues', 'LEA14 — ordered and disordered'],
  say: `We deliberately did not pick one protectant. We started from the stresses — salt, drought, heat — and narrowed a large pool by talking to people. ACC deaminase came from Dr. Brophy: well documented, and an enzyme, so we can measure activity and not just presence. BoPEP4 came out of an interview with Professor Sattely at Stanford and is almost undescribed — twenty-three residues, no folded core, so every residue is open to redesign. LEA14 sits between them. The set spans documented and novel, ordered and disordered, enzyme and peptide. If the platform only worked for one well-behaved protein, we would never have found out.`,
  note: 'Mutations: truncations for secretion, point mutations for interaction, K-segment transposition in LEA14. BoPEP4 took HADDOCK runs and the most triage.',
  cue: 'reveal',
},

/* ───────── Speaker 5 — cells stay in ───────── */
{
  id: 'reactor', sp: 5, secs: 24, img: 's-reactor.webp', ground: 'dark',
  kicker: 'Perfusion bioreactor · lab unit',
  title: 'One job: keep the bacteria in, let the protectant out.',
  lines: [],
  say: `Now. Engineered bacteria, in a box, at the edge of an open field. Everyone in this room just had the same thought, and every farmer we spoke to had it faster than we did. So the bioreactor was not designed around yield, or elegance, or cost. One requirement, and everything else bends to it: the organism never leaves the loop.`,
  note: 'Eight design cycles; containment is physical, not a genetic kill switch — that was an expert-review decision.',
},
{
  id: 'pores', sp: 5, secs: 38, img: 's-pores.webp', ground: 'dark',
  kicker: 'Hollow-fibre membrane · 0.2 µm',
  title: 'The protein fits. The cell does not.',
  lines: [],
  say: `At the centre of it is a hollow-fibre membrane. The culture is pumped through the inside of each fibre, and those fibre walls are perforated with pores two tenths of a micrometre across. A protein goes through without noticing. A Bacillus cell is many times too large and stays where it is. A pinch valve sets the pressure that pushes the protectant across. The important part: this is a physical separation. It does not depend on the bacteria behaving, and it does not depend on a kill switch working on the worst day of the year.`,
  note: '',
},
{
  id: 'contained', sp: 5, secs: 28, bare: true, img: 's-cellsstayin.webp', ground: 'dark',
  kicker: 'Medium drawn from the shell side, plated twice',
  title: 'Nothing grew.',
  lines: [],
  say: `And we tested that the only way that counts. Take medium from the shell side — the side whose contents would go onto a plant — and plate it. Twice, on two different runs. Nothing grew. Meanwhile the inside of the loop is full of colonies, which tells you the culture was alive and the test was not simply failing. The protectant leaves this reactor. The organism does not.`,
  note: 'Both plating runs, including the earlier module comparison.',
},

{
  id: 'cycles', sp: 5, secs: 42, img: 's-modules.webp', ground: 'dark',
  kicker: 'Eight design cycles · April to September',
  title: 'None of that was the first design.',
  lines: [],
  say: `And none of this was our first design. Eight cycles, and the turning points were almost all other people. An expert told us our flow control would not hold pressure, so the valve changed. Another told us two boards and a loom of wire was a field failure waiting to happen, so it became one. And a biosafety reviewer pushed us off a genetic kill switch onto physical containment — which is why a membrane is doing that job and not a suicide gene. We came in thinking the engineering was ours and the interviews were a deliverable. It was the other way round.`,
  note: 'Pinch valve from Prof. Chang, NCKU; mainboard consolidation from Owl Lab.',
},

/* ───────── Speaker 6 — built to be rebuilt ───────── */
{
  id: 'delivery', sp: 6, secs: 42, bare: true, img: 's-72h.webp', ground: 'dark',
  kicker: 'Integrated cycle 4 · shell side',
  title: '72 hours, still delivering.',
  lines: ['Peak 6.5 µg/mL at 12 h', 'Above 2 µg/mL to the end', 'Active from hour 18 onward'],
  say: `Containment was the first question. The harder one is whether this is a supply or just a puff. Earlier we showed the membrane is barely a barrier — roughly ten micrograms per millilitre inside the loop, nearly the same outside it, still active once across. Then we ran it for three days. The enzyme kept arriving on the shell side: a peak of six and a half micrograms per millilitre at twelve hours, above two right through to the end, and measurable activity from the eighteenth hour on. That is the shape we needed. Not a dose. A tap you can leave on.`,
  note: 'Cycle 2 showed ~10 µg/mL on both sides of the membrane — the membrane is almost no barrier to the protein. Gabriel’s v2 deck sets the ACCD range at 2.5–8.5 µg/mL.',
  cue: 'reveal',
},
{
  id: 'photometer', sp: 6, secs: 42, bare: true, img: 's-38pct.webp', ground: 'dark',
  kicker: 'Inline photometer · US$371 of parts',
  title: 'Within 3.8% of a $15,000 instrument.',
  lines: [],
  say: `There is a problem hiding in that run. To know how the culture is doing you measure its density, and to measure its density you take a sample — which means opening a sealed loop, every few hours, for three days. Every sample is a hole in the containment we just spent two slides proving. So we built a photometer that reads density straight through the flowing culture, with a second beam that never touches it, so a dimming lamp is never mistaken for growing bacteria. Three hundred and seventy-one dollars of parts. Against a fifteen-thousand-dollar benchtop instrument: three point eight percent median difference, no correction applied.`,
  note: '19 paired readings, trusted to about OD 1. In a 434-hour run it logged 10 days of clean growth, and the software flagged the reference-channel failure 26.7 h early on replay.',
  cue: 'count',
},
{
  id: 'guides', sp: 6, secs: 42, bare: true, img: 's-commercial.webp', ground: 'dark',
  kicker: 'Four build guides, published',
  title: 'Three people outside our team have already built one.',
  lines: [],
  say: `All of it is documented to the point where somebody else can build it. Then we did the part teams skip: we handed the guide to three people outside our team, including one who had never soldered, and watched them build it without us. Every place they got stuck is a place the guide was wrong. It has been revised, so the fourth builder will not need us in the room. The unit on screen is the next step — the same loop and the same containment in a sealed suitcase. That one is designed, not built, and we will say so every time we show it.`,
  note: 'Builders: an experienced engineer, someone with little engineering background, and a Boy Scout. The commercial unit shown is a design, not yet built.',
},

/* ───────── Speaker 7 — the plants ───────── */
{
  id: 'soil', sp: 7, secs: 34, img: 's-soil15.webp', ground: 'white',
  kicker: '300 mM NaCl · soil',
  title: 'Day one, they look the same. Day five, they do not.',
  lines: [],
  say: `On agar, under five days of heat, plants sprayed with ACC deaminase came out with about thirty-five percent more chlorophyll and six millimetres more root. Under salt, the peptide nobody had characterised did best of the three. Then we moved to soil, which is where results usually go to die. Three hundred millimolar sodium chloride. On day one you cannot tell the pots apart. By day five you can tell from across the room, and the treated plants hold about fifteen percent more chlorophyll.`,
  note: 'Agar heat: +35% chlorophyll, +6 mm primary root. Agar 100 mM NaCl: BoPEP4 +88%, LEA14 +35%.',
},
{
  id: 'timing', sp: 7, secs: 46, img: 's-timing.webp', ground: 'white',
  kicker: 'Five days at 37 °C',
  title: 'And then the result that changed the project.',
  lines: ['Treat as the heat begins — recovers to ~100%', 'Treat after five days — worse than nothing'],
  say: `And then the experiment that changed the project. Same plants, same stress, same protectant. The only variable is when you apply it. Heat with no treatment leaves the plant at eighty-three percent of normal chlorophyll. Apply it as the heat begins, and the plant comes back to nearly a hundred. Apply it after five days of heat — the way you would if you were reacting to damage you could see — and it is worse than doing nothing. Late treatment is not a weaker rescue. It is a harm. Which means this was never only a chemistry problem, and Ms. Chen, waiting for her plants to tell her, is exactly the person it would fail.`,
  note: 'Post-treatment: −42% against the untreated heat-stressed control.',
  cue: 'reveal',
},

/* ───────── Speaker 8 — before the stress, and after us ───────── */
{
  id: 'model', sp: 8, secs: 40, bare: true, img: 's-ricemodel.webp', ground: 'photo',
  kicker: '25 years of Taiwanese rice harvests',
  title: '32%',
  lines: ['lower prediction error than yield trend alone'],
  say: `So ReLEAF has to move before the stress arrives, and growing a batch takes hours. We took twenty-five years of Taiwanese rice harvests and matched them against the weather those seasons actually had, to find which combinations predict a bad year. They are not the dramatic ones. Warm nights. Humidity at the wrong stage. Against a county's own yield trend, our weather-informed model cut prediction error by thirty-two percent — trained on early years, tested on harvests it had never seen. And that index is not a chart in a report. It sets the light intensity in the reactor.`,
  note: 'Trained on earlier years, evaluated against actual later yields.',
  cue: 'count',
},
{
  id: 'loop', sp: 8, secs: 42, bare: true, img: 's-aiotloop.webp', ground: 'white',
  kicker: 'The whole system, in one line',
  title: 'Stress predicted → green light on → protectant out.',
  lines: [],
  say: `So here is the whole system in one line. Field sensors and the forecast see the stress coming. A digital twin forecasts how the culture will grow over the next twelve hours, works out whether a batch can be ready in time, and proposes when to switch the green light on. A person approves it. The bacteria make the protectant, the membrane lets only the protectant out, and it reaches the plants before the heat does. And because a farmer should not have to read a dashboard to trust a machine, they can ask it, in plain language, why the light is still off.`,
  note: 'The twin forecasts culture growth up to 12 h ahead and flags unreliable readings; a person approves the induction decision.',
},
{
  id: 'people', sp: 8, secs: 36, img: 's-forum.webp', ground: 'photo',
  kicker: 'Nine months · 31 stakeholders',
  title: 'The farmers said yes, with conditions.',
  lines: ['Affordable', 'Accessible', 'Practical on the farm they already run'],
  say: `And none of it matters if nobody uses it. Over nine months we worked with more than thirty stakeholders, and ran a public forum that put smallholders, organic growers and researchers in one room and let them disagree. The farmers were more open than we expected — on three conditions. Affordable, accessible, and practical on the farm they already run. Those conditions changed the hardware. And a conversation about regulation changed what ReLEAF even is: we position it as a biostimulant and microbial fertiliser, because that is a door that actually opens.`,
  note: 'CH Biotech on regulation; markets narrowed to the US, Thailand and the Philippines.',
  cue: 'reveal',
},
{
  id: 'close', sp: 8, secs: 42, bare: true, img: 's-everyfarmer.webp', ground: 'dark',
  kicker: '',
  title: 'Every farmer, a biomanufacturer.',
  lines: [],
  say: `We started with one woman in Yunlin, waiting for her plants to tell her that something had already gone wrong. We would like her to know first. There is a long way to go — field validation, pilot cooperatives, a version of this that works somewhere that is not Taiwan. But the circuit is open, the output module is a slot you can drop your own protein into, and every build guide is published. So if there is something you want delivered to a plant, take it. Make biological protection local, responsive, and close enough to reach. Every farmer, a biomanufacturer. Thank you.`,
  note: 'Team walks on here.',
},

];

if (typeof module !== 'undefined') module.exports = { SLIDES, SPEAKERS };
