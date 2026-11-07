/* Small SVG chart renderer for the deck. Every chart is drawn from the numbers,
   never pasted in as a picture, so it stays legible at stage size and the data
   is auditable in one place.

   Usage: put <div data-chart='{...}'></div> in a slide body and call
   drawCharts(root). Specs:

   bars     {type:'bars', max, unit, ticks?, data:[{l, v, e?, c?, tag?}], rule?:{v,l}}
   grouped  {type:'grouped', max, unit, ticks?, legend:[{l,c}],
             groups:[{l, v:[..], e:[..]}]}
   line     {type:'line', max, unit, x:[..], y:[..], rule?:{v,l},
             peak?:i, dots?:[0|1,..], dotsLabel?}
*/

const CH = {
  ink: '#1d1d1b', grid: 'rgba(29,29,27,.13)', soft: 'rgba(29,29,27,.45)',
  leaf: '#4f6b24', bright: '#858a3e', olive: '#858a3e', deep: '#324519',
  red: '#a4342a', amber: '#9a6b1e', slate: '#9b9c93', ctrl: '#b8b9b0',
};

function svgEl(w, h, cls) {
  return `<svg class="${cls || 'chart'}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" role="img">`;
}

function yAxis(x0, y0, h, max, ticks, unit) {
  let out = '';
  for (let i = 0; i <= ticks; i++) {
    const v = (max / ticks) * i;
    const y = y0 - (v / max) * h;
    out += `<line x1="${x0}" y1="${y}" x2="${x0 + 999}" y2="${y}" stroke="${CH.grid}" stroke-width="1"/>`;
    out += `<text x="${x0 - 10}" y="${y + 5}" text-anchor="end" class="ax">${+v.toFixed(2)}</text>`;
  }
  if (unit) out += `<text x="${x0 - 10}" y="${y0 - h - 16}" text-anchor="end" class="axu">${unit}</text>`;
  return out;
}

function bars(s) {
  const W = 760, H = 380, x0 = 76, y0 = 312, h = 250, w = W - x0 - 20;
  const ticks = s.ticks || 4;
  const n = s.data.length;
  const step = w / n, bw = Math.min(84, step * 0.54);
  let o = svgEl(W, H) + yAxis(x0, y0, h, s.max, ticks, s.unit);
  s.data.forEach((d, i) => {
    const cx = x0 + step * (i + 0.5);
    const bh = (d.v / s.max) * h;
    const c = d.c || CH.leaf;
    o += `<rect x="${cx - bw / 2}" y="${y0 - bh}" width="${bw}" height="${bh}" fill="${c}" rx="3"/>`;
    if (d.e) {
      const e = (d.e / s.max) * h;
      o += `<line x1="${cx}" y1="${y0 - bh - e}" x2="${cx}" y2="${y0 - bh + Math.min(e, bh)}" stroke="${CH.ink}" stroke-width="2.5" opacity=".65"/>`;
      o += `<line x1="${cx - 13}" y1="${y0 - bh - e}" x2="${cx + 13}" y2="${y0 - bh - e}" stroke="${CH.ink}" stroke-width="2.5" opacity=".65"/>`;
    }
    o += `<text x="${cx}" y="${y0 - bh - (d.e ? (d.e / s.max) * h : 0) - 14}" text-anchor="middle" class="val">${d.tag !== undefined ? d.tag : d.v}</text>`;
    o += `<text x="${cx}" y="${y0 + 30}" text-anchor="middle" class="cat">${d.l}</text>`;
  });
  if (s.rule) {
    const y = y0 - (s.rule.v / s.max) * h;
    o += `<line x1="${x0}" y1="${y}" x2="${W - 20}" y2="${y}" stroke="${CH.red}" stroke-width="2" stroke-dasharray="7 5"/>`;
    o += `<text x="${W - 22}" y="${y - 10}" text-anchor="end" class="rule">${s.rule.l}</text>`;
  }
  o += `<line x1="${x0}" y1="${y0}" x2="${W - 20}" y2="${y0}" stroke="${CH.ink}" stroke-width="2"/>`;
  return o + '</svg>';
}

function grouped(s) {
  const W = 760, H = 380, x0 = 76, y0 = 312, h = 250, w = W - x0 - 20;
  const ticks = s.ticks || 4;
  const g = s.groups.length, k = s.groups[0].v.length;
  const step = w / g, bw = Math.min(62, (step * 0.62) / k);
  let o = svgEl(W, H) + yAxis(x0, y0, h, s.max, ticks, s.unit);
  s.groups.forEach((G, gi) => {
    const gc = x0 + step * (gi + 0.5);
    G.v.forEach((v, bi) => {
      const cx = gc + (bi - (k - 1) / 2) * (bw + 10);
      const bh = (v / s.max) * h;
      const c = s.legend[bi].c;
      o += `<rect x="${cx - bw / 2}" y="${y0 - bh}" width="${bw}" height="${bh}" fill="${c}" rx="3"/>`;
      const e = G.e && G.e[bi] ? (G.e[bi] / s.max) * h : 0;
      if (e) {
        o += `<line x1="${cx}" y1="${y0 - bh - e}" x2="${cx}" y2="${y0 - bh + Math.min(e, bh)}" stroke="${CH.ink}" stroke-width="2.5" opacity=".6"/>`;
        o += `<line x1="${cx - 11}" y1="${y0 - bh - e}" x2="${cx + 11}" y2="${y0 - bh - e}" stroke="${CH.ink}" stroke-width="2.5" opacity=".6"/>`;
      }
      o += `<text x="${cx}" y="${y0 - bh - e - 13}" text-anchor="middle" class="val">${v}</text>`;
    });
    o += `<text x="${gc}" y="${y0 + 30}" text-anchor="middle" class="cat">${G.l}</text>`;
  });
  o += `<line x1="${x0}" y1="${y0}" x2="${W - 20}" y2="${y0}" stroke="${CH.ink}" stroke-width="2"/>`;
  s.legend.forEach((L, i) => {
    const lx = x0 + 6 + i * 190, ly = 26;
    o += `<rect x="${lx}" y="${ly - 11}" width="15" height="15" fill="${L.c}" rx="3"/>`;
    o += `<text x="${lx + 23}" y="${ly + 2}" class="leg">${L.l}</text>`;
  });
  return o + '</svg>';
}

function line(s) {
  const W = 880, H = 380, x0 = 66, y0 = 300, h = 240, w = W - x0 - 28;
  const ticks = s.ticks || 3;
  const step = w / (s.x.length - 1);
  const px = (i) => x0 + step * i;
  const py = (v) => y0 - (v / s.max) * h;
  let o = svgEl(W, H) + yAxis(x0, y0, h, s.max, ticks, s.unit);
  const pts = s.y.map((v, i) => `${px(i)},${py(v)}`).join(' ');
  o += `<polygon points="${x0},${y0} ${pts} ${px(s.x.length - 1)},${y0}" fill="${CH.leaf}" opacity=".13"/>`;
  o += `<polyline points="${pts}" fill="none" stroke="${CH.leaf}" stroke-width="3.5" stroke-linejoin="round"/>`;
  if (s.rule) {
    const y = py(s.rule.v);
    o += `<line x1="${x0}" y1="${y}" x2="${W - 28}" y2="${y}" stroke="${CH.ink}" stroke-width="1.5" stroke-dasharray="6 5" opacity=".55"/>`;
    o += `<text x="${W - 30}" y="${y - 9}" text-anchor="end" class="rule2">${s.rule.l}</text>`;
  }
  s.y.forEach((v, i) => {
    const peak = i === s.peak;
    o += `<circle cx="${px(i)}" cy="${py(v)}" r="${peak ? 8 : 4.5}" fill="${peak ? '#fff' : CH.leaf}" stroke="${CH.leaf}" stroke-width="${peak ? 4 : 0}"/>`;
    o += `<text x="${px(i)}" y="${y0 + 28}" text-anchor="middle" class="cat sm">${s.x[i]}</text>`;
  });
  if (s.peak !== undefined) {
    o += `<text x="${px(s.peak)}" y="${py(s.y[s.peak]) - 22}" text-anchor="middle" class="peak">${s.y[s.peak]} ${s.unit || ''}</text>`;
  }
  if (s.dots) {
    o += `<text x="${x0 - 12}" y="${y0 + 62}" text-anchor="end" class="cat sm">${s.dotsLabel || ''}</text>`;
    s.dots.forEach((on, i) => {
      o += `<circle cx="${px(i)}" cy="${y0 + 57}" r="6" fill="${on ? CH.bright : 'none'}" stroke="${on ? CH.bright : CH.soft}" stroke-width="2"/>`;
    });
  }
  o += `<line x1="${x0}" y1="${y0}" x2="${W - 28}" y2="${y0}" stroke="${CH.ink}" stroke-width="2"/>`;
  return o + '</svg>';
}

const RENDER = { bars, grouped, line };

function drawCharts(root) {
  (root || document).querySelectorAll('[data-chart]').forEach((el) => {
    if (el.dataset.drawn) return;
    let spec;
    try { spec = JSON.parse(el.dataset.chart); } catch (e) { return; }
    const fn = RENDER[spec.type];
    if (!fn) return;
    el.innerHTML = fn(spec);
    el.dataset.drawn = '1';
  });
}

if (typeof module !== 'undefined') module.exports = { drawCharts, CH };
