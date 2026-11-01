/* Stage renderer shared by show.html (minimal) and animate.html.
   window.MOTION === 'on' turns the cues on; everything else is identical, so
   the two views can never drift apart.

   Slides are authored on a fixed 1600x900 canvas and scaled to fit the window,
   so every size in deck.css is an absolute number. */

(function () {
  const MOTION = window.MOTION === 'on';
  const W = 1600, H = 900;
  const wrap = document.getElementById('stagewrap');
  const box = document.getElementById('framebox');
  const frame = document.getElementById('frame');
  const pips = document.getElementById('pips');
  const prog = document.getElementById('prog');
  const clock = document.getElementById('clock');
  const spnow = document.getElementById('spnow');

  const total = SLIDES.reduce((a, s) => a + s.secs, 0);
  let i = 0;

  const mmss = (s) => Math.floor(s / 60) + ':' + String(Math.round(s % 60)).padStart(2, '0');

  frame.innerHTML = SLIDES.map((s, n) => `
    <section class="slide ${s.cls || ''}" id="s-${s.id}" aria-hidden="true">
      ${s.body}
      <div class="slideno">${n + 1} / ${SLIDES.length}</div>
    </section>`).join('');

  if (typeof drawCharts === 'function') drawCharts(frame);

  pips.innerHTML = SLIDES.map((s, n) => `<b data-go="${n}" title="${s.id}"></b>`).join('');
  pips.addEventListener('click', (e) => {
    const b = e.target.closest('[data-go]');
    if (b) go(+b.dataset.go);
  });

  const els = [...frame.children];

  function fit() {
    const k = Math.min(wrap.clientWidth / W, wrap.clientHeight / H);
    frame.style.transform = `scale(${k})`;
    box.style.width = W * k + 'px';
    box.style.height = H * k + 'px';
  }
  addEventListener('resize', fit);

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

    if (!MOTION || !s.cue) return;
    // The slide still lands whole: a cued element follows the rest by a beat,
    // it is never held back waiting for a click.
    s.cue.forEach((id, k) => {
      const el = els[i].querySelector('#' + id);
      if (!el) return;
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      requestAnimationFrame(() => {
        const d = 0.3 + k * 0.18;
        el.style.transition = `opacity .42s ease ${d}s, transform .42s ease ${d}s`;
        el.style.opacity = '';
        el.style.transform = '';
      });
    });
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

  box.addEventListener('click', (e) => {
    const r = box.getBoundingClientRect();
    go(e.clientX - r.left < r.width * 0.25 ? i - 1 : i + 1);
  });

  addEventListener('hashchange', () => {
    const n = SLIDES.findIndex((s) => s.id === location.hash.slice(1));
    if (n >= 0 && n !== i) go(n);
  });

  fit();
  const from = SLIDES.findIndex((s) => s.id === location.hash.slice(1));
  go(from >= 0 ? from : 0);
})();
