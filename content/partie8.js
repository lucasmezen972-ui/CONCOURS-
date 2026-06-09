/* ============================================================
   PARTIE 8 – Martinique & Outre-Mer (3 chapitres)
   ============================================================ */
(function() {
  const container = document.querySelector('.main-content');
  const sections = [

    { id: 'p8c1', html: `
<section id="p8c1" class="page-section">
<div class="chapter-title">
  <div class="num">P8·C1</div>
  <div><div class="part-tag">Partie 8 – Martinique &amp; Outre-Mer</div><h1>Histoire institutionnelle &amp; organisation de la CTM</h1></div>
</div>
<div class="chapter-intro">La Martinique a une histoire institutionnelle riche et spécifique. Ce chapitre retrace l'évolution du statut martiniquais, de la départementalisation à la création de la CTM, et présente en détail l'organisation et le fonctionnement de la Collectivité Territoriale de Martinique.</div>

<h2 class="section-title">1. Histoire institutionnelle de la Martinique</h2>
<div class="timeline">
  <div class="timeline-item">
    <div class="ti-date">1635</div>
    <div class="ti-content">Colonisation française de la Martinique par Belain d'Esnambuc. Début de la culture de la canne à sucre et de l'esclavage.</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">1848</div>
    <div class="ti-content">Abolition de l'esclavage par Victor Schœlcher (décret du 27 avril 1848). Fondation de la société martiniquaise moderne.</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">19 mars 1946</div>
    <div class="ti-content">Loi de départementalisation (loi n°46-451) portée par Aimé Césaire et Gaston Monnerville. La Martinique devient un département d'outre-mer (DOM) au même titre que la Guadeloupe, la Guyane et La Réunion.</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">1974</div>
    <div class="ti-content">La Martinique devient également une région. Bicéphalisme institutionnel : Conseil Général (département) + Conseil Régional (région).</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">2003</div>
    <div class="ti-content">Révision constitutionnelle (art. 73 renforcé) : possibilité d'habilitation normative pour les DROM. Référendum Martinique : NON à l'autonomie renforcée (50,5%).</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">24 janvier 2010</div>
    <div class="ti-content">Référendum sur la création d'une collectivité unique : OUI à 68,3%. Les Martiniquais approuvent la fusion Conseil Général + Conseil Régional.</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">27 juillet 2011</div>
    <div class="ti-content">Loi organique créant la CTM (Collectivité Territoriale de Martinique) et la collectivité de Guyane.</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">22 décembre 2015</div>
    <div class="ti-content">Entrée en vigueur effective de la CTM après les premières élections territoriales. Alfred Marie-Jeanne (PPM) devient premier Président de l'Assemblée de Martinique. Serge Letchimy (PPM) devient premier Président du Conseil Exécutif.</div>
  </div>
  <div class="timeline-item">
    <div class="ti-date">Décembre 2021</div>
    <div class="ti-content">Réélection de Serge Letchimy à la présidence du Conseil Exécutif. Claude Lise élu Président de l'Assemblée de Martinique.</div>
  </div>
</div>

<h2 class="section-title">2. Organisation institutionnelle de la CTM</h2>
<table>
  <thead><tr><th>Organe</th><th>Composition</th><th>Rôle &amp; pouvoirs</th></tr></thead>
  <tbody>
    <tr><td>Assemblée de Martinique</td><td>51 conseillers territoriaux élus au SU direct (scrutin de liste proportionnel avec prime majoritaire)</td><td>Organe délibérant · vote le budget · délibère sur les affaires de la CTM · contrôle le Conseil Exécutif</td></tr>
    <tr><td>Conseil Exécutif de Martinique</td><td>Président + 8 conseillers exécutifs · élus par l'Assemblée</td><td>Organe exécutif collégial · prépare et exécute les délibérations · dirige l'administration · ordonnateur</td></tr>
    <tr><td>Président de l'Assemblée</td><td>Élu par l'Assemblée</td><td>Dirige les séances · représente l'Assemblée</td></tr>
    <tr><td>CESECEM</td><td>Représentants des organisations économiques, sociales, environnementales, culturelles et éducatives</td><td>Consultation obligatoire sur certains projets · avis consultatifs</td></tr>
    <tr><td>Conférence territoriale de l'action publique (CTAP)</td><td>CTM + EPCI + communes + État</td><td>Coordination des politiques publiques locales</td></tr>
  </tbody>
</table>

<h2 class="section-title">3. Les directions de la CTM</h2>
<p>La CTM est organisée en directions opérationnelles sous l'autorité du Directeur Général des Services (DGS) :</p>
<ul>
  <li>Direction des Ressources Humaines (DRH)</li>
  <li>Direction des Finances et du Contrôle de Gestion</li>
  <li>Direction du Développement Économique (DDE)</li>
  <li>Direction de l'Environnement et du Développement Durable (DEDD)</li>
  <li>Direction de l'Éducation, de la Jeunesse et des Sports (DEJS)</li>
  <li>Direction de l'Action Sociale (DAS)</li>
  <li>Direction des Routes et des Infrastructures (DRI)</li>
  <li>Direction du Tourisme</li>
  <li>Direction de l'Agriculture et de la Ruralité (DAR)</li>
  <li>Direction des Risques Majeurs (DRM)</li>
  <li>Direction du Numérique et des Systèmes d'Information</li>
</ul>

<h2 class="section-title">4. Les compétences de la CTM</h2>
<p>La CTM exerce l'ensemble des compétences d'un département ET d'une région, plus des compétences spécifiques :</p>
<table>
  <thead><tr><th>Domaine</th><th>Compétences clés</th></tr></thead>
  <tbody>
    <tr><td>Action sociale</td><td>RSA · APA · PMI · ASE · MDPH · personnes handicapées</td></tr>
    <tr><td>Éducation</td><td>Collèges + Lycées (bâtiments, équipements)</td></tr>
    <tr><td>Développement économique</td><td>SRDEII · aides aux entreprises · tourisme · agriculture · pêche</td></tr>
    <tr><td>Aménagement</td><td>PADDM · foncier · logement · SCoT compétence propre</td></tr>
    <tr><td>Environnement</td><td>Biodiversité · gestion des déchets · eau · GEMAPI · risques naturels</td></tr>
    <tr><td>Transport</td><td>Transports interurbains · routes · mobilité</td></tr>
    <tr><td>Fonds européens</td><td>Autorité de gestion FEDER · FSE+ · FEADER</td></tr>
    <tr><td>Coopération régionale</td><td>Relations avec les pays de la Caraïbe · OECO · CARICOM</td></tr>
  </tbody>
</table>

<div class="fiche-synthese">
  <h3>📋 FICHE – Histoire &amp; organisation CTM</h3>
  <div class="fiche-item">Départementalisation : 19 mars 1946 (loi portée par Aimé Césaire)</div>
  <div class="fiche-item">Référendum CTM : 24 janv. 2010 (OUI 68,3%) · Loi : 27 juil. 2011</div>
  <div class="fiche-item">CTM opérationnelle : 22 décembre 2015</div>
  <div class="fiche-item">Organes : Assemblée (51 cons.) · Conseil Exécutif (Pdt + 8) · CESECEM</div>
  <div class="fiche-item">Président actuel Conseil Exécutif : Serge Letchimy (depuis 2015, réélu 2021)</div>
  <div class="fiche-item">Compétences : dept + région + fonds EU + coopération caribéenne</div>
</div>

<button class="mark-done-btn" data-chapter="p8c1" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p7c3" class="chapter-nav-btn">← P7·C3 Attractivité</a>
  <a href="#" data-page="p8c2" class="chapter-nav-btn next">Ch.2 Développement économique →</a>
</div>
</section>`
    },

    { id: 'p8c2', html: `
<section id="p8c2" class="page-section">
<div class="chapter-title">
  <div class="num">P8·C2</div>
  <div><div class="part-tag">Partie 8 – Martinique &amp; Outre-Mer</div><h1>Développement économique &amp; enjeux martiniquais</h1></div>
</div>
<div class="chapter-intro">La Martinique présente un profil économique atypique : territoire insulaire riche de ressources naturelles et d'une identité culturelle forte, mais marqué par des déséquilibres structurels. Ce chapitre dresse le portrait économique de l'île et ses enjeux de développement.</div>

<h2 class="section-title">1. Portrait économique de la Martinique</h2>
<table>
  <thead><tr><th>Indicateur</th><th>Valeur</th><th>Contexte</th></tr></thead>
  <tbody>
    <tr><td>PIB/habitant</td><td>~22 000 € (2022)</td><td>72% de la moyenne nationale · 4× supérieur à la Caraïbe</td></tr>
    <tr><td>Population</td><td>~360 000 hab.</td><td>Déclin démographique depuis 2010</td></tr>
    <tr><td>Superficie</td><td>1 128 km²</td><td>Territoire insulaire · relief montagneux</td></tr>
    <tr><td>Taux de chômage</td><td>~17%</td><td>2,3× la moyenne nationale</td></tr>
    <tr><td>Taux de pauvreté</td><td>~30%</td><td>3× la moyenne nationale</td></tr>
    <tr><td>Solde migratoire</td><td>Négatif</td><td>Émigration nette des jeunes actifs</td></tr>
  </tbody>
</table>

<h2 class="section-title">2. Les secteurs économiques clés</h2>

<h3 class="sub-title">Tourisme</h3>
<ul>
  <li>1er poste d'exportation de services · ~1,5 million de visiteurs par an</li>
  <li>Hébergement touristique · croisières · tourisme de randonnée et d'écotourisme</li>
  <li>Enjeu : montée en gamme · étalement de la saison · tourisme durable · emploi local</li>
  <li>Organismes : CTM (compétence tourisme) · Comité Martiniquais du Tourisme (CMT)</li>
</ul>

<h3 class="sub-title">Agriculture</h3>
<ul>
  <li><strong>Banane</strong> : principal produit d'exportation physique · ~200 000 tonnes/an · marché européen · enjeu de compétitivité</li>
  <li><strong>Canne à sucre</strong> : base du rhum agricole AOC Martinique · produit d'excellence mondiale</li>
  <li><strong>Maraîchage</strong> : développement de la production locale pour réduire les importations alimentaires</li>
  <li>Défi du chlordécone : contamination des sols · restrictions agricoles dans les zones impactées</li>
</ul>

<h3 class="sub-title">Industrie et commerce</h3>
<ul>
  <li>Zone industrielle du Lamentin : principale concentration d'activités productives</li>
  <li>Distilleries de rhum (Clément, Trois-Rivières, Saint-James, JM, HSE...)</li>
  <li>BTP : secteur important lié aux programmes d'investissement public</li>
  <li>Dépendance aux importations : plus de 80% des produits consommés sont importés</li>
</ul>

<h2 class="section-title">3. Les enjeux de développement</h2>
<ul>
  <li><strong>Transition énergétique</strong> : 90% dépendance aux fossiles → PEM 100% EnR 2030</li>
  <li><strong>Eau potable</strong> : réseau vétuste · pertes &gt;50% · gouvernance complexe (SMEAM)</li>
  <li><strong>Logement</strong> : pénurie de logements accessibles · habitat insalubre · zones sismiques</li>
  <li><strong>Mobilité</strong> : dépendance à la voiture individuelle · congestion Fort-de-France · projet TCSP</li>
  <li><strong>Gestion des déchets</strong> : taux de valorisation faible · incinérateur du Robert (ODYSSI)</li>
  <li><strong>Biodiversité</strong> : forêt tropicale (Parc Naturel Régional de la Martinique) · récifs coralliens · mangroves</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Chiffres clés à connaître pour le jury</h3>
  <ul>
    <li>34 communes · 4 EPCI · 1 128 km²</li>
    <li>Population ~360 000 hab. (déclin démographique)</li>
    <li>Budget CTM : ~1,6 milliard €</li>
    <li>Fonds européens 2021-2027 : ~800 millions € (FEDER + FSE+ + FEADER)</li>
    <li>Taux chômage ~17% · jeunes ~40%</li>
    <li>Tourisme : ~1,5 M visiteurs/an</li>
    <li>Banane : ~200 000 tonnes/an exportées</li>
    <li>Pertes eau en réseau : &gt;50%</li>
    <li>Énergie renouvelable actuelle : ~15% · Objectif 2030 : 100%</li>
    <li>Classement UNESCO Montagne Pelée : 2023</li>
  </ul>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Économie martiniquaise</h3>
  <div class="fiche-item">PIB/hab. ~22 000 € · 72% moyenne nationale · 360 000 hab.</div>
  <div class="fiche-item">Chômage 17% · jeunes 40% · pauvreté 30%</div>
  <div class="fiche-item">Tourisme : 1er service export · ~1,5M visiteurs</div>
  <div class="fiche-item">Agriculture : banane (200K t.) · rhum AOC · maraîchage</div>
  <div class="fiche-item">Enjeux : énergie · eau · logement · mobilité · déchets · biodiversité</div>
</div>

<button class="mark-done-btn" data-chapter="p8c2" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p8c1" class="chapter-nav-btn">← Ch.1 Histoire &amp; organisation</a>
  <a href="#" data-page="p8c3" class="chapter-nav-btn next">Ch.3 Réussir les questions jury sur la Martinique →</a>
</div>
</section>`
    },

    { id: 'p8c3', html: `
<section id="p8c3" class="page-section">
<div class="chapter-title">
  <div class="num">P8·C3</div>
  <div><div class="part-tag">Partie 8 – Martinique &amp; Outre-Mer</div>
  <h1>🎤 Réussir les questions du jury sur la Martinique</h1></div>
</div>
<div class="chapter-intro">Ce chapitre est votre passeport pour briller face au jury. Il compile les 25 questions les plus posées sur la Martinique, avec des réponses modèles précises, des chiffres clés et des formulations adaptées au registre d'un futur Attaché Territorial.</div>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">LES CHIFFRES CLÉS À MÉMORISER</h3>
  <table>
    <thead><tr><th>Thème</th><th>Chiffre / Donnée</th></tr></thead>
    <tbody>
      <tr><td>Population</td><td>~360 000 habitants (déclin depuis 2010)</td></tr>
      <tr><td>Superficie</td><td>1 128 km²</td></tr>
      <tr><td>Communes</td><td>34 communes · 4 EPCI</td></tr>
      <tr><td>Budget CTM</td><td>~1,6 milliard €/an</td></tr>
      <tr><td>Agents CTM</td><td>~5 500 agents directs</td></tr>
      <tr><td>Fonds EU 2021-2027</td><td>~800 millions €</td></tr>
      <tr><td>Chômage</td><td>~17% (jeunes : ~40%)</td></tr>
      <tr><td>Pauvreté</td><td>~30% de la population</td></tr>
      <tr><td>Tourisme</td><td>~1,5 million de visiteurs/an</td></tr>
      <tr><td>Banane exportée</td><td>~200 000 tonnes/an</td></tr>
      <tr><td>Énergie renouvelable</td><td>~15% (objectif 100% en 2030)</td></tr>
      <tr><td>Pertes eau réseau</td><td>&gt;50%</td></tr>
      <tr><td>Octroi de mer</td><td>~200 millions €/an</td></tr>
      <tr><td>Créé CTM</td><td>Loi 27 juillet 2011 · en vigueur 22 décembre 2015</td></tr>
    </tbody>
  </table>
</div>

<h2 class="section-title">Questions institutionnelles</h2>
<div class="jury-questions">
  <div class="jq-title">🎤 25 Questions de jury sur la Martinique</div>

  <div class="jq-item">
    <div class="jq-q">1. « Présentez l'organisation institutionnelle de la Martinique en 2 minutes. »</div>
    <div class="jq-r">La Martinique est une collectivité territoriale unique (CTM) régie par l'article 73 de la Constitution. Créée par la loi du 27 juillet 2011, elle est opérationnelle depuis le 22 décembre 2015 et regroupe les compétences d'un département ET d'une région. Elle est composée de l'Assemblée de Martinique (51 conseillers élus) et du Conseil Exécutif (Président + 8 membres). La CTM couvre 34 communes organisées en 4 EPCI (CACEM, Cap Nord, CAESM, CCNM). Le préfet représente l'État et exerce le contrôle de légalité des actes de la CTM.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">2. « Pourquoi les Martiniquais ont-ils voté OUI à la CTM en 2010 ? »</div>
    <div class="jq-r">Lors du référendum du 24 janvier 2010, 68,3% des Martiniquais ont approuvé la fusion du Conseil Général et du Conseil Régional en une CTM. Les raisons principales : rationaliser l'action publique (éviter les doublons entre les deux assemblées) · réduire les coûts de fonctionnement · clarifier les compétences · renforcer la capacité d'action pour le développement. Le vote de 2003 (NON à l'autonomie) avait montré que les Martiniquais voulaient rester dans le droit commun de l'art. 73 tout en simplifiant leurs institutions.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">3. « Quelle est la différence entre l'Assemblée de Martinique et le Conseil Exécutif ? »</div>
    <div class="jq-r">L'Assemblée de Martinique est l'organe délibérant : elle vote le budget, adopte les grandes orientations politiques et contrôle l'exécutif. Le Conseil Exécutif est l'organe exécutif collégial (Président + 8 conseillers exécutifs) : il prépare et exécute les délibérations, dirige l'administration CTM et est ordonnateur du budget. Le Président de l'Assemblée est un troisième acteur clé, distinct du Président du Conseil Exécutif : il dirige les séances et représente l'Assemblée.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">4. « Quels sont les principaux défis démographiques de la Martinique ? »</div>
    <div class="jq-r">La Martinique connaît trois phénomènes démographiques préoccupants : 1) Déclin de la population (de 400 000 à 360 000 hab. entre 2005 et 2024) · 2) Vieillissement accéléré (plus d'un tiers de +60 ans en 2030) · 3) Émigration des jeunes actifs et diplômés vers la métropole (solde migratoire négatif persistant). Ces dynamiques fragilisent le financement des services publics et l'économie locale.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">5. « Qu'est-ce que la crise de l'eau en Martinique et quelles solutions existent ? »</div>
    <div class="jq-r">La crise de l'eau en Martinique est une crise structurelle : réseau vétuste (plus de 50 ans de sous-investissement) · pertes supérieures à 50% · coupures régulières affectant des dizaines de milliers d'habitants · gouvernance fragmentée (SMEAM + communes). Solutions : programme pluriannuel de renouvellement des canalisations financé par les fonds européens et l'État · regroupement de la gouvernance · sensibilisation à l'économie d'eau · développement des retenues collinaires. Enjeu de santé publique et d'attractivité du territoire.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">6. « Qu'est-ce que le chlordécone et pourquoi est-ce un enjeu pour la CTM ? »</div>
    <div class="jq-r">Le chlordécone est un pesticide organochloré utilisé de 1972 à 1993 dans les bananeraies antillaises pour lutter contre le charançon. Il est aujourd'hui reconnu comme perturbateur endocrinien et cancérogène probable. La contamination des sols et des nappes est durable (demi-vie de plusieurs décennies). La CTM co-pilote le Plan Chlordécone IV (2021-2027) : surveillance épidémiologique · soutien aux agriculteurs · communication et information · recherche de techniques de décontamination · indemnisation des victimes. C'est aussi un enjeu de confiance entre les populations martiniquaises et les institutions.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">7. « Comment la CTM finance-t-elle ses actions ? »</div>
    <div class="jq-r">Le budget CTM (~1,6 milliard €/an) est financé par : l'octroi de mer (~200 M€) · la DGF et dotations État · les fonds européens (FEDER, FSE+, FEADER ~800 M€ sur 2021-2027) · la fiscalité locale (taxes foncières, CFE) · les emprunts. La CTM est autorité de gestion des fonds européens, ce qui est un atout considérable pour financer ses investissements sans dépendre uniquement des dotations nationales.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">8. « Qu'est-ce que le PADDM et en quoi se distingue-t-il du SRADDET ? »</div>
    <div class="jq-r">Le PADDM (Plan d'Aménagement et de Développement Durable de la Martinique) est le document de planification stratégique territorial de la CTM. Il est l'équivalent fonctionnel du SRADDET des régions ordinaires, mais dispose d'un périmètre plus large car la CTM exerce simultanément les compétences régionales et départementales. Il est opposable aux SCoT et PLU des communes. Il intègre les objectifs de développement durable, de mobilité, de logement et de préservation des ressources naturelles.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">9. « Quels sont les risques naturels en Martinique et comment les collectivités les gèrent-elles ? »</div>
    <div class="jq-r">La Martinique est exposée à 4 risques majeurs : 1) Cyclones (zone 4, saison juin-novembre) · 2) Séismes (zone 5, plus forte sismicité France) · 3) Éruptions volcaniques (Montagne Pelée, classée UNESCO 2023) · 4) Submersions marines et tsunamis. Les collectivités gèrent ces risques via : les PPR (Plans de Prévention des Risques) · les DICRIM (dans chaque commune) · les plans ORSEC activés par le Préfet · les PCA des collectivités · l'OVSG pour la surveillance volcanique · des normes parasismiques strictes dans les constructions.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">10. « En tant que futur Attaché Territorial à la CTM, quelle serait votre priorité dans les 6 premiers mois ? »</div>
    <div class="jq-r">Mes priorités seraient : 1) Comprendre l'organisation de la CTM, ses orientations stratégiques et son fonctionnement réel (PADDM, organigramme, procédures internes) · 2) Établir des relations de confiance avec mon équipe et ma hiérarchie · 3) Maîtriser le cadre juridique et budgétaire spécifique à la CTM (CGCT, fonds européens, octroi de mer) · 4) Identifier un ou deux dossiers prioritaires sur lesquels apporter rapidement de la valeur ajoutée, en mobilisant mes compétences RH. La posture serait celle d'un apprenant-contributeur, humble mais engagé.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">11. « Qu'est-ce que l'octroi de mer et pourquoi est-il si important pour la Martinique ? »</div>
    <div class="jq-r">L'octroi de mer est une taxe perçue sur les importations de marchandises aux Antilles. C'est une ressource fiscale propre aux DROM, autorisée par une dérogation européenne renouvelée (dernière prolongation jusqu'en 2027). Il représente environ 200 M€/an pour la Martinique et constitue la principale ressource fiscale des communes martiniquaises (répartition entre CTM et communes). Son importance : financer les services publics locaux sans fiscalité foncière excessive · protéger la production locale · compenser les surcoûts liés à l'insularité. Enjeu politique majeur : sa pérennisation au-delà de 2027.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">12. « Quel est le rôle de la CTM dans la gestion des fonds européens ? »</div>
    <div class="jq-r">La CTM est autorité de gestion des fonds structurels européens, ce qui est un atout majeur : elle gère directement les programmes FEDER, FSE+, FEADER et FEAMPA pour la période 2021-2027, représentant environ 800 millions d'euros. Ce rôle implique : instruction et sélection des projets · conventionnement avec les bénéficiaires · suivi et contrôle des dépenses · certification des dépenses auprès de la Commission européenne. La CTM a renforcé ses équipes d'ingénierie financière pour optimiser l'utilisation de ces fonds, notamment dans les domaines de la transition énergétique et du développement économique.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">13. « Quelles sont les relations de la Martinique avec ses voisins caribéens ? »</div>
    <div class="jq-r">La Martinique développe une coopération régionale caribéenne à plusieurs niveaux : 1) Institutionnel : membership de la CTM au sein de l'OECO (Organisation des États de la Caraïbe Orientale) comme membre associé, et au CARICOM (Communauté Caribéenne) · 2) Économique : échanges commerciaux avec la Guadeloupe, Sainte-Lucie, la Barbade · 3) Culturel : langue créole, musique (zouk, biguine), festival Caraïbe · 4) Environnemental : coopération sur la gestion des risques naturels (cyclones), la biodiversité marine et le changement climatique. L'enjeu : valoriser la position de la Martinique comme hub régional francophone dans la Caraïbe.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">14. « Pourquoi la situation de l'eau potable est-elle une priorité absolue en Martinique ? »</div>
    <div class="jq-r">La crise de l'eau en Martinique est une urgence multidimensionnelle : pertes supérieures à 50% dans un réseau vétuste (certaines canalisations datent des années 1960) · coupures régulières affectant parfois 100 000 habitants simultanément · qualité inégale selon les zones · surcoût pour les usagers (eau en bouteille) · image négative pour le tourisme. La CTM coordonne un programme d'urgence pluriannuel avec l'État et les fonds européens pour renouveler les canalisations, améliorer la gouvernance (rationaliser les syndicats des eaux) et sécuriser l'alimentation en eau des populations. C'est aussi un enjeu de santé publique, notamment pour les populations vulnérables.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">15. « Comment la CTM gère-t-elle la question du logement ? »</div>
    <div class="jq-r">Le logement est un enjeu majeur en Martinique : pénurie de logements accessibles · habitat insalubre (bidonvilles) · contraintes sismiques sur les constructions · cherté du foncier. La CTM agit via : 1) La politique foncière (PADDM, établissement foncier EPFAM) · 2) Le soutien aux bailleurs sociaux (SEM, offices HLM) · 3) La résorption de l'habitat insalubre (RHI) · 4) L'accompagnement des primo-accédants modestes · 5) L'intégration des normes parasismiques dans les programmes de construction. L'enjeu est de loger dignement une population où 30% vit sous le seuil de pauvreté.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">16. « Qu'est-ce que le rhum agricole AOC Martinique et quel est son importance économique ? »</div>
    <div class="jq-r">Le rhum agricole AOC Martinique (Appellation d'Origine Contrôlée, 1996) est le seul rhum français à bénéficier d'une AOC. Il est produit à partir de vesou (jus de canne fraîche pressée) dans 9 distilleries réparties sur l'île. Sa réglementation stricte porte sur la variété de canne, le terroir, le procédé de distillation et les conditions d'élevage. Importance économique : 50 000 hl d'alcool pur exportés/an · image de prestige mondial · valeur ajoutée 4 fois supérieure au rhum industriel · filière intégrée (cultivation, distillation, embouteillage) · ambassadeur de la Martinique à l'international. La CTM soutient la filière via son plan agricole et ses actions de promotion.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">17. « Quelle est la place de la Martinique dans l'Union européenne ? »</div>
    <div class="jq-r">La Martinique est une Région Ultrapériphérique (RUP) de l'Union européenne (art. 349 TFUE), au même titre que la Guadeloupe, la Guyane, La Réunion, Mayotte, les Açores, Madère et les Canaries. Ce statut implique : le droit européen s'applique intégralement · bénéfice des fonds structurels (FEDER, FSE+, FEADER) avec taux de cofinancement majorés · possibilité de dérogations aux règles du marché intérieur pour tenir compte des spécificités (octroi de mer, zonage fiscal) · représentation au Parlement européen. Ce statut RUP est fondamental pour le financement du développement martiniquais.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">18. « Comment s'organise la démocratie participative à la CTM ? »</div>
    <div class="jq-r">La CTM développe plusieurs formes de démocratie participative au-delà du CESECEM (organe consultatif obligatoire) : 1) Consultations publiques lors de l'élaboration du PADDM et des grands projets structurants · 2) Concertation obligatoire pour les projets ayant un impact sur l'environnement (enquêtes publiques) · 3) Budget participatif dans certaines communes · 4) Conseils de quartier dans les villes importantes · 5) Plateformes numériques de consultation citoyenne. L'enjeu est de renforcer la légitimité des décisions dans un contexte de défiance envers les institutions.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">19. « Qu'est-ce que la CESECEM et quel est son rôle ? »</div>
    <div class="jq-r">La CESECEM (Conseil Économique, Social, Environnemental, de la Culture et de l'Éducation de Martinique) est l'assemblée consultative de la CTM, équivalent martiniquais du CESER des régions. Elle regroupe des représentants des organisations économiques, sociales, culturelles et éducatives. Sa consultation est obligatoire sur le budget, le PADDM et les grands projets stratégiques. Elle rend des avis qui ne sont pas contraignants pour l'Assemblée et le Conseil Exécutif, mais enrichissent le débat public. C'est un espace de dialogue entre la CTM et la société civile martiniquaise.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">20. « Comment définissez-vous l'identité créole martiniquaise et son lien avec l'action publique ? »</div>
    <div class="jq-r">L'identité créole martiniquaise est le produit d'une histoire unique mêlant héritages africains, européens, indiens et autochtones, transmise par la langue créole, les arts, la gastronomie et les valeurs de solidarité et de résilience. Pour la CTM, reconnaître et valoriser cette identité est un enjeu politique et de développement : 1) Politique culturelle forte (festival de Fort-de-France, musées, patrimoine) · 2) Enseignement du créole (CAPES, intégration en milieu scolaire) · 3) Coopération avec les pays créolophones de la Caraïbe · 4) Valorisation économique (artisanat, gastronomie, écotourisme culturel). L'identité est un levier d'attractivité et de cohésion sociale.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">21. « Qu'est-ce que le PADDM et comment est-il élaboré ? »</div>
    <div class="jq-r">Le PADDM (Plan d'Aménagement et de Développement Durable de la Martinique) est le document de planification stratégique de la CTM, équivalent du SRADDET des régions mais avec un périmètre élargi aux compétences départementales. Il fixe les grandes orientations : aménagement du territoire · mobilité · logement · développement économique · environnement · équilibres entre zones urbaines et rurales. Il est opposable aux SCoT et PLU des 34 communes. Son élaboration est participative (concertation, consultation du CESECEM, enquête publique). La révision du PADDM s'effectue tous les 6 ans pour intégrer les nouvelles priorités (ZAN, transition énergétique, risques climatiques).</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">22. « Quelles sont les spécificités de la fonction publique territoriale en Martinique ? »</div>
    <div class="jq-r">La FPT en Martinique obéit aux mêmes règles statutaires qu'en métropole (loi 84-53) mais avec quelques spécificités : 1) Majoration de rémunération (SMA : supplément de traitement) pour compenser le coût de la vie plus élevé (+25% environ) · 2) Le CNFPT dispose d'une délégation Antilles-Guyane à Fort-de-France pour la formation · 3) La CTM emploie environ 5 500 agents directs, plus les agents des 34 communes et des 4 EPCI · 4) Enjeux de recrutement spécifiques : attirer des profils qualifiés dans un contexte d'émigration des jeunes diplômés · 5) Plans de formation adaptés aux spécificités locales (risques naturels, créole, coopération caribéenne).</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">23. « Quel est l'enjeu de la transition énergétique pour la Martinique ? »</div>
    <div class="jq-r">La Martinique dépend à 90% des hydrocarbures importés pour son énergie, ce qui est une vulnérabilité majeure (coût, risque d'approvisionnement, empreinte carbone). Le Plan Énergie Martinique (PEM) vise 100% d'énergies renouvelables en 2030 : développement de l'éolien (Galion I et II) · du solaire photovoltaïque · de la géothermie (projet Géotherwal) · de l'hydroélectricité. La CTM est co-pilote du PEM avec l'État et EDF. Enjeux : réduction de la facture énergétique des ménages et des entreprises · transition vers des véhicules électriques · indépendance énergétique. La biomasse (bagasse de canne) est aussi valorisée dans la production d'électricité.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">24. « Quelle est votre motivation pour travailler à la CTM plutôt que dans une autre collectivité ? »</div>
    <div class="jq-r">La CTM représente pour moi une opportunité unique pour trois raisons : 1) L'ampleur des missions : exercer des compétences d'un département ET d'une région dans une collectivité de taille humaine, ce qui offre une vision stratégique globale rare en début de carrière · 2) Les défis concrets et porteurs de sens : transition énergétique, lutte contre le chômage, gestion des risques naturels, valorisation de l'identité martiniquaise — autant de projets qui touchent directement la vie des habitants · 3) L'ancrage dans ma collectivité : contribuer au développement de la Martinique, territoire qui m'a formé et dont je connais les enjeux de l'intérieur, est une motivation profonde. C'est un engagement au service de ma communauté.</div>
  </div>

  <div class="jq-item">
    <div class="jq-q">25. « Que savez-vous de la Martinique de demain ? Quels sont vos espoirs pour ce territoire ? »</div>
    <div class="jq-r">La Martinique de demain peut s'appuyer sur des atouts réels : une identité culturelle forte, une biodiversité exceptionnelle, un rhum AOC mondialement reconnu, une position géographique stratégique au cœur de la Caraïbe, et un potentiel d'énergies renouvelables considérable. Mes espoirs : que la transition énergétique atteigne ses objectifs en 2030 et libère la Martinique de la dépendance aux hydrocarbures · que la crise de l'eau soit résolue durablement · que les jeunes trouvent des raisons de rester et de s'investir dans leur île · que la coopération caribéenne positionne la Martinique comme pôle régional d'excellence · que le développement économique bénéficie à l'ensemble de la population en réduisant les inégalités. C'est à cela que je souhaite contribuer en tant qu'Attaché Territorial.</div>
  </div>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE FINALE – Questions jury Martinique</h3>
  <div class="fiche-item">CTM : loi 2011 · en vigueur 2015 · 51 conseillers · Conseil Exécutif collégial</div>
  <div class="fiche-item">Budget CTM ~1,6 Md€ · octroi de mer ~200 M€ · fonds EU ~800 M€ (2021-2027)</div>
  <div class="fiche-item">Démographie : 360 000 hab. · déclin · vieillissement · fuite jeunes</div>
  <div class="fiche-item">Défis : chômage 17% · eau (pertes &gt;50%) · chlordécone · énergie · logement</div>
  <div class="fiche-item">Risques : cyclone (zone 4) · séisme (zone 5) · Pelée (UNESCO 2023)</div>
  <div class="fiche-item">PADDM = équivalent SRADDET pour la CTM · opposable aux PLU/SCoT</div>
</div>

<button class="mark-done-btn" data-chapter="p8c3" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p8c2" class="chapter-nav-btn">← Ch.2 Développement économique</a>
  <a href="#" data-page="mises-en-situation" class="chapter-nav-btn next">50 Mises en situation →</a>
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
