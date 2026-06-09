/* ============================================================
   PARTIE 2 – Droit public (4 chapitres)
   ============================================================ */
(function() {
  const container = document.querySelector('.main-content');
  const sections = [

    // ---- P2C1 : Sources du droit & Constitution ----
    { id: 'p2c1', html: `
<section id="p2c1" class="page-section">
<div class="chapter-title">
  <div class="num">P2·C1</div>
  <div><div class="part-tag">Partie 2 – Droit public</div><h1>Sources du droit public &amp; Constitution</h1></div>
</div>
<div class="chapter-intro">Le droit public régit les relations entre l'État, les collectivités et les citoyens. Maîtriser la hiérarchie des normes et les mécanismes constitutionnels est indispensable pour tout Attaché Territorial qui doit garantir la légalité des actes de sa collectivité.</div>

<h2 class="section-title">1. La hiérarchie des normes (pyramide de Kelsen)</h2>
<div class="org-chart">
  <div class="org-node">Constitution de 1958 + Bloc de constitutionnalité</div>
  <div class="org-line"></div>
  <div class="org-node secondary">Traités internationaux et européens (art. 55)</div>
  <div class="org-line"></div>
  <div class="org-node secondary">Lois organiques</div>
  <div class="org-line"></div>
  <div class="org-node secondary">Lois ordinaires + Ordonnances ratifiées</div>
  <div class="org-line"></div>
  <div class="org-node tertiary">Règlements (Décrets · Arrêtés ministériels)</div>
  <div class="org-line"></div>
  <div class="org-node tertiary">Actes des collectivités (délibérations · arrêtés)</div>
</div>

<div class="definition-box">
  <div class="def-title">📖 Bloc de constitutionnalité</div>
  Ensemble de textes de valeur constitutionnelle : Constitution de 1958 + Préambule 1958 → Préambule 1946 → DDHC 1789 + Charte de l'environnement 2004 + Principes fondamentaux reconnus par les lois de la République (PFRLR).
</div>

<h2 class="section-title">2. La Constitution de 1958</h2>
<p>Adoptée le 4 octobre 1958, la Constitution de la Ve République organise les institutions et garantit les libertés fondamentales.</p>
<table>
  <thead><tr><th>Titre</th><th>Contenu clé</th></tr></thead>
  <tbody>
    <tr><td>Titre I (art. 1-4)</td><td>Souveraineté, laïcité, partis politiques</td></tr>
    <tr><td>Titre II (art. 5-19)</td><td>Le Président de la République</td></tr>
    <tr><td>Titre III (art. 20-23)</td><td>Le Gouvernement</td></tr>
    <tr><td>Titre IV (art. 24-51)</td><td>Le Parlement (AN + Sénat)</td></tr>
    <tr><td>Titre V (art. 52-55)</td><td>Traités et accords internationaux</td></tr>
    <tr><td>Titre VIII (art. 61-63)</td><td>Conseil Constitutionnel</td></tr>
    <tr><td>Titre XII (art. 72-75)</td><td>Collectivités territoriales</td></tr>
  </tbody>
</table>

<h2 class="section-title">3. Le Conseil Constitutionnel</h2>
<p>Gardien de la Constitution, il contrôle la conformité des lois :</p>
<ul>
  <li><strong>Contrôle a priori</strong> : avant promulgation (saisine par 60 dép./60 sénateurs)</li>
  <li><strong>QPC</strong> (Question Prioritaire de Constitutionnalité depuis 2010) : contrôle a posteriori à l'initiative des justiciables</li>
</ul>

<h2 class="section-title">4. Sources spécifiques du droit territorial</h2>
<ul>
  <li><strong>CGCT</strong> (Code Général des Collectivités Territoriales) : loi du 21 février 1996 codifiant l'ensemble des règles applicables aux collectivités</li>
  <li><strong>CGFP</strong> (Code Général de la Fonction Publique) : 2022</li>
  <li><strong>Jurisprudence administrative</strong> : Conseil d'État + cours administratives d'appel</li>
  <li><strong>Circulaires et instructions</strong> : valeur indicative, non contraignante pour les tiers</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Spécificités du droit applicable en Martinique</h3>
  <ul>
    <li>L'article 73 de la Constitution autorise des adaptations des lois et règlements en Martinique</li>
    <li>Certaines dispositions du CGCT sont spécifiques à la CTM (L.7100-1 et suivants)</li>
    <li>Le droit de l'UE s'applique directement (TFUE art. 349 – régions ultrapériphériques)</li>
    <li>Les régimes fiscaux dérogatoires (TVA 8,5%, octroi de mer) sont fondés sur ces spécificités</li>
    <li>La Martinique bénéficie d'une <strong>clause de sauvegarde européenne</strong> via le statut de RUP</li>
  </ul>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Sources du droit public</h3>
  <div class="fiche-item">Pyramide : Constitution → Traités → Lois → Règlements → Actes locaux</div>
  <div class="fiche-item">Bloc constitutionnalité : Constitution + Préambule 1958 + DDHC + Préambule 1946 + Charte enviro.</div>
  <div class="fiche-item">QPC : contrôle de constitutionnalité a posteriori depuis 2010</div>
  <div class="fiche-item">CGCT : code de référence pour les collectivités territoriales</div>
  <div class="fiche-item">Martinique art. 73 : droit d'adaptation normative + statut RUP (TFUE art. 349)</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Un délibération de l'Assemblée de Martinique peut-elle déroger à une loi nationale ? »</div>
    <div class="jq-r">En principe non. Mais l'art. 73 al. 3 permet à la CTM d'être habilitée par la loi pour adapter localement certains textes. Ce pouvoir d'habilitation est encadré et ne peut porter atteinte aux droits fondamentaux.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Quelle est la valeur juridique d'un règlement de la CTM par rapport à une loi nationale ? »</div>
    <div class="jq-r">Un règlement local (délibération, arrêté) est inférieur à la loi dans la hiérarchie des normes. Il ne peut donc pas l'abroger ni y déroger sauf habilitation législative expresse (art. 73 al. 3 pour les DROM). En pratique, la CTM peut édicter des règlements dans le champ de ses compétences, mais toujours dans le respect des lois nationales.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que la Question Prioritaire de Constitutionnalité (QPC) ? »</div>
    <div class="jq-r">Mécanisme introduit par la révision constitutionnelle de 2008 (en vigueur depuis 2010). Permet à tout justiciable de contester la constitutionnalité d'une disposition législative lors d'un procès en cours. La question est transmise au Conseil constitutionnel via le Conseil d'État ou la Cour de cassation. Si inconstitutionnelle, la loi est abrogée. Démocratise le contrôle de constitutionnalité qui était jusque-là réservé aux institutions politiques.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p2c1" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p1c6" class="chapter-nav-btn">← P1·C6 FPT</a>
  <a href="#" data-page="p2c2" class="chapter-nav-btn next">Ch.2 Institutions françaises →</a>
</div>
</section>`
    },

    // ---- P2C2 : Institutions françaises ----
    { id: 'p2c2', html: `
<section id="p2c2" class="page-section">
<div class="chapter-title">
  <div class="num">P2·C2</div>
  <div><div class="part-tag">Partie 2 – Droit public</div><h1>Les institutions françaises</h1></div>
</div>
<div class="chapter-intro">La Ve République repose sur un régime semi-présidentiel caractérisé par un exécutif bicéphale (Président + Premier ministre) et un Parlement bicaméral. Connaître les institutions est fondamental pour comprendre la production normative qui encadre l'action des collectivités.</div>

<h2 class="section-title">1. Le Président de la République</h2>
<ul>
  <li>Élu au suffrage universel direct pour <strong>5 ans</strong> (quinquennat depuis 2000)</li>
  <li>Pouvoirs : nommer le PM, présider le Conseil des ministres, promulguer les lois, dissoudre l'AN, art. 16 (pouvoirs exceptionnels), négocier traités</li>
  <li>Irresponsabilité politique sauf haute trahison (Cour de Justice de la République)</li>
</ul>

<h2 class="section-title">2. Le Gouvernement</h2>
<ul>
  <li>Le <strong>Premier ministre</strong> (art. 21) : dirige l'action du gouvernement · contre-signe les actes du Président · détient le pouvoir réglementaire général</li>
  <li>Les <strong>ministres</strong> : responsables de leur département ministériel devant le PM et le Parlement</li>
  <li>Responsabilité devant l'Assemblée nationale : motion de censure (art. 49-3)</li>
</ul>

<h2 class="section-title">3. Le Parlement</h2>
<table>
  <thead><tr><th></th><th>Assemblée Nationale</th><th>Sénat</th></tr></thead>
  <tbody>
    <tr><td>Membres</td><td>577 députés</td><td>348 sénateurs</td></tr>
    <tr><td>Élection</td><td>SU direct · 5 ans</td><td>SU indirect · 6 ans (renouvellement partiel)</td></tr>
    <tr><td>Rôle</td><td>Vote la loi · contrôle le gouvernement · priorité en cas de désaccord</td><td>Représente les collectivités territoriales</td></tr>
  </tbody>
</table>

<div class="info-box">
  <div class="info-title">ℹ️ Le Sénat et les collectivités</div>
  Le Sénat est l'assemblée représentant les collectivités territoriales (art. 24 Constitution). Les sénateurs sont élus par les grands électeurs (conseillers municipaux, départementaux, régionaux). Tout projet de loi relatif aux collectivités est soumis en premier au Sénat.
</div>

<h2 class="section-title">4. Le Conseil d'État</h2>
<p>Juridiction administrative suprême et conseiller juridique du gouvernement :</p>
<ul>
  <li>Section du contentieux : juge en premier et dernier ressort certains recours · juge d'appel de cassation</li>
  <li>Section consultative : avis sur projets de loi et décrets</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Représentation de la Martinique au niveau national</h3>
  <ul>
    <li><strong>Députés</strong> : 4 députés élus en Martinique (circonscriptions 1 à 4)</li>
    <li><strong>Sénateurs</strong> : 2 sénateurs représentent la Martinique au Sénat</li>
    <li>Le CNESER des Outre-Mer : instance consultative nationale pour les problématiques ultramarines</li>
    <li>La Délégation aux Outre-Mer à l'Assemblée nationale et au Sénat suit les dossiers martiniquais</li>
  </ul>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Institutions françaises</h3>
  <div class="fiche-item">Président : élu 5 ans SUD · nommer PM · dissoudre AN · art. 16</div>
  <div class="fiche-item">PM : dirige gouvernement · pouvoir réglementaire · responsable devant AN</div>
  <div class="fiche-item">AN : 577 députés SU direct · vote loi · dernier mot en cas de désaccord</div>
  <div class="fiche-item">Sénat : 348 sénateurs SU indirect · représente collectivités</div>
  <div class="fiche-item">Martinique : 4 députés + 2 sénateurs</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Pourquoi les projets de loi sur les collectivités sont-ils soumis en premier au Sénat ? »</div>
    <div class="jq-r">Art. 24 Constitution : le Sénat représente les collectivités territoriales. En tant qu'assemblée représentative des élus locaux (grands électeurs), il doit être consulté en premier sur tout texte les concernant. Cela garantit une prise en compte des réalités locales dans la production législative.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Quel est le rôle du Conseil d'État dans le droit français ? »</div>
    <div class="jq-r">Double rôle : 1. Conseiller juridique du gouvernement (avis sur les projets de loi et d'ordonnance, avis sur les décrets les plus importants) · 2. Juridiction suprême administrative : juge en cassation les décisions des cours administratives d'appel. Il peut aussi être juge de premier et dernier ressort pour certains actes réglementaires nationaux. Ses arrêts (ex : CE Blanco 1873) ont construit le droit administratif français.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Comment le contrôle de légalité exercé par le préfet fonctionne-t-il sur les actes de la CTM ? »</div>
    <div class="jq-r">La CTM transmet ses actes les plus importants (délibérations, marchés publics >40 000 €, décisions individuelles défavorables…) au représentant de l'État (préfet de région) dans un délai de 15 jours après adoption. Le préfet dispose de 2 mois pour saisir le tribunal administratif (déféré préfectoral) s'il estime l'acte illégal. Il peut aussi demander une suspension en référé. Ce contrôle a posteriori (pas a priori) respecte la libre administration des collectivités.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p2c2" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p2c1" class="chapter-nav-btn">← Ch.1 Sources du droit</a>
  <a href="#" data-page="p2c3" class="chapter-nav-btn next">Ch.3 Actes administratifs →</a>
</div>
</section>`
    },

    // ---- P2C3 : Actes administratifs ----
    { id: 'p2c3', html: `
<section id="p2c3" class="page-section">
<div class="chapter-title">
  <div class="num">P2·C3</div>
  <div><div class="part-tag">Partie 2 – Droit public</div><h1>Les actes administratifs</h1></div>
</div>
<div class="chapter-intro">L'attaché territorial est amené à préparer, rédiger et vérifier des actes administratifs au quotidien. Ce chapitre présente les différents types d'actes, leur régime juridique, et les conditions de leur légalité.</div>

<h2 class="section-title">1. Les actes administratifs unilatéraux (AAU)</h2>
<p>Un AAU est un acte juridique créant des droits ou des obligations sans le consentement du destinataire, émanant d'une autorité administrative.</p>
<table>
  <thead><tr><th>Type</th><th>Auteur</th><th>Portée</th></tr></thead>
  <tbody>
    <tr><td>Décret</td><td>Président de la République / PM</td><td>Réglementaire ou individuel</td></tr>
    <tr><td>Arrêté ministériel</td><td>Ministre</td><td>Réglementaire ou individuel</td></tr>
    <tr><td>Arrêté préfectoral</td><td>Préfet</td><td>Territorial</td></tr>
    <tr><td>Délibération</td><td>Conseil municipal / CT</td><td>Décision de l'assemblée</td></tr>
    <tr><td>Arrêté municipal</td><td>Maire</td><td>Acte exécutoire individuel</td></tr>
    <tr><td>Décision</td><td>Autorité administrative</td><td>Acte individuel créateur de droits</td></tr>
  </tbody>
</table>

<h2 class="section-title">2. Les conditions de légalité d'un acte</h2>
<ul>
  <li><strong>Compétence</strong> : l'auteur doit être habilité à prendre l'acte (ratione materiae et ratione loci)</li>
  <li><strong>Procédure</strong> : respect des formalités préalables (consultation, enquête publique…)</li>
  <li><strong>Forme</strong> : motivation obligatoire pour les AAI défavorables (loi du 11 juillet 1979)</li>
  <li><strong>But</strong> : pas de détournement de pouvoir</li>
  <li><strong>Contenu</strong> : conformité aux normes supérieures</li>
</ul>

<h2 class="section-title">3. Les contrats administratifs</h2>
<p>Un contrat est administratif si :</p>
<ul>
  <li>Une des parties est une personne publique <em>ET</em></li>
  <li>Il contient une clause exorbitante du droit commun <em>OU</em> son objet est l'exécution d'un service public</li>
</ul>
<p>Types principaux : <strong>DSP</strong> (Délégation de Service Public) · <strong>Marchés publics</strong> · <strong>Contrats de partenariat</strong> (PPP)</p>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">La légalité des actes de la CTM</h3>
  <p>Les délibérations de l'Assemblée de Martinique et les arrêtés du Conseil Exécutif sont soumis au contrôle de légalité du préfet. Les actes les plus importants doivent être transmis à la préfecture dans les 15 jours suivant leur adoption.</p>
  <p><strong>Actes soumis à transmission obligatoire :</strong> délibérations des assemblées · décisions réglementaires · actes de gestion du personnel · marchés publics de plus de 100 000 € HT.</p>
  <p>Le Tribunal Administratif de Fort-de-France est compétent pour les litiges concernant les actes de la CTM et des communes martiniquaises.</p>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Actes administratifs</h3>
  <div class="fiche-item">AAU : acte unilatéral créant obligations sans consentement du destinataire</div>
  <div class="fiche-item">5 conditions légalité : compétence · procédure · forme · but · contenu</div>
  <div class="fiche-item">Motivation obligatoire pour décisions défavorables (loi 1979)</div>
  <div class="fiche-item">Contrat administratif : personne publique + clause exorbitante ou service public</div>
  <div class="fiche-item">CTM : transmission actes au préfet dans les 15 jours</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Quelles sont les conditions de légalité d'un acte administratif ? »</div>
    <div class="jq-r">5 conditions : compétence de l'auteur · respect des procédures préalables · forme (motivation si décision défavorable) · but conforme (pas de détournement) · contenu conforme aux normes supérieures.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que le principe du contradictoire dans la procédure administrative ? »</div>
    <div class="jq-r">Principe fondamental de l'État de droit : avant toute décision administrative défavorable (sanction, refus, retrait d'autorisation), l'administré doit être informé des griefs et avoir la possibilité de présenter ses observations. Fondé sur la loi du 11 juillet 1979 (motivation) et la loi DCRA 2000 (droits des citoyens dans leurs relations avec l'administration). Garantit les droits de la défense et prévient l'arbitraire.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce qu'un vice de procédure et quelles en sont les conséquences ? »</div>
    <div class="jq-r">Irrégularité dans les étapes préalables à l'adoption d'un acte administratif (consultation obligatoire omise, délai non respecté, procédure contradictoire absente). Conséquence : l'acte peut être annulé par le juge administratif. Depuis la jurisprudence Danthony (CE 2011), tous les vices de procédure n'entraînent plus l'annulation : seuls ceux qui ont privé l'administré d'une garantie ou influencé le sens de la décision sont retenus.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p2c3" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p2c2" class="chapter-nav-btn">← Ch.2 Institutions françaises</a>
  <a href="#" data-page="p2c4" class="chapter-nav-btn next">Ch.4 Responsabilité &amp; contentieux →</a>
</div>
</section>`
    },

    // ---- P2C4 : Responsabilité & Contentieux ----
    { id: 'p2c4', html: `
<section id="p2c4" class="page-section">
<div class="chapter-title">
  <div class="num">P2·C4</div>
  <div><div class="part-tag">Partie 2 – Droit public</div><h1>Responsabilité administrative &amp; contentieux</h1></div>
</div>
<div class="chapter-intro">La responsabilité administrative est un domaine essentiel pour l'attaché territorial. Comprendre comment l'État et les collectivités peuvent être engagés en responsabilité, et comment fonctionne la juridiction administrative, permet d'anticiper et de gérer les risques juridiques.</div>

<h2 class="section-title">1. L'ordre juridictionnel administratif</h2>
<div class="org-chart">
  <div class="org-node">Conseil d'État (Cassation)</div>
  <div class="org-line"></div>
  <div class="org-node secondary">Cours Administratives d'Appel – CAA (8)</div>
  <div class="org-line"></div>
  <div class="org-node tertiary">Tribunaux Administratifs – TA (42 dont Martinique)</div>
</div>

<h2 class="section-title">2. La responsabilité administrative des collectivités</h2>
<p>La responsabilité d'une collectivité est engagée lorsque trois conditions sont réunies :</p>
<ol>
  <li><strong>Une faute</strong> (faute simple ou faute lourde selon le domaine)</li>
  <li><strong>Un préjudice</strong> certain, direct et actuel</li>
  <li><strong>Un lien de causalité</strong> entre la faute et le préjudice</li>
</ol>

<div class="definition-box">
  <div class="def-title">📖 Faute simple vs faute lourde</div>
  <ul>
    <li><strong>Faute simple</strong> : suffit dans la plupart des domaines (voirie, services administratifs)</li>
    <li><strong>Faute lourde</strong> : exigée dans certains domaines complexes (activités médicales des hospices, police judiciaire, activités pénitentiaires)</li>
  </ul>
</div>

<h2 class="section-title">3. Principaux recours administratifs</h2>
<table>
  <thead><tr><th>Recours</th><th>Objet</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>REP (Recours pour Excès de Pouvoir)</td><td>Annulation d'un acte illégal</td><td>Délai 2 mois · pas de représentation obligatoire en 1ère inst.</td></tr>
    <tr><td>Recours de plein contentieux</td><td>Indemnisation + annulation</td><td>Avocat obligatoire</td></tr>
    <tr><td>Référé-suspension</td><td>Suspension d'un acte en urgence</td><td>Doute sérieux + urgence</td></tr>
    <tr><td>Référé-liberté</td><td>Protection d'une liberté fondamentale</td><td>Urgence + atteinte grave</td></tr>
  </tbody>
</table>

<h2 class="section-title">4. La responsabilité personnelle de l'agent</h2>
<p>L'agent territorial peut voir sa responsabilité personnelle engagée en cas de <strong>faute personnelle</strong> (faute détachable du service, intention de nuire, comportement personnel grossier). Dans ce cas, sa responsabilité se substitue à celle de la collectivité.</p>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Le Tribunal Administratif de Fort-de-France</h3>
  <p>Compétent pour :</p>
  <ul>
    <li>Tous les litiges administratifs de première instance en Martinique</li>
    <li>Contrôle de légalité des actes de la CTM et des 34 communes</li>
    <li>Contentieux de la fonction publique territoriale locale</li>
    <li>Contentieux des marchés publics locaux</li>
  </ul>
  <p>L'appel se fait devant la <strong>CAA de Bordeaux</strong> (compétente pour les Antilles).</p>
  <p>La <strong>CRAC</strong> (Chambre Régionale des Comptes) de Martinique contrôle les comptes et la gestion des collectivités martiniquaises.</p>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Responsabilité &amp; contentieux administratif</h3>
  <div class="fiche-item">Ordre administratif : TA → CAA → Conseil d'État</div>
  <div class="fiche-item">Responsabilité : faute + préjudice + lien de causalité</div>
  <div class="fiche-item">REP : annulation · 2 mois · pas d'avocat en 1ère instance</div>
  <div class="fiche-item">Référé-suspension : urgence + doute sérieux de légalité</div>
  <div class="fiche-item">TA Fort-de-France · CAA Bordeaux · CRAC Martinique</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Quelle juridiction est compétente pour annuler un arrêté illégal du maire de Fort-de-France ? »</div>
    <div class="jq-r">Le Tribunal Administratif de Fort-de-France, saisi par voie de recours pour excès de pouvoir (REP) dans un délai de 2 mois. En appel : CAA de Bordeaux. En cassation : Conseil d'État.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Dans quel cas la responsabilité personnelle d'un agent territorial peut-elle être engagée ? »</div>
    <div class="jq-r">En cas de faute personnelle : détachable du service · intention de nuire · comportement personnel grossier. Exemple : un agent qui signe un marché public en faveur de sa société familiale.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p2c4" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p2c3" class="chapter-nav-btn">← Ch.3 Actes administratifs</a>
  <a href="#" data-page="p3c1" class="chapter-nav-btn next">Partie 3 · Ch.1 Budget local →</a>
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
