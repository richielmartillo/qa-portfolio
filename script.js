'use strict';
document.documentElement.classList.add('js');
const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.menu-toggle');
toggle.hidden = false;
function closeMenu(restoreFocus = false) {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
  if (restoreFocus) toggle.focus();
}
closeMenu();
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  closeMenu();
  document.querySelector(link.hash)?.querySelector('h2')?.setAttribute('tabindex', '-1');
  document.querySelector(link.hash)?.querySelector('h2')?.focus({ preventScroll: true });
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-wrap')) closeMenu();
});
matchMedia('(min-width: 781px)').addEventListener('change', () => closeMenu());
document.querySelector('#current-year').textContent = new Date().getFullYear();
const filters = document.querySelector('.filters');
filters.hidden = false;
const cards = [...document.querySelectorAll('.project-card')];
filters.addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
  const count = cards.filter(card => !card.hidden).length;
  document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'projeto exibido' : 'projetos exibidos'}.`;
});
// Animation is decorative; a static role remains available when motion is reduced.
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const animationButton = document.createElement('button');
animationButton.type = 'button';
animationButton.className = 'motion-toggle';
animationButton.setAttribute('aria-pressed', 'false');
document.querySelector('.hero-copy').append(animationButton);
const roles = ['QA Tester', 'Test Automation', 'API Testing', 'Mobile Testing', 'Performance Testing', 'Continuous Integration'];
const typed = document.querySelector('#typed-role');
const canvas = document.querySelector('#matrix');
const context = canvas.getContext('2d');
let paused = false, visible = true, timer, frame, drops = [], width = 0, height = 0, lastDraw = 0;
let roleIndex = 0, character = roles[0].length, deleting = true;
function canAnimate() { return !paused && !motion.matches && !document.hidden && visible; }
function type() {
  if (!canAnimate()) return;
  const word = roles[roleIndex];
  character += deleting ? -1 : 1;
  typed.textContent = word.slice(0, character);
  let delay = deleting ? 45 : 85;
  if (character === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 280; }
  else if (!deleting && character === word.length) { deleting = true; delay = 1900; }
  timer = setTimeout(type, delay);
}
function resizeCanvas() {
  width = Math.round(canvas.clientWidth); height = Math.round(canvas.clientHeight);
  const ratio = Math.min(devicePixelRatio || 1, 1.5);
  canvas.width = width * ratio; canvas.height = height * ratio;
  if (context) context.setTransform(ratio, 0, 0, ratio, 0, 0);
  drops = Array.from({ length: Math.ceil(width / 24) }, () => Math.random() * -35);
}
function draw(now) {
  if (!canAnimate() || !context) return;
  if (now - lastDraw > 85) {
    lastDraw = now;
    context.fillStyle = 'rgba(5,7,10,.1)'; context.fillRect(0, 0, width, height);
    context.fillStyle = '#00ff88'; context.font = '12px monospace';
    drops.forEach((drop, index) => {
      context.fillText('01アイウエカキクケ'[Math.floor(Math.random() * 10)], index * 24, drop * 20);
      drops[index] = drop * 20 > height && Math.random() > .98 ? 0 : drop + .45;
    });
  }
  frame = requestAnimationFrame(draw);
}
function updateAnimations() {
  clearTimeout(timer); cancelAnimationFrame(frame);
  document.body.classList.toggle('effects-paused', paused || motion.matches);
  animationButton.textContent = paused ? 'Retomar efeitos visuais' : 'Pausar efeitos visuais';
  animationButton.setAttribute('aria-pressed', String(paused));
  animationButton.hidden = motion.matches;
  canvas.hidden = paused || motion.matches;
  if (motion.matches) { typed.textContent = roles[0]; roleIndex = 0; character = roles[0].length; deleting = true; }
  if (canAnimate()) { timer = setTimeout(type, 1700); frame = requestAnimationFrame(draw); }
}
animationButton.addEventListener('click', () => { paused = !paused; updateAnimations(); });
motion.addEventListener('change', updateAnimations);
document.addEventListener('visibilitychange', updateAnimations);
new IntersectionObserver(entries => { visible = entries[0].isIntersecting; updateAnimations(); }).observe(document.querySelector('.hero'));
new ResizeObserver(resizeCanvas).observe(canvas);
resizeCanvas(); updateAnimations();
