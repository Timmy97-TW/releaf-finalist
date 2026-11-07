/* ReLEAF — Finalist presentation, 15:00 on the Main Stage.
   ---------------------------------------------------------------------------
   One slide source, three views:
     index.html   Script           every slide with what is said over it
     show.html    Slides           click through, nothing but the slide
     notes.html   Slides + script  one slide at a time with its script beside it

   Every slide is authored on a 1600x900 stage. The node strip takes 36-82, the
   claim 102-202, and the body box is 1448 x 640 at (76,214).

   Each slide carries:
     n, time, secs   its number, when it should start, its share of the talk
     speaker         who says it
     node, sub       which chapter the strip should light (0 = outside the six)
     title, nav      the claim, and a short line for the indexes
     stage           the slide markup
     script          lead, body, numbers, and the answer to hold if pressed

   Conventions the views depend on:
     · `--d` on a `.st` element is its entrance order, counting from 0 in the
       order the speaker reaches it. It must never run backwards down the page,
       and items that land together share a number.
     · Charts are drawn from their numbers by charts.js, never pasted in as a
       picture, so the data is auditable in one place and legible at stage size.
     · A figure is cropped, never zoomed at.
   --------------------------------------------------------------------------- */

const NODES = [
  {label: 'Problem', img: 'nd-problem'},
  {label: 'Switch',  img: 'nd-switch'},
  {label: 'Reactor', img: 'nd-reactor'},
  {label: 'Measure', img: 'nd-measure'},
  {label: 'Plants',  img: 'nd-plants'},
  {label: 'People',  img: 'nd-people'}
];

/* a bordered figure box of a fixed height, so the body grid always fills */
const EXT = src => src.endsWith('.svg') ? src : src + '.webp';

const F = (src, alt, h, cls, d) =>
  `<figure class="fig ${cls || ''} st zoom" style="height:${h}px;--d:${d || 0}">` +
  `<img src="img/${EXT(src)}" alt="${alt}"></figure>`;

/* a figure with the one-line label the speaker will actually say */
const FL = (src, alt, h, label, cls, d) =>
  `<div class="st" style="--d:${d || 0}">` +
  `<figure class="fig ${cls || ''}" style="height:${h}px"><img src="img/${EXT(src)}" alt="${alt}"></figure>` +
  `<p class="lbl">${label}</p></div>`;

/* a chart box of a fixed height; charts.js fills it from the spec */
const C = (spec, h, d) =>
  `<div class="chartbox st zoom" style="height:${h}px;--d:${d || 0}">` +
  `<div data-chart='${JSON.stringify(spec).replace(/'/g, '&#39;')}'></div></div>`;

const SLIDES = [

/* ══════════════════════════════════ 1 · the open ══════════════════════════════════ */
{
  n: 1, time: '0:00', secs: 12, speaker: 'Speaker 1', node: 0, bleed: true,
  title: 'ReLEAF', nav: 'Title',
  stage: `
<div class="bleed">
  <img src="img/s-hero.webp" alt="A ReLEAF unit standing at the edge of a planted field at dusk, the crop rows lit green">
  <div class="scrim" style="background:linear-gradient(90deg,rgba(14,18,10,.92) 0%,rgba(14,18,10,.72) 46%,rgba(14,18,10,.28) 100%)"></div>
  <div class="over">
    <p class="kick st" style="--d:0">iGEM 2026 · Grand Jamboree</p>
    <h1 class="wordmark st" style="--d:1">Re<em>LEAF</em></h1>
    <p class="one st" style="--d:2">A bioreactor at the edge of the field that makes a plant
      protectant on the day the crop needs it — and keeps the bacteria inside.</p>
    <p class="team st" style="--d:3">GEMS Taiwan</p>
  </div>
</div>`,
  script: {
    lead: 'Good afternoon. We are GEMS Taiwan, and this is ReLEAF.',
    body: [],
    numbers: [],
    careful: ''
  }
},

{
  n: 2, time: '0:12', secs: 24, speaker: 'Speaker 1', node: 0, bleed: true,
  title: 'Ms. Chen waits for her plants to tell her, and by then it is next season',
  nav: 'The farmer we started from',
  stage: `
<div class="bleed">
  <img src="img/s-chen.webp" alt="Ms. Chen in her farm shed in Yunlin">
  <div class="scrim" style="background:linear-gradient(180deg,rgba(14,18,10,.30) 0%,rgba(14,18,10,.52) 44%,rgba(14,18,10,.93) 100%)"></div>
  <div class="over">
    <p class="kick st" style="--d:0">Yunlin, Taiwan</p>
    <p class="quote st" style="--d:1">“It’s difficult to understand plants, because they
      can’t communicate with us the way people do.”</p>
    <p class="who st" style="--d:2">Ms. Chen · vegetable grower · one of the stakeholders
      we worked with over nine months</p>
  </div>
</div>`,
  script: {
    lead: 'This is Ms. Chen. We asked her how she knows when her plants are in trouble.',
    body: [
      'She waits. For the pests, for the disease. Once she can see what went wrong, she adjusts — next season.',
      'That worked while the weather repeated itself. It does not any more. The season she is learning from is not the season that is coming.'
    ],
    numbers: [],
    careful: 'One of the farmers interviewed during the nine-month stakeholder programme. Her words are quoted from our own interview transcript, with permission.'
  }
},
/* ═══════════════════════════ 2 · the problem ═══════════════════════════ */
{
  n: 3, time: '0:36', secs: 22, speaker: 'Speaker 1', node: 1,
  title: '<b>85.3%</b> of Taiwan’s farmland is small farms, and they sit under the most volatile weather',
  nav: 'Who this is for',
  stage: `
<div class="s-head"><h2 class="s-claim two st" style="--d:0"><b>85.3%</b> of Taiwan’s farmland is
  small farms, and they sit under the <em>most volatile weather</em></h2></div>
<div class="s-body s3">
  <div class="col">
    <div class="tiles st" style="--d:1">
      <div class="tile">
        <div class="n">99.2<span>%</span></div>
        <h4>of Taiwan’s farmers work small-scale farms</h4>
        <p>Not a minority case to design around later. This is the market.</p>
      </div>
      <div class="tile">
        <div class="n">85.3<span>%</span></div>
        <h4>of all agricultural land is in their hands</h4>
        <p>So the people with the least margin for error farm most of the ground.</p>
      </div>
    </div>
    <p class="limit olive st" style="--d:4"><b>And it is not only Taiwan.</b> Run the same
      projection anywhere that grows food and the squeeze repeats: hotter summer peaks and
      falling agro-climatic yield potential, on every continent.</p>
  </div>
  <div class="col">
    ${FL('h-volatility', 'Taiwan farmland parcels, red where under two hectares, over a climate volatility index',
        540, 'Farm parcels under two hectares, in red, over the climate volatility index. The red runs down the western plain, where the volatility is highest', '', 2)}
  </div>
</div>`,
  script: {
    lead: 'She is not an edge case. She is the case.',
    body: [
      'Ninety-nine percent of Taiwan\'s farmers work small-scale farms, holding eighty-five percent of our farmland.',
      'We laid every parcel under two hectares over a climate volatility index. The red runs down the western plain. The people with the least margin for error farm the ground that moves the most.'
    ],
    numbers: [['Small-scale farmers', '99.2% of all farmers'], ['Land they hold', '85.3% of agricultural land']],
    careful: 'The volatility index is our own geospatial analysis over national farmland parcel data. The global panel is FAO GAEZ agro-climatic potential yield under SSP5-8.5, which is a projection, not a measurement — say so.'
  }
},

{
  n: 4, time: '0:58', secs: 34, speaker: 'Speaker 1', node: 1,
  title: 'Keeping the protein cold is <b>77%</b> of what it costs to deliver it',
  nav: 'Why good protectants arrive late',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">Keeping the protein cold is
  <b>77%</b> of what it costs to deliver it</h2></div>
<div class="s-body s4">
  <div class="flow h st" style="--d:1">
    <div class="step"><div class="k">1</div><h4>Central factory</h4>
      <p>Active proteins and peptides, produced at scale, a long way from the farm.</p></div>
    <div class="step"><div class="k">2</div><h4>Cold storage</h4>
      <p>A protein loses activity warm, so it is chilled from the moment it is made.</p></div>
    <div class="step"><div class="k">3</div><h4>Refrigerated transport</h4>
      <p>Every leg has to hold the chain, down to the last unpaved road.</p></div>
    <div class="step off"><div class="k">4</div><h4>The farm</h4>
      <p>Expensive, slow, and last to arrive at the smallest buyers.</p></div>
  </div>
  <div class="stackwrap st" style="--d:2">
    <div class="stack">
      <div style="flex:43;background:#324519">43% cold storage</div>
      <div style="flex:34;background:#6d7a34">34% refrigerated transport</div>
      <div style="flex:23;background:#d8d9cf;color:#1d1d1b">23% everything else</div>
    </div>
  </div>
  <div class="bot">
    <div class="st" style="--d:3">
      <span class="big">77%</span>
      <p class="big-l">of the logistics bill is the cold chain alone. <b>The molecule was never
        the bottleneck — the distance was.</b></p>
    </div>
    <p class="limit st" style="--d:4"><b>Where this number comes from.</b> A published
      cold-chain costing study for vaccines, used as the closest documented analogue for a
      temperature-controlled biologic. There is no equivalent public breakdown for agricultural
      biostimulants, and our wiki says so.</p>
  </div>
</div>`,
  script: {
    lead: 'The honest answer is that the good science already exists.',
    body: [
      'Biostimulants — proteins and peptides that help a crop hold on through heat or salt. They work. We did not need to invent them.',
      'The problem is everything after. A protein has to stay cold from the factory to the last road, and in comparable products that is about three quarters of the logistics bill. So the help arrives last at the farms with the thinnest margins.',
      'The molecule was never the bottleneck. The distance was.'
    ],
    numbers: [['Cold storage', '43%'], ['Refrigerated transport', '34%'], ['Cold chain together', '77%']],
    careful: 'This is a vaccine cold-chain costing study used as an analogue, not a measured figure for biostimulants. If a judge pushes, concede that immediately — the argument does not depend on the exact split, only on the cold chain dominating.'
  }
},

{
  n: 5, time: '1:32', secs: 26, speaker: 'Speaker 1', node: 1,
  title: 'So we ship the factory, not the protein',
  nav: 'The ReLEAF system',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">So we ship <em>the factory</em>,
  not the protein</h2></div>
<div class="s-body s5">
  <div class="flow h st" style="--d:1">
    <div class="step"><div class="k">1</div><h4>Predict</h4>
      <p>Field sensors and the forecast give a stress index for that parcel.</p></div>
    <div class="step"><div class="k">2</div><h4>Decide</h4>
      <p>A digital twin checks a batch can be ready in time. A person approves it.</p></div>
    <div class="step"><div class="k">3</div><h4>Switch on</h4>
      <p>Green light induces <i class="sp">B. subtilis</i> to make and secrete the protectant.</p></div>
    <div class="step"><div class="k">4</div><h4>Separate</h4>
      <p>A 0.2 µm membrane lets the protein out and holds every cell in.</p></div>
    <div class="step"><div class="k">5</div><h4>Apply</h4>
      <p>Fresh protectant reaches the crop before the stress does.</p></div>
  </div>
  <div class="low">
    ${FL('h-application', 'Four panels: predictive sensing and a leaf sensor, the bioreactor activating and diluting, application to the field, and the farmer checking the app',
        346, 'What the farmer actually does, start to finish', '', 2)}
    <div class="side">
      <ul class="ticks st" style="--d:3">
        <li><b>No central factory.</b> The protectant is made metres from the crop that needs it.</li>
        <li><b>No cold chain.</b> It is used within hours, so it never needs chilling.</li>
        <li><b>Nothing to order.</b> The farm holds a sealed cartridge, not a shipment.</li>
      </ul>
      <p class="limit olive st" style="--d:4"><b>What this talk is going to do.</b> Take that
        sentence apart and show you the evidence for each piece — the switch, the containment,
        the measurement, the plants, and the people who changed the design.</p>
    </div>
  </div>
</div>`,
  script: {
    lead: 'So we moved the factory instead of the molecule.',
    body: [
      'A unit at the edge of the field predicts the stress, grows a batch, switches the cells on with green light, and lets the protein out through a membrane that keeps the cells in.',
      'No central factory. No cold chain, because it is used within hours. Nothing to order.',
      'For the next twelve minutes we take that sentence apart.'
    ],
    numbers: [],
    careful: 'This is the architecture, and every box on it has been built and run at bench scale. The integrated field unit has not — that is a render, and we say so when we get to it.'
  }
},
/* ═══════════════════════════ 2 · the switch ═══════════════════════════ */
{
  n: 6, time: '1:58', secs: 56, speaker: 'Speaker 2', node: 2,
  title: 'We took the chemical inducers out, so the only input left is a colour',
  nav: 'The light-controlled circuit',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">We took the chemical inducers out,
  so the only input left is <em>a colour</em></h2></div>
<div class="s-body s6">
  <div class="col">
    ${FL('f-modules', 'The four modules of the CcaS/CcaR optogenetic circuit in B. subtilis',
        372, 'CcaS/CcaR from cyanobacteria, rebuilt in <i class="sp">B. subtilis</i> WB800 — green ~535 nm on, red ~670 nm off', '', 1)}
    <div class="states">
      <div class="state off st" style="--d:5">
        <p class="sh">Red light · no stress predicted</p>
        <p class="sb">CcaS stays unphosphorylated, so CcaR never activates the output promoter.</p>
        <p class="sv">Circuit off</p>
      </div>
      <div class="state on st" style="--d:6">
        <p class="sh">Green light · stress predicted</p>
        <p class="sb">CcaS autophosphorylates and changes conformation; CcaR fires P<sub>cpcG2</sub>.</p>
        <p class="sv">Protectant secreted</p>
      </div>
    </div>
  </div>
  <div class="col mods">
    <div class="mod st" style="--d:2"><span class="mk">1</span>
      <div><b>PCB synthesis</b><p>The cell builds the sensor’s own chromophore out of its heme.</p></div></div>
    <div class="mod st" style="--d:3"><span class="mk">2</span>
      <div><b>Light sensing</b><p>That pigment clips onto CcaS, a sensor kinase in the membrane.</p></div></div>
    <div class="mod st" style="--d:4"><span class="mk">3</span>
      <div><b>Transduction</b><p>CcaS passes a phosphate to the response regulator CcaR.</p></div></div>
    <div class="mod st" style="--d:4"><span class="mk">4</span>
      <div><b>Output</b><p>CcaR fires the promoter, transcribing the protectant behind a secretion tag.</p></div></div>
    <p class="limit olive st" style="--d:7"><b>Why that matters off the bench.</b> The published
      versions run on IPTG and xylose. Nobody is pipetting IPTG into a bucket at the edge of a
      rice field, so we replaced them and left light as the only input.</p>
    <p class="limit red st" style="--d:8"><b>What we have not shown.</b> The modules are built and
      sequence-confirmed, and <b>every reactor run in this talk used a constitutive promoter</b> —
      no number from the loop is the switch doing anything. On the light plate, green raised
      activity at 13 h and the 16 h point is unresolved, n = 2. <b>Red did not switch expression
      off</b>: our red LEDs sit at 640 nm where CcaS/CcaR wants about 672. This is modulation,
      not a clean on–off.</p>
  </div>
</div>`,
  script: {
    lead: 'The switch is borrowed: CcaS and CcaR from cyanobacteria, after Castillo-Hair and colleagues.',
    body: [
      'The cell makes the sensor\'s pigment from its own heme, and it clips onto CcaS in the membrane. Under red, CcaS stays quiet. Under green it changes shape, phosphorylates CcaR, and CcaR fires the output promoter. Our chassis is WB800, protease-deficient, so it does not digest what it secretes.',
      'And notice what is missing. The published versions run on IPTG and xylose. Nobody is pipetting IPTG into a bucket in a rice field, so we replaced those promoters and left light as the only input.',
      'What I am not claiming is that we have shown it switching inside the reactor. Every integrated run in this talk used a constitutive promoter, and our red LEDs sit at six forty where the sensor wants six seventy-two. This is modulation, at n equals two.'
    ],
    numbers: [['Chassis', '<i>B. subtilis</i> WB800'], ['Green, on', '~535 nm'], ['Red, off', '~670 nm']],
    careful: 'Castillo-Hair et al. 2019 is the prior art and it is cited on the slide. Our contribution is the chemical-free version and the secretion-tagged output in WB800, not the sensor itself. WB800 came from Prof. Huang at NCHU. Light induction has been exercised on the light-plate array; it is not yet built into the bioreactor, and we say so later.'
  }
},

{
  n: 7, time: '2:54', secs: 58, speaker: 'Speaker 2', node: 2,
  title: 'A C-terminal His tag passed every gate we had written, and still broke the anchor',
  nav: 'The construct the simulations caught',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">A C-terminal His tag passed
  <em>every gate we had written</em>, and still broke the anchor</h2></div>
<div class="s-body s8">
  <div class="col">
    ${FL('pd-asn23', 'Molecular surface of the PEPR1 binding groove with Asn23 of BoPEP4 buried in a closed pocket',
        386, 'Asn23 sits in a closed pocket. Its free carboxylate makes a two-pronged salt bridge to Arg487', '', 1)}
    <p class="limit red st" style="--d:2"><b>A purification tag goes on one end or the other.</b>
      Put it on the C terminus and Asn23’s carboxylate is spent forming an amide bond. There is no
      free carboxylate left to make the salt bridge, and the pocket has no exit for the tag to
      leave by.</p>
  </div>
  <div class="col">
    <div class="st" style="--d:3">
      <table class="tbl cmp">
        <tr><th>Nine 30 ns trajectories</th><th style="width:21%">Backbone RMSD</th>
            <th style="width:24%">Two-pronged salt bridge</th><th style="width:19%">Our gate</th></tr>
        <tr><td><b>BoPEP4, untagged</b> <span class="sm">the reference</span></td>
            <td class="v">1.67 Å</td><td class="v">100.0%</td><td><span class="tag">pass</span></td></tr>
        <tr class="hi"><td><b>BoPEP4 + C-terminal 6×His</b></td>
            <td class="v">1.12 Å <span class="sm">best in the set</span></td>
            <td class="v red">2.4%</td><td><span class="tag red">false pass</span></td></tr>
        <tr><td>AtPEP1 7–23 <span class="sm">published benchmark</span></td>
            <td class="v">1.17 Å</td><td class="v">99.9%</td><td><span class="tag">pass</span></td></tr>
      </table>
    </div>
    <ul class="ticks sm st" style="--d:4">
      <li><b>Ranked on RMSD, the broken construct comes first.</b> Across the eight peptide runs,
        RMSD against salt-bridge occupancy correlates at Pearson <b>+0.13</b>. It is the wrong
        ruler, and it is the one most people reach for.</li>
      <li><b>So we stopped scoring on aggregates</b> and scored named atom pairs instead. Contact
        count, which does track, correlates at Spearman <b>+0.71</b>.</li>
    </ul>
    <p class="limit olive st" style="--d:5"><b>What it changed.</b> Constructs ordered after
      16 August carry the tag at the <b>N terminus</b>. The cassettes designed in June and July
      put it at the C terminus, directly onto that carboxylate. This was caught in silico,
      before expression.</p>
  </div>
</div>`,
  script: {
    lead: 'We picked three protectants that fail in different ways — an enzyme, a disordered peptide and a folded protein — so one easy molecule could not carry the platform. Here is a mistake that set of choices caught.',
    body: [
      'BoPEP4 ends in an asparagine sitting in a closed pocket. Its free carboxylate makes a two-pronged salt bridge. That is the anchor.',
      'Our June constructs put the histidine purification tag directly onto that carboxylate. We had written our acceptance criteria in advance, and the tagged construct passed all of them. Then we tested the salt bridge on angle as well as distance, and it was absent in every single frame.',
      'And the broken construct has the lowest RMSD in the set. So we stopped scoring aggregates and scored named atom pairs instead — and every construct ordered after August the sixteenth has the tag on the other end.'
    ],
    numbers: [['Salt bridge, untagged', '100.0% of frames'], ['Salt bridge, C-tagged', '2.4%'],
              ['RMSD, C-tagged', '1.12 Å — lowest of nine'], ['RMSD vs salt bridge', 'Pearson +0.13']],
    careful: 'Thirty nanoseconds, one seed per system, no replicates — so this is a hypothesis about what to build, not a binding affinity. None of it has been checked at the bench: no binding assay, no thermal shift, no plant. What it did was change a construct before we spent money on it, which is what a model is for. The same conclusion was reached independently from the tandem-repeat chemistry.'
  }
},

/* ═══════════════════════════ 3 · the reactor ═══════════════════════════ */
{
  n: 8, time: '3:52', secs: 44, speaker: 'Speaker 3', node: 3,
  title: 'A <b>0.2 µm</b> hollow-fibre membrane keeps the cells in and lets the protectant out',
  nav: 'How the bioreactor is built',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">A <b>0.2 µm</b> hollow-fibre membrane
  keeps the cells in and lets the protectant out</h2></div>
<div class="s-body s9">
  <div class="col">
    ${FL('f-system', 'The perfusion loop: culture bottle, pump, inline photometer, hollow-fibre column, pressure transducers, pinch valve and pH dosing',
        566, 'The loop as built. Every sensor on this drawing is fitted to the bench rig', '', 1)}
  </div>
  <div class="col">
    <div class="specs st" style="--d:2">
      <div><b>0.2 µm</b><span>pore through the fibre wall, against cells of 0.25–1.0 µm</span></div>
      <div><b>11</b><span>hollow fibres, 200 cm² of membrane</span></div>
      <div><b>1 L</b><span>stirred culture at 200 rpm, 37 °C</span></div>
      <div><b>263</b><span>mL/min, the flow the shear window recommends</span></div>
    </div>
    <ul class="ticks st" style="--d:3">
      <li><b>The culture circulates</b> from the bottle, through the inside of the fibres — the
        lumen — and back. A servo pinch valve on the return sets the pressure that drives the
        protectant across into the shell.</li>
      <li><b>A protein crosses the wall; a cell cannot.</b> That is the entire biosafety
        argument, and it is falsifiable: either cells cross or they do not.</li>
    </ul>
    <p class="limit olive st" style="--d:4"><b>Containment is physical because an expert told us
      to make it physical.</b> We had designed a genetic kill switch. Dr. Jennifer Brophy
      pointed out that a biological switch can mutate or fail; Dr. Lin Wei-Yi had said the same
      five weeks earlier. A membrane fails loudly, and you can plate for it.</p>
  </div>
</div>`,
  script: {
    lead: 'Engineered bacteria, in a box, at the edge of an open field. Every farmer we spoke to had that thought faster than we did.',
    body: [
      'So the reactor was not designed around yield or cost. One requirement: the organism never leaves the loop. A litre of culture circulates through eleven hollow fibres with pores two tenths of a micrometre across. <i class="sp">Bacillus</i> cells are a quarter of a micrometre and up. A protein goes through. A cell does not.',
      'And that was not our idea. We had designed a kill switch. Dr. Brophy told us a biological switch can mutate or fail. A membrane fails loudly, and you can plate for it.'
    ],
    numbers: [['Pore', '0.2 µm'], ['Cell diameter', '0.25–1.0 µm'], ['Fibres / area', '11 / 200 cm²'],
              ['Recommended flow', '263 mL/min']],
    careful: 'The membrane stops whole cells. It does not stop everything: anything smaller than 0.2 µm crosses too — medium components, vesicles, debris. We withdrew an earlier claim of a 50 kDa cut-off in writing, because the module we own is 0.2 µm microfiltration. The barrier is cellular, not molecular.'
  }
},

{
  n: 9, time: '4:36', secs: 38, speaker: 'Speaker 3', node: 3,
  title: 'No <i class="sp">B. subtilis</i> grew from the shell side, on two separate runs',
  nav: 'Testing the containment',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">No <i class="sp">B. subtilis</i> grew
  from the shell side, on <em>two separate runs</em></h2></div>
<div class="s-body s10">
  <div class="col">
    ${FL('h-shelllumen', 'Two plates: lumen-side medium grew colonies, shell-side medium stayed clear',
        430, 'Medium drawn from each side after 24 h in the reactor and plated on LB at 37 °C. (a) lumen side: colonies. (b) shell side: nothing', '', 1)}
    <p class="limit st" style="--d:2"><b>The lumen plate is the control that makes it mean
      something.</b> Grown beside the shell plate, from the same loop, on the same day. The test
      could see bacteria when bacteria were there.</p>
  </div>
  <div class="col">
    <div class="st" style="--d:3">
      <span class="big">0</span>
      <p class="big-l">colonies from the shell side — the side whose contents go onto a plant.
        <b>Two platings, two different runs, June and the integrated cycle.</b></p>
    </div>
    <p class="limit red st" style="--d:4"><b>What two plates do not license.</b> Two platings,
      <b>no replicate and no log reduction value</b>, so this is evidence of retention and not a
      measured containment efficiency. The wall stops whole cells; <b>debris and vesicles of
      20–200 nm cross with the protein</b>. And the membrane is not the only hole — in one
      prototype a <b>Luer valve broke in half at 38 hours</b> and culture leaked into the
      incubator. The membrane held. The fitting did not.</p>
    <p class="limit olive st" style="--d:5"><b>What we would test next.</b> A fibre that has been
      damaged in the field, and a horizontal-gene-transfer assay. Genetic biocontainment is
      proposed post-Jamboree with a target escape frequency below <b>1 in 10<sup>8</sup></b> — it
      is not in the design today, and we do not claim it.</p>
  </div>
</div>`,
  script: {
    lead: 'We tested containment the only way that counts.',
    body: [
      'Take medium from the shell side — the side that goes onto a plant — and plate it. Twice, on two runs. Nothing grew. The lumen plate beside it was full of colonies, so the test could see bacteria when bacteria were there.',
      'That is the honest shape of a biosafety claim. Not "our reactor is safe", but "no cells crossed this membrane, under these pressures, on these runs".',
      'And the membrane is not the only way out. In one prototype a fitting broke in half at thirty-eight hours.'
    ],
    numbers: [['Shell-side colonies', '0, both runs'], ['Lumen control', 'colonies present'],
              ['Condition', '24 h in the loop, LB, 37 °C']],
    careful: 'Never say “completely safe” or “guaranteed”. One module, our conditions, two platings. No replicate count was recorded for the June plating. There is no genetic containment in the shipped design — it was dropped on Brophy’s advice, and the entrepreneurship page has one sentence claiming “redundancy with genetic and membrane containment” that is wrong; we have flagged it for correction.'
  }
},

{
  n: 10, time: '5:14', secs: 38, speaker: 'Speaker 3', node: 3,
  title: 'The shell side kept delivering ACC deaminase for <b>72 hours</b>',
  nav: 'A supply, not a dose',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">The shell side kept delivering
  ACC deaminase for <b>72 hours</b></h2></div>
<div class="s-body s11">
  <div class="col">
    ${C({type:'line',max:8,ticks:4,unit:'µg/mL · shell side',
        x:['6 h','12 h','18 h','24 h','30 h','36 h','48 h','72 h'],
        y:[3.8,6.5,6.2,3.4,5.9,2.4,2.7,2.5],peak:1,
        rule:{v:2,l:'stays above 2 µg/mL to the end of the run'},
        dots:[0,0,1,1,1,1,1,1],dotsLabel:'enzyme active (DNPH)'}, 392, 1)}
    <p class="cap-s st" style="--d:2">Integrated cycle, ACC deaminase on the shell side across
      72 hours. Peak <b>6.5 µg/mL at 12 h</b>; activity detected by DNPH from hour 18 onward.</p>
  </div>
  <div class="col">
    <ul class="ticks st" style="--d:3">
      <li><b>Both sides read alike.</b> By ELISA the lumen and the shell came back at the same
        concentration, so the membrane is barely a barrier to the protein it is meant to pass.</li>
      <li><b>It is a tap, not a dose.</b> The shape we needed was not a spike — it was a supply
        you can leave running while a stress episode lasts.</li>
      <li><b>And the enzyme still worked after crossing.</b> DNPH reads activity, not presence,
        and it is positive on the shell side from hour 18.</li>
    </ul>
    <p class="limit red st" style="--d:4"><b>Read the axis carefully, and we will say it first.</b>
      Most of these samples read <b>above the top ELISA standard</b> at about 3 µg/mL, so the
      values are extrapolated — and a <b>plasmid-free WB800 control read 4.5 to 5.5 µg/mL on the
      same assay</b>, which is the assay floor talking. What this figure supports is the shape and
      the duration. Our own pages still disagree on the activity units, and we have not resolved
      it. At 2.5 to 6.5 µg/mL this is a low titre for a bioprocess, and we would not claim
      otherwise.</p>
  </div>
</div>`,
  script: {
    lead: 'Containment is half of it. The other half is whether anything useful comes out.',
    body: [
      'Across seventy-two hours ACC deaminase kept arriving on the shell side, peaking near twelve hours and staying above two micrograms per millilitre to the end. DNPH reads activity rather than presence, and it is positive from hour eighteen. What crossed is a working enzyme.',
      'And the part we would rather say than have you find — most of these samples read above the top standard, so the absolutes are extrapolated. This supports the shape and the duration, not a precise concentration.'
    ],
    numbers: [['Peak', '6.5 µg/mL at 12 h'], ['Above 2 µg/mL', 'through 72 h'],
              ['Activity from', '18 h'], ['Lumen vs shell', '10.7 vs 10.5 µg/mL']],
    careful: 'Do not quote a single absolute µg/mL as precise. Three records of the integrated ELISA exist on our own wiki and they disagree; the page says neither is adopted over the other. The safe claim is "the two sides read alike". The DNPH activity units differ between two of our pages by a factor we have not yet reconciled, so quote the shape, not the unit.'
  }
},

{
  n: 11, time: '5:52', secs: 32, speaker: 'Speaker 3', node: 3,
  title: 'Seven runs took us from a pump leak at 27 hours to 77 hours under automatic pH control',
  nav: 'What eight build cycles changed',
  stage: `
<div class="s-head"><h2 class="s-claim two st" style="--d:0">Seven runs took us from a pump leak
  at 27 hours to <em>77 hours</em> under automatic pH control</h2></div>
<div class="s-body s12">
  <div class="col">
    ${FL('w-growthph', 'OD600 over 77 hours with pH beneath it; the sawtooth in the lower panel is automatic base dosing',
        440, 'Run 7 · 77 hours in one file, OD to 3.34. The sawtooth below is the controller dosing base against a pH 7.00 target', '', 1)}
  </div>
  <div class="col">
    <table class="tbl st" style="--d:2">
      <tr><th>Run</th><th>What broke, or what we changed</th><th style="width:18%">How far it got</th></tr>
      <tr><td><b>1</b> Jun</td><td>Pump leak stopped it. First shell-side plate: no colonies</td><td class="v">27 h</td></tr>
      <tr><td><b>3</b> Jul–Aug</td><td>Inline photometer on the loop, no sample ever drawn</td><td class="v">434 h</td></tr>
      <tr><td><b>5</b> Oct</td><td>Reading broke down — bubbles in a sixth of the windows</td><td class="v">37.5 h</td></tr>
      <tr><td><b>6</b> Oct</td><td>Permeate flow halved to 36 LMH; acceptance gate added</td><td class="v">41.8 h</td></tr>
      <tr class="hi"><td><b>7</b> Oct</td><td>Flux to 51 LMH, pH loop dosing itself. <b>53 automatic
        base doses, 90 shell-valve collections</b></td><td class="v">77 h</td></tr>
    </table>
    <p class="limit red st" style="--d:3"><b>The pH loop ran, and it was not good enough.</b>
      Fifty-three doses against a 7.00 target, and pH still ranged from <b>6.34 to 7.97</b>. The
      loop only adds base; it has nothing to bring pH down with. That is the next build.</p>
    <p class="limit st" style="--d:4"><b>Fouling is the only trend we have.</b> Transmembrane
      pressure rose from 1.9 to 4.4 kPa over run 7 as permeability halved, 2520 → 1210 LMH/bar.
      One run, one module. No replacement interval follows from it.</p>
  </div>
</div>`,
  script: {
    lead: 'None of that worked first time, and the sequence is the engineering.',
    body: [
      'Run one stopped at twenty-seven hours with a pump leak, and gave us the first clean shell-side plate. Run seven is seventy-seven hours in one file, with the controller dosing its own base.',
      'And it still is not right. Fifty-three automatic doses against a pH seven target, and pH still swung from six point three to eight. The loop can only add base. That is the next build.'
    ],
    numbers: [['Longest run', '77 h, OD 3.34'], ['Automatic base doses', '53'],
              ['pH achieved', '6.34 – 7.97 against 7.00'], ['Permeability', '2520 → 1210 LMH/bar']],
    careful: 'Our three wiki pages number these runs three different ways — prototypes 1–4, cycles 1–8, runs 1–7. Use the run numbering from the software page. Also: the 434-hour run is on the photometer loop, and our engineering page says that loop had no membrane module fitted, so do not describe it as 434 hours of perfusion through the membrane.'
  }
},

/* ═══════════════════════════ 4 · measurement ═══════════════════════════ */
{
  n: 12, time: '6:24', secs: 34, speaker: 'Speaker 4', node: 4,
  title: 'Five of us measured the same loop by hand and got three different lines',
  nav: 'Why we stopped measuring by hand',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">Five of us measured the same loop by hand
  and got <em>three different lines</em></h2></div>
<div class="s-body s13">
  <div class="col">
    ${FL('w-threelines', 'Pressure drop against flow for three manual series on the same loop, each with its own straight-line fit, the three lines clearly separated',
        452, 'Round 2, by hand. ΔP against Q for three series on the same loop, same protocol, with their fits', '', 1)}
  </div>
  <div class="col">
    <div class="st" style="--d:2">
      <p class="cap">At the same 22% pump setting, three times</p>
      <table class="tbl tight">
        <tr><th>Series</th><th style="width:30%">Flow</th><th style="width:30%">Pressure drop</th></tr>
        <tr><td>1</td><td class="v">405 mL/min</td><td class="v">0.257 bar</td></tr>
        <tr><td>2</td><td class="v">407 mL/min</td><td class="v red">0.082 bar</td></tr>
        <tr><td>3</td><td class="v red">203 mL/min</td><td class="v">0.197 bar</td></tr>
      </table>
      <p class="note-s" style="margin-top:12px">57 readings · 7 pump settings · about five of us
        taking them. Each series is linear on its own, R² 0.91–0.95 — but the slopes run from
        0.0002 to 0.0017 bar per mL/min.</p>
    </div>
    <p class="limit red st" style="--d:3"><b>Pressure differed more than threefold and flow by
      half, under conditions that had not changed.</b> Only the person measuring changed. So the
      spread was us.</p>
    <p class="limit olive st" style="--d:4"><b>That is why the reactor is instrumented.</b> Not
      because sensors are impressive, but because a hand-read number from this loop could not be
      trusted to a factor of three — and everything downstream, the hydraulic model, the fouling
      trend, the shear window, is built on it.</p>
  </div>
</div>`,
  script: {
    lead: 'This slide is the reason for the next three.',
    body: [
      'Early on we characterised the membrane by hand. Fifty-seven readings, five of us taking them. Every series came out linear, and they came out as three different lines.',
      'At the same pump setting we read four hundred and five millilitres a minute at a quarter of a bar, four hundred and seven at eight hundredths, and two hundred and three at two tenths.',
      'The only thing that changed was whose hands were on it. So the spread was us.'
    ],
    numbers: [['Readings', '57 over 7 settings'], ['Same setting, flow', '203 to 407 mL/min'],
              ['Same setting, ΔP', '0.082 to 0.257 bar'], ['Slope spread', '0.0002 – 0.0017 bar per mL/min']],
    careful: 'This is our own failure, published on our own engineering page. If a judge asks what we learned about measurement, this is the answer: we could not reproduce ourselves, so we replaced the hands with instruments and then had to prove the instruments.'
  }
},

{
  n: 13, time: '6:58', secs: 34, speaker: 'Speaker 4', node: 4,
  title: 'Reading inside the sealed loop matched the benchtop: <b>R² 0.9999</b> against 0.9998',
  nav: 'Calibrating the in-line photometer',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">Reading inside the sealed loop matched
  the benchtop: <b>R² 0.9999</b> against 0.9998</h2></div>
<div class="s-body s14">
  <div class="col">
    ${FL('w-calmass', 'OD600 from the in-line photometer and from the BioDrop against TiO2 mass added, both fits near perfectly linear',
        400, 'Both instruments against TiO₂ added, 23 Aug. Ours R² 0.9999, the BioDrop 0.9998', '', 1)}
    <p class="limit olive st" style="--d:2"><b>Every sample you draw opens the loop you spent two
      slides sealing.</b> Density has to be read every few hours for three days. So the
      instrument went inside the loop and the sampling stopped.</p>
  </div>
  <div class="col">
    <div class="specs two st" style="--d:3">
      <div><b>3.8%</b><span>median paired difference against the benchtop — <b>no transform
        applied</b></span></div>
      <div><b>600 nm</b><span>amber, chosen because it sits between the circuit's green and red,
        so the instrument cannot switch production on</span></div>
    </div>
    ${FL('w-proslim', 'The Pro and the Slim photometers at the same scale, the Slim about a quarter of the height',
        222, 'Two builds. Pro US$371.78 in parts; Slim US$235.29, about a quarter the height', '', 4)}
    <p class="limit red st" style="--d:5"><b>Where it is not good.</b> It reads <b>low at the low
      end</b>, where a growth curve starts. The benchtop was read undiluted, so the comparison is
      only trustworthy to about <b>OD 1</b>. And the working limit of about OD 2.5 comes from
      <b>one run on one scattering standard</b> — silica, not cells. Cells scatter differently.</p>
  </div>
</div>`,
  script: {
    lead: 'To read density you take a sample, which opens the sealed loop, every few hours, for three days.',
    body: [
      'So the photometer went inside the loop. Amber at six hundred nanometres, chosen deliberately: the circuit answers to green and red, and amber sits between them, so the instrument cannot switch production on while it measures.',
      'Against titanium dioxide our in-line reading is as linear as the benchtop — R squared nought point nine nine nine nine against nought point nine nine nine eight, with no correction applied to ours.'
    ],
    numbers: [['Ours vs mass', 'R² 0.9999'], ['Benchtop vs mass', 'R² 0.9998'],
              ['Median paired difference', '3.8%, no transform'], ['Pro / Slim parts', 'US$371.78 / US$235.29']],
    careful: 'The reference instrument is a BioDrop at about NT$15,000, roughly US$470 — this is not a "cheap instrument beats a fifteen-thousand-dollar one" story and we should never tell it that way. The value is that it reads inside a sealed loop, continuously, without sampling. On silica the Pro sits a constant 0.12 OD below the benchtop with a slope of 1.001.'
  }
},

{
  n: 14, time: '7:32', secs: 42, speaker: 'Speaker 4', node: 4,
  title: 'The reference beam flagged the failing lamp <b>26.7 hours</b> before the OD channel died',
  nav: 'Knowing when not to believe the instrument',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">The reference beam flagged the failing
  lamp <b>26.7 hours</b> before the OD channel died</h2></div>
<div class="s-body s15">
  <div class="col">
    ${FL('w-run434.svg', 'Optical density and the photometer reference channel over a 434-hour run, with the sensor alarm marked at 216.3 hours',
        444, '434 hours, 2,720 readings, no sample ever drawn. Top, optical density; bottom, the reference beam that never touches the culture', '', 1)}
  </div>
  <div class="col">
    <div class="st" style="--d:2">
      <p class="cap">Two axes, so a culture event and a broken instrument do not look alike</p>
      <table class="tbl tight">
        <tr><th>Window</th><th style="width:19%">Sensor axis</th><th style="width:19%">Process axis</th>
            <th style="width:30%">Reading</th></tr>
        <tr><td>120–160 h<br><span class="sm">OD falls 0.93 → 0.72</span></td>
            <td class="v">0%</td><td class="v">73%</td><td>Something happened to the <b>culture</b></td></tr>
        <tr class="hi"><td>220–240 h<br><span class="sm">reference steps 26.67 → 25.83 lx</span></td>
            <td class="v">100%</td><td class="v">0%</td><td>Something happened to the
              <b>instrument</b>, while OD still looked fine</td></tr>
        <tr><td>240–434 h</td><td class="v">100%</td><td class="v">35%</td>
            <td>Both unreliable — we stop reading growth here</td></tr>
      </table>
    </div>
    <p class="limit olive st" style="--d:3"><b>We first guessed contamination. We were wrong.</b>
      What failed was the light. The reference beam never passes through the culture, so when it
      moved, the fault could only be the instrument.</p>
    <p class="limit red st" style="--d:4"><b>And once it fooled us completely.</b> A bubble filled
      the cuvette for six minutes; every reading in the burst agreed with every other, and all of
      them were wrong — <b>0.79 OD reported against a true 3.18</b>, flagged good. So we added a
      gate that compares two estimators of the same burst. It caught <b>97%</b> of disturbed
      readings and rejected none of the clean ones.</p>
  </div>
</div>`,
  script: {
    lead: 'An instrument you cannot check is worse than no instrument, because you believe it.',
    body: [
      'Four hundred and thirty-four hours, two thousand seven hundred readings, not one sample taken out.',
      'Around day ten it went wrong, and we guessed contamination. We were wrong. What failed was the lamp — we know because of the reference beam, which never passes through the culture. Our alarm flagged it twenty-six point seven hours before the OD channel failed.',
      'And here is the one that fooled us completely. A bubble sat in the cuvette for six minutes, every reading in the burst agreed, and all of them were wrong. Agreement is not accuracy.'
    ],
    numbers: [['Run', '434 h, 2,720 readings'], ['Alarm at', '216.3 h'], ['OD channel failed', '243.0 h'],
              ['Warning', '26.7 h'], ['Worst undetected error', '0.79 reported vs 3.18 true']],
    careful: 'This run was on the photometer loop. Our engineering page says that loop had no membrane module fitted, so do not call it 434 hours of perfusion. Growth is read only to about 240 hours; after that the twin marks photometer and OD both unreliable. The downloadable app version 1.2.0 still defaults to the older one-sided estimator and predates both gates; the page says so.'
  }
},

{
  n: 15, time: '8:14', secs: 30, speaker: 'Speaker 4', node: 4,
  title: 'Three people outside the team built it from our guide, and every place they stuck was a bug in the guide',
  nav: 'Testing the documentation',
  stage: `
<div class="s-head"><h2 class="s-claim two st" style="--d:0">Three people outside the team built it
  from our guide, and <em>every place they stuck was a bug in the guide</em></h2></div>
<div class="s-body s16">
  <div class="col">
    <div class="quotes">
      <blockquote class="st" style="--d:1">
        <p>“The solder-side diagram is mirrored from the component side. I had to flip the board
          in my head.”</p>
        <cite>Wentao Zhong · experienced engineer</cite>
      </blockquote>
      <blockquote class="st" style="--d:2">
        <p>“Stage 6 assumes you know which way the sensor faces. I put it in backwards once.”</p>
        <cite>Raphael Tseng · Boy Scout, no lab background</cite>
      </blockquote>
      <blockquote class="st" style="--d:3">
        <p>“Once the board was done, I plugged everything in by following the guide, and a number
          came up in the app.”</p>
        <cite>Peter Chen · little engineering background</cite>
      </blockquote>
    </div>
    <p class="limit red st" style="--d:4"><b>Three builders is a small test, and it covered the
      Slim only.</b> The bioreactor and the light plate have not been built by anyone outside
      this team.</p>
  </div>
  <div class="col">
    <div class="st" style="--d:5">
      <p class="cap">What each sticking point changed in the guide</p>
      <ul class="ticks sm">
        <li><b>Solder-side pictures are now declared mirrored</b> — in both guides, not just the
          one that was complained about.</li>
        <li><b>Sensor orientation is checked before it is pressed in</b>, as a step.</li>
        <li><b>A warning that the board is the hardest soldering in the build</b>, so practise
          first.</li>
      </ul>
    </div>
    <div class="st" style="--d:6">
      <p class="cap">Published, with build files</p>
      <table class="tbl tight">
        <tr><td><b>Perfusion bioreactor</b></td><td>the full loop with the membrane module</td></tr>
        <tr><td><b>Pro photometer</b></td><td>in-line OD600, dual beam · US$371.78</td></tr>
        <tr><td><b>Slim photometer</b></td><td>fibre-split low-cost build · US$235.29</td></tr>
        <tr><td><b>Light plate apparatus</b></td><td>24 cultures, 6 light conditions · US$65.52</td></tr>
        <tr><td><b>Hydroponics float plate</b></td><td>print files</td></tr>
      </table>
    </div>
    <p class="limit olive st" style="--d:7">“For around $235 against a commercial
      spectrophotometer, <b>I'd build it</b>.” — Wentao Zhong, after building one.</p>
  </div>
</div>`,
  script: {
    lead: 'A guide you have only read yourself is not a guide, it is a diary.',
    body: [
      'So in October we handed the parts and the assembly guide to three people outside the team and watched them build the photometer without us.',
      'Every place they got stuck was a place the guide was wrong. The solder diagram was mirrored and never said so. One stage assumed you knew which way the sensor faced. Both are fixed.'
    ],
    numbers: [['Outside builders', '3'], ['Guides published', '5'], ['Build time, Slim', 'about 2 hours']],
    careful: 'Be precise that this covers the Slim photometer only. The reactor, the LPA and the hydroponics plate have build files published but no outside builder. The quoted price comparison is the builder’s own words, not our claim about what a spectrophotometer costs.'
  }
},

/* ═══════════════════════════ 5 · the plants ═══════════════════════════ */
{
  n: 16, time: '8:44', secs: 52, speaker: 'Speaker 5', node: 5,
  title: 'ACC deaminase applied before the salt held about <b>70%</b> more chlorophyll at 100 mM',
  nav: 'Does it help a plant?',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">ACC deaminase applied before the salt
  held about <b>70%</b> more chlorophyll at 100 mM</h2></div>
<div class="s-body s17">
  <div class="col">
    ${FL('p-accdsalt-plates', 'A grid of agar plates: rows 0, 75 and 100 mM NaCl, columns untreated, pre-, co- and post-treatment ACC deaminase',
        438, 'Rows 0 / 75 / 100 mM NaCl · columns untreated, pre-, co- and post-treatment. <i class="sp">Arabidopsis</i>, day 8. ND: the 100 mM post plate was excluded for mould', '', 1)}
  </div>
  <div class="col">
    ${C({type:'bars',max:2.2,ticks:4,unit:'chlorophyll a+b, mg g⁻¹ · 100 mM NaCl',
        data:[{l:'Untreated',v:1.03,c:'#b8b9b0'},{l:'Pre-treated',v:1.74,c:'#4f6b24',tag:'1.74'}]}, 282, 2)}
    <p class="cap-s st" style="--d:3">Nine measured seedlings, mean ± SEM, ****P &lt; 0.0001 —
      but they share <b>one plate</b>, so the plate is the unit and there is one of it.
      <b>The spread quoted is between seedlings, and it understates the spread between plates,
      which we did not measure.</b></p>
    <div class="st" style="--d:4">
      <p class="cap">Timing is the variable, not dose</p>
      <p class="note-s">Fresh weight under pre-treatment <i>rose</i> with salt — 0.122, 0.164,
        0.225 g at 0, 75 and 100 mM — while co-treatment fell the other way, 0.220 to 0.114 g.
        Co-treatment gave no rescue at all.</p>
    </div>
    <p class="limit red st" style="--d:5"><b>One set, and the n is the honest problem.</b> There
      was contamination on these plates and one group was excluded. The fix is specific and it is
      on our future-work list: <b>at least three independently poured plates per condition</b>,
      positions randomised, extraction blind to the arm. What survives replication as it stands is
      the <b>monotone salt ladder</b>, not any single treated-against-untreated comparison.</p>
  </div>
</div>`,
  script: {
    lead: 'So the cells stay in and a working enzyme comes out. Does any of it help a plant?',
    body: [
      'First we had to make the stress readable. Root length runs from seventy-five millimetres at no salt to one and a third at a hundred and fifty, so a hundred millimolar hurts <i class="sp">Arabidopsis</i> without killing it.',
      'ACC deaminase sprayed the day before the salt held about one point seven four milligrams of chlorophyll per gram, against one point zero three untreated. Roughly seventy percent more.',
      'What separates the arms is timing, not dose. Applied at the same moment as the stress, it does nothing at all.',
      'And the n is the honest problem. Nine seedlings, but they share one plate, so the plate is the unit and there is one of it.'
    ],
    numbers: [['Pre-treated, 100 mM', '~1.74 mg g⁻¹'], ['Untreated, 100 mM', '~1.03 mg g⁻¹'],
              ['n', '9 per condition'], ['Significance', '****P < 0.0001'],
              ['Salt ladder, root', '74.95 → 1.36 mm, 0 → 150 mM']],
    careful: 'ACC deaminase was recommended to us for drought and heat, not salinity — this salt result is outside the advice we were given, which is worth saying. Only Arabidopsis Col-0 was used, nowhere else. LEA14 has a salt result at 75 mM only and no heat data at all; BoPEP4 gives a slight rescue at 1/40 in hydroponics. Do not claim a three-protectant grid: it is mostly empty and the page says so.'
  }
},

{
  n: 17, time: '9:36', secs: 42, speaker: 'Speaker 5', node: 5,
  title: 'In soil under heat, treating before the stress beat treating after it — in both trials',
  nav: 'The experiment that set the system clock',
  stage: `
<div class="s-head"><h2 class="s-claim two st" style="--d:0">In soil under heat, treating
  <em>before</em> the stress beat treating <span class="bad">after</span> it — in both trials</h2></div>
<div class="s-body s18">
  <div class="col">
    ${FL('p-soilheat-pots', 'Soil pots: the unstressed control, then heat-stressed control, pre-, co- and post-treatment for two trials',
        400, 'Unstressed control at left, then heat / pre / co / post for trial 1 (top) and trial 2 (bottom). Post-treatment bolted hardest and carries the most anthocyanin', '', 1)}
    <p class="limit olive st" style="--d:2"><b>This is the experiment that set the system clock.</b>
      It is why ReLEAF predicts instead of reacting — and why the whole machine exists.</p>
  </div>
  <div class="col">
    ${C({type:'grouped',max:1.2,ticks:4,unit:'chlorophyll a+b, mg/L · unnormalised',
        legend:[{l:'Trial 1',c:'#4f6b24'},{l:'Trial 2',c:'#9fae6e'}],
        groups:[{l:'Pre-treated',v:[1.05,0.89]},{l:'Co-treated',v:[0.91,0.63]},
                {l:'Post-treated',v:[0.75,0.355]}]}, 318, 3)}
    <p class="cap-s st" style="--d:4">37 °C for 5 days, then 5 days of recovery. Both trials rank
      the timings the same way, and the team reports <b>both post-treatment arms came in below the
      heat-stressed control</b> on chlorophyll and on fresh weight.</p>
    <p class="limit red st" style="--d:5"><b>Three things we will say before you ask.</b> Fresh
      weight here is <b>one pot per condition</b>, so each bar is a single measurement. There is no
      n and no significance test on this figure. And on <b>agar</b>, the same protectant under the
      same heat ranks the timings the other way round — our two platforms do not yet agree, and
      more replicates are what would settle it.</p>
  </div>
</div>`,
  script: {
    lead: 'And then the experiment that changed the project.',
    body: [
      'Same plants, same heat, same protectant. The only variable is when you apply it. Applied the day before, chlorophyll is highest in both trials. Applied the day after, it is lowest — and both post-treatment arms came in below doing nothing at all.',
      'If you wait until you can see damage, you may be making it worse. And waiting until you can see damage is exactly what Ms. Chen told us she does.',
      'Now the honest part. One pot per condition, no n, no statistical test. And on agar the same protectant ranks the timings the other way round.'
    ],
    numbers: [['Pre-treated', '1.05 / 0.89 mg/L'], ['Co-treated', '0.91 / 0.63'],
              ['Post-treated', '0.75 / 0.355'], ['Condition', '37 °C, 5 d + 5 d recovery']],
    careful: 'Do not state a number for the heat-stressed control: our page asserts post-treatment fell below it but never prints its value. Do not generalise "late treatment is a harm" — it is a single-platform, one-pot-per-arm observation, and the agar trials rank post-treatment best. The defensible claim is the ranking within this soil experiment, plus the team’s own statement that the platforms do not agree.'
  }
},

{
  n: 18, time: '10:18', secs: 60, speaker: 'Speaker 5', node: 5,
  title: 'A forecast reaches three days ahead; a hectare of protectant takes <b>5.4 days</b> to make',
  nav: 'Why the system has to move first',
  stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">A forecast reaches three days ahead;
  a hectare of protectant takes <b>5.4 days</b> to make</h2></div>
<div class="s-body s19">
  <div class="col">
    <div class="arith st" style="--d:1">
      <div><span class="big ink">3</span><p class="big-l"><b>days</b> — how far a weather
        forecast usefully reaches</p></div>
      <div class="vs">vs</div>
      <div><span class="big">5.4</span><p class="big-l"><b>days</b> — ten 20 L reactors making
        one hectare's application</p></div>
    </div>
    <p class="limit olive st" style="--d:2"><b>So the forecast cannot start the batch.</b> If the
      protectant has to arrive a day before the stress, production starts <b>6.4 days</b> ahead.
      The reactor runs through the season and the forecast decides when the stock is spent — which
      is a different machine from the one we set out to build.</p>
    ${FL('h-application', 'Four panels: predictive sensing, the bioreactor activating and diluting, application to the field, and the farmer consulting the app',
        236, 'What the farmer actually does: predict, produce, dilute into the irrigation line, confirm on the phone', '', 3)}
  </div>
  <div class="col">
    <div class="st" style="--d:4">
      <p class="cap">We wrote the prediction down before the run, then scored it</p>
      <table class="tbl tight">
        <tr><th>Registered 1 October</th><th style="width:26%">Predicted</th>
            <th style="width:22%">Run 6</th><th style="width:16%"></th></tr>
        <tr class="hi"><td><b>Specific growth rate</b><br><span class="sm">90% interval
          0.2705–0.3300 h⁻¹</span></td><td class="v">0.2986 h⁻¹</td>
          <td class="v">0.286 ± 0.010</td><td><span class="tag">inside</span></td></tr>
        <tr><td>Curve shape, NRMSE &lt; 15%</td><td class="v">logistic</td>
          <td>missed the first 7 h by 30%</td><td><span class="tag ink">not scored</span></td></tr>
        <tr><td>Time to OD 0.5</td><td class="v">6.1 h</td><td class="v">3.6 h</td>
          <td><span class="tag ink">not scored</span></td></tr>
      </table>
    </div>
    <p class="limit st" style="--d:5"><b>Only the rate scored, and we say which.</b> The light-plate
      prior predicted each held-out light arm's 24-hour density to within <b>7%</b>; without it the
      error was 29 to 68%. The rate transferred from plate to reactor. <b>The ceiling did not.</b></p>
    <p class="limit red st" style="--d:6"><b>Two links in this chain have never been
      demonstrated.</b> No forecast has driven a light that reached a culture — the models were
      scored on recorded runs and the green strip was never fitted inside the reactor. And
      <b>every plant trial applied the permeate by hand</b>, so the irrigation line is a design,
      not a result. Until both close, this is a digital shadow, not a twin, and our page says so.</p>
  </div>
</div>`,
  script: {
    lead: 'So the protectant has to be there before the stress is. That sets a clock, and the clock does not work.',
    body: [
      'A forecast reaches about three days. Ten twenty-litre reactors need five point four days to make one hectare\'s application. So the machine cannot react to a forecast — it has to produce through the season, and the forecast decides when the stock is spent.',
      'Which puts weight on predicting growth. On the first of October, before any run of the production strain, we registered the prediction: a growth rate of nought point two nine eight six per hour, with a ninety percent interval. Run six came in at nought point two eight six. Inside the interval.',
      'And the honest position: a person still makes every decision, and the green light is not yet fitted to the reactor. Until that loop closes it is a digital shadow, not a twin.'
    ],
    numbers: [['Forecast horizon', '~3 days'], ['One hectare', '5.4 days of production'],
              ['Start production', '6.4 days ahead'], ['Registered rate', '0.2986 h⁻¹ (0.2705–0.3300)'],
              ['Observed, run 6', '0.286 ± 0.010 h⁻¹']],
    careful: 'Be exact that only the growth rate was scored. The other two endpoints were not, and the reasons are on the wiki. Over the fit window a straight line fits about as well as an exponential, so the rate comes from a stretch where the two shapes cannot be told apart — concede that if pressed. The leaf sensor reads 1.2 to 1.9 °C warm on a bench and has never been on a plant.'
  }
},

/* ═══════════════════════════ 6 · the people ═══════════════════════════ */
{
  n: 19, time: '11:18', secs: 48, speaker: 'Speaker 6', node: 6,
  title: 'The kill switch, the crop and the sprayer were all changed by people who are not on this team',
  nav: 'What the stakeholders changed',
  stage: `
<div class="s-head"><h2 class="s-claim two st" style="--d:0">The kill switch, the crop and the
  sprayer were all changed by <em>people who are not on this team</em></h2></div>
<div class="s-body s20">
  <div class="col">
    <table class="tbl st" style="--d:1">
      <tr><th style="width:27%">What we were going to do</th><th style="width:22%">Who said otherwise</th>
          <th>What we did instead</th></tr>
      <tr class="hi"><td><b>Release engineered <i class="sp">B. subtilis</i> into the soil</b></td>
          <td>Prof. Chen Wen-Liang<br><span class="sm">AgriTalk · 10 Apr</span></td>
          <td>Built a sealed bioreactor instead. <b>“Design the hardware as the printer and the
            <i class="sp">B. subtilis</i> as the ink.”</b> This is the day the project changed shape.</td></tr>
      <tr><td><b>Build a genetic kill switch</b></td>
          <td>Dr. Jennifer Brophy<br><span class="sm">Stanford · 18 Apr</span></td>
          <td>Physical containment as the primary mechanism — a switch can mutate or fail.
            Dr. Lin Wei-Yi had said the same five weeks earlier.</td></tr>
      <tr><td><b>Target rice</b></td>
          <td>Director Wu Tzu-Hsien<br><span class="sm">Ministry of Agriculture · 12 Oct</span></td>
          <td>Cherry tomato and strawberry — Taiwan is overproducing rice. She also named the
            costs we had left out: factory, labour, cultivation, waste.</td></tr>
      <tr><td><b>Let farmers spray by hand</b></td>
          <td>Mr. Riddler Lu<br><span class="sm">Agriweather · 13 Oct</span></td>
          <td><b>Reversed a decision we had already made</b>: a mixing chamber that doses into the
            existing irrigation line.</td></tr>
      <tr><td><b>Give the plant as much protectant as we can make</b></td>
          <td>Ms. Chen Hui-Wen, and Dr. Li Hsu-Ying<br><span class="sm">natural farmers · Jul, Sep</span></td>
          <td>Release only on a stress index, so a crop is carried through an episode and left to
            its own resilience between them.</td></tr>
    </table>
  </div>
  <div class="col">
    ${FL('h-chensoil', 'Ms. Chen crouched in a vegetable bed beside a basket with two students kneeling to look at the soil',
        262, 'Ms. Chen Hui-Wen, Tamsui, 21 July', 'ph', 2)}
    <blockquote class="pull st" style="--d:3">
      <p>“Sometimes, giving too much is not necessarily beneficial for a living organism; instead,
        it can take away its ability to survive and thrive on its own.”</p>
      <cite>Ms. Chen Hui-Wen · natural farmer</cite>
    </blockquote>
    <p class="limit olive st" style="--d:4"><b>31 stakeholders over nine months, and five of them
      we went back to twice</b> — with prototypes, wet-lab data and the problems we had not
      solved. The limitation one of them found became the reason we called the next.</p>
    <p class="limit st" style="--d:5"><b>Counting honestly:</b> 31 are mapped, about 24 carry a
      full dated record on the wiki.</p>
  </div>
</div>`,
  script: {
    lead: 'None of this is ours alone. Over nine months we worked with thirty-one stakeholders, and five of them we went back to twice.',
    body: [
      'We were going to release engineered bacteria into soil. Professor Chen told us to design the hardware as the printer and the bacteria as the ink, and the project became a sealed reactor that afternoon.',
      'We were going to build a kill switch. Dr. Brophy told us a biological switch can mutate or fail. That is why containment is a membrane.',
      'We were going to target rice, until Director Wu pointed out that Taiwan already overproduces it.',
      'We came in thinking the engineering was ours and the interviews were a deliverable. It was the other way round.'
    ],
    numbers: [['Stakeholders', '31 mapped, ~24 with dated records'], ['Period', 'nine months, Feb–Oct'],
              ['Revisited experts', '5'], ['Outreach', '400+ people, 200+ public']],
    careful: 'Mr. Chen Ke-Wei told us in September that strawberries may need little intervention; Director Wu steered us to strawberry in October on commercial grounds. Those two have not been reconciled and the tomato field trial is what settles it. The abstract says seven months and the expert section says nine; nine is right against the dated records.'
  }
},

{
  n: 20, time: '12:06', secs: 56, speaker: 'Speaker 6', node: 6,
  title: 'Most of the farmers we interviewed are organic, and organic rules would bar our product',
  nav: 'The gap we found in our own vision',
  stage: `
<div class="s-head"><h2 class="s-claim two st" style="--d:0">Most of the farmers we interviewed
  are organic, and <span class="bad">organic rules would bar our product</span></h2></div>
<div class="s-body s21">
  <div class="col">
    ${FL('h-forumfarmer', 'An older farmer in a white shirt speaking into a microphone at the public forum',
        262, 'Our public forum, 5 September. Over 50 participants, and the farmers asked the question we had not', 'ph', 1)}
    <p class="limit red st" style="--d:2"><b>Organic standards regulate the method, not only the
      composition.</b> So taking the living bacteria out does not rescue eligibility — the protein
      was still made by a GMO. Taiwan: Organic Agriculture Promotion Act, Articles 3 and 15. The
      same barrier holds across the EU, the US, Thailand, the Philippines, Vietnam, Indonesia and
      Malaysia.</p>
    <blockquote class="pull st" style="--d:3">
      <p>“This exposed a gap between our original vision of helping farmers and the potential
        stakeholders that could adopt our system. A technical solution is not automatically an
        appropriate one for every region.”</p>
      <cite>our own wiki, Human Practices</cite>
    </blockquote>
  </div>
  <div class="col">
    <div class="st" style="--d:4">
      <p class="cap">So we went and found the door that does open</p>
      <ul class="ticks sm">
        <li><b>Three regulatory objects, not one.</b> The reactor is equipment. The culture is a
          contained GMM. <b>The permeate is the product</b> — cell-free, so it is classified by
          composition and claim, not by how it was made.</li>
        <li><b>Taiwan recognises a biostimulant category</b> — 植物生長輔助劑類, under the
          Fertilizer Management Act. APHIA told us the review takes <b>about 30 days once the file
          is complete</b>.</li>
        <li><b>Keeping the organism in the machine</b> gives the strain and the product two
          independent regulatory paths.</li>
      </ul>
    </div>
    <p class="limit red st" style="--d:5"><b>And the two things we have not got.</b> We did not
      find a Taiwan contained-use framework that clearly covers this, so we treat the pathway as
      <b>unresolved</b> and will not call the system certified. And the Fertilizer Management Act
      bars diluting a registered fertiliser for sale — which is what on-farm production is. If
      that exemption does not reach us, <b>the fallback is central production and permeate
      delivery</b>, and that is not the project we just described to you.</p>
    <p class="limit olive st" style="--d:6"><b>A potential regulatory pathway is not an
      approval.</b> That sentence is on our wiki because we needed to read it ourselves.</p>
  </div>
</div>`,
  script: {
    lead: 'And then the finding we did not want.',
    body: [
      'We built this for smallholders. We interviewed more than thirty at a farmers\' market and ran our forum at an organic market, and most of the farmers open to us are organic growers.',
      'Then we read the regulations properly. Organic standards regulate the method of manufacture, not only the composition. So the fact that nothing living reaches the field does not help — the protein was still made by a GMO. That holds in Taiwan and in seven other jurisdictions.',
      'The people we designed this for may not be allowed to use it. That sentence is on our wiki.',
      'We did find the door that does open, a biostimulant category under fertiliser law. But a potential regulatory pathway is not an approval. We wrote that down because we needed to read it ourselves.'
    ],
    numbers: [['Jurisdictions checked', '8'], ['Taiwan instrument', 'Organic Agriculture Promotion Act, Arts. 3 & 15'],
              ['Target category', '植物生長輔助劑類 · biostimulant'], ['APHIA review', '~30 days once filed']],
    careful: 'Our entrepreneurship page asserts a Taiwan contained-use pathway exists; our laws page says it could not find one and treats it as unresolved. The laws page is the later and more careful position and it is the one to use — the entrepreneurship sentence is being corrected. Never say "certified for contained use".'
  }
},

{
  n: 21, time: '13:02', secs: 44, speaker: 'Speaker 6', node: 0, bleed: true,
  title: 'Every farmer, a biomanufacturer',
  nav: 'Close',
  stage: `
<div class="bleed">
  <img src="img/s-close.webp" alt="Taiwan with every farmed parcel lit green">
  <div class="scrim" style="background:linear-gradient(90deg,rgba(6,12,6,.55) 0%,rgba(6,12,6,.25) 52%,rgba(6,12,6,0) 100%)"></div>
  <div class="over">
    <h2 class="wordmark st" style="--d:0;font-size:92px">Every farmer,<br><em>a biomanufacturer.</em></h2>
    <p class="closeline st" style="--d:1">The circuit is open and the output module is a slot you
      can drop your own coding sequence into. Every build guide is published, and three people
      outside our team have already built from one.</p>
    <p class="closeline st" style="--d:2">So if there is something you want delivered to
      a plant, take it.</p>
    <p class="team st" style="--d:3">GEMS Taiwan · 2026</p>
  </div>
</div>`,
  script: {
    lead: 'We started with one woman in Yunlin, waiting for her plants to tell her that something had already gone wrong. We would like her to know first.',
    body: [
      'There is a long way to go. No field trial, no dose–response on a crop, a regulatory pathway we have not had confirmed, and two platforms that disagree about when to treat.',
      'But the circuit is open, the output module is a slot you can drop your own protein into, every build guide is published, and three people who have never met us have already built one.',
      'So if there is something you want delivered to a plant, take it. Thank you.'
    ],
    numbers: [],
    careful: 'The team walks on here. If the first question is "what is next", the answer is the tomato field trial, Oct 2027 to Jun 2028, and a repeat of the plant timing experiment with replicates.'
  }
},
];

/* ============================================================
   The node strip and the stage assembler
   ============================================================ */
const mmss = s => Math.floor(s / 60) + ':' + String(Math.round(s) % 60).padStart(2, '0');

function planned(slides) {
  const out = [];
  let t = 0;
  for (const s of slides) { out.push(t); t += s.secs; }
  out.total = t;
  return out;
}

function nodeBar(slides, i) {
  const s = slides[i];
  const at = s.node === undefined ? 0 : s.node;
  const on = Array.isArray(at) ? at : (at ? [at] : []);
  const furthest = Math.max(0, ...slides.slice(0, i + 1).map(x => {
    const a = x.node === undefined ? 0 : x.node;
    return Array.isArray(a) ? Math.max(...a) : a;
  }));

  const nodes = NODES.map((n, k) => {
    const idx = k + 1;
    const now = on.includes(idx);
    const done = !now && idx <= furthest;
    const span = now && on.length > 1 && idx < Math.max(...on);
    return `<li class="nd${now ? ' now' : ''}${done ? ' done' : ''}${span ? ' span' : ''}">` +
      `<span class="ndi"><img src="img/${n.img}.webp" alt=""></span>` +
      `<span class="ndl">${n.label}${now && s.sub && idx === on[0] ? `<em>${s.sub}</em>` : ''}</span></li>`;
  }).join('');

  const p = planned(slides);
  const segs = slides.map((x, k) =>
    `<i class="${k < i ? 'past' : k === i ? 'at' : ''}" style="flex:${x.secs}"></i>`).join('');

  return `<div class="nodebar" data-slide="${i}" data-at="${p[i]}" data-total="${p.total}">
    <ul class="nodes">${nodes}</ul>
    <div class="prog">
      <div class="pr">${segs}<span class="caret"></span></div>
      <span class="pt">by <b>${mmss(p[i] + s.secs)}</b></span>
    </div>
  </div>`;
}

function stageHTML(slides, i) {
  return slides[i].bleed ? slides[i].stage : nodeBar(slides, i) + slides[i].stage;
}

if (typeof module !== 'undefined') module.exports = { SLIDES, NODES, stageHTML };
