/* ============================================================
   PARTIE 4 – RH & Management public (4 chapitres)
   ============================================================ */
(function() {
  const container = document.querySelector('.main-content');
  const sections = [

    // ---- P4C1 : Statut FPT & Recrutement ----
    { id: 'p4c1', html: `
<section id="p4c1" class="page-section">
<div class="chapter-title">
  <div class="num">P4·C1</div>
  <div><div class="part-tag">Partie 4 – RH &amp; Management public</div><h1>Statut de la FPT &amp; recrutement</h1></div>
</div>
<div class="chapter-intro">Votre Bachelor RH est un atout majeur pour ce chapitre. Il couvre le statut de la FPT, les droits et obligations des fonctionnaires territoriaux, et les modes de recrutement. Ces connaissances seront directement mobilisées dans vos fonctions d'Attaché Territorial.</div>

<h2 class="section-title">1. Les grands principes statutaires</h2>
<p>Le statut général des fonctionnaires repose sur trois grandes lois :</p>
<ul>
  <li>Loi n°83-634 du 13 juillet 1983 : droits et obligations communs aux 3 versants</li>
  <li>Loi n°84-53 du 26 janvier 1984 : spécifique à la FPT</li>
  <li>Code Général de la Fonction Publique (CGFP) : en vigueur depuis le 1er mars 2022</li>
</ul>

<h2 class="section-title">2. Les droits et obligations des fonctionnaires</h2>
<table>
  <thead><tr><th>Droits</th><th>Obligations</th></tr></thead>
  <tbody>
    <tr><td>Liberté d'opinion (sauf manifestation)</td><td>Obéissance hiérarchique (sauf illégalité manifeste)</td></tr>
    <tr><td>Protection fonctionnelle</td><td>Discrétion professionnelle</td></tr>
    <tr><td>Rémunération</td><td>Secret professionnel</td></tr>
    <tr><td>Formation professionnelle</td><td>Réserve</td></tr>
    <tr><td>Droit syndical</td><td>Probité et intégrité</td></tr>
    <tr><td>Participation (CAP, CT, CST)</td><td>Non-discrimination</td></tr>
    <tr><td>Droit de grève</td><td>Laïcité (neutralité)</td></tr>
  </tbody>
</table>

<h2 class="section-title">3. Les modes de recrutement</h2>
<p>Le concours est la voie <strong>de droit commun</strong> de recrutement dans la FPT :</p>
<ul>
  <li><strong>Concours externe</strong> : ouvert aux candidats titulaires du diplôme requis (Bac+3 pour Attaché Territorial)</li>
  <li><strong>Concours interne</strong> : ouvert aux fonctionnaires justifiant d'une durée de services (4 ans pour AT)</li>
  <li><strong>3e voie (concours professionnel)</strong> : ouvert aux candidats justifiant d'une expérience professionnelle dans le secteur privé ou associatif (4 ans minimum)</li>
</ul>

<div class="info-box">
  <div class="info-title">ℹ️ Recrutement sans concours</div>
  Certains recrutements sont possibles sans concours : agents contractuels sur emplois non permanents (besoin occasionnel ou saisonnier) · emplois de direction (DGS, DGA) par voie de détachement · recrutement direct catégorie C pour primo-accédants.
</div>

<h2 class="section-title">4. Contractuels vs titulaires</h2>
<table>
  <thead><tr><th></th><th>Fonctionnaire titulaire</th><th>Agent contractuel</th></tr></thead>
  <tbody>
    <tr><td>Recrutement</td><td>Par concours puis stage</td><td>Par contrat (CDD → CDI)</td></tr>
    <tr><td>Stabilité</td><td>Titulaire dès nomination</td><td>CDI après 6 ans de CDD</td></tr>
    <tr><td>Rémunération</td><td>Grille indiciaire</td><td>Par rapport à la grille ou libre</td></tr>
    <tr><td>Protection</td><td>Forte (procédure disciplinaire)</td><td>Moins forte (licenciement possible)</td></tr>
  </tbody>
</table>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Recrutement en Martinique</h3>
  <ul>
    <li>Le <strong>CDG 972</strong> organise les concours territoriaux pour toutes les collectivités martiniquaises</li>
    <li>Enjeu de recrutement : la Martinique subit un phénomène de <strong>fuite des cerveaux</strong> · les jeunes diplômés partent en métropole → difficultés à recruter sur des postes A et A+</li>
    <li>La CTM propose des <strong>primes spécifiques</strong> (indemnité de sujétion géographique) pour attirer et fidéliser les agents</li>
    <li>Forte proportion d'agents contractuels dans certains services : enjeu de <strong>pérennisation des compétences</strong></li>
    <li>Le dispositif <strong>PaFE</strong> (Parcours Formation Emploi) de la CTM vise à insérer les jeunes Martiniquais dans la fonction publique locale</li>
  </ul>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Statut FPT &amp; recrutement</h3>
  <div class="fiche-item">Loi 83-634 (droits communs) + loi 84-53 (FPT) + CGFP 2022</div>
  <div class="fiche-item">Droits : opinion · protection fonctionnelle · formation · droit syndical</div>
  <div class="fiche-item">Obligations : obéissance · discrétion · réserve · probité · laïcité</div>
  <div class="fiche-item">3 voies concours : externe (diplôme) · interne (4 ans service) · 3e voie (expérience privée)</div>
  <div class="fiche-item">CDI contractuel après 6 ans de CDD</div>
  <div class="fiche-item">Martinique : CDG 972 · fuite des cerveaux · primes sujétion géographique</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Comment la CTM peut-elle lutter contre la fuite des cerveaux dans sa politique de recrutement ? »</div>
    <div class="jq-r">Valoriser les carrières locales · proposer des primes spécifiques · développer les partenariats avec les universités martiniquaises · créer des viviers de candidats locaux via les stages et apprentissages · renforcer la marque employeur de la CTM. Citer le dispositif PaFE ou équivalent.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que la protection fonctionnelle et dans quels cas s'applique-t-elle ? »</div>
    <div class="jq-r">Obligation de la collectivité de protéger ses agents contre les attaques (insultes, menaces, voies de fait, poursuites judiciaires) dans l'exercice de leurs fonctions. S'applique : agent attaqué par un usager · agent mis en examen pour faits de service. La collectivité prend en charge les frais de défense et les éventuelles indemnisations.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Quelle est la différence entre un agent titulaire et un contractuel dans la FPT ? »</div>
    <div class="jq-r">Titulaire : a réussi un concours · nommé dans un grade · titularisé après 1 an de stage · ne peut être licencié qu'en cas de faute ou suppression de poste (avec reclassement). Contractuel : embauché par contrat (CDD 1 an, renouvelable, CDI après 6 ans) · sur des emplois permanents si pas de cadre d'emplois correspondant ou recrutement direct (emploi de direction, emplois de cabinet). Moins de protection mais plus de flexibilité de recrutement.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p4c1" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p3c3" class="chapter-nav-btn">← P3·C3 Marchés publics</a>
  <a href="#" data-page="p4c2" class="chapter-nav-btn next">Ch.2 Carrière, formation, évaluation →</a>
</div>
</section>`
    },

    // ---- P4C2 : Carrière, Formation, Évaluation ----
    { id: 'p4c2', html: `
<section id="p4c2" class="page-section">
<div class="chapter-title">
  <div class="num">P4·C2</div>
  <div><div class="part-tag">Partie 4 – RH &amp; Management public</div><h1>Carrière, formation &amp; évaluation</h1></div>
</div>
<div class="chapter-intro">La gestion de la carrière des agents territoriaux est au cœur des missions RH. Ce chapitre couvre l'avancement, la formation professionnelle et l'entretien professionnel, avec des exemples martiniquais concrets.</div>

<h2 class="section-title">1. L'avancement de carrière</h2>
<p>La carrière d'un fonctionnaire territorial évolue selon deux modalités :</p>
<ul>
  <li><strong>Avancement d'échelon</strong> : progression automatique à l'ancienneté (ex. d'échelon 1 à 2 au bout d'un certain nombre d'années). La loi de transformation de la FP (2019) a supprimé l'avancement au choix en intégrant des critères de mérite via les entretiens professionnels.</li>
  <li><strong>Avancement de grade</strong> : promotion conditionnée à l'inscription sur un tableau d'avancement (critères : ancienneté, mérite, examen professionnel).</li>
  <li><strong>Promotion interne</strong> : accès à un cadre d'emplois supérieur par voie de quotas (ex. passage de rédacteur en attaché).</li>
</ul>

<h2 class="section-title">2. La formation professionnelle</h2>
<p>Le droit à la formation est un droit fondamental des agents territoriaux :</p>
<table>
  <thead><tr><th>Dispositif</th><th>Contenu</th><th>Durée</th></tr></thead>
  <tbody>
    <tr><td>Formation initiale d'application (FIA)</td><td>Obligatoire après concours · organisée par le CNFPT</td><td>5 à 10 jours selon grade</td></tr>
    <tr><td>Formation de perfectionnement</td><td>Continue · développement compétences professionnelles</td><td>Variable</td></tr>
    <tr><td>Formation personnelle (CPF)</td><td>Compte Personnel de Formation · 25h/an · 150h max</td><td>À l'initiative de l'agent</td></tr>
    <tr><td>Préparation aux concours</td><td>CNFPT ou CDG · pour avancement interne</td><td>Variable</td></tr>
    <tr><td>Bilan de compétences</td><td>Analyse de compétences et projet professionnel</td><td>24h max</td></tr>
  </tbody>
</table>

<h2 class="section-title">3. L'entretien professionnel</h2>
<p>Instauré définitivement par la loi du 6 août 2019 (transformation de la FP), l'entretien professionnel a remplacé la notation pour tous les fonctionnaires territoriaux.</p>
<p>L'entretien professionnel évalue :</p>
<ul>
  <li>Les résultats atteints par rapport aux objectifs fixés</li>
  <li>Les compétences professionnelles et comportementales</li>
  <li>Les besoins en formation</li>
  <li>Les perspectives d'évolution professionnelle</li>
</ul>
<div class="info-box">
  <div class="info-title">ℹ️ Lien avec l'avancement</div>
  Le compte rendu de l'entretien professionnel est communiqué à la CAP (Commission Administrative Paritaire) et sert de base pour l'établissement du tableau d'avancement de grade.
</div>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Formation des agents à la CTM</h3>
  <p>Le CNFPT Antilles-Guyane gère la formation continue des agents territoriaux de Martinique, Guadeloupe et Guyane. L'antenne de Fort-de-France propose :</p>
  <ul>
    <li>Des formations présentielles et distancielles adaptées aux enjeux locaux</li>
    <li>Des préparations aux concours territoriaux</li>
    <li>Des formations spécialisées en gestion des risques cycloniques et sismiques</li>
    <li>Des formations sur les fonds européens et leur gestion</li>
    <li>Un accompagnement à la prise de poste pour les primo-arrivants</li>
  </ul>
  <p><strong>Enjeu CTM :</strong> La CTM a développé un <strong>Plan de Formation pluriannuel</strong> aligné sur ses orientations stratégiques. L'enjeu principal est la montée en compétences des agents sur la gestion des fonds européens et la transition numérique.</p>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Carrière, formation, évaluation</h3>
  <div class="fiche-item">Avancement : échelon (ancienneté) → grade (tableau avancement) → promotion interne</div>
  <div class="fiche-item">FIA : formation obligatoire après concours · organisée par CNFPT</div>
  <div class="fiche-item">CPF : 25h/an · 150h max · à l'initiative de l'agent</div>
  <div class="fiche-item">Entretien pro : remplace la notation depuis loi 2019 · 4 axes d'évaluation</div>
  <div class="fiche-item">CTM : CNFPT Antilles-Guyane · plan formation pluriannuel</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Comment conduire un entretien professionnel efficace avec un agent ? »</div>
    <div class="jq-r">Préparer : relire le CR N-1 · rassembler les éléments objectifs de performance. Conduire : bilan objectifs N · points positifs avant axes d'amélioration · fixer objectifs SMART pour N+1 · co-construire plan de formation. Conclusion : formaliser et signer le document. Écoute active et posture bienveillante mais exigeante.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que la GPEC et pourquoi est-elle importante dans la FPT ? »</div>
    <div class="jq-r">Gestion Prévisionnelle des Emplois et des Compétences : anticiper les besoins en emplois et compétences à 3-5 ans pour adapter les ressources humaines aux évolutions des missions de la collectivité. Enjeux : vieillissement des agents, départs en retraite, nouvelles technologies (numérique), réorganisations. En Martinique : enjeu fort face aux difficultés de recrutement et à la nécessité de former les agents aux défis locaux (transition énergétique, tourisme durable, gestion de l'eau).</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p4c2" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p4c1" class="chapter-nav-btn">← Ch.1 Statut &amp; recrutement</a>
  <a href="#" data-page="p4c3" class="chapter-nav-btn next">Ch.3 Dialogue social &amp; discipline →</a>
</div>
</section>`
    },

    // ---- P4C3 : Dialogue social & Discipline ----
    { id: 'p4c3', html: `
<section id="p4c3" class="page-section">
<div class="chapter-title">
  <div class="num">P4·C3</div>
  <div><div class="part-tag">Partie 4 – RH &amp; Management public</div><h1>Dialogue social &amp; discipline</h1></div>
</div>
<div class="chapter-intro">Le dialogue social est au cœur du management public moderne. Ce chapitre couvre les instances de représentation du personnel, le droit syndical, la procédure disciplinaire et les recours des agents.</div>

<h2 class="section-title">1. Les instances de dialogue social depuis la loi de 2019</h2>
<p>La loi du 6 août 2019 a réformé les instances de dialogue social dans la FP :</p>
<table>
  <thead><tr><th>Instance</th><th>Composition</th><th>Compétences</th></tr></thead>
  <tbody>
    <tr><td>Comité Social Territorial (CST)</td><td>Élus · représentants syndicaux</td><td>Fusion CT + CHSCT · organisation du travail · politique RH · conditions de travail · santé et sécurité</td></tr>
    <tr><td>Commission Administrative Paritaire (CAP)</td><td>Représentants employeurs + agents</td><td>Situations individuelles des agents (mutations, promotions, licenciements…)</td></tr>
    <tr><td>Formation Spécialisée (FSSSCT)</td><td>Au sein du CST si &gt;200 agents</td><td>Santé, sécurité et conditions de travail</td></tr>
  </tbody>
</table>

<h2 class="section-title">2. Le droit syndical</h2>
<ul>
  <li>Liberté syndicale garantie par la loi 83-634</li>
  <li>Droit de grève : encadré (service minimum, préavis 5 jours)</li>
  <li>Autorisations spéciales d'absence (ASA) pour activités syndicales</li>
  <li>Décharge d'activité de service (DAS) pour représentants syndicaux</li>
  <li>Local syndical obligatoire dans les collectivités importantes</li>
</ul>

<h2 class="section-title">3. La procédure disciplinaire</h2>
<p>Toute sanction doit respecter un principe fondamental : <strong>pas de sanction sans procédure contradictoire préalable</strong>.</p>
<table>
  <thead><tr><th>Groupe</th><th>Sanctions</th><th>Procédure</th></tr></thead>
  <tbody>
    <tr><td>Groupe 1</td><td>Avertissement · Blâme</td><td>Information simple · pas de CAP</td></tr>
    <tr><td>Groupe 2</td><td>Radiation tableau avancement · Abaissement échelon · Exclusion temporaire 1-3 jours</td><td>Communication dossier · CAP consultée</td></tr>
    <tr><td>Groupe 3</td><td>Rétrogradation · Exclusion 4 j à 2 ans</td><td>CAP obligatoire</td></tr>
    <tr><td>Groupe 4</td><td>Mise à la retraite d'office · Révocation</td><td>CAP obligatoire · conseil de discipline</td></tr>
  </tbody>
</table>

<div class="cas-pratique">
  <div class="cas-header">🏝️ Cas pratique – Discipline à la CTM</div>
  <div class="cas-body">
    <div class="cas-context"><strong>Contexte :</strong> Un agent de catégorie B de la direction des routes de la CTM s'est absent sans autorisation pendant 3 jours consécutifs puis a été retrouvé en train d'exercer une activité rémunérée pour une entreprise privée pendant ses heures de travail. Son responsable vous demande, en tant qu'attaché territorial RH, de préparer la procédure disciplinaire.</div>
    <div class="cas-mission">🎯 Mission : Décrivez la procédure à suivre et les sanctions envisageables.</div>
    <button class="cas-corrige-toggle">▼ Voir le corrigé</button>
    <div class="cas-corrige">
      <p><strong>Étape 1 – Rassembler les preuves</strong> : constat d'absence injustifiée (pointages, attestations collègues) + preuve de l'activité privée (rapport hiérarchique, éléments tangibles). S'assurer de la solidité du dossier.</p>
      <p><strong>Fautes identifiées</strong> : 1) Absence injustifiée (manquement à l'obligation de service) · 2) Exercice d'une activité privée rémunérée pendant le temps de service (cumul d'activités prohibé sauf exceptions + déloyauté envers la collectivité).</p>
      <p><strong>Étape 2 – Convocation</strong> : convoquer l'agent à un entretien de procédure contradictoire · informer des faits reprochés · donner accès au dossier au moins 5 jours avant.</p>
      <p><strong>Étape 3 – Entretien contradictoire</strong> : laisser l'agent s'expliquer · acte l'entretien.</p>
      <p><strong>Sanctions envisageables</strong> : vu la gravité des faits (cumul de deux manquements, dont un cumul d'activités illicite), la sanction se situe en groupe 3 minimum (rétrogradation ou exclusion temporaire de 4 j à 2 ans). En cas de récidive ou de circonstances aggravantes : révocation (groupe 4) possible.</p>
      <p><strong>Étape 4 – CAP</strong> : obligatoire pour toute sanction du groupe 2 et au-delà. Saisie du conseil de discipline si sanction groupe 4 envisagée.</p>
    </div>
  </div>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Dialogue social &amp; discipline</h3>
  <div class="fiche-item">CST (ex CT + CHSCT) : organisation travail + conditions de travail</div>
  <div class="fiche-item">CAP : situations individuelles des agents</div>
  <div class="fiche-item">Droit de grève : préavis 5 jours · service minimum</div>
  <div class="fiche-item">4 groupes de sanctions disciplinaires · procédure contradictoire obligatoire</div>
  <div class="fiche-item">CAP obligatoire pour sanctions groupes 2, 3, 4</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Quelle est la différence entre le CST et l'ancienne CAP ? »</div>
    <div class="jq-r">CST = Comité Social Territorial : instance collective créée par loi 2019 (fusion CT + CHSCT) · traite des questions d'organisation, de conditions de travail et de politique RH. CAP = Commission Administrative Paritaire : traite des situations individuelles des agents (promotions, mutations, sanctions). Les deux coexistent.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Quelle est la procédure disciplinaire applicable à un agent territorial qui commet une faute grave ? »</div>
    <div class="jq-r">Procédure contradictoire obligatoire : 1. Information de l'agent des faits reprochés · 2. Droit à la communication du dossier · 3. Droit à un conseiller de défense · 4. Consultation de la CAP (obligatoire pour sanctions des groupes 2, 3, 4) · 5. Décision motivée notifiée à l'agent. Les 4 groupes de sanctions : groupe 1 (avertissement, blâme) sans CAP · groupe 2 (radiation tableau d'avancement, exclusion max 3 j) · groupe 3 (rétrogradation, exclusion 4j-2 ans) · groupe 4 (mise à la retraite d'office, révocation).</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Comment gérer un conflit entre deux agents de votre équipe en tant qu'attaché territorial ? »</div>
    <div class="jq-r">1. Écoute individuelle de chaque agent séparément (pas de prise de parti) · 2. Identifier l'origine du conflit (relationnel, organisationnel, lié au travail) · 3. Réunion tripartite de médiation si possible · 4. Clarifier les règles et les rôles si le conflit est organisationnel · 5. Documenter les démarches · 6. Si persistance : alerter le DRH ou faire appel à la cellule médiation · 7. Si faute : procédure disciplinaire. L'objectif est de préserver la qualité du service public et la cohésion d'équipe.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p4c3" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p4c2" class="chapter-nav-btn">← Ch.2 Carrière &amp; formation</a>
  <a href="#" data-page="p4c4" class="chapter-nav-btn next">Ch.4 Management &amp; gestion de projet →</a>
</div>
</section>`
    },

    // ---- P4C4 : Management & Gestion de projet ----
    { id: 'p4c4', html: `
<section id="p4c4" class="page-section">
<div class="chapter-title">
  <div class="num">P4·C4</div>
  <div><div class="part-tag">Partie 4 – RH &amp; Management public</div><h1>Management d'équipe &amp; gestion de projet</h1></div>
</div>
<div class="chapter-intro">L'Attaché Territorial est avant tout un encadrant et un chef de projet. Ce chapitre mobilise directement vos compétences RH pour vous préparer à manager une équipe dans le service public territorial martiniquais.</div>

<h2 class="section-title">1. Les styles de management</h2>
<table>
  <thead><tr><th>Style</th><th>Caractéristiques</th><th>Contexte adapté</th></tr></thead>
  <tbody>
    <tr><td>Directif</td><td>Directives claires · peu d'autonomie</td><td>Urgence · agents peu expérimentés · crise</td></tr>
    <tr><td>Participatif</td><td>Concertation · co-construction</td><td>Équipe expérimentée · projets innovants</td></tr>
    <tr><td>Délégatif</td><td>Forte autonomie · contrôle a posteriori</td><td>Experts · cadres autonomes</td></tr>
    <tr><td>Persuasif / Coach</td><td>Motivation · accompagnement</td><td>Agents en développement · conduite du changement</td></tr>
  </tbody>
</table>

<h2 class="section-title">2. La conduite du changement</h2>
<p>Le modèle de Kotter (8 étapes) est un référentiel utile pour conduire un projet de transformation :</p>
<ol>
  <li>Créer un sentiment d'urgence</li>
  <li>Former une coalition directrice</li>
  <li>Construire une vision claire</li>
  <li>Communiquer la vision</li>
  <li>Lever les obstacles</li>
  <li>Générer des victoires à court terme</li>
  <li>Consolider les acquis</li>
  <li>Ancrer les nouvelles pratiques</li>
</ol>

<h2 class="section-title">3. La gestion de projet</h2>
<p>Les grandes phases d'un projet public :</p>
<ul>
  <li><strong>Phase 0 – Initialisation</strong> : note de cadrage, lettre de mission, fiche projet</li>
  <li><strong>Phase 1 – Planification</strong> : WBS (Work Breakdown Structure), planning Gantt, ressources, risques</li>
  <li><strong>Phase 2 – Exécution</strong> : pilotage, reporting, gestion des aléas</li>
  <li><strong>Phase 3 – Contrôle</strong> : indicateurs KPI, comités de pilotage, gestion des écarts</li>
  <li><strong>Phase 4 – Clôture</strong> : bilan, capitalisation, REX (Retour d'Expérience)</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Management à la CTM – Spécificités</h3>
  <p>Le management dans la FPT martiniquaise présente des spécificités culturelles à intégrer :</p>
  <ul>
    <li>Culture créole : importance des relations interpersonnelles · management de proximité essentiel</li>
    <li><strong>Pyramide des âges vieillissante</strong> : cohabitation de générations très différentes (agents proches de la retraite + jeunes recrues numériques)</li>
    <li><strong>Absentéisme</strong> : taux plus élevé qu'en métropole · importance du management préventif et de l'écoute</li>
    <li><strong>Contraintes géographiques</strong> : mobilité limitée (îlien) · peu de promotions par mutation géographique</li>
    <li>Valorisation de la <strong>bi-appartenance</strong> culturelle (culture martiniquaise + culture administrative française) : atout pour les relations avec les usagers</li>
  </ul>
  <p><strong>Mise en situation fréquente à l'oral :</strong> « Comment manageriez-vous une équipe à la CTM avec un fort taux d'absentéisme ? »</p>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Management &amp; gestion de projet</h3>
  <div class="fiche-item">4 styles : directif · participatif · délégatif · persuasif/coach</div>
  <div class="fiche-item">Conduite du changement : modèle Kotter 8 étapes</div>
  <div class="fiche-item">Gestion projet : initialisation → planification → exécution → contrôle → clôture</div>
  <div class="fiche-item">KPI : indicateurs clés de performance pour piloter</div>
  <div class="fiche-item">CTM : management proximité · absentéisme · pyramide des âges</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Vous prenez la tête d'une équipe de 8 agents à la CTM, dont 3 sont souvent absents. Comment gérez-vous la situation ? »</div>
    <div class="jq-r">1) Diagnostic : comprendre les causes (maladie chronique ? démotivation ? problème organisationnel ?) via entretiens individuels bienveillants. 2) Actions préventives : réorganisation des tâches · amélioration des conditions de travail · dialogue social · entretien de retour d'absence systématique. 3) Si résistance : mesures progressives via la voie disciplinaire (saisine médecin de prévention → si injustifiées : sanctions proportionnées). 4) Reportage à la DRH et à la hiérarchie.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p4c4" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p4c3" class="chapter-nav-btn">← Ch.3 Dialogue social</a>
  <a href="#" data-page="p5c1" class="chapter-nav-btn next">Partie 5 · Ch.1 Comprendre l'épreuve écrite →</a>
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
