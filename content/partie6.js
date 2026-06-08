/* ============================================================
   PARTIE 6 – Préparation à l'oral (3 chapitres)
   ============================================================ */
(function() {
  const container = document.querySelector('.main-content');
  const sections = [

    { id: 'p6c1', html: `
<section id="p6c1" class="page-section">
<div class="chapter-title">
  <div class="num">P6·C1</div>
  <div><div class="part-tag">Partie 6 – Préparation à l'oral</div><h1>Attentes du jury &amp; présentation personnelle</h1></div>
</div>
<div class="chapter-intro">L'oral du concours d'Attaché Territorial est souvent décisif. Ce chapitre vous prépare à vous présenter avec impact, à valoriser votre Bachelor RH et à démontrer votre motivation pour exercer en Martinique.</div>

<h2 class="section-title">1. Ce que le jury attend</h2>
<p>Le jury d'oral du concours d'Attaché Territorial évalue trois dimensions :</p>
<table>
  <thead><tr><th>Dimension</th><th>Ce qui est évalué</th></tr></thead>
  <tbody>
    <tr><td>Aptitude professionnelle</td><td>Connaissance de l'environnement territorial · maîtrise des enjeux · capacité à résoudre des problèmes</td></tr>
    <tr><td>Motivations et projet professionnel</td><td>Pourquoi ce concours ? Pourquoi la FPT ? Pourquoi la Martinique ? Vision de la fonction</td></tr>
    <tr><td>Personnalité et comportement</td><td>Aisance orale · gestion du stress · clarté du discours · posture · écoute</td></tr>
  </tbody>
</table>

<h2 class="section-title">2. La présentation personnelle – Le « pitch » de 5 minutes</h2>
<p>Structure recommandée pour la présentation :</p>
<ol>
  <li><strong>Qui suis-je ?</strong> (30 sec) : parcours académique en 2 phrases → Bachelor RH</li>
  <li><strong>Mon expérience pertinente</strong> (1 min) : stages, emplois, bénévolat → compétences RH et managériales</li>
  <li><strong>Pourquoi ce concours ?</strong> (1 min) : passion pour le service public · volonté d'impact local</li>
  <li><strong>Pourquoi la Martinique ?</strong> (1 min) : ancrage territorial · connaissance des enjeux locaux · projet de vie</li>
  <li><strong>Ma vision du poste d'Attaché Territorial</strong> (1 min 30) : valeurs de service public · rôle d'interface · ambitions professionnelles</li>
</ol>

<div class="info-box">
  <div class="info-title">ℹ️ Valoriser votre Bachelor RH</div>
  Votre formation Bachelor RH est un atout majeur pour l'Attaché Territorial, notamment dans les missions RH, de management et de gestion des ressources. Mettez-la en avant concrètement :
  <ul>
    <li>« Ma formation m'a apporté des compétences en gestion des emplois et compétences… »</li>
    <li>« J'ai réalisé un stage en [entreprise] où j'ai… ce qui m'a préparé à gérer… »</li>
    <li>« Le droit du travail que j'ai étudié s'articule avec le statut de la FPT que je maîtrise désormais… »</li>
  </ul>
</div>

<h2 class="section-title">3. Gestion du stress</h2>
<ul>
  <li><strong>Avant l'oral</strong> : respiration diaphragmatique (4-7-8) · visualisation positive · relecture de vos 3 fiches clés</li>
  <li><strong>Pendant l'oral</strong> : parlez lentement (vous paraissez plus confiant) · utilisez des silences · regardez chaque membre du jury</li>
  <li><strong>Si vous ne savez pas</strong> : dites « Je ne dispose pas de cette information précise, mais je saurais trouver la réponse en… »</li>
</ul>

<h2 class="section-title">4. La posture physique et vocale</h2>
<ul>
  <li>Dos droit · mains visibles · contact visuel avec le jury</li>
  <li>Voix : modulée · pas monotone · débit d'environ 120 mots/minute</li>
  <li>Tenue vestimentaire : sobre et professionnelle</li>
  <li>Jamais : croiser les bras · regarder le plafond · se justifier excessivement</li>
</ul>

<div class="fiche-synthese">
  <h3>📋 FICHE – Oral : attentes &amp; présentation</h3>
  <div class="fiche-item">3 dimensions jury : aptitude pro · motivations · personnalité</div>
  <div class="fiche-item">Pitch 5 min : parcours → expérience → pourquoi concours → pourquoi Martinique → vision</div>
  <div class="fiche-item">Bachelor RH = atout : le valoriser concrètement avec des exemples</div>
  <div class="fiche-item">Gestion stress : respiration · parler lentement · silence = confiance</div>
  <div class="fiche-item">Si on ne sait pas : ne pas inventer · montrer comment on trouverait</div>
</div>

<button class="mark-done-btn" data-chapter="p6c1" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p5c4" class="chapter-nav-btn">← P5·C4 Annales</a>
  <a href="#" data-page="p6c2" class="chapter-nav-btn next">Ch.2 Questions classiques &amp; territoriales →</a>
</div>
</section>`
    },

    { id: 'p6c2', html: `
<section id="p6c2" class="page-section">
<div class="chapter-title">
  <div class="num">P6·C2</div>
  <div><div class="part-tag">Partie 6 – Préparation à l'oral</div><h1>Questions classiques &amp; territoriales</h1></div>
</div>
<div class="chapter-intro">Ce chapitre recense les 30 questions les plus fréquemment posées lors des oraux de concours d'Attaché Territorial, avec des réponses modèles structurées et adaptées au contexte martiniquais.</div>

<h2 class="section-title">Questions sur le parcours et la motivation</h2>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions – Parcours &amp; motivations</div>

  <div class="jq-item">
    <div class="jq-q">« Pourquoi avez-vous choisi le concours d'Attaché Territorial plutôt qu'un poste dans le privé ? »</div>
    <div class="jq-r">Le service public représente pour moi un engagement au service de l'intérêt général, au plus proche des citoyens. Mon Bachelor RH m'a donné des compétences transférables que je souhaite mettre au service de la collectivité martiniquaise. La stabilité et les valeurs de la FPT correspondent à mon projet de vie ancré en Martinique.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce qui vous a le plus préparé à ce concours dans votre Bachelor RH ? »</div>
    <div class="jq-r">La gestion des ressources humaines, le droit du travail, le management d'équipe et la conduite de projet. Ces compétences sont directement opérationnelles dans les missions d'un Attaché Territorial, qu'il s'agisse de gérer une équipe, de piloter un projet ou de conseiller l'autorité territoriale en matière RH.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">« Où vous voyez-vous dans 5 ans ? »</div>
    <div class="jq-r">À moyen terme, je souhaite consolider mes compétences dans un premier poste à responsabilité — idéalement en RH ou en développement territorial à la CTM ou dans une commune. À 5 ans, j'envisage de préparer le concours d'Administrateur Territorial ou d'évoluer vers un poste de direction de service.</div>
  </div>
</div>

<h2 class="section-title">Questions sur l'environnement territorial</h2>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions – Environnement territorial</div>

  <div class="jq-item">
    <div class="jq-q">« Quelle est la principale différence entre la CTM et une région ordinaire ? »</div>
    <div class="jq-r">La CTM est une collectivité unique qui exerce simultanément les compétences d'une région et d'un département. Son exécutif est collégial (Président du Conseil Exécutif + 8 conseillers exécutifs), ce qui la distingue d'une région ordinaire. Elle dispose d'un PADDM à la place du SRADDET et gère directement les fonds européens.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que l'octroi de mer et pourquoi est-il contesté ? »</div>
    <div class="jq-r">L'octroi de mer est une taxe sur les marchandises importées (et certaines productions locales) en Martinique. Ressource fiscale essentielle (~200 M€/an), il sert à protéger la production locale et finance les collectivités. Il est contesté car il renchérit le coût de la vie (notamment pour les ménages modestes) et crée des tensions sociales. Son renouvellement par l'UE jusqu'en 2027 est régulièrement débattu.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">« Quels sont les 3 principaux défis de la Martinique selon vous ? »</div>
    <div class="jq-r">1) Le vieillissement démographique accéléré et la fuite des jeunes actifs ; 2) Le chômage structurel (taux ~17%) avec une économie insulaire peu diversifiée ; 3) La dépendance aux énergies fossiles et la vulnérabilité aux risques naturels (cyclones, séismes). Ces trois enjeux sont interconnectés et nécessitent des réponses politiques ambitieuses et des financements adaptés.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que le PADDM ? »</div>
    <div class="jq-r">Le Plan d'Aménagement et de Développement Durable de la Martinique (PADDM) est le document de planification stratégique de la CTM, équivalent du SRADDET pour les régions ordinaires. Il définit les grandes orientations d'aménagement du territoire, de développement durable et de mobilité à l'horizon 2030-2040. Il est opposable aux autres documents d'urbanisme (SCoT, PLU).</div>
  </div>
</div>

<h2 class="section-title">Questions sur les politiques publiques</h2>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions – Politiques publiques</div>

  <div class="jq-item">
    <div class="jq-q">« Comment la CTM peut-elle lutter contre le chômage en Martinique ? »</div>
    <div class="jq-r">Via le SRDEII (développement économique) : soutien aux entreprises locales, zones franches d'activité, tourisme, agriculture, économie numérique. Via la formation professionnelle (compétence régionale) : adéquation formation-emploi. Via les clauses d'insertion dans les marchés publics. Via les fonds FSE+ pour l'accompagnement des demandeurs d'emploi. Partenariat avec France Travail (ex-Pôle Emploi) et les missions locales.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que la continuité territoriale et quel rôle joue la CTM ? »</div>
    <div class="jq-r">La continuité territoriale désigne les mesures permettant aux habitants d'outre-mer d'accéder aux mêmes services que les métropolitains malgré l'éloignement (transports, télécommunications). La CTM participe au Fonds de Continuité Territoriale (FCT) qui finance des aides au transport aérien pour les résidents martiniquais. Elle s'implique aussi dans le développement du numérique (haut débit, équipements) pour réduire la fracture territoriale.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p6c2" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p6c1" class="chapter-nav-btn">← Ch.1 Attentes &amp; présentation</a>
  <a href="#" data-page="p6c3" class="chapter-nav-btn next">Ch.3 Mises en situation orales →</a>
</div>
</section>`
    },

    { id: 'p6c3', html: `
<section id="p6c3" class="page-section">
<div class="chapter-title">
  <div class="num">P6·C3</div>
  <div><div class="part-tag">Partie 6 – Préparation à l'oral</div><h1>Mises en situation orales</h1></div>
</div>
<div class="chapter-intro">Les mises en situation sont des exercices clés de l'oral. Voici 5 mises en situation complètes avec corrigés détaillés, couvrant les principaux thèmes attendus : RH, management, budget, crise, relations élus.</div>

<div class="mise-en-situation">
  <div class="mes-header">🎭 Mise en situation 1 – Relations élus/agents</div>
  <div class="mes-body">
    <div class="mes-contexte"><strong>Contexte :</strong> Un élu de l'opposition à la CTM vous contacte directement pour obtenir des informations confidentielles sur un dossier RH sensible (une procédure disciplinaire en cours contre un agent de son quartier). Il vous met sous pression en invoquant son mandat d'élu.</div>
    <div class="mes-mission">🎯 Comment réagissez-vous ?</div>
    <button class="mes-toggle">▼ Voir le corrigé</button>
    <div class="mes-corrige">
      <p><strong>Réponse modèle :</strong> Je rappelle poliment mais fermement à l'élu que les dossiers disciplinaires sont confidentiels et couverts par le secret professionnel (art. 26 loi 83-634). Un élu de l'opposition ne dispose pas du droit d'accès aux données personnelles des agents. Je lui indique les voies légitimes : demande d'information via le DGS ou le Président du Conseil Exécutif · accès aux actes publiés uniquement. Je consigne l'appel et en informe mon responsable hiérarchique immédiat. Je ne m'oppose pas à l'élu mais je protège la légalité et l'agent concerné.</p>
    </div>
  </div>
</div>

<div class="mise-en-situation">
  <div class="mes-header">🎭 Mise en situation 2 – Conflit d'équipe</div>
  <div class="mes-body">
    <div class="mes-contexte"><strong>Contexte :</strong> Vous êtes responsable d'un service de 6 agents à la CTM. Deux agents sont en conflit ouvert depuis 3 semaines, ce qui dégrade le climat de travail et impacte la productivité. Les autres membres de l'équipe prennent parti.</div>
    <div class="mes-mission">🎯 Comment gérez-vous la situation ?</div>
    <button class="mes-toggle">▼ Voir le corrigé</button>
    <div class="mes-corrige">
      <p><strong>Étape 1 :</strong> Rencontrer séparément chaque agent en conflit. Écoute active sans prendre parti. Identifier les causes réelles (personnel ? professionnel ? organisation du travail ?).</p>
      <p><strong>Étape 2 :</strong> Si possible, organiser une médiation (entretien tripartite) dans un cadre calme et structuré.</p>
      <p><strong>Étape 3 :</strong> Adresser l'ensemble de l'équipe : réunion de service pour reposer les règles de fonctionnement collectif sans nommer les personnes.</p>
      <p><strong>Étape 4 :</strong> Si le conflit persiste malgré la médiation : signalement à la DRH · possibilité de mobilité interne · si comportements fautifs : procédure disciplinaire proportionnée.</p>
      <p><strong>À NE PAS FAIRE :</strong> ignorer le conflit · s'impliquer personnellement dans le conflit · sanctionner sans entretien préalable.</p>
    </div>
  </div>
</div>

<div class="mise-en-situation">
  <div class="mes-header">🎭 Mise en situation 3 – Gestion de crise (cyclone)</div>
  <div class="mes-body">
    <div class="mes-contexte"><strong>Contexte :</strong> Un cyclone de catégorie 3 va toucher la Martinique dans 72 heures. Vous êtes attaché territorial chargé de la logistique à la CTM. Le Président du Conseil Exécutif vous demande de coordonner la préparation des services.</div>
    <div class="mes-mission">🎯 Quelles actions prioritaires menez-vous dans les 72 heures avant l'impact ?</div>
    <button class="mes-toggle">▼ Voir le corrigé</button>
    <div class="mes-corrige">
      <p><strong>H-72 :</strong> Activation du PCA (Plan de Continuité d'Activité) de la CTM · Information des 34 communes · Inventaire stocks (eau, denrées, matériel) · Activation des équipes d'astreinte.</p>
      <p><strong>H-48 :</strong> Coordination avec la Préfecture (ORSEC) · SDIS Martinique · communes · EDF · SAMU. Répertorier les hébergements d'urgence disponibles. Informer les agents de leurs obligations de service.</p>
      <p><strong>H-24 :</strong> Mise à l'abri des équipements mobiles · sécurisation des bâtiments CTM · mise en place de la cellule de crise. Communication aux usagers (site CTM, réseaux sociaux, radio locale).</p>
      <p><strong>Après l'impact :</strong> Évaluation des dégâts · activation des équipes de nettoyage · demande de catastrophe naturelle · coordination des aides d'urgence · REX.</p>
    </div>
  </div>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Mises en situation orales</h3>
  <div class="fiche-item">Écouter la question entière avant de répondre · reformuler si besoin</div>
  <div class="fiche-item">Structure réponse : diagnostic → actions → vigilances</div>
  <div class="fiche-item">Toujours montrer qu'on informe sa hiérarchie et qu'on respecte les procédures</div>
  <div class="fiche-item">Crise cyclone : PCA · coordination préfecture · ORSEC · communication usagers</div>
  <div class="fiche-item">Conflit : entretiens séparés → médiation → règles collectives → DRH si nécessaire</div>
</div>

<button class="mark-done-btn" data-chapter="p6c3" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p6c2" class="chapter-nav-btn">← Ch.2 Questions classiques</a>
  <a href="#" data-page="p7c1" class="chapter-nav-btn next">Partie 7 · Ch.1 Transition écologique →</a>
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
