/* ============================================================
   PARTIE 3 – Finances publiques territoriales (3 chapitres)
   ============================================================ */
(function() {
  const container = document.querySelector('.main-content');
  const sections = [

    // ---- P3C1 : Budget local & Recettes ----
    { id: 'p3c1', html: `
<section id="p3c1" class="page-section">
<div class="chapter-title">
  <div class="num">P3·C1</div>
  <div><div class="part-tag">Partie 3 – Finances publiques territoriales</div><h1>Budget local &amp; recettes</h1></div>
</div>
<div class="chapter-intro">La maîtrise du budget local est une compétence clé de l'Attaché Territorial. Ce chapitre couvre les principes budgétaires, la structure du budget, les recettes des collectivités et la fiscalité locale.</div>

<h2 class="section-title">1. Les principes budgétaires</h2>
<table>
  <thead><tr><th>Principe</th><th>Contenu</th></tr></thead>
  <tbody>
    <tr><td>Annualité</td><td>Le budget couvre une année civile (1er jan. – 31 déc.). Vote avant le 31 déc. de l'année N-1</td></tr>
    <tr><td>Unité</td><td>Un seul document budgétaire (+ budgets annexes pour services industriels et commerciaux)</td></tr>
    <tr><td>Universalité</td><td>Toutes les recettes et dépenses figurent au budget · pas de contraction ni d'affectation</td></tr>
    <tr><td>Équilibre réel</td><td>Section fonctionnement et section investissement doivent être à l'équilibre</td></tr>
    <tr><td>Sincérité</td><td>Les prévisions doivent être sincères (raisonnables et de bonne foi)</td></tr>
    <tr><td>Spécialité</td><td>Les crédits sont votés par chapitre (ou programme) · affectation précise</td></tr>
  </tbody>
</table>

<h2 class="section-title">2. Structure du budget local</h2>
<p>Le budget local est divisé en deux sections :</p>
<ul>
  <li><strong>Section de fonctionnement</strong> : recettes et dépenses courantes (personnel, achats, subventions, dotations…)</li>
  <li><strong>Section d'investissement</strong> : recettes et dépenses d'investissement (emprunts, dotations, travaux, équipements)</li>
</ul>
<p>La règle d'or impose que la section de fonctionnement soit excédentaire pour financer en partie l'investissement (autofinancement).</p>

<h2 class="section-title">3. Les recettes des collectivités</h2>
<table>
  <thead><tr><th>Catégorie</th><th>Exemples</th><th>Part approx.</th></tr></thead>
  <tbody>
    <tr><td>Fiscalité locale</td><td>Taxe foncière (TF), CFE, CVAE, TFPNB</td><td>~40%</td></tr>
    <tr><td>Dotations État</td><td>DGF, FCTVA, DSU, DSR, DNP</td><td>~30%</td></tr>
    <tr><td>Ressources propres</td><td>Redevances, produits domaniaux, cessions</td><td>~10%</td></tr>
    <tr><td>Emprunts</td><td>Emprunts bancaires, émissions obligataires</td><td>~15%</td></tr>
    <tr><td>Fonds européens</td><td>FEDER, FSE+, FEADER, REACT-EU</td><td>~5%</td></tr>
  </tbody>
</table>

<h2 class="section-title">4. La DGF – Dotation Globale de Fonctionnement</h2>
<p>Principal concours financier de l'État aux collectivités (~26 milliards d'euros). Elle comprend :</p>
<ul>
  <li><strong>Pour les communes</strong> : dotation forfaitaire + dotation de solidarité urbaine (DSU) + dotation de solidarité rurale (DSR)</li>
  <li><strong>Pour les départements</strong> : dotation forfaitaire + dotation de péréquation</li>
  <li><strong>Pour les régions</strong> : dotation forfaitaire</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Financement de la CTM</h3>
  <p>Le budget de la CTM (environ 1,6 milliard €/an) repose sur des ressources spécifiques :</p>
  <ul>
    <li><strong>Octroi de mer</strong> : taxe sur les importations · ressource majeure des collectivités martiniquaises (~200 M€/an)</li>
    <li><strong>TVA réduite</strong> (8,5% au lieu de 20%) : générant des recettes spécifiques</li>
    <li><strong>Fonds européens</strong> : environ 800 M€ pour la période 2021-2027 (FEDER + FSE+ + FEADER) gérés directement par la CTM</li>
    <li><strong>DGF spécifique</strong> : dotation globale de fonctionnement intégrant une majoration au titre du rattrapage économique</li>
    <li><strong>Dotation de compensation</strong> de l'octroi de mer versée aux communes</li>
  </ul>
  <p><strong>Enjeu budgétaire clé :</strong> La CTM est soumise à des contraintes d'endettement et doit préserver sa capacité d'autofinancement pour financer les investissements nécessaires au développement de l'île.</p>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Budget local &amp; recettes</h3>
  <div class="fiche-item">6 principes : annualité · unité · universalité · équilibre réel · sincérité · spécialité</div>
  <div class="fiche-item">2 sections : fonctionnement (courant) + investissement</div>
  <div class="fiche-item">Recettes : fiscalité ~40% · dotations État ~30% · emprunts ~15%</div>
  <div class="fiche-item">DGF = ~26 Mds€ · dotation forfaitaire + DSU + DSR</div>
  <div class="fiche-item">CTM : octroi de mer + fonds EU 2021-2027 (~800 M€) + TVA réduite</div>
</div>

<div class="cas-pratique">
  <div class="cas-header">🏝️ Cas pratique – Finances CTM</div>
  <div class="cas-body">
    <div class="cas-context"><strong>Contexte :</strong> Vous êtes attaché territorial chargé du budget à la CTM. Le Président du Conseil Exécutif vous demande d'analyser les recettes 2024 et d'identifier des leviers pour financer un nouveau programme d'investissement dans les infrastructures portuaires estimé à 15 millions d'euros.</div>
    <div class="cas-mission">🎯 Mission : Proposez 3 sources de financement possibles avec leurs avantages et contraintes.</div>
    <button class="cas-corrige-toggle">▼ Voir le corrigé</button>
    <div class="cas-corrige">
      <p><strong>Option 1 – Fonds européens FEDER :</strong> La CTM est autorité de gestion du FEDER en Martinique. Les infrastructures portuaires liées au commerce peuvent être éligibles (axe développement économique). Avantages : cofinancement à 60-70% · pas d'endettement. Contrainte : dossier complexe · délais longs · contrôles ex-post stricts.</p>
      <p><strong>Option 2 – Emprunt bancaire :</strong> La CTM peut contracter un emprunt auprès de la Caisse des Dépôts (CDC) ou d'une banque. Taux préférentiels CDC pour les infrastructures. Contrainte : renforcement du ratio de désendettement · impact sur capacité d'autofinancement future.</p>
      <p><strong>Option 3 – Partenariat Public-Privé (PPP / contrat de concession) :</strong> Confier la gestion des quais à un opérateur privé qui finance, exploite et entretient en contrepartie de redevances. Avantage : pas de dépense directe CTM. Contrainte : perte de maîtrise publique · coût à long terme.</p>
      <p><strong>Recommandation :</strong> Combiner FEDER (financement partiel) + emprunt CDC (complément) pour maintenir la maîtrise publique tout en limitant l'impact budgétaire.</p>
    </div>
  </div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que l'octroi de mer et pourquoi est-il important pour la Martinique ? »</div>
    <div class="jq-r">Taxe sur les marchandises importées en Martinique (et produites localement pour certains produits). Ressource fiscale majeure des collectivités martiniquaises (~200 M€/an). Protège la production locale. Autorisé par dérogation européenne jusqu'en 2027 (en négociation pour prolongation). Redistribué aux communes et à la CTM.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« La règle d'or s'applique-t-elle aux collectivités locales ? »</div>
    <div class="jq-r">Oui, mais différemment de l'État. Les collectivités ne peuvent financer les dépenses courantes par l'emprunt : la section de fonctionnement doit être équilibrée et générer un excédent (autofinancement). L'emprunt est réservé à la section d'investissement. En cas de budget déséquilibré, le préfet peut saisir la CRC. Le ratio de désendettement (dette nette / CAF) doit rester idéalement en dessous de 10-12 ans.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que la péréquation fiscale et quel est son enjeu pour les collectivités ultramarines ? »</div>
    <div class="jq-r">Mécanisme de redistribution pour réduire les inégalités de ressources entre collectivités. Péréquation verticale : dotations d'État ciblées (DSU, DSR). Péréquation horizontale : prélèvement sur collectivités riches reversé aux pauvres (FPIC). Pour les DOM comme la Martinique, les dotations intègrent des majorations spécifiques (rattrapage économique, insularité). L'enjeu est d'assurer un niveau minimal de service public malgré une base fiscale locale limitée.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p3c1" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p2c4" class="chapter-nav-btn">← P2·C4 Contentieux</a>
  <a href="#" data-page="p3c2" class="chapter-nav-btn next">Ch.2 Dépenses &amp; comptabilité →</a>
</div>
</section>`
    },

    // ---- P3C2 : Dépenses & Comptabilité ----
    { id: 'p3c2', html: `
<section id="p3c2" class="page-section">
<div class="chapter-title">
  <div class="num">P3·C2</div>
  <div><div class="part-tag">Partie 3 – Finances publiques territoriales</div><h1>Dépenses, comptabilité publique &amp; contrôle budgétaire</h1></div>
</div>
<div class="chapter-intro">Comprendre la mécanique budgétaire — depuis l'engagement jusqu'au mandatement — et les mécanismes de contrôle est fondamental pour un attaché territorial gérant un budget de service ou de collectivité.</div>

<h2 class="section-title">1. Le cycle de la dépense publique</h2>
<div class="timeline">
  <div class="timeline-item">
    <div class="ti-date">1. Engagement</div>
    <div class="ti-content">L'ordonnateur crée la dépense (signature du bon de commande, marché…). Vérification : crédits disponibles + conformité réglementaire.</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">2. Liquidation</div>
    <div class="ti-content">Vérification du service fait · calcul du montant exact dû. L'ordonnateur certifie que la prestation a bien été réalisée.</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">3. Mandatement</div>
    <div class="ti-content">L'ordonnateur émet un mandat de paiement transmis au comptable public.</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">4. Paiement</div>
    <div class="ti-content">Le comptable public (trésorier municipal) effectue les contrôles réglementaires et procède au paiement.</div>
  </div>
</div>

<h2 class="section-title">2. La séparation ordonnateur / comptable</h2>
<div class="definition-box">
  <div class="def-title">📖 Principe fondamental</div>
  L'<strong>ordonnateur</strong> (Président CTM, maire, président CD) prescrit l'exécution des recettes et dépenses mais ne manipule pas les fonds. Le <strong>comptable public</strong> (trésorier municipal, agent DGFIP) manie les fonds mais ne prend pas les décisions de dépense. Cette séparation garantit les contrôles mutuels.
</div>

<h2 class="section-title">3. Les principales dépenses des collectivités</h2>
<table>
  <thead><tr><th>Catégorie</th><th>Exemples</th><th>Part moyenne</th></tr></thead>
  <tbody>
    <tr><td>Charges de personnel</td><td>Salaires + charges sociales agents titulaires et contractuels</td><td>~55% fonctionnement</td></tr>
    <tr><td>Achats et charges externes</td><td>Fluides, entretien, matériel, prestations</td><td>~20%</td></tr>
    <tr><td>Subventions versées</td><td>Aux associations, organismes, CCAS</td><td>~10%</td></tr>
    <tr><td>Charges financières</td><td>Intérêts d'emprunt</td><td>~5%</td></tr>
    <tr><td>Investissements</td><td>Travaux, équipements, acquisitions</td><td>Section invest.</td></tr>
  </tbody>
</table>

<h2 class="section-title">4. Le contrôle budgétaire</h2>
<ul>
  <li><strong>Contrôle interne</strong> : contrôle de gestion, audit interne, tableaux de bord</li>
  <li><strong>Contrôle de légalité</strong> : préfet (transmis dans les 15 jours)</li>
  <li><strong>CRC</strong> : contrôle de la régularité, de l'efficacité et de l'économie de la gestion</li>
  <li><strong>Cour des comptes</strong> : contrôle des établissements publics nationaux et coordination des CRC</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Comptabilité publique en Martinique</h3>
  <p>Les collectivités martiniquaises sont soumises aux instructions M14 (communes) et M57 (nouveau référentiel unique depuis 2024 pour toutes les collectivités). La M57 est une évolution majeure qui harmonise la comptabilité de toutes les strates territoriales.</p>
  <p>La <strong>CRAC</strong> (Chambre Régionale des Comptes) de Martinique rend des rapports publics sur la gestion de la CTM et des communes. Ces rapports sont accessibles et constituent d'excellentes sources pour préparer le concours.</p>
  <p><strong>Ratio clé à connaître :</strong> La capacité de désendettement de la CTM doit rester inférieure à 15 ans (seuil d'alerte). Un ratio de plus de 12 ans nécessite un plan de redressement.</p>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Dépenses &amp; comptabilité</h3>
  <div class="fiche-item">Cycle dépense : engagement → liquidation → mandatement → paiement</div>
  <div class="fiche-item">Séparation ordonnateur (décision) / comptable (maniement des fonds)</div>
  <div class="fiche-item">Dépenses personnel : ~55% du fonctionnement des collectivités</div>
  <div class="fiche-item">Contrôles : interne + préfet (légalité) + CRC (gestion)</div>
  <div class="fiche-item">Instruction M57 : référentiel comptable unifié depuis 2024</div>
  <div class="fiche-item">Capacité désendettement : seuil alerte à 15 ans</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Pourquoi sépare-t-on l'ordonnateur du comptable dans la comptabilité publique ? »</div>
    <div class="jq-r">Pour des raisons de contrôle mutuel et de sécurité des fonds publics. L'ordonnateur décide mais ne touche pas aux fonds. Le comptable vérifie les pièces justificatives et paie, mais ne décide pas la dépense. En cas d'irrégularité, le comptable peut suspendre le paiement (réquisition de l'ordonnateur nécessaire). Cette séparation limite les risques de fraude et d'erreur.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce qu'un budget participatif et comment peut-il être mis en place dans une collectivité ? »</div>
    <div class="jq-r">Dispositif permettant aux citoyens de proposer et voter des projets financés sur une part du budget d'investissement. Étapes : définir l'enveloppe · appel à projets citoyen · filtre de faisabilité technique et juridique · vote des habitants · réalisation et suivi. Avantages : renforcement de la démocratie participative, appropriation du service public. Exemples : Paris (500 M€ cumulés), Poitiers, communes martiniquaises. Cadre légal facilité par la loi NOTRe (2015).</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Quel est le rôle de la Chambre Régionale des Comptes en Martinique ? »</div>
    <div class="jq-r">La CRAC (Chambre Régionale des Comptes) de Martinique contrôle la régularité, l'efficacité et l'économie de la gestion des collectivités (CTM, communes, établissements publics). Elle rend des rapports publics · peut formuler des recommandations · contrôle les comptes des comptables publics. Ses rapports sont précieux pour identifier les enjeux de gestion locale et constituer un argumentaire lors du concours. Elle est rattachée à la Cour des comptes nationale.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p3c2" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p3c1" class="chapter-nav-btn">← Ch.1 Budget &amp; recettes</a>
  <a href="#" data-page="p3c3" class="chapter-nav-btn next">Ch.3 Marchés publics →</a>
</div>
</section>`
    },

    // ---- P3C3 : Marchés publics ----
    { id: 'p3c3', html: `
<section id="p3c3" class="page-section">
<div class="chapter-title">
  <div class="num">P3·C3</div>
  <div><div class="part-tag">Partie 3 – Finances publiques territoriales</div><h1>Marchés publics &amp; commande publique</h1></div>
</div>
<div class="chapter-intro">La commande publique représente environ 100 milliards d'euros par an en France. Maîtriser ses règles est indispensable pour l'Attaché Territorial qui participe à la passation et au suivi des marchés de sa collectivité.</div>

<h2 class="section-title">1. Cadre juridique</h2>
<p>Le Code de la Commande Publique (CCP), entré en vigueur le 1er avril 2019, codifie l'ensemble des règles de passation et d'exécution des contrats de la commande publique (marchés publics + contrats de concession).</p>

<h2 class="section-title">2. Les seuils et procédures</h2>
<table>
  <thead><tr><th>Montant HT</th><th>Procédure</th><th>Formalités</th></tr></thead>
  <tbody>
    <tr><td>&lt; 40 000 €</td><td>Marché sans formalité préalable</td><td>Bon de commande · devis simple</td></tr>
    <tr><td>40 000 € – 215 000 €</td><td>MAPA (Marché à Procédure Adaptée) – Fournitures/services</td><td>Publicité adaptée · mise en concurrence</td></tr>
    <tr><td>40 000 € – 5,4 M €</td><td>MAPA – Travaux</td><td>Publicité adaptée</td></tr>
    <tr><td>&gt; 215 000 €</td><td>Appel d'offres ouvert ou restreint (F/S)</td><td>Publication BOAMP + JOUE · dossier complet</td></tr>
    <tr><td>&gt; 5,4 M €</td><td>Appel d'offres (Travaux)</td><td>Même obligations</td></tr>
  </tbody>
</table>

<h2 class="section-title">3. Les critères de sélection</h2>
<p>La sélection des offres repose sur le critère de l'offre économiquement la plus avantageuse (OEPA) :</p>
<ul>
  <li><strong>Qualité-prix</strong> : pondération des critères techniques et financiers</li>
  <li><strong>Critères possibles</strong> : prix · qualité technique · délais · service après-vente · performances environnementales · insertion professionnelle</li>
</ul>

<h2 class="section-title">4. L'achat public responsable</h2>
<p>Le code de la commande publique encourage les achats publics responsables :</p>
<ul>
  <li>Clauses d'insertion (emploi de publics éloignés)</li>
  <li>Critères environnementaux (bilan carbone, produits écologiques)</li>
  <li>Schéma de Promotion des Achats Publics Socialement et Écologiquement Responsables (SPASER) obligatoire pour les collectivités &gt; 100 M€ d'achats annuels</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Marchés publics en Martinique – Spécificités</h3>
  <ul>
    <li>Le <strong>tissu économique local</strong> est composé principalement de PME/TPE · la CTM encourage l'allotissement pour permettre l'accès des entreprises locales</li>
    <li>Le <strong>SRDEII</strong> (Schéma Régional de Développement Économique, d'Innovation et d'Internationalisation) fixe des orientations favorisant les achats locaux</li>
    <li>La CTM dispose d'un <strong>service marchés</strong> centralisé qui accompagne les directions opérationnelles</li>
    <li>La <strong>DEAL</strong> (Direction de l'Environnement, de l'Aménagement et du Logement) de Martinique joue un rôle dans les marchés de travaux publics</li>
    <li>Enjeu : favoriser le <strong>circuit court</strong> et les entreprises martiniquaises dans le respect des règles européennes de concurrence</li>
  </ul>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Marchés publics</h3>
  <div class="fiche-item">CCP depuis avril 2019 · ~100 Mds€/an commande publique France</div>
  <div class="fiche-item">Seuils : &lt;40K€ sans formalité · &lt;215K€ MAPA · &gt;215K€ AO</div>
  <div class="fiche-item">Critère OEPA : qualité-prix + critères techniques + enviro.</div>
  <div class="fiche-item">SPASER obligatoire pour collectivités &gt;100M€ d'achats</div>
  <div class="fiche-item">Martinique : allotissement pour PME locales · SRDEII</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Comment la CTM peut-elle favoriser les entreprises martiniquaises dans ses marchés publics sans violer les règles de concurrence ? »</div>
    <div class="jq-r">Via l'allotissement (petits lots accessibles aux PME) · clauses d'insertion professionnelle locale · critères environnementaux valorisant les produits locaux · sourçage préalable pour adapter les marchés aux capacités locales · SPASER intégrant des objectifs de développement local. Mais : pas de discrimination directe basée sur l'origine géographique (droit européen de la concurrence).</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Quelles sont les grandes étapes de la passation d'un appel d'offres ouvert ? »</div>
    <div class="jq-r">1. Définition du besoin et estimation du marché · 2. Rédaction du CCAP (Cahier des Clauses Administratives Particulières) et CCTP (technique) · 3. Publication de l'avis d'appel public à la concurrence (BOAMP + JOUE si &gt;215 000 €) · 4. Remise des offres dans le délai réglementaire · 5. Ouverture des plis en Commission d'Appel d'Offres (CAO) · 6. Analyse des offres selon les critères de sélection · 7. Attribution et notification au candidat retenu · 8. Publication de l'avis d'attribution.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que l'allotissement dans les marchés publics ? »</div>
    <div class="jq-r">Principe (posé à l'art. L2113-10 CCP) selon lequel le marché est divisé en lots séparés. Objectif : faciliter l'accès des PME à la commande publique et introduire plus de concurrence. Chaque lot peut être attribué à un titulaire différent. Le pouvoir adjudicateur peut décider de ne pas allotir si l'allotissement est de nature à restreindre la concurrence ou rend l'exécution techniquement difficile. En Martinique, c'est un outil crucial pour permettre aux entreprises locales de répondre.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p3c3" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p3c2" class="chapter-nav-btn">← Ch.2 Dépenses &amp; comptabilité</a>
  <a href="#" data-page="p4c1" class="chapter-nav-btn next">Partie 4 · Ch.1 Statut FPT →</a>
</div>
</section>`
    }
  ];

  sections.forEach(function(s) {
    if (!document.getElementById(s.id)) {
      container.insertAdjacentHTML('beforeend', s.html);
    }
  });
})();
