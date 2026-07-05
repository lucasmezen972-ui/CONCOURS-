/* ============================================================
   PRÉPARATION ENTRETIEN – Gestionnaire paye ASFAM / DGA RH CTM
   Entretien : mercredi 8 juillet 2026 à 11h15 – Salle R.H.
   Hôtel de la Collectivité à Cluny (CTM)
   ============================================================ */
(function () {
  'use strict';

  /* ── COUNTDOWN ── */
  function buildCountdown() {
    var target = new Date('2026-07-08T11:15:00');
    var now = new Date();
    var diff = target - now;
    if (diff <= 0) return '<span style="color:var(--success);font-weight:700">✅ Entretien passé – bonne chance !</span>';
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    return '<span style="font-size:2rem;font-weight:900;color:#fff">' + d + 'j ' + h + 'h ' + m + 'm</span>';
  }

  var html = '<section id="entretien-asfam" class="page-section">\n' +
    '<style>\n' +
    '@media (max-width: 700px) {\n' +
    '  #entretien-asfam div[style*="display:grid"] { grid-template-columns: 1fr !important; }\n' +
    '  #entretien-asfam table { display: block; width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }\n' +
    '  #entretien-asfam h1 { overflow-wrap: anywhere; }\n' +
    '}\n' +
    '</style>\n';

  function videoLink(url, title, desc, tag) {
    return '<a href="' + url + '" target="_blank" rel="noopener" style="display:flex;gap:14px;align-items:center;padding:14px 18px;background:#fff;border:1.5px solid var(--border);border-radius:10px;text-decoration:none;transition:box-shadow .2s" onmouseover="this.style.boxShadow=\'var(--shadow-md)\'" onmouseout="this.style.boxShadow=\'none\'">\n' +
      '  <div style="width:44px;height:44px;background:#dc2626;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.3rem">▶️</div>\n' +
      '  <div><div style="font-weight:700;color:var(--text);margin-bottom:3px">' + title + '</div><div style="font-size:.82rem;color:var(--text-muted)">' + tag + ' · ' + desc + '</div></div>\n' +
      '</a>\n';
  }

  /* ── BANNER ── */
  html += '<div style="background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff;border-radius:14px;padding:28px 32px;margin-bottom:24px;position:relative;overflow:hidden">\n' +
    '<div style="position:absolute;right:-40px;top:-40px;width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,.06)"></div>\n' +
    '<div style="font-size:0.78rem;font-weight:700;opacity:.7;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px">📋 PRÉPARATION ENTRETIEN – CTM</div>\n' +
    '<h1 style="font-size:1.6rem;font-weight:800;margin-bottom:6px;letter-spacing:-.02em">Gestionnaire paye – Assistants Familiaux</h1>\n' +
    '<p style="opacity:.82;font-size:.95rem;margin-bottom:16px">DGA RH – CTM · Salle R.H., Hôtel de la Collectivité à Cluny</p>\n' +
    '<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center">\n' +
    '  <div style="background:rgba(255,255,255,.12);border-radius:10px;padding:12px 20px;text-align:center">\n' +
    '    <div style="font-size:.72rem;opacity:.7;margin-bottom:4px">TEMPS RESTANT</div>\n' +
    '    <div id="asfam-countdown">' + buildCountdown() + '</div>\n' +
    '  </div>\n' +
    '  <div style="background:rgba(255,255,255,.12);border-radius:10px;padding:12px 20px">\n' +
    '    <div style="font-weight:700">📅 Mercredi 8 juillet 2026</div>\n' +
    '    <div style="opacity:.82;font-size:.9rem">11h15 · Salle R.H. · Cluny</div>\n' +
    '  </div>\n' +
    '  <div style="background:rgba(255,255,255,.12);border-radius:10px;padding:12px 20px">\n' +
    '    <div style="font-weight:700">👔 Tenue professionnelle</div>\n' +
    '    <div style="opacity:.82;font-size:.9rem">Arriver 15 min en avance</div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '</div>\n';

  /* ── PLAN DE RÉVISION ── */
  html += '<div class="card" style="border-left:4px solid #7c3aed">\n' +
    '<div class="card-header"><h2>🗓️ Plan de révision express (3 jours)</h2></div>\n' +
    '<div class="card-body">\n' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">\n' +
    '<div style="background:#f5f3ff;border-radius:10px;padding:16px;border-top:3px solid #7c3aed"><strong>Dimanche 5 juillet</strong><br><small style="color:var(--text-muted)">① Le poste & les ASFAM<br>② La paye ASFAM<br>③ La CTM & DGA RH</small></div>\n' +
    '<div style="background:#eff6ff;border-radius:10px;padding:16px;border-top:3px solid var(--primary)"><strong>Lundi 6 juillet</strong><br><small style="color:var(--text-muted)">④ Questions jury (lire toutes)<br>⑤ Préparer ma présentation<br>⑥ S\'entraîner à voix haute x3</small></div>\n' +
    '<div style="background:#f0fdf4;border-radius:10px;padding:16px;border-top:3px solid var(--success)"><strong>Mardi 7 juillet (veille)</strong><br><small style="color:var(--text-muted)">⑦ Relire les 10 questions clés<br>⑧ Répéter la présentation<br>⑨ Préparer la tenue & dormir tôt</small></div>\n' +
    '<div style="background:#fff7ed;border-radius:10px;padding:16px;border-top:3px solid #d97706"><strong>Mercredi 8 juillet matin</strong><br><small style="color:var(--text-muted)">⑩ Relire les fiches synthèse<br>⑪ Partir 30 min à l\'avance<br>⑫ Respirer et sourire !</small></div>\n' +
    '</div>\n' +
    '<div style="margin-top:16px;background:#f8fafc;border:1px solid var(--border);border-radius:10px;padding:14px 16px">\n' +
    '<strong>Ordre conseillé :</strong> 1) présentation personnelle, 2) fiche de poste, 3) questions jury, 4) QCM, 5) vidéos. Ne pas commencer par les vidéos : elles servent à donner du vocabulaire et des exemples, pas à remplacer la révision active.\n' +
    '</div>\n' +
    '</div>\n</div>\n';

  /* ── MAIL ET LOGISTIQUE ── */
  html += '<div class="card" style="border-left:4px solid #d97706">\n' +
    '<div class="card-header"><h2>✉️ Réponse au mail et logistique</h2><p>À régler avant de réviser : confirmer, préparer les pièces, éviter le stress inutile.</p></div>\n' +
    '<div class="card-body">\n' +
    '<h3 style="color:var(--primary);margin-bottom:12px">Réponse courte à envoyer</h3>\n' +
    '<div style="background:#fff7ed;border-left:4px solid #d97706;border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:16px;line-height:1.7">\n' +
    'Bonjour,<br><br>Je vous remercie pour votre retour. Je vous confirme ma présence à l&rsquo;entretien du <strong>mercredi 8 juillet 2026 à 11h15</strong>, en Salle R.H. de l&rsquo;Hôtel de la Collectivité à Cluny.<br><br>Concernant ma situation professionnelle actuelle : [indiquer ici type de contrat, durée, échéance éventuelle].<br><br>Cordialement,<br>[Nom Prénom]\n' +
    '</div>\n' +
    '<h3 style="color:var(--primary);margin:20px 0 12px">À préparer la veille</h3>\n' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:10px">\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>Documents</strong><br><small>Convocation/mail, CV papier, pièce d&rsquo;identité, notes très courtes, stylo.</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>Trajet</strong><br><small>Repérer Cluny, viser une arrivée 15 à 20 minutes avant 11h15.</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>Tenue</strong><br><small>Sobre, professionnelle, confortable. Le jury doit voir une posture RH fiable.</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>Dernière révision</strong><br><small>Présentation 5 min, logiciels, trop-perçus, agrément, CTM article 73.</small></div>\n' +
    '</div>\n' +
    '</div>\n</div>\n';

  /* ── PARTIE 1 : LE POSTE ── */
  html += '<div class="card">\n' +
    '<div class="card-header"><h2>📋 Partie 1 – Le poste et ses missions</h2><p>Ce que vous ferez concrètement au quotidien</p></div>\n' +
    '<div class="card-body">\n' +

    '<h3 style="color:var(--primary);margin-bottom:12px">🎯 En une phrase</h3>\n' +
    '<div style="background:var(--primary-50);border-left:4px solid var(--primary-light);border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:20px;font-size:1rem;color:var(--primary);font-weight:600">\n' +
    'Vous gérez l\'ensemble du cycle de vie RH et paye d\'un portefeuille d\'assistants familiaux, du recrutement jusqu\'à la cessation de fonctions, au sein du Service Administration et Rémunération des ASFAM (DGA RH – CTM).\n' +
    '</div>\n' +

    '<h3 style="color:var(--primary);margin:20px 0 12px">📌 Activités générales (à maîtriser)</h3>\n' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px;margin-bottom:20px">\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>📬 Accueil & réception</strong><br><small>Accueillir et renseigner les assistants familiaux, réceptionner et distribuer le courrier</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>📝 Rédaction & frappe</strong><br><small>Rédiger les courriers administratifs, contrats, décisions, notifications</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>📊 Statistiques & tableaux</strong><br><small>Élaborer et mettre à jour des statistiques et tableaux comparatifs sur le portefeuille</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>🗂️ Classement & archivage</strong><br><small>Classer et gérer les dossiers administratifs des ASFAM</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>🤝 Relations partenaires</strong><br><small>Travailler avec la DPMI, la DSI, les circonscriptions DPPEF</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>📅 Réunions & AS FAMS</strong><br><small>Participer aux rencontres avec les assistants sociaux FAMS</small></div>\n' +
    '</div>\n' +

    '<h3 style="color:var(--primary);margin:20px 0 12px">⭐ Activités spécifiques (les plus techniques)</h3>\n' +
    '<table style="width:100%;border-collapse:collapse;font-size:.9rem">\n' +
    '<thead><tr style="background:var(--primary);color:#fff"><th style="padding:10px;text-align:left">Mission</th><th style="padding:10px;text-align:left">Détail</th></tr></thead>\n' +
    '<tbody>\n' +
    '<tr><td style="padding:10px;border-bottom:1px solid var(--border)"><strong>Dossiers ASS FAM</strong></td><td style="padding:10px;border-bottom:1px solid var(--border)">Constituer et mettre à jour les dossiers administratifs complets de chaque assistant familial</td></tr>\n' +
    '<tr style="background:var(--surface-2)"><td style="padding:10px;border-bottom:1px solid var(--border)"><strong>Suivi des agréments</strong></td><td style="padding:10px;border-bottom:1px solid var(--border)">Gérer le renouvellement (tous les 5 ans), les extensions (augmenter le nombre d\'enfants accueillis) et les dérogations</td></tr>\n' +
    '<tr><td style="padding:10px;border-bottom:1px solid var(--border)"><strong>Saisie informatique</strong></td><td style="padding:10px;border-bottom:1px solid var(--border)">Créer, modifier et mettre à jour les fiches agents sur <strong>SOLIS, CIVIL RH et GRAND ANGLE</strong></td></tr>\n' +
    '<tr style="background:var(--surface-2)"><td style="padding:10px;border-bottom:1px solid var(--border)"><strong>Calcul de la paye</strong></td><td style="padding:10px;border-bottom:1px solid var(--border)">Calculer, contrôler et corriger la rémunération mensuelle en lien avec les agents polyvalents de circonscription</td></tr>\n' +
    '<tr><td style="padding:10px;border-bottom:1px solid var(--border)"><strong>Trop-perçus</strong></td><td style="padding:10px;border-bottom:1px solid var(--border)">Identifier, calculer et récupérer les trop-perçus de salaire (cessation d\'accueil, absence non signalée, erreur)</td></tr>\n' +
    '<tr style="background:var(--surface-2)"><td style="padding:10px"><strong>Gestion des congés</strong></td><td style="padding:10px">Gérer et saisir les congés annuels, les congés de maternité, les arrêts maladie des ASFAM</td></tr>\n' +
    '</tbody></table>\n' +

    '<h3 style="color:var(--primary);margin:20px 0 12px">🖥️ Les logiciels à connaître</h3>\n' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">\n' +
    '<div style="background:#f5f3ff;border-radius:10px;padding:16px;border-top:3px solid #7c3aed">\n' +
    '  <strong style="color:#7c3aed">SOLIS</strong><br>\n' +
    '  <small>Logiciel de gestion de l\'action sociale (suivi des bénéficiaires de l\'ASE, des mesures de placement, des agréments). Utilisé par les services de protection de l\'enfance.</small>\n' +
    '</div>\n' +
    '<div style="background:var(--primary-50);border-radius:10px;padding:16px;border-top:3px solid var(--primary)">\n' +
    '  <strong style="color:var(--primary)">CIVIL RH</strong><br>\n' +
    '  <small>Logiciel RH/paye de Berger-Levrault. Gère les carrières, les contrats, les fiches de paye des agents territoriaux et des ASFAM. Standard dans les collectivités.</small>\n' +
    '</div>\n' +
    '<div style="background:#f0fdf4;border-radius:10px;padding:16px;border-top:3px solid var(--success)">\n' +
    '  <strong style="color:var(--success)">GRAND ANGLE</strong><br>\n' +
    '  <small>Logiciel financier de Berger-Levrault. Gère la comptabilité et les mandatements. Utilisé en lien avec la paye pour les virements de rémunération.</small>\n' +
    '</div>\n' +
    '</div>\n' +
    '<div class="info-box" style="margin-top:16px"><div class="info-title">💡 À dire au jury si on vous pose la question sur les logiciels</div>' +
    '« Je n\'ai pas encore eu l\'occasion de travailler sur SOLIS spécifiquement, mais je maîtrise la logique des logiciels RH/paye (j\'ai travaillé sur [votre logiciel en formation]. Je suis autonome sur les outils numériques et j\'anticipe une prise en main rapide avec la formation prévue à la prise de poste. »\n' +
    '</div>\n' +
    '</div>\n</div>\n';

  /* ── PARTIE 2 : LES ASSISTANTS FAMILIAUX ── */
  html += '<div class="card">\n' +
    '<div class="card-header"><h2>👨‍👧‍👦 Partie 2 – Les Assistants Familiaux : cadre juridique essentiel</h2><p>Ce que le jury attendra que vous sachiez sur votre « public »</p></div>\n' +
    '<div class="card-body">\n' +

    '<h3 style="color:var(--primary);margin-bottom:12px">📖 Définition</h3>\n' +
    '<div style="background:var(--primary-50);border-left:4px solid var(--primary-light);border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:20px">\n' +
    'L\'assistant familial est un <strong>professionnel de l\'accueil familial</strong> qui accueille à son domicile, à titre permanent, des enfants confiés par l\'Aide Sociale à l\'Enfance (ASE) ou la justice. Il n\'est PAS un assistant maternel (qui garde des enfants de moins de 6 ans pour leurs parents).\n' +
    '</div>\n' +

    '<h3 style="color:var(--primary);margin:20px 0 12px">⚖️ Cadre juridique — À citer absolument</h3>\n' +
    '<table style="width:100%;border-collapse:collapse;font-size:.88rem">\n' +
    '<thead><tr style="background:var(--primary);color:#fff"><th style="padding:9px">Texte</th><th style="padding:9px">Contenu essentiel</th></tr></thead>\n' +
    '<tbody>\n' +
    '<tr><td style="padding:9px;border-bottom:1px solid var(--border)"><strong>Loi n°2005-706<br>du 27 juin 2005</strong></td><td style="padding:9px;border-bottom:1px solid var(--border)">Loi fondatrice relative aux assistants maternels et familiaux. Elle a structuré le statut professionnel, l\'agrément, la formation et les relations de travail.</td></tr>\n' +
    '<tr style="background:var(--surface-2)"><td style="padding:9px;border-bottom:1px solid var(--border)"><strong>CASF Art. L421-2<br>et suivants</strong></td><td style="padding:9px;border-bottom:1px solid var(--border)">Code de l\'Action Sociale et des Familles : l\'article L421-2 définit l\'assistant familial ; les articles suivants encadrent l\'agrément, la formation et les obligations.</td></tr>\n' +
    '<tr><td style="padding:9px;border-bottom:1px solid var(--border)"><strong>Décret n°2006-627<br>du 29 mai 2006</strong></td><td style="padding:9px;border-bottom:1px solid var(--border)">Modalités d\'agrément, formation, carte professionnelle. Fixe les conditions d\'évaluation et de renouvellement tous les 5 ans.</td></tr>\n' +
    '<tr style="background:var(--surface-2)"><td style="padding:9px"><strong>Convention collective<br>nationale 2004</strong></td><td style="padding:9px">CCN des assistants maternels du particulier employeur. Pour les ASFAM relevant d\'une collectivité : statut sui generis (ni fonctionnaire, ni salarié de droit commun).</td></tr>\n' +
    '</tbody></table>\n' +

    '<h3 style="color:var(--primary);margin:20px 0 12px">🏠 L\'agrément – La clé du système</h3>\n' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:16px">\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>Qui délivre ?</strong><br><small>La <strong>PMI</strong> (Protection Maternelle et Infantile) – en Martinique, la DPMI sous la CTM</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>Durée</strong><br><small><strong>5 ans</strong>, renouvelable. Votre rôle : anticiper les renouvellements et lancer la procédure à temps</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>Capacité d\'accueil</strong><br><small>De <strong>1 à 3 enfants</strong> simultanément (jusqu\'à 4 par dérogation exceptionnelle)</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>Conditions</strong><br><small>Garanties d\'accueil, logement adapté, évaluation, bulletin n°2 du casier judiciaire et formation obligatoire (stage préparatoire puis 240h)</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>Extension</strong><br><small>L\'ASFAM peut demander à accueillir +1 enfant → procédure spécifique DPMI</small></div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px"><strong>Retrait</strong><br><small>La PMI peut retirer l\'agrément si les conditions ne sont plus remplies → fin de l\'emploi</small></div>\n' +
    '</div>\n' +

    '<h3 style="color:var(--primary);margin:20px 0 12px">🤝 La CTM en tant qu\'employeur des ASFAM</h3>\n' +
    '<div style="background:#f5f3ff;border-left:4px solid #7c3aed;border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:12px">\n' +
    '<p>L\'assistant familial signe un <strong>contrat de travail de droit public</strong> avec la CTM (qui assume les compétences de l\'ex-Conseil Général). Ce n\'est pas un fonctionnaire mais un agent contractuel avec un statut spécifique.</p>\n' +
    '<p style="margin-bottom:0">La CTM est l\'<strong>employeur institutionnel</strong> (signataire du contrat, payeur du salaire) alors que l\'<strong>ASE</strong> est l\'autorité de placement qui décide du nombre et de l\'identité des enfants confiés.</p>\n' +
    '</div>\n' +
    '<div class="info-box"><div class="info-title">🇲🇶 Spécificité Martinique</div>\n' +
    'La CTM (créée en 2015) a fusionné les compétences du Département et de la Région. Elle gère donc directement l\'ASE et les ASFAM, là où en métropole c\'est le Département seul. Le service ASFAM est rattaché à la <strong>DGA RH</strong> (Ressources Humaines) et travaille en lien étroit avec la <strong>DPPEF</strong> (Direction de la Protection et de la Promotion de l\'Enfance et de la Famille) et la <strong>DPMI</strong> (Direction de la PMI).\n' +
    '</div>\n' +
    '</div>\n</div>\n';

  /* ── PARTIE 3 : LA PAYE ASFAM ── */
  html += '<div class="card">\n' +
    '<div class="card-header"><h2>💰 Partie 3 – La rémunération des ASFAM (technique paye)</h2><p>Le cœur du poste : comprendre comment sont payés les assistants familiaux</p></div>\n' +
    '<div class="card-body">\n' +

    '<h3 style="color:var(--primary);margin-bottom:12px">📊 Composantes de la rémunération</h3>\n' +
    '<table style="width:100%;border-collapse:collapse;font-size:.88rem;margin-bottom:20px">\n' +
    '<thead><tr style="background:var(--primary);color:#fff"><th style="padding:9px">Composante</th><th style="padding:9px">Description</th><th style="padding:9px">Particularité</th></tr></thead>\n' +
    '<tbody>\n' +
    '<tr><td style="padding:9px;border-bottom:1px solid var(--border)"><strong>Rémunération garantie</strong></td><td style="padding:9px;border-bottom:1px solid var(--border)">Pour le premier accueil, la part minimale ne peut pas être inférieure au SMIC mensuel</td><td style="padding:9px;border-bottom:1px solid var(--border)">Les accueils supplémentaires ont aussi un minimum réglementaire, calculé en référence au SMIC</td></tr>\n' +
    '<tr style="background:var(--surface-2)"><td style="padding:9px;border-bottom:1px solid var(--border)"><strong>Indemnité d\'entretien</strong></td><td style="padding:9px;border-bottom:1px solid var(--border)">Couvre les frais liés à l\'accueil (nourriture, habillement, activités) par enfant et par jour</td><td style="padding:9px;border-bottom:1px solid var(--border)">Exonérée de cotisations sociales dans certaines limites</td></tr>\n' +
    '<tr><td style="padding:9px;border-bottom:1px solid var(--border)"><strong>Indemnité de sujétion spécifique</strong></td><td style="padding:9px;border-bottom:1px solid var(--border)">Majoration pour accueil pendant les week-ends, jours fériés, nuits</td><td style="padding:9px;border-bottom:1px solid var(--border)">Calculée selon les jours effectivement travaillés</td></tr>\n' +
    '<tr style="background:var(--surface-2)"><td style="padding:9px"><strong>Indemnités de congés</strong></td><td style="padding:9px">Rémunération du congé annuel (30 jours de CP) et des congés de formation</td><td style="padding:9px">Complexité : calcul proratisé selon périodes d\'accueil</td></tr>\n' +
    '</tbody></table>\n' +

    '<h3 style="color:var(--primary);margin:20px 0 12px">⚠️ Les trop-perçus – Sujet sensible à maîtriser</h3>\n' +
    '<div style="background:#fef2f2;border-left:4px solid var(--danger);border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:16px">\n' +
    '<strong style="color:var(--danger)">Définition :</strong> Un trop-perçu survient quand l\'ASFAM a reçu une rémunération supérieure à ce qui lui était dû.\n' +
    '</div>\n' +
    '<strong>Causes principales des trop-perçus :</strong>\n' +
    '<ul style="margin:10px 0 10px 20px">\n' +
    '<li>Fin de placement non signalée à temps → paye maintenue après départ de l\'enfant</li>\n' +
    '<li>Erreur de saisie sur le nombre d\'enfants accueillis</li>\n' +
    '<li>Arrêt maladie ou absence non transmise rapidement</li>\n' +
    '<li>Modification rétroactive d\'un agrément (retrait, suspension)</li>\n' +
    '</ul>\n' +
    '<strong>Procédure de récupération :</strong>\n' +
    '<ol style="margin:10px 0 10px 20px">\n' +
    '<li>Identifier le trop-perçu et le calculer précisément</li>\n' +
    '<li>Notifier l\'agent par courrier (montant, période, motif)</li>\n' +
    '<li>Proposer un échéancier de remboursement si le montant est important</li>\n' +
    '<li>Saisir le remboursement dans CIVIL RH (retenue sur fiche de paye)</li>\n' +
    '<li>Suivi jusqu\'à récupération complète</li>\n' +
    '</ol>\n' +

    '<h3 style="color:var(--primary);margin:20px 0 12px">📅 La gestion des congés ASFAM</h3>\n' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px">\n' +
    '<div style="background:#f0fdf4;border-radius:8px;padding:12px;border-top:3px solid var(--success)"><strong>Congés annuels</strong><br><small>2,5 jours par mois d\'accueil effectif. Pendant les congés de l\'ASFAM, l\'enfant peut être placé en hébergement temporaire (famille relais).</small></div>\n' +
    '<div style="background:#eff6ff;border-radius:8px;padding:12px;border-top:3px solid var(--primary)"><strong>Arrêt maladie</strong><br><small>Signalement immédiat requis. L\'enfant est retiré du domicile → fin de l\'indemnité d\'entretien → paye modifiée.</small></div>\n' +
    '<div style="background:#fff7ed;border-radius:8px;padding:12px;border-top:3px solid #d97706"><strong>Maternité/paternité</strong><br><small>Droits identiques aux agents contractuels. La CTM verse la rémunération, remboursée par la CPAM.</small></div>\n' +
    '<div style="background:#f5f3ff;border-radius:8px;padding:12px;border-top:3px solid #7c3aed"><strong>Formation obligatoire</strong><br><small>Stage préparatoire avant le premier accueil, puis formation de 240h préparant au diplôme d\'État d\'assistant familial.</small></div>\n' +
    '</div>\n' +

    '</div>\n</div>\n';

  /* ── PARTIE 3 BIS : CIRCUIT DE PAYE ASFAM ── */
  html += '<div class="card">\n' +
    '<div class="card-header"><h2>🧾 Partie 3 bis – Circuit de paye ASFAM : ce qu&rsquo;il faut savoir expliquer</h2><p>Le jury peut tester votre logique de gestionnaire, même si vous n&rsquo;avez pas encore utilisé les logiciels CTM.</p></div>\n' +
    '<div class="card-body">\n' +
    '<h3 style="color:var(--primary);margin-bottom:12px">Le circuit mensuel en 7 étapes</h3>\n' +
    '<ol style="line-height:1.75;margin-left:20px">\n' +
    '<li><strong>Collecte des informations</strong> : arrivées et sorties d&rsquo;enfants, congés, arrêts, suspensions, extensions d&rsquo;agrément, changements de situation.</li>\n' +
    '<li><strong>Contrôle des sources</strong> : comparaison entre les informations des circonscriptions/AS FAMS, SOLIS et le dossier administratif.</li>\n' +
    '<li><strong>Saisie RH/paye</strong> : mise à jour dans CIVIL RH des données utiles au calcul de la rémunération.</li>\n' +
    '<li><strong>Contrôle de cohérence</strong> : nombre d&rsquo;enfants, dates exactes, indemnités d&rsquo;entretien, absence de doublon, cohérence avec l&rsquo;agrément.</li>\n' +
    '<li><strong>Traitement financier</strong> : articulation avec GRAND ANGLE pour la chaîne comptable et le mandatement.</li>\n' +
    '<li><strong>Gestion des anomalies</strong> : correction avant paie si possible, régularisation si la paie est déjà partie, information de la hiérarchie.</li>\n' +
    '<li><strong>Traçabilité</strong> : conserver la justification de la modification, surtout pour un trop-perçu ou une réclamation.</li>\n' +
    '</ol>\n' +
    '<div class="info-box"><div class="info-title">Phrase à dire au jury</div>« Sur un poste paye, mon réflexe n&rsquo;est pas de saisir vite : c&rsquo;est de vérifier la donnée source, tracer la modification, puis sécuriser la paie avant validation. »</div>\n' +
    '<h3 style="color:var(--primary);margin:20px 0 12px">Tableau des anomalies fréquentes</h3>\n' +
    '<table style="width:100%;border-collapse:collapse;font-size:.88rem">\n' +
    '<thead><tr style="background:var(--primary);color:#fff"><th style="padding:9px;text-align:left">Anomalie</th><th style="padding:9px;text-align:left">Risque</th><th style="padding:9px;text-align:left">Réflexe attendu</th></tr></thead>\n' +
    '<tbody>\n' +
    '<tr><td style="padding:9px;border-bottom:1px solid var(--border)">Sortie d&rsquo;enfant non transmise</td><td style="padding:9px;border-bottom:1px solid var(--border)">Trop-perçu</td><td style="padding:9px;border-bottom:1px solid var(--border)">Vérifier date exacte, corriger, informer et tracer</td></tr>\n' +
    '<tr style="background:var(--surface-2)"><td style="padding:9px;border-bottom:1px solid var(--border)">Agrément proche de l&rsquo;échéance</td><td style="padding:9px;border-bottom:1px solid var(--border)">Situation administrative fragile</td><td style="padding:9px;border-bottom:1px solid var(--border)">Alerte 6 mois / 3 mois, relance DPMI et suivi tableau</td></tr>\n' +
    '<tr><td style="padding:9px;border-bottom:1px solid var(--border)">Arrêt maladie transmis tardivement</td><td style="padding:9px;border-bottom:1px solid var(--border)">Paye erronée ou régularisation</td><td style="padding:9px;border-bottom:1px solid var(--border)">Contrôler période, statut de l&rsquo;accueil, impact indemnités</td></tr>\n' +
    '<tr style="background:var(--surface-2)"><td style="padding:9px;border-bottom:1px solid var(--border)">Données SOLIS / CIVIL RH différentes</td><td style="padding:9px;border-bottom:1px solid var(--border)">Erreur de paie ou dossier incohérent</td><td style="padding:9px;border-bottom:1px solid var(--border)">Ne pas arbitrer seule : demander confirmation et corriger la source</td></tr>\n' +
    '<tr><td style="padding:9px">Réclamation agressive d&rsquo;un ASFAM</td><td style="padding:9px">Perte de confiance, tension relationnelle</td><td style="padding:9px">Écoute, reformulation, vérification, délai clair de réponse</td></tr>\n' +
    '</tbody></table>\n' +
    '<h3 style="color:var(--primary);margin:20px 0 12px">Mini-méthode de réponse en entretien</h3>\n' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px">\n' +
    '<div style="background:#f5f3ff;border-radius:8px;padding:12px;border-top:3px solid #7c3aed"><strong>1. Je qualifie</strong><br><small>Quelle donnée ? Quelle période ? Quel agent ? Quel enfant ?</small></div>\n' +
    '<div style="background:#eff6ff;border-radius:8px;padding:12px;border-top:3px solid var(--primary)"><strong>2. Je vérifie</strong><br><small>Source fiable : SOLIS, CIVIL RH, dossier, circonscription, DPMI.</small></div>\n' +
    '<div style="background:#f0fdf4;border-radius:8px;padding:12px;border-top:3px solid var(--success)"><strong>3. Je corrige</strong><br><small>Saisie, régularisation, courrier, échéancier si trop-perçu.</small></div>\n' +
    '<div style="background:#fff7ed;border-radius:8px;padding:12px;border-top:3px solid #d97706"><strong>4. Je trace</strong><br><small>Note dossier, mail, pièce justificative, contrôle final.</small></div>\n' +
    '</div>\n' +
    '</div>\n</div>\n';

  /* ── PARTIE 4 : LA CTM ── */
  html += '<div class="card">\n' +
    '<div class="card-header"><h2>🏛️ Partie 4 – La CTM et votre environnement de travail</h2></div>\n' +
    '<div class="card-body">\n' +

    '<h3 style="color:var(--primary);margin-bottom:12px">🗺️ Structure de la CTM (simplifié)</h3>\n' +
    '<div style="background:var(--surface-2);border-radius:10px;padding:18px;margin-bottom:16px;font-family:monospace;font-size:.85rem;line-height:2">\n' +
    '<strong style="font-family:var(--font);font-size:.95rem">CTM – Assemblée de Martinique (51 élus)</strong><br>\n' +
    '└── <strong>Conseil Exécutif</strong> (9 membres, Serge Letchimy président)<br>\n' +
    '&nbsp;&nbsp;&nbsp;&nbsp;└── <strong>DGA Ressources Humaines</strong><br>\n' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <strong style="color:#7c3aed">Service Administration & Rémunération ASFAM</strong> ← VOUS<br>\n' +
    '&nbsp;&nbsp;&nbsp;&nbsp;└── DPPEF (Protection de l\'Enfance et de la Famille)<br>\n' +
    '&nbsp;&nbsp;&nbsp;&nbsp;└── DPMI (Protection Maternelle et Infantile) → agréments<br>\n' +
    '&nbsp;&nbsp;&nbsp;&nbsp;└── DSI (Direction des Systèmes d\'Information) → logiciels\n' +
    '</div>\n' +

    '<h3 style="color:var(--primary);margin:20px 0 12px">🤝 Vos partenaires quotidiens</h3>\n' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;margin-bottom:16px">\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px">\n' +
    '  <strong>DPMI</strong><br><small>Direction de la PMI. Délivre et renouvelle les agréments. Vous transmettez les dates d\'échéance, ils réalisent l\'évaluation. Relation fréquente.</small>\n' +
    '</div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px">\n' +
    '  <strong>DPPEF – Circonscriptions</strong><br><small>Travailleurs sociaux et agents polyvalents qui suivent les enfants sur le terrain. Ils vous informent des changements de situation (placement, retour famille).</small>\n' +
    '</div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px">\n' +
    '  <strong>DSI</strong><br><small>Direction des Systèmes d\'Information. Support technique sur SOLIS, CIVIL RH, GRAND ANGLE. Vos interlocuteurs pour les incidents informatiques.</small>\n' +
    '</div>\n' +
    '<div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px">\n' +
    '  <strong>AS FAMS</strong><br><small>Assistants sociaux FAMS : travailleurs sociaux référents des enfants confiés. Ils vous alertent sur tout changement affectant la paye (sortie de placement, hospitalisation).</small>\n' +
    '</div>\n' +
    '</div>\n' +

    '<div class="info-box"><div class="info-title">🇲🇶 Pourquoi la CTM et pas un Département ?</div>\n' +
    'La Martinique est une <strong>collectivité unique</strong> issue de la fusion Département + Région (lois du 27 juillet 2011, effective en décembre 2015). La CTM exerce donc à la fois les compétences du Département (ASE, PMI, RSA, routes) ET de la Région (formation pro, lycées, FEDER). Elle est régie par l\'article 73 de la Constitution, avec la loi ordinaire n°2011-884 et la loi organique n°2011-883 du 27 juillet 2011.\n' +
    '</div>\n' +
    '</div>\n</div>\n';

  /* ── PARTIE 5 : MA PRÉSENTATION ── */
  html += '<div class="card">\n' +
    '<div class="card-header"><h2>🎤 Partie 5 – Ma présentation (5 minutes)</h2><p>Template à personnaliser et à apprendre par cœur</p></div>\n' +
    '<div class="card-body">\n' +

    '<div style="background:#f5f3ff;border:2px solid #7c3aed;border-radius:10px;padding:20px;margin-bottom:20px">\n' +
    '<div style="font-size:.75rem;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px">📝 STRUCTURE EN 5 BLOCS</div>\n' +

    '<div style="margin-bottom:14px;padding:12px;background:rgba(124,58,237,.07);border-radius:8px">\n' +
    '<strong style="color:#7c3aed">① Accroche & contact (30 sec)</strong><br>\n' +
    '<em style="color:var(--text-muted)">"Bonjour, je vous remercie de me recevoir. Je me présente : [Prénom Nom], j\'ai [âge] ans. Je suis titulaire d\'un Bachelor Ressources Humaines, ce qui m\'a donné une formation solide en gestion administrative du personnel, en droit social et en management des organisations."</em>\n' +
    '</div>\n' +

    '<div style="margin-bottom:14px;padding:12px;background:rgba(124,58,237,.07);border-radius:8px">\n' +
    '<strong style="color:#7c3aed">② Parcours & expérience (1 min)</strong><br>\n' +
    '<em style="color:var(--text-muted)">"Au cours de ma formation, j\'ai [vos expériences concrètes : stage, alternance, missions]. Ces expériences m\'ont permis de développer [compétences clés liées au poste : rigueur administrative, gestion de dossiers, maîtrise d\'outils RH, relation aux agents...]."</em>\n' +
    '</div>\n' +

    '<div style="margin-bottom:14px;padding:12px;background:rgba(124,58,237,.07);border-radius:8px">\n' +
    '<strong style="color:#7c3aed">③ Pourquoi ce poste spécifique (1 min)</strong><br>\n' +
    '<em style="color:var(--text-muted)">"Ce poste de gestionnaire paye ASFAM m\'attire particulièrement pour deux raisons. D\'abord, il se situe à l\'intersection de deux domaines qui me passionnent : la gestion RH rigoureuse et la protection de l\'enfance. Ensuite, travailler pour la CTM, c\'est contribuer à une mission de service public essentielle pour les enfants les plus vulnérables de Martinique."</em>\n' +
    '</div>\n' +

    '<div style="margin-bottom:14px;padding:12px;background:rgba(124,58,237,.07);border-radius:8px">\n' +
    '<strong style="color:#7c3aed">④ Ce que j\'apporte (1 min)</strong><br>\n' +
    '<em style="color:var(--text-muted)">"Je maîtrise [vos compétences concrètes]. J\'ai un réel intérêt pour la précision et la rigueur que demande la gestion de paye. Ma formation RH m\'a aussi appris à gérer des situations sensibles avec discernement et à travailler en équipe pluridisciplinaire. Je suis prête à monter rapidement en compétence sur les logiciels spécifiques à la CTM."</em>\n' +
    '</div>\n' +

    '<div style="padding:12px;background:rgba(124,58,237,.07);border-radius:8px">\n' +
    '<strong style="color:#7c3aed">⑤ Projet & motivation (30 sec)</strong><br>\n' +
    '<em style="color:var(--text-muted)">"M\'inscrire durablement dans la fonction publique territoriale martiniquaise, contribuer à l\'amélioration de la gestion RH des ASFAM, et m\'investir dans un service qui touche directement la protection des enfants — voilà ce qui m\'anime. Je suis disponible immédiatement et motivée pour rejoindre votre équipe."</em>\n' +
    '</div>\n' +
    '</div>\n' +

    '<div class="info-box"><div class="info-title">⏱️ Chronométrez-vous</div>\n' +
    'Entraînez-vous à voix haute en vous chronométrant. 5 minutes = ni trop court (manque de préparation) ni trop long (hors consigne). Parlez devant un miroir ou filmez-vous. Mémorisez la structure, pas les mots exacts.\n' +
    '</div>\n' +
    '</div>\n</div>\n';

  /* ── PARTIE 6 : QUESTIONS DU JURY ── */
  html += '<div class="card">\n' +
    '<div class="card-header"><h2>🎯 Partie 6 – Questions du jury et réponses modèles</h2><p>20 questions probables à préparer – cliquez pour révéler la réponse</p></div>\n' +
    '<div class="card-body">\n';

  var questions = [
    {
      cat: 'Motivation', catColor: '#7c3aed',
      q: 'Pourquoi postulez-vous pour ce poste ?',
      r: 'Valoriser 3 points : (1) votre formation RH vous donne les bases techniques de la paye et de la gestion administrative, (2) le secteur de la protection de l\'enfance vous engage personnellement (service public essentiel, population vulnérable), (3) la CTM représente un employeur d\'excellence sur le territoire martiniquais où vous souhaitez vous inscrire durablement. Évitez de dire « j\'aime aider les gens » sans concret.'
    },
    {
      cat: 'Motivation', catColor: '#7c3aed',
      q: 'Que savez-vous des Assistants Familiaux ?',
      r: 'Professionnel agréé par la PMI (DPMI en Martinique) qui accueille des enfants confiés par l\'ASE à son domicile. Contrat de travail de droit public avec la CTM. Rémunération spécifique : rémunération garantie + indemnité d\'entretien + sujétions éventuelles. Cadre : loi du 27 juin 2005, CASF art. L421-2. Agrément valable 5 ans, renouvelable, pour 1 à 3 enfants en principe.'
    },
    {
      cat: 'Motivation', catColor: '#7c3aed',
      q: 'Qu\'est-ce qui vous a attiré dans la CTM plutôt qu\'une autre collectivité ?',
      r: 'La CTM est une collectivité unique en France (fusion Département + Région depuis 2015), ce qui en fait un terrain d\'apprentissage exceptionnel. Elle gère des politiques sociales majeures pour la Martinique : ASE, PMI, RSA. C\'est aussi votre territoire d\'appartenance — vous connaissez les réalités locales (insularité, chlordécone, vie chère, démographie) qui influencent le travail des ASFAM.'
    },
    {
      cat: 'Technique', catColor: 'var(--primary)',
      q: 'Comment géreriez-vous la paye d\'un assistant familial dont l\'enfant a été retiré le 15 du mois ?',
      r: 'Identifier précisément la date de sortie de l\'enfant → calculer les indemnités d\'entretien dues jusqu\'au 15 (prorata du mois) → maintenir le salaire de base (à confirmer selon les règles CTM) → saisir la modification dans CIVIL RH → vérifier la cohérence avec SOLIS → notifier l\'agent du calcul. Si le retrait est brusque et non signalé à temps, un trop-perçu peut survenir : le calculer et engager la procédure de remboursement.'
    },
    {
      cat: 'Technique', catColor: 'var(--primary)',
      q: 'Qu\'est-ce qu\'un trop-perçu et comment le récupérez-vous ?',
      r: 'Somme versée à l\'agent au-delà de ce qui lui était dû (erreur de saisie, fin de placement non signalée, absence maladie tardive). Procédure : (1) calculer le montant exact avec justificatifs, (2) notifier l\'agent par courrier recommandé (montant, période, motif), (3) proposer un remboursement volontaire ou un échéancier (retenues sur salaire à venir), (4) saisir dans CIVIL RH, (5) suivre jusqu\'à solde nul. Base légale : délai de prescription 2 ans pour le remboursement (CGFP).'
    },
    {
      cat: 'Technique', catColor: 'var(--primary)',
      q: 'Comment suivez-vous les renouvellements d\'agrément ?',
      r: 'Tenir un tableau de bord dans Excel ou SOLIS listant pour chaque ASFAM : date de l\'agrément, date d\'échéance, nombre d\'enfants autorisés. Paramétrer des alertes à 6 mois et 3 mois avant l\'échéance. Alerter l\'ASFAM et la DPMI en amont. Si le renouvellement tarde : vérifier que l\'agent n\'est pas en situation irrégulière, car l\'agrément conditionne l\'emploi.'
    },
    {
      cat: 'Technique', catColor: 'var(--primary)',
      q: 'Citez les logiciels que vous utiliseriez sur ce poste.',
      r: 'SOLIS (gestion de l\'action sociale, suivi des placements et agréments), CIVIL RH de Berger-Levrault (gestion des carrières, contrats et paye des ASFAM), GRAND ANGLE de Berger-Levrault (suivi comptable et mandatements), Microsoft Office / Excel (tableaux de bord, statistiques). Vous n\'avez pas forcément utilisé SOLIS directement → l\'admettre avec assurance et préciser votre capacité d\'adaptation rapide aux outils métier.'
    },
    {
      cat: 'Technique', catColor: 'var(--primary)',
      q: 'Comment organisez-vous la gestion des dossiers d\'une centaine d\'assistants familiaux ?',
      r: 'Classer les dossiers par ordre alphabétique ou par matricule dans la base SOLIS/CIVIL RH. Créer un tableau de suivi Excel avec statut de chaque agent (actif / suspendu / en attente de renouvellement). Prioriser selon les urgences (agrément expirant, trop-perçu en cours). Maintenir une liste des enfants accueillis par ASFAM à jour. Faire des points hebdomadaires avec les AS FAMS pour anticiper les changements.'
    },
    {
      cat: 'Situation', catColor: '#d97706',
      q: 'Un assistant familial vous contacte furieux car sa paye est incomplète ce mois-ci. Que faites-vous ?',
      r: 'Méthode STAR : (S) Appel urgent d\'un ASFAM mécontent. (T) Comprendre, rassurer et résoudre. (A) Écouter calmement, noter le problème précisément, lui indiquer que vous allez vérifier dans les 2h. Ouvrir CIVIL RH, vérifier sa fiche de paye, identifier l\'anomalie (saisie manquante, absence incorrecte…). Si erreur CTM : régularisation rapide par virement ou sur la prochaine paye avec lettre d\'excuse. Si erreur à l\'origine de l\'agent : expliquer posément. (R) Agent informé et rassuré, dossier clos.'
    },
    {
      cat: 'Situation', catColor: '#d97706',
      q: 'Un enfant est retiré d\'une famille d\'accueil en urgence un vendredi à 18h. Que fait votre service ?',
      r: 'Ce n\'est pas votre décision (c\'est l\'ASE/justice), mais votre rôle administratif : vous serez informé le lundi matin via l\'AS FAMS ou la circonscription. Vous devrez immédiatement : (1) noter la date exacte de sortie dans SOLIS, (2) recalculer la paye proratisée, (3) prévenir l\'ASFAM de la modification, (4) vérifier si une famille relais a pris l\'enfant (impact paye autre ASFAM). L\'urgence de terrain est gérée par l\'ASE, votre urgence administrative suit le lendemain.'
    },
    {
      cat: 'Situation', catColor: '#d97706',
      q: 'Vous avez un pic de travail fin de mois avec 3 cas urgents simultanés. Comment priorisez-vous ?',
      r: 'Technique de priorisation : (1) Identifier les impacts financiers immédiats (paye du 28 → bloquer une erreur avant le virement, priorité absolue), (2) Les notifications avec délai légal (trop-perçu avec délai de prescription), (3) Les demandes qui peuvent attendre 48h. Informer le responsable de la surcharge. Si nécessaire, solliciter un collègue pour une tâche ponctuelle. Documenter chaque cas dans le système pour ne rien oublier.'
    },
    {
      cat: 'Situation', catColor: '#d97706',
      q: 'Un assistant familial vous demande des informations confidentielles sur l\'enfant qu\'il accueille. Que faites-vous ?',
      r: 'Les informations sur les enfants (identité des parents biologiques, dossier judiciaire, antécédents) sont couvertes par le secret professionnel et la confidentialité des dossiers ASE. En tant que gestionnaire paye, vous n\'avez accès qu\'aux données strictement nécessaires à la paye (identification, nombre d\'enfants accueillis). Pour toute information sur l\'enfant, l\'ASFAM doit s\'adresser à l\'AS FAMS référent. Vous expliquez cela sans brusquerie.'
    },
    {
      cat: 'RH & Organisation', catColor: 'var(--success)',
      q: 'Que sont les assistants familiaux au plan du statut juridique ?',
      r: 'Ni fonctionnaires, ni salariés de droit privé, mais agents contractuels de droit public à statut spécifique. Leur relation de travail avec la CTM est régie par la loi 2005-706 et le CASF. Ils ont un contrat de travail mais ne sont pas soumis au Code du travail ordinaire. Le CGFP (Code Général de la Fonction Publique depuis 2022) ne leur est pas directement applicable, mais le droit public encadre leur emploi.'
    },
    {
      cat: 'RH & Organisation', catColor: 'var(--success)',
      q: 'Quelle est la différence entre un assistant familial et un assistant maternel ?',
      r: 'Assistant maternel : garde des enfants de moins de 6 ans chez lui pour le compte de parents employeurs privés. Contrat privé, Pajemploi, URSSAF. Agrément PMI également mais pour 1-4 enfants de moins de 6 ans. Assistant familial : accueille des enfants confiés par décision administrative ou judiciaire (ASE, juge des enfants). L\'employeur est la collectivité. Durée d\'accueil : potentiellement années. Ce sont deux professions distinctes même si les deux nécessitent l\'agrément PMI.'
    },
    {
      cat: 'RH & Organisation', catColor: 'var(--success)',
      q: 'Combien d\'enfants un assistant familial peut-il accueillir ?',
      r: 'La règle générale est de 1 à 3 enfants simultanément, fixée dans l\'agrément PMI. Une dérogation exceptionnelle peut porter à 4, notamment pour garder une fratrie ou en cas de manque de places. Le nombre exact est stipulé dans l\'agrément de chaque ASFAM. C\'est une donnée clé pour le calcul de la paye (les indemnités varient selon le nombre d\'enfants réellement accueillis chaque mois).'
    },
    {
      cat: 'RH & Organisation', catColor: 'var(--success)',
      q: 'Quelle est la durée de validité de l\'agrément ? Qui peut le retirer ?',
      r: '5 ans, renouvelable. L\'agrément est délivré et peut être suspendu ou retiré par le Président du Conseil Exécutif de la CTM (sur proposition de la DPMI), après évaluation par la PMI. Les causes de retrait : logement inadapté, problème de santé physique ou psychique, maltraitance, non-respect des conditions. Le retrait de l\'agrément entraîne automatiquement la fin du contrat de travail (cause réelle et sérieuse).'
    },
    {
      cat: 'CTM & Martinique', catColor: '#0ea5e9',
      q: 'Qu\'est-ce que la CTM et depuis quand existe-t-elle ?',
      r: 'Collectivité Territoriale de Martinique : collectivité unique créée le 18 décembre 2015 par la fusion du Conseil Général et du Conseil Régional (loi du 27 juillet 2011). Organes : Assemblée de Martinique (51 conseillers) + Conseil Exécutif (9 membres, Serge Letchimy président). Elle exerce à la fois les compétences du département ET de la région. Statut fondé sur l\'article 73 de la Constitution (DROM).'
    },
    {
      cat: 'CTM & Martinique', catColor: '#0ea5e9',
      q: 'Quels sont les enjeux actuels de la protection de l\'enfance en Martinique ?',
      r: 'Fort taux de pauvreté et de chômage (15-17%) → précarité des familles → plus de mesures de placement. Vieillissement des ASFAM (fidélisation et renouvellement du vivier). Chlordécone : problèmes de santé multigénérationnels impactant les familles. Manque de structures d\'hébergement alternatives. Éloignement géographique = isolation des ASFAM dans certaines zones rurales. Enjeu de recrutement de nouveaux professionnels agréés en nombre suffisant.'
    },
    {
      cat: 'Qualités professionnelles', catColor: '#16a34a',
      q: 'Quelles qualités sont essentielles pour ce poste selon vous ?',
      r: 'Rigueur et précision : la paye n\'admet pas l\'erreur (impact financier direct sur les agents). Discrétion et confidentialité : vous gérez des données sensibles (enfants placés, situations familiales). Organisation : gestion d\'un portefeuille d\'une centaine d\'agents avec des délais contraints. Sens relationnel : interface entre l\'ASFAM (souvent dans l\'urgence émotionnelle) et l\'administration. Réactivité : les situations changent vite (placement brusque, retrait d\'agrément urgent). Maîtrise des outils numériques.'
    },
    {
      cat: 'Qualités professionnelles', catColor: '#16a34a',
      q: 'Avez-vous des questions ?',
      r: 'TOUJOURS avoir 2-3 questions préparées. Exemples : (1) « Comment est organisée la montée en compétence sur SOLIS et CIVIL RH à la prise de poste ? Y a-t-il un tutorat prévu ? » (2) « Comment le service gère-t-il les pics d\'activité en fin de mois de paye ? » (3) « Quelle est la taille du portefeuille ASFAM que je gérerais et comment est-il réparti entre les gestionnaires ? » Évitez : les questions sur le salaire ou les congés au premier entretien.'
    },
    {
      cat: 'Technique', catColor: 'var(--primary)',
      q: 'Comment éviter les erreurs de paye en fin de mois ?',
      r: 'Mettre en place une routine : liste des changements du mois, comparaison SOLIS/CIVIL RH, contrôle des dates exactes, vérification des agréments et tableau des anomalies. Je privilégie un double contrôle sur les dossiers sensibles : sortie d&rsquo;enfant, suspension, arrêt maladie, reprise, extension d&rsquo;agrément.'
    },
    {
      cat: 'Technique', catColor: 'var(--primary)',
      q: 'Que faites-vous si deux sources donnent des informations différentes ?',
      r: 'Je ne choisis pas seule la donnée la plus pratique. Je vérifie la source primaire, je sollicite la circonscription ou la DPMI selon le sujet, je demande une confirmation écrite si nécessaire, puis je corrige les outils pour éviter que l&rsquo;erreur se reproduise.'
    },
    {
      cat: 'Situation', catColor: '#d97706',
      q: 'Un ASFAM dit ne pas comprendre une retenue sur salaire. Comment répondez-vous ?',
      r: 'Je reste factuelle : je reprends la période, le motif, le montant, le document de notification et le mode de calcul. Si la retenue est justifiée, j&rsquo;explique avec pédagogie. Si un doute existe, je suspends toute réponse définitive, je vérifie et je reviens avec un délai précis.'
    },
    {
      cat: 'Situation', catColor: '#d97706',
      q: 'Vous découvrez une erreur favorable à la collectivité mais défavorable à l&rsquo;agent. Que faites-vous ?',
      r: 'Je la traite avec la même rigueur qu&rsquo;un trop-perçu : vérification, information hiérarchique, correction et régularisation. La fiabilité de la paye protège aussi l&rsquo;agent ; le service public implique équité et transparence.'
    },
    {
      cat: 'RH & Organisation', catColor: 'var(--success)',
      q: 'Quelle posture adopter avec des assistants familiaux parfois en tension ?',
      r: 'Écoute, calme, fermeté administrative et respect. Je distingue l&rsquo;émotion de la règle : l&rsquo;ASFAM peut être inquiet car la paye touche son quotidien, mais je dois répondre avec des faits, des délais et une trace.'
    },
    {
      cat: 'RH & Organisation', catColor: 'var(--success)',
      q: 'Comment montrer que votre Bachelor RH est utile pour ce poste ?',
      r: 'Je fais le lien avec les compétences concrètes : gestion administrative du personnel, droit social, confidentialité, outils RH, relation agent, organisation, suivi d&rsquo;échéances, contrôle de dossiers et posture professionnelle.'
    },
    {
      cat: 'CTM & Martinique', catColor: '#0ea5e9',
      q: 'Pourquoi la CTM a-t-elle un rôle central dans ce poste ?',
      r: 'Parce que la CTM exerce les compétences départementales et régionales. La protection de l&rsquo;enfance relève du bloc social départemental, et la DGA RH porte la gestion employeur des ASFAM : contrat, dossier administratif, rémunération, congés et régularisations.'
    },
    {
      cat: 'Qualités professionnelles', catColor: '#16a34a',
      q: 'Si vous ne connaissez pas une règle pendant l&rsquo;entretien, que dites-vous ?',
      r: 'Il vaut mieux être honnête et professionnel : « Je ne veux pas vous donner une réponse approximative ; mon réflexe serait de vérifier le texte, la procédure interne et de sécuriser la réponse avant action. » Cela montre de la rigueur, pas une faiblesse.'
    }
  ];

  questions.forEach(function(item, idx) {
    html += '<div style="border:1px solid var(--border);border-radius:10px;overflow:hidden;margin-bottom:10px">\n' +
      '<div onclick="var a=document.getElementById(\'asfam-a-' + idx + '\');a.style.display=a.style.display===\'none\'?\'block\':\'none\'" style="display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;background:var(--surface-2);gap:12px">\n' +
      '<div style="flex:1">\n' +
      '  <span style="font-size:.72rem;background:' + item.catColor + ';color:#fff;border-radius:4px;padding:2px 8px;margin-right:8px">' + item.cat + '</span>\n' +
      '  <span style="font-weight:600;font-size:.93rem;color:var(--text)">' + item.q + '</span>\n' +
      '</div>\n' +
      '<span style="color:var(--text-muted);font-size:.8rem;white-space:nowrap">▾ Voir</span>\n' +
      '</div>\n' +
      '<div id="asfam-a-' + idx + '" style="display:none;padding:14px 18px;background:#fff;border-top:1px solid var(--border);font-size:.88rem;line-height:1.7;color:var(--text)">' + item.r + '</div>\n' +
      '</div>\n';
  });

  html += '</div>\n</div>\n';

  /* ── PARTIE 7 : FICHES SYNTHÈSE ── */
  html += '<div class="card">\n' +
    '<div class="card-header"><h2>📌 Partie 7 – Les 10 chiffres et dates clés à retenir</h2><p>Citez-les avec assurance face au jury</p></div>\n' +
    '<div class="card-body">\n' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px">\n' +
    '<div style="background:var(--primary-50);border-radius:8px;padding:14px;text-align:center"><div style="font-size:1.8rem;font-weight:900;color:var(--primary)">2005</div><div style="font-size:.8rem;color:var(--text-muted)">Loi fondatrice<br>assistants familiaux</div></div>\n' +
    '<div style="background:#f5f3ff;border-radius:8px;padding:14px;text-align:center"><div style="font-size:1.8rem;font-weight:900;color:#7c3aed">5 ans</div><div style="font-size:.8rem;color:var(--text-muted)">Durée de l\'agrément<br>PMI, renouvelable</div></div>\n' +
    '<div style="background:#f0fdf4;border-radius:8px;padding:14px;text-align:center"><div style="font-size:1.8rem;font-weight:900;color:var(--success)">1 à 3</div><div style="font-size:.8rem;color:var(--text-muted)">Enfants maximum<br>par ASFAM</div></div>\n' +
    '<div style="background:#fff7ed;border-radius:8px;padding:14px;text-align:center"><div style="font-size:1.8rem;font-weight:900;color:#d97706">240h</div><div style="font-size:.8rem;color:var(--text-muted)">Formation au diplôme<br>+ stage préparatoire</div></div>\n' +
    '<div style="background:var(--primary-50);border-radius:8px;padding:14px;text-align:center"><div style="font-size:1.8rem;font-weight:900;color:var(--primary)">2015</div><div style="font-size:.8rem;color:var(--text-muted)">Création de la CTM<br>(18 décembre)</div></div>\n' +
    '<div style="background:#f5f3ff;border-radius:8px;padding:14px;text-align:center"><div style="font-size:1.8rem;font-weight:900;color:#7c3aed">51</div><div style="font-size:.8rem;color:var(--text-muted)">Conseillers<br>Assemblée de Martinique</div></div>\n' +
    '<div style="background:#f0fdf4;border-radius:8px;padding:14px;text-align:center"><div style="font-size:1.8rem;font-weight:900;color:var(--success)">Art. 73</div><div style="font-size:.8rem;color:var(--text-muted)">Constitution – statut<br>DROM (Martinique)</div></div>\n' +
    '<div style="background:#fef2f2;border-radius:8px;padding:14px;text-align:center"><div style="font-size:1.8rem;font-weight:900;color:var(--danger)">L421-2</div><div style="font-size:.8rem;color:var(--text-muted)">CASF – définition<br>assistant familial</div></div>\n' +
    '<div style="background:#fff7ed;border-radius:8px;padding:14px;text-align:center"><div style="font-size:1.8rem;font-weight:900;color:#d97706">2 ans</div><div style="font-size:.8rem;color:var(--text-muted)">Délai de prescription<br>remboursement trop-perçu</div></div>\n' +
    '<div style="background:var(--primary-50);border-radius:8px;padding:14px;text-align:center"><div style="font-size:1.8rem;font-weight:900;color:var(--primary)">3</div><div style="font-size:.8rem;color:var(--text-muted)">Logiciels clés :<br>SOLIS · CIVIL RH · GRAND ANGLE</div></div>\n' +
    '</div>\n' +
    '</div>\n</div>\n';

  /* ── PARTIE 8 : YOUTUBE ── */
  html += '<div class="card">\n' +
    '<div class="card-header"><h2>▶️ Partie 8 – Ressources vidéo précises</h2><p>Liens directs vers des vidéos. À utiliser après la lecture active, pas à la place.</p></div>\n' +
    '<div class="card-body">\n' +
    '<div style="display:flex;flex-direction:column;gap:12px">\n' +
    videoLink('https://www.youtube.com/watch?v=5k9q1xBgpFk', 'Assistants familiaux : Rencontre avec Aimie', 'Comprendre le quotidien et le vocabulaire du métier.', 'Priorité 1 · ASFAM') +
    videoLink('https://www.youtube.com/watch?v=1411_3SQjIs', 'Assistants familiaux : le rôle des familles d&rsquo;accueil', 'À regarder pour expliquer la place de l&rsquo;accueil familial dans la protection de l&rsquo;enfance.', 'Priorité 1 · Protection de l&rsquo;enfance') +
    videoLink('https://www.youtube.com/watch?v=G8afWWH7SL4', 'Devenir famille d&rsquo;accueil : métier raconté par Cédric', 'Témoignage utile pour comprendre la posture et les contraintes du métier.', 'Priorité 2 · Témoignage') +
    videoLink('https://www.youtube.com/watch?v=KCSIzh7cvbw', 'Le recrutement dans la fonction publique territoriale ?', 'À regarder pour préparer la posture devant un jury de collectivité.', 'Priorité 2 · Entretien FPT') +
    videoLink('https://www.youtube.com/watch?v=zttied8qWt4', 'Quelles questions attendre lors de l&rsquo;oral avec le jury ?', 'Bon complément pour anticiper les questions classiques d&rsquo;entretien.', 'Priorité 2 · Jury') +
    videoLink('https://www.youtube.com/watch?v=YiayBBY2eEk', 'Les ressources humaines dans la fonction publique territoriale', 'Vision large RH territoriale : utile pour relier le poste ASFAM à la DGA RH.', 'Priorité 3 · RH publique') +
    '</div>\n' +
    '<div class="info-box" style="margin-top:16px;background:#fff7ed;border-left-color:#d97706"><div class="info-title">💡 Comment utiliser ces liens</div>\n' +
    'Ces liens ouvrent directement des vidéos. Regardez en priorité les deux premières, puis notez 3 phrases réutilisables à l&rsquo;oral : rôle de l&rsquo;ASFAM, lien avec l&rsquo;ASE, posture attendue d&rsquo;un service RH.\n' +
    '</div>\n' +
    '</div>\n</div>\n';

  /* ── QCM DE PRÉPARATION ── */
  html += '<div class="card" id="asfam-qcm-card" style="border-left:4px solid #7c3aed">\n' +
    '<div class="card-header"><h2>🧠 QCM de préparation</h2><p>40 questions sur la CTM, le poste et les mises en situation · Correction et aide à la révision immédiate</p></div>\n' +
    '<div class="card-body">\n' +
    '  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px">\n' +
    '    <button onclick="asfamQcmStart(\'ctm\')" style="padding:10px 20px;background:#7c3aed;color:#fff;border:none;border-radius:8px;font-weight:700;cursor:pointer;font-size:.9rem">🏛️ CTM (18 questions)</button>\n' +
    '    <button onclick="asfamQcmStart(\'poste\')" style="padding:10px 20px;background:var(--primary);color:#fff;border:none;border-radius:8px;font-weight:700;cursor:pointer;font-size:.9rem">💼 Poste ASFAM (22 questions)</button>\n' +
    '    <button onclick="asfamQcmStart(\'all\')" style="padding:10px 20px;background:linear-gradient(135deg,#7c3aed,var(--primary));color:#fff;border:none;border-radius:8px;font-weight:700;cursor:pointer;font-size:.9rem">🎯 Tout (40 questions)</button>\n' +
    '  </div>\n' +
    '  <div id="asfam-qcm-zone" style="min-height:60px"><p style="color:var(--text-muted);font-style:italic">Choisissez un thème ci-dessus pour commencer le QCM.</p></div>\n' +
    '</div>\n</div>\n';

  /* ── BONNE CHANCE ── */
  html += '<div style="background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff;border-radius:14px;padding:28px;text-align:center;margin-bottom:24px">\n' +
    '<div style="font-size:2rem;margin-bottom:8px">🍀 🇲🇶 💪</div>\n' +
    '<h2 style="font-size:1.4rem;font-weight:800;margin-bottom:8px">Vous êtes prête !</h2>\n' +
    '<p style="opacity:.85;max-width:500px;margin:0 auto">Vous avez passé le test écrit, vous avez toutes les compétences. L\'entretien, c\'est vous montrer telle que vous êtes : préparée, motivée et ancrée dans votre territoire. Allez-y avec confiance !</p>\n' +
    '</div>\n';

  html += '</section>\n';

  /* ── INJECTION ── */
  var container = document.querySelector('.main-content');
  if (container && !document.getElementById('entretien-asfam')) {
    container.insertAdjacentHTML('beforeend', html);
    var countdownTimer = document.getElementById('asfam-countdown');
    if (countdownTimer) {
      countdownTimer.innerHTML = buildCountdown();
      setInterval(function () {
        countdownTimer.innerHTML = buildCountdown();
      }, 30000);
    }

    /* ── QCM ENGINE ── */
    var _QCM = [
      /* ---- CTM ---- */
      { cat:'ctm', q:'Que signifie le sigle CTM ?',
        opts:['Comité Territorial Martiniquais','Collectivité Territoriale de Martinique','Chambre Territoriale de Martinique','Conseil des Territoires de Martinique'],
        c:1, expl:'CTM = Collectivité Territoriale de Martinique. Elle a remplacé le Conseil Général et le Conseil Régional en une seule collectivité unique, opérationnelle depuis décembre 2015.',
        rev:'Revoir : Partie 4 de cet onglet – "Structure et rôle de la CTM"' },

      { cat:'ctm', q:'En quelle année la CTM a-t-elle été effectivement mise en place ?',
        opts:['2010','2011','2015','2018'],
        c:2, expl:'La loi organique a été votée en 2011 mais la CTM est devenue opérationnelle en décembre 2015 après les premières élections territoriales.',
        rev:'Revoir : Partie 4 de cet onglet – "Historique de la CTM"' },

      { cat:'ctm', q:'Combien de conseillers compte l\'Assemblée de Martinique ?',
        opts:['41 conseillers','51 conseillers','61 conseillers','71 conseillers'],
        c:1, expl:'L\'Assemblée de Martinique compte 51 conseillers territoriaux élus au scrutin proportionnel à deux tours pour un mandat de 6 ans.',
        rev:'Revoir : Partie 4 de cet onglet – "L\'Assemblée de Martinique"' },

      { cat:'ctm', q:'Que signifie DGA RH, la direction où se situe votre poste ?',
        opts:['Direction de Gestion Administrative des Relations Humaines','Délégation Générale aux Activités RH','Direction Générale Adjointe des Ressources Humaines','Département de Gestion et d\'Administration RH'],
        c:2, expl:'DGA RH = Direction Générale Adjointe des Ressources Humaines. C\'est la direction de la CTM qui gère les ressources humaines, dont le service en charge de la paye des Assistants Familiaux.',
        rev:'Revoir : Partie 1 de cet onglet – "Le poste et son rattachement"' },

      { cat:'ctm', q:'Quelle direction délivre les agréments aux Assistants Familiaux à la CTM ?',
        opts:['La DGA RH','La DSI','La DPPEF','La DPMI'],
        c:3, expl:'La DPMI (Direction de la Protection Maternelle et Infantile) instruit et délivre les agréments ASFAM au nom du Président de la CTM. Elle évalue les conditions d\'accueil à domicile.',
        rev:'Revoir : Partie 2 de cet onglet – "L\'agrément des Assistants Familiaux"' },

      { cat:'ctm', q:'Quel article de la Constitution régit les DROM (dont la Martinique) ?',
        opts:['Article 72','Article 73','Article 74','Article 75'],
        c:1, expl:'L\'article 73 de la Constitution régit les DOM/DROM. Il permet l\'adaptation des lois et règlements aux caractéristiques et contraintes particulières de ces territoires. La Martinique est un DROM.',
        rev:'Revoir : Manuel principal – Partie 8 "Martinique & Outre-Mer"' },

      { cat:'ctm', q:'La CTM résulte de la fusion de quelles deux institutions ?',
        opts:['La Préfecture et les communes','Le Conseil Général (département) et le Conseil Régional','Le Sénat local et l\'Assemblée nationale','La CTAP et le CDG'],
        c:1, expl:'La CTM a fusionné le Conseil Général (compétences départementales) et le Conseil Régional (compétences régionales) en une seule collectivité unique. C\'est sa particularité principale.',
        rev:'Revoir : Partie 4 de cet onglet – "Structure et rôle de la CTM"' },

      { cat:'ctm', q:'Quel texte a créé la Collectivité Territoriale de Martinique ?',
        opts:['Loi du 13 août 2004','Lois du 27 juillet 2011 relatives aux collectivités de Guyane et de Martinique','Ordonnance du 7 janvier 2016','Loi du 3 août 2018'],
        c:1, expl:'La CTM repose sur les textes du 27 juillet 2011 : loi ordinaire n°2011-884 et loi organique n°2011-883. Elles font suite au référendum du 24 janvier 2010 où les Martiniquais ont voté pour une collectivité unique.',
        rev:'Revoir : Partie 4 de cet onglet – "Historique de la CTM"' },

      { cat:'ctm', q:'Que gère la DSI à la CTM (sigle mentionné dans votre DVE) ?',
        opts:['La Direction des Services aux Individus','La Direction des Systèmes d\'Information','La Direction de la Solidarité et de l\'Insertion','La Direction des Subventions et Investissements'],
        c:1, expl:'La DSI = Direction des Systèmes d\'Information. Elle gère les outils informatiques de la CTM, notamment les logiciels SOLIS, CIVIL RH et GRAND ANGLE que vous utiliserez au quotidien.',
        rev:'Revoir : Partie 1 de cet onglet – "Les logiciels (SOLIS, CIVIL RH, GRAND ANGLE)"' },

      { cat:'ctm', q:'Combien d\'agents la CTM emploie-t-elle environ ?',
        opts:['Environ 2 000 agents','Environ 7 000 agents','Environ 15 000 agents','Environ 30 000 agents'],
        c:1, expl:'La CTM emploie environ 7 000 agents, ce qui en fait l\'un des plus grands employeurs de Martinique. Cela inclut les agents titulaires et contractuels des deux collectivités fusionnées.',
        rev:'Revoir : Partie 4 de cet onglet – "La CTM en chiffres"' },

      { cat:'ctm', q:'Quelle compétence de la CTM justifie son rôle dans les dossiers ASFAM ?',
        opts:['La police nationale','La protection de l\'enfance et l\'aide sociale à l\'enfance','La diplomatie','La justice pénale'],
        c:1, expl:'La CTM exerce les compétences sociales de niveau départemental, dont la protection de l\'enfance et l\'ASE. Les ASFAM interviennent dans ce cadre.',
        rev:'Revoir : Partie 4 – "CTM, ASE et compétences sociales"' },

      { cat:'ctm', q:'Quel est le bon réflexe si le jury demande la différence entre État et CTM ?',
        opts:['Dire que la CTM dépend hiérarchiquement du préfet','Expliquer la décentralisation : la CTM est une collectivité distincte, contrôlée a posteriori par le préfet','Dire que ce sont deux mots pour la même administration','Dire que le préfet signe les bulletins de salaire ASFAM'],
        c:1, expl:'La CTM est une collectivité territoriale avec personnalité morale, organes élus et compétences propres. Le préfet exerce le contrôle de légalité, pas une tutelle hiérarchique.',
        rev:'Revoir : décentralisation, contrôle de légalité et libre administration.' },

      { cat:'ctm', q:'Quel organe conduit l\'action administrative de la CTM ?',
        opts:['Le Conseil exécutif','Le Sénat','Le tribunal administratif','La DDFIP uniquement'],
        c:0, expl:'Le Conseil exécutif conduit l\'action de la Collectivité Territoriale de Martinique. Son président est aussi chef des services de la collectivité.',
        rev:'Revoir : Assemblée de Martinique vs Conseil exécutif.' },

      { cat:'ctm', q:'Pourquoi la DGA RH est-elle concernée par les ASFAM ?',
        opts:['Parce que les ASFAM sont des agents à gérer administrativement et à rémunérer','Parce que la DGA RH décide seule du placement des enfants','Parce que la DGA RH remplace la DPMI','Parce que la DGA RH est une juridiction'],
        c:0, expl:'Le poste relève de la gestion employeur : dossiers, contrats, paye, congés, régularisations, relation administrative avec les ASFAM.',
        rev:'Revoir : rattachement DGA RH et limites du poste.' },

      { cat:'ctm', q:'Quel partenaire interne est le plus directement lié aux agréments ?',
        opts:['DPMI','DDFIP','Cabinet du président','Service communication'],
        c:0, expl:'La DPMI est liée à l\'instruction, au suivi, au renouvellement et aux décisions concernant les agréments des assistants familiaux.',
        rev:'Revoir : DPMI, agrément, renouvellement, extension et retrait.' },

      { cat:'ctm', q:'Quel partenaire apporte les informations de terrain sur les accueils ?',
        opts:['Circonscriptions / AS FAMS','Archives nationales','Direction des routes','Sénat'],
        c:0, expl:'Les circonscriptions et AS FAMS suivent les situations sur le terrain et transmettent les changements utiles à la gestion administrative et paye.',
        rev:'Revoir : circuit d\'information entre terrain, SOLIS et paye.' },

      { cat:'ctm', q:'Quelle réponse montre une bonne posture territoriale ?',
        opts:['Je veux juste un poste stable','Je souhaite contribuer au service public martiniquais, avec rigueur RH et compréhension des enjeux sociaux locaux','Je ne connais pas la CTM','Je préfère ne pas travailler avec les services sociaux'],
        c:1, expl:'Le jury attend une motivation professionnelle, territoriale et liée au poste, pas seulement une recherche de stabilité.',
        rev:'Revoir : motivation CTM, service public et protection de l\'enfance.' },

      { cat:'ctm', q:'Quel point local peut être cité prudemment sur la protection de l\'enfance en Martinique ?',
        opts:['Aucun enjeu social spécifique','Précarité, isolement de certaines familles, besoin de familles d\'accueil et continuité du service public','La CTM ne s\'occupe pas du social','La Martinique n\'a pas de compétence ASE'],
        c:1, expl:'Il faut rester prudent mais montrer que l\'on comprend les réalités locales : précarité, familles vulnérables, besoin de professionnels fiables et suivis.',
        rev:'Revoir : enjeux locaux et formulation mesurée devant un jury.' },

      /* ---- POSTE ASFAM ---- */
      { cat:'poste', q:'Que signifie le sigle ASFAM ?',
        opts:['Agent Spécialisé de la Fonction Administrative en Martinique','Assistant(e) Familial(e)','Associé Fonctionnaire de l\'Action Médico-sociale','Accompagnateur Social et Familial en Martinique'],
        c:1, expl:'ASFAM = Assistant(e) Familial(e). Ce sont des professionnels qui accueillent à leur domicile, de façon permanente et continue, des enfants ou jeunes majeurs confiés par la CTM.',
        rev:'Revoir : Partie 2 de cet onglet – "Définition et cadre légal des ASFAM"' },

      { cat:'poste', q:'Quel texte de loi encadre principalement le statut des assistants familiaux ?',
        opts:['Loi du 2 janvier 2002 rénovant l\'action sociale','Loi du 27 juin 2005 relative aux assistants maternels et familiaux','Loi du 5 mars 2007 réformant la protection de l\'enfance','Loi du 14 mars 2016 relative à la protection de l\'enfant'],
        c:1, expl:'La loi n°2005-706 du 27 juin 2005 a profondément réformé le statut des assistants familiaux : agrément, formation obligatoire de 240h, contrat de travail avec la collectivité, rémunération minimale.',
        rev:'Revoir : Partie 2 de cet onglet – "Cadre législatif des ASFAM"' },

      { cat:'poste', q:'Quel logiciel est utilisé pour le suivi socio-éducatif des mineurs confiés à la CTM ?',
        opts:['GRAND ANGLE','CIVIL RH','SOLIS','ORACLE Siebel'],
        c:2, expl:'SOLIS est le logiciel de gestion de l\'action sociale et médico-sociale. Il permet de suivre les dossiers des mineurs protégés, leur placement et le lien avec les assistants familiaux.',
        rev:'Revoir : Partie 1 de cet onglet – "Le logiciel SOLIS"' },

      { cat:'poste', q:'Quel logiciel de paye et de gestion RH est utilisé à la CTM ?',
        opts:['SAP HR','GRAND ANGLE','e-RH','CIVIL RH'],
        c:3, expl:'CIVIL RH (édité par Berger-Levrault) est le logiciel de gestion des ressources humaines et de la paye. Il gère les carrières, les contrats des ASFAM et l\'édition des bulletins de salaire.',
        rev:'Revoir : Partie 1 de cet onglet – "Le logiciel CIVIL RH"' },

      { cat:'poste', q:'Quel logiciel comptable et financier est utilisé à la CTM ?',
        opts:['GRAND ANGLE','SOLIS','CIVIL FINANCES','HELIOS'],
        c:0, expl:'GRAND ANGLE est le logiciel de comptabilité et de gestion financière de la CTM (édité par Berger-Levrault). Il est interfacé avec CIVIL RH pour le traitement des mandats de paye.',
        rev:'Revoir : Partie 1 de cet onglet – "Le logiciel GRAND ANGLE"' },

      { cat:'poste', q:'Sur quel article du CASF (Code de l\'Action Sociale et des Familles) l\'assistant familial est-il défini ?',
        opts:['Article L411-1','Article L421-1','Article L421-2','Article L441-1'],
        c:2, expl:'L\'article L421-2 du CASF définit l\'assistant familial comme la personne qui accueille habituellement et de façon permanente des mineurs et des jeunes majeurs de moins de 21 ans à son domicile, moyennant rémunération.',
        rev:'Revoir : Partie 2 de cet onglet – "Article L421-2 du CASF"' },

      { cat:'poste', q:'Quelle est la durée maximale d\'un agrément ASFAM ?',
        opts:['1 an renouvelable','3 ans renouvelables','5 ans renouvelables','10 ans renouvelables'],
        c:2, expl:'L\'agrément est accordé pour 5 ans renouvelables. Il est délivré par la DPMI et précise le nombre et l\'âge maximum des enfants que l\'ASFAM peut accueillir.',
        rev:'Revoir : Partie 2 de cet onglet – "L\'agrément : durée et renouvellement"' },

      { cat:'poste', q:'Qu\'est-ce qu\'un "trop-perçu" dans le contexte de la paye des ASFAM ?',
        opts:['Une prime exceptionnelle pour service rendu','Une somme versée par erreur que la collectivité doit récupérer','Une indemnité de déplacement forfaitaire','Un supplément de salaire pour accueil d\'urgence'],
        c:1, expl:'Un trop-perçu est une somme versée à tort à l\'agent (erreur de calcul, salaire versé pendant une période non travaillée…). La collectivité doit le récupérer via retenue sur salaire ou titre de recettes, en respectant une procédure stricte (notification écrite, délai, seuils).',
        rev:'Revoir : Partie 3 de cet onglet – "Les trop-perçus : procédure et récupération"' },

      { cat:'poste', q:'Quel est le minimum garanti pour la part correspondant au premier accueil ?',
        opts:['0,5 SMIC mensuel','Le SMIC mensuel','1,5 SMIC mensuel','Un montant libre sans minimum'],
        c:1, expl:'Depuis la revalorisation applicable depuis 2022, la part correspondant au premier accueil ne peut pas être inférieure au SMIC mensuel. Les accueils supplémentaires ont aussi un minimum réglementaire en référence au SMIC.',
        rev:'Revoir : Partie 3 de cet onglet – "La rémunération des ASFAM"' },

      { cat:'poste', q:'Combien d\'heures de formation les ASFAM doivent-ils effectuer dans les 3 ans suivant leur premier accueil ?',
        opts:['60 heures','120 heures','240 heures','300 heures'],
        c:2, expl:'La loi du 27 juin 2005 impose 240 heures de formation obligatoire pour les ASFAM dans les 3 ans suivant la première prise en charge d\'un enfant. Elle peut être dispensée par le CNFPT ou un organisme agréé.',
        rev:'Revoir : Partie 2 de cet onglet – "La formation obligatoire des ASFAM"' },

      { cat:'poste', q:'Quel est le meilleur réflexe avant de modifier une paye ASFAM ?',
        opts:['Saisir immédiatement pour aller vite','Vérifier la donnée source et la date exacte','Attendre la réclamation de l\'agent','Supprimer le dossier'],
        c:1, expl:'La paye exige de fiabiliser la donnée avant saisie : source, période, justification, cohérence avec SOLIS/CIVIL RH et dossier administratif.',
        rev:'Revoir : Partie 3 bis – circuit de paye en 7 étapes.' },

      { cat:'poste', q:'Un enfant quitte le domicile le 15 du mois. Quelle donnée est indispensable ?',
        opts:['La couleur du dossier','La date exacte de sortie et le type d\'impact sur rémunération/indemnités','Le nom du maire','Le nombre d\'agents CTM'],
        c:1, expl:'La date exacte conditionne le prorata, les indemnités et la prévention des trop-perçus. C\'est une donnée sensible à vérifier avec la source terrain.',
        rev:'Revoir : sortie d\'enfant, prorata, indemnités, trop-perçu.' },

      { cat:'poste', q:'Pourquoi faut-il tracer une correction de paye ?',
        opts:['Pour alourdir le dossier','Pour justifier la décision, répondre à une réclamation et sécuriser le contrôle interne','Parce que le logiciel l\'interdit','Pour éviter de parler à l\'agent'],
        c:1, expl:'La traçabilité protège l\'agent, le service et la collectivité. Elle permet de comprendre pourquoi une paie a été modifiée.',
        rev:'Revoir : traçabilité et contrôle interne.' },

      { cat:'poste', q:'Que faire si SOLIS et CIVIL RH ne concordent pas ?',
        opts:['Choisir au hasard','Prendre toujours SOLIS sans vérifier','Contrôler la source, demander confirmation et corriger les outils','Ignorer l\'écart'],
        c:2, expl:'Un écart entre outils est un signal d\'alerte. Il faut identifier la source fiable, confirmer et corriger pour éviter l\'erreur de paie.',
        rev:'Revoir : circuit SOLIS / CIVIL RH / terrain.' },

      { cat:'poste', q:'Quelle information relève de la confidentialité ?',
        opts:['La météo','Les éléments du dossier de l\'enfant placé et la situation familiale','La date de l\'entretien','Le nom du logiciel RH'],
        c:1, expl:'Les dossiers ASE et les situations familiales sont sensibles. Le gestionnaire paye doit se limiter aux informations nécessaires à sa mission.',
        rev:'Revoir : secret, discrétion professionnelle, données sensibles.' },

      { cat:'poste', q:'Comment répondre à un ASFAM mécontent au téléphone ?',
        opts:['Couper court immédiatement','Écouter, reformuler, vérifier le dossier, donner un délai de réponse','Promettre un paiement sans vérifier','Accuser la DPMI'],
        c:1, expl:'La bonne posture combine écoute et rigueur. Il faut rassurer sans promettre une correction avant contrôle.',
        rev:'Revoir : posture relationnelle et gestion de réclamation.' },

      { cat:'poste', q:'Quel document ou suivi aide à anticiper les renouvellements d\'agrément ?',
        opts:['Un tableau de bord des échéances','Une note sans date','Un simple souvenir oral','Un message WhatsApp personnel'],
        c:0, expl:'Un tableau de bord avec alertes à 6 mois et 3 mois permet d\'anticiper les renouvellements et d\'éviter les ruptures administratives.',
        rev:'Revoir : suivi des agréments et organisation du portefeuille.' },

      { cat:'poste', q:'Quelle phrase est la plus professionnelle si elle ne connaît pas encore SOLIS ?',
        opts:['Je ne saurai pas faire','Je n\'ai pas encore pratiqué SOLIS, mais je maîtrise la logique des outils RH et je sais apprendre rapidement avec procédure et tutorat','Je préfère ne pas utiliser de logiciel','Je ferai tout sur papier'],
        c:1, expl:'Le jury n\'attend pas forcément une maîtrise préalable de chaque outil, mais une capacité d\'apprentissage, de méthode et de rigueur.',
        rev:'Revoir : réponse modèle sur les logiciels.' },

      { cat:'poste', q:'Que signifie gérer un portefeuille ASFAM ?',
        opts:['Gérer uniquement les appels téléphoniques','Suivre un ensemble d\'agents : dossiers, échéances, paye, congés, anomalies et relation administrative','Gérer un budget personnel','Décider des placements judiciaires'],
        c:1, expl:'Le portefeuille désigne l\'ensemble des dossiers ASFAM confiés au gestionnaire, avec suivi administratif et paye.',
        rev:'Revoir : organisation des dossiers et priorisation.' },

      { cat:'poste', q:'Quelle est la limite du gestionnaire paye par rapport à l\'ASE ?',
        opts:['Il décide des placements','Il gère l\'impact administratif et paye, mais ne décide pas du placement des enfants','Il remplace le juge','Il donne les informations judiciaires aux ASFAM'],
        c:1, expl:'La décision de placement relève de l\'ASE ou de la justice. Le gestionnaire traite les conséquences administratives et paye.',
        rev:'Revoir : rôle administratif vs rôle socio-éducatif.' },

      { cat:'poste', q:'Quelle qualité est la plus importante sur un trop-perçu ?',
        opts:['Improvisation','Rigueur de calcul et communication claire','Rapidité sans contrôle','Silence envers l\'agent'],
        c:1, expl:'Un trop-perçu est sensible financièrement et relationnellement. Il faut calculer juste, expliquer, notifier et suivre.',
        rev:'Revoir : procédure de récupération des trop-perçus.' },

      { cat:'poste', q:'Quelle réponse montre une bonne compréhension du poste ?',
        opts:['Je veux seulement saisir des bulletins','Je dois sécuriser les dossiers ASFAM, fiabiliser la paye, respecter la confidentialité et travailler avec les partenaires internes','Je n\'aurai pas de contacts avec les agents','La paye est automatique donc il n\'y a rien à contrôler'],
        c:1, expl:'Le poste n\'est pas une simple saisie. Il combine dossier administratif, outils, contrôle, relation agent, confidentialité et coordination.',
        rev:'Revoir : phrase de positionnement du début de l\'onglet.' }
    ];

    var _state = { qs: [], cur: 0, wrong: [], score: 0, cat: '' };

    function _render() {
      var zone = document.getElementById('asfam-qcm-zone');
      if (!zone) return;
      if (_state.cur >= _state.qs.length) { _showResult(); return; }
      var q = _state.qs[_state.cur];
      var n = _state.cur + 1;
      var total = _state.qs.length;
      var pct = Math.round((_state.cur / total) * 100);
      var optHTML = q.opts.map(function(o, i) {
        return '<div onclick="asfamQcmSelect(' + i + ')" id="asfam-opt-' + i + '" style="padding:12px 16px;border:2px solid var(--border);border-radius:8px;cursor:pointer;margin-bottom:8px;transition:all .15s;background:var(--surface)" onmouseover="this.style.borderColor=\'#7c3aed\';this.style.background=\'#f5f3ff\'" onmouseout="if(!this.dataset.answered){this.style.borderColor=\'var(--border)\';this.style.background=\'var(--surface)\'}">' +
          '<strong style="color:#7c3aed;margin-right:8px">' + String.fromCharCode(65+i) + '.</strong>' + o + '</div>';
      }).join('');
      zone.innerHTML =
        '<div style="margin-bottom:16px">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">' +
            '<span style="font-size:.8rem;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.05em">' +
              (q.cat === 'ctm' ? '🏛️ CTM' : '💼 Poste ASFAM') + ' · Question ' + n + ' / ' + total +
            '</span>' +
            '<span style="font-size:.8rem;color:var(--text-muted)">' + _state.score + ' correcte' + (_state.score > 1 ? 's' : '') + '</span>' +
          '</div>' +
          '<div style="height:4px;background:var(--border);border-radius:4px;overflow:hidden;margin-bottom:16px">' +
            '<div style="height:100%;width:' + pct + '%;background:linear-gradient(to right,#7c3aed,var(--primary));transition:width .3s"></div>' +
          '</div>' +
          '<p style="font-weight:700;font-size:1.05rem;margin-bottom:16px;line-height:1.5">' + n + '. ' + q.q + '</p>' +
        '</div>' +
        '<div id="asfam-opts-wrap">' + optHTML + '</div>' +
        '<div id="asfam-feedback" style="display:none"></div>' +
        '<div id="asfam-next-wrap" style="display:none;margin-top:16px">' +
          '<button onclick="asfamQcmNext()" style="padding:10px 24px;background:#7c3aed;color:#fff;border:none;border-radius:8px;font-weight:700;cursor:pointer">' +
            (_state.cur + 1 < total ? 'Question suivante →' : 'Voir mes résultats →') +
          '</button>' +
        '</div>';
    }

    function _showResult() {
      var zone = document.getElementById('asfam-qcm-zone');
      if (!zone) return;
      var total = _state.qs.length;
      var score = _state.score;
      var pct = Math.round((score / total) * 100);
      var color = pct >= 80 ? '#16a34a' : pct >= 60 ? '#d97706' : '#dc2626';
      var msg = pct >= 80 ? '🎉 Excellent ! Vous maîtrisez bien le sujet.' : pct >= 60 ? '👍 Bien ! Quelques points à consolider.' : '📚 À réviser ! Concentrez-vous sur les points ci-dessous.';
      var wrongHTML = '';
      if (_state.wrong.length > 0) {
        wrongHTML = '<div style="margin-top:20px"><h4 style="color:#dc2626;margin-bottom:12px">📌 Points à réviser (' + _state.wrong.length + ' question' + (_state.wrong.length > 1 ? 's' : '') + ') :</h4>';
        _state.wrong.forEach(function(q) {
          wrongHTML += '<div style="background:#fff7ed;border-left:3px solid #d97706;border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:8px">' +
            '<div style="font-weight:600;margin-bottom:4px;font-size:.9rem">❌ ' + q.q + '</div>' +
            '<div style="font-size:.82rem;color:var(--text-muted)">✅ Bonne réponse : ' + q.opts[q.c] + '</div>' +
            '<div style="font-size:.82rem;color:#d97706;margin-top:4px">📖 ' + q.rev + '</div>' +
          '</div>';
        });
        wrongHTML += '</div>';
      } else {
        wrongHTML = '<div style="background:#f0fdf4;border-left:3px solid #16a34a;border-radius:0 8px 8px 0;padding:12px 14px;margin-top:16px">✅ Parfait ! Aucune erreur.</div>';
      }
      zone.innerHTML =
        '<div style="text-align:center;padding:20px 0 12px">' +
          '<div style="font-size:2.5rem;font-weight:900;color:' + color + '">' + score + ' / ' + total + '</div>' +
          '<div style="font-size:1rem;color:' + color + ';font-weight:700;margin:6px 0">' + pct + '% · ' + msg + '</div>' +
        '</div>' +
        wrongHTML +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px">' +
          '<button onclick="asfamQcmStart(\'' + _state.cat + '\')" style="padding:10px 20px;background:#7c3aed;color:#fff;border:none;border-radius:8px;font-weight:700;cursor:pointer">🔄 Recommencer</button>' +
          '<button onclick="asfamQcmStart(\'all\')" style="padding:10px 20px;background:var(--primary);color:#fff;border:none;border-radius:8px;font-weight:700;cursor:pointer">🎯 Tout faire (20 questions)</button>' +
        '</div>';
    }

    window.asfamQcmStart = function(cat) {
      var qs = cat === 'all' ? _QCM.slice() : _QCM.filter(function(q) { return q.cat === cat; });
      _state = { qs: qs, cur: 0, wrong: [], score: 0, cat: cat };
      _render();
    };

    window.asfamQcmSelect = function(idx) {
      var q = _state.qs[_state.cur];
      if (!q) return;
      var opts = document.querySelectorAll('#asfam-opts-wrap > div');
      opts.forEach(function(el) {
        el.onclick = null;
        el.onmouseover = null;
        el.onmouseout = null;
        el.dataset.answered = '1';
        el.style.cursor = 'default';
      });
      var isCorrect = idx === q.c;
      if (isCorrect) {
        _state.score++;
        opts[idx].style.background = '#f0fdf4';
        opts[idx].style.borderColor = '#16a34a';
        opts[idx].style.color = '#15803d';
      } else {
        opts[idx].style.background = '#fef2f2';
        opts[idx].style.borderColor = '#dc2626';
        opts[idx].style.color = '#dc2626';
        opts[q.c].style.background = '#f0fdf4';
        opts[q.c].style.borderColor = '#16a34a';
        opts[q.c].style.color = '#15803d';
        _state.wrong.push(q);
      }
      var fb = document.getElementById('asfam-feedback');
      if (fb) {
        fb.style.display = 'block';
        fb.innerHTML =
          '<div style="background:' + (isCorrect ? '#f0fdf4' : '#fef2f2') + ';border-left:4px solid ' + (isCorrect ? '#16a34a' : '#dc2626') + ';border-radius:0 10px 10px 0;padding:14px 16px;margin-top:12px">' +
            '<div style="font-weight:700;margin-bottom:6px;color:' + (isCorrect ? '#15803d' : '#dc2626') + '">' + (isCorrect ? '✅ Bonne réponse !' : '❌ Mauvaise réponse') + '</div>' +
            '<div style="font-size:.9rem;color:var(--text);line-height:1.55;margin-bottom:' + (isCorrect ? '0' : '8px') + '">' + q.expl + '</div>' +
            (!isCorrect ? '<div style="font-size:.82rem;background:#fff7ed;border-radius:6px;padding:8px 10px;color:#d97706;margin-top:4px">📖 ' + q.rev + '</div>' : '') +
          '</div>';
      }
      var nw = document.getElementById('asfam-next-wrap');
      if (nw) nw.style.display = 'block';
    };

    window.asfamQcmNext = function() {
      _state.cur++;
      _render();
    };
  }
})();
