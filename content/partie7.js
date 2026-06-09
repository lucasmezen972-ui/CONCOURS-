/* ============================================================
   PARTIE 7 – Actualités territoriales & politiques publiques (3 chapitres)
   ============================================================ */
(function() {
  const container = document.querySelector('.main-content');
  const sections = [

    { id: 'p7c1', html: `
<section id="p7c1" class="page-section">
<div class="chapter-title">
  <div class="num">P7·C1</div>
  <div><div class="part-tag">Partie 7 – Actualités territoriales</div><h1>Transition écologique &amp; transformation numérique</h1></div>
</div>
<div class="chapter-intro">Deux grandes transformations structurent l'action publique territoriale contemporaine : la transition écologique et la révolution numérique. Ce chapitre en présente les enjeux, les dispositifs et les déclinaisons martiniquaises.</div>

<h2 class="section-title">1. La transition écologique dans les collectivités</h2>
<p>Les collectivités territoriales sont en première ligne face aux enjeux environnementaux :</p>
<ul>
  <li><strong>PCAET</strong> (Plan Climat-Air-Énergie Territorial) : obligatoire pour les EPCI &gt; 20 000 hab. · diagnostic GES · objectifs de réduction</li>
  <li><strong>SRADDET</strong> (pour les régions) / <strong>PADDM</strong> (pour la CTM) : intègrent les objectifs de neutralité carbone</li>
  <li><strong>ZAN</strong> (Zéro Artificialisation Nette) : objectif inscrit dans la loi Climat-Résilience 2021 · réduction des terres artificialisées de 50% d'ici 2031</li>
  <li><strong>Biodiversité</strong> : obligation de plans de gestion différenciée · zéro pesticide dans les espaces publics</li>
</ul>

<h2 class="section-title">2. Transition énergétique – Textes de référence</h2>
<table>
  <thead><tr><th>Texte</th><th>Objectifs clés</th></tr></thead>
  <tbody>
    <tr><td>Accord de Paris (2015)</td><td>Limiter le réchauffement à +1,5°C · neutralité carbone 2050</td></tr>
    <tr><td>Loi TECV (2015)</td><td>40% EnR en 2030 · réduction 50% consommation énergie 2050</td></tr>
    <tr><td>Loi Climat-Résilience (2021)</td><td>ZAN · rénovation thermique · mobilité durable · alimentation</td></tr>
    <tr><td>Plan Énergie Martinique (PEM)</td><td>100% EnR 2030 en Martinique</td></tr>
  </tbody>
</table>

<h2 class="section-title">3. La transformation numérique des services publics</h2>
<ul>
  <li><strong>France Services</strong> : guichets uniques pour l'accès aux services de l'État (CAF, CPAM, impôts…) · présents dans toutes les communes</li>
  <li><strong>Démarches en ligne</strong> : obligation dématérialisation des démarches administratives (100% depuis 2022)</li>
  <li><strong>Open Data</strong> : obligation de publication des données publiques pour les collectivités &gt; 3 500 hab. · portail data.gouv.fr</li>
  <li><strong>Cybersécurité</strong> : enjeu croissant pour les collectivités · attaques ransomware en augmentation · ANSSI recommandations</li>
  <li><strong>Intelligence artificielle</strong> : usages émergents dans les services publics (chatbots, analyse documents, détection fraude)</li>
  <li><strong>AI Act 2024 (UE)</strong> : premier règlement mondial encadrant l'IA · entrée en vigueur août 2024 · classifie les IA par niveau de risque (interdit / haut risque / limité / minimal) · systèmes de notation sociale interdits · transparence algorithmique obligatoire pour les décisions administratives</li>
  <li><strong>Transparence algorithmique</strong> : obligation pour les administrations d'informer les citoyens lorsqu'une décision les concernant est prise ou aidée par un algorithme (loi pour une République Numérique 2016, renforcée par AI Act 2024)</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Transition écologique &amp; numérique en Martinique</h3>
  <p><strong>Écologie :</strong></p>
  <ul>
    <li>Martinique = hotspot de biodiversité mondiale (forêt tropicale, récifs coralliens, mangroves)</li>
    <li>Enjeux spécifiques : chlordécone (contamination des sols agricoles) · gestion des déchets (incinérateur du Robert) · risques naturels</li>
    <li>PEM (Plan Énergie Martinique) : objectif 100% EnR en 2030</li>
    <li>PCAET de la CACEM : modèle de bonne pratique</li>
  </ul>
  <p><strong>Numérique :</strong></p>
  <ul>
    <li>La CTM porte une <strong>Stratégie Numérique</strong> incluant THD (Très Haut Débit) pour toutes les communes</li>
    <li><strong>Fracture numérique</strong> : enjeu fort dans les zones rurales (Nord de l'île) et pour les populations âgées</li>
    <li>Développement de l'e-tourisme et des plateformes de valorisation économique locale</li>
    <li>Formation des agents CTM aux outils numériques (plan de formation CNFPT Antilles-Guyane)</li>
  </ul>
</div>

<h2 class="section-title">ZAN 2024-2025 : état d'avancement</h2>
<ul>
  <li>La loi du <strong>20 juillet 2023</strong> (dite « loi ZAN ») a assoupli et précisé le calendrier : rythme zéro d'artificialisation nette visé en <strong>2050</strong> avec étape de –50% de la consommation foncière par décennie (2021-2031)</li>
  <li>Les SRADDET et PADDM (pour la CTM) devaient être mis en conformité avant <strong>août 2024</strong></li>
  <li>Projet d'envergure nationale exempté (LGV, CHU…) : chaque projet est affecté à une enveloppe nationale mutualisée pour ne pas pénaliser les collectivités d'accueil</li>
  <li><strong>Martinique</strong> : territoire insulaire à forte pression foncière · la CTM doit concilier ZAN, construction de logements sociaux et préservation agricole (SAR / PADDM en révision fin 2024)</li>
  <li>Enjeu de gouvernance : l'EPCI est le bon échelon de mise en œuvre ; les communes devront réviser leur PLU/PLUi avant 2027</li>
</ul>

<div class="fiche-synthese">
  <h3>📋 FICHE – Transition écologique &amp; numérique</h3>
  <div class="fiche-item">PCAET obligatoire pour EPCI &gt;20 000 hab. · ZAN loi 2021</div>
  <div class="fiche-item">PEM : 100% EnR en Martinique à l'horizon 2030</div>
  <div class="fiche-item">Martinique : chlordécone · biodiversité · déchets · récifs coralliens</div>
  <div class="fiche-item">Numérique : 100% démarches en ligne · open data · cybersécurité</div>
  <div class="fiche-item">CTM : stratégie THD + fracture numérique zones rurales</div>
  <div class="fiche-item">AI Act 2024 (UE) : IA classifiée par risque · transparence algorithmique obligatoire en administration</div>
  <div class="fiche-item">ZAN 2024 : –50% artificialisation/décennie · PADDM CTM en conformité avant août 2024</div>
</div>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que l'AI Act européen et quelles obligations cela crée-t-il pour les collectivités ? »</div>
    <div class="jq-r">L'AI Act (règlement UE 2024/1689, en vigueur août 2024) est le premier cadre légal mondial sur l'IA. Il classe les systèmes d'IA en quatre catégories de risque : inacceptable (interdit : notation sociale, manipulation subliminale), haut risque (ex. : IA dans les décisions de recrutement, d'allocation de prestations sociales), risque limité (transparence obligatoire) et risque minimal (liberté d'utilisation). Pour les collectivités : les logiciels d'aide à l'instruction des dossiers RSA ou de profilage des chômeurs sont classés « haut risque » → audit obligatoire, registre de transparence, droit à l'explication pour le citoyen. La CTM devra vérifier ses outils numériques avant les échéances 2025-2026.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que le ZAN et quelles sont ses implications pour la Martinique ? »</div>
    <div class="jq-r">ZAN = Zéro Artificialisation Nette (loi Climat-Résilience 2021) : objectif de diviser par 2 la consommation d'espaces naturels d'ici 2031 puis atteindre le zéro net en 2050. En Martinique : enjeu fort car territoire insulaire de 1 128 km² · pression foncière intense · conflits entre urbanisation et préservation agricole/naturelle. La CTM doit intégrer le ZAN dans son PADDM et accompagner les communes dans la révision de leurs PLU.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que le scandale du chlordécone et quel est le rôle de la CTM ? »</div>
    <div class="jq-r">Le chlordécone est un pesticide utilisé dans les bananeraies antillaises jusqu'en 1993, malgré son interdiction en France métropolitaine. Il a contaminé les sols et les nappes phréatiques pour des décennies. La CTM contribue au Plan Chlordécone IV (2021-2027) : surveillance épidémiologique · aide aux agriculteurs · communication · recherche de décontamination. Enjeu de justice environnementale et de santé publique.</div>
  </div>
</div>

<h2 class="section-title">4. Les nouvelles mobilités durables</h2>
<table>
  <thead><tr><th>Dispositif</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>PDU (Plan de Déplacements Urbains)</td><td>Obligatoire pour EPCI &gt;100 000 hab. · objectif réduction voiture individuelle</td></tr>
    <tr><td>TCSP (Transport en Commun en Site Propre)</td><td>Projet structurant pour Fort-de-France (TCSP Martinique)</td></tr>
    <tr><td>Vélo en libre-service &amp; véloroutes</td><td>Développement dans le cadre du plan mobilités actives</td></tr>
    <tr><td>Voitures électriques</td><td>Soutien aux bornes de recharge · ZFEG (Zones Faibles Émissions)</td></tr>
    <tr><td>Covoiturage &amp; mobilité partagée</td><td>Plateformes numériques soutenues par les collectivités</td></tr>
  </tbody>
</table>

<h2 class="section-title">5. La commande publique responsable</h2>
<ul>
  <li><strong>Clauses environnementales</strong> : intégration systématique dans les marchés publics (critères RSE, bilan carbone)</li>
  <li><strong>Clauses sociales</strong> : heures d'insertion pour les personnes éloignées de l'emploi</li>
  <li><strong>Économie circulaire</strong> : préférence aux produits recyclés, réparables, durables</li>
  <li><strong>SPASER</strong> (Schéma de Promotion des Achats Publics Socialement et Écologiquement Responsables) : obligatoire pour collectivités &gt;100 M€ d'achats annuels</li>
</ul>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury complémentaires</div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que l'open data et quelles sont les obligations des collectivités ? »</div>
    <div class="jq-r">L'open data désigne la mise à disposition du public des données publiques en format ouvert et réutilisable. La loi pour une République Numérique (2016) impose aux collectivités de plus de 3 500 habitants la publication des données qu'elles détiennent sur data.gouv.fr. En pratique : délibérations, budgets, données géographiques, horaires transports. Enjeux : transparence démocratique, innovation économique (réutilisation par les entreprises), amélioration des services. La CTM publie ses données sur son portail open data dédié.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que la stratégie de sobriété numérique et pourquoi les collectivités sont-elles concernées ? »</div>
    <div class="jq-r">La sobriété numérique vise à réduire l'impact environnemental du numérique (4% des émissions mondiales de GES). Les collectivités sont concernées car elles gèrent un parc informatique important et doivent donner l'exemple. Actions concrètes : allongement de la durée de vie des équipements · achats reconditionnés · hébergement à faible empreinte carbone · optimisation des usages (visioconférences vs déplacements) · sensibilisation des agents. C'est une composante à part entière des stratégies numériques territoriales.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p7c1" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p6c3" class="chapter-nav-btn">← P6·C3 Mises en situation</a>
  <a href="#" data-page="p7c2" class="chapter-nav-btn next">Ch.2 Cohésion sociale &amp; emploi →</a>
</div>
</section>`
    },

    { id: 'p7c2', html: `
<section id="p7c2" class="page-section">
<div class="chapter-title">
  <div class="num">P7·C2</div>
  <div><div class="part-tag">Partie 7 – Actualités territoriales</div><h1>Cohésion sociale, inclusion &amp; emploi</h1></div>
</div>
<div class="chapter-intro">Les politiques de cohésion sociale constituent un pilier de l'action des collectivités, particulièrement en Martinique où les inégalités sociales et le chômage restent des défis structurels.</div>

<h2 class="section-title">1. Les politiques de cohésion sociale</h2>
<ul>
  <li><strong>RSA</strong> (Revenu de Solidarité Active) : géré par le département (CTM en Martinique) · enjeu de financement et d'insertion</li>
  <li><strong>Politique de la ville</strong> : QPV (Quartiers Prioritaires de la politique de la Ville) · contrats de ville · ANRU</li>
  <li><strong>Lutte contre les discriminations</strong> : plans égalité F/H · handicap · diversité dans les recrutements FPT</li>
  <li><strong>Vieillissement</strong> : APA (Allocation Personnalisée d'Autonomie) · EHPAD · aide à domicile · PAERPA</li>
</ul>

<h2 class="section-title">2. L'emploi et l'insertion</h2>
<table>
  <thead><tr><th>Dispositif</th><th>Pilotage</th><th>Objectif</th></tr></thead>
  <tbody>
    <tr><td>Plan d'Investissement dans les Compétences (PIC)</td><td>Région/CTM</td><td>Former 1 million de chômeurs peu qualifiés</td></tr>
    <tr><td>Service Public de l'Emploi (SPE)</td><td>France Travail + CTM</td><td>Accompagnement des demandeurs d'emploi</td></tr>
    <tr><td>IAE (Insertion par l'Activité Économique)</td><td>DREETS + collectivités</td><td>Réinsertion des personnes éloignées de l'emploi</td></tr>
    <tr><td>ZFU-TE (Zones Franches Urbaines)</td><td>État + collectivités</td><td>Création d'emplois dans les quartiers prioritaires</td></tr>
  </tbody>
</table>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Cohésion sociale &amp; emploi en Martinique</h3>
  <p><strong>Chiffres clés :</strong></p>
  <ul>
    <li>Taux de chômage : environ <strong>17%</strong> (contre 7,3% en métropole)</li>
    <li>Chômage des jeunes (15-24 ans) : plus de <strong>40%</strong></li>
    <li>Taux de pauvreté : environ <strong>30%</strong> de la population</li>
    <li>Nombre de bénéficiaires RSA : environ <strong>45 000</strong></li>
  </ul>
  <p><strong>Politiques CTM :</strong></p>
  <ul>
    <li>Plan Martinique Emploi Compétences (PMEC)</li>
    <li>Service public régional de la formation : apprentissage, formation continue</li>
    <li>Contrat de plan État-Région (CPER) incluant volet social</li>
    <li>Partenariat avec les missions locales (jeunes) et Pôle Emploi/France Travail</li>
    <li>Programme de soutien à l'économie sociale et solidaire (ESS)</li>
  </ul>
  <p><strong>Enjeu du vieillissement démographique :</strong> La Martinique vieillit plus vite que n'importe quelle région métropolitaine. En 2030, plus d'un tiers de la population aura plus de 60 ans. La CTM, qui gère les compétences sociales, doit anticiper le besoin en EHPAD, aides à domicile et personnel soignant.</p>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Cohésion sociale &amp; emploi</h3>
  <div class="fiche-item">RSA géré par la CTM en Martinique · ~45 000 bénéficiaires</div>
  <div class="fiche-item">Chômage Martinique ~17% · jeunes ~40%</div>
  <div class="fiche-item">Taux pauvreté ~30% · PMEC + CPER pour l'emploi</div>
  <div class="fiche-item">Vieillissement : +1/3 de +60 ans en 2030 → EHPAD, aides à domicile</div>
  <div class="fiche-item">ESS : levier pour l'insertion locale</div>
  <div class="fiche-item">France Travail (2024) : RSA conditionné à 15-20h/sem · CTM partenaire clé pour 45 000 bénéficiaires</div>
  <div class="fiche-item">Logement social : SIMAR (17 000 HLM) · ANRU Trénelle/Volga · bâti dégradé (80 000+ logements) · foncier rare</div>
</div>

<h2 class="section-title">3. France Travail : intégration 2024</h2>
<p>Au 1er janvier 2024, <strong>Pôle Emploi</strong> est devenu <strong>France Travail</strong> dans le cadre de la loi du 18 décembre 2023 pour le plein emploi :</p>
<ul>
  <li>Objectif : plateforme unifiée regroupant Pôle Emploi, Missions locales, Cap Emploi et la composante emploi des Départements (RSA) sous coordination France Travail</li>
  <li><strong>Nouveauté majeure</strong> : les bénéficiaires du RSA sont désormais automatiquement inscrits à France Travail et doivent signer un <em>Contrat d'Engagement</em> incluant 15-20h d'activités hebdomadaires (formation, bénévolat, stage…)</li>
  <li>La CTM (en tant que gestionnaire du RSA en Martinique) doit articuler son action avec France Travail : instruction des droits, suivi des engagements, financement de l'insertion</li>
  <li>Enjeux martiniquais : 45 000 bénéficiaires RSA · réseau de Missions locales insuffisant face au volume · formation professionnelle à renforcer en zones rurales (Nord, Nord-Caraïbe)</li>
  <li>Risque : conditionnalité plus stricte du RSA → recours et contentieux administratifs en hausse pour la CTM</li>
</ul>

<h2 class="section-title">3bis. Logement social en Martinique</h2>
<p>La crise du logement est un enjeu structurel majeur en Martinique :</p>
<ul>
  <li>Taux de logements suroccupés : parmi les plus élevés de France (15%+)</li>
  <li>80 000+ logements classés « indigne » ou « potentiellement dégradés » (selon CEREMA 2023)</li>
  <li><strong>SIMAR</strong> (Société Immobilière de la Martinique) : bailleur social CTM · gère environ 17 000 logements HLM</li>
  <li><strong>ANRU</strong> : deux opérations majeures en cours (Trénelle-Citron et Volga-Plage à Fort-de-France)</li>
  <li><strong>Réhabilitation du bâti dégradé</strong> : plan CTM 2023-2028 · enjeux parasismiques (zone 5) et parasismiques combinés à la vétusté</li>
  <li><strong>Foncier rare</strong> : ZAN + pression démographique historique + mitage illégal → tension entre construction neuve et préservation agricole</li>
  <li>Dispositifs d'accession aidée : PTZ renforcé dans les DOM · aide régionale à la primo-accession (CTM)</li>
</ul>

<h2 class="section-title">4. Le handicap et l'accessibilité</h2>
<ul>
  <li><strong>MDPH</strong> (Maison Départementale des Personnes Handicapées) : gérée par le département (CTM) · évalue les droits · RQTH, AAH, PCH</li>
  <li><strong>Accessibilité des ERP</strong> (Établissements Recevant du Public) : obligation de mise en accessibilité · Ad'AP (Agenda d'Accessibilité Programmée)</li>
  <li><strong>FIPHFP</strong> : fonds pour l'insertion des personnes handicapées dans la fonction publique · les collectivités y cotisent si elles n'atteignent pas 6% de TH</li>
  <li><strong>Obligation d'emploi</strong> : 6% de travailleurs handicapés obligatoires dans toutes les administrations</li>
</ul>

<h2 class="section-title">4. La jeunesse et l'éducation populaire</h2>
<ul>
  <li><strong>Service Civique</strong> : 6-12 mois · 18-25 ans · indemnisation État · les collectivités peuvent accueillir des volontaires</li>
  <li><strong>PEDT</strong> (Projet Éducatif Territorial) : partenariat communes-État-associations · accueil périscolaire · réforme des rythmes scolaires</li>
  <li><strong>Plan Pauvreté</strong> (2018) : prime d'activité · investissement social · garantie jeunes / CEJ (Contrat d'Engagement Jeune)</li>
  <li><strong>Martinique</strong> : PIJ (Points Information Jeunesse) · Missions locales (accompagnement 16-25 ans) · FDEJ (Fonds de développement de la vie associative)</li>
</ul>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury complémentaires</div>
  <div class="jq-item">
    <div class="jq-q">« Comment la CTM gère-t-elle le vieillissement de la population martiniquaise ? »</div>
    <div class="jq-r">Le vieillissement accéléré de la Martinique (plus d'1/3 de la population aura plus de 60 ans en 2030) est un défi majeur pour la CTM, qui exerce les compétences sociales du département. Les leviers : 1) Développement des structures d'hébergement (EHPAD, résidences autonomie) · 2) Renforcement de l'aide à domicile (SAAD) via l'APA · 3) Formation et attractivité des métiers du soin · 4) Plan Grand Age territorial incluant la prévention (nutrition, activité physique, lien social) · 5) Lutte contre l'isolement des personnes âgées. L'enjeu financier est considérable car la CTM doit absorber la hausse des dépenses sociales avec des ressources fiscales contraintes.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Quelles politiques la CTM peut-elle mener pour lutter contre le chômage des jeunes ? »</div>
    <div class="jq-r">Face à un chômage des jeunes de 40% en Martinique, la CTM mobilise plusieurs leviers : 1) Formation professionnelle (compétence régionale) : apprentissage, formations en alternance adaptées au marché local · 2) Financement des missions locales pour l'accompagnement vers l'emploi · 3) Soutien à la création d'entreprises (BDE, microfinancement) · 4) Coordination avec France Travail pour les dispositifs nationaux (CEJ, PIC) · 5) Développement de l'apprentissage au sein même de la CTM · 6) Politique d'attractivité pour retenir les jeunes diplômés martiniquais et leur offrir des perspectives locales.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Que change la loi "plein emploi" de 2023 pour les bénéficiaires du RSA gérés par la CTM ? »</div>
    <div class="jq-r">La loi du 18 décembre 2023 crée France Travail (ex-Pôle Emploi) et instaure l'inscription obligatoire des bénéficiaires du RSA à France Travail. Ils signent un Contrat d'Engagement incluant 15-20h d'activités hebdomadaires (formation, bénévolat, immersion professionnelle). Pour la CTM, gestionnaire du RSA : elle doit co-piloter le suivi des 45 000 bénéficiaires avec France Travail, financer les parcours d'insertion, et adapter son réseau de Missions locales. Risques : surcharge administrative, contentieux liés aux suppressions de RSA pour non-respect du contrat, besoin de renforts en effectifs dans les services sociaux.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Quelle est la situation du logement social en Martinique et comment la CTM y répond-elle ? »</div>
    <div class="jq-r">La Martinique souffre d'une crise du logement structurelle : 80 000+ logements potentiellement dégradés, taux de suroccupation parmi les plus élevés de France, foncier rare (île de 1 128 km²). La CTM agit via plusieurs leviers : 1) la SIMAR (bailleur social CTM, ~17 000 logements HLM) · 2) partenariat ANRU pour les projets de renouvellement urbain (Trénelle-Citron, Volga-Plage à Fort-de-France) · 3) plan de réhabilitation du bâti dégradé (normes parasismiques en zone 5) · 4) aide à la primo-accession en lien avec le PTZ renforcé DOM · 5) intégration de l'objectif ZAN pour préserver les terres agricoles tout en permettant les opérations de logement prioritaires.</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p7c2" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p7c1" class="chapter-nav-btn">← Ch.1 Transition écologique</a>
  <a href="#" data-page="p7c3" class="chapter-nav-btn next">Ch.3 Attractivité &amp; gestion de crise →</a>
</div>
</section>`
    },

    { id: 'p7c3', html: `
<section id="p7c3" class="page-section">
<div class="chapter-title">
  <div class="num">P7·C3</div>
  <div><div class="part-tag">Partie 7 – Actualités territoriales</div><h1>Attractivité des territoires &amp; gestion de crise</h1></div>
</div>
<div class="chapter-intro">L'attractivité territoriale et la résilience face aux crises sont deux défis majeurs pour les collectivités contemporaines, particulièrement en Martinique compte tenu de sa position géographique et de ses spécificités socio-économiques.</div>

<h2 class="section-title">1. L'attractivité territoriale</h2>
<p>L'attractivité d'un territoire se mesure à sa capacité à attirer et retenir :</p>
<ul>
  <li>Des habitants (attractivité résidentielle)</li>
  <li>Des entreprises et investissements (attractivité économique)</li>
  <li>Des touristes (attractivité touristique)</li>
  <li>Des travailleurs qualifiés (attractivité des talents)</li>
</ul>
<p>Les outils des collectivités : marketing territorial · labels (Ville d'Art et d'Histoire, Petites Cités de Caractère) · zones d'activités économiques · politique culturelle · qualité des services publics.</p>

<h2 class="section-title">2. La gestion de crise dans les collectivités</h2>
<p>Les collectivités sont en première ligne dans la gestion des crises :</p>
<ul>
  <li><strong>ORSEC</strong> (Organisation de la Réponse de SEcurité Civile) : plan de crise coordonné par le préfet · les collectivités y participent activement</li>
  <li><strong>PCA</strong> (Plan de Continuité d'Activité) : obligation pour les collectivités de maintenir leurs services essentiels en cas de crise</li>
  <li><strong>DICRIM</strong> (Document d'Information Communal sur les Risques Majeurs) : obligation pour les communes exposées</li>
</ul>

<div class="martinique-box">
  <h3 class="sub-title" style="margin-top:14px">Attractivité &amp; gestion de crise en Martinique</h3>
  <p><strong>Attractivité martiniquaise :</strong></p>
  <ul>
    <li><strong>Tourisme</strong> : 1er secteur d'exportation (1,5 million de visiteurs/an environ) · enjeu de montée en gamme et d'écotourisme</li>
    <li><strong>Agriculture</strong> : banane · canne à sucre (rhum AOC Martinique) · agriculture maraîchère locale · enjeu de diversification</li>
    <li><strong>Économie créative</strong> : musique, arts, gastronomie · atout de rayonnement caribéen</li>
    <li><strong>Zone Franche d'Activités Nouvelle Génération</strong> (ZFANG) : avantages fiscaux pour les entreprises créant des emplois</li>
  </ul>
  <p><strong>Gestion des risques naturels :</strong></p>
  <ul>
    <li><strong>Risque cyclonique</strong> : saison des cyclones juin-novembre · Plan ORSEC-CYCLONE · alerte orange/rouge/violette</li>
    <li><strong>Risque sismique</strong> : zone de forte sismicité (zone 5 sur 5) · plan REPSA (REPlan Séisme Antilles) · normes parasismiques obligatoires</li>
    <li><strong>Risque volcanique</strong> : Montagne Pelée (volcan actif) · éruption 1902 (>30 000 morts) · réveil récent 2020-2021 · OVSG (Observatoire Volcanologique)</li>
    <li><strong>Risque de submersion</strong> : côtes basses vulnérables · PPR (Plans de Prévention des Risques) obligatoires</li>
  </ul>
  <p><strong>La CTM et la résilience :</strong> La CTM a développé une Direction des Risques Majeurs (DRM) qui coordonne les politiques de prévention et de gestion de crise avec les communes et la Préfecture.</p>
</div>

<div class="fiche-synthese">
  <h3>📋 FICHE – Attractivité &amp; gestion de crise</h3>
  <div class="fiche-item">Attractivité : résidentielle + économique + touristique + talents</div>
  <div class="fiche-item">Martinique : tourisme (1,5M visiteurs) · agriculture (banane, rhum) · ZFANG</div>
  <div class="fiche-item">Risques Martinique : cyclone (zone 4) · séisme (zone 5) · volcan (Pelée) · submersion</div>
  <div class="fiche-item">ORSEC : plan coordination préfet · PCA obligatoire collectivités</div>
  <div class="fiche-item">CTM : Direction des Risques Majeurs · REPSA · OVSG</div>
  <div class="fiche-item">Vie chère 2024 : accord 16 oct. · –20% sur 54 produits · plan alimentaire local CTM</div>
  <div class="fiche-item">Budget 2025 : contribution 3 Md€ aux régions/dép. · gel DGF · CTM : hausse charges sociales + baisse recettes</div>
</div>

<h2 class="section-title">3. Le mouvement « vie chère » 2024 en Martinique</h2>
<p>En septembre-octobre 2024, la Martinique a connu un mouvement social d'ampleur inédite, baptisé <strong>« Rassemblement pou Pwoteksyon Pep Matinitjé »</strong> :</p>
<ul>
  <li><strong>Contexte</strong> : les prix alimentaires en Martinique sont en moyenne <strong>40-49% plus élevés</strong> qu'en métropole (étude INSEE 2023) malgré des revenus médians inférieurs</li>
  <li><strong>Déclencheur</strong> : blocages de routes, supermarchés fermés, tensions avec les forces de l'ordre pendant plusieurs semaines (sept.-oct. 2024)</li>
  <li><strong>Revendications</strong> : baisse des prix de 20% sur 54 produits de première nécessité · fin des marges excessives de la grande distribution · relocalisation alimentaire</li>
  <li><strong>Accord du 16 octobre 2024</strong> : signature d'un accord encadrant les marges de la grande distribution sur 54 produits alimentaires de base · engagement d'une réduction de prix visible en rayon · commission de suivi CTM/État/distributeurs</li>
  <li><strong>Rôle de la CTM</strong> : médiation · décision de lancer un plan alimentaire local (production locale vs importations) · mobilisation du FEI (Fonds Exceptionnel d'Investissement) pour soutenir l'agriculture vivrière</li>
  <li><strong>Leçons pour le concours</strong> : illustre les tensions entre autonomie territoriale et dépendance économique · nécessité d'une politique d'approvisionnement locale · rôle de la CTM en situation de crise sociale</li>
</ul>

<h2 class="section-title">4. Le budget 2025 et les contraintes fiscales sur les collectivités</h2>
<p>La loi de finances 2025 a introduit des mesures d'économies impactant fortement les collectivités :</p>
<ul>
  <li><strong>Contribution exceptionnelle</strong> de 3 milliards d'euros demandée aux grandes collectivités (régions et départements à recettes &gt;30 M€/an) sur 2025-2028 · CTM concernée</li>
  <li><strong>Gel de la DGF</strong> (Dotation Globale de Fonctionnement) : reconductible à l'identique sans revalorisation · pression sur les budgets de fonctionnement</li>
  <li><strong>Réduction des transferts État-collectivités</strong> : fin de certaines compensations de la réforme de la taxe d'habitation · impact de 1,3 Md€ sur l'ensemble des collectivités</li>
  <li><strong>Pour la CTM</strong> : double contrainte – hausse des dépenses sociales (RSA, APA, France Travail) + baisse des recettes de l'État → nécessité de prioriser les investissements et maîtriser la masse salariale</li>
  <li><strong>Stratégie d'adaptation</strong> : optimisation fiscale locale (OCTROI DE MER), accès aux fonds européens (FEDER, FSE+), mutualisation intercommunale, recours aux contrats de plan État-Région (CPER 2021-2027)</li>
</ul>

<h2 class="section-title">5. Le marketing territorial</h2>
<p>Le marketing territorial est une démarche stratégique qui vise à valoriser l'image d'un territoire pour attirer des cibles identifiées.</p>
<ul>
  <li><strong>Marque territoriale</strong> : identité visuelle et narrative du territoire · ex. « Martinique, Île Belle »</li>
  <li><strong>Événementiel</strong> : fêtes, festivals, événements sportifs · retombées économiques directes et indirectes</li>
  <li><strong>Accueil d'entreprises</strong> : parcs d'activités, accompagnement installation, guichet unique investisseurs</li>
  <li><strong>Coopération régionale caribéenne</strong> : OECO, CARICOM, CEPALC · la Martinique comme hub régional</li>
</ul>

<h2 class="section-title">6. La résilience territoriale</h2>
<p>La résilience est la capacité d'un territoire à absorber les chocs et à rebondir. Elle passe par :</p>
<ul>
  <li><strong>Diversification économique</strong> : ne pas dépendre d'un seul secteur (ex. Martinique dépendante du tourisme et de la banane)</li>
  <li><strong>Sécurisation alimentaire</strong> : développer l'agriculture locale pour réduire la dépendance aux importations (80% des aliments sont importés)</li>
  <li><strong>Autonomie énergétique</strong> : PEM 100% EnR 2030 · réduction de la dépendance aux hydrocarbures importés</li>
  <li><strong>Gestion prévisionnelle des risques</strong> : cartographie, anticipation, formation des acteurs, communication citoyenne</li>
</ul>

<div class="jury-questions">
  <div class="jq-title">🎤 Questions de jury</div>
  <div class="jq-item">
    <div class="jq-q">« La Montagne Pelée est-elle un volcan actif ? Quel est le rôle de la CTM en cas d'éruption ? »</div>
    <div class="jq-r">Oui, la Montagne Pelée est un stratovolcan actif (classée UNESCO en 2023). Elle a connu des phases d'activité en 2020-2021. En cas d'éruption : le dispositif ORSEC-VOLCAN est déclenché par le préfet · évacuation des zones à risque · la CTM assure l'accueil des sinistrés · logistique · communication aux populations. Le BRGM et l'OVSG assurent la surveillance 24h/24.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Comment évaluez-vous l'attractivité d'un territoire ? »</div>
    <div class="jq-r">L'attractivité d'un territoire se mesure selon quatre dimensions : 1) Résidentielle : flux démographiques, cadre de vie, offre de services publics et culturels · 2) Économique : création d'entreprises, investissements étrangers, taux de chômage, dynamisme des zones d'activités · 3) Touristique : nuitées, chiffre d'affaires, notoriété, taux de satisfaction · 4) Talents : attraction et rétention de travailleurs qualifiés, présence d'établissements d'enseignement supérieur. Pour la Martinique, la coopération caribéenne, le rhum AOC et la Montagne Pelée classée UNESCO sont des atouts majeurs.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Qu'est-ce que le mouvement de la "vie chère" de 2024 en Martinique et quel rôle a joué la CTM ? »</div>
    <div class="jq-r">En septembre-octobre 2024, la Martinique a connu un mouvement social majeur contre la vie chère : les prix alimentaires y sont 40-49% plus élevés qu'en métropole (INSEE). Des blocages de routes et la fermeture de supermarchés ont duré plusieurs semaines. Un accord signé le 16 octobre 2024 encadre les marges de la grande distribution sur 54 produits de première nécessité, avec engagement de réduire les prix visibles en rayon. La CTM a joué un rôle de médiateur et a lancé un plan alimentaire local pour développer l'agriculture vivrière et réduire la dépendance aux importations (actuellement 80% des aliments). Ce mouvement illustre la tension entre autonomie territoriale et dépendance économique structurelle des DROM.</div>
  </div>
  <div class="jq-item">
    <div class="jq-q">« Comment la loi de finances 2025 affecte-t-elle le budget de la CTM ? »</div>
    <div class="jq-r">La loi de finances 2025 crée une double contrainte pour la CTM : d'un côté, une contribution exceptionnelle de 3 milliards d'euros demandée aux grandes collectivités (régions et départements dont recettes &gt;30 M€), un gel de la DGF sans revalorisation et la réduction de compensations liées à la réforme de la taxe d'habitation ; de l'autre, des dépenses sociales en hausse (RSA, APA, France Travail, vieillissement). La CTM doit donc prioriser ses investissements, maîtriser sa masse salariale et optimiser ses ressources propres : octroi de mer (taxe spécifique DOM), fonds européens (FEDER, FSE+) et contrats de plan État-Région (CPER 2021-2027).</div>
  </div>
</div>

<button class="mark-done-btn" data-chapter="p7c3" style="background:var(--primary);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:16px">✓ Marquer ce chapitre comme terminé</button>
<div class="chapter-nav">
  <a href="#" data-page="p7c2" class="chapter-nav-btn">← Ch.2 Cohésion sociale</a>
  <a href="#" data-page="p8c1" class="chapter-nav-btn next">Partie 8 · Ch.1 Histoire &amp; organisation CTM →</a>
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
