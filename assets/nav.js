/* The three views, named once. Every page draws its switcher from this list,
   so a rename happens here and nowhere else. */
const VIEWS = [
  {id: 'script', href: 'index.html', label: 'Script',
   blurb: 'Every slide with what is said over it, the numbers behind it and the answer if a judge presses.'},
  {id: 'slides', href: 'show.html', label: 'Slides',
   blurb: 'The slides, whole, one click at a time. This is the view to present from.'},
  {id: 'notes',  href: 'notes.html', label: 'Slides + script',
   blurb: 'One slide at a time with its script beside it, and who says it. The view to rehearse from.'}
];

function viewSwitcher(current) {
  return `<nav class="vsw" aria-label="View">` +
    VIEWS.map(v => `<a href="${v.href}"${v.id === current ? ' aria-current="page"' : ''}>${v.label}</a>`).join('') +
    `</nav>`;
}
