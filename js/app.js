/* ============================================================
   CONCOURS ATTACHÉ TERRITORIAL – Application principale
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Navigation ---------- */
  const pages = {};
  document.querySelectorAll('.page-section').forEach(el => {
    pages[el.id] = el;
  });

  function showPage(id) {
    const target = pages[id] || pages['home'];
    Object.values(pages).forEach(p => p.classList.remove('active'));
    target.classList.add('active');
    // Sidebar active link
    document.querySelectorAll('.chapter-link, .nav-home').forEach(a => a.classList.remove('active'));
    const link = document.querySelector(`[data-page="${target.id}"]`);
    if (link) {
      link.classList.add('active');
      // Auto-open parent part
      const chapterList = link.closest('.chapter-list');
      if (chapterList) {
        chapterList.classList.add('open');
        const header = chapterList.previousElementSibling;
        if (header) header.classList.add('open');
      }
    }
    window.scrollTo(0, 0);
    // Update breadcrumb
    updateBreadcrumb(target.id);
    // Update URL hash
    history.replaceState(null, '', '#' + target.id);
  }

  function updateBreadcrumb(id) {
    const bc = document.getElementById('breadcrumb');
    if (!bc) return;
    const el = document.querySelector(`[data-page="${id}"]`);
    const title = el ? el.textContent.trim() : id;
    bc.innerHTML = `<a href="#" data-page="home">Accueil</a>
      <span class="sep">›</span>
      <span>${title}</span>`;
  }

  // Event delegation for navigation
  document.addEventListener('click', function (e) {
    const a = e.target.closest('[data-page]');
    if (a) {
      e.preventDefault();
      showPage(a.dataset.page);
    }
    // Part header toggle
    const ph = e.target.closest('.part-header');
    if (ph) {
      ph.classList.toggle('open');
      const list = ph.nextElementSibling;
      if (list) list.classList.toggle('open');
    }
    // Hamburger
    if (e.target.closest('.hamburger')) {
      document.querySelector('.sidebar').classList.toggle('open');
    }
    // Close sidebar on mobile when link clicked
    if (e.target.closest('.chapter-link') && window.innerWidth < 900) {
      document.querySelector('.sidebar').classList.remove('open');
    }
  });

  /* ---------- Corrigés toggle ---------- */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.cas-corrige-toggle, .mes-toggle');
    if (!btn) return;
    const target = btn.parentElement.querySelector('.cas-corrige, .mes-corrige');
    if (!target) return;
    target.classList.toggle('show');
    btn.textContent = target.classList.contains('show') ? '▲ Masquer le corrigé' : '▼ Voir le corrigé';
  });

  /* ---------- Quiz ---------- */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.quiz-btn');
    if (!btn) return;
    const quizSection = btn.closest('.quiz-section');
    if (!quizSection) return;
    const answers = quizSection.querySelectorAll('.quiz-answer');
    answers.forEach(a => a.classList.add('show'));
    // Score
    let score = 0;
    let total = 0;
    quizSection.querySelectorAll('.quiz-question').forEach(q => {
      total++;
      const selected = q.querySelector('input[type="radio"]:checked');
      const correctAnswer = q.querySelector('.quiz-answer');
      if (selected && correctAnswer) {
        if (selected.value === correctAnswer.dataset.correct) score++;
      }
    });
    const scoreEl = quizSection.querySelector('.score-display');
    if (scoreEl) {
      scoreEl.querySelector('.score-num').textContent = score + '/' + total;
      scoreEl.style.display = 'block';
    }
    btn.textContent = '✓ Résultats affichés';
    btn.disabled = true;
  });

  /* ---------- Progress / Done tracking ---------- */
  function loadProgress() {
    const done = JSON.parse(localStorage.getItem('concours_done') || '[]');
    done.forEach(id => {
      const link = document.querySelector(`.chapter-link[data-page="${id}"]`);
      if (link) link.classList.add('done');
    });
    updateProgressBar();
  }

  function markDone(id) {
    const done = JSON.parse(localStorage.getItem('concours_done') || '[]');
    if (!done.includes(id)) {
      done.push(id);
      localStorage.setItem('concours_done', JSON.stringify(done));
    }
    const link = document.querySelector(`.chapter-link[data-page="${id}"]`);
    if (link) link.classList.add('done');
    updateProgressBar();
  }

  function updateProgressBar() {
    const total = document.querySelectorAll('.chapter-link').length;
    const done = document.querySelectorAll('.chapter-link.done').length;
    const fill = document.querySelector('.progress-fill');
    const pct = document.querySelector('.progress-pct');
    if (fill) fill.style.width = (total > 0 ? Math.round(done / total * 100) : 0) + '%';
    if (pct) pct.textContent = done + '/' + total;
  }

  // Mark done button
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.mark-done-btn');
    if (!btn) return;
    const id = btn.dataset.chapter;
    markDone(id);
    btn.textContent = '✓ Chapitre terminé !';
    btn.disabled = true;
    btn.style.background = 'var(--success)';
  });

  /* ---------- Hash routing on load ---------- */
  function init() {
    const hash = window.location.hash.slice(1);
    if (hash && pages[hash]) {
      showPage(hash);
    } else {
      showPage('home');
    }
    loadProgress();
    // Open first part by default
    const firstPart = document.querySelector('.part-header');
    if (firstPart) {
      firstPart.classList.add('open');
      const list = firstPart.nextElementSibling;
      if (list) list.classList.add('open');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ---------- Smooth anchor links ---------- */
  window.addEventListener('hashchange', function () {
    const hash = window.location.hash.slice(1);
    if (pages[hash]) showPage(hash);
  });

  /* ---------- Planner: filter by phase ---------- */
  document.addEventListener('change', function (e) {
    if (!e.target.closest('#phase-filter')) return;
    const val = e.target.value;
    document.querySelectorAll('.week-block').forEach(w => {
      if (!val || w.dataset.phase === val) {
        w.style.display = '';
      } else {
        w.style.display = 'none';
      }
    });
  });

})();
