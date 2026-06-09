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
    { part: 'P8', tag: 'Martinique', q: 'Qu\'est-ce que les fonds européens pour la Martinique ?', r: 'En tant que RUP (Région Ultrapériphérique), la Martinique bénéficie de FEDER, FSE+, FEADER, FEAMPA avec des taux de cofinancement bonifiés pour compenser ses handicaps structurels.' },

    /* ── COMPLÉMENTS P1 ── */
    { part: 'P1', tag: 'Organisation', q: 'Qu\'est-ce que le CGCT ?', r: 'Code Général des Collectivités Territoriales : principal texte législatif régissant l\'organisation, les compétences et le fonctionnement des collectivités locales en France.' },
    { part: 'P1', tag: 'Organisation', q: 'Différence SCoT / PLU / PLUi', r: '<strong>SCoT</strong> : schéma de cohérence à l\'échelle intercommunale. <strong>PLU</strong> : plan local d\'urbanisme (commune). <strong>PLUi</strong> : PLU intercommunal géré par l\'EPCI. Le SCoT est opposable aux PLU.' },
    { part: 'P1', tag: 'Organisation', q: 'Rôle du préfet vis-à-vis des collectivités', r: 'Représentant de l\'État : contrôle de légalité des actes · peut déférer au TA · coordonne les services de l\'État · porte-parole du gouvernement. Il N\'est PAS le supérieur hiérarchique des élus.' },

    /* ── COMPLÉMENTS P2 ── */
    { part: 'P2', tag: 'Droit', q: 'Qu\'est-ce qu\'un acte unilatéral (décision exécutoire) ?', r: 'Acte de l\'administration pris sans l\'accord du destinataire et s\'imposant à lui. Exemples : arrêté municipal, décret, arrêté préfectoral. Présomption de légalité sauf annulation par le juge.' },
    { part: 'P2', tag: 'Droit', q: 'Qu\'est-ce que le Défenseur des droits ?', r: 'Autorité indépendante créée en 2011 (art. 71-1 Constitution) : protège les droits des citoyens face à l\'administration, lutte contre les discriminations, défend les droits de l\'enfant. Saisi directement par tout citoyen.' },

    /* ── COMPLÉMENTS P3 ── */
    { part: 'P3', tag: 'Finances', q: 'Section de fonctionnement vs section d\'investissement', r: '<strong>Fonctionnement</strong> : dépenses et recettes courantes (salaires, fournitures, subventions, DGF). <strong>Investissement</strong> : dépenses et recettes durables (emprunts, remboursement capital, équipements). Règle : l\'excédent de fonctionnement peut financer l\'investissement.' },
    { part: 'P3', tag: 'Finances', q: 'Qu\'est-ce que le vote du budget par chapitres ?', r: 'Le budget est voté par chapitre (ensemble de crédits de même nature). Les virements entre chapitres nécessitent une délibération. Les virements au sein d\'un même chapitre relèvent des pouvoirs propres de l\'exécutif.' },

    /* ── COMPLÉMENTS P4 ── */
    { part: 'P4', tag: 'RH', q: 'Qu\'est-ce que le GPEC dans la FPT ?', r: 'Gestion Prévisionnelle des Emplois et des Compétences (rebaptisée GEPP) : anticiper les besoins en compétences de la collectivité à moyen terme. Obligation pour les collectivités >200 agents de mettre en œuvre un plan pluriannuel de GPEC.' },
    { part: 'P4', tag: 'RH', q: 'Qu\'est-ce que la promotion interne dans la FPT ?', r: 'Dispositif permettant à un agent de changer de cadre d\'emplois par examen professionnel ou au choix, sans passer de concours externe. Elle est contingentée par un quota (1 nomination par promotion interne pour X nominations externes).' },
    { part: 'P4', tag: 'Management', q: 'Qu\'est-ce que le projet de service dans une collectivité ?', r: 'Document stratégique qui définit les orientations d\'un service pour 3-5 ans : missions, valeurs, objectifs, organisation, axes d\'amélioration. Outil de management participatif, il donne du sens au travail de l\'équipe.' },

    /* ── COMPLÉMENTS P5 ── */
    { part: 'P5', tag: 'Méthodo', q: 'Comment introduire une note administrative ?', r: 'L\'introduction doit : 1) Contextualiser le sujet (cadre légal ou événement déclencheur) · 2) Poser la problématique en 1-2 phrases · 3) Annoncer le plan en 2-3 parties. Elle représente environ 10% de la longueur totale.' },
    { part: 'P5', tag: 'Méthodo', q: 'Règles d\'or de la rédaction administrative', r: '1. Phrase courte (20 mots max) · 2. Vocabulaire précis et sobre · 3. Neutralité (pas de jugement) · 4. Lisibilité (titres, listes) · 5. Ne pas paraphraser les documents · 6. Citer les sources sans les copier.' },

    /* ── COMPLÉMENTS P6 ── */
    { part: 'P6', tag: 'Oral', q: 'Méthode LSCAP pour répondre aux questions complexes', r: '<strong>L</strong>ire/écouter attentivement · <strong>S</strong>tructure en 2-3 points · <strong>C</strong>adre juridique cité · <strong>A</strong>ctions concrètes · <strong>P</strong>récautions/limites mentionnées. Montre la maîtrise et l\'esprit critique.' },
    { part: 'P6', tag: 'Oral', q: 'Que signifie « obligation de réserve » pour un futur attaché ?', r: 'Ne pas exprimer publiquement des opinions politiques contraires à la neutralité du service. S\'applique hors service (réseaux sociaux, médias). Plus stricte pour les cadres. ≠ liberté d\'opinion personnelle qui est protégée.' },

    /* ── COMPLÉMENTS P7 ── */
    { part: 'P7', tag: 'Actualités', q: 'Qu\'est-ce que la sobriété numérique ?', r: 'Réduction de l\'impact environnemental du numérique (énergie, matériaux). Collectivités : allonger durée de vie équipements · achats reconditionnés · réduction serveurs · sensibilisation agents. Le numérique = 4% des GES mondiaux.' },
    { part: 'P7', tag: 'Actualités', q: 'Qu\'est-ce que le SPASER ?', r: 'Schéma de Promotion des Achats Publics Socialement et Écologiquement Responsables : obligatoire pour les collectivités >100 M€ d\'achats annuels. Intègre critères environnementaux et clauses d\'insertion dans les marchés.' },

    /* ── COMPLÉMENTS P8 ── */
    { part: 'P8', tag: 'Martinique', q: 'Qu\'est-ce que le rhum AOC Martinique ?', r: 'Seul rhum français à bénéficier d\'une AOC (1996). Produit à partir de vesou (jus canne fraîche). 9 distilleries actives. ~50 000 hl exportés/an. Produit d\'excellence mondial, ambassadeur de la Martinique.' },
    { part: 'P8', tag: 'Martinique', q: 'Crise de l\'eau en Martinique : causes et solutions', r: '<strong>Causes</strong> : réseau vétuste (50+ ans), pertes >50%, gouvernance fragmentée (SMEAM). <strong>Solutions</strong> : renouvellement canalisations (fonds EU + État), rationalisation gouvernance, retenues collinaires.' },
    { part: 'P8', tag: 'Martinique', q: 'Qu\'est-ce que le CESECEM ?', r: 'Conseil Économique, Social, Environnemental, de la Culture et de l\'Éducation de Martinique. Assemblée consultative de la CTM (équivalent CESER). Consultation obligatoire sur le budget et les grands projets.' }
  ];

  var html = '<section id="fiches-express" class="page-section">\n' +
    '<div class="fe-header">\n' +
    '  <h1>⚡ Fiches Express</h1>\n' +
    '  <p style="color:var(--text-muted)">Cliquez sur une carte pour révéler la réponse. Idéal pour la révision rapide.</p>\n' +
    '</div>\n' +
    '<div class="fe-toolbar">\n' +
    '  <div class="fe-filters">\n' +
    '    <button class="fe-filter-btn active" data-fe-filter="all">Toutes (' + FICHES.length + ')</button>\n' +
    '    <button class="fe-filter-btn" data-fe-filter="P1">P1 – Organisation</button>\n' +
    '    <button class="fe-filter-btn" data-fe-filter="P2">P2 – Droit</button>\n' +
    '    <button class="fe-filter-btn" data-fe-filter="P3">P3 – Finances</button>\n' +
    '    <button class="fe-filter-btn" data-fe-filter="P4">P4 – RH</button>\n' +
    '    <button class="fe-filter-btn" data-fe-filter="P5">P5 – Méthodo</button>\n' +
    '    <button class="fe-filter-btn" data-fe-filter="P6">P6 – Oral</button>\n' +
    '    <button class="fe-filter-btn" data-fe-filter="P7">P7 – Actu</button>\n' +
    '    <button class="fe-filter-btn" data-fe-filter="P8">P8 – Martinique</button>\n' +
    '  </div>\n' +
    '  <button id="fe-shuffle-btn" style="background:var(--primary);color:#fff;border:none;padding:8px 18px;border-radius:20px;cursor:pointer;font-weight:600;font-size:0.88rem;white-space:nowrap">🔀 Mode Solo</button>\n' +
    '</div>\n' +
    '<p id="fe-count" style="color:var(--text-muted);font-size:0.88rem;margin-bottom:16px">' + FICHES.length + ' fiches</p>\n' +
    '<div id="fe-solo-mode" style="display:none;text-align:center;margin-bottom:24px;padding:20px;background:#f8faff;border-radius:12px;border:1px solid var(--border)">\n' +
    '  <div id="fe-solo-card" style="min-height:160px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:12px"></div>\n' +
    '  <div id="fe-solo-answer" style="display:none;padding:16px;background:#fff;border-radius:8px;margin:16px 0;text-align:left;border-left:4px solid var(--primary)"></div>\n' +
    '  <div class="fe-solo-controls">\n' +
    '    <button id="fe-solo-reveal" style="background:var(--primary);color:#fff;border:none;padding:10px 22px;border-radius:8px;cursor:pointer;font-weight:600">💡 Voir la réponse</button>\n' +
    '    <button id="fe-solo-next" style="background:var(--success);color:#fff;border:none;padding:10px 22px;border-radius:8px;cursor:pointer;font-weight:600;display:none">→ Suivante</button>\n' +
    '    <button id="fe-solo-exit" style="background:var(--border);color:var(--text);border:none;padding:10px 22px;border-radius:8px;cursor:pointer;font-weight:600">✕ Quitter le mode solo</button>\n' +
    '  </div>\n' +
    '  <p id="fe-solo-progress" style="color:var(--text-muted);font-size:0.85rem;margin-top:12px"></p>\n' +
    '</div>\n' +
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

    /* Solo mode launch */
    if (e.target.closest('#fe-shuffle-btn')) {
      startSoloMode();
      return;
    }

    /* Solo mode controls */
    if (e.target.closest('#fe-solo-reveal')) {
      document.getElementById('fe-solo-answer').style.display = 'block';
      document.getElementById('fe-solo-reveal').style.display = 'none';
      document.getElementById('fe-solo-next').style.display = 'inline-block';
      return;
    }
    if (e.target.closest('#fe-solo-next')) {
      soloNextCard();
      return;
    }
    if (e.target.closest('#fe-solo-exit')) {
      exitSoloMode();
      return;
    }
  });

  /* ── SOLO MODE ── */
  var soloQueue = [], soloIdx = 0;

  function shuffleArr(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function startSoloMode() {
    var activeFilter = (document.querySelector('.fe-filter-btn.active') || {}).dataset;
    var filter = activeFilter ? activeFilter.feFilter : 'all';
    soloQueue = shuffleArr(
      filter === 'all' ? FICHES : FICHES.filter(function(f){ return f.part === filter; })
    );
    soloIdx = 0;
    document.getElementById('fe-grid').style.display = 'none';
    document.getElementById('fe-solo-mode').style.display = 'block';
    document.getElementById('fe-shuffle-btn').textContent = '🔀 Mode Solo (actif)';
    showSoloCard();
  }

  function showSoloCard() {
    if (soloIdx >= soloQueue.length) {
      document.getElementById('fe-solo-card').innerHTML = '<strong>🎉 Toutes les fiches vues !</strong><br><span style="color:var(--text-muted)">Recommencez pour réviser à nouveau.</span>';
      document.getElementById('fe-solo-answer').style.display = 'none';
      document.getElementById('fe-solo-reveal').style.display = 'none';
      document.getElementById('fe-solo-next').style.display = 'none';
      document.getElementById('fe-solo-progress').textContent = soloQueue.length + ' / ' + soloQueue.length;
      return;
    }
    var f = soloQueue[soloIdx];
    document.getElementById('fe-solo-card').innerHTML =
      '<span style="font-size:0.8rem;background:var(--primary);color:#fff;border-radius:4px;padding:2px 8px">' + f.part + ' · ' + f.tag + '</span>' +
      '<div style="font-size:1.1rem;font-weight:700;color:var(--primary);margin-top:8px;max-width:480px">' + f.q + '</div>';
    document.getElementById('fe-solo-answer').innerHTML = f.r;
    document.getElementById('fe-solo-answer').style.display = 'none';
    document.getElementById('fe-solo-reveal').style.display = 'inline-block';
    document.getElementById('fe-solo-next').style.display = 'none';
    document.getElementById('fe-solo-progress').textContent = (soloIdx + 1) + ' / ' + soloQueue.length;
  }

  function soloNextCard() {
    soloIdx++;
    showSoloCard();
  }

  function exitSoloMode() {
    document.getElementById('fe-solo-mode').style.display = 'none';
    document.getElementById('fe-grid').style.display = '';
    document.getElementById('fe-shuffle-btn').textContent = '🔀 Mode Solo';
    soloQueue = []; soloIdx = 0;
  }
})();
