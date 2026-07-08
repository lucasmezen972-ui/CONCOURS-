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
    { part: 'P3', tag: 'Finances', q: 'Qu\'est-ce que la DGF ?', r: 'Dotation Globale de Fonctionnement : principale dotation de l\'État aux collectivités (~27 Mds€/an en 2024). Finance le fonctionnement courant. Calculée selon population, charges, ressources.' },
    { part: 'P3', tag: 'Finances', q: 'Rôle de l\'ordonnateur vs comptable public', r: '<strong>Ordonnateur</strong> (élu/DGS) : engage, liquide, ordonnance. <strong>Comptable</strong> (agent DGFiP) : contrôle et paie. Principe de séparation obligatoire des fonctions.' },
    { part: 'P3', tag: 'Finances', q: 'Seuil MAPA vs procédure formalisée (2024)', r: 'Marchés de travaux : <strong>5 538 000 € HT</strong>. Fournitures/services pour collectivités : <strong>221 000 € HT</strong>. En dessous : procédure adaptée (MAPA).' },
    { part: 'P3', tag: 'Finances', q: 'Qu\'est-ce que la péréquation ?', r: 'Mécanisme de redistribution des ressources des collectivités les plus riches vers les moins dotées, pour réduire les inégalités territoriales. Ex : FSRIF (Île-de-France), Fonds de péréquation régionale.' },
    { part: 'P3', tag: 'Finances', q: 'Qu\'est-ce que la Chambre régionale des comptes (CRC) ?', r: 'Juridiction financière qui contrôle la gestion des collectivités, juge les comptes des comptables et formule des observations de gestion. Branche régionale de la Cour des comptes.' },

    /* ── PARTIE 4 – RH et management ── */
    { part: 'P4', tag: 'RH', q: '4 groupes de sanctions disciplinaires FPT', r: '<strong>1er</strong> : avertissement, blâme. <strong>2e</strong> : radiation tableau avancement, abaissement échelon, exclusion max 3 j. <strong>3e</strong> : rétrogradation, exclusion 4j-2 ans. <strong>4e</strong> : mise retraite d\'office, révocation.' },
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
    { part: 'P5', tag: 'Méthodo', q: 'Différence note de synthèse / note à usage supérieur', r: '<strong>Synthèse</strong> : présente objectivement les infos du dossier (résumé structuré). <strong>Note à l\'usage d\'un supérieur</strong> : va plus loin → analyse + recommandations opérationnelles orientées décision.' },
    { part: 'P5', tag: 'Méthodo', q: 'Gestion du temps en 3h pour une note de concours', r: '45min lecture active · 20min plan détaillé · 15min introduction · 60min rédaction parties · 20min conclusion + relecture finale. Ne jamais commencer à rédiger sans plan complet.' },
    { part: 'P5', tag: 'Méthodo', q: 'Plans types pour une note administrative', r: '<strong>Diagnostic/Réponse</strong> (état des lieux → préconisations) · <strong>Thématique</strong> (juridique/financier/organisationnel) · <strong>Pour/Contre → synthèse</strong> · <strong>Chronologique</strong>. Choisir selon la commande.' },
    { part: 'P5', tag: 'Méthodo', q: 'Que signifie QQOQCP dans un diagnostic ?', r: '<strong>Q</strong>ui · <strong>Q</strong>uoi · <strong>O</strong>ù · <strong>Q</strong>uand · <strong>C</strong>omment · <strong>P</strong>ourquoi. Grille d\'analyse pour structurer le diagnostic d\'une situation et ne rien oublier.' },

    /* ── COMPLÉMENTS P6 ── */
    { part: 'P6', tag: 'Oral', q: 'Méthode LSCAP pour répondre aux questions complexes', r: '<strong>L</strong>ire/écouter attentivement · <strong>S</strong>tructure en 2-3 points · <strong>C</strong>adre juridique cité · <strong>A</strong>ctions concrètes · <strong>P</strong>récautions/limites mentionnées. Montre la maîtrise et l\'esprit critique.' },
    { part: 'P6', tag: 'Oral', q: 'Que signifie « obligation de réserve » pour un futur attaché ?', r: 'Ne pas exprimer publiquement des opinions politiques contraires à la neutralité du service. S\'applique hors service (réseaux sociaux, médias). Plus stricte pour les cadres. ≠ liberté d\'opinion personnelle qui est protégée.' },
    { part: 'P6', tag: 'Oral', q: 'Comment traiter une question sur un sujet qu\'on ne connaît pas ?', r: 'Admettre franchement « Je n\'ai pas approfondi ce point » · rattacher à un domaine proche · proposer la démarche pour trouver la réponse (veille, circulaires). Le jury évalue aussi l\'honnêteté et l\'adaptabilité.' },
    { part: 'P6', tag: 'Oral', q: 'Quelle posture adopter face au jury ?', r: 'Regarder chaque juré en alternance · voix posée et articulée · mains visibles sur la table · s\'autoriser une pause avant de répondre · sourire lors de l\'accueil. Éviter les bras croisés, le regard fuyant, les tics nerveux.' },
    { part: 'P6', tag: 'Oral', q: 'Comment valoriser son expérience en alternance/stage ?', r: 'Utiliser la méthode STAR : Situation → Tâche → Action → Résultat. Choisir 2-3 missions concrètes liées aux compétences de l\'attaché (gestion de dossier, réunion, rédaction). Quantifier les résultats si possible.' },
    { part: 'P6', tag: 'Oral', q: 'Principes CROC pour débuter un entretien oral', r: '<strong>C</strong>ontact (saluer, sourire) · <strong>R</strong>aison (« Je me présente : [Nom], je suis candidat au concours d\'attaché ») · <strong>O</strong>bjectif (« Je souhaite intégrer la CTM afin de… ») · <strong>C</strong>onclusion (annonce du plan de présentation).' },

    /* ── COMPLÉMENTS P7 ── */
    { part: 'P7', tag: 'Actualités', q: 'Qu\'est-ce que la sobriété numérique ?', r: 'Réduction de l\'impact environnemental du numérique (énergie, matériaux). Collectivités : allonger durée de vie équipements · achats reconditionnés · réduction serveurs · sensibilisation agents. Le numérique = 4% des GES mondiaux.' },
    { part: 'P7', tag: 'Actualités', q: 'Qu\'est-ce que le SPASER ?', r: 'Schéma de Promotion des Achats Publics Socialement et Écologiquement Responsables : obligatoire pour les collectivités >100 M€ d\'achats annuels. Intègre critères environnementaux et clauses d\'insertion dans les marchés.' },
    { part: 'P7', tag: 'Actualités', q: 'Qu\'est-ce que la démarche de gestion des risques RPS ?', r: 'Obligation employeur : identifier, évaluer et prévenir les RPS dans le DUERP. Actions : diagnostic · plan de prévention · cellule d\'écoute · formation managers · médiation. Le CST doit être consulté.' },
    { part: 'P7', tag: 'Actualités', q: 'Les enjeux de l\'open data pour les collectivités', r: 'Obligation pour les collectivités >3 500 hab. (loi République Numérique 2016) : publier en ligne les données publiques réutilisables. Enjeux : transparence, innovation, participation citoyenne, partenariats avec startups.' },

    /* ── COMPLÉMENTS P8 ── */
    { part: 'P8', tag: 'Martinique', q: 'Qu\'est-ce que le rhum AOC Martinique ?', r: 'Seul rhum français à bénéficier d\'une AOC (1996). Produit à partir de vesou (jus canne fraîche). 9 distilleries actives. ~50 000 hl exportés/an. Produit d\'excellence mondial, ambassadeur de la Martinique.' },
    { part: 'P8', tag: 'Martinique', q: 'Crise de l\'eau en Martinique : causes et solutions', r: '<strong>Causes</strong> : réseau vétuste (50+ ans), pertes >50%, gouvernance fragmentée (SMEAM). <strong>Solutions</strong> : renouvellement canalisations (fonds EU + État), rationalisation gouvernance, retenues collinaires.' },
    { part: 'P8', tag: 'Martinique', q: 'Qu\'est-ce que le CESECEM ?', r: 'Conseil Économique, Social, Environnemental, de la Culture et de l\'Éducation de Martinique. Assemblée consultative de la CTM (équivalent CESER). Consultation obligatoire sur le budget et les grands projets.' },
    { part: 'P8', tag: 'Martinique', q: 'Qu\'est-ce que l\'article 73 de la Constitution pour la Martinique ?', r: 'Permet aux DROM d\'adapter les lois et règlements aux caractéristiques locales. La CTM peut être habilitée par le Parlement à fixer des règles locales dans certains domaines. Fondement de la différenciation normative.' },
    { part: 'P8', tag: 'Martinique', q: 'Secteurs économiques clés de la Martinique', r: '1. <strong>Tourisme</strong> (~1,2 M visiteurs/an) · 2. <strong>Banane</strong> (exportation, ~15 000 ha) · 3. <strong>Rhum AOC</strong> (9 distilleries) · 4. <strong>Secteur public</strong> (1er employeur) · 5. <strong>Commerce</strong> (fort poids de la grande distribution).' },
    { part: 'P8', tag: 'Martinique', q: 'Montagne Pelée : enjeux pour la Martinique', r: 'Stratovolcan actif · éruption catastrophique 1902 (30 000 morts, destruction Saint-Pierre). Classée UNESCO 2023 avec les Pitons du Carbet. PPRn volcanique autour de la zone. CTM : gestion du risque volcanique et plan ORSEC.' },

    /* ── FICHES SUPPLÉMENTAIRES – Questions clés de jury ── */
    { part: 'P4', tag: 'RH', q: 'Qu\'est-ce que le DUERP ?', r: '<strong>Document Unique d\'Évaluation des Risques Professionnels</strong> : obligation légale annuelle pour tout employeur. Recense tous les risques (physiques, chimiques, RPS) et le plan d\'actions de prévention. Actualisé à chaque changement important. Soumis au CST.' },
    { part: 'P4', tag: 'RH', q: 'Qu\'est-ce que le RSU (Rapport Social Unique) ?', r: '<strong>Rapport Social Unique</strong> : document annuel obligatoire présenté au CST. Regroupe toutes les données RH (effectifs, rémunérations, formations, conditions de travail, égalité F/H). Remplace le bilan social depuis 2019. Base du dialogue social.' },
    { part: 'P4', tag: 'RH', q: 'Congés longue maladie (CLM/CLD) dans la FPT', r: '<strong>CLM</strong> (Congé Longue Maladie) : 3 ans max (1 an plein traitement + 2 ans demi). <strong>CLD</strong> (Congé Longue Durée) : 5 ans max (3 ans plein + 2 ans demi). Décision du comité médical. La RQTH peut être demandée en parallèle.' },
    { part: 'P4', tag: 'RH', q: 'Qu\'est-ce que la protection fonctionnelle ?', r: '<strong>Obligation de l\'employeur</strong> de protéger et défendre tout agent victime d\'attaques dans l\'exercice de ses fonctions (menaces, violences, harcèlement, diffamation). Art. 11 loi 83-634. Couvre défense juridique, aide psychologique et réparation des préjudices.' },
    { part: 'P2', tag: 'Droit', q: 'Qu\'est-ce que la HATVP ?', r: 'Haute Autorité pour la Transparence de la Vie Publique : institution indépendante créée en 2013. Reçoit et publie les déclarations de <strong>patrimoine et d\'intérêts</strong> des élus et hauts fonctionnaires. Prévient les conflits d\'intérêts dans la vie publique.' },
    { part: 'P4', tag: 'RH', q: 'Qu\'est-ce que le référent déontologue ?', r: 'Personne désignée dans chaque collectivité (ou CDG) pour <strong>conseiller les agents sur leurs obligations déontologiques</strong> et recueillir les alertes éthiques. Obligatoire depuis la loi Sapin II. Doit être indépendant. Le saisir est un droit reconnu.' },
    { part: 'P3', tag: 'Finances', q: 'DETR vs DSIL : quelle différence ?', r: '<strong>DETR</strong> (Dotation d\'Équipement des Territoires Ruraux) : aide aux communes rurales pour leurs investissements quotidiens (voirie, écoles, services). <strong>DSIL</strong> (Dotation de Soutien à l\'Investissement Local) : projets structurants (écologie, numérique, résilience). Les deux sont distribuées par le préfet.' },
    { part: 'P1', tag: 'Organisation', q: 'Qu\'est-ce que le CGFP ?', r: 'Code Général de la Fonction Publique : en vigueur depuis le <strong>1er mars 2022</strong>. Rassemble en un texte unique les statuts des 3 fonctions publiques (État, territoriale, hospitalière). Base légale unique remplaçant les lois de 1983, 1984 (FPT), 1984 (FPE) et 1986 (FPH).' },
    { part: 'P7', tag: 'Actualités', q: 'Qu\'est-ce qu\'un lanceur d\'alerte ?', r: 'Personne qui signale un <strong>délit, crime, manquement grave ou danger imminent</strong> dont elle a eu connaissance dans le cadre de ses fonctions. Protégée par la loi Sapin II (2016, renforcée 2022) contre les représailles (licenciement, mutation punitive…). Dans la FPT : saisir le référent déontologue.' },
    { part: 'P7', tag: 'Actualités', q: 'Qu\'est-ce que l\'ORSEC ?', r: '<strong>Organisation de la Réponse de SEcurité Civile</strong> : dispositif activé par le préfet pour coordonner tous les acteurs publics et privés lors d\'une catastrophe. Remplace l\'ancien plan ORSEC. Se décline en plans spéciaux : ORSEC cyclone (Martinique), ORSEC inondation, ORSEC accident nucléaire…' },
    { part: 'P4', tag: 'RH', q: 'Les 4 groupes de sanctions disciplinaires FPT (rappel)', r: '<strong>G1</strong> : avertissement, blâme (sans conseil de discipline). <strong>G2</strong> : abaissement d\'échelon, exclusion max 3j. <strong>G3</strong> : rétrogradation, exclusion 4j-2 ans. <strong>G4</strong> : mise à la retraite d\'office, révocation. G2 à G4 : consultation conseil de discipline obligatoire.' },
    { part: 'P3', tag: 'Finances', q: 'Qu\'est-ce que le DOB (Débat d\'Orientations Budgétaires) ?', r: 'Présentation par l\'exécutif des <strong>grandes orientations budgétaires</strong> pour l\'année à venir, au moins 2 mois avant le vote du budget primitif. Obligatoire pour les communes >3 500 hab., départements et régions. Permet le débat politique avant la décision.' },
    { part: 'P5', tag: 'Méthodo', q: 'Note de synthèse vs note à usage d\'un supérieur : clé de distinction', r: '<strong>Note de synthèse</strong> : restitue objectivement les informations du dossier (sans opinion). <strong>Note à usage du supérieur</strong> : analyse + propose des actions concrètes à un décideur. Le concours d\'Attaché évalue la <em>note à usage du supérieur</em> : elle est opérationnelle et orientée décision.' },
    { part: 'P6', tag: 'Oral', q: 'Les principes de Rolland (service public)', r: 'Les 3 lois de Rolland s\'appliquent à tout service public : <strong>Continuité</strong> (pas d\'interruption) · <strong>Égalité</strong> (mêmes droits pour tous) · <strong>Adaptabilité</strong> (s\'adapter aux besoins). Auxquelles s\'ajoutent la neutralité et la gratuité (selon le type de service).' },
    { part: 'P8', tag: 'Martinique', q: 'Différence art. 73 vs art. 74 Constitution pour la Martinique', r: '<strong>Art. 73</strong> : DROM (département+région d\'OM) avec le droit commun adapté. La Martinique relève de cet article (CTM depuis 2015). <strong>Art. 74</strong> : collectivités d\'OM (COM) avec un statut d\'autonomie spécifique (ex : Polynésie, Saint-Martin). La Martinique N\'est PAS sous l\'art. 74.' },
    { part: 'P8', tag: 'Martinique', q: 'CESECEM : rôle et composition', r: 'Conseil Économique, Social, Environnemental, de la Culture et de l\'Éducation de la Martinique. Instance <strong>consultative</strong> de la CTM (équivalent du CESER régional). Composé de représentants socio-économiques, associatifs, syndicaux. Avis obligatoire sur le budget et les schémas stratégiques de la CTM.' },

    /* ── ACTUALITÉS 2024 ── */
    { part: 'P7', tag: 'Actualités 2024', q: 'Qu\'est-ce que l\'AI Act 2024 ?', r: '<strong>Règlement UE 2024/1689</strong> (en vigueur août 2024) : premier cadre légal mondial sur l\'IA. Classe les IA en 4 niveaux de risque. Les IA « <strong>haut risque</strong> » dans les décisions administratives (RSA, emploi) imposent : audit obligatoire · registre de transparence · droit à l\'explication pour le citoyen.' },
    { part: 'P7', tag: 'Actualités 2024', q: 'France Travail 2024 : qu\'est-ce qui change ?', r: '<strong>1er janvier 2024</strong> : Pôle Emploi devient France Travail. Nouveauté clé : les bénéficiaires du RSA sont <strong>automatiquement inscrits</strong> et doivent signer un <strong>Contrat d\'Engagement</strong> (15-20h/sem d\'activités). CTM : doit co-piloter le suivi de ses 45 000 bénéficiaires RSA avec France Travail.' },
    { part: 'P7', tag: 'Actualités 2024', q: 'Budget 2025 : quelles contraintes pour les collectivités ?', r: '<strong>Contribution exceptionnelle de 3 Md€</strong> sur 2025-2028 pour les grandes collectivités (régions et dép. >30 M€ recettes) + gel de la DGF sans revalorisation. La CTM doit absorber la hausse des dépenses sociales (RSA, APA) avec des ressources contraintes.' },
    { part: 'P7', tag: 'Actualités 2024', q: 'ZAN 2024 : où en est-on ?', r: 'La <strong>loi du 20 juillet 2023</strong> précise le calendrier : -50% artificialisation par décennie (2021-2031), ZAN absolu en 2050. PADDM de la CTM devait être mis en conformité avant <strong>août 2024</strong>. Enjeu pour Martinique : concilier ZAN, logement social et préservation agricole.' },
    { part: 'P8', tag: 'Martinique 2024', q: 'Mouvement vie chère 2024 en Martinique', r: 'Sept.-oct. 2024 : blocages et fermetures de commerces contre des prix alimentaires <strong>40-49% plus élevés</strong> qu\'en métropole. <strong>Accord du 16 octobre 2024</strong> : encadrement des marges sur 54 produits essentiels. CTM : médiateur + plan alimentaire local pour développer la production vivrière (80% des aliments importés).' },
    { part: 'P8', tag: 'Martinique 2024', q: 'Plan eau d\'urgence 2024-2028 en Martinique', r: '<strong>200 millions d\'euros</strong> co-signés par l\'État et la CTM sur 2024-2028 pour renouveler les canalisations vétustes (pertes >50% en réseau). Rationalisation de la gouvernance (fusion syndicats des eaux). Financé par fonds européens (FEDER) et État.' },
    { part: 'P8', tag: 'Martinique 2024', q: 'Logement social en Martinique (SIMAR)', r: '<strong>SIMAR</strong> (Société Immobilière de la Martinique) : bailleur social CTM, ~17 000 logements HLM. 80 000+ logements dégradés. Opérations ANRU : Trénelle-Citron + Volga-Plage à Fort-de-France. Défi : normes parasismiques (zone 5) + ZAN + foncier rare.' }
  ];

  /* ── RÉPÉTITION ESPACÉE – SM-2 ── */
  function srLoad() {
    try { return JSON.parse(localStorage.getItem('concours_sr') || '{}'); } catch(e) { return {}; }
  }
  function srSave(data) {
    localStorage.setItem('concours_sr', JSON.stringify(data));
    if (window._concoursPush) window._concoursPush();
  }
  function sm2Calc(card, grade) {
    var c = { ef: card.ef || 2.5, interval: card.interval || 1, reps: card.reps || 0 };
    if (grade < 3) {
      c.reps = 0; c.interval = 1;
    } else {
      if (c.reps === 0) c.interval = 1;
      else if (c.reps === 1) c.interval = 6;
      else c.interval = Math.round(c.interval * c.ef);
      c.reps++;
    }
    c.ef = Math.max(1.3, c.ef + 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
    var d = new Date(); d.setDate(d.getDate() + c.interval);
    c.nextReview = d.toISOString().slice(0, 10);
    return c;
  }
  function srDueCount(filter) {
    var data = srLoad();
    var today = new Date().toISOString().slice(0, 10);
    var n = 0;
    FICHES.forEach(function(f, i) {
      if (filter && filter !== 'all' && f.part !== filter) return;
      var c = data[i];
      if (!c || c.nextReview <= today) n++;
    });
    return n;
  }
  function srBuildQueue(filter) {
    var data = srLoad();
    var today = new Date().toISOString().slice(0, 10);
    var due = [], fresh = [];
    FICHES.forEach(function(f, i) {
      if (filter && filter !== 'all' && f.part !== filter) return;
      var c = data[i];
      if (!c) fresh.push(i);
      else if (c.nextReview <= today) due.push(i);
    });
    function shuffle(a) {
      for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t; }
      return a;
    }
    return shuffle(due).concat(shuffle(fresh));
  }
  function srUpdateBtn() {
    var btn = document.getElementById('fe-sr-btn');
    if (!btn) return;
    var filter = (document.querySelector('.fe-filter-btn.active') || {dataset:{}}).dataset.feFilter || 'all';
    var n = srDueCount(filter);
    btn.innerHTML = '🧠 Révision espacée' + (n > 0 ? ' <span style="background:rgba(255,255,255,0.3);border-radius:10px;padding:1px 7px;font-size:0.78rem">' + n + '</span>' : '');
  }

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
    '  <button id="fe-sr-btn" style="background:#7c3aed;color:#fff;border:none;padding:8px 18px;border-radius:20px;cursor:pointer;font-weight:600;font-size:0.88rem;white-space:nowrap">🧠 Révision espacée</button>\n' +
    '</div>\n' +
    '<p id="fe-count" style="color:var(--text-muted);font-size:0.88rem;margin-bottom:16px">' + FICHES.length + ' fiches</p>\n' +
    '<div id="fe-solo-mode" style="display:none;text-align:center;margin-bottom:24px;padding:20px;background:#f8faff;border-radius:12px;border:1px solid var(--border)">\n' +
    '  <div style="width:100%;max-width:480px;margin:0 auto 14px"><div style="background:var(--border);border-radius:20px;height:6px;overflow:hidden"><div id="fe-solo-pbar" style="height:100%;background:var(--primary);border-radius:20px;transition:width 0.4s ease;width:0%"></div></div></div>\n' +
    '  <div id="fe-solo-card" style="min-height:160px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:12px"></div>\n' +
    '  <div id="fe-solo-answer" style="display:none;padding:16px;background:#fff;border-radius:8px;margin:16px 0;text-align:left;border-left:4px solid var(--primary)"></div>\n' +
    '  <div class="fe-solo-controls">\n' +
    '    <button id="fe-solo-reveal" style="background:var(--primary);color:#fff;border:none;padding:10px 22px;border-radius:8px;cursor:pointer;font-weight:600">💡 Voir la réponse</button>\n' +
    '    <button id="fe-solo-known" style="background:var(--success);color:#fff;border:none;padding:10px 22px;border-radius:8px;cursor:pointer;font-weight:700;display:none">✓ Je savais</button>\n' +
    '    <button id="fe-solo-unknown" style="background:#e65100;color:#fff;border:none;padding:10px 22px;border-radius:8px;cursor:pointer;font-weight:700;display:none">✗ À revoir</button>\n' +
    '    <button id="fe-solo-exit" style="background:var(--border);color:var(--text);border:none;padding:10px 22px;border-radius:8px;cursor:pointer;font-weight:600">✕ Quitter</button>\n' +
    '  </div>\n' +
    '  <div id="fe-sr-rating" style="display:none;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:8px">\n' +
    '    <button id="fe-sr-diff" style="background:#dc2626;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:700">❌ Difficile</button>\n' +
    '    <button id="fe-sr-ok" style="background:#d97706;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:700">🤔 Hésitant</button>\n' +
    '    <button id="fe-sr-good" style="background:#16a34a;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:700">✅ Maîtrisé</button>\n' +
    '    <button id="fe-sr-exit" style="background:var(--border);color:var(--text);border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:600">✕ Quitter</button>\n' +
    '  </div>\n' +
    '  <p id="fe-sr-interval-hint" style="color:var(--text-muted);font-size:0.78rem;margin-top:8px;display:none"></p>\n' +
    '  <p id="fe-solo-progress" style="color:var(--text-muted);font-size:0.85rem;margin-top:12px"></p>\n' +
    '  <p style="color:var(--text-muted);font-size:0.78rem;margin-top:4px">Raccourcis : <kbd style="background:rgba(0,0,0,0.08);padding:1px 5px;border-radius:3px">Espace</kbd> révéler · <kbd style="background:rgba(0,0,0,0.08);padding:1px 5px;border-radius:3px">→</kbd> je savais · <kbd style="background:rgba(0,0,0,0.08);padding:1px 5px;border-radius:3px">←</kbd> à revoir · <kbd style="background:rgba(0,0,0,0.08);padding:1px 5px;border-radius:3px">Esc</kbd> quitter</p>\n' +
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
      srUpdateBtn();
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
      document.getElementById('fe-solo-known').style.display = 'inline-block';
      document.getElementById('fe-solo-unknown').style.display = 'inline-block';
      return;
    }
    if (e.target.closest('#fe-solo-known')) {
      soloKnown++;
      soloNextCard();
      return;
    }
    if (e.target.closest('#fe-solo-unknown')) {
      soloUnknown++;
      if (soloIdx < soloQueue.length) failedCards.push(soloQueue[soloIdx]);
      soloNextCard();
      return;
    }
    if (e.target.closest('#fe-solo-exit')) {
      exitSoloMode();
      return;
    }
    if (e.target.closest('#fe-solo-replay-failed')) {
      var failed = failedCards.slice();
      soloQueue = shuffleArr(failed);
      soloIdx = 0; soloKnown = 0; soloUnknown = 0; failedCards = [];
      showSoloCard();
      return;
    }

    /* SR mode launch */
    if (e.target.closest('#fe-sr-btn')) { startSrMode(); return; }

    /* SR reveal — reuse solo reveal but show SR buttons */
    if (e.target.closest('#fe-solo-reveal') && srActive) {
      document.getElementById('fe-solo-answer').style.display = 'block';
      document.getElementById('fe-solo-reveal').style.display = 'none';
      document.getElementById('fe-sr-rating').style.display = 'flex';
      var hint = document.getElementById('fe-sr-interval-hint');
      var data = srLoad(); var c = data[srQueue[srQueueIdx]] || {};
      if (hint) {
        var ef = (c.ef || 2.5).toFixed(1);
        hint.style.display = 'block';
        hint.textContent = '❌ → 1 jour · 🤔 → ' + (c.reps >= 2 ? Math.round((c.interval || 1) * ef) : c.reps === 1 ? 6 : 1) + ' jours · ✅ → ' + (c.reps >= 2 ? Math.round((c.interval || 1) * ef) : c.reps === 1 ? 6 : 1) + ' jours';
        hint.textContent = '❌ 1j · 🤔 revu bientôt · ✅ espacé plus longtemps';
      }
      return;
    }

    /* SR ratings */
    if (srActive) {
      var grade = -1;
      if (e.target.closest('#fe-sr-diff')) grade = 1;
      if (e.target.closest('#fe-sr-ok'))   grade = 3;
      if (e.target.closest('#fe-sr-good')) grade = 5;
      if (grade >= 0) { applySrRating(grade); return; }
      if (e.target.closest('#fe-sr-exit')) { exitSrMode(); return; }
    }
  });

  /* ── SOLO MODE ── */
  var soloQueue = [], soloIdx = 0, soloKnown = 0, soloUnknown = 0, failedCards = [], soloActive = false;

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
    soloIdx = 0; soloKnown = 0; soloUnknown = 0; failedCards = [];
    soloActive = true;
    document.getElementById('fe-grid').style.display = 'none';
    document.getElementById('fe-solo-mode').style.display = 'block';
    document.getElementById('fe-shuffle-btn').textContent = '🔀 Mode Solo (actif)';
    showSoloCard();
  }

  function showSoloCard() {
    var pbar = document.getElementById('fe-solo-pbar');
    var progEl = document.getElementById('fe-solo-progress');

    if (soloIdx >= soloQueue.length) {
      var pct = soloQueue.length > 0 ? Math.round(soloKnown / soloQueue.length * 100) : 0;
      var scoreColor = pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
      document.getElementById('fe-solo-card').innerHTML =
        '<div style="font-size:2.2rem;margin-bottom:4px">🎉</div>' +
        '<strong style="font-size:1.1rem">Paquet terminé !</strong>' +
        '<div style="display:flex;gap:24px;margin:8px 0">' +
          '<span style="color:var(--success);font-weight:700;font-size:1rem">✓ ' + soloKnown + ' connues</span>' +
          '<span style="color:#e65100;font-weight:700;font-size:1rem">✗ ' + soloUnknown + ' à revoir</span>' +
        '</div>' +
        '<div style="font-size:2rem;font-weight:900;color:' + scoreColor + '">' + pct + '%</div>' +
        (failedCards.length > 0 ? '<button id="fe-solo-replay-failed" style="background:#e65100;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:700;margin-top:12px">🔁 Reprendre les ' + failedCards.length + ' fiches non maîtrisées</button>' : '');
      document.getElementById('fe-solo-answer').style.display = 'none';
      document.getElementById('fe-solo-reveal').style.display = 'none';
      document.getElementById('fe-solo-known').style.display = 'none';
      document.getElementById('fe-solo-unknown').style.display = 'none';
      if (pbar) pbar.style.width = '100%';
      if (progEl) progEl.textContent = soloQueue.length + ' / ' + soloQueue.length;
      return;
    }

    var f = soloQueue[soloIdx];
    document.getElementById('fe-solo-card').innerHTML =
      '<span style="font-size:0.8rem;background:var(--primary);color:#fff;border-radius:4px;padding:2px 8px">' + f.part + ' · ' + f.tag + '</span>' +
      '<div style="font-size:1.1rem;font-weight:700;color:var(--primary);margin-top:8px;max-width:480px;line-height:1.5">' + f.q + '</div>';
    document.getElementById('fe-solo-answer').innerHTML = f.r;
    document.getElementById('fe-solo-answer').style.display = 'none';
    document.getElementById('fe-solo-reveal').style.display = 'inline-block';
    document.getElementById('fe-solo-known').style.display = 'none';
    document.getElementById('fe-solo-unknown').style.display = 'none';
    if (pbar) pbar.style.width = (soloQueue.length > 0 ? Math.round(soloIdx / soloQueue.length * 100) : 0) + '%';
    if (progEl) progEl.textContent = (soloIdx + 1) + ' / ' + soloQueue.length + ' · ✓ ' + soloKnown + ' · ✗ ' + soloUnknown;
  }

  function soloNextCard() {
    soloIdx++;
    showSoloCard();
  }

  function exitSoloMode() {
    document.getElementById('fe-solo-mode').style.display = 'none';
    document.getElementById('fe-grid').style.display = '';
    document.getElementById('fe-shuffle-btn').textContent = '🔀 Mode Solo';
    soloQueue = []; soloIdx = 0; soloKnown = 0; soloUnknown = 0; failedCards = [];
    soloActive = false;
  }

  /* ── SR MODE ── */
  var srQueue = [], srQueueIdx = 0, srActive = false, srCorrect = 0, srTotal = 0;

  function startSrMode() {
    var filter = (document.querySelector('.fe-filter-btn.active') || {dataset:{}}).dataset.feFilter || 'all';
    srQueue = srBuildQueue(filter);
    if (srQueue.length === 0) {
      alert('Aucune carte à réviser maintenant. Revenez demain !');
      return;
    }
    srQueueIdx = 0; srCorrect = 0; srTotal = 0;
    srActive = true; soloActive = false;
    document.getElementById('fe-grid').style.display = 'none';
    document.getElementById('fe-solo-mode').style.display = 'block';
    document.getElementById('fe-shuffle-btn').textContent = '🔀 Mode Solo';
    document.getElementById('fe-sr-btn').textContent = '🧠 SR (actif)';
    showSrCard();
  }

  function showSrCard() {
    var pbar = document.getElementById('fe-solo-pbar');
    var progEl = document.getElementById('fe-solo-progress');
    var hint = document.getElementById('fe-sr-interval-hint');

    if (srQueueIdx >= srQueue.length) {
      var pct = srTotal > 0 ? Math.round(srCorrect / srTotal * 100) : 0;
      var col = pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
      document.getElementById('fe-solo-card').innerHTML =
        '<div style="font-size:2.2rem;margin-bottom:4px">🎉</div>' +
        '<strong style="font-size:1.1rem">Session terminée !</strong>' +
        '<div style="display:flex;gap:24px;margin:8px 0">' +
          '<span style="color:var(--success);font-weight:700">✅ ' + srCorrect + ' maîtrisées</span>' +
          '<span style="color:#d97706;font-weight:700">🔄 ' + (srTotal - srCorrect) + ' à revoir</span>' +
        '</div>' +
        '<div style="font-size:2rem;font-weight:900;color:' + col + '">' + pct + '%</div>' +
        '<p style="font-size:0.82rem;color:var(--text-muted);margin-top:8px">La prochaine session s\'adaptera automatiquement.</p>';
      document.getElementById('fe-solo-answer').style.display = 'none';
      document.getElementById('fe-solo-reveal').style.display = 'none';
      document.getElementById('fe-sr-rating').style.display = 'none';
      if (hint) hint.style.display = 'none';
      if (pbar) pbar.style.width = '100%';
      if (progEl) progEl.textContent = srQueue.length + ' / ' + srQueue.length;
      srUpdateBtn();
      return;
    }

    var cardIdx = srQueue[srQueueIdx];
    var f = FICHES[cardIdx];
    var data = srLoad();
    var c = data[cardIdx];
    var isNew = !c;
    var badge = isNew
      ? '<span style="font-size:0.72rem;background:#7c3aed;color:#fff;border-radius:4px;padding:1px 7px;margin-left:6px">Nouveau</span>'
      : '';

    document.getElementById('fe-solo-card').innerHTML =
      '<span style="font-size:0.8rem;background:var(--primary);color:#fff;border-radius:4px;padding:2px 8px">' + f.part + ' · ' + f.tag + '</span>' + badge +
      '<div style="font-size:1.1rem;font-weight:700;color:var(--primary);margin-top:8px;max-width:480px;line-height:1.5">' + f.q + '</div>';
    document.getElementById('fe-solo-answer').innerHTML = f.r;
    document.getElementById('fe-solo-answer').style.display = 'none';
    document.getElementById('fe-solo-reveal').style.display = 'inline-block';
    document.getElementById('fe-sr-rating').style.display = 'none';
    if (hint) hint.style.display = 'none';
    if (pbar) pbar.style.width = (srQueue.length > 0 ? Math.round(srQueueIdx / srQueue.length * 100) : 0) + '%';
    if (progEl) progEl.textContent = (srQueueIdx + 1) + ' / ' + srQueue.length;
  }

  function applySrRating(grade) {
    var cardIdx = srQueue[srQueueIdx];
    var data = srLoad();
    data[cardIdx] = sm2Calc(data[cardIdx] || {}, grade);
    srSave(data);
    if (grade >= 4) srCorrect++;
    srTotal++;
    srQueueIdx++;
    showSrCard();
  }

  function exitSrMode() {
    document.getElementById('fe-solo-mode').style.display = 'none';
    document.getElementById('fe-grid').style.display = '';
    srActive = false; srQueue = []; srQueueIdx = 0;
    srUpdateBtn();
  }

  /* Keyboard navigation for solo + SR mode */
  document.addEventListener('keydown', function(e) {
    if (!soloActive && !srActive) return;
    var tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    if (e.key === ' ') {
      e.preventDefault();
      var revealBtn = document.getElementById('fe-solo-reveal');
      if (revealBtn && revealBtn.style.display !== 'none') { revealBtn.click(); return; }
    }
    if (srActive) {
      var rating = document.getElementById('fe-sr-rating');
      if (rating && rating.style.display !== 'none') {
        if (e.key === 'ArrowRight' || e.key === '3') { e.preventDefault(); applySrRating(5); return; }
        if (e.key === 'ArrowLeft'  || e.key === '1') { e.preventDefault(); applySrRating(1); return; }
        if (e.key === '2')                           { e.preventDefault(); applySrRating(3); return; }
      }
      if (e.key === 'Escape') { exitSrMode(); return; }
      return;
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      var knownBtn = document.getElementById('fe-solo-known');
      if (knownBtn && knownBtn.style.display !== 'none') knownBtn.click();
      return;
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      var unknownBtn = document.getElementById('fe-solo-unknown');
      if (unknownBtn && unknownBtn.style.display !== 'none') unknownBtn.click();
      return;
    }
    if (e.key === 'Escape') { exitSoloMode(); }
  });

  /* Update SR badge on load */
  setTimeout(srUpdateBtn, 200);
})();
