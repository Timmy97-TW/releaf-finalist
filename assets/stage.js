/* Stage renderer shared by show.html (minimal) and animate.html (some animation).
   window.MOTION === 'on' turns the cues on. Everything else is identical, so the
   two views can never drift apart.  Keys: arrows / space / 1-9 / Home / End. */

(function () {
  const MOTION = window.MOTION === 'on';
  const stage = document.getElementById('stage');
  const pips = document.getElementById('pips');
  const prog = document.getElementById('prog');
  const clock = document.getElementById('clock');
  const spnow = document.getElementById('spnow');

  const total = SLIDES.reduce((a, s) => a + s.secs, 0);
  let i = 0;

  const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const mmss = (s) => Math.floor(s / 60) + ':' + String(Math.round(s % 60)).padStart(2, '0');

  // Pull a leading number out of a title so it can roll up on the animated view.
  function titleHTML(s) {
    const huge = /^[\d.,]+%?$/.test(s.title.trim());
    const cls = huge ? 'ttl huge' : 'ttl';
    if (huge && MOTION && s.cue === 'count') {
      return `<h2 class="${cls}" data-count="${esc(s.title)}">${esc(s.title)}</h2>`;
    }
    return `<h2 class="${cls}">${esc(s.title)}</h2>`;
  }

  stage.innerHTML = SLIDES.map((s, n) => `
    <section class="slide${s.bare ? ' bare' : ''}" data-ground="${s.ground}" id="s-${s.id}" aria-hidden="true">
      <div class="fig"><img src="img/${s.img}" alt=""></div>
      <div class="sptab">${s.sp} / 8</div>
      ${s.bare ? '' : `<div class="plate">
        ${s.kicker ? `<div class="kicker">${esc(s.kicker)}</div>` : ''}
        ${titleHTML(s)}
        ${s.lines.length ? `<ul class="lines">${s.lines.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>` : ''}
      </div>`}
    </section>`).join('');

  pips.innerHTML = SLIDES.map((s, n) => `<b data-go="${n}" title="${esc(s.title)}"></b>`).join('');
  pips.addEventListener('click', (e) => {
    const b = e.target.closest('[data-go]');
    if (b) go(+b.dataset.go);
  });

  const els = [...stage.children];

  function rollNumber(h2) {
    const raw = h2.dataset.count;
    const m = raw.match(/^([\d.,]+)(%?)$/);
    if (!m) return;
    const target = parseFloat(m[1].replace(/,/g, ''));
    const dec = (m[1].split('.')[1] || '').length;
    const suffix = m[2];
    const t0 = performance.now();
    const dur = 620;
    (function step(t) {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      h2.textContent = (target * e).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else h2.textContent = raw;
    })(t0);
  }

  function go(n) {
    i = Math.max(0, Math.min(SLIDES.length - 1, n));
    els.forEach((el, k) => {
      const on = k === i;
      el.classList.toggle('on', on);
      el.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
    [...pips.children].forEach((b, k) => b.classList.toggle('now', k === i));

    const s = SLIDES[i];
    const elapsed = SLIDES.slice(0, i).reduce((a, x) => a + x.secs, 0);
    prog.style.width = ((elapsed + s.secs) / total * 100) + '%';
    if (clock) clock.textContent = mmss(elapsed) + ' – ' + mmss(elapsed + s.secs);
    if (spnow) spnow.textContent = 'Speaker ' + s.sp;
    history.replaceState(null, '', '#' + s.id);

    if (!MOTION) return;

    const el = els[i];
    const h2 = el.querySelector('[data-count]');
    if (h2 && s.cue === 'count') rollNumber(h2);

    if (s.cue === 'reveal') {
      // The slide still lands whole: the lines follow the title by a beat, they
      // are never held back waiting for a click.
      el.querySelectorAll('.lines li').forEach((li, k) => {
        li.style.transition = 'none';
        li.style.opacity = '0';
        li.style.transform = 'translateY(6px)';
        requestAnimationFrame(() => {
          li.style.transition = 'opacity .36s ease ' + (0.22 + k * 0.14) + 's, transform .36s ease ' + (0.22 + k * 0.14) + 's';
          li.style.opacity = '';
          li.style.transform = '';
        });
      });
    }
  }

  addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key;
    if (k === 'ArrowRight' || k === 'ArrowDown' || k === ' ' || k === 'PageDown') { e.preventDefault(); go(i + 1); }
    else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp') { e.preventDefault(); go(i - 1); }
    else if (k === 'Home') go(0);
    else if (k === 'End') go(SLIDES.length - 1);
    else if (/^[1-8]$/.test(k)) {
      const first = SLIDES.findIndex((s) => s.sp === +k);
      if (first >= 0) go(first);
    }
  });

  stage.addEventListener('click', (e) => {
    const r = stage.getBoundingClientRect();
    go(e.clientX - r.left < r.width * 0.25 ? i - 1 : i + 1);
  });

  addEventListener('hashchange', () => {
    const n = SLIDES.findIndex((s) => s.id === location.hash.slice(1));
    if (n >= 0 && n !== i) go(n);
  });

  const from = SLIDES.findIndex((s) => s.id === location.hash.slice(1));
  go(from >= 0 ? from : 0);
})();
