/* ============================================================
   PARTIE 1 – Chapitres 1 à 6 (injectés dynamiquement)
   ============================================================ */
(function() {
  const container = document.querySelector('.main-content');

  const sections = [
    // ---- P1C1 : Organisation administrative française ----
    { id: 'p1c1', html: `
<section id="p1c1" class="page-section">
<div class="chapter-title">
  <div class="num">P1·C1</div>
  <div><div class="part-tag">Partie 1 – Environnement territorial</div><h1>Organisation administrative française</h1></div>
</div>
<div class="chapter-intro">Comprendre comment la France organise son administration est le point de départ de toute préparation au concours d'Attaché Territorial. Ce chapitre présente la distinction État unitaire / État fédéral, la déconcentration, les institutions centrales et le rôle du préfet.</div>

<h2 class="section-title">1. Un État unitaire et décentralisé</h2>
<p>La France est un <strong>État unitaire</strong> (art. 1 Constitution : « La France est une République indivisible »), mais son organisation administrative est à la fois :</p>
<ul>
  <li><strong>Déconcentrée</strong> : l'État transfère des pouvoirs de décision à ses représentants locaux (préfets, recteurs, DDETS…) tout en restant une seule personne morale.</li>
  <li><strong>Décentralisée</strong> : des collectivités territoriales distinctes (communes, départements, régions, CTM…) disposent de la personnalité morale et s'administrent librement.</li>
</ul>
<div class="info-box">
  <div class="info-title">ℹ️ Formule-clé à retenir</div>
  <strong>Déconcentration</strong> = agir sur place (même personne morale État) · <strong>Décentralisation</strong> = agir en autonomie (autre personne morale). La France combine les deux systèmes.
</div>

<h2 class="section-title">2. L'organisation centrale de l'État</h2>
<table>
  <thead><tr><th>Institution</th><th>Rôle</th></tr></thead>
  <tbody>
    <tr><td>Président de la République</td><td>Élu au suffrage universel direct · chef des armées · nomme le Premier ministre · politique étrangère et défense</td></tr>
    <tr><td>Premier ministre</td><td>Dirige le gouvernement · responsable devant l'Assemblée nationale · coordonne l'action gouvernementale · signe les décrets</td></tr>
    <tr><td>Gouvernement / Ministres</td><td>Chaque ministre dirige un département ministériel · prépare les lois et les décrets · autorité hiérarchique sur l'administration centrale</td></tr>
    <tr><td>Conseil d'État</td><td>Juridiction administrative suprême + conseiller juridique du gouvernement (avis sur les projets de loi)</td></tr>
    <tr><td>Cour des comptes</td><td>Contrôle les comptes et la gestion de l'État et des organismes publics nationaux</td></tr>
  </tbody>
</table>

<h2 class="section-title">3. La déconcentration – Le préfet, pivot du système</h2>
<p>Le <strong>préfet</strong> est le représentant de l'État dans le département (et la région pour le préfet de région). Il est nommé en Conseil des ministres.</p>
<ul>
  <li><strong>Missions du préfet</strong> : contrôle de légalité des actes des collectivités · maintien de l'ordre public · coordination des services déconcentrés de l'État · gestion des crises (ORSEC, plan ORSEC cyclone en Martinique).</li>
  <li><strong>Services déconcentrés</strong> : DDETS (travail, emploi), DEAL (environnement, logement), DAAF (agriculture), DRAJES (sports), Rectorat (éducation)…</li>
  <li><strong>Sous-préfet</strong> : représentant de l'État dans les arrondissements · relais de proximité.</li>
</ul>

<h2 class="section-title">4. La hiérarchie des normes</h2>
<table>
  <thead><tr><th>Niveau</th><th>Acte</th><th>Auteur</th></tr></thead>
  <tbody>
    <tr><td>1 – Constitutionnel</td><td>Constitution · Préambules · DDHC · PFRLR</td><td>Pouvoir constituant</td></tr>
    <tr><td>2 – Conventionnel</td><td>Traités internationaux et droit UE</td><td>Exécutif + Parlement</td></tr>
    <tr><td>3 – Législatif</td><td>Lois organiques, ordinaires, de finances</td><td>Parlement</td></tr>
    <tr><td>4 – Réglementaire</td><td>Décrets, arrêtés, circulaires</td><td>Gouvernement + préfet + exécutif local</td></tr>
    <tr><td>5 – Actes individuels</td><td>Décisions individuelles, contrats</td><td>Administration</td></tr>
  </tbody>
</table>

<h2 class="section-title">5. Le contrôle de légalité</h2>
<p>Depuis la loi de décentralisation du 2 mars 1982 (suppression de la tutelle a priori), les actes des collectivités territoriales sont soumis au <strong>contrôle de légalité a posteriori</strong> exercé par le préfet :</p>
<ul>
  <li>La collectivité transmet ses actes au préfet dans les 15 jours.</li>
  <li>Le préfet dispose de <strong>2 mois</strong> pour déférer l'acte au Tribunal Administratif (TA) s'il estime qu'il est illégal.</li>
  <li>L'acte est <strong>exécutoire dès sa transmission</strong> au préfet (pas d'effet suspensif automatique).</li>
  <li>En parallèle, le <strong>contrôle budgétaire</strong> est exercé conjointement par le préfet et la Chambre Régionale des Comptes.</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Martinique dans l'organisation administrative</h3>
  <p>La Martinique est un <strong>DOM-ROM</strong> (Département et Région d'Outre-Mer) régi par l'article 73 de la Constitution. Depuis 2015, la CTM (Collectivité Territoriale de Martinique) est une collectivité unique qui remplace le Conseil Général et le Conseil Régional.</p>
  <ul>
    <li><strong>Préfet de Martinique</strong> : représentant de l'État · contrôle de légalité des actes CTM · ORSEC cyclone · autorité de police</li>
    <li><strong>Services déconcentrés</strong> : DEAL Martinique (logement, environnement) · DAAF (agriculture) · DRAJES Antilles-Guyane · DREETS</li>
    <li><strong>Spécificité art. 73</strong> : les lois et règlements s'appliquent de plein droit, mais la CTM peut obtenir des habilitations pour adapter la législation à ses spécificités</li>
    <li><strong>CRAC</strong> (Chambre Régionale des Comptes Antilles-Guyane) : contrôle les comptes de la CTM et des communes</li>
  </ul>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Organisation administrative</h3>
  <div class="fiche-item">État unitaire = une seule personne morale · déconcentration ≠ décentralisation</div>
  <div class="fiche-item">Préfet = représentant État · contrôle légalité · ORSEC · services déconcentrés</div>
  <div class="fiche-item">Hiérarchie : Constitution → Traités → Loi → Règlement → Actes individuels</div>
  <div class="fiche-item">Contrôle de légalité a posteriori depuis 1982 · délai 2 mois pour saisir le TA</div>
  <div class="fiche-item">Martinique : DOM-ROM art. 73 · préfet + DEAL + CRAC · habilitations législatives possibles</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Quelle est la différence entre déconcentration et décentralisation ? »</div>
    <div class="jq-r">La déconcentration consiste pour l'État central à déléguer des pouvoirs de décision à ses représentants locaux (préfets, recteurs) qui agissent en son nom : il n'y a qu'une seule personne morale. La décentralisation transfère des compétences à des collectivités territoriales dotées de la personnalité morale et qui s'administrent librement par des conseils élus. La France pratique les deux : déconcentration (préfets) + décentralisation (CTM, communes). La loi du 2 mars 1982 a supprimé la tutelle a priori du préfet sur les collectivités, remplacée par le contrôle de légalité a posteriori.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Quel est le rôle du préfet vis-à-vis de la CTM ? »</div>
    <div class="jq-r">Le préfet de Martinique est le représentant de l'État. Vis-à-vis de la CTM, il exerce le contrôle de légalité a posteriori : la CTM lui transmet ses actes (délibérations, arrêtés) dans les 15 jours et le préfet peut les déférer au Tribunal Administratif dans les 2 mois s'il les estime illégaux. Le préfet exerce également le contrôle budgétaire (avec la CRAC) et veille à l'application des lois sur le territoire. Il coordonne les services déconcentrés de l'État en Martinique (DEAL, DAAF, DREETS…). En matière de sécurité civile, il active le dispositif ORSEC en cas de crise (cyclone, séisme).</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que l'article 73 de la Constitution et quelles sont ses implications pour la Martinique ? »</div>
    <div class="jq-r">L'article 73 de la Constitution régit les départements et régions d'outre-mer (DOM-ROM). Il prévoit que les lois et règlements s'appliquent de plein droit dans ces territoires, mais peuvent faire l'objet d'adaptations tenant aux caractéristiques et contraintes particulières de ces collectivités. Depuis la révision constitutionnelle de 2003 (art. 73 al. 3), la CTM peut être habilitée par le Parlement à fixer elle-même les règles applicables sur son territoire dans un domaine relevant de la loi ou du règlement — c'est le pouvoir normatif dérogatoire. Exemple : habilitation en matière de formation professionnelle, de fiscalité locale (octroi de mer).</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p1c1" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="home" class="chapter-nav-btn">← Accueil</a>
  <a href="#" data-page="p1c2" class="chapter-nav-btn next">Ch.2 La décentralisation →</a>
</div>
</section>`
    },

    // ---- P1C2 : Décentralisation ----
    { id: 'p1c2', html: `
<section id="p1c2" class="page-section">
<div class="chapter-title">
  <div class="num">P1·C2</div>
  <div><div class="part-tag">Partie 1 – Environnement territorial</div><h1>La décentralisation</h1></div>
</div>
<div class="chapter-intro">La décentralisation est l'un des piliers de l'organisation territoriale française. Depuis la loi du 2 mars 1982, trois grandes vagues de réformes ont progressivement renforcé l'autonomie des collectivités. Ce chapitre en analyse les fondements, les actes successifs et les enjeux contemporains.</div>

<h2 class="section-title">1. Les fondements de la décentralisation</h2>
<p>La décentralisation repose sur plusieurs principes constitutionnels et politiques :</p>
<ul>
  <li><strong>Principe de libre administration</strong> (art. 72 Constitution) : les collectivités s'administrent librement par des conseils élus.</li>
  <li><strong>Principe de subsidiarité</strong> : les décisions doivent être prises au niveau le plus proche des citoyens.</li>
  <li><strong>Principe d'autonomie financière</strong> (art. 72-2) : les collectivités ont des ressources propres dont elles peuvent disposer librement.</li>
  <li><strong>Clause de compétence générale</strong> (pour les communes uniquement depuis 2015) : capacité à agir dans tout domaine d'intérêt public local.</li>
</ul>

<div class="definition-box">
  <div class="def-title">📖 Définition – Libre administration</div>
  Garantie constitutionnelle (art. 72) qui interdit à l'État de se substituer aux organes élus des collectivités dans leurs domaines de compétence. Elle ne signifie pas une indépendance totale : les collectivités restent soumises aux lois nationales.
</div>

<h2 class="section-title">2. Les trois actes de la décentralisation</h2>

<div class="timeline">
  <div class="timeline-item">
    <div class="ti-date">ACTE I – Loi Defferre (2 mars 1982)</div>
    <div class="ti-content">Suppression de la tutelle préfectorale a priori · exécutif régional transféré du préfet au président du CR · Département devient collectivité à part entière · Lois de 1983 : transferts de compétences</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">ACTE II – Révision constitutionnelle (28 mars 2003) + Lois Raffarin (2004)</div>
    <div class="ti-content">Inscription de la décentralisation dans la Constitution · notion de "collectivité chef de file" · droit à l'expérimentation · transferts RMI, routes nationales, formation professionnelle</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">ACTE III – Loi MAPTAM (2014) + Loi NOTRe (2015)</div>
    <div class="ti-content">Création des métropoles · suppression clause de compétence générale départements/régions · renforcement rôles région (économie) et département (social) · SRADDET</div>
  </div>
</div>

<h2 class="section-title">3. Le partage des compétences</h2>
<table>
  <thead><tr><th>Collectivité</th><th>Compétences principales</th></tr></thead>
  <tbody>
    <tr><td><strong>Commune</strong></td><td>Urbanisme, voirie communale, écoles primaires, action sociale locale, police municipale, état civil</td></tr>
    <tr><td><strong>Département</strong></td><td>Action sociale (RSA, PMI, MDPH, personnes âgées), collèges, routes départementales, développement rural</td></tr>
    <tr><td><strong>Région</strong></td><td>Développement économique, lycées, formation professionnelle, transports interurbains, SRADDET, innovation</td></tr>
    <tr><td><strong>CTM Martinique</strong></td><td>Toutes les compétences précédentes + compétences renforcées en matière économique, environnementale et touristique</td></tr>
  </tbody>
</table>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">La décentralisation en Martinique</h3>
  <p>La Martinique bénéficie d'un statut dérogatoire au titre de l'article 73 de la Constitution. L'article 73 al. 3-4 permet aux collectivités régies par cet article d'être habilitées à adapter ou à fixer elles-mêmes les règles applicables sur leur territoire dans les matières relevant de la loi ou du règlement.</p>
  <p>La CTM dispose ainsi de <strong>pouvoirs normatifs étendus</strong> dans certains domaines (fiscalité locale, aménagement du territoire, développement économique) sous réserve d'habilitation législative.</p>
  <ul>
    <li>L'Assemblée de Martinique peut émettre des vœux sur l'évolution institutionnelle</li>
    <li>Le PADDM (Plan d'Aménagement et de Développement Durable de la Martinique) remplace le SRADDET</li>
    <li>La CTM gère directement les fonds européens FEDER, FSE+, FEADER</li>
  </ul>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – La décentralisation</h3>
  <div class="fiche-item">Acte I (1982) : fin de la tutelle préfectorale a priori</div>
  <div class="fiche-item">Acte II (2003-2004) : constitutionnalisation + transferts de compétences</div>
  <div class="fiche-item">Acte III (2014-2015) : métropoles + spécialisation compétences</div>
  <div class="fiche-item">Clause de compétence générale : conservée pour les communes seulement</div>
  <div class="fiche-item">Martinique art. 73 : droit d'adaptation normative</div>
  <div class="fiche-item">CTM gère les fonds européens directement</div>
</div>

<div class="key-points">
  <div class="kp-title">✅ Points à retenir</div>
  <ul>
    <li>La loi du 2 mars 1982 = date fondatrice de la décentralisation française</li>
    <li>La loi NOTRe (2015) spécialise les compétences : économie → région ; social → département</li>
    <li>La CTM de Martinique peut adapter les lois et règlements sur habilitation législative</li>
    <li>Le PADDM est l'équivalent martiniquais du SRADDET</li>
  </ul>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Quels sont les trois actes de la décentralisation ? »</div>
    <div class="jq-r">Citer 1982 (Defferre) · 2003-2004 (Raffarin) · 2014-2015 (MAPTAM/NOTRe) avec les avancées clés de chaque acte.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« La Martinique dispose-t-elle de pouvoirs législatifs particuliers ? »</div>
    <div class="jq-r">Art. 73 al. 3-4 : habilitation d'adaptation normative · différent de l'art. 74 (autonomie) · exemples concrets (fiscalité, aménagement).</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p1c2" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p1c1" class="chapter-nav-btn">← Ch.1 Organisation administrative</a>
  <a href="#" data-page="p1c3" class="chapter-nav-btn next">Ch.3 Collectivités territoriales →</a>
</div>
</section>`
    },

    // ---- P1C3 : Collectivités territoriales ----
    { id: 'p1c3', html: `
<section id="p1c3" class="page-section">
<div class="chapter-title">
  <div class="num">P1·C3</div>
  <div><div class="part-tag">Partie 1 – Environnement territorial</div><h1>Les collectivités territoriales</h1></div>
</div>
<div class="chapter-intro">Les collectivités territoriales sont les acteurs de base de l'action publique locale. Ce chapitre en présente les différentes catégories, leur statut juridique, leurs organes et les modalités de leur organisation.</div>

<h2 class="section-title">1. Définition et statut juridique</h2>
<p>Une collectivité territoriale est une <strong>personne morale de droit public</strong> distincte de l'État, dotée de :</p>
<ul>
  <li>La <strong>personnalité juridique</strong> : elle peut contracter, ester en justice, posséder des biens</li>
  <li>Un <strong>budget propre</strong> voté par l'assemblée délibérante</li>
  <li>Des <strong>organes élus</strong> au suffrage universel direct</li>
  <li>Des <strong>compétences propres</strong> fixées par la loi</li>
</ul>

<h2 class="section-title">2. La liste des collectivités (art. 72 Constitution)</h2>
<table>
  <thead><tr><th>Collectivité</th><th>Nombre</th><th>Organe délibérant</th><th>Organe exécutif</th></tr></thead>
  <tbody>
    <tr><td>Communes</td><td>34 946</td><td>Conseil municipal</td><td>Maire</td></tr>
    <tr><td>Départements</td><td>101</td><td>Conseil départemental</td><td>Président du CD</td></tr>
    <tr><td>Régions</td><td>18</td><td>Conseil régional</td><td>Président du CR</td></tr>
    <tr><td>Métropole de Lyon</td><td>1</td><td>Conseil de la Métropole</td><td>Président</td></tr>
    <tr><td>Collectivités d'Outre-Mer (art. 74)</td><td>5</td><td>Variables</td><td>Variables</td></tr>
    <tr><td>CTM Martinique (art. 73)</td><td>1</td><td>Assemblée de Martinique</td><td>Président du Conseil Exécutif</td></tr>
    <tr><td>CTM Guyane (art. 73)</td><td>1</td><td>Assemblée de Guyane</td><td>Président</td></tr>
    <tr><td>Collectivité de Corse (art. 72)</td><td>1</td><td>Assemblée de Corse</td><td>Président du Conseil exécutif</td></tr>
  </tbody>
</table>

<h2 class="section-title">3. Les EPCI – Établissements Publics de Coopération Intercommunale</h2>
<p>Les EPCI permettent la coopération entre communes. Ils ne sont pas des collectivités territoriales (pas d'élection directe au premier tour sur liste propre, pas de compétence générale) mais des établissements publics.</p>
<table>
  <thead><tr><th>Type d'EPCI</th><th>Nombre approx.</th><th>Fiscalité</th><th>Caractéristiques</th></tr></thead>
  <tbody>
    <tr><td>Communauté de communes</td><td>~900</td><td>FPU ou FA</td><td>Zones rurales/semi-rurales</td></tr>
    <tr><td>Communauté d'agglomération</td><td>~220</td><td>FPU</td><td>50 000 hab. avec ville-centre 15 000</td></tr>
    <tr><td>Communauté urbaine</td><td>~13</td><td>FPU</td><td>250 000 hab. minimum</td></tr>
    <tr><td>Métropole</td><td>22</td><td>FPU</td><td>400 000 hab. ou 650 000 (droit commun)</td></tr>
  </tbody>
</table>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Intercommunalités en Martinique</h3>
  <p>La Martinique compte <strong>4 EPCI à fiscalité propre</strong> qui regroupent les 34 communes :</p>
  <ul>
    <li><strong>CACEM</strong> – Communauté d'Agglomération du Centre de la Martinique (Fort-de-France et communes voisines)</li>
    <li><strong>Cap Nord Martinique</strong> – Communauté d'Agglomération (Nord de l'île)</li>
    <li><strong>CAESM</strong> – Communauté d'Agglomération de l'Espace Sud Martinique</li>
    <li><strong>CCNM</strong> – Communauté de Communes du Nord de la Martinique</li>
  </ul>
  <p>Ces EPCI exercent des compétences en matière de développement économique, d'aménagement, de transport et de collecte des déchets en complément de l'action de la CTM.</p>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Collectivités territoriales</h3>
  <div class="fiche-item">Collectivité = personne morale + budget propre + organes élus + compétences propres</div>
  <div class="fiche-item">3 catégories principales : communes · départements · régions</div>
  <div class="fiche-item">Collectivités à statut particulier : CTM Martinique, CTM Guyane, Corse, Métropole de Lyon</div>
  <div class="fiche-item">EPCI ≠ collectivité (pas de personnalité territoriale stricto sensu)</div>
  <div class="fiche-item">Martinique : 4 EPCI + 34 communes sous l'égide de la CTM</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Quelles sont les différentes catégories de collectivités territoriales en France ? »</div>
    <div class="jq-r">Communes (34 946) · Départements (101) · Régions (18) + collectivités à statut particulier (Métropole de Lyon, Corse, CTM Martinique/Guyane, COM art. 74). Citer chiffres clés.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Quels sont les 4 EPCI de la Martinique ? »</div>
    <div class="jq-r">CACEM (Centre) · Cap Nord · CAESM (Sud) · CCNM (Nord) – connaître au moins les 3 premières et leurs périmètres.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p1c3" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p1c2" class="chapter-nav-btn">← Ch.2 Décentralisation</a>
  <a href="#" data-page="p1c4" class="chapter-nav-btn next">Ch.4 Communes &amp; intercommunalités →</a>
</div>
</section>`
    },

    // ---- P1C4 : Communes & Intercommunalités ----
    { id: 'p1c4', html: `
<section id="p1c4" class="page-section">
<div class="chapter-title">
  <div class="num">P1·C4</div>
  <div><div class="part-tag">Partie 1 – Environnement territorial</div><h1>Communes &amp; intercommunalités</h1></div>
</div>
<div class="chapter-intro">La commune est la collectivité de base du système territorial français. Ce chapitre analyse son organisation, ses organes, ses compétences et son articulation avec l'intercommunalité.</div>

<h2 class="section-title">1. La commune – Organisation</h2>
<p>Depuis la loi municipale du 5 avril 1884, la commune est la cellule de base de la démocratie locale. Elle dispose d'un conseil municipal élu au suffrage universel direct tous les 6 ans.</p>

<table>
  <thead><tr><th>Organe</th><th>Composition</th><th>Rôle</th></tr></thead>
  <tbody>
    <tr><td>Conseil municipal</td><td>7 à 69 membres selon population</td><td>Délibère sur toutes les affaires communales · vote le budget · crée les services</td></tr>
    <tr><td>Maire</td><td>Élu par le conseil municipal</td><td>Exécute les délibérations · représente la commune · pouvoir de police · état civil · agent de l'État</td></tr>
    <tr><td>Adjoints</td><td>1er adjoint + autres selon taille</td><td>Assistent le maire, délégations de signature</td></tr>
  </tbody>
</table>

<div class="info-box">
  <div class="info-title">ℹ️ Double casquette du Maire</div>
  Le maire est à la fois <strong>chef de l'exécutif communal</strong> (organe de la collectivité) ET <strong>agent de l'État</strong> pour certaines missions (état civil, publication des lois, police administrative générale). Dans ce second rôle, il est placé sous l'autorité du préfet.
</div>

<h2 class="section-title">2. Compétences communales</h2>
<ul>
  <li><strong>Urbanisme</strong> : PLU, permis de construire, déclaration préalable</li>
  <li><strong>Voirie</strong> : voirie communale, stationnement</li>
  <li><strong>Enseignement</strong> : écoles maternelles et élémentaires (bâtiments)</li>
  <li><strong>Action sociale</strong> : CCAS (Centre Communal d'Action Sociale)</li>
  <li><strong>Eau et assainissement</strong> : souvent transférées à l'EPCI</li>
  <li><strong>Équipements culturels et sportifs</strong></li>
  <li><strong>Police municipale</strong> : arrêtés du maire, agents de PM</li>
</ul>

<h2 class="section-title">3. L'intercommunalité à fiscalité propre</h2>
<p>La loi du 7 août 2015 (NOTRe) a imposé la couverture intégrale du territoire par des EPCI à fiscalité propre. Cette réforme a réduit de moitié le nombre d'EPCI, passant d'environ 2 000 à moins de 1 300.</p>

<div class="definition-box">
  <div class="def-title">📖 FPU – Fiscalité Professionnelle Unique</div>
  Régime fiscal dans lequel l'EPCI perçoit directement la cotisation foncière des entreprises (CFE) et la cotisation sur la valeur ajoutée (CVAE) à la place des communes membres. Dominant pour les CA, CU et métropoles.
</div>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Les communes et intercommunalités de Martinique</h3>
  <p>La Martinique compte <strong>34 communes</strong>, réparties en 4 arrondissements (Le Marin, Le Robert, Saint-Pierre, Fort-de-France). Les plus peuplées :</p>
  <ul>
    <li>Fort-de-France : ~76 000 hab. (chef-lieu)</li>
    <li>Le Lamentin : ~42 000 hab. (2ème ville, principale zone industrielle)</li>
    <li>Saint-Joseph : ~18 000 hab.</li>
    <li>Schoelcher : ~20 000 hab.</li>
    <li>Le Robert : ~23 000 hab.</li>
  </ul>
  <p><strong>Spécificité :</strong> Les communes martiniquaises ont transféré de nombreuses compétences à la CTM (en lieu et place d'une région) et aux 4 EPCI. L'article L.7222-1 et suivants du CGCT organise ce triptyque CTM/EPCI/Communes.</p>
</div>

<div class="cas-pratique">
  <div class="cas-header">🏝️ Cas pratique – Martinique</div>
  <div class="cas-body">
    <div class="cas-context"><strong>Contexte :</strong> Le maire de Saint-Joseph souhaite créer un service de transport à la demande (TAD) pour desservir les zones rurales isolées de la commune. Or, la compétence transport relève de la CACEM (EPCI dont Saint-Joseph est membre).</div>
    <div class="cas-mission">🎯 Mission : Quelle procédure suivre pour mettre en place ce service ? Quelles solutions existent ?</div>
    <button class="cas-corrige-toggle">▼ Voir le corrigé</button>
    <div class="cas-corrige">
      <p><strong>Réponse :</strong> La commune ne peut pas créer seule un service de transport car cette compétence est exercée par la CACEM. Plusieurs options :</p>
      <ol>
        <li><strong>Proposition à l'EPCI</strong> : le maire peut saisir le conseil de communauté pour que la CACEM crée elle-même le TAD. C'est la voie normale.</li>
        <li><strong>Convention de délégation</strong> : la CACEM peut déléguer à la commune la gestion du TAD sur son périmètre (art. L.5215-27 CGCT).</li>
        <li><strong>Subsidiarité</strong> : si l'EPCI ne répond pas à un besoin local identifié, la commune peut agir à titre subsidiaire dans la limite de ses ressources propres, mais c'est risqué juridiquement (risque de double emploi).</li>
      </ol>
      <p><strong>Conseil RH :</strong> L'attaché territorial doit préparer un rapport présentant les 3 options avec leurs avantages/inconvénients pour éclairer la décision du maire.</p>
    </div>
  </div>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Communes &amp; intercommunalités</h3>
  <div class="fiche-item">Commune = collectivité de base depuis 1884 · conseil municipal élu 6 ans</div>
  <div class="fiche-item">Maire = 2 rôles : exécutif communal + agent de l'État</div>
  <div class="fiche-item">Compétences : urbanisme · voirie · écoles · CCAS · police municipale</div>
  <div class="fiche-item">EPCI à FP : couverture totale du territoire depuis NOTRe 2015</div>
  <div class="fiche-item">Martinique : 34 communes · 4 EPCI (CACEM, Cap Nord, CAESM, CCNM)</div>
  <div class="fiche-item">Fort-de-France = chef-lieu · Le Lamentin = 2ème ville</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Quels sont les compétences clés d'un EPCI à fiscalité propre ? »</div>
    <div class="jq-r">Développement économique · aménagement du territoire · transport · habitat · déchets · eau (si transféré) · GEMAPI. Rappeler que les compétences varient selon la nature de l'EPCI.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Fort-de-France est-elle dans la CACEM ou gère-t-elle seule ses transports ? »</div>
    <div class="jq-r">Fort-de-France est le centre de la CACEM qui exerce la compétence transport. La TCSP (transport commun en site propre) est géré par l'EPCI.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p1c4" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p1c3" class="chapter-nav-btn">← Ch.3 Collectivités territoriales</a>
  <a href="#" data-page="p1c5" class="chapter-nav-btn next">Ch.5 Départements &amp; régions →</a>
</div>
</section>`
    },

    // ---- P1C5 : Départements & Régions ----
    { id: 'p1c5', html: `
<section id="p1c5" class="page-section">
<div class="chapter-title">
  <div class="num">P1·C5</div>
  <div><div class="part-tag">Partie 1 – Environnement territorial</div><h1>Départements &amp; régions</h1></div>
</div>
<div class="chapter-intro">Depuis la loi NOTRe de 2015, la répartition des compétences entre départements et régions a été clarifiée. Ce chapitre analyse leurs organisations, compétences respectives et leur articulation avec la CTM en Martinique.</div>

<h2 class="section-title">1. Le département</h2>
<p>Créé en 1790, le département est la collectivité de l'action sociale par excellence depuis la loi NOTRe.</p>
<ul>
  <li>Organe délibérant : <strong>Conseil départemental</strong> (élus en binômes paritaires par canton)</li>
  <li>Organe exécutif : <strong>Président du Conseil départemental</strong></li>
  <li>Compétences principales : RSA · enfance (ASE, PMI) · personnes âgées (APA) · handicap (MDPH) · collèges · routes départementales · archives départementales</li>
</ul>

<h2 class="section-title">2. La région</h2>
<p>La loi NOTRe a fait de la région le chef de file du développement économique et de l'aménagement du territoire.</p>
<ul>
  <li>Organe délibérant : <strong>Conseil régional</strong> (élection à la proportionnelle tous les 6 ans)</li>
  <li>Organe exécutif : <strong>Président du Conseil régional</strong></li>
  <li>Compétences : SRADDET · lycées · formation professionnelle · développement économique · transports interurbains et TER · fonds européens</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">La CTM : fusion département + région</h3>
  <p>En Martinique, la CTM exerce simultanément les compétences du département ET de la région. Son organisation :</p>
  <table>
    <thead><tr><th>Organe CTM</th><th>Rôle</th><th>Composition</th></tr></thead>
    <tbody>
      <tr><td>Assemblée de Martinique</td><td>Organe délibérant (= conseil régional + conseil départemental)</td><td>51 conseillers élus au SU direct</td></tr>
      <tr><td>Conseil Exécutif de Martinique</td><td>Organe exécutif collégial</td><td>Président + 8 conseillers exécutifs</td></tr>
      <tr><td>Président de l'Assemblée</td><td>Dirige les travaux de l'Assemblée</td><td>Élu par l'Assemblée</td></tr>
      <tr><td>Conseil Économique, Social, Environnemental, de la Culture et de l'Éducation (CESECEM)</td><td>Consultation obligatoire sur certains projets</td><td>Representatives socio-économiques</td></tr>
    </tbody>
  </table>
  <p><strong>Budget CTM 2023 :</strong> environ 1,6 milliard d'euros (fonctionnement + investissement)</p>
  <p><strong>Président du Conseil Exécutif actuel :</strong> Serge Letchimy (depuis 2021)</p>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Département / Région / CTM</h3>
  <div class="fiche-item">Département = action sociale (RSA, ASE, MDPH, APA) + collèges + routes</div>
  <div class="fiche-item">Région = économie + lycées + formation pro + SRADDET + fonds européens</div>
  <div class="fiche-item">CTM = département + région fusionnés · Assemblée 51 membres + Conseil Exécutif</div>
  <div class="fiche-item">PADDM remplace le SRADDET en Martinique</div>
  <div class="fiche-item">CTM gère directement les fonds FEDER/FSE+/FEADER</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Comment fonctionne la CTM ? Quelles sont ses instances ? »</div>
    <div class="jq-r">Assemblée de Martinique (51 conseillers) · Conseil Exécutif (Président + 8 membres) · Président de l'Assemblée · CESECEM consultatif. Insister sur le caractère collégial de l'exécutif, différent d'une région ordinaire.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p1c5" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p1c4" class="chapter-nav-btn">← Ch.4 Communes &amp; EPCI</a>
  <a href="#" data-page="p1c6" class="chapter-nav-btn next">Ch.6 La Fonction Publique Territoriale →</a>
</div>
</section>`
    },

    // ---- P1C6 : FPT ----
    { id: 'p1c6', html: `
<section id="p1c6" class="page-section">
<div class="chapter-title">
  <div class="num">P1·C6</div>
  <div><div class="part-tag">Partie 1 – Environnement territorial</div><h1>La Fonction Publique Territoriale (FPT)</h1></div>
</div>
<div class="chapter-intro">La FPT est l'un des trois versants de la Fonction Publique française. Elle regroupe les agents des collectivités territoriales et des établissements publics locaux. En tant que futur Attaché Territorial, vous en serez un acteur clé.</div>

<h2 class="section-title">1. Les trois versants de la Fonction Publique</h2>
<table>
  <thead><tr><th>Versant</th><th>Agents</th><th>Nombre approx.</th></tr></thead>
  <tbody>
    <tr><td>Fonction Publique d'État (FPE)</td><td>Ministères, établissements nationaux</td><td>2,5 millions</td></tr>
    <tr><td><strong>Fonction Publique Territoriale (FPT)</strong></td><td>Collectivités, EPCI, EPA locaux</td><td><strong>1,9 million</strong></td></tr>
    <tr><td>Fonction Publique Hospitalière (FPH)</td><td>Hôpitaux, EHPAD publics</td><td>1,2 million</td></tr>
  </tbody>
</table>

<h2 class="section-title">2. Le cadre statutaire – Loi du 26 janvier 1984</h2>
<p>La FPT est régie par la <strong>loi n°84-53 du 26 janvier 1984</strong> portant dispositions statutaires relatives à la FPT, complétée par le <strong>Code Général de la Fonction Publique (CGFP)</strong> entré en vigueur le 1er mars 2022.</p>

<div class="definition-box">
  <div class="def-title">📖 Cadre d'emplois</div>
  Groupe de fonctionnaires relevant du même statut particulier, soumis aux mêmes conditions de recrutement et d'avancement. Équivalent du "corps" dans la FPE. Ex : cadre d'emplois des attachés territoriaux.
</div>

<h2 class="section-title">3. Le cadre d'emplois des Attachés Territoriaux (votre cadre !)</h2>
<ul>
  <li>Catégorie : <strong>A</strong></li>
  <li>Filière : <strong>Administrative</strong></li>
  <li>Grades : Attaché (1er grade) · Attaché principal (2e grade)</li>
  <li>Missions : Direction d'un service · Chef de projet · Conseil juridique · Ressources humaines · Budget · Communication</li>
  <li>Recrutement concours : externe (Bac+3 minimum) · interne · 3e voie</li>
  <li>Corps de débouché : Directeur territorial (cat. A+)</li>
</ul>

<h2 class="section-title">4. Les catégories de la FPT</h2>
<table>
  <thead><tr><th>Catégorie</th><th>Niveau requis</th><th>Exemples de cadres d'emplois</th></tr></thead>
  <tbody>
    <tr><td><strong>A+</strong></td><td>Grandes écoles</td><td>Administrateur territorial, Ingénieur en chef</td></tr>
    <tr><td><strong>A</strong></td><td>Bac+3 minimum</td><td>Attaché territorial, Ingénieur territorial, Bibliothécaire</td></tr>
    <tr><td><strong>B</strong></td><td>Bac</td><td>Rédacteur territorial, Technicien territorial</td></tr>
    <tr><td><strong>C</strong></td><td>Sans diplôme requis</td><td>Adjoint administratif, Agent de maîtrise</td></tr>
  </tbody>
</table>

<h2 class="section-title">5. Les acteurs de gestion de la FPT</h2>
<ul>
  <li><strong>CNFPT</strong> (Centre National de la Fonction Publique Territoriale) : formation continue des agents territoriaux, préparation aux concours</li>
  <li><strong>CDG</strong> (Centres de Gestion) : gestion des concours, bourse de l'emploi, assistance aux petites collectivités. En Martinique : <strong>CDG 972</strong></li>
  <li><strong>L'autorité territoriale</strong> (Président CTM, Maire, Président CD…) : pouvoir de nomination et de gestion</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">La FPT en Martinique</h3>
  <ul>
    <li>Environ <strong>12 000 agents territoriaux</strong> en Martinique (CTM + communes + EPCI + EPA)</li>
    <li>La CTM emploie à elle seule environ <strong>5 500 agents</strong></li>
    <li>Le <strong>CDG 972</strong> organise les concours territoriaux pour la Martinique</li>
    <li>Le <strong>CNFPT Antilles-Guyane</strong> gère la formation des agents (siège à Pointe-à-Pitre + antenne à Fort-de-France)</li>
    <li>Enjeu RH local : forte pyramide des âges vieillissante · besoin de recrutements et de renouvellement des compétences</li>
    <li>Taux d'absentéisme supérieur à la moyenne nationale : défi de management</li>
  </ul>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – La FPT</h3>
  <div class="fiche-item">FPT = 1,9 million d'agents · 2ème versant de la FP française</div>
  <div class="fiche-item">Loi 84-53 du 26 janv. 1984 · CGFP depuis mars 2022</div>
  <div class="fiche-item">Attaché territorial : cat. A · filière administrative · Bac+3 minimum</div>
  <div class="fiche-item">Acteurs : CNFPT (formation) · CDG (concours + gestion) · autorité territoriale</div>
  <div class="fiche-item">Martinique : ~12 000 agents · CDG 972 · CNFPT Antilles-Guyane</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Quelle est la différence entre le CNFPT et le CDG ? »</div>
    <div class="jq-r">CDG = organisme paritaire local gérant les concours et la mobilité · CNFPT = établissement national gérant la formation continue et les concours A+. Les deux sont complémentaires.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« En tant que futur Attaché Territorial, quelle sera votre place dans la hiérarchie ? »</div>
    <div class="jq-r">Catégorie A : niveau d'encadrement intermédiaire/supérieur · supervise les agents B et C · rend compte à la direction générale · conçoit et met en oeuvre les politiques publiques dans son domaine de compétence.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p1c6" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p1c5" class="chapter-nav-btn">← Ch.5 Départements &amp; régions</a>
  <a href="#" data-page="p2c1" class="chapter-nav-btn next">Partie 2 · Ch.1 Sources du droit →</a>
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
