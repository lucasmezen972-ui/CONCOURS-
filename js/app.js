/* ============================================================
   CONCOURS ATTACHÉ TERRITORIAL – Application v2.0
   Corrections : navigation SPA robuste (sections injectées
   dynamiquement), tableau de bord, recherche globale,
   simulation orale, quiz amélioré.
   ============================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────
     NAVIGATION SPA ROBUSTE
     On utilise document.getElementById() au moment du clic
     plutôt qu'un cache figé au démarrage, ce qui permet de
     trouver les sections injectées par les fichiers content/*.js.
  ────────────────────────────────────────────────────────── */
  function showPage(id) {
    const target = document.getElementById(id) || document.getElementById('home');
    if (!target) return;

    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    target.classList.add('active');

    document.querySelectorAll('.chapter-link, .nav-home, .nav-link').forEach(a => a.classList.remove('active'));
    const link = document.querySelector(`[data-page="${target.id}"]`);
    if (link) {
      link.classList.add('active');
      const chapterList = link.closest('.chapter-list');
      if (chapterList) {
        chapterList.classList.add('open');
        const header = chapterList.previousElementSibling;
        if (header) header.classList.add('open');
      }
    }

    window.scrollTo(0, 0);
    updateBreadcrumb(target.id);
    history.replaceState(null, '', '#' + target.id);

    if (target.id === 'dashboard') refreshDashboard();
    if (target.id === 'recherche' || target.id === 'banque-jury') buildSearchIndex();
  }

  /* Exposer pour les onclick inline du sommaire */
  window._showPage = showPage;

  function updateBreadcrumb(id) {
    const bc = document.getElementById('breadcrumb');
    if (!bc) return;
    const el = document.querySelector(`[data-page="${id}"]`);
    const title = el ? el.textContent.trim() : id;
    bc.innerHTML = `<a href="#" data-page="home">Accueil</a>
      <span class="sep">›</span><span>${title}</span>`;
  }

  /* ──────────────────────────────────────────────────────────
     DÉLÉGATION D'ÉVÉNEMENTS – Navigation
  ────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    const a = e.target.closest('[data-page]');
    if (a && !e.target.closest('.hsd-item')) {
      e.preventDefault();
      showPage(a.dataset.page);
    }

    const ph = e.target.closest('.part-header');
    if (ph) {
      ph.classList.toggle('open');
      const list = ph.nextElementSibling;
      if (list) list.classList.toggle('open');
    }

    if (e.target.closest('.chapter-link') && window.innerWidth < 900) {
      const sb = document.querySelector('.sidebar');
      const ov = document.getElementById('sidebar-overlay');
      if (sb) sb.classList.remove('open');
      if (ov) ov.classList.remove('active');
    }
  });

  /* ──────────────────────────────────────────────────────────
     CORRIGÉS TOGGLE
  ────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.cas-corrige-toggle, .mes-toggle');
    if (!btn) return;
    const target = btn.parentElement.querySelector('.cas-corrige, .mes-corrige');
    if (!target) return;
    target.classList.toggle('show');
    btn.textContent = target.classList.contains('show') ? '▲ Masquer le corrigé' : '▼ Voir le corrigé';
  });

  /* ──────────────────────────────────────────────────────────
     QUIZ – Score, feedback, historique, rejouer
  ────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    /* Soumettre */
    const btn = e.target.closest('.quiz-btn');
    if (btn) {
      const qs = btn.closest('.quiz-section');
      if (!qs) return;

      qs.querySelectorAll('.quiz-answer').forEach(a => a.classList.add('show'));

      let score = 0, total = 0;
      qs.querySelectorAll('.quiz-question').forEach(q => {
        total++;
        const sel = q.querySelector('input[type="radio"]:checked');
        const cor = q.querySelector('.quiz-answer');
        if (sel && cor && sel.value === cor.dataset.correct) score++;
        if (cor) {
          const correctLetter = cor.dataset.correct;
          q.querySelectorAll('input[type="radio"]').forEach(inp => {
            const lbl = inp.closest('label');
            if (!lbl) return;
            if (inp.value === correctLetter) lbl.classList.add('quiz-opt-correct');
            else if (inp.checked) lbl.classList.add('quiz-opt-wrong');
          });
        }
      });

      const pct = total > 0 ? Math.round(score / total * 100) : 0;
      const scoreEl = qs.querySelector('.score-display');
      if (scoreEl) {
        scoreEl.querySelector('.score-num').textContent = `${score}/${total}`;
        const msg = scoreEl.querySelector('.score-msg');
        if (msg) {
          if (pct >= 80) { msg.textContent = '🎉 Excellent ! Objectif atteint.'; msg.style.color = 'var(--success)'; }
          else if (pct >= 60) { msg.textContent = '👍 Bien ! Quelques points à revoir.'; msg.style.color = 'var(--warning)'; }
          else { msg.textContent = '📚 À retravailler – relisez le cours.'; msg.style.color = 'var(--danger)'; }
        }
        scoreEl.style.display = 'block';
      }

      const pageSection = qs.closest('.page-section');
      if (pageSection) saveQuizResult(pageSection.id, score, total);

      btn.textContent = '✓ Résultats affichés';
      btn.disabled = true;
      const replay = qs.querySelector('.quiz-replay-btn');
      if (replay) replay.style.display = 'inline-block';
    }

    /* Rejouer */
    const replay = e.target.closest('.quiz-replay-btn');
    if (replay) {
      const qs = replay.closest('.quiz-section');
      if (!qs) return;
      qs.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
      qs.querySelectorAll('.quiz-answer').forEach(a => a.classList.remove('show'));
      qs.querySelectorAll('.quiz-opt-correct, .quiz-opt-wrong').forEach(l => l.classList.remove('quiz-opt-correct', 'quiz-opt-wrong'));
      const scoreEl = qs.querySelector('.score-display');
      if (scoreEl) scoreEl.style.display = 'none';
      const sub = qs.querySelector('.quiz-btn');
      if (sub) { sub.textContent = 'Vérifier mes réponses'; sub.disabled = false; }
      replay.style.display = 'none';
    }
  });

  function saveQuizResult(chapterId, score, total) {
    const data = JSON.parse(localStorage.getItem('concours_quiz') || '{}');
    if (!data[chapterId]) data[chapterId] = [];
    data[chapterId].push({ date: new Date().toISOString(), score, total, pct: Math.round(score / total * 100) });
    if (data[chapterId].length > 5) data[chapterId] = data[chapterId].slice(-5);
    localStorage.setItem('concours_quiz', JSON.stringify(data));
  }

  /* ──────────────────────────────────────────────────────────
     PROGRESSION – Mark done + barre
  ────────────────────────────────────────────────────────── */
  function loadProgress() {
    const done = JSON.parse(localStorage.getItem('concours_done') || '[]');
    done.forEach(id => {
      const link = document.querySelector(`.chapter-link[data-page="${id}"]`);
      if (link) link.classList.add('done');
      const btn = document.querySelector(`.mark-done-btn[data-chapter="${id}"]`);
      if (btn) { btn.textContent = '✓ Chapitre terminé !'; btn.disabled = true; btn.style.background = 'var(--success)'; }
    });
    updateProgressBar();
  }

  function markDone(id) {
    const done = JSON.parse(localStorage.getItem('concours_done') || '[]');
    if (!done.includes(id)) { done.push(id); localStorage.setItem('concours_done', JSON.stringify(done)); }
    const link = document.querySelector(`.chapter-link[data-page="${id}"]`);
    if (link) link.classList.add('done');
    updateProgressBar();
  }

  function updateProgressBar() {
    const all = document.querySelectorAll('.chapter-link');
    const done = document.querySelectorAll('.chapter-link.done');
    const fill = document.querySelector('.progress-fill');
    const pct = document.querySelector('.progress-pct');
    const total = all.length;
    const doneN = done.length;
    if (fill) fill.style.width = (total > 0 ? Math.round(doneN / total * 100) : 0) + '%';
    if (pct) pct.textContent = `${doneN}/${total}`;
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.mark-done-btn');
    if (!btn) return;
    markDone(btn.dataset.chapter);
    btn.textContent = '✓ Chapitre terminé !';
    btn.disabled = true;
    btn.style.background = 'var(--success)';
  });

  /* ──────────────────────────────────────────────────────────
     TABLEAU DE BORD
  ────────────────────────────────────────────────────────── */
  function refreshDashboard() {
    const done = JSON.parse(localStorage.getItem('concours_done') || '[]');
    const quizData = JSON.parse(localStorage.getItem('concours_quiz') || '{}');
    const oralData = JSON.parse(localStorage.getItem('concours_oral') || '[]');

    const totalChapters = document.querySelectorAll('.chapter-link').length;
    const doneCount = done.length;
    const progPct = totalChapters > 0 ? Math.round(doneCount / totalChapters * 100) : 0;

    let quizTotal = 0, quizOk = 0, quizKo = 0, quizSum = 0;
    Object.values(quizData).forEach(arr => arr.forEach(r => {
      quizTotal++;
      r.pct >= 70 ? quizOk++ : quizKo++;
      quizSum += r.pct;
    }));
    const avgQuiz = quizTotal > 0 ? Math.round(quizSum / quizTotal) : 0;

    const avgOral = oralData.length > 0
      ? Math.round(oralData.reduce((a, b) => a + b.score, 0) / oralData.length * 20) : 0;

    let niveau = '🔰 Débutant', niveauColor = '#c62828';
    if (progPct >= 80 && avgQuiz >= 70) { niveau = '🏆 Expert'; niveauColor = '#2e7d32'; }
    else if (progPct >= 60 || avgQuiz >= 70) { niveau = '⭐ Avancé'; niveauColor = '#1565c0'; }
    else if (progPct >= 30 || avgQuiz >= 50) { niveau = '📈 Intermédiaire'; niveauColor = '#e65100'; }

    const hoursLeft = ((totalChapters - doneCount) * 1.5).toFixed(0);

    const db = document.getElementById('dashboard');
    if (!db) return;

    const set = (id, val) => { const el = db.querySelector('#' + id); if (el) el.textContent = val; };
    set('db-pct', progPct + '%');
    set('db-done', `${doneCount} / ${totalChapters}`);
    set('db-quiz-ok', quizOk);
    set('db-quiz-ko', quizKo);
    set('db-avg-quiz', avgQuiz > 0 ? avgQuiz + '%' : '—');
    set('db-temps', hoursLeft + 'h estimées');
    set('db-oral-avg', avgOral > 0 ? avgOral + '/20' : '—');

    const niv = db.querySelector('#db-niveau');
    if (niv) { niv.textContent = niveau; niv.style.color = niveauColor; }

    const fill = db.querySelector('.db-main-fill');
    if (fill) fill.style.width = progPct + '%';

    /* Graphique par partie */
    const chart = db.querySelector('#db-parts-chart');
    if (chart) {
      const parts = [
        { label: 'P1 – Environnement territorial', prefix: 'p1', total: 6, color: '#2460a7' },
        { label: 'P2 – Droit public', prefix: 'p2', total: 4, color: '#1a3a5c' },
        { label: 'P3 – Finances publiques', prefix: 'p3', total: 3, color: '#2e7d32' },
        { label: 'P4 – RH & Management', prefix: 'p4', total: 4, color: '#e65100' },
        { label: 'P5 – Méthodologie', prefix: 'p5', total: 4, color: '#6a1b9a' },
        { label: 'P6 – Oral', prefix: 'p6', total: 3, color: '#00695c' },
        { label: 'P7 – Actualités', prefix: 'p7', total: 3, color: '#4527a0' },
        { label: 'P8 – Martinique', prefix: 'p8', total: 3, color: '#c8960c' }
      ];
      chart.innerHTML = parts.map(p => {
        const dc = done.filter(id => id.startsWith(p.prefix)).length;
        const pc = p.total > 0 ? Math.round(dc / p.total * 100) : 0;
        return `<div class="dbc-row">
          <div class="dbc-label">${p.label}</div>
          <div class="dbc-track"><div class="dbc-fill" style="width:${pc}%;background:${p.color}"></div></div>
          <div class="dbc-val">${dc}/${p.total}</div>
        </div>`;
      }).join('');
    }

    /* Historique quiz */
    const hist = db.querySelector('#db-quiz-history');
    if (hist) {
      const entries = [];
      Object.entries(quizData).forEach(([chapId, results]) => {
        if (results.length) {
          const last = results[results.length - 1];
          const lnk = document.querySelector(`[data-page="${chapId}"]`);
          entries.push({ chapId, title: lnk ? lnk.textContent.trim() : chapId, ...last });
        }
      });
      entries.sort((a, b) => new Date(b.date) - new Date(a.date));
      hist.innerHTML = entries.length
        ? entries.slice(0, 8).map(e => {
            const color = e.pct >= 70 ? 'var(--success)' : e.pct >= 50 ? 'var(--warning)' : 'var(--danger)';
            const date = new Date(e.date).toLocaleDateString('fr-FR');
            return `<div class="db-hist-item">
              <a href="#" data-page="${e.chapId}" class="db-hist-title">${e.title}</a>
              <span class="db-hist-score" style="color:${color}">${e.score}/${e.total} · ${e.pct}%</span>
              <span class="db-hist-date">${date}</span>
            </div>`;
          }).join('')
        : '<p class="db-empty">Aucun quiz effectué pour l\'instant.</p>';
    }

    /* Conseils personnalisés */
    const tips = db.querySelector('#db-tips');
    if (tips) {
      let tip = '';
      if (progPct === 0) tip = '💡 Commencez par la Partie 1, Chapitre 1 : L\'organisation administrative française.';
      else if (progPct < 30) tip = '💡 Bon début ! Continuez à progresser dans les Parties 1 et 2 – le socle institutionnel.';
      else if (progPct < 60) tip = '💡 Vous avancez bien ! Pensez à faire les quiz pour ancrer les connaissances.';
      else if (progPct < 80) tip = '💡 Excellent niveau ! Focalisez-vous sur la Martinique et la simulation orale.';
      else tip = '💡 Très bon niveau global ! Passez en mode révision intensive avec les annales.';
      tips.textContent = tip;
    }

    /* Historique Examens Blancs */
    const ebHist = db.querySelector('#db-examen-history');
    if (ebHist) {
      const ebData = JSON.parse(localStorage.getItem('concours_examen') || '[]');
      if (ebData.length === 0) {
        ebHist.innerHTML = '<p class="db-empty">Aucun examen blanc effectué pour l\'instant.</p>';
      } else {
        const recent = ebData.slice(-5).reverse();
        ebHist.innerHTML = recent.map(e => {
          const color = e.pct >= 70 ? 'var(--success)' : e.pct >= 50 ? 'var(--warning)' : 'var(--danger)';
          const date = new Date(e.date).toLocaleDateString('fr-FR');
          return `<div class="db-hist-item">
            <span class="db-hist-title">Examen blanc – ${e.total} questions</span>
            <span class="db-hist-score" style="color:${color}">${e.score}/${e.total} · ${e.pct}%</span>
            <span class="db-hist-date">${date}</span>
          </div>`;
        }).join('');
      }
    }

    /* Streak et dernière visite */
    (function () {
      const today = new Date().toISOString().slice(0, 10);
      const hist = JSON.parse(localStorage.getItem('concours_visit_hist') || '[]');
      if (!hist.includes(today)) {
        hist.push(today);
        if (hist.length > 90) hist.splice(0, hist.length - 90);
        localStorage.setItem('concours_visit_hist', JSON.stringify(hist));
      }
      /* Calculer la streak */
      let streak = 0;
      const sorted = hist.slice().sort().reverse();
      let prev = today;
      for (const d of sorted) {
        const diff = (new Date(prev) - new Date(d)) / 86400000;
        if (diff <= 1) { streak++; prev = d; }
        else break;
      }
      const sv = db.querySelector('#db-streak-val');
      const lv = db.querySelector('#db-last-visit');
      if (sv) sv.textContent = streak;
      if (lv) {
        const last = sorted[0];
        const daysAgo = Math.round((new Date(today) - new Date(last)) / 86400000);
        lv.textContent = daysAgo === 0 ? "Aujourd'hui" : daysAgo === 1 ? 'Hier' : `il y a ${daysAgo}j`;
      }
    }());

    /* Chapitres faibles */
    const weak = db.querySelector('#db-weak-chapters');
    if (weak) {
      const weakList = [];
      Object.entries(quizData).forEach(([chapId, results]) => {
        if (!results.length) return;
        const last = results[results.length - 1];
        if (last.pct < 70) {
          const lnk = document.querySelector(`[data-page="${chapId}"]`);
          weakList.push({ chapId, title: lnk ? lnk.textContent.trim() : chapId, pct: last.pct });
        }
      });
      weakList.sort((a, b) => a.pct - b.pct);
      weak.innerHTML = weakList.length
        ? weakList.slice(0, 6).map(e => {
            const color = e.pct >= 50 ? 'var(--warning)' : 'var(--danger)';
            return `<div class="db-hist-item">
              <a href="#" data-page="${e.chapId}" class="db-hist-title">${e.title}</a>
              <span class="db-hist-score" style="color:${color}">Score : ${e.pct}%</span>
            </div>`;
          }).join('')
        : '<p class="db-empty">Aucun chapitre faible détecté. Continuez les quiz !</p>';
    }
  }

  /* ──────────────────────────────────────────────────────────
     RECHERCHE GLOBALE
  ────────────────────────────────────────────────────────── */
  let searchIndex = null;

  function buildSearchIndex() {
    if (searchIndex) return;
    searchIndex = [];
    document.querySelectorAll('.page-section').forEach(section => {
      const id = section.id;
      if (id === 'recherche' || id === 'dashboard' || id === 'simulation-orale') return;
      const lnk = document.querySelector(`[data-page="${id}"]`);
      const pageTitle = lnk ? lnk.textContent.trim() : id;
      const selectors = 'h1,h2,h3,.def-title,.fiche-item,.jq-q,.quiz-q,.kp-title,.cas-context,.cas-header,.martinique-box h3';
      section.querySelectorAll(selectors).forEach(el => {
        const text = el.textContent.trim();
        if (text.length < 8) return;
        let type = 'Contenu';
        if (el.tagName === 'H1') type = 'Titre';
        else if (el.tagName === 'H2') type = 'Section';
        else if (el.tagName === 'H3') type = 'Sous-titre';
        else if (el.classList.contains('def-title')) type = 'Définition';
        else if (el.classList.contains('jq-q')) type = 'Question jury';
        else if (el.classList.contains('quiz-q')) type = 'Quiz';
        else if (el.classList.contains('fiche-item')) type = 'Fiche synthèse';
        searchIndex.push({ pageId: id, pageTitle, text: text.substring(0, 200), type });
      });
    });
  }

  function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function performSearch(query) {
    if (!query || query.length < 2) return [];
    const q = normalize(query);
    return searchIndex.filter(item => normalize(item.text).includes(q)).slice(0, 40);
  }

  /* Dropdown header */
  document.addEventListener('input', function (e) {
    if (!e.target.matches('#global-search-input')) return;
    if (!searchIndex) buildSearchIndex();
    const query = e.target.value.trim();
    const dd = document.getElementById('header-search-dropdown');
    if (!dd) return;
    const results = performSearch(query);
    if (!query || query.length < 2) { dd.classList.remove('active'); return; }
    dd.classList.add('active');
    dd.innerHTML = results.length === 0
      ? '<div class="hsd-empty">Aucun résultat</div>'
      : results.slice(0, 8).map(r =>
          `<div class="hsd-item" data-page="${r.pageId}">
            <span class="hsd-badge">${r.type}</span>
            <span class="hsd-text">${r.text.substring(0, 65)}…</span>
            <span class="hsd-page">${r.pageTitle}</span>
          </div>`
        ).join('');
  });

  document.addEventListener('click', function (e) {
    const item = e.target.closest('.hsd-item');
    if (item) {
      e.preventDefault();
      showPage(item.dataset.page);
      const dd = document.getElementById('header-search-dropdown');
      if (dd) dd.classList.remove('active');
      const inp = document.getElementById('global-search-input');
      if (inp) inp.value = '';
      return;
    }
    if (!e.target.closest('.header-search-wrap')) {
      const dd = document.getElementById('header-search-dropdown');
      if (dd) dd.classList.remove('active');
    }
  });

  /* Page de recherche */
  document.addEventListener('input', function (e) {
    if (!e.target.matches('#search-page-input')) return;
    if (!searchIndex) buildSearchIndex();
    const query = e.target.value.trim();
    const container = document.getElementById('search-results-container');
    if (!container) return;
    const results = performSearch(query);
    if (!query || query.length < 2) { container.innerHTML = ''; return; }
    if (results.length === 0) {
      container.innerHTML = `<p class="search-no-result">Aucun résultat pour « ${query} »</p>`;
      return;
    }
    const grouped = {};
    results.forEach(r => {
      if (!grouped[r.pageId]) grouped[r.pageId] = { title: r.pageTitle, items: [] };
      grouped[r.pageId].items.push(r);
    });
    const esc = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(esc, 'gi');
    container.innerHTML = `<p class="search-count">${results.length} résultat(s) pour « ${query} »</p>`
      + Object.entries(grouped).map(([pageId, g]) =>
          `<div class="srg">
            <div class="srg-header"><a href="#" data-page="${pageId}">${g.title}</a></div>
            ${g.items.slice(0, 3).map(item =>
              `<div class="srg-item">
                <span class="srg-badge">${item.type}</span>
                <span class="srg-text">${item.text.replace(re, '<mark>$&</mark>')}</span>
              </div>`
            ).join('')}
          </div>`
        ).join('');
  });

  /* ──────────────────────────────────────────────────────────
     SIMULATION ORALE – Chronomètre + Questions aléatoires
  ────────────────────────────────────────────────────────── */
  let oralTimerId = null, oralSecsLeft = 120, oralPaused = false;

  function formatTime(s) {
    const abs = Math.abs(s);
    return (s < 0 ? '-' : '') +
      String(Math.floor(abs / 60)).padStart(2, '0') + ':' +
      String(abs % 60).padStart(2, '0');
  }

  function updateTimerDisplay() {
    const el = document.getElementById('oral-timer-display');
    if (!el) return;
    el.textContent = formatTime(oralSecsLeft);
    el.className = 'oral-timer-display' +
      (oralSecsLeft <= 0 ? ' timer-expired' : oralSecsLeft <= 30 ? ' timer-urgent' : '');
  }

  function drawOralQuestion() {
    const container = document.getElementById('oral-question-display');
    if (!container) return;
    const pool = window.BANQUE_JURY || [];
    if (!pool.length) {
      container.innerHTML = '<p class="oral-empty">Chargement des questions en cours…</p>';
      return;
    }
    const catSel = document.getElementById('oral-category-select');
    const cat = catSel ? catSel.value : 'all';
    const filtered = cat === 'all' ? pool : pool.filter(q => q.cat === cat);
    if (!filtered.length) { container.innerHTML = '<p class="oral-empty">Aucune question dans cette catégorie.</p>'; return; }
    const q = filtered[Math.floor(Math.random() * filtered.length)];
    const stars = '⭐'.repeat(q.diff || 2) + '☆'.repeat(Math.max(0, 3 - (q.diff || 2)));
    container.innerHTML = `
      <div class="oral-q-block">
        <div class="oral-q-meta">
          <span class="oral-q-cat">${q.cat}</span>
          <span class="oral-q-diff" title="Difficulté">${stars}</span>
        </div>
        <div class="oral-q-text">${q.question}</div>
        <div class="oral-q-actions">
          <button class="oral-show-answer oral-btn">💡 Voir les éléments de réponse</button>
        </div>
        <div class="oral-answer-block" style="display:none">
          <strong>Éléments clés à aborder :</strong>
          <ul>${(q.tips || []).map(t => `<li>${t}</li>`).join('')}</ul>
          ${q.exemple ? `<div class="oral-exemple"><strong>Formulation possible :</strong><br><em>${q.exemple}</em></div>` : ''}
        </div>
        <div class="oral-eval-section">
          <span class="oral-eval-label">Auto-évaluation :</span>
          <div class="oral-eval-stars">
            ${[1,2,3,4,5].map(v =>
              `<button class="oral-eval-star" data-val="${v}" title="${v}/5">⭐</button>`
            ).join('')}
          </div>
          <span id="oral-eval-feedback" class="oral-eval-feedback"></span>
        </div>
      </div>`;
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('#oral-draw-btn')) { drawOralQuestion(); return; }

    if (e.target.closest('#oral-start-btn')) {
      const sel = document.getElementById('oral-duration-select');
      oralSecsLeft = sel ? parseInt(sel.value) : 120;
      oralPaused = false;
      clearInterval(oralTimerId);
      updateTimerDisplay();
      oralTimerId = setInterval(() => {
        if (oralPaused) return;
        oralSecsLeft--;
        updateTimerDisplay();
        if (oralSecsLeft <= -30) clearInterval(oralTimerId);
      }, 1000);
      const pb = document.getElementById('oral-pause-btn');
      if (pb) pb.textContent = '⏸ Pause';
      return;
    }

    if (e.target.closest('#oral-pause-btn')) {
      oralPaused = !oralPaused;
      e.target.closest('#oral-pause-btn').textContent = oralPaused ? '▶ Reprendre' : '⏸ Pause';
      return;
    }

    if (e.target.closest('#oral-reset-btn')) {
      clearInterval(oralTimerId);
      oralPaused = false;
      const sel = document.getElementById('oral-duration-select');
      oralSecsLeft = sel ? parseInt(sel.value) : 120;
      updateTimerDisplay();
      const pb = document.getElementById('oral-pause-btn');
      if (pb) pb.textContent = '⏸ Pause';
      return;
    }

    if (e.target.closest('.oral-show-answer')) {
      const block = e.target.closest('.oral-q-block').querySelector('.oral-answer-block');
      if (block) {
        const visible = block.style.display !== 'none';
        block.style.display = visible ? 'none' : 'block';
        e.target.textContent = visible ? '💡 Voir les éléments de réponse' : '▲ Masquer';
      }
      return;
    }

    const star = e.target.closest('.oral-eval-star');
    if (star) {
      const score = parseInt(star.dataset.val);
      const stars = star.closest('.oral-eval-stars').querySelectorAll('.oral-eval-star');
      stars.forEach((s, i) => s.classList.toggle('active', i < score));
      saveOralEval(score);
      const fb = star.closest('.oral-q-block').querySelector('#oral-eval-feedback');
      if (fb) {
        const msgs = ['', '⚠️ À retravailler', '📚 Moyen – continuez', '👍 Correct', '⭐ Bien !', '🏆 Excellent !'];
        fb.textContent = msgs[score] || '';
        fb.style.color = score >= 4 ? 'var(--success)' : score >= 3 ? 'var(--warning)' : 'var(--danger)';
      }
    }
  });

  function saveOralEval(score) {
    const data = JSON.parse(localStorage.getItem('concours_oral') || '[]');
    data.push({ date: new Date().toISOString(), score });
    if (data.length > 100) data.splice(0, data.length - 100);
    localStorage.setItem('concours_oral', JSON.stringify(data));
  }

  /* ──────────────────────────────────────────────────────────
     INITIALISATION
     On utilise window.load (et non DOMContentLoaded) pour que
     tous les fichiers content/*.js aient injecté leurs sections
     avant que l'on tente la navigation par hash URL.
  ────────────────────────────────────────────────────────── */
  function init() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const target = document.getElementById(hash);
      if (target && target.classList.contains('page-section')) showPage(hash);
      else showPage('home');
    } else {
      showPage('home');
    }
    loadProgress();
    const firstPart = document.querySelector('.part-header');
    if (firstPart) {
      firstPart.classList.add('open');
      const list = firstPart.nextElementSibling;
      if (list) list.classList.add('open');
    }
  }

  window.addEventListener('load', init);

  window.addEventListener('hashchange', function () {
    const hash = window.location.hash.slice(1);
    const target = document.getElementById(hash);
    if (target && target.classList.contains('page-section')) showPage(hash);
  });

  /* ──────────────────────────────────────────────────────────
     FILTRE PHASE – Planning
  ────────────────────────────────────────────────────────── */
  document.addEventListener('change', function (e) {
    if (!e.target.closest('#phase-filter')) return;
    const val = e.target.value;
    document.querySelectorAll('.week-block').forEach(w => {
      w.style.display = (!val || w.dataset.phase === val) ? '' : 'none';
    });
  });

  /* ──────────────────────────────────────────────────────────
     SIDEBAR SEARCH – Filtrer les chapitres par nom
  ────────────────────────────────────────────────────────── */
  document.addEventListener('input', function (e) {
    if (!e.target.matches('#sidebar-search')) return;
    const q = e.target.value.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const links = document.querySelectorAll('.sidebar .chapter-link');
    links.forEach(link => {
      const text = link.textContent.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      const show = !q || text.includes(q);
      link.closest('li').style.display = show ? '' : 'none';
    });
    /* Afficher/masquer les sections vides */
    document.querySelectorAll('.sidebar .chapter-list').forEach(list => {
      const visible = list.querySelectorAll('li[style=""]').length || !q;
      const anyVisible = Array.from(list.querySelectorAll('li')).some(li => li.style.display !== 'none');
      list.closest('li')?.querySelector('.part-header') && (list.parentElement.style.display = anyVisible ? '' : 'none');
    });
  });

  /* ──────────────────────────────────────────────────────────
     NAVIGATION CLAVIER – ←/→ chapitres, Esc accueil
  ────────────────────────────────────────────────────────── */
  function getChapterIds() {
    return Array.from(document.querySelectorAll('.chapter-link[data-page]'))
      .map(a => a.dataset.page)
      .filter(id => id && document.getElementById(id));
  }

  function currentPageId() {
    const active = document.querySelector('.page-section.active');
    return active ? active.id : 'home';
  }

  function showKbdHint(msg) {
    let toast = document.getElementById('kbd-hint-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'kbd-hint-toast';
      toast.className = 'kbd-hint';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 1800);
  }

  document.addEventListener('keydown', function (e) {
    /* Ignore si focus dans un champ texte */
    const tag = document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable) return;

    if (e.key === 'Escape') {
      showPage('home');
      showKbdHint('↩ Accueil');
      return;
    }

    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const ids = getChapterIds();
      const cur = currentPageId();
      const idx = ids.indexOf(cur);
      if (e.key === 'ArrowRight') {
        const next = idx < ids.length - 1 ? ids[idx + 1] : ids[0];
        showPage(next);
        showKbdHint('→ Chapitre suivant');
      } else {
        const prev = idx > 0 ? ids[idx - 1] : ids[ids.length - 1];
        showPage(prev);
        showKbdHint('← Chapitre précédent');
      }
    }
  });

  /* ──────────────────────────────────────────────────────────
     BOUTONS PREV / NEXT en bas de chaque chapitre
  ────────────────────────────────────────────────────────── */
  function injectChapterNav() {
    const links = Array.from(document.querySelectorAll('.chapter-link[data-page]'));
    const ids = links.map(a => a.dataset.page).filter(id => {
      const el = document.getElementById(id);
      return el && el.classList.contains('page-section');
    });

    ids.forEach((id, i) => {
      const section = document.getElementById(id);
      if (!section || section.querySelector('.chapter-nav-row') || section.querySelector('.chapter-nav')) return;

      const prevId = i > 0 ? ids[i - 1] : null;
      const nextId = i < ids.length - 1 ? ids[i + 1] : null;

      const prevLabel = prevId ? (document.querySelector(`[data-page="${prevId}"]`)?.textContent.trim() || prevId) : null;
      const nextLabel = nextId ? (document.querySelector(`[data-page="${nextId}"]`)?.textContent.trim() || nextId) : null;

      const nav = document.createElement('div');
      nav.className = 'chapter-nav-row';
      nav.innerHTML = `
        ${prevId ? `<button class="chapter-nav-btn prev-btn" data-page="${prevId}">← ${prevLabel}</button>` : '<span></span>'}
        ${nextId ? `<button class="chapter-nav-btn next-btn" data-page="${nextId}">${nextLabel} →</button>` : '<span></span>'}
      `;
      section.appendChild(nav);
    });
  }

  /* Appeler après le chargement complet */
  window.addEventListener('load', injectChapterNav);

  /* Gérer les clics sur les boutons nav de chapitre */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.chapter-nav-btn[data-page]');
    if (btn) {
      e.preventDefault();
      showPage(btn.dataset.page);
    }
  });

  /* ──────────────────────────────────────────────────────────
     SCROLL-TO-TOP + BARRE DE LECTURE
  ────────────────────────────────────────────────────────── */
  (function () {
    const btn = document.createElement('button');
    btn.id = 'scroll-top-btn';
    btn.title = 'Retour en haut';
    btn.setAttribute('aria-label', 'Retour en haut');
    btn.textContent = '↑';
    document.body.appendChild(btn);

    const bar = document.createElement('div');
    bar.id = 'reading-progress';
    document.body.appendChild(bar);

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
      const sy = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (dh > 0 ? Math.min(100, Math.round(sy / dh * 100)) : 0) + '%';
      btn.classList.toggle('visible', sy > 300);
    }, { passive: true });
  }());

  /* ──────────────────────────────────────────────────────────
     SIDEBAR OVERLAY (fermeture mobile par clic extérieur)
  ────────────────────────────────────────────────────────── */
  (function () {
    const overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    document.body.appendChild(overlay);

    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    /* Bouton fermeture dans la sidebar */
    const closeBtn = document.createElement('button');
    closeBtn.className = 'sidebar-close-btn';
    closeBtn.title = 'Fermer le menu';
    closeBtn.setAttribute('aria-label', 'Fermer le menu');
    closeBtn.textContent = '✕';
    sidebar.insertBefore(closeBtn, sidebar.firstChild);

    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    }
    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('active');
    }

    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    /* Patch le handler hamburger existant */
    document.addEventListener('click', function (e) {
      if (e.target.closest('.hamburger')) {
        if (sidebar.classList.contains('open')) { closeSidebar(); }
        else { openSidebar(); }
      }
    });
  }());

  /* ──────────────────────────────────────────────────────────
     BOUTON IMPRESSION PAR CHAPITRE
  ────────────────────────────────────────────────────────── */
  window.addEventListener('load', function () {
    document.querySelectorAll('.page-section').forEach(function (sec) {
      if (sec.id === 'home' || sec.id === 'dashboard') return;
      const h1 = sec.querySelector('h1');
      if (!h1 || sec.querySelector('.print-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'print-btn';
      btn.title = 'Imprimer ce chapitre';
      btn.innerHTML = '🖨️ Imprimer';
      btn.addEventListener('click', function () {
        function restoreSections() {
          document.querySelectorAll('[data-print-hide="1"]').forEach(function(s) {
            s.style.removeProperty('display');
          });
        }
        document.querySelectorAll('.page-section').forEach(function(s) {
          s.dataset.printHide = s.id !== sec.id ? '1' : '';
        });
        document.querySelectorAll('[data-print-hide="1"]').forEach(function(s) {
          s.style.setProperty('display', 'none', 'important');
        });
        window.onafterprint = function() { restoreSections(); window.onafterprint = null; };
        window.print();
        /* Fallback pour navigateurs sans onafterprint */
        setTimeout(restoreSections, 2000);
      });
      h1.parentElement.insertBefore(btn, h1);
    });
  });

})();
