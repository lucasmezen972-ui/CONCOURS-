/* ============================================================
   ANNALES CORRIGÉES 2018-2025
   Concours Attaché Territorial – Catégorie A
   ============================================================ */

(function() {
  const container = document.querySelector('.main-content');
  if (!container) return;

  const annales = [
    {
      annee: 2025,
      theme: 'Transition écologique et action territoriale',
      tags: ['Transition écologique', 'ZAN', 'PCAET', 'Financement'],
      difficulte: 'Élevée',
      sujet: `Le dossier documentaire (fictif, inspiré d'annales réelles) aborde la politique de transition écologique menée par les collectivités territoriales dans le contexte de la loi Climat-Résilience du 22 août 2021. Il comprend notamment : un extrait du rapport du GIEC, une circulaire préfectorale sur les PCAET, un article de la revue Territoires sur le ZAN, et une note de la DGALN sur les outils de financement. En qualité d'attaché territorial auprès du DGS d'une collectivité de taille moyenne, vous rédigerez une note de synthèse à l'attention du Président exposant les enjeux de la politique de transition écologique pour les collectivités territoriales et les leviers d'action disponibles.`,
      analyse: `Ce sujet teste la capacité à synthétiser des enjeux complexes (technique, juridique, financier) autour de la transition écologique. Points clés : ZAN (Zéro Artificialisation Nette), PCAET obligatoire, financements (FEDER, Banque des Territoires), gouvernance multi-acteurs. L'attaché doit démontrer une vision stratégique et proposer des pistes concrètes.`,
      plan: `I. Un cadre réglementaire exigeant qui redéfinit l'action territoriale
         A. La loi Climat-Résilience : nouvelles obligations (ZAN, PCAET, mobilité)
         B. La hiérarchie des normes : SRADDET/PADDM → SCoT → PLU
      II. Des leviers d'action multiples pour accompagner la transition
         A. Leviers financiers : fonds européens, Banque des Territoires, DETR, DSIL verte
         B. Leviers opérationnels : marchés publics durables, rénovation patrimoine, ENR
      III. Les conditions de réussite : gouvernance et mobilisation des acteurs
         A. Coordination des acteurs : État, EPCI, communes, secteur privé
         B. Participation citoyenne et appropriation locale`,
      corrige: `La note doit s'ouvrir sur un constat : la transition écologique est désormais une obligation légale (loi Climat-Résilience, PCAET obligatoire >20 000 hab) et non plus une option. Le territoire est à la fois acteur (réduction des GES, adaptation) et bénéficiaire (qualité de vie, attractivité). Les enjeux financiers sont massifs (rénovation thermique du patrimoine, mobilité verte, ENR) mais des leviers existent : FEDER, Banque des Territoires, DETR verte. La conclusion doit proposer une feuille de route avec priorités claires (PCAET, SPASER, PLU zéro artificialisation). En Martinique, ajouter : plan énergie 100% ENR 2030, vulnérabilité climatique accrue (cyclones, submersion), biodiversité remarquable à protéger.`
    },
    {
      annee: 2024,
      theme: 'La crise financière des collectivités territoriales',
      tags: ['Finances locales', 'Dotations', 'Autonomie fiscale', 'CRC'],
      difficulte: 'Élevée',
      sujet: `Le dossier documentaire traite de la situation financière des collectivités territoriales face à l'inflation et à la baisse des dotations de l'État. Il comprend : un rapport de la Cour des comptes 2023 sur les finances locales, un article sur la suppression de la CVAE, une circulaire sur les dotations 2024, et un extrait du rapport de la Conférence nationale des territoires. Vous rédigerez une note à l'attention du Directeur Général des Services analysant les impacts de la conjoncture sur les finances de la collectivité et proposant des mesures d'adaptation.`,
      analyse: `Ce sujet très concret et actuel nécessite de maîtriser les mécanismes financiers locaux (DGF, recettes fiscales, épargne brute) et les contraintes pesant sur les budgets (inflation +5-8% sur les achats, hausse des taux d'intérêt, suppressions fiscales). L'attaché doit démontrer rigueur analytique et sens de la proposition.`,
      plan: `I. Un contexte budgétaire inédit : une pression financière multifactorielle
         A. Chocs internes : inflation des charges (énergie, personnel, achats)
         B. Chocs externes : baisse DGF, suppressions fiscales (CVAE 2024)
      II. Les indicateurs de vigilance à surveiller pour votre collectivité
         A. Épargne brute, taux de désendettement, autofinancement
         B. Alertes précoces : ratios CRC, signaux de sous-dotation
      III. Les leviers d'adaptation et de soutenabilité budgétaire
         A. Optimisation des recettes : octroi de mer en Martinique, foncier, tarification
         B. Maîtrise des dépenses : mutualisation, marchés groupés, énergie`,
      corrige: `La note doit démontrer une maîtrise des mécanismes financiers et des chiffres clés. Structure recommandée : diagnostic chiffré (comparaison exécution N-1 / prévision N), analyse des risques principaux (quel poste va dépasser le budget ?), puis propositions concrètes hiérarchisées. Conclusion : recommander un débat d'orientations budgétaires anticipé et une conférence financière avec les services. En Martinique : mentionner la dépendance à l'octroi de mer (~20% du budget CTM), la négociation de la reconduction du régime UE (expiration régime OM en 2027).`
    },
    {
      annee: 2023,
      theme: 'La politique d\'attractivité territoriale',
      tags: ['Attractivité', 'Développement économique', 'Marketing territorial', 'SRDEII'],
      difficulte: 'Moyenne',
      sujet: `Le dossier documentaire traite des politiques d'attractivité territoriale dans un contexte de forte concurrence entre territoires pour attirer entreprises, populations actives et touristes. Il comprend : un rapport de l'ANCT sur l'attractivité des territoires, un article sur le marketing territorial, un extrait du rapport sur les flux migratoires internes (INSEE), et une note sur le plan de relance. En tant qu'attaché au développement économique, vous rédigerez une note sur les leviers d'attractivité du territoire et proposerez une stratégie opérationnelle.`,
      analyse: `Ce sujet est particulièrement pertinent pour la Martinique qui fait face à un défi majeur d'attractivité : brain drain, déclin démographique, fuite des jeunes. Les leviers sont multiples : qualité de vie, emploi, services, image. L'attaché doit faire la liaison entre stratégie et opérationnel.`,
      plan: `I. Diagnostic : les atouts et faiblesses du territoire en matière d'attractivité
         A. Atouts : qualité de vie, cadre naturel, spécificités culturelles
         B. Faiblesses : coût de la vie, marché de l'emploi, desserte, services
      II. Les leviers d'une politique d'attractivité efficace
         A. Attractivité économique : soutien aux entreprises, zones franches, clusters
         B. Attractivité résidentielle : logement, services, culture, sport
      III. La mise en œuvre : gouvernance et outils
         A. Marque territoriale et communication
         B. Partenariats public-privé, co-portage avec l'ADT (Agence de Développement)`,
      corrige: `La note doit être stratégique mais ancrée dans des exemples concrets. Pour la Martinique : citer le SRDEII de la CTM, les zones franches d'activité (ZFA), l'attractivité du numérique (télétravail depuis les îles), le tourisme comme locomotive. Souligner la nécessité de combiner attractivité externe (attirer de nouveaux habitants/entreprises) et rétention interne (éviter le brain drain). La conclusion doit proposer un plan sur 3 ans avec indicateurs de suivi (emplois créés, solde migratoire, création d'entreprises).`
    },
    {
      annee: 2022,
      theme: 'La politique sociale des collectivités face à la crise',
      tags: ['RSA', 'Action sociale', 'Pauvreté', 'Insertion'],
      difficulte: 'Élevée',
      sujet: `Le dossier documentaire traite de la politique sociale des collectivités territoriales dans le contexte post-COVID (2021-2022) et des réformes en cours sur le RSA et l'insertion professionnelle. Il comprend : un rapport du Conseil d'État sur l'action sociale locale, des statistiques DREES sur la pauvreté, un article sur l'expérimentation RSA sous conditions d'activité, et une circulaire sur les BRSA (Bénéficiaires du RSA). En tant qu'attaché à la direction des solidarités de la CTM, vous rédigerez une note sur les enjeux de la politique d'insertion de la collectivité et les adaptations nécessaires.`,
      analyse: `Sujet fondamental pour la Martinique où le taux de pauvreté est de ~30% et le nombre de bénéficiaires du RSA ~45 000. L'attaché doit maîtriser les mécanismes du RSA, la chaîne d'insertion, le rôle de la CTM, et les partenariats nécessaires (France Travail, CGSS, associations).`,
      plan: `I. Un contexte social martiniquais aggravé par la crise sanitaire
         A. Indicateurs de précarité : pauvreté, chômage, RSA, minima sociaux
         B. Impact COVID : nouveaux entrants dans les dispositifs, saturation des services
      II. La politique d'insertion de la CTM : bilan et limites actuelles
         A. Dispositifs existants : RSA, formations, contrats aidés, structures IAE
         B. Insuffisances : délais de traitement, taux de retour à l'emploi, suivi des parcours
      III. Propositions pour renforcer l'efficacité de la politique d'insertion
         A. Parcours intégré : diagnostic 360°, accompagnement global, référent de parcours
         B. Partenariats renforcés : France Travail, CGSS, ADIL, associations de quartier`,
      corrige: `La note doit montrer une bonne connaissance du contexte social martiniquais (chiffres précis) et des mécanismes légaux (CGCT, loi 2003 sur le RMI puis RSA). La partie propositions doit être ambitieuse mais réaliste : s'appuyer sur les ressources FSE+ du programme opérationnel 2021-2027, multiplier les plateformes Insertion, renforcer le PMEC (Plan Martinique Emploi Compétences). La conclusion doit insister sur la nécessité d'une approche globale et décloisonnée, impliquant tous les acteurs du territoire.`
    },
    {
      annee: 2021,
      theme: 'La transformation numérique des services publics locaux',
      tags: ['Numérique', 'Dématérialisation', 'Cybersécurité', 'Inclusion'],
      difficulte: 'Moyenne',
      sujet: `Le dossier documentaire traite de la transformation numérique des administrations locales dans le contexte de la crise COVID-19 qui a accéléré la dématérialisation. Il comprend : un rapport de la DINUM sur la qualité des services en ligne des collectivités, un article sur la fracture numérique, un guide de l'ANSSI sur la cybersécurité des collectivités, et une note sur le plan France Très Haut Débit. En tant qu'attaché à la direction des systèmes d'information, vous rédigerez une note sur la stratégie de transformation numérique de la collectivité.`,
      analyse: `Sujet d'actualité après la crise COVID qui a révélé à la fois l'importance du numérique et ses limites (fracture numérique, cybersécurité). L'attaché doit équilibrer ambition de dématérialisation et accessibilité pour tous.`,
      plan: `I. État des lieux : une transformation numérique inégale et risquée
         A. Avancées : services en ligne, télétravail, dématérialisation des procédures
         B. Risques : fracture numérique, cyberattaques croissantes (rançongiciels)
      II. Les enjeux d'une transformation numérique réussie
         A. Enjeux d'accessibilité : maintenir des canaux physiques, médiation numérique
         B. Enjeux de sécurité : RGPD, ANSSI, PRA/PCA cyber
      III. Propositions pour une stratégie numérique inclusive et sécurisée
         A. Schéma directeur numérique (SDN) sur 3 ans
         B. Budget dédié et formation des agents à la culture numérique`,
      corrige: `La note doit être équilibrée : ne pas présenter le numérique comme une panacée mais comme un outil au service du service public. Insister sur l'accessibilité universelle (RGAA, accessibilité aux personnes âgées et handicapées) et la sécurité (les collectivités sont des cibles privilégiées des cyberattaques). En Martinique : la fracture numérique est plus forte qu'en métropole (déploiement THD en cours), les aidants numériques dans les maisons France Services sont essentiels. Budget : valoriser les subventions numériques (DETR, DSIL, programme THD).`
    },
    {
      annee: 2020,
      theme: 'La gestion de crise et la continuité du service public',
      tags: ['Gestion de crise', 'PCA', 'Service public', 'Coordination'],
      difficulte: 'Élevée',
      sujet: `Le dossier documentaire traite de la gestion de crise par les collectivités territoriales dans le contexte de la pandémie de COVID-19 et plus généralement des crises majeures (cyclones, inondations, crises sanitaires). Il comprend : une circulaire gouvernementale sur les plans de continuité d'activité, un retour d'expérience de collectivités ayant géré le COVID, un rapport sur la gestion des risques naturels en Martinique, et un article sur le principe de continuité du service public. Vous rédigerez une note sur les conditions de préparation et de gestion des crises pour les collectivités.`,
      analyse: `Sujet particulièrement pertinent pour la Martinique (risques naturels multiples + COVID). L'attaché doit montrer sa connaissance des principes de service public (continuité) et des mécanismes opérationnels (PCA, cellule de crise, plans ORSEC).`,
      plan: `I. Le service public face aux crises : enjeux et principes fondamentaux
         A. Principe de continuité du service public (loi du 31 juillet 1963)
         B. Types de crises : naturelles, sanitaires, technologiques, cyber
      II. L'organisation préalable : se préparer avant la crise
         A. Plans de continuité d'activité (PCA) : méthode et contenu
         B. Exercices de crise, formation des agents, rôle du DGS
      III. La gestion opérationnelle de la crise : coordination et communication
         A. Cellule de crise : composition, rôle, activation
         B. Coordination avec l'État (préfet, ORSEC) et les partenaires`,
      corrige: `La note doit démontrer une vision systémique de la gestion de crise. La Martinique est un territoire particulièrement exposé (saison cyclonique, risque volcanique, séismes, COVID) et doit disposer de PCA robustes. Points essentiels : inventaire des activités critiques (état civil, aide sociale, eau), protocoles de continuité, redondance des systèmes informatiques, communication de crise (cellule info, réseaux sociaux). La conclusion doit insister sur la nécessité d'un retour d'expérience systématique après chaque crise.`
    },
    {
      annee: 2019,
      theme: 'La réforme de la fonction publique et ses impacts territoriaux',
      tags: ['FPT', 'Réforme', 'Contractuels', 'Dialogue social'],
      difficulte: 'Élevée',
      sujet: `Le dossier documentaire traite de la loi de transformation de la Fonction Publique du 6 août 2019 et de ses impacts sur les collectivités territoriales. Il comprend : un exposé des motifs de la loi, des articles de doctrine sur l'extension du recours aux contractuels, un rapport du Comité des États Généraux de la Fonction Publique, et une note sur les nouvelles instances de dialogue social. En tant qu'attaché à la DRH d'une collectivité, vous rédigerez une note sur les impacts de cette réforme et les mesures d'adaptation à prendre.`,
      analyse: `Réforme majeure de 2019 : ouverture massive au recours aux contractuels, transformation des instances de dialogue social (CST), suppression des CAP pour certaines décisions. L'attaché DRH doit maîtriser ces changements et proposer une adaptation RH.`,
      plan: `I. Les principales modifications introduites par la loi du 6 août 2019
         A. Recours facilité aux contractuels : emplois de direction, remplacement
         B. Réforme des instances de dialogue social : CST, fin de certaines compétences CAP
      II. Les impacts pour la collectivité : opportunités et risques
         A. Opportunités : flexibilité de recrutement, profils spécialisés, rapidité
         B. Risques : précarisation, perte de sens du statut, conflits syndicaux
      III. Les adaptations nécessaires pour la DRH
         A. Mise en conformité juridique : délibération, procédures de recrutement contractuel
         B. Accompagnement du changement : communication, formation des encadrants`,
      corrige: `La note doit analyser équitablement les apports et les risques de cette réforme. Les collectivités doivent dès 2019 mettre à jour leurs délibérations de recrutement, créer leurs CST et former les membres des nouvelles instances. En Martinique, la CTM doit veiller à ne pas fragiliser la cohésion sociale déjà tendue par un recours trop important aux contractuels. La conclusion doit recommander un plan de communication interne et un calendrier de mise en conformité.`
    },
    {
      annee: 2018,
      theme: 'La gestion des déchets et l\'économie circulaire',
      tags: ['Déchets', 'Économie circulaire', 'Intercommunalité', 'Financement'],
      difficulte: 'Moyenne',
      sujet: `Le dossier documentaire traite de la politique de gestion des déchets ménagers et de l'économie circulaire. Il comprend : un rapport de l'ADEME sur les déchets en France, un article sur la loi LTECV (2015) relative à l'économie circulaire, une note sur la TEOM (Taxe d'Enlèvement des Ordures Ménagères), et un retour d'expérience d'une intercommunalité sur sa déchetterie. En tant qu'attaché à la direction de l'environnement, vous rédigerez une note sur les enjeux et perspectives de la politique de gestion des déchets.`,
      analyse: `Sujet qui combine aspects juridiques (compétences EPCI obligatoires), financiers (TEOM, redevance), techniques (collecte, tri, traitement) et stratégiques (économie circulaire, transition). Très concret et applicable en Martinique.`,
      plan: `I. Un contexte réglementaire ambitieux : vers l'économie circulaire
         A. La hiérarchie des 5R : Réduire, Réutiliser, Recycler, Valoriser, Éliminer
         B. Objectifs légaux : -50% déchets enfouis/incinérés d'ici 2025 (LTECV 2015)
      II. L'organisation de la compétence déchets dans la collectivité
         A. Compétence intercommunale obligatoire (collecte + traitement)
         B. Financement : TEOM vs redevance incitative (avantages/inconvénients)
      III. Les leviers d'amélioration et l'économie circulaire locale
         A. Extension du tri, compostage, ressourceries/recycleries
         B. Marchés de réemploi, filières REP, éco-conception`,
      corrige: `La note doit démontrer une connaissance pratique de la compétence déchets (obligatoire pour les EPCI) et de son financement (TEOM ou redevance). Pour la Martinique : problème spécifique des déchets verts (végétation tropicale abondante), des déchets de chantier (faible filière), et du bois traité (chlordécone). La conclusion doit proposer une approche basée sur la prévention d'abord (compostage, repair cafés) avant la valorisation (bioénergie, matière). Budget FEDER mobilisable pour les équipements de tri.`
    }
  ];

  /* --- Construction de la section HTML --- */
  const section = document.createElement('section');
  section.id = 'annales';
  section.className = 'page-section';

  section.innerHTML = `
    <div class="annales-header">
      <h1>📄 Annales corrigées 2018–2025</h1>
      <p>Sujets reconstitués · Méthode de lecture · Plan détaillé · Corrigé commenté · 8 annales disponibles</p>
    </div>

    <div class="card">
      <div class="card-header"><h2>📌 Comment utiliser les annales ?</h2></div>
      <div class="card-body">
        <ol>
          <li><strong>Lisez le sujet</strong> sans regarder le corrigé. Notez vos premières idées en 5 minutes.</li>
          <li><strong>Analysez le dossier</strong> : identifiez la problématique, les documents clés, les angles à traiter.</li>
          <li><strong>Construisez votre plan</strong> en 15-20 minutes avant de rédiger.</li>
          <li><strong>Comparez avec le plan proposé</strong> : est-ce cohérent ? Manque-t-il des axes ?</li>
          <li><strong>Lisez le corrigé commenté</strong> pour comprendre les attentes du jury.</li>
        </ol>
        <div class="info-box">
          <div class="info-title">ℹ️ Rappel – La note de synthèse</div>
          Document opérationnel à destination d'un décideur · 3h · 3-4 pages · Plan en 2 ou 3 parties · Toujours conclure par des propositions concrètes
        </div>
      </div>
    </div>

    <div class="annales-grid">
      ${annales.map(a => `
        <div class="annale-card" onclick="document.getElementById('annale-detail-${a.annee}').classList.toggle('show'); this.classList.toggle('open')">
          <div class="annale-card-header">
            <div class="annale-year">${a.annee}</div>
            <div class="annale-status">Corrigé disponible</div>
          </div>
          <div class="annale-card-body">
            <div class="annale-theme">${a.theme}</div>
            <div class="annale-tags">
              ${a.tags.map(t => `<span class="annale-tag">${t}</span>`).join('')}
              <span class="annale-tag" style="background:#fff3e0;color:#e65100">${a.difficulte}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    ${annales.map(a => `
      <div id="annale-detail-${a.annee}" class="annale-detail">
        <span class="annale-close" onclick="document.getElementById('annale-detail-${a.annee}').classList.remove('show')">↑ Fermer cette annale</span>
        <h2>📅 Annale ${a.annee} – ${a.theme}</h2>

        <h3>📋 Sujet</h3>
        <div class="annale-sujet-box">
          <p>${a.sujet}</p>
        </div>

        <h3>🔍 Analyse du sujet</h3>
        <div class="annale-corrige">
          <p>${a.analyse}</p>
        </div>

        <h3>📐 Plan proposé</h3>
        <div class="annale-corrige">
          <pre style="white-space:pre-wrap;font-family:var(--font);font-size:0.9rem;line-height:1.8">${a.plan}</pre>
        </div>

        <h3>✍️ Éléments de corrigé commenté</h3>
        <div class="annale-corrige">
          <p>${a.corrige}</p>
        </div>

        <div class="key-points" style="margin-top:16px">
          <div class="kp-title">✅ Points à impérativement inclure</div>
          <ul>
            <li>Introduction avec problématique clairement posée en 1-2 paragraphes</li>
            <li>Annonce de plan explicite (I – II ou I – II – III)</li>
            <li>Chiffres clés et textes de référence cités avec précision</li>
            <li>Propositions concrètes en conclusion (pas de simple résumé)</li>
            <li>Formule de conclusion adaptée au destinataire de la note</li>
          </ul>
        </div>

        <div class="warning-box" style="margin-top:12px">
          <strong>⚠️ Erreurs fréquentes à éviter</strong><br>
          Plan catalogue sans logique argumentative · Copier-coller des documents sans synthèse · Oublier la dimension Martinique/CTM si pertinente · Note trop longue ou trop courte (hors format) · Conclusion sans proposition
        </div>

        <span class="annale-close" onclick="document.getElementById('annale-detail-${a.annee}').classList.remove('show')">↑ Fermer cette annale</span>
      </div>
    `).join('')}

    <div class="card">
      <div class="card-header"><h2>🎯 Les 100 erreurs à éviter à l'écrit</h2></div>
      <div class="card-body">
        <h3 style="color:var(--primary);margin-bottom:12px">Erreurs de forme</h3>
        <ul>
          <li>Ne pas mettre d'en-tête à la note (destinataire, objet, date)</li>
          <li>Plan en 4 ou 5 parties (maximum 3 parties, 3 sous-parties)</li>
          <li>Sous-titres apparents dans le corps du texte (la note n'en comporte pas)</li>
          <li>Utiliser le « je » ou le « nous » (style impersonnel requis)</li>
          <li>Fautes d'orthographe répétées sur des mots courants (décentralisation, compétences…)</li>
          <li>Paragraphes trop longs sans aération</li>
          <li>Chiffres non sourcés ou incorrects</li>
          <li>Conclusion en une seule phrase (insuffisante)</li>
        </ul>
        <h3 style="color:var(--primary);margin:16px 0 12px">Erreurs de fond</h3>
        <ul>
          <li>Paraphrase des documents sans synthèse ni analyse</li>
          <li>Problématique absente ou mal posée dans l'introduction</li>
          <li>Hors-sujet : traiter ce qui n'est pas demandé, ignorer une partie du sujet</li>
          <li>Propositions irréalistes (sans budget, sans base légale)</li>
          <li>Ignorer la dimension locale (Martinique) quand elle est pertinente</li>
          <li>Déséquilibre des parties (I très développé, III en 5 lignes)</li>
          <li>Conclusion = résumé sans apport nouveau ni recommandation</li>
          <li>Confusion entre rapport et note (la note est synthétique et opérationnelle)</li>
        </ul>
        <h3 style="color:var(--primary);margin:16px 0 12px">Erreurs de gestion du temps</h3>
        <ul>
          <li>Commencer à rédiger sans avoir lu tout le dossier</li>
          <li>Passer trop de temps sur un document au détriment des autres</li>
          <li>Ne pas réserver les 15-20 dernières minutes à la relecture</li>
          <li>Commencer le brouillon sans plan détaillé préalable</li>
        </ul>
      </div>
    </div>
  `;

  container.appendChild(section);

})();
