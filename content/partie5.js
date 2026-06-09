/* ============================================================
   PARTIE 5 – Méthodologie de la note (4 chapitres)
   ============================================================ */
(function() {
  const container = document.querySelector('.main-content');
  const sections = [

    { id: 'p5c1', html: `
<section id="p5c1" class="page-section">
<div class="chapter-title">
  <div class="num">P5·C1</div>
  <div><div class="part-tag">Partie 5 – Méthodologie de la note</div><h1>Comprendre l'épreuve écrite</h1></div>
</div>
<div class="chapter-intro">L'épreuve de note à l'usage d'un supérieur est l'épreuve reine du concours d'Attaché Territorial. Ce chapitre démystifie l'exercice, présente les critères d'évaluation du jury et vous donne les clés pour réussir dès les premières lignes.</div>

<h2 class="section-title">1. Les épreuves du concours d'Attaché Territorial</h2>
<table>
  <thead><tr><th>Épreuve</th><th>Nature</th><th>Durée</th><th>Coefficient</th></tr></thead>
  <tbody>
    <tr><td>Note à l'usage d'un supérieur</td><td>Rédiger une note de synthèse exploitable pour un décideur</td><td>3h</td><td>3</td></tr>
    <tr><td>Épreuve de cas pratique (externe)</td><td>Résoudre un problème concret de gestion territoriale</td><td>3h</td><td>3</td></tr>
    <tr><td>Épreuve orale d'admission</td><td>Exposé + questions du jury sur le parcours et les enjeux territoriaux</td><td>20 min</td><td>3</td></tr>
    <tr><td>Épreuves optionnelles</td><td>Selon spécialité choisie (RH, finances, culture…)</td><td>Variable</td><td>Variable</td></tr>
  </tbody>
</table>

<div class="warning-box">
  <strong>⚠️ Attention :</strong> Les modalités exactes peuvent varier selon l'édition du concours. Vérifiez le programme officiel sur le site du CDG 972 ou du CNFPT pour la session à laquelle vous vous présentez.
</div>

<h2 class="section-title">2. La note à l'usage d'un supérieur – Qu'est-ce que c'est ?</h2>
<p>Il ne s'agit pas d'une dissertation, ni d'un résumé. La note est un document <strong>opérationnel</strong> destiné à un décideur (DGS, élu, directeur) qui :</p>
<ul>
  <li>N'a pas le temps de lire tous les documents du dossier</li>
  <li>Doit prendre une décision ou agir</li>
  <li>A besoin d'une analyse structurée des enjeux</li>
  <li>Veut des propositions concrètes et opérationnelles</li>
</ul>

<h2 class="section-title">3. Ce que le jury évalue</h2>
<table>
  <thead><tr><th>Critère</th><th>Pondération</th><th>Ce qui est attendu</th></tr></thead>
  <tbody>
    <tr><td>Compréhension du sujet</td><td>★★★★</td><td>Identifier le vrai problème posé · pas hors sujet</td></tr>
    <tr><td>Qualité du plan</td><td>★★★★</td><td>Plan structuré · logique · proportionné</td></tr>
    <tr><td>Maîtrise du fond</td><td>★★★★</td><td>Connaissances juridiques, techniques, réglementaires</td></tr>
    <tr><td>Qualité rédactionnelle</td><td>★★★</td><td>Langue claire · phrases courtes · vocabulaire professionnel</td></tr>
    <tr><td>Propositions opérationnelles</td><td>★★★</td><td>Réponse à « que faut-il faire ? »</td></tr>
    <tr><td>Respect de la forme</td><td>★★</td><td>En-tête · destinataire · objet · date · signature</td></tr>
  </tbody>
</table>

<h2 class="section-title">4. La structure type d'une note</h2>
<div class="fiche-synthese" style="background:#1a3a5c">
  <h3>📋 Structure obligatoire d'une note</h3>
  <div class="fiche-item"><strong>EN-TÊTE :</strong> [Ville, Date] · À : [Destinataire et qualité] · De : [Auteur et qualité] · Objet : [Titre précis et opérationnel]</div>
  <div class="fiche-item"><strong>INTRODUCTION :</strong> Contexte · problématique · annonce du plan (3-5 lignes max)</div>
  <div class="fiche-item"><strong>PARTIE I :</strong> Titre clair · 3 sous-parties · transitions</div>
  <div class="fiche-item"><strong>PARTIE II :</strong> Titre clair · 3 sous-parties · transitions</div>
  <div class="fiche-item"><strong>PARTIE III (si nécessaire) :</strong> Propositions / recommandations opérationnelles</div>
  <div class="fiche-item"><strong>CONCLUSION :</strong> Courte (2-3 lignes) · synthèse · ouverture ou décision suggérée</div>
</div>

<div class="info-box">
  <div class="info-title">ℹ️ La règle des 3 non</div>
  <ul>
    <li><strong>Non à la dissertation</strong> : pas de « thèse-antithèse-synthèse » philosophique</li>
    <li><strong>Non au résumé chronologique</strong> : pas de liste des documents dans l'ordre</li>
    <li><strong>Non à l'opinion personnelle</strong> : pas de « je pense que », « à mon avis »</li>
  </ul>
</div>

<h2 class="section-title">5. Gestion du temps (3h)</h2>
<table>
  <thead><tr><th>Étape</th><th>Durée recommandée</th></tr></thead>
  <tbody>
    <tr><td>Lecture rapide + annotation du dossier</td><td>45 min</td></tr>
    <tr><td>Identification problématique + plan détaillé</td><td>20 min</td></tr>
    <tr><td>Rédaction de l'introduction</td><td>15 min</td></tr>
    <tr><td>Rédaction des parties I et II</td><td>60 min</td></tr>
    <tr><td>Rédaction partie III (recommandations)</td><td>20 min</td></tr>
    <tr><td>Conclusion + relecture + mise en forme</td><td>20 min</td></tr>
  </tbody>
</table>

<div class="fiche-synthese">
  <h3>📋 FICHE – Comprendre l'épreuve écrite</h3>
  <div class="fiche-item">Note = document opérationnel pour décideur · pas une dissertation</div>
  <div class="fiche-item">6 critères jury : compréhension · plan · fond · rédaction · propositions · forme</div>
  <div class="fiche-item">Structure : en-tête → intro → parties → conclusion</div>
  <div class="fiche-item">3h : 45min lecture · 20min plan · 95min rédaction · 20min relecture</div>
  <div class="fiche-item">Jamais de « je pense », jamais de résumé chronologique</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Quelle est la différence entre une note de synthèse et une note à l'usage d'un supérieur ? »</div>
    <div class="jq-r">La note de synthèse : présente objectivement les informations d'un dossier sans recommandations. La note à l'usage d'un supérieur : va plus loin · elle analyse, hiérarchise ET propose des orientations ou des décisions. Plus opérationnelle, orientée action.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Comment le jury évalue-t-il la qualité du plan d'une note ? »</div>
    <div class="jq-r">Le jury apprécie : la logique interne (chaque partie découle de la précédente), l'équilibre des parties (proportions comparables), la couverture complète du sujet (aucun angle oublié), la clarté des intitulés de parties (formulés en propositions complètes, pas en mots-clés), et la présence de transitions entre les parties. Un plan déséquilibré ou trop chronologique est pénalisé.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Pourquoi l'en-tête d'une note est-elle si importante ? »</div>
    <div class="jq-r">Elle ancre la note dans son contexte professionnel réel. Un en-tête complet (À : destinataire avec qualité · De : auteur avec qualité et direction · Objet : titre opérationnel précis · Date) montre que le candidat maîtrise le format et se projette dans la posture d'un vrai agent territorial. L'absence d'en-tête est lourdement pénalisée car elle traduit une méconnaissance de l'exercice professionnel.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p5c1" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p4c4" class="chapter-nav-btn">← P4·C4 Management</a>
  <a href="#" data-page="p5c2" class="chapter-nav-btn next">Ch.2 Analyser un dossier →</a>
</div>
</section>`
    },

    { id: 'p5c2', html: `
<section id="p5c2" class="page-section">
<div class="chapter-title">
  <div class="num">P5·C2</div>
  <div><div class="part-tag">Partie 5 – Méthodologie</div><h1>Analyser un dossier &amp; construire un plan</h1></div>
</div>
<div class="chapter-intro">La qualité de votre analyse du dossier conditionne tout le reste. Ce chapitre vous donne une méthode rigoureuse pour lire efficacement, identifier la problématique réelle et construire un plan solide en moins de 30 minutes.</div>

<h2 class="section-title">1. La lecture active du dossier</h2>
<p>Ne lisez pas les documents dans l'ordre ! Voici la méthode en 4 temps :</p>
<ol>
  <li><strong>Lire le sujet (consigne)</strong> : comprendre précisément ce qui est demandé · à qui est destinée la note · quelle décision est en jeu</li>
  <li><strong>Identifier les documents</strong> : lire les titres, sous-titres, sources · classer mentalement par thème</li>
  <li><strong>Lecture approfondie par thème</strong> : surligner les idées clés · noter les chiffres et textes de référence</li>
  <li><strong>Recoupement et hiérarchisation</strong> : identifier les idées qui reviennent · repérer contradictions et complémentarités</li>
</ol>

<h2 class="section-title">2. Identifier la problématique</h2>
<div class="definition-box">
  <div class="def-title">📖 La problématique</div>
  La problématique est la question centrale à laquelle répond votre note. Elle doit être : précise · liée au sujet · orientée vers l'action · formulée sous forme interrogative ou assertive.
  <br><br>
  <strong>Mauvaise problématique :</strong> « Qu'est-ce que la politique de l'eau en Martinique ? »<br>
  <strong>Bonne problématique :</strong> « Comment la CTM peut-elle répondre à la crise de l'eau potable tout en respectant ses contraintes budgétaires ? »
</div>

<h2 class="section-title">3. Construire le plan</h2>
<p>Le plan d'une note peut adopter plusieurs structures :</p>
<table>
  <thead><tr><th>Type de plan</th><th>Structure</th><th>Cas d'usage</th></tr></thead>
  <tbody>
    <tr><td>Diagnostic / Réponse</td><td>I. État des lieux / II. Enjeux / III. Préconisations</td><td>Sujet sur un problème à résoudre</td></tr>
    <tr><td>Thématique</td><td>I. Juridique / II. Financier / III. Organisationnel</td><td>Sujet multi-dimensionnel</td></tr>
    <tr><td>Chronologique</td><td>I. Contexte historique / II. Situation actuelle / III. Perspectives</td><td>Sujet d'évolution dans le temps</td></tr>
    <tr><td>Pour/Contre → Synthèse</td><td>I. Avantages / II. Contraintes / III. Recommandations équilibrées</td><td>Décision à prendre</td></tr>
  </tbody>
</table>

<div class="info-box">
  <div class="info-title">ℹ️ La règle du 2+2 ou 3+3</div>
  Une bonne note a 2 à 3 parties, chacune avec 2 à 3 sous-parties. Pas plus. La symétrie des parties rassure le jury et montre la maîtrise du plan.
</div>

<h2 class="section-title">4. Exercice appliqué – Sujet Martinique</h2>
<div class="cas-pratique">
  <div class="cas-header">✏️ Exercice de plan – Sujet Martinique</div>
  <div class="cas-body">
    <div class="cas-context"><strong>Sujet :</strong> « Vous êtes attaché territorial à la CTM. Le Président du Conseil Exécutif vous demande une note sur les enjeux et les solutions pour faire face au vieillissement démographique en Martinique. Rédigez une note à l'usage du Président. »</div>
    <div class="cas-mission">🎯 Mission : Construisez un plan en 2 parties (15 minutes).</div>
    <button class="cas-corrige-toggle">▼ Voir le corrigé du plan</button>
    <div class="cas-corrige">
      <p><strong>Problématique :</strong> « Comment la CTM peut-elle anticiper et répondre aux défis du vieillissement démographique dans un contexte de ressources contraintes ? »</p>
      <p><strong>Plan proposé :</strong></p>
      <p><strong>I. Un vieillissement démographique accéléré aux multiples enjeux</strong></p>
      <ul>
        <li>1.1 Une réalité démographique sans précédent (taux de vieillissement, projections INSEE)</li>
        <li>1.2 Des impacts sur les services publics (santé, dépendance, transport, logement)</li>
        <li>1.3 Des conséquences économiques et financières pour la CTM</li>
      </ul>
      <p><strong>II. Des leviers d'action pour une politique du vieillissement adaptée</strong></p>
      <ul>
        <li>2.1 Renforcer l'offre de soins et de services à domicile (EHPAD, SSIAD, télémédecine)</li>
        <li>2.2 Adapter les politiques de mobilité et d'accessibilité</li>
        <li>2.3 Mobiliser les partenariats et les financements européens</li>
      </ul>
    </div>
  </div>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Analyser et planifier</h3>
  <div class="fiche-item">Lecture active : consigne → titres docs → lecture thématique → recoupement</div>
  <div class="fiche-item">Problématique = question centrale orientée action</div>
  <div class="fiche-item">Plans types : diagnostic/réponse · thématique · chronologique · pour/contre</div>
  <div class="fiche-item">Structure : 2-3 parties · 2-3 sous-parties par partie</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Comment formuler une bonne problématique à partir d'un dossier de concours ? »</div>
    <div class="jq-r">Partir de la commande explicite (ce que demande le supérieur), identifier le problème central sous-jacent (pourquoi c'est un enjeu), puis formuler la question de manière opérationnelle. Une bonne problématique est : précise (pas trop large), liée au contexte du sujet, orientée vers l'action ou la décision, et reformulable en deux phrases maximum. Elle guide tout le plan.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Que faire si le dossier contient des documents contradictoires ? »</div>
    <div class="jq-r">C'est voulu ! Le jury teste votre capacité de jugement. Il faut : identifier et mentionner la contradiction (sans la nier) · la mettre en perspective (dates, sources, contextes différents) · prendre position avec des arguments et nuances · proposer une voie de synthèse. Ne jamais ignorer un document en contradiction car il peut contenir une information clé. La contradiction peut même structurer le plan (partie I : arguments en faveur / partie II : limites et nuances).</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Quel est le bon nombre de parties dans une note pour le concours d'Attaché Territorial ? »</div>
    <div class="jq-r">Deux parties équilibrées est le standard le plus sûr et le plus apprécié. Un plan en trois parties est acceptable si les trois thèmes sont vraiment distincts et équivalents. Plus de trois parties fragilise l'équilibre et suggère un manque de synthèse. Chaque partie doit avoir 2 à 3 sous-parties de longueur comparable. Un plan 2×3 (2 parties, 3 sous-parties chacune) est considéré comme un modèle d'équilibre.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p5c2" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p5c1" class="chapter-nav-btn">← Ch.1 Comprendre l'épreuve</a>
  <a href="#" data-page="p5c3" class="chapter-nav-btn next">Ch.3 Rédiger &amp; gérer le temps →</a>
</div>
</section>`
    },

    { id: 'p5c3', html: `
<section id="p5c3" class="page-section">
<div class="chapter-title">
  <div class="num">P5·C3</div>
  <div><div class="part-tag">Partie 5 – Méthodologie</div><h1>Rédiger efficacement &amp; gérer le temps</h1></div>
</div>
<div class="chapter-intro">Rédiger vite et bien est un art qui s'apprend. Ce chapitre vous donne les formules, tournures et réflexes rédactionnels du parfait attaché territorial, avec des exemples de phrases d'introduction, de transition et de conclusion.</div>

<h2 class="section-title">1. Les formules indispensables</h2>
<table>
  <thead><tr><th>Usage</th><th>Formules</th></tr></thead>
  <tbody>
    <tr><td>Introduction – contexte</td><td>« Dans le contexte de… / Face aux enjeux de… / La collectivité est confrontée à… »</td></tr>
    <tr><td>Introduction – problématique</td><td>« Il convient donc de s'interroger sur… / La question est de savoir comment… »</td></tr>
    <tr><td>Introduction – annonce plan</td><td>« Après avoir analysé… (I), nous présenterons… (II) »</td></tr>
    <tr><td>Transition</td><td>« Si [partie I], encore faut-il [partie II]. / Au-delà de [I], il importe d'examiner [II]. »</td></tr>
    <tr><td>Recommandation</td><td>« Il est recommandé de… / Il apparaît opportun de… / La CTM pourrait envisager… »</td></tr>
    <tr><td>Conclusion</td><td>« En définitive… / Au total… / Cette note a permis de… »</td></tr>
  </tbody>
</table>

<h2 class="section-title">2. Les erreurs à éviter absolument</h2>
<ul>
  <li>❌ Réécrire les documents (= paraphrase) → synthèse = hiérarchiser et reformuler</li>
  <li>❌ Oublier l'en-tête (destinataire, objet, date)</li>
  <li>❌ Utiliser la 1ère personne : « je » → « il convient de »</li>
  <li>❌ Citer les documents par leur titre dans le corps du texte → intégrer les idées</li>
  <li>❌ Dépasser 4 pages (généralement attendu : 3 à 4 pages)</li>
  <li>❌ Négliger la conclusion (même courte, elle est lue en premier par certains jurés)</li>
</ul>

<h2 class="section-title">3. Exemple d'introduction rédigée</h2>
<div class="fiche-synthese" style="background:#2e7d32">
  <h3>📋 Exemple d'introduction (sujet eau potable Martinique)</h3>
  <div class="fiche-item">À : M. le Président du Conseil Exécutif de la Martinique</div>
  <div class="fiche-item">De : [Nom], Attaché territorial, Direction de l'Environnement</div>
  <div class="fiche-item">Objet : La crise de l'eau potable en Martinique – Enjeux et préconisations</div>
  <div class="fiche-item">Date : [Date]</div>
  <div class="fiche-item" style="margin-top:12px">« Depuis plusieurs années, la Martinique est confrontée à une crise structurelle de l'eau potable, caractérisée par des interruptions récurrentes de distribution et des taux de perte en réseau parmi les plus élevés de France (plus de 50%). Dans ce contexte, la question de la gouvernance et du financement du service de l'eau constitue un enjeu majeur pour la CTM, tant en termes d'attractivité du territoire que de santé publique. Il convient d'analyser les causes de cette situation (I) avant d'envisager les leviers d'action disponibles pour y remédier (II). »</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Comment rédiger une introduction de note efficace en moins de 15 minutes ? »</div>
    <div class="jq-r">En suivant quatre temps stricts : 1. Contextualiser en 1-2 phrases (le fait/la situation qui justifie la note) · 2. Poser la problématique en 1 phrase interrogative ou assertive · 3. Annoncer le plan en 1 phrase avec les titres des parties · 4. Relire pour vérifier l'absence de « je » et la présence de l'en-tête. La méthode CAPAP aide : Contexte · Enjeux · Problématique · Annonce · Plan.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Pourquoi est-il interdit d'utiliser la première personne du singulier dans une note administrative ? »</div>
    <div class="jq-r">La note est un document institutionnel, pas personnel. Le « je » introduit une subjectivité incompatible avec la neutralité et l'objectivité attendues d'un agent territorial. On lui substitue : « il convient de », « il apparaît que », « la collectivité pourrait envisager », « on peut noter que ». Cette règle illustre aussi la posture professionnelle de l'attaché : il s'efface derrière l'institution et son supérieur.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Que faire si vous manquez de temps lors de l'épreuve écrite ? »</div>
    <div class="jq-r">Prioriser : finir l'introduction et la première partie complètes vaut mieux qu'une note inachevée mais brouillonne. Si la deuxième partie est incomplète, rédiger a minima les titres et sous-titres avec quelques mots-clés : le jury voit que vous avez le plan et les idées. Rédiger une courte conclusion bâclée est mieux que pas de conclusion. Ne jamais sacrifier la relecture finale : fautes d'orthographe = image négative immédiate.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p5c3" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p5c2" class="chapter-nav-btn">← Ch.2 Analyser &amp; planifier</a>
  <a href="#" data-page="p5c4" class="chapter-nav-btn next">Ch.4 Annales corrigées →</a>
</div>
</section>`
    },

    { id: 'p5c4', html: `
<section id="p5c4" class="page-section">
<div class="chapter-title">
  <div class="num">P5·C4</div>
  <div><div class="part-tag">Partie 5 – Méthodologie</div><h1>Annale corrigée – Sujet type Martinique</h1></div>
</div>
<div class="chapter-intro">Ce chapitre présente un sujet complet type concours d'Attaché Territorial, adapté au contexte martiniquais, avec un corrigé détaillé commenté.</div>

<h2 class="section-title">Sujet – Note sur la transition énergétique en Martinique</h2>
<div class="cas-pratique">
  <div class="cas-header">📄 Sujet type concours</div>
  <div class="cas-body">
    <div class="cas-context">
      <p><strong>Contexte (fourni par le dossier hypothétique) :</strong> La Martinique dépend à 90% des énergies fossiles pour sa production électrique. Le Plan Énergie Martinique (PEM) prévoit d'atteindre 100% d'énergies renouvelables à l'horizon 2030. Plusieurs projets éoliens et photovoltaïques sont en cours. Cependant, des difficultés financières, réglementaires et d'acceptabilité sociale freinent leur déploiement.</p>
    </div>
    <div class="cas-mission">🎯 Vous êtes attaché territorial à la CTM. Le Président du Conseil Exécutif vous demande de rédiger une note sur les obstacles à la transition énergétique en Martinique et les leviers d'action disponibles. (3 pages maximum)</div>
    <button class="cas-corrige-toggle">▼ Voir le corrigé complet</button>
    <div class="cas-corrige">
      <p><strong>À :</strong> M. le Président du Conseil Exécutif de la Martinique<br>
      <strong>De :</strong> [Nom], Attaché territorial, Direction du Développement Durable<br>
      <strong>Objet :</strong> Transition énergétique en Martinique – Obstacles et leviers d'action<br>
      <strong>Date :</strong> [Date]</p>

      <p><strong>Introduction :</strong> La Martinique, île ultrapériphérique de l'Union européenne, présente une dépendance quasi-totale aux énergies fossiles importées (plus de 90% de l'électricité produite), exposant ainsi son économie à la volatilité des prix du pétrole et à une empreinte carbone élevée. Le Plan Énergie Martinique (PEM) fixe l'objectif ambitieux d'atteindre 100% d'énergies renouvelables à l'horizon 2030. Toutefois, la réalisation de cet objectif se heurte à des obstacles multidimensionnels qu'il convient d'analyser (I) avant d'identifier les leviers mobilisables par la CTM (II).</p>

      <p><strong>I – Des obstacles multidimensionnels à la transition énergétique martiniquaise</strong></p>
      <p><em>1.1 Des contraintes réglementaires et foncières</em><br>
      Les projets éoliens et solaires nécessitent des autorisations multiples (DEAL, Architecte des Bâtiments de France pour les zones paysagères, étude d'impact environnemental). Les délais d'instruction sont longs (3 à 5 ans) et les recours contentieux fréquents. La pression foncière en Martinique (superficie limitée à 1 128 km²) complique l'identification de sites adaptés hors des zones agricoles protégées.</p>
      <p><em>1.2 Des contraintes financières et d'ingénierie</em><br>
      Le coût d'investissement des infrastructures renouvelables est élevé (surcoût lié à l'insularité, logistique). Les financements publics (FEDER, fonds propres CTM) ne couvrent qu'une partie des besoins. EDF SEI (opérateur historique) gère le réseau électrique et reste dominant, limitant l'intégration des producteurs locaux.</p>
      <p><em>1.3 Des défis d'acceptabilité sociale</em><br>
      Les projets éoliens font face à des oppositions locales (impact paysager, nuisances sonores). L'absence de concertation précoce a conduit à des blocages (ex. projet éolien du Galion). La méfiance des populations envers certains opérateurs extérieurs freine les projets.</p>

      <p><strong>II – Les leviers d'action disponibles pour la CTM</strong></p>
      <p><em>2.1 Renforcer la planification et simplifier les procédures</em><br>
      La CTM peut utiliser son PADDM (Plan d'Aménagement et de Développement Durable) pour identifier et protéger des zones dédiées aux EnR. Proposer un guichet unique pour l'instruction des dossiers en lien avec la DEAL. Mobiliser la délégation législative de l'art. 73 pour adapter certaines normes localement.</p>
      <p><em>2.2 Mobiliser les financements européens et les partenariats</em><br>
      La CTM est autorité de gestion du FEDER Martinique 2021-2027 qui intègre un axe transition énergétique (environ 120 M€). Encourager les coopérations avec les îles voisines (Caraïbe) sur les smart grids. Soutenir les coopératives citoyennes d'énergie (modèle participatif).</p>
      <p><em>2.3 Engager une démarche de concertation citoyenne</em><br>
      Mettre en place une Commission locale de l'énergie impliquant élus locaux, associations, acteurs économiques. Développer l'autoconsommation collective (photovoltaïque sur bâtiments publics). Former les agents territoriaux à la gestion de l'énergie.</p>

      <p><strong>Conclusion :</strong> La transition énergétique en Martinique est un impératif à la fois écologique, économique et de souveraineté. Si les obstacles sont réels, ils ne sont pas insurmontables. La CTM dispose, grâce à son statut d'autorité de gestion des fonds européens et à ses compétences élargies, de leviers puissants pour accélérer ce chantier. Une approche intégrée associant planification, financement et concertation constitue la voie la plus prometteuse pour atteindre l'objectif 2030.</p>
    </div>
  </div>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Annale corrigée</h3>
  <div class="fiche-item">Sujet type : note 3 pages sur enjeu territorial martiniquais</div>
  <div class="fiche-item">Structure : en-tête + intro (problématique + annonce) + 2 parties + conclusion</div>
  <div class="fiche-item">Partie I : diagnostic (obstacles/enjeux) · Partie II : préconisations (leviers)</div>
  <div class="fiche-item">Transition marquée entre les deux parties</div>
  <div class="fiche-item">Vocabulaire technique précis · pas de « je » · formules impersonnelles</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury sur la méthodologie de la note</div>
  <div class="jq-item">
    <div class="jq-q">« Après la lecture de votre note, que pensez-vous de votre introduction ? »</div>
    <div class="jq-r">Question piège : le jury veut voir votre capacité d'auto-évaluation et de recul. Répondre honnêtement : pointer ce qui était réussi (si c'est le cas) et identifier une limite (ex. problématique trop large, transition à améliorer). Montrer qu'on comprend les critères du jury. Éviter l'excès de modestie autant que la prétention. Proposer comment on l'améliorerait si on recommençait.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Comment s'entraîner efficacement à l'épreuve de note avant le concours ? »</div>
    <div class="jq-r">Méthode progressive : 1. Analyser des corrigés de notes sans avoir traité le sujet (déconstruire la méthode) · 2. S'entraîner à construire des plans sans rédiger (15 min par sujet) · 3. Rédiger des introductions complètes (20 min par sujet) · 4. Entraînement en conditions réelles (3h, dossier imprimé, sans Internet) · 5. Faire corriger par un tiers (pair, formateur CDG). Viser au moins 5 sujets complets traités avant le concours.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p5c4" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p5c3" class="chapter-nav-btn">← Ch.3 Rédiger</a>
  <a href="#" data-page="p6c1" class="chapter-nav-btn next">Partie 6 · Ch.1 Oral – Attentes du jury →</a>
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
