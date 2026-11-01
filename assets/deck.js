/* ReLEAF — Finalist Presentation. One source of truth for all three views.

   Every slide is authored HTML on a 1600x900 canvas. Charts are drawn from the
   numbers by assets/charts.js, never pasted in as pictures. Photographs are
   used only where the subject is genuinely photographic.

   Per slide:
     id    stable anchor
     sp    speaker 1-8
     secs  budgeted seconds, derived from the word count at 150 wpm
     cls   extra classes on the slide element ('dark', 'bleed', 'title')
     body  the slide itself
     say   the spoken script
     note  backup for the 10-minute judges' Q&A, never shown on stage
     cue   animate.html only: ids of elements to bring in a beat late
*/

const SPEAKERS = [
  { n: 1, name: 'Speaker 1', part: 'The wait' },
  { n: 2, name: 'Speaker 2', part: 'Why help arrives late' },
  { n: 3, name: 'Speaker 3', part: 'The switch' },
  { n: 4, name: 'Speaker 4', part: 'Proving the switch' },
  { n: 5, name: 'Speaker 5', part: 'Cells in, protectant out' },
  { n: 6, name: 'Speaker 6', part: 'Built to be rebuilt' },
  { n: 7, name: 'Speaker 7', part: 'The plants' },
  { n: 8, name: 'Speaker 8', part: 'Before the stress' },
];

const head = (eyebrow, h, sub) =>
  `${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
   <h2 class="h">${h}</h2>
   ${sub ? `<p class="sub">${sub}</p>` : ''}`;

const SLIDES = [

/* ══════════ 1 · The wait ══════════ */
{
  id: 'title', sp: 1, secs: 14, title: 'Title', cls: 'title',
  body: `
    <p class="eyebrow" style="color:var(--bright)">iGEM 2026 · Grand Jamboree</p>
    <h1 class="wordmark">Re<em>LEAF</em></h1>
    <p class="one">A bioreactor at the edge of the field that makes a plant
      protectant on the day the crop needs it — and keeps the bacteria inside.</p>
    <p class="team">GEMS Taiwan</p>`,
  say: `Good afternoon. We are GEMS Taiwan, and this is ReLEAF.`,
  note: '',
},
{
  id: 'chen', sp: 1, secs: 34, title: 'Ms. Chen', cls: 'bleed',
  body: `
    <img src="img/s-chen.webp" alt="Ms. Chen in her farm shed in Yunlin">
    <div class="over">
      <p class="eyebrow">Yunlin, Taiwan</p>
      <p class="quote">“It’s difficult to understand plants, because they can’t
        communicate with us the way people do.”</p>
      <p class="who">Ms. Chen · vegetable grower</p>
    </div>`,
  say: `This is Ms. Chen. We asked her a simple question: how do you know when your plants are in trouble? She told us she waits. She waits for the pests. She waits for the disease. And once she can see what went wrong, she adjusts — next season. That worked for a long time, because the weather used to repeat itself. It doesn't anymore. The season she is learning from is not the season that is coming.`,
  note: 'One of the farmers interviewed during the nine-month stakeholder programme.',
},
{
  id: 'scale', sp: 1, secs: 36, title: 'Small farms, sitting on the most volatile ground',
  body: `
    ${head('Who this is for', 'Small farms, sitting on the most volatile ground.')}
    <div class="body cols c-58">
      <div>
        <div class="stat" style="margin-bottom:34px">
          <div class="n leaf">99.2%</div>
          <div class="l">of Taiwan’s farmers work small-scale farms</div>
        </div>
        <div class="stat">
          <div class="n leaf">85.3%</div>
          <div class="l">of all agricultural land is in their hands</div>
        </div>
      </div>
      <figure class="fig cover">
        <img src="img/s-map.webp" alt="Taiwan farmland parcels overlaid with the climate volatility index">
        <figcaption>Farmland parcels × climate volatility. The highest-volatility band runs
          down the west coast — exactly where the small farms are.</figcaption>
      </figure>
    </div>
    <p class="caveat" id="x1">Run the same projection worldwide and the squeeze repeats:
      hotter summer peaks and falling agro-climatic yield potential, on every continent
      that grows food.</p>`,
  say: `And she is not an edge case. She is the case. 99.2% of Taiwan's farmers work small-scale farms, holding 85.3% of our agricultural land. We laid every farmland parcel over a climate volatility index, and the small farms cluster precisely where the weather is hardest to predict. The people with the least margin for error are farming the ground that makes the most. And it is not only Taiwan — run the projection forward anywhere that grows food, and you get the same squeeze.`,
  note: 'Volatility index from our own geospatial analysis; the global panel is FAO GAEZ agro-climatic potential yield under SSP5-8.5.',
  cue: ['x1'],
},

/* ══════════ 2 · Why help arrives late ══════════ */
{
  id: 'coldchain', sp: 2, secs: 48, title: 'Biostimulants work. Getting them there is the problem',
  body: `
    ${head('The existing answer', 'Biostimulants work. Getting them there is the problem.')}
    <div class="body">
      <div class="flow">
        <div class="step"><div class="k">1</div><h4>Central factory</h4>
          <p>Active proteins and peptides, produced at scale, a long way from the farm.</p></div>
        <div class="step"><div class="k">2</div><h4>Cold storage</h4>
          <p>A protein loses activity warm, so it is chilled from the moment it is made.</p></div>
        <div class="step"><div class="k">3</div><h4>Refrigerated transport</h4>
          <p>Every leg of the journey has to hold the chain, down to the last road.</p></div>
        <div class="step off"><div class="k">4</div><h4>The farm</h4>
          <p>Expensive, slow, and last to arrive at the smallest buyers.</p></div>
      </div>
      <div style="margin-top:36px;max-width:1140px">
        <div class="stack">
          <div style="width:43%;background:#1E8A4F">43% cold storage</div>
          <div style="width:34%;background:#4FA87A">34% transport</div>
          <div style="width:23%;background:#B9C9C1;color:#10201a">23% everything else</div>
        </div>
        <div class="stackkey"><span><b>77%</b> of the logistics bill is the cold chain alone.
          The molecule was never the bottleneck — the distance was.</span></div>
      </div>
    </div>`,
  say: `The honest answer is that good science already exists. Biostimulants — active proteins and peptides that help a crop hold on through heat or salt. They work. We did not need to invent them. The problem is everything after they are made. A protein has to stay cold from the factory, through the warehouse, onto the truck, down the last road to the farm. In comparable cold-chain products, storage and transport are about three quarters of the logistics bill. So the help exists, but it is expensive, it is slow, and it arrives last at the farms with the thinnest margins. The molecule was never the bottleneck. The distance was.`,
  note: 'The breakdown is from a published vaccine cold-chain costing study, used as the closest analogue; the wiki says so.',
},
{
  id: 'system', sp: 2, secs: 40, title: 'So we ship the factory, not the protein',
  body: `
    ${head('ReLEAF', 'So we ship the factory, not the protein.')}
    <div class="body">
      <div class="flow">
        <div class="step"><div class="k">1</div><h4>Predict</h4>
          <p>Field sensors and the forecast give a stress index for that parcel.</p></div>
        <div class="step"><div class="k">2</div><h4>Decide</h4>
          <p>A digital twin checks a batch can be ready in time. A person approves it.</p></div>
        <div class="step"><div class="k">3</div><h4>Switch on</h4>
          <p>Green light induces <em>B. subtilis</em> to make and secrete the protectant.</p></div>
        <div class="step"><div class="k">4</div><h4>Separate</h4>
          <p>A 0.2 µm membrane lets the protein out and holds every cell in.</p></div>
        <div class="step"><div class="k">5</div><h4>Apply</h4>
          <p>Fresh protectant reaches the crop before the stress does.</p></div>
      </div>
      <div class="cols c-58 vmid" style="margin-top:36px">
        <figure class="fig">
          <img src="img/s-besidecrop.webp" alt="The ReLEAF unit standing at the edge of a field at dawn">
        </figure>
        <ul class="ticks">
          <li><b>No central factory.</b> The protectant is made metres from the crop.</li>
          <li><b>No cold chain.</b> It is used within hours, so it never needs chilling.</li>
          <li><b>Nothing to order.</b> The farm holds a sealed cartridge, not a shipment.</li>
        </ul>
      </div>
    </div>`,
  say: `So we stopped trying to ship the protein, and started shipping the thing that makes it. Here is the whole system, and everything after this slide is one of these five boxes. Sensors and the forecast predict the stress. A twin decides whether a batch can be ready in time, and a person approves it. Green light switches the bacteria on. A membrane lets the protectant out and keeps the cells in. And it reaches the crop before the stress does. No central factory, no cold chain, nothing to wait for in the post.`,
  note: '',
},

/* ══════════ 3 · The switch ══════════ */
{
  id: 'circuit', sp: 3, secs: 54, title: 'Four modules, and the only input is a colour', cls: 'dark',
  body: `
    ${head('ccaS/ccaR, from cyanobacteria', 'Four modules, and the only input is a colour.')}
    <div class="body">
      <div class="chain">
        <div class="m"><div class="mi">Module 1</div><div class="mn">PCB synthesis</div>
          <div class="md"><i>ho1</i>–<i>pcyA</i> turns the cell’s own heme into the
          phycocyanobilin chromophore.</div></div>
        <div class="arw">→</div>
        <div class="m"><div class="mi">Module 2</div><div class="mn">Light sensing</div>
          <div class="md">PCB clips onto CcaS, a sensor kinase sitting in the membrane.</div></div>
        <div class="arw">→</div>
        <div class="m"><div class="mi">Module 3</div><div class="mn">Transduction</div>
          <div class="md">CcaS passes a phosphate to the response regulator CcaR.</div></div>
        <div class="arw">→</div>
        <div class="m"><div class="mi">Module 4</div><div class="mn">Output</div>
          <div class="md">CcaR fires the P<sub>cpcG2</sub> promoter, transcribing the protectant.</div></div>
      </div>
      <div class="states" id="x1">
        <div class="state red">
          <div class="lbl">Under red light · no stress predicted</div>
          <p>CcaS stays unphosphorylated, so CcaR never activates the output promoter.</p>
          <div class="out">Circuit off</div>
        </div>
        <div class="state green">
          <div class="lbl">Under green light · stress predicted</div>
          <p>CcaS autophosphorylates and changes conformation; CcaR fires the promoter.</p>
          <div class="out">Protectant secreted</div>
        </div>
      </div>
    </div>`,
  say: `The switch itself is borrowed — the ccaS/ccaR system from cyanobacteria, building on Castillo-Hair and colleagues, who got these sensors working in a Gram-positive host. It runs in four modules. The cell makes the sensor's pigment out of its own heme. That pigment clips onto CcaS in the membrane. Under red, CcaS stays quiet and the circuit is off. Under green, it changes shape, hands a phosphate to CcaR, and CcaR fires the output promoter. Our chassis is Bacillus subtilis WB800, which is protease-deficient, so it does not eat what it secretes. And notice what is missing: there is no chemical. The published versions run on IPTG and xylose, which are fine in a lab. Nobody is pipetting IPTG into a bucket in a rice field.`,
  note: 'Castillo-Hair et al. 2019. We replaced their chemically inducible promoters with constitutive ones so the only input is light. WB800 came from Prof. Huang at NCHU.',
  cue: ['x1'],
},
{
  id: 'lpa', sp: 3, secs: 30, title: 'To test a light switch, you have to control the light',
  body: `
    ${head('Testing it', 'To test a light switch, you have to control the light.')}
    <div class="body cols c-58 vmid">
      <figure class="fig">
        <img src="img/s-lpa.webp" alt="The light plate apparatus: an LED array under culture tubes, some green, some red">
        <figcaption>Light plate apparatus — an addressable LED array under standard
          culture tubes. Build files published.</figcaption>
      </figure>
      <ul class="ticks">
        <li><b>One variable.</b> Same medium, same inoculum, same shaker, same hands.
          Only the colour over each tube differs.</li>
        <li><b>Both states at once.</b> Green and red cultures run side by side in the
          same incubator, so nothing is compared across days.</li>
        <li><b>Two timepoints.</b> Supernatant sampled at 13 and 16 hours, then put
          through three independent assays.</li>
      </ul>
    </div>`,
  say: `To test a light switch you need identical cultures under different light, at the same time, in the same incubator. There is no catalogue number for that, so we built one: an addressable LED array under standard culture tubes. Same medium, same shaker, same hands. The only variable in the experiment is colour. We sampled the supernatant at thirteen and sixteen hours, and put it through three different assays.`,
  note: 'The LPA is the cheapest of our published hardware guides.',
},

/* ══════════ 4 · Proving the switch ══════════ */
{
  id: 'evidence', sp: 4, secs: 52, title: 'Is there more protectant under green — and does it work?',
  body: `
    ${head('Three assays, one supernatant', 'Is there more protectant under green — and does it work?')}
    <div class="body cols c-75">
      <div>
        <div data-chart='{"type":"grouped","max":20,"ticks":4,"unit":"activity (a.u.)",
          "legend":[{"l":"Green light","c":"#1E8A4F"},{"l":"Red light","c":"#C0392B"}],
          "groups":[{"l":"13 hours","v":[10.4,0.7],"e":[5.6,2.4]},
                    {"l":"16 hours","v":[1.05,3.7],"e":[0,0]}]}'></div>
        <p class="cap" style="margin-top:2px">DNPH assay — ACC deaminase <em>activity</em> in the
          secreted fraction, not merely its presence. Error bars are the range of n = 2.</p>
      </div>
      <div>
        <div class="card" style="margin-bottom:16px">
          <h4>Western blot · band intensity</h4>
          <p style="font-variant-numeric:tabular-nums;font-size:20px;margin-top:8px">
            13 h &nbsp;green <b style="color:var(--leaf)">1.00</b> &nbsp;·&nbsp; red 0.75<br>
            16 h &nbsp;green <b style="color:var(--leaf)">1.06</b> &nbsp;·&nbsp; red 0.75</p>
          <p style="margin-top:9px">More secreted protectant under green at both timepoints.
            This is the consistent signal.</p>
        </div>
        <div class="card">
          <h4>ELISA · concentration</h4>
          <p style="font-variant-numeric:tabular-nums;font-size:20px;margin-top:8px">
            13 h &nbsp;green 6.3 &nbsp;·&nbsp; red 5.7 µg/mL<br>
            16 h &nbsp;green 6.1 &nbsp;·&nbsp; red 5.9 µg/mL</p>
          <p style="margin-top:9px">Total amount is close to equal — so colour changes how much
            <em>working</em> enzyme comes out more than how much protein does.</p>
        </div>
      </div>
    </div>
    <p class="caveat" id="x1"><b>What this does not show.</b> n = 2, so there is no statistic, and
      the 16-hour activity point reverses. The claim we make is the narrow one: the circuit answers
      to colour, and what it secretes is a working enzyme.</p>`,
  say: `Here is everything we got, including the part that does not fit. The blot is the consistent one: more secreted protectant under green than red, at thirteen hours and again at sixteen. ELISA says the total amount is nearly the same either way. And because our first protectant is an enzyme, we could ask the better question — does it work? At thirteen hours, activity under green is far above red. Now the honest part. Two replicates, so there is no statistic, and the sixteen-hour activity point reverses. We are not going to stand here and tell you that is clean. The claim we make is narrow: this circuit answers to colour, and what comes out of it is a working enzyme.`,
  note: 'DNPH 13 h: 10.4 ± 5.6 green vs 0.7 ± 2.4 red. 16 h: 1.05 green vs 3.7 red. Blot, ELISA and DNPH all run on the same supernatant. Gabriel’s v2 deck sets the overall ACCD working range at 2.5–8.5 µg/mL.',
  cue: ['x1'],
},
{
  id: 'protectants', sp: 4, secs: 52, title: 'Three protectants, picked to stress-test the platform',
  body: `
    ${head('What we chose to secrete', 'Three protectants, picked to stress-test the platform.')}
    <div class="body">
      <table class="tbl">
        <tr><th style="width:15%">Protectant</th><th style="width:17%">Type</th>
            <th style="width:22%">Where it came from</th><th style="width:25%">Why it is in the set</th>
            <th>How we read it out</th></tr>
        <tr class="hi"><td><b>ACC deaminase</b></td><td>Enzyme · ordered · well documented</td>
            <td>Suggested by Dr. Brophy</td>
            <td>The control. If anything works, this should.</td>
            <td>ELISA for amount, DNPH for activity</td></tr>
        <tr><td><b>BoPEP4</b></td><td>Peptide · disordered · 23 residues</td>
            <td>Interview with Prof. Sattely, Stanford</td>
            <td>Almost undescribed. No folded core, so every residue is open to design.</td>
            <td>Plant assays; HADDOCK for binding</td></tr>
        <tr><td><b>LEA14</b></td><td>Ordered <em>and</em> disordered</td>
            <td>Literature, after the first two</td>
            <td>Sits between them, and carries a K-segment we could transpose.</td>
            <td>Plant assays</td></tr>
      </table>
      <div class="cols c-2" style="margin-top:30px">
        <p class="caveat" style="border-color:var(--leaf)"><b>Open by design.</b> The output module is a
          dropout cassette: another team swaps in their own coding sequence and keeps the whole
          light-controlled system around it.</p>
        <p class="caveat" style="border-color:var(--leaf)"><b>EEBD.</b> A blocking device before the RBS
          stops a secretion-tagged protectant killing the <em>E. coli</em> cloning host. It cost us
          weeks, so it is in the Registry.</p>
      </div>
    </div>`,
  say: `We deliberately did not pick one protectant. We started from the stresses — salt, drought, heat — and narrowed a large pool by talking to people. ACC deaminase is the control: documented, and an enzyme, so we can measure activity and not just presence. BoPEP4 came out of an interview with Professor Sattely and is almost undescribed: twenty-three residues, no folded core, so every residue is open to redesign. LEA14 sits between them. The set spans documented and novel, ordered and disordered, enzyme and peptide, because if the platform only worked for one well-behaved protein we would never have found out. And the output module is a slot — drop your own gene in and keep the light control.`,
  note: 'Mutations designed: truncations for secretion, point mutations for interaction, K-segment transposition in LEA14. BoPEP4 took the most design and triage work.',
},

/* ══════════ 5 · Cells in, protectant out ══════════ */
{
  id: 'reactor', sp: 5, secs: 46, title: 'One requirement, and everything else bends to it', cls: 'dark',
  body: `
    ${head('The bioreactor', 'One requirement, and everything else bends to it.')}
    <div class="body cols c-58 vmid">
      <figure class="fig">
        <img src="img/s-reactor.webp" alt="The perfusion bioreactor: reservoir, pump, hollow-fibre module and collection bottle on a rack">
        <figcaption>Perfusion loop — stirred reservoir, pump, hollow-fibre module,
          pinch valve on the return line.</figcaption>
      </figure>
      <ul class="ticks">
        <li><b>The culture circulates</b> from a stirred reservoir, through the inside of the
          hollow fibres — the lumen — and back.</li>
        <li><b>The fibre walls are perforated</b> with 0.2 µm pores. A protein passes without
          noticing; a <em>B. subtilis</em> cell is many times too large.</li>
        <li><b>A pinch valve</b> on the return line sets the pressure that pushes the protectant
          across into the shell.</li>
        <li><b>Containment is physical.</b> It does not depend on the bacteria behaving, and it
          does not depend on a kill switch working on the worst day of the year.</li>
      </ul>
    </div>`,
  say: `Now. Engineered bacteria, in a box, at the edge of an open field. Everyone in this room just had the same thought, and every farmer we spoke to had it faster than we did. So the reactor was not designed around yield, or elegance, or cost. One requirement: the organism never leaves the loop. The culture circulates through hollow fibres whose walls are drilled with pores two tenths of a micrometre across. A protein goes through without noticing. A Bacillus cell is many times too large and stays where it is. The important part is that this separation is physical. It does not depend on the bacteria behaving.`,
  note: 'Eight design cycles. The pinch valve came from Prof. Chang at NCKU, the single mainboard from Owl Lab, and physical containment instead of a genetic kill switch from a biosafety reviewer.',
},
{
  id: 'contained', sp: 5, secs: 46, title: 'Contained, delivered, and sustained for three days', cls: 'dark',
  body: `
    ${head('Integrated runs', 'Contained, delivered, and sustained for three days.')}
    <div class="body cols c-2">
      <div>
        <figure class="fig">
          <img src="img/s-cellsstayin.webp" alt="Plated medium: colonies from the lumen side, nothing from the shell side">
        </figure>
        <ul class="ticks" style="margin-top:20px">
          <li><b>Shell side: no growth</b>, plated on two separate runs.</li>
          <li><b>Lumen side: colonies</b> — the culture was alive, so the test was not
            simply failing.</li>
          <li><b>Cycle 2:</b> 10.7 µg/mL inside the loop, 10.5 µg/mL outside it. The membrane
            is barely a barrier to the protein.</li>
        </ul>
      </div>
      <div>
        <div data-chart='{"type":"line","max":8,"ticks":4,"unit":"µg/mL · shell side",
          "x":["6 h","12 h","18 h","24 h","30 h","36 h","48 h","72 h"],
          "y":[3.8,6.5,6.2,3.4,5.9,2.4,2.7,2.5],"peak":1,
          "rule":{"v":2,"l":"control background 1.3 µg/mL"},
          "dots":[0,0,1,1,1,1,1,1],"dotsLabel":"DNPH active"}'></div>
        <p class="cap">Integrated cycle 4 — ACC deaminase on the shell side across 72 hours.
          Above 2 µg/mL to the end of the run; activity detected from hour 18 onward.</p>
      </div>
    </div>`,
  say: `We tested containment the only way that counts. Take medium from the shell side — the side whose contents would go onto a plant — and plate it. Twice, on two different runs. Nothing grew, while the inside of the loop was full of colonies. Then the harder question: is this a supply, or just a puff? Across seventy-two hours the enzyme kept arriving on the shell side. Peak six and a half micrograms per millilitre at twelve hours, above two micrograms through to the end, and measurable activity from the eighteenth hour on. That is the shape we needed. Not a dose. A tap you can leave on.`,
  note: 'Control background 1.3 µg/mL. Cycle 2 showed ~10 µg/mL on both sides, with activity retained after crossing.',
},

/* ══════════ 6 · Built to be rebuilt ══════════ */
{
  id: 'photometer', sp: 6, secs: 48, title: 'Every sample you take opens a sealed loop', cls: 'dark',
  body: `
    ${head('A problem hiding in that run', 'Every sample you take opens a sealed loop.')}
    <div class="body">
      <p class="sub" style="max-width:54em;margin:0 0 30px">To know how the culture is doing you
        measure its density. To measure its density you take a sample — every few hours, for three
        days. So we stopped taking samples and built the instrument into the loop.</p>
      <div class="cols c-4">
        <div class="card"><div class="num">US$372</div><h4>of parts</h4>
          <p>against US$15,000 for the benchtop spectrophotometer we checked it against.</p></div>
        <div class="card"><div class="num">3.8%</div><h4>median difference</h4>
          <p>across 19 paired readings, trusted to about OD 1, with no correction applied.</p></div>
        <div class="card"><div class="num">434 h</div><h4>continuous run</h4>
          <p>18 days, of which 10 were clean growth, read straight through the flowing culture.</p></div>
        <div class="card"><div class="num">26.7 h</div><h4>early warning</h4>
          <p>when the reference channel failed, our software had flagged it on replay before we noticed.</p></div>
      </div>
      <p class="caveat" id="x1" style="border-color:var(--bright)">A second beam never touches the
        culture. It is the reference — so a lamp slowly dimming is never mistaken for bacteria
        slowly growing.</p>
    </div>`,
  say: `There is a problem hiding in that run. To know how the culture is doing you measure its density, and to measure density you take a sample — which means opening a sealed loop, every few hours, for three days. Every sample is a hole in the containment we just spent two slides proving. So we built the photometer into the loop. It reads straight through the flowing culture, with a second beam that never touches it as a reference, so a dimming lamp is never mistaken for growing bacteria. Three hundred and seventy-two dollars of parts, within three point eight percent of a fifteen-thousand-dollar instrument, across a four-hundred-and-thirty-four-hour run.`,
  note: 'Pro and Slim versions both documented; the Slim is about US$235 in parts.',
  cue: ['x1'],
},
{
  id: 'guides', sp: 6, secs: 46, title: 'We only believe a guide once a stranger has built from it',
  body: `
    ${head('Documentation', 'We only believe a guide once a stranger has built from it.')}
    <div class="body cols c-2">
      <div>
        <table class="tbl">
          <tr><th>Published build guide</th><th>What it is</th></tr>
          <tr><td><b>Perfusion bioreactor</b></td><td>The full loop, with the membrane module</td></tr>
          <tr><td><b>Pro photometer</b></td><td>Inline OD600, dual-beam · US$372</td></tr>
          <tr><td><b>Slim photometer</b></td><td>Low-cost version · US$235</td></tr>
          <tr><td><b>Light plate apparatus</b></td><td>LED array for testing the green switch</td></tr>
          <tr><td><b>Hydroponics plate</b></td><td>Print files</td></tr>
        </table>
        <ul class="ticks" style="margin-top:24px">
          <li><b>Three people outside the team</b> built the Slim from the guide alone: an
            experienced engineer, someone with little engineering background, and a Boy Scout.</li>
          <li><b>Every place they got stuck</b> is a place the guide was wrong. It has been
            revised, so the fourth builder will not need us in the room.</li>
        </ul>
      </div>
      <figure class="fig">
        <img src="img/s-commercial.webp" alt="Render of the proposed sealed field unit standing in a crop row">
        <figcaption><b>Next step — designed, not built.</b> The same loop and the same containment
          in a sealed, suitcase-sized unit, run without laboratory training. We say so every
          time we show it.</figcaption>
      </figure>
    </div>`,
  say: `All of it is documented to the point where somebody else can build it. Then we did the part teams skip: we handed the guide to three people outside our team, including one who had never soldered, and watched them build it without us. Every place they got stuck is a place the guide was wrong. It has been revised, so the fourth builder will not need us in the room. And the unit on the right is the next step — the same loop and the same containment in a sealed suitcase. That one is designed, not built, and we will say so every time we show it.`,
  note: 'Eight bioreactor design cycles with expert reviews between April and September.',
},

/* ══════════ 7 · The plants ══════════ */
{
  id: 'plants', sp: 7, secs: 42, title: 'Two stresses, three systems, all three protectants',
  body: `
    ${head('Does it help a plant?', 'Two stresses, three systems, all three protectants.')}
    <div class="body">
      <table class="tbl">
        <tr><th style="width:15%">System</th><th style="width:16%">Stress</th>
            <th style="width:16%">Protectant</th><th style="width:16%">Applied as</th>
            <th>Against the untreated control</th></tr>
        <tr><td><b>Agar</b><br><span style="font-size:16px;color:var(--slate)">microbiome-controlled</span></td>
            <td>37 °C, 5 days</td><td>ACC deaminase</td><td>Foliar spray</td>
            <td><span class="big">+35%</span> chlorophyll &nbsp;·&nbsp; primary root 40.9 → <b>46.9 mm</b></td></tr>
        <tr class="hi"><td><b>Agar</b></td><td>100 mM NaCl</td><td>BoPEP4</td><td>Top drenching</td>
            <td><span class="big">+88%</span> chlorophyll — best of the three under salt</td></tr>
        <tr><td><b>Agar</b></td><td>100 mM NaCl</td><td>LEA14</td><td>Foliar spray</td>
            <td><span class="big">+35%</span> chlorophyll</td></tr>
        <tr><td><b>Soil</b><br><span style="font-size:16px;color:var(--slate)">real-world scenario</span></td>
            <td>300 mM NaCl</td><td>ACC deaminase</td><td>Drench</td>
            <td><span class="big">+15%</span> chlorophyll by day 5, and visibly greener</td></tr>
        <tr><td><b>Hydroponics</b></td><td>37 °C / 100 mM NaCl</td><td>ACCD · BoPEP4</td><td>In solution</td>
            <td>Still effective at <b>1/40 dilution</b>; under salt, BoPEP4 held green leaves
              where every other arm bleached</td></tr>
      </table>
    </div>`,
  say: `So the cells stay in and a working protectant comes out. Does any of it help a plant? We tested salt and heat across three systems. On agar, under five days of heat, ACC deaminase gave about thirty-five percent more chlorophyll and six millimetres more root. Under salt, BoPEP4 — the peptide nobody had characterised — gave eighty-eight percent more chlorophyll, the best of the three. In soil, which is where results usually go to die, treated plants held fifteen percent more chlorophyll by day five. And in hydroponics we diluted down to a fortieth, and it was still working.`,
  note: 'Arabidopsis throughout. The hydroponics series ran 1/40 to 1/100.',
},
{
  id: 'timing', sp: 7, secs: 52, title: 'Late treatment is not a weaker rescue. It is a harm',
  body: `
    ${head('The same protectant, applied at different times', 'Late treatment is not a weaker rescue. It is a harm.')}
    <div class="body cols c-58">
      <div>
        <div class="pots">
          <figure><img src="img/p-heat-ctrl.webp" alt="Pot at 22 °C, untreated">
            <div class="t">22 °C control</div><div class="v">no stress · 1.00</div></figure>
          <figure class="bad"><img src="img/p-heat-none.webp" alt="Pot after heat stress, untreated">
            <div class="t">Heat, untreated</div><div class="v">0.83</div></figure>
          <figure class="good"><img src="img/p-heat-co.webp" alt="Pot treated as the heat began">
            <div class="t">Treated as heat began</div><div class="v">1.00</div></figure>
          <figure class="bad"><img src="img/p-heat-post.webp" alt="Pot treated five days after the heat began">
            <div class="t">Treated after 5 days</div><div class="v">0.48</div></figure>
        </div>
        <p class="cap">Soil · 5 days at 37 °C · relative chlorophyll a+b, against the unstressed
          control at 1.00.</p>
      </div>
      <div>
        <div data-chart='{"type":"bars","max":1.5,"ticks":3,"unit":"relative chlorophyll a+b",
          "data":[{"l":"22 °C","v":1.00,"c":"#8A9A93"},
                  {"l":"Heat, none","v":0.83,"c":"#C8862B"},
                  {"l":"Co-treat","v":1.00,"c":"#1E8A4F"},
                  {"l":"Post-treat","v":0.48,"c":"#C0392B"}]}'></div>
        <p class="caveat" id="x1" style="border-color:var(--red)">Treating five days late left the
          plant <b>42% below</b> the untreated heat-stressed control. So this was never only a
          chemistry problem — and Ms. Chen, waiting for her plants to tell her, is exactly the
          person it would fail.</p>
      </div>
    </div>`,
  say: `And then the experiment that changed the project. Same plants, same stress, same protectant. The only variable is when you apply it. Heat with no treatment leaves the plant at eighty-three percent of normal chlorophyll. Apply it as the heat begins, and it comes back to a hundred. Apply it after five days — the way you would if you were reacting to damage you could see — and it drops to forty-eight. That is forty-two percent worse than doing nothing at all. Late treatment is not a weaker rescue. It is a harm. Which means this was never only a chemistry problem, and Ms. Chen, waiting for her plants to tell her, is exactly the person it would fail.`,
  note: 'Post-treatment 0.48 against the untreated heat-stressed control 0.83 = −42%. Co-treatment was applied at the onset of stress.',
  cue: ['x1'],
},

/* ══════════ 8 · Before the stress ══════════ */
{
  id: 'model', sp: 8, secs: 44, title: 'Predicting a bad season from the weather that causes it',
  body: `
    ${head('So the system has to move first', 'Predicting a bad season from the weather that causes it.')}
    <div class="body cols c-2 vmid">
      <div>
        <div class="stat"><div class="n leaf">32%</div>
          <div class="l" style="max-width:20em;font-size:24px">lower prediction error than a
            county’s own historical yield trend</div></div>
        <ul class="ticks" style="margin-top:30px">
          <li><b>25 years</b> of Taiwanese rice harvests, both crops, matched against the weather
            those seasons actually had.</li>
          <li><b>The predictors are unglamorous</b> — warm nights, humidity at the wrong growth
            stage, sunshine deficit. Not typhoons.</li>
          <li><b>Trained on the early years, tested</b> against harvests it had never seen.</li>
        </ul>
      </div>
      <div>
        <figure class="fig">
          <img src="img/s-rice25.webp" alt="Taiwan county rice yield map and national yield through time, 2001 to 2025">
        </figure>
        <p class="caveat" style="border-color:var(--leaf);margin-top:22px"><b>This is not a chart in a
          report.</b> The stress index it produces sets the green light intensity in the reactor, and
          the digital twin checks a batch can be grown in time before anything switches on.</p>
      </div>
    </div>`,
  say: `Growing a batch takes hours, and stress does not wait. So the system has to see it coming. We took twenty-five years of Taiwanese rice harvests and matched them against the weather those seasons actually had, to find which combinations predict a bad year. They are not the dramatic ones — warm nights, humidity at the wrong stage. Against a county's own yield trend, our model cut prediction error by thirty-two percent, trained on early years and tested on harvests it had never seen. And that index is not a chart in a report. It sets the light intensity in the reactor.`,
  note: 'The digital twin also forecasts culture growth up to 12 h ahead, flags unreliable sensor readings, and puts the induction decision to a person for approval.',
},
{
  id: 'people', sp: 8, secs: 50, title: 'The farmers said yes, with conditions',
  body: `
    ${head('Nine months · 31 stakeholders', 'The farmers said yes, with conditions — and the conditions changed the hardware.')}
    <div class="body cols c-58">
      <figure class="fig">
        <img src="img/s-ihpgrid.webp" alt="Our public forum, with farmers, researchers and practitioners in one room">
        <figcaption>A public forum that put smallholders, organic growers, researchers and field
          practitioners in one room, and let them disagree.</figcaption>
      </figure>
      <table class="tbl">
        <tr><th style="width:32%">They told us</th><th>So we changed</th></tr>
        <tr><td><b>Affordable</b></td><td>Split the system — a cheap sensing unit on every farm,
          one manufacturing unit shared between them, the way a cooperative already shares a dryer.</td></tr>
        <tr><td><b>Accessible</b></td><td>Published every build guide, and tested them on people
          who had never seen the project.</td></tr>
        <tr><td><b>Clear of GM rules</b></td><td>Positioned ReLEAF as a <b>biostimulant and microbial
          fertiliser</b> — a door that actually opens — after CH Biotech walked us through the regulation.</td></tr>
        <tr><td><b>Contained</b></td><td>Physical containment instead of a genetic kill switch, at a
          biosafety reviewer’s insistence.</td></tr>
      </table>
    </div>`,
  say: `And none of it matters if nobody uses it. Over nine months we worked with more than thirty stakeholders, and ran a public forum that put smallholders, organic growers and researchers in one room and let them disagree. The farmers were more open than we expected — on conditions. Affordable, accessible, and clear of the rules they already live under. Every one of those conditions changed the hardware. Affordability split the system in two. Regulation changed what ReLEAF even is. And a biosafety reviewer is the reason containment is a membrane and not a suicide gene. We came in thinking the engineering was ours and the interviews were a deliverable. It was the other way round.`,
  note: 'First markets narrowed to the US, Thailand and the Philippines, whose biostimulant frameworks are navigable and whose farms are the smallholders we designed for.',
},
{
  id: 'close', sp: 8, secs: 42, title: 'Every farmer, a biomanufacturer', cls: 'bleed',
  body: `
    <img src="img/s-everyfarmer.webp" alt="Taiwan, with every farmed parcel lit green">
    <div class="over">
      <h2 class="h" style="font-size:72px;color:#fff">Every farmer,
        <em style="color:var(--bright);font-style:italic">a biomanufacturer.</em></h2>
      <p class="sub" style="max-width:42em">The circuit is open. The output module is a slot you
        can drop your own protein into. Every build guide is published.</p>
    </div>`,
  say: `We started with one woman in Yunlin, waiting for her plants to tell her that something had already gone wrong. We would like her to know first. There is a long way to go — field validation, pilot cooperatives, a version of this that works somewhere that is not Taiwan. But the circuit is open, the output module is a slot you can drop your own protein into, and every build guide is published. So if there is something you want delivered to a plant, take it. Make biological protection local, responsive, and close enough to reach. Thank you.`,
  note: 'Team walks on here.',
},

];

if (typeof module !== 'undefined') module.exports = { SLIDES, SPEAKERS };
