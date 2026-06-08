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
