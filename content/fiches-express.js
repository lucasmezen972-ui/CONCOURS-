/* ============================================================
   FICHES EXPRESS – Révision rapide par cartes retournables
   ============================================================ */
(function () {
  'use strict';

  var FICHES = [
    /* ── PARTIE 1 – Organisation administrative ── */
    { part: 'P1', tag: 'Organisation', q: 'Qu\'est-ce que la décentralisation ?', r: '<strong>Transfert de compétences</strong> de l\'État vers des collectivités territoriales dotées d\'une personnalité juridique propre et gérées par des élus. Ex : lois Defferre 1982-83.' },
    { part: 'P1', tag: 'Organisation', q: 'Différence déconcentration / décentralisation', r: '<strong>Déconcentration</strong> : délégation à des agents de l\'État en région (préfets, recteurs) – l\'État reste l\'employeur. <strong>Décentralisation</strong> : autonomie réelle des collectivités avec des élus.' },
    { part: 'P1', tag: 'Organisation', q: 'Quels sont les 3 niveaux de collectivités territoriales ?', r: '<strong>Commune</strong> (maire, conseil municipal) · <strong>Département</strong> (président CD, conseil départemental) · <strong>Région</strong> (président CR, conseil régional).' },
    { part: 'P1', tag: 'Organisation', q: 'Qu\'est-ce qu\'un EPCI ?', r: 'Établissement Public de Coopération Intercommunale : regroupe plusieurs communes pour exercer des compétences en commun. Formes : CC, CA, CU, Métropole.' },
    { part: 'P1', tag: 'FPT', q: 'Qu\'est-ce que la FPT ?', r: 'Fonction Publique Territoriale : ensemble des agents (fonctionnaires + contractuels) qui travaillent pour les collectivités. Régie par la loi du 26/01/1984.' },
    { part: 'P1', tag: 'FPT', q: 'Catégories A, B, C de la FPT', r: '<strong>A</strong> : cadres, niveau Bac+3 min. (attachés, administrateurs). <strong>B</strong> : techniciens, niveau Bac (rédacteurs). <strong>C</strong> : agents d\'exécution (adjoints administratifs, agents techniques).' },
    { part: 'P1', tag: 'FPT', q: 'Rôle du CNFPT', r: 'Centre National de la FPT : formation initiale et continue des agents territoriaux, organisation des concours A+ (administrateur territorial, conservateur…).' },

    /* ── PARTIE 2 – Droit public ── */
    { part: 'P2', tag: 'Droit', q: 'Qu\'est-ce que le bloc de constitutionnalité ?', r: 'Constitution 1958 + DDHC 1789 + Préambule 1946 + Charte de l\'environnement 2004. Norme suprême contrôlée par le Conseil constitutionnel.' },
    { part: 'P2', tag: 'Droit', q: 'Hiérarchie des normes (ordre décroissant)', r: 'Constitution → Traités → Lois organiques → Lois ordinaires → Règlements (décrets, arrêtés). Chaque norme doit respecter celle du dessus.' },
    { part: 'P2', tag: 'Droit', q: 'Qu\'est-ce que le principe de légalité ?', r: 'Toute action administrative doit avoir une base légale. L\'administration ne peut agir que si un texte l\'y autorise. Fondement de l\'État de droit.' },
    { part: 'P2', tag: 'Institutions', q: 'Composition du Parlement français', r: '<strong>Assemblée nationale</strong> : 577 députés, élus pour 5 ans au suffrage universel direct. <strong>Sénat</strong> : 348 sénateurs, élus pour 6 ans par les grands électeurs.' },
    { part: 'P2', tag: 'Institutions', q: 'Différence faute de service / faute personnelle', r: '<strong>Faute de service</strong> : commise dans le service → responsabilité de la collectivité, juge administratif. <strong>Faute personnelle</strong> : détachable du service → responsabilité de l\'agent, juge judiciaire.' },
    { part: 'P2', tag: 'Institutions', q: 'Qu\'est-ce que le recours pour excès de pouvoir (REP) ?', r: 'Recours devant le tribunal administratif visant à faire <strong>annuler</strong> un acte administratif illégal. Délai : 2 mois. Ouvert à tout requérant sans avocat obligatoire.' },
    { part: 'P2', tag: 'Droit', q: 'Délai de recours contentieux contre un acte admin.', r: '<strong>2 mois</strong> à compter de la notification ou de la publication. Le recours gracieux ou hiérarchique interrompt ce délai.' },

    /* ── PARTIE 3 – Finances publiques ── */
    { part: 'P3', tag: 'Finances', q: 'Les 5 principes budgétaires', r: '<strong>Annualité</strong> (vote annuel) · <strong>Unité</strong> (un seul budget) · <strong>Universalité</strong> (toutes recettes et dépenses) · <strong>Équilibre</strong> réel · <strong>Spécialité</strong> (crédits affectés).' },
    { part: 'P3', tag: 'Finances', q: 'Qu\'est-ce que la DGF ?', r: 'Dotation Globale de Fonctionnement : principale dotation de l\'État aux collectivités (~26 Mds€/an). Finance le fonctionnement courant. Calculée selon population, charges, ressources.' },
    { part: 'P3', tag: 'Finances', q: 'Rôle de l\'ordonnateur vs comptable public', r: '<strong>Ordonnateur</strong> (élu/DGS) : engage, liquide, ordonnance. <strong>Comptable</strong> (agent DGFiP) : contrôle et paie. Principe de séparation obligatoire des fonctions.' },
    { part: 'P3', tag: 'Finances', q: 'Seuil MAPA vs procédure formalisée (2024)', r: 'Marchés de travaux : <strong>5 382 000 € HT</strong>. Fournitures/services pour collectivités : <strong>221 000 € HT</strong>. En dessous : procédure adaptée (MAPA).' },
    { part: 'P3', tag: 'Finances', q: 'Qu\'est-ce que la péréquation ?', r: 'Mécanisme de redistribution des ressources des collectivités les plus riches vers les moins dotées, pour réduire les inégalités territoriales. Ex : FSRIF (Île-de-France), Fonds de péréquation régionale.' },
    { part: 'P3', tag: 'Finances', q: 'Qu\'est-ce que la Chambre régionale des comptes (CRC) ?', r: 'Juridiction financière qui contrôle la gestion des collectivités, juge les comptes des comptables et formule des observations de gestion. Branche régionale de la Cour des comptes.' },

    /* ── PARTIE 4 – RH et management ── */
    { part: 'P4', tag: 'RH', q: '4 groupes de sanctions disciplinaires FPT', r: '<strong>1er</strong> : avertissement, blâme. <strong>2e</strong> : radiation tableau avancement, abaissement échelon, exclusion 1-15 j. <strong>3e</strong> : rétrogradation, exclusion 16-30 j. <strong>4e</strong> : mise retraite d\'office, révocation.' },
    { part: 'P4', tag: 'RH', q: 'Qu\'est-ce que le CST (Comité Social Territorial) ?', r: 'Fusion du CT et CHSCT depuis 2023. Instance de dialogue social consultée sur l\'organisation du travail, les conditions de travail et la formation. Obligatoire dès 50 agents.' },
    { part: 'P4', tag: 'RH', q: 'Différence avancement d\'échelon / avancement de grade', r: '<strong>Échelon</strong> : progression dans la rémunération au sein du grade (ancienneté + valeur). <strong>Grade</strong> : changement de grade dans le cadre d\'emplois (tableau avancement, examen pro, promotion interne).' },
    { part: 'P4', tag: 'Management', q: 'Méthode SMART pour les objectifs', r: '<strong>S</strong>pécifique · <strong>M</strong>esurable · <strong>A</strong>tteignable · <strong>R</strong>éaliste · <strong>T</strong>emporellement défini. Outil fondamental du management par objectifs.' },
    { part: 'P4', tag: 'Management', q: 'Qu\'est-ce que l\'analyse SWOT ?', r: '<strong>S</strong>trengths (Forces) · <strong>W</strong>eaknesses (Faiblesses) · <strong>O</strong>pportunities (Opportunités) · <strong>T</strong>hreats (Menaces). Outil de diagnostic stratégique interne et externe.' },
    { part: 'P4', tag: 'Management', q: 'Qu\'est-ce que la DSP (délégation de service public) ?', r: 'Contrat par lequel une collectivité confie la gestion d\'un service public à un opérateur dont la rémunération est substantiellement liée aux résultats d\'exploitation. Formes : concession, affermage.' },

    /* ── PARTIE 5 – Méthodologie ── */
    { part: 'P5', tag: 'Méthodo', q: 'Différence note de synthèse / note à l\'usage d\'un sup.', r: '<strong>Synthèse</strong> : présente objectivement les informations. <strong>Note à usage d\'un supérieur</strong> : plus opérationnelle, elle analyse ET propose des actions à un décideur.' },
    { part: 'P5', tag: 'Méthodo', q: 'Structure obligatoire d\'une note administrative', r: 'En-tête (À/De/Date/Objet) → Introduction (contexte + problématique + annonce plan) → Développement (2-3 parties) → Conclusion (synthèse + recommandation).' },
    { part: 'P5', tag: 'Méthodo', q: 'Durée de l\'épreuve de note (concours attaché)', r: '<strong>3 heures</strong>, coefficient 3. Répartition conseillée : 45 min lecture · 20 min plan · 95 min rédaction · 20 min relecture.' },
    { part: 'P5', tag: 'Méthodo', q: 'Que faire si le dossier comporte 12 documents ?', r: 'Lecture rapide de tous → annotation par thème → sélection des 8-10 plus pertinents → hiérarchisation → plan. Ne pas tout citer, mais tout avoir lu.' },
    { part: 'P5', tag: 'Méthodo', q: 'Les 3 erreurs fatales à l\'épreuve de note', r: '1. <strong>Hors-sujet</strong> (ne pas répondre à la problématique). 2. <strong>Paraphrase</strong> (recopier les docs sans synthétiser). 3. <strong>Plan chronologique</strong> (résumer les docs dans l\'ordre).' },

    /* ── PARTIE 6 – Oral ── */
    { part: 'P6', tag: 'Oral', q: 'Structure du pitch de présentation (5 min)', r: '1. Parcours (30s) · 2. Expérience pertinente (1min) · 3. Pourquoi ce concours (1min) · 4. Pourquoi Martinique (1min) · 5. Vision du poste d\'Attaché (1min30).' },
    { part: 'P6', tag: 'Oral', q: 'Comment répondre à une question difficile à l\'oral ?', r: 'Prendre 2s pour réfléchir → annoncer un plan en 2-3 points → développer chaque point avec un exemple. Si on ne sait pas : l\'admettre honnêtement + expliquer comment on trouverait.' },
    { part: 'P6', tag: 'Oral', q: 'Méthode STAR pour les mises en situation', r: '<strong>S</strong>ituation (contexte) · <strong>T</strong>âche (responsabilité) · <strong>A</strong>ction (ce que j\'ai fait/ferais) · <strong>R</strong>ésultat (impact attendu). Structure une réponse concrète et vérifiable.' },
    { part: 'P6', tag: 'Oral', q: 'Que valoriser en tant que titulaire d\'un Bachelor RH ?', r: 'Gestion des compétences · droit social/du travail → statut FPT · management d\'équipe · conduite de projet · recrutement et formation. Ces compétences sont directement opérationnelles en collectivité.' },

    /* ── PARTIE 7 – Actualités ── */
    { part: 'P7', tag: 'Actualités', q: 'Qu\'est-ce que le PCAET ?', r: 'Plan Climat-Air-Énergie Territorial : document de planification obligatoire pour les EPCI >20 000 hab. Objectifs : réduction GES, efficacité énergétique, ENR, adaptation climatique.' },
    { part: 'P7', tag: 'Actualités', q: 'Objectif ZAN (Zéro Artificialisation Nette)', r: 'Loi Climat et Résilience 2021 : -50% artificialisation d\'ici 2031 (vs 2011-2021), ZAN absolu en 2050. Contrainte forte pour les PLU et l\'aménagement local.' },
    { part: 'P7', tag: 'Actualités', q: 'Qu\'est-ce que le RSA et qui le gère ?', r: 'Revenu de Solidarité Active : allocation différentielle versée aux personnes à faibles ressources. Géré par le <strong>Département</strong> (ou CTM en Martinique). Financement : État (via CNAF).' },
    { part: 'P7', tag: 'Actualités', q: 'Définition du marketing territorial', r: 'Démarche de valorisation et de promotion d\'un territoire auprès de cibles définies (entreprises, touristes, talents, résidents) pour renforcer son attractivité économique et résidentielle.' },
    { part: 'P7', tag: 'Actualités', q: 'Qu\'est-ce qu\'un Plan Communal de Sauvegarde (PCS) ?', r: 'Document opérationnel obligatoire pour les communes exposées à des risques majeurs. Organise la réponse communale : alerte, évacuation, soutien aux sinistrés, communication de crise.' },

    /* ── PARTIE 8 – Martinique ── */
    { part: 'P8', tag: 'Martinique', q: 'Qu\'est-ce que la CTM ?', r: 'Collectivité Territoriale de Martinique : créée en 2015, elle fusionne Conseil général + Conseil régional. Organe délibérant : Assemblée (51 membres). Exécutif : Conseil exécutif collégial (9 membres).' },
    { part: 'P8', tag: 'Martinique', q: 'Quand la Martinique est-elle devenue département français ?', r: '<strong>19 mars 1946</strong>, par la loi de départementalisation portée par Aimé Césaire. La Martinique devient le 94e département français.' },
    { part: 'P8', tag: 'Martinique', q: 'Qu\'est-ce que l\'octroi de mer ?', r: 'Taxe sur les importations (et certaines productions locales) en outre-mer. Ressource fiscale essentielle (~200 M€/an pour la Martinique). Autorisée par l\'UE jusqu\'en 2027.' },
    { part: 'P8', tag: 'Martinique', q: 'Taux de chômage en Martinique', r: 'Environ <strong>15-17%</strong> (vs ~7% en métropole). Les jeunes de 15-24 ans : >40%. Cause d\'exode des jeunes actifs diplômés vers la métropole.' },
    { part: 'P8', tag: 'Martinique', q: 'Qu\'est-ce que le PADDM ?', r: 'Plan d\'Aménagement et de Développement Durable de la Martinique : équivalent du SRADDET pour la CTM. Document de planification stratégique opposable aux PLU. Horizon 2030-2040.' },
    { part: 'P8', tag: 'Martinique', q: 'Principaux risques naturels en Martinique', r: 'Cyclones (saison juin-novembre) · Séismes (zone de subduction) · Éruption volcanique (Montagne Pelée) · Tsunamis · Inondations · Sargasses (risque sanitaire et économique).' },
    { part: 'P8', tag: 'Martinique', q: 'Problème du chlordécone en Martinique', r: 'Pesticide utilisé 1972-1993 dans les bananeraies. Contamine durablement les sols (centaines d\'années) et eaux. Surrisque de cancer de la prostate. Plan Chlordécone IV en cours.' },
    { part: 'P8', tag: 'Martinique', q: 'Qu\'est-ce que les fonds européens pour la Martinique ?', r: 'En tant que RUP (Région Ultrapériphérique), la Martinique bénéficie de FEDER, FSE+, FEADER, FEAMPA avec des taux de cofinancement bonifiés pour compenser ses handicaps structurels.' }
  ];

  var html = '<section id="fiches-express" class="page-section">\n' +
    '<div class="fe-header">\n' +
    '  <h1>⚡ Fiches Express</h1>\n' +
    '  <p style="color:var(--text-muted)">Cliquez sur une carte pour révéler la réponse. Idéal pour la révision rapide.</p>\n' +
    '</div>\n' +
    '<div class="fe-filters">\n' +
    '  <button class="fe-filter-btn active" data-fe-filter="all">Toutes (' + FICHES.length + ')</button>\n' +
    '  <button class="fe-filter-btn" data-fe-filter="P1">P1 – Organisation</button>\n' +
    '  <button class="fe-filter-btn" data-fe-filter="P2">P2 – Droit</button>\n' +
    '  <button class="fe-filter-btn" data-fe-filter="P3">P3 – Finances</button>\n' +
    '  <button class="fe-filter-btn" data-fe-filter="P4">P4 – RH</button>\n' +
    '  <button class="fe-filter-btn" data-fe-filter="P5">P5 – Méthodo</button>\n' +
    '  <button class="fe-filter-btn" data-fe-filter="P6">P6 – Oral</button>\n' +
    '  <button class="fe-filter-btn" data-fe-filter="P7">P7 – Actu</button>\n' +
    '  <button class="fe-filter-btn" data-fe-filter="P8">P8 – Martinique</button>\n' +
    '</div>\n' +
    '<p id="fe-count" style="color:var(--text-muted);font-size:0.88rem;margin-bottom:16px">' + FICHES.length + ' fiches</p>\n' +
    '<div class="fe-grid" id="fe-grid">\n';

  FICHES.forEach(function (f, i) {
    html += '<div class="fe-card" data-fe-part="' + f.part + '" data-fe-i="' + i + '">\n' +
      '  <div class="fe-card-front">\n' +
      '    <div>\n' +
      '      <span class="fe-card-tag">' + f.part + ' · ' + f.tag + '</span>\n' +
      '      <div class="fe-card-q">' + f.q + '</div>\n' +
      '    </div>\n' +
      '    <div class="fe-reveal-hint">Cliquer pour voir la réponse ▾</div>\n' +
      '  </div>\n' +
      '  <div class="fe-card-back" id="fe-back-' + i + '">' + f.r + '</div>\n' +
      '</div>\n';
  });

  html += '</div>\n</section>';

  var container = document.querySelector('.main-content');
  if (container && !document.getElementById('fiches-express')) {
    container.insertAdjacentHTML('beforeend', html);
  }

  /* Filter + toggle handlers */
  document.addEventListener('click', function (e) {
    /* Filter buttons */
    var fb = e.target.closest('.fe-filter-btn');
    if (fb) {
      document.querySelectorAll('.fe-filter-btn').forEach(function (b) { b.classList.remove('active'); });
      fb.classList.add('active');
      var filter = fb.dataset.feFilter;
      var cards = document.querySelectorAll('.fe-card');
      var visible = 0;
      cards.forEach(function (card) {
        var show = filter === 'all' || card.dataset.fePart === filter;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      var countEl = document.getElementById('fe-count');
      if (countEl) countEl.textContent = visible + ' fiche' + (visible > 1 ? 's' : '');
      return;
    }

    /* Card toggle */
    var card = e.target.closest('.fe-card');
    if (card) {
      var idx = card.dataset.feI;
      var back = document.getElementById('fe-back-' + idx);
      if (back) back.classList.toggle('show');
    }
  });
})();
