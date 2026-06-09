/* ============================================================
   EXAMEN BLANC – Simulation d'examen chronométré
   Utilise window.QUIZ_DATA exposé par quiz-supplements.js
   ============================================================ */
(function () {
  'use strict';

  var container = document.querySelector('.main-content');
  if (!container || document.getElementById('examen-blanc')) return;

  var html = '<section id="examen-blanc" class="page-section">' +
    '<div class="chapter-title">' +
      '<div class="num">📝</div>' +
      '<div><div class="part-tag">Entraînement</div><h1>Examen Blanc</h1></div>' +
    '</div>' +
    '<div class="chapter-intro">Simulez les conditions du concours : 20 questions chronométrées, tirées aléatoirement des 24 chapitres. Score final et corrigé complet à la fin.</div>' +

    '<div id="eb-setup" style="max-width:480px;margin:0 auto;text-align:center;padding:32px 20px">' +
      '<div style="font-size:4rem;margin-bottom:16px">📝</div>' +
      '<h2 style="color:var(--primary);margin-bottom:12px">Prêt pour l\'examen blanc ?</h2>' +
      '<p style="color:var(--text-muted);margin-bottom:24px">20 questions · Durée : 30 minutes · Correction immédiate</p>' +
      '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:24px">' +
        '<label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:0.9rem">' +
          '<input type="number" id="eb-nb-questions" value="20" min="5" max="40" style="width:60px;padding:6px;border:1px solid var(--border);border-radius:6px;text-align:center"> questions' +
        '</label>' +
        '<label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:0.9rem">' +
          '<input type="number" id="eb-duration" value="30" min="5" max="90" style="width:60px;padding:6px;border:1px solid var(--border);border-radius:6px;text-align:center"> minutes' +
        '</label>' +
      '</div>' +
      '<button id="eb-start-btn" style="background:var(--primary);color:#fff;border:none;padding:14px 32px;border-radius:8px;cursor:pointer;font-size:1.1rem;font-weight:700">🚀 Démarrer l\'examen</button>' +
    '</div>' +

    '<div id="eb-exam" style="display:none">' +
      '<div id="eb-header" style="display:flex;justify-content:space-between;align-items:center;background:var(--primary);color:#fff;padding:14px 20px;border-radius:8px;margin-bottom:24px;flex-wrap:wrap;gap:10px">' +
        '<span id="eb-progress-label" style="font-weight:600;font-size:1rem"></span>' +
        '<span id="eb-timer-display" style="font-size:1.6rem;font-weight:800;font-family:monospace;letter-spacing:2px"></span>' +
      '</div>' +
      '<div id="eb-question-area"></div>' +
      '<div id="eb-nav" style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap">' +
        '<button id="eb-validate-btn" style="background:var(--primary);color:#fff;border:none;padding:11px 26px;border-radius:8px;cursor:pointer;font-weight:700">✓ Valider</button>' +
        '<button id="eb-finish-btn" style="background:var(--warning);color:#fff;border:none;padding:11px 26px;border-radius:8px;cursor:pointer;font-weight:700;display:none">Terminer l\'examen</button>' +
      '</div>' +
    '</div>' +

    '<div id="eb-results" style="display:none">' +
      '<div id="eb-score-banner" style="border-radius:12px;padding:28px;text-align:center;margin-bottom:28px;color:#fff">' +
        '<div id="eb-score-pct" style="font-size:4rem;font-weight:900;line-height:1"></div>' +
        '<div id="eb-score-detail" style="font-size:1.2rem;margin-top:8px;opacity:0.9"></div>' +
        '<div id="eb-score-msg" style="font-size:1rem;margin-top:12px;opacity:0.85"></div>' +
      '</div>' +
      '<h2 style="color:var(--primary);margin-bottom:16px">Corrigé détaillé</h2>' +
      '<div id="eb-correction"></div>' +
      '<button id="eb-retry-btn" style="background:var(--primary);color:#fff;border:none;padding:12px 28px;border-radius:8px;cursor:pointer;font-weight:700;margin-top:24px">🔄 Nouvel examen</button>' +
    '</div>' +
  '</section>';

  container.insertAdjacentHTML('beforeend', html);

  /* ── STATE ── */
  var ebQuestions = [], ebCurrent = 0, ebAnswers = [], ebTimerId = null, ebSecsLeft = 1800;

  function buildExam() {
    var qd = window.QUIZ_DATA;
    if (!qd) return [];
    var all = [];
    Object.entries(qd).forEach(function(entry) {
      var chapId = entry[0], data = entry[1];
      data.questions.forEach(function(q) {
        all.push({ chapId: chapId, chapTitre: data.titre, q: q.q, opts: q.opts, correct: q.correct, expl: q.expl });
      });
    });
    /* Shuffle */
    for (var i = all.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = all[i]; all[i] = all[j]; all[j] = tmp;
    }
    var nb = parseInt(document.getElementById('eb-nb-questions').value) || 20;
    return all.slice(0, Math.min(nb, all.length));
  }

  function formatEbTime(s) {
    return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  }

  function startExam() {
    ebQuestions = buildExam();
    if (!ebQuestions.length) {
      alert('Les données des quiz ne sont pas encore chargées. Veuillez patienter quelques secondes et réessayer.');
      return;
    }
    ebCurrent = 0;
    ebAnswers = new Array(ebQuestions.length).fill(null);
    var mins = parseInt(document.getElementById('eb-duration').value) || 30;
    ebSecsLeft = mins * 60;

    document.getElementById('eb-setup').style.display = 'none';
    document.getElementById('eb-exam').style.display = 'block';
    document.getElementById('eb-results').style.display = 'none';

    renderQuestion();
    updateProgressLabel();
    updateTimerDisplay();

    clearInterval(ebTimerId);
    ebTimerId = setInterval(function() {
      ebSecsLeft--;
      updateTimerDisplay();
      if (ebSecsLeft <= 0) { clearInterval(ebTimerId); finishExam(); }
    }, 1000);
  }

  function renderQuestion() {
    var q = ebQuestions[ebCurrent];
    var saved = ebAnswers[ebCurrent];
    var html = '<div class="eb-qcard">' +
      '<div class="eb-qnum">Question ' + (ebCurrent + 1) + ' / ' + ebQuestions.length + ' — <em>' + q.chapTitre + '</em></div>' +
      '<div class="eb-qtext">' + q.q + '</div>' +
      '<ul class="eb-options">';
    ['a','b','c','d'].forEach(function(letter, i) {
      if (!q.opts[i]) return;
      var checked = saved === letter ? 'checked' : '';
      html += '<li><label class="eb-opt-label">' +
        '<input type="radio" name="eb-q" value="' + letter + '" ' + checked + '>' +
        '<span class="eb-opt-letter">' + letter.toUpperCase() + '</span>' +
        '<span>' + q.opts[i] + '</span>' +
        '</label></li>';
    });
    html += '</ul></div>';

    /* Nav prev/next */
    html += '<div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap">';
    if (ebCurrent > 0) html += '<button class="eb-nav-q" data-go="-1" style="background:#f0f4ff;color:var(--primary);border:1px solid var(--border);padding:7px 16px;border-radius:6px;cursor:pointer">← Précédente</button>';
    if (ebCurrent < ebQuestions.length - 1) html += '<button class="eb-nav-q" data-go="1" style="background:#f0f4ff;color:var(--primary);border:1px solid var(--border);padding:7px 16px;border-radius:6px;cursor:pointer">Suivante →</button>';
    html += '</div>';

    document.getElementById('eb-question-area').innerHTML = html;

    /* Show/hide finish button */
    document.getElementById('eb-finish-btn').style.display = ebCurrent === ebQuestions.length - 1 ? 'inline-block' : 'none';
  }

  function saveCurrentAnswer() {
    var sel = document.querySelector('#eb-question-area input[name="eb-q"]:checked');
    if (sel) ebAnswers[ebCurrent] = sel.value;
  }

  function updateProgressLabel() {
    var answered = ebAnswers.filter(function(a){ return a !== null; }).length;
    document.getElementById('eb-progress-label').textContent = 'Question ' + (ebCurrent + 1) + '/' + ebQuestions.length + ' · ' + answered + ' réponses';
  }

  function updateTimerDisplay() {
    var el = document.getElementById('eb-timer-display');
    if (!el) return;
    el.textContent = formatEbTime(ebSecsLeft);
    el.style.color = ebSecsLeft <= 60 ? '#ff6b6b' : ebSecsLeft <= 300 ? '#ffc107' : '#fff';
  }

  function finishExam() {
    clearInterval(ebTimerId);
    saveCurrentAnswer();

    var score = 0;
    ebQuestions.forEach(function(q, i) {
      if (ebAnswers[i] === q.correct) score++;
    });
    var total = ebQuestions.length;
    var pct = total > 0 ? Math.round(score / total * 100) : 0;

    document.getElementById('eb-exam').style.display = 'none';
    document.getElementById('eb-results').style.display = 'block';

    var banner = document.getElementById('eb-score-banner');
    var bgColor = pct >= 70 ? '#2e7d32' : pct >= 50 ? '#e65100' : '#c62828';
    banner.style.background = 'linear-gradient(135deg, ' + bgColor + ', ' + bgColor + 'cc)';
    document.getElementById('eb-score-pct').textContent = pct + '%';
    document.getElementById('eb-score-detail').textContent = score + ' bonnes réponses sur ' + total;
    var msg = pct >= 80 ? '🏆 Excellent ! Vous êtes prêt(e) pour le concours.'
            : pct >= 70 ? '⭐ Très bien ! Encore quelques révisions et vous serez au top.'
            : pct >= 50 ? '📚 Résultat moyen. Identifiez et révisez les points faibles.'
            : '⚠️ Score insuffisant. Reprenez les cours des chapitres échoués.';
    document.getElementById('eb-score-msg').textContent = msg;

    /* Correction */
    var corrHtml = '';
    ebQuestions.forEach(function(q, i) {
      var given = ebAnswers[i];
      var ok = given === q.correct;
      var letterMap = {'a':0,'b':1,'c':2,'d':3};
      var givenText = given ? q.opts[letterMap[given]] : '(sans réponse)';
      var correctText = q.opts[letterMap[q.correct]];
      corrHtml += '<div class="eb-corr-item ' + (ok ? 'eb-corr-ok' : 'eb-corr-ko') + '">' +
        '<div class="eb-corr-header">' +
          '<span class="eb-corr-num">Q' + (i+1) + '</span>' +
          '<span class="eb-corr-chap">' + q.chapTitre + '</span>' +
          '<span class="eb-corr-icon">' + (ok ? '✓' : '✗') + '</span>' +
        '</div>' +
        '<div class="eb-corr-q">' + q.q + '</div>' +
        (!ok ? '<div class="eb-corr-given">Votre réponse : <strong>' + givenText + '</strong></div>' : '') +
        '<div class="eb-corr-correct">Bonne réponse : <strong>' + correctText + '</strong></div>' +
        '<div class="eb-corr-expl">' + q.expl + '</div>' +
      '</div>';
    });
    document.getElementById('eb-correction').innerHTML = corrHtml;

    /* Save to localStorage */
    var history = JSON.parse(localStorage.getItem('concours_examen') || '[]');
    history.push({ date: new Date().toISOString(), score: score, total: total, pct: pct });
    if (history.length > 20) history = history.slice(-20);
    localStorage.setItem('concours_examen', JSON.stringify(history));
  }

  /* ── EVENT HANDLERS ── */
  document.addEventListener('click', function(e) {
    if (e.target.closest('#eb-start-btn')) { startExam(); return; }

    if (e.target.closest('#eb-validate-btn')) {
      saveCurrentAnswer();
      updateProgressLabel();
      if (ebCurrent < ebQuestions.length - 1) {
        ebCurrent++;
        renderQuestion();
        updateProgressLabel();
      }
      return;
    }

    if (e.target.closest('#eb-finish-btn')) {
      if (confirm('Terminer l\'examen maintenant ? Votre score sera calculé.')) finishExam();
      return;
    }

    var navBtn = e.target.closest('.eb-nav-q');
    if (navBtn) {
      saveCurrentAnswer();
      ebCurrent += parseInt(navBtn.dataset.go);
      renderQuestion();
      updateProgressLabel();
      return;
    }

    if (e.target.closest('#eb-retry-btn')) {
      clearInterval(ebTimerId);
      document.getElementById('eb-setup').style.display = 'block';
      document.getElementById('eb-exam').style.display = 'none';
      document.getElementById('eb-results').style.display = 'none';
      return;
    }
  });

})();
