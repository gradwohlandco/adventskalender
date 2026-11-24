// js/script.js – Advent Calendar Logic

const calendarEl = document.getElementById('calendar');
const countdownSec = document.getElementById('countdown-section');
const countdownDay = document.getElementById('countdown-days');
const modal = document.getElementById('modal');
const modalDay = document.getElementById('modal-day');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');
const toast = document.getElementById('toast');
const themeToggle = document.getElementById('theme-toggle');
const adminBadge = document.getElementById('admin-badge');
const progressSection = document.getElementById('progress-section');
const progressFill = document.getElementById('progress-fill');
const progressOpened = document.getElementById('progress-opened');

// ─── Helpers ────────────────────────────────────────────────────────────────
const STORAGE_KEY = `ac_opened_${new Date().getFullYear()}`;
const THEME_KEY = 'ac_theme';

function getOpened() {
  if (isAdmin()) return [];
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { return []; }
}
function saveOpened(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function isDecember() {
  return new Date().getMonth() === 11;
}
function todayDay() {
  return new Date().getDate();
}
function isAdmin() {
  return new URLSearchParams(window.location.search).has('admin');
}

function daysUntilDec() {
  const now = new Date();
  const year = now.getFullYear();
  let dec1 = new Date(year, 11, 1);
  if (now >= dec1) dec1 = new Date(year + 1, 11, 1);
  return Math.ceil((dec1 - now) / 86_400_000);
}

// ─── Theme ───────────────────────────────────────────────────────────────────

function initTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = stored || (prefersLight ? 'light' : 'dark');
  applyTheme(theme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
}

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

// ─── Toast ───────────────────────────────────────────────────────────────────

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove('hidden');
  toast.classList.add('visible');
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 2200);
}

// ─── Modal ───────────────────────────────────────────────────────────────────

function openModal(num) {
  const story = STORIES[num - 1] || { title: `Tag ${num}`, text: '' };
  modalDay.textContent = `${num}. Dezember`;
  modalTitle.textContent = story.title;
  modalText.textContent = story.text;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => modal.classList.add('open'));
}

function closeModal() {
  modal.classList.remove('open');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 350);
}

modalClose.addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', e => {
  if (e.target.classList.contains('modal-backdrop')) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── Progress ────────────────────────────────────────────────────────────────

function updateProgress(opened) {
  const count = opened.length;
  progressOpened.textContent = count;
  progressFill.style.width = `${(count / 24) * 100}%`;
}

// ─── Calendar Build ──────────────────────────────────────────────────────────

function buildCalendar() {
  const opened = getOpened();
  const day = isDecember() ? todayDay() : 0;
  const admin = isAdmin();

  if (admin) adminBadge.classList.remove('hidden');
  updateProgress(opened);

  // Shuffle door order for a non-linear layout (deterministic per year)
  const seed = new Date().getFullYear();
  const order = shuffle([...Array(24)].map((_, i) => i + 1), seed);

  order.forEach((num, idx) => {
    const unlocked = admin || (isDecember() && num <= day);
    const alreadyOpen = opened.includes(num);

    const door = document.createElement('div');
    door.className = 'door';
    door.style.animationDelay = `${idx * 30}ms`;
    if (alreadyOpen) door.classList.add('is-open');
    if (!unlocked) door.classList.add('is-locked');

    door.innerHTML = `
      <div class="door-inner">
        <div class="door-face door-front">
          <span class="door-num">${num}</span>
          <span class="door-star">✦</span>
        </div>
        <div class="door-face door-back">
          <span class="door-back-icon">🎄</span>
        </div>
      </div>
    `;

    door.addEventListener('click', () => {
      if (!unlocked) {
        door.classList.add('shake');
        setTimeout(() => door.classList.remove('shake'), 500);
        showToast(`Türchen ${num} öffnet am ${num}. Dezember 🔒`);
        return;
      }
      // Mark opened
      if (!alreadyOpen) {
        opened.push(num);
        if (!admin) saveOpened(opened);
        updateProgress(opened);
        door.classList.add('is-open');
        door.classList.add('just-opened');
        spawnParticles(door);
        setTimeout(() => door.classList.remove('just-opened'), 800);
        // optional audio
        try { new Audio('assets/open.wav').play(); } catch { }
      }
      openModal(num);
    });

    calendarEl.appendChild(door);
  });
}

// ─── Deterministic shuffle (Fisher-Yates with seeded LCG) ────────────────────

function shuffle(arr, seed) {
  let s = seed;
  const rand = () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ─── Particle burst ──────────────────────────────────────────────────────────

function spawnParticles(el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ['#6366f1', '#a855f7', '#22d3ee', '#f5c84c'];
  const count = 12;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.background = colors[i % colors.length];
    const angle = (360 / count) * i * (Math.PI / 180);
    const dist = 60 + Math.random() * 50;
    p.style.left = `${cx}px`;
    p.style.top = `${cy}px`;
    p.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
    p.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 850);
  }
}

// ─── Snow ─────────────────────────────────────────────────────────────────────

function initSnow() {
  const canvas = document.getElementById('snow');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const flakes = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2.2 + 0.5,
    speed: Math.random() * 0.6 + 0.2,
    drift: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.4 + 0.15
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const light = document.documentElement.getAttribute('data-theme') === 'light';
    flakes.forEach(f => {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = light
        ? `rgba(90,90,120,${f.opacity})`
        : `rgba(255,255,255,${f.opacity})`;
      ctx.fill();
      f.y += f.speed;
      f.x += f.drift;
      if (f.y > canvas.height) { f.y = -5; f.x = Math.random() * canvas.width; }
      if (f.x > canvas.width) f.x = 0;
      if (f.x < 0) f.x = canvas.width;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ─── Stars background ─────────────────────────────────────────────────────────

function initStars() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 70; i++) {
    const s = document.createElement('span');
    s.className = 'star';
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${Math.random() * 100}%`;
    s.style.animationDelay = `${Math.random() * 4}s`;
    s.style.animationDuration = `${2 + Math.random() * 3}s`;
    s.style.width = `${Math.random() * 2 + 1}px`;
    s.style.height = s.style.width;
    container.appendChild(s);
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────

function init() {
  initTheme();
  initStars();
  initSnow();

  if (!isDecember() && !isAdmin()) {
    countdownDay.textContent = daysUntilDec();
    countdownSec.classList.remove('hidden');
    progressSection.classList.add('hidden');
  }

  buildCalendar();
}

document.addEventListener('DOMContentLoaded', init);
