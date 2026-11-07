/* The presenting view. show.html mounts the deck with this; notes.html runs its
   own two-pane variant. Keeping the clock, the keys and the pace caret here
   means a fix lands on the view people actually present from.

   Keys: arrows / space / Page / Enter to move, Home and End, 1-9 and 0 for ten,
   Shift+1..6 to jump to a chapter, f full screen, t clock, Escape to leave.
*/
function mountDeck(DECK, viewId) {
  document.getElementById('vsw').innerHTML = viewSwitcher(viewId);

  const frame = document.getElementById('frame');
  frame.innerHTML = DECK.map((s, i) =>
    `<div class="slide" data-i="${i}"><div class="stage">${stageHTML(DECK, i)}</div></div>`).join('');
  drawCharts(frame);
  const slides = [...frame.querySelectorAll('.slide')];
  const dots = document.getElementById('dots');
  dots.innerHTML = DECK.map((s, i) =>
    `<b data-i="${i}" class="${i && DECK[i-1].node !== s.node ? 'brk' : ''}" title="${s.title}"></b>`).join('');
  const dotEls = [...dots.querySelectorAll('b')];
  const planTotal = DECK.reduce((a, s) => a + s.secs, 0);

  let cur = 0;

  function fit() {
    const pad = 54;
    const s = Math.min((innerWidth - pad * 2) / 1600, (innerHeight - pad * 2) / 900);
    frame.style.width = (1600 * s) + 'px';
    frame.style.height = (900 * s) + 'px';
    frame.querySelectorAll('.stage').forEach(st => st.style.transform = `scale(${s})`);
  }
  addEventListener('resize', fit); fit();

  function go(i, instant) {
    i = Math.max(0, Math.min(DECK.length - 1, i));
    if (i === cur && !instant) return;
    slides[cur].classList.remove('on');
    cur = i;
    const el = slides[cur];
    el.classList.add('on');
    /* restart the entrance steps each time the slide is shown */
    const st = el.querySelector('.stage');
    st.classList.remove('go');
    void st.offsetWidth;
    st.classList.add('go');
    dotEls.forEach((d, k) => d.classList.toggle('on', k === cur));
    document.getElementById('ct').textContent =
      String(cur + 1).padStart(2, '0') + ' / ' + String(DECK.length).padStart(2, '0');
    const handover = cur === 0 || DECK[cur - 1].speaker !== DECK[cur].speaker;
    document.getElementById('where').innerHTML =
      `<i class="spk${handover ? ' hand' : ''}">${DECK[cur].speaker}</i><b>${DECK[cur].title}</b>`;
    document.getElementById('barI').style.width = ((cur + 1) / DECK.length * 100) + '%';
    location.hash = cur + 1;
  }

  /* first slide of each chapter, for the Shift+number jumps */
  const chapterStart = [];
  DECK.forEach((s, i) => { if (s.node && !chapterStart[s.node]) chapterStart[s.node] = i; });

  addEventListener('keydown', e => {
    if (['ArrowRight', 'ArrowDown', ' ', 'PageDown', 'Enter'].includes(e.key)) { e.preventDefault(); go(cur + 1); }
    else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); go(cur - 1); }
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(DECK.length - 1);
    else if (e.key === 'f') toggleFull();
    else if (e.key === 't') toggleTimer();
    else if (e.key === 'Escape') location.href = 'index.html';
    else if (e.shiftKey && /^[!@#$%^]$/.test(e.key)) {
      const n = '!@#$%^'.indexOf(e.key) + 1;
      if (chapterStart[n] !== undefined) go(chapterStart[n]);
    }
    else if (/^[0-9]$/.test(e.key)) go(e.key === '0' ? 9 : +e.key - 1);
  });
  document.getElementById('next').onclick = () => go(cur + 1);
  document.getElementById('prev').onclick = () => go(cur - 1);
  document.getElementById('full').onclick = toggleFull;
  dotEls.forEach(d => d.onclick = () => go(+d.dataset.i));
  frame.addEventListener('click', e => go(e.clientX < innerWidth / 2 ? cur - 1 : cur + 1));

  function toggleFull() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  }

  /* The pace caret on the node strip's rail. The rail is planned time; the caret
     is the clock. Caret past the lit segment means the talk is running behind,
     which is the only thing a speaker needs to know mid-sentence. */
  function paintCaret(sec) {
    frame.querySelectorAll('.nodebar').forEach(bar => {
      const c = bar.querySelector('.caret');
      if (!c) return;
      const due = +bar.dataset.at + DECK[+bar.dataset.slide].secs;
      c.classList.add('on');
      c.style.left = Math.min(100, sec / (+bar.dataset.total) * 100) + '%';
      c.classList.toggle('late', sec > due + 5);
    });
  }

  let t0 = null, tick = null;
  const tm = document.getElementById('tm');
  function startClock() {
    if (t0) return;
    t0 = Date.now();
    tick = setInterval(() => {
      const s = Math.floor((Date.now() - t0) / 1000);
      tm.textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
      tm.style.color = s > planTotal ? '#a33' : '';
      paintCaret(s);
    }, 250);
  }
  function toggleTimer() {
    if (tick) { clearInterval(tick); tick = null; t0 = null; tm.textContent = '0:00'; tm.style.color = ''; }
    else startClock();
  }
  ['next', 'prev'].forEach(id => document.getElementById(id).addEventListener('click', startClock));
  addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === ' ') startClock(); });

  /* chrome fades out while idle */
  const chrome = [...document.querySelectorAll('.chr')];
  let idle;
  function wake() {
    chrome.forEach(c => c.classList.add('show'));
    clearTimeout(idle);
    idle = setTimeout(() => chrome.forEach(c => c.classList.remove('show')), 2600);
  }
  ['mousemove', 'keydown', 'click', 'touchstart'].forEach(ev => addEventListener(ev, wake));
  wake();

  let tx = null;
  addEventListener('touchstart', e => tx = e.touches[0].clientX, {passive: true});
  addEventListener('touchend', e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 48) go(dx < 0 ? cur + 1 : cur - 1);
    tx = null;
  }, {passive: true});

  const hashIndex = () => {
    const n = parseInt(location.hash.slice(1), 10);
    return Number.isFinite(n) && n >= 1 ? n - 1 : 0;
  };
  addEventListener('hashchange', () => { if (hashIndex() !== cur) go(hashIndex()); });
  go(hashIndex(), true);
}
