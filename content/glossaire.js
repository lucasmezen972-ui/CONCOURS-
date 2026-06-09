/* ============================================================
   GLOSSAIRE – Termes clés du concours Attaché Territorial
   ============================================================ */
(function () {
  'use strict';

  var TERMES = [
    /* A */
    { t: 'AAU', d: 'Acte Administratif Unilatéral : acte pris par l\'administration seule qui s\'impose sans accord du destinataire (arrêté, décret, délibération).', ref: 'P2·C3' },
    { t: 'Acte réglementaire', d: 'Acte administratif à portée générale et impersonnelle qui s\'applique à tous (ex : décret, arrêté municipal de police). S\'oppose à la décision individuelle.', ref: 'P2·C3' },
    { t: 'Administration', d: 'Ensemble des services publics et agents chargés de mettre en œuvre les politiques publiques et d\'assurer les prestations aux usagers.', ref: 'P1·C1' },
    { t: 'Affermage', d: 'Forme de délégation de service public où un fermier exploite un service déjà constitué et verse une redevance à la collectivité, en étant rémunéré par les usagers.', ref: 'P4·C4' },
    { t: 'Annualité budgétaire', d: 'Principe budgétaire imposant que les autorisations de dépenses et de recettes soient votées pour une année civile (1er janvier – 31 décembre).', ref: 'P3·C1' },
    { t: 'AOC', d: 'Appellation d\'Origine Contrôlée : label de qualité attaché à un terroir. Pour la Martinique, le rhum agricole de Martinique est le seul rhum bénéficiant d\'une AOC européenne.', ref: 'P8·C2' },
    { t: 'Appel d\'offres', d: 'Procédure formalisée de passation de marché public permettant à tout opérateur économique de soumissionner sans présélection (appel d\'offres ouvert) ou après présélection (restreint).', ref: 'P3·C3' },
    { t: 'Article 73', d: 'Article de la Constitution permettant aux DROM d\'adapter les lois à leurs caractéristiques et contraintes particulières. Fondement de la différenciation normative pour la Martinique.', ref: 'P8·C1' },
    { t: 'Assemblée de Martinique', d: 'Organe délibérant de la CTM, composé de 51 conseillers. Vote le budget, les délibérations et élit le Conseil exécutif.', ref: 'P8·C1' },
    { t: 'Attaché territorial', d: 'Fonctionnaire de catégorie A de la filière administrative. Cadre intermédiaire entre l\'administrateur et le rédacteur. Prépare les décisions, manage des équipes, conduit des projets.', ref: 'P1·C6' },
    { t: 'Autofinancement', d: 'Excédent de la section de fonctionnement (recettes – dépenses courantes). Sert à financer une partie des investissements sans recourir à l\'emprunt.', ref: 'P3·C1' },
    { t: 'Avancement d\'échelon', d: 'Progression au sein d\'un grade entraînant une augmentation de rémunération. Fondé sur l\'ancienneté et la valeur professionnelle évaluée lors de l\'entretien professionnel.', ref: 'P4·C2' },
    { t: 'Avenant', d: 'Modification contractuelle d\'un marché public en cours d\'exécution. Encadré par le Code de la commande publique (plafonds de modification).', ref: 'P3·C3' },

    /* B */
    { t: 'Bloc de constitutionnalité', d: 'Ensemble formant la norme constitutionnelle de référence : Constitution 1958 + DDHC 1789 + Préambule 1946 (droits sociaux) + Charte de l\'environnement 2004.', ref: 'P2·C1' },
    { t: 'Budget annexe', d: 'Budget distinct du budget principal retraçant les opérations d\'un service public industriel et commercial (SPIC) : eau, assainissement, transports…', ref: 'P3·C1' },
    { t: 'Budget primitif', d: 'Premier budget annuel voté par l\'assemblée délibérante avant le 15 avril. Il fixe les prévisions de recettes et d\'autorisations de dépenses pour l\'année.', ref: 'P3·C1' },
    { t: 'Bien-être au travail', d: 'État global de satisfaction physique et psychologique des agents. Inclut la prévention des risques psychosociaux (RPS), l\'ergonomie, le management bienveillant. Objectif du DUERP et du plan de prévention.', ref: 'P4·C3' },

    /* C */
    { t: 'CAP', d: 'Commission Administrative Paritaire : instance consultée pour les décisions individuelles défavorables concernant la carrière des fonctionnaires (licenciement, refus promotion…). Organisée par catégorie.', ref: 'P4·C3' },
    { t: 'CCP', d: 'Code de la Commande Publique : entré en vigueur le 1er avril 2019, il codifie toutes les règles relatives aux marchés publics et aux contrats de concession.', ref: 'P3·C3' },
    { t: 'CDG', d: 'Centre de Gestion de la FPT : assure la gestion des concours, la bourse de l\'emploi, la publicité des vacances de postes et conseille les petites collectivités.', ref: 'P4·C1' },
    { t: 'Chlordécone', d: 'Pesticide utilisé dans les bananeraies antillaises de 1972 à 1993. Contamine durablement les sols (centaines d\'années) et les eaux. Surrisque de cancer de la prostate en Martinique.', ref: 'P8·C2' },
    { t: 'CNFPT', d: 'Centre National de la Fonction Publique Territoriale : forme les agents territoriaux (formation initiale et continue) et organise les concours de catégorie A+ (administrateur territorial, conservateur…).', ref: 'P1·C6' },
    { t: 'Code général des collectivités territoriales (CGCT)', d: 'Principal code régissant l\'organisation et le fonctionnement des collectivités territoriales françaises (communes, départements, régions, CTM…).', ref: 'P1·C3' },
    { t: 'Collectivité Territoriale de Martinique (CTM)', d: 'Collectivité unique créée en 2015, fusionnant le Conseil général et le Conseil régional. Exerce les compétences des deux. Gouvernée par une Assemblée (51 membres) et un Conseil exécutif collégial.', ref: 'P8·C1' },
    { t: 'Concession', d: 'Forme de DSP où le concessionnaire finance, réalise et exploite un service public. Il est rémunéré substantiellement par les usagers. Ex : eau, stationnement.', ref: 'P4·C4' },
    { t: 'Conseil constitutionnel', d: 'Institution contrôlant la conformité des lois à la Constitution (a priori avant promulgation, a posteriori via QPC). Composé de 9 membres nommés pour 9 ans.', ref: 'P2·C2' },
    { t: 'Conseil d\'État', d: 'Plus haute juridiction administrative française et conseiller juridique du gouvernement. Il rend des avis sur les projets de loi et juge en cassation les arrêts des cours administratives d\'appel.', ref: 'P2·C2' },
    { t: 'Conseil exécutif', d: 'Organe exécutif collégial de la CTM, composé du Président et de 8 conseillers exécutifs. Élu par l\'Assemblée de Martinique. Prépare et exécute les délibérations.', ref: 'P8·C1' },
    { t: 'Contractuel', d: 'Agent non titulaire de la FPT recruté par contrat (CDD ou CDI). Peut occuper un emploi permanent sous certaines conditions. Ne dispose pas du statut de fonctionnaire.', ref: 'P4·C1' },
    { t: 'CPF', d: 'Compte Personnel de Formation : crédite chaque agent en heures de formation utilisables pour des actions qualifiantes ou la préparation de concours.', ref: 'P4·C2' },
    { t: 'CRC', d: 'Chambre Régionale des Comptes : juridiction financière contrôlant la gestion des collectivités et jugeant les comptes des comptables publics.', ref: 'P3·C2' },
    { t: 'CST', d: 'Comité Social Territorial : fusion du CT et CHSCT depuis 2023. Instance de dialogue social consultée sur l\'organisation et les conditions de travail. Obligatoire dès 50 agents.', ref: 'P4·C3' },
    { t: 'CTM', d: 'Collectivité Territoriale de Martinique. Voir "Collectivité Territoriale de Martinique".', ref: 'P8·C1' },

    /* D */
    { t: 'DDHC', d: 'Déclaration des Droits de l\'Homme et du Citoyen de 1789 : fait partie du bloc de constitutionnalité. Proclame les droits fondamentaux (liberté, égalité, propriété, sûreté, résistance à l\'oppression).', ref: 'P2·C1' },
    { t: 'DEAL', d: 'Direction de l\'Environnement, de l\'Aménagement et du Logement : service déconcentré de l\'État dans les DROM. Contrôle les autorisations d\'urbanisme, les risques naturels, le logement social et les EnR.', ref: 'P7·C1' },
    { t: 'Déféré préfectoral', d: 'Procédure permettant au préfet de déférer devant le tribunal administratif un acte d\'une collectivité territoriale qu\'il estime illégal. Délai de 2 mois après transmission.', ref: 'P2·C3' },
    { t: 'Délibération', d: 'Acte de l\'assemblée délibérante d\'une collectivité (Assemblée de Martinique, conseil municipal…) prenant une décision sur une question relevant de ses compétences. Transmise au préfet pour contrôle de légalité.', ref: 'P2·C3' },
    { t: 'Décentralisation', d: 'Transfert de compétences de l\'État vers des collectivités territoriales dotées d\'une personnalité juridique, d\'un budget propre et gérées par des élus. Introduite par les lois Defferre 1982-1983.', ref: 'P1·C2' },
    { t: 'Déconcentration', d: 'Délégation de pouvoirs à des agents de l\'État implantés en région (préfets, recteurs, DRFIP…). L\'État reste l\'employeur et responsable, contrairement à la décentralisation.', ref: 'P1·C2' },
    { t: 'DGF', d: 'Dotation Globale de Fonctionnement : principale dotation de l\'État aux collectivités (~26 Mds€/an). Allouée selon des critères de population, de charges et de ressources.', ref: 'P3·C1' },
    { t: 'DGFiP', d: 'Direction Générale des Finances Publiques : administration de l\'État qui emploie les comptables publics des collectivités et assure le recouvrement des impôts.', ref: 'P3·C2' },
    { t: 'DROM', d: 'Département et Région d\'Outre-Mer : Martinique, Guadeloupe, Guyane, La Réunion, Mayotte. Pleinement intégrés à la République française mais disposant d\'adaptations législatives.', ref: 'P8·C1' },
    { t: 'DSP', d: 'Délégation de Service Public : contrat par lequel une collectivité confie la gestion d\'un service public à un opérateur rémunéré par les résultats d\'exploitation. Formes : concession, affermage, régie intéressée.', ref: 'P4·C4' },

    /* E */
    { t: 'Évaluation des politiques publiques', d: 'Démarche visant à apprécier l\'efficacité, l\'efficience et la pertinence d\'une politique publique. Méthodes : indicateurs de résultats, enquêtes, audits, études d\'impact. Outil de pilotage et de reddition de comptes.', ref: 'P4·C4' },
    { t: 'Entretien professionnel', d: 'Évaluation annuelle du fonctionnaire menée par son supérieur hiérarchique direct. Remplace la notation chiffrée depuis 2010. Évalue résultats, fixe objectifs, identifie besoins de formation.', ref: 'P4·C2' },
    { t: 'EPCI', d: 'Établissement Public de Coopération Intercommunale : regroupe plusieurs communes pour exercer des compétences en commun. Formes : communauté de communes (CC), d\'agglomération (CA), urbaine (CU), métropole.', ref: 'P1·C4' },
    { t: 'Équilibre budgétaire', d: 'Obligation légale pour les collectivités : chaque section (fonctionnement et investissement) doit être équilibrée en recettes et dépenses réelles.', ref: 'P3·C2' },

    /* F */
    { t: 'FEDER', d: 'Fonds Européen de Développement Régional : finance des investissements dans les infrastructures, l\'innovation et la transition énergétique. La Martinique, en tant que RUP, bénéficie de taux bonifiés.', ref: 'P8·C2' },
    { t: 'Fonctionnaire', d: 'Agent titulaire d\'un emploi permanent dans une administration publique, nommé dans un grade inscrit dans un cadre d\'emplois. Soumis au statut général de la FPT (loi 84-53).', ref: 'P4·C1' },
    { t: 'FPT', d: 'Fonction Publique Territoriale : ensemble des personnels (fonctionnaires et contractuels) des collectivités territoriales et de leurs établissements publics. Régie par la loi du 26/01/1984.', ref: 'P1·C6' },
    { t: 'FSE+', d: 'Fonds Social Européen + : finance formation professionnelle, insertion et emploi. La Martinique (RUP) bénéficie de cofinancements bonifiés pour accompagner les demandeurs d\'emploi et publics fragiles.', ref: 'P8·C2' },

    /* G */
    { t: 'Gouvernance', d: 'Ensemble des règles, pratiques et institutions par lesquelles un territoire ou une organisation est géré. Inclut la participation citoyenne, la coordination des acteurs et la transparence de la décision publique.', ref: 'P4·C4' },
    { t: 'GPEC', d: 'Gestion Prévisionnelle des Emplois et des Compétences : démarche anticipant à 3-5 ans les besoins en effectifs et compétences d\'une collectivité pour adapter les ressources humaines aux enjeux futurs.', ref: 'P4·C2' },
    { t: 'Grade', d: 'Division dans un cadre d\'emplois de la FPT. L\'agent est titulaire d\'un grade (ex : attaché principal) et affecté sur un emploi. Le grade est la garantie statutaire (on ne peut pas supprimer le grade).', ref: 'P4·C1' },

    /* H */
    { t: 'Hiérarchie des normes', d: 'Principe selon lequel chaque norme juridique doit être conforme à celles qui lui sont supérieures. Pyramide : Constitution → Traités → Lois → Règlements.', ref: 'P2·C1' },

    /* I */
    { t: 'Indicateur de performance', d: 'Mesure chiffrée permettant d\'évaluer l\'atteinte d\'un objectif. Doit être SMART. Dans la collectivité : indicateurs de moyens (inputs), de résultats (outputs) et d\'impact (outcomes).', ref: 'P4·C4' },
    { t: 'IAE', d: 'Insertion par l\'Activité Économique : structures (ateliers chantiers d\'insertion, entreprises d\'insertion…) qui emploient et accompagnent des personnes très éloignées de l\'emploi vers une insertion durable.', ref: 'P7·C2' },
    { t: 'Intercommunalité', d: 'Coopération entre communes au sein d\'un EPCI pour exercer certaines compétences à une échelle pertinente (urbanisme, déchets, transport, développement économique…).', ref: 'P1·C4' },

    /* J */
    { t: 'Jurisprudence', d: 'Ensemble des décisions rendues par les tribunaux qui interprètent et précisent le droit. Source indirecte du droit, notamment dans le droit administratif (ex : arrêts du Conseil d\'État).', ref: 'P2·C1' },

    /* L */
    { t: 'Laïcité', d: 'Principe constitutionnel de neutralité de l\'État à l\'égard des religions (art. 1 Constitution). Dans la FPT : obligation pour les agents de ne pas manifester leurs convictions religieuses en service. Enjeu croissant de management public.', ref: 'P6·C2' },
    { t: 'Légalité (principe de)', d: 'L\'administration ne peut agir que si un texte l\'y autorise. Toute action administrative doit avoir une base légale. Fondement de l\'État de droit et du contrôle du juge administratif.', ref: 'P2·C1' },
    { t: 'Liste d\'aptitude', d: 'Liste sur laquelle est inscrit le lauréat d\'un concours FPT. Il peut être recruté par une collectivité dans un délai de 3 ans (renouvelable deux fois). Sans recrutement, radiation de la liste.', ref: 'P4·C1' },
    { t: 'Loi organique', d: 'Loi relative à l\'organisation des pouvoirs publics, soumise obligatoirement au Conseil constitutionnel avant promulgation. Hiérarchiquement supérieure aux lois ordinaires.', ref: 'P2·C1' },

    /* M */
    { t: 'M57', d: 'Instruction budgétaire et comptable applicable aux collectivités à statut unique (CTM, Métropole de Lyon…) et en cours d\'extension. Vise à unifier et moderniser la comptabilité locale.', ref: 'P3·C2' },
    { t: 'Mandat de paiement', d: 'Ordre donné par l\'ordonnateur au comptable public de procéder au paiement d\'une dépense liquidée.', ref: 'P3·C2' },
    { t: 'MAPA', d: 'Marché à Procédure Adaptée : marché en dessous des seuils européens de procédure formalisée. L\'acheteur adapte librement les modalités de publicité et de mise en concurrence.', ref: 'P3·C3' },
    { t: 'Marketing territorial', d: 'Démarche de valorisation et de promotion d\'un territoire auprès de cibles définies (entreprises, touristes, talents, résidents) pour renforcer son attractivité.', ref: 'P7·C3' },
    { t: 'Montagne Pelée', d: 'Volcan de la Martinique dont l\'éruption du 8 mai 1902 a détruit Saint-Pierre et tué ~30 000 personnes. Classée UNESCO (patrimoine mondial) en 2023 avec les Pitons du Carbet.', ref: 'P8·C1' },

    /* N */
    { t: 'NOTRe (loi)', d: 'Loi du 7 août 2015 portant Nouvelle Organisation Territoriale de la République. Clarifie les compétences (suppression de la clause générale de compétence des régions et départements), renforce les intercommunalités.', ref: 'P1·C5' },
    { t: 'Neutralité', d: 'Principe du service public : les agents ne doivent pas manifester leurs opinions politiques, religieuses ou syndicales dans l\'exercice de leurs fonctions. Lié au principe de laïcité.', ref: 'P1·C1' },
    { t: 'Note administrative', d: 'Document opérationnel rédigé à l\'usage d\'un supérieur ou décideur. Présente une analyse et des propositions sur un sujet. Différent de la dissertation ou du résumé.', ref: 'P5·C1' },

    /* O */
    { t: 'OEPA', d: 'Offre Économiquement la Plus Avantageuse : critère d\'attribution des marchés publics combinant prix et aspects qualitatifs (technique, délai, environnemental…).', ref: 'P3·C3' },
    { t: 'Octroi de mer', d: 'Taxe sur les importations (et certaines productions locales) dans les DROM. Resource fiscale essentielle pour la Martinique (~200 M€/an). Autorisée par l\'UE jusqu\'en 2027.', ref: 'P8·C2' },
    { t: 'Open data', d: 'Publication en ligne de données publiques en format réutilisable. Obligation pour les collectivités >3 500 hab. depuis la loi République Numérique 2016.', ref: 'P7·C1' },
    { t: 'Ordonnateur', d: 'Élu ou fonctionnaire qui engage, liquide et ordonnance les dépenses publiques. S\'oppose au comptable public qui les paie. Principe de séparation des fonctions.', ref: 'P3·C2' },

    /* P */
    { t: 'PADDM', d: 'Plan d\'Aménagement et de Développement Durable de la Martinique : document de planification stratégique de la CTM (équivalent du SRADDET). Opposable aux PLU. Horizon 2030-2040.', ref: 'P8·C1' },
    { t: 'PCA', d: 'Plan de Continuité d\'Activité : identifie les services critiques et définit les procédures dégradées pour maintenir les services essentiels lors d\'une crise ou d\'un sinistre.', ref: 'P7·C3' },
    { t: 'PCAET', d: 'Plan Climat-Air-Énergie Territorial : obligatoire pour les EPCI >20 000 hab. Objectifs : réduction GES, efficacité énergétique, développement ENR, adaptation au changement climatique.', ref: 'P7·C1' },
    { t: 'PCS', d: 'Plan Communal de Sauvegarde : document opérationnel obligatoire pour les communes exposées à des risques majeurs. Organise la réponse communale en cas de catastrophe.', ref: 'P7·C3' },
    { t: 'Péréquation', d: 'Mécanisme de redistribution des ressources des collectivités les plus riches vers les moins dotées pour réduire les inégalités territoriales. Ex : FSRIF, fonds de péréquation régionale.', ref: 'P3·C1' },
    { t: 'PLU', d: 'Plan Local d\'Urbanisme : document d\'urbanisme communal ou intercommunal (PLUi) définissant les règles d\'utilisation du sol. Doit être compatible avec les documents supra-communaux (SCOT, PADDM…).', ref: 'P8·C1' },
    { t: 'Préfet', d: 'Représentant de l\'État dans le département et la région. Assure le contrôle de légalité des actes des collectivités, coordonne les services de l\'État, préside la cellule de crise.', ref: 'P2·C2' },
    { t: 'Promotion interne', d: 'Accès à un cadre d\'emplois supérieur sans concours externe, par voie de liste d\'aptitude sur proposition de l\'autorité territoriale, selon un quota (promus/promouvables) fixé par décret.', ref: 'P4·C2' },

    /* Q */
    { t: 'QPC', d: 'Question Prioritaire de Constitutionnalité : mécanisme permettant à tout justiciable de contester la conformité d\'une loi à la Constitution lors d\'un procès. Traitée par le Conseil constitutionnel.', ref: 'P2·C1' },
    { t: 'QPV', d: 'Quartier Prioritaire de la politique de la Ville : zonage fondé sur un critère de revenu, délimitant les territoires bénéficiant des dispositifs de la politique de la ville.', ref: 'P7·C2' },

    /* R */
    { t: 'Réserve (devoir de)', d: 'Obligation pour les fonctionnaires de s\'exprimer avec modération et retenue en public sur les affaires de l\'administration, notamment envers leurs supérieurs et la politique gouvernementale. S\'apprécie selon le grade et la fonction.', ref: 'P6·C2' },
    { t: 'Risque majeur', d: 'Événement d\'origine naturelle (cyclone, séisme, éruption volcanique, inondation) ou technologique pouvant causer des dommages importants. En Martinique : risque sismique, cyclonique et volcanique (Montagne Pelée).', ref: 'P7·C3' },
    { t: 'RPS', d: 'Risques Psycho-Sociaux : stress, burn-out, harcèlement moral ou sexuel au travail. Obligation de prévention pour l\'employeur territorial (DUERP). Enjeu de management bienveillant et de qualité de vie au travail.', ref: 'P4·C3' },
    { t: 'REP', d: 'Recours pour Excès de Pouvoir : recours contentieux devant le tribunal administratif visant l\'annulation d\'un acte administratif illégal. Délai de 2 mois. Ouvert sans avocat obligatoire.', ref: 'P2·C4' },
    { t: 'Régie directe', d: 'Mode de gestion d\'un service public où la collectivité l\'assure elle-même avec son personnel et ses moyens, sans recourir à un opérateur externe.', ref: 'P5·C3' },
    { t: 'RSA', d: 'Revenu de Solidarité Active : allocation différentielle versée aux personnes à faibles ressources. Géré et financé par le département (ou CTM en Martinique).', ref: 'P7·C2' },
    { t: 'RUP', d: 'Région Ultrapériphérique de l\'Union Européenne : statut de la Martinique (et 7 autres régions). Bénéficie de fonds structurels bonifiés (FEDER, FSE+, FEADER…) et d\'adaptations du droit européen.', ref: 'P8·C2' },

    /* S */
    { t: 'SCOT', d: 'Schéma de Cohérence Territoriale : document d\'urbanisme stratégique intercommunal. Encadre PLU, PDU, PLH. Opposable aux documents inférieurs. En Martinique, le PADDM joue un rôle équivalent.', ref: 'P1·C4' },
    { t: 'SEM', d: 'Société d\'Économie Mixte : société anonyme dont une collectivité détient entre 34% et 85% du capital. Permet à la collectivité de s\'associer avec des partenaires privés pour gérer un service ou réaliser un projet.', ref: 'P4·C4' },
    { t: 'Séparation des pouvoirs', d: 'Principe fondamental (Montesquieu) distinguant pouvoir législatif (parlement), exécutif (gouvernement) et judiciaire (tribunaux). Garantit contre l\'arbitraire. Appliqué avec nuances dans le système français (régime semi-présidentiel).', ref: 'P2·C2' },
    { t: 'Service public', d: 'Activité d\'intérêt général assurée ou contrôlée par une personne publique. Soumis aux lois de Rolland : continuité, égalité, adaptabilité (mutabilité). Peut être géré en régie ou délégué.', ref: 'P1·C1' },
    { t: 'SPL', d: 'Société Publique Locale : société anonyme dont le capital appartient à 100% à des collectivités territoriales. Peut se voir confier des délégations de service public sans mise en concurrence, car considérée "in-house".', ref: 'P4·C4' },
    { t: 'SRADDET', d: 'Schéma Régional d\'Aménagement, de Développement Durable et d\'Égalité des Territoires : document de planification régionale pour les régions métropolitaines. Équivalent du PADDM pour la CTM.', ref: 'P1·C5' },
    { t: 'SMART', d: 'Méthode de fixation d\'objectifs : Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini. Outil clé du management par objectifs.', ref: 'P4·C4' },
    { t: 'SRDEII', d: 'Schéma Régional de Développement Économique, d\'Innovation et d\'Internationalisation : document de planification économique régionale. Pour la CTM, il cible l\'emploi, les filières locales et l\'innovation.', ref: 'P8·C1' },
    { t: 'Stage (FPT)', d: 'Période probatoire d\'1 an (en général) à l\'issue du recrutement sur concours. À la fin du stage, l\'agent est titularisé, son stage prolongé, ou il est licencié.', ref: 'P4·C1' },
    { t: 'SWOT', d: 'Outil de diagnostic stratégique : Forces (Strengths), Faiblesses (Weaknesses), Opportunités (Opportunities), Menaces (Threats). Analyse interne et externe d\'un projet ou territoire.', ref: 'P4·C4' },

    /* T */
    { t: 'Tableau d\'avancement', d: 'Document établi annuellement listant les fonctionnaires proposés par l\'autorité territoriale pour un avancement de grade. Établi après avis du CST.', ref: 'P4·C2' },
    { t: 'Traité de Maastricht', d: 'Traité de 1992 fondant l\'Union Européenne. Crée la citoyenneté européenne, l\'union économique et monétaire (euro). La Martinique, en tant que RUP, est pleinement intégrée à l\'UE.', ref: 'P8·C2' },
    { t: 'Tribunal administratif', d: 'Juridiction administrative de droit commun de première instance. Juge les litiges entre les administrés et l\'administration (excès de pouvoir, responsabilité…).', ref: 'P2·C4' },

    /* T */
    { t: 'Transparence administrative', d: 'Obligation pour l\'administration de communiquer ses documents sur demande (loi CADA 1978) et d\'informer les citoyens. Renforcée par les obligations d\'open data et de publication des données de subventions.', ref: 'P7·C1' },

    /* U */
    { t: 'Universalité (principe)', d: 'Principe budgétaire : toutes les recettes et toutes les dépenses doivent figurer au budget. Interdit la contraction (compenser une dépense par une recette) et l\'affectation sans texte.', ref: 'P3·C1' },

    /* V */
    { t: 'Vœux de mutation', d: 'Procédure permettant à un fonctionnaire de demander une mutation vers un autre poste ou une autre collectivité. Gérée via la bourse de l\'emploi du CDG ou directement entre collectivités.', ref: 'P4·C2' },
    { t: 'Voie de fait', d: 'Illégalité manifeste de l\'administration portant gravement atteinte à une liberté fondamentale ou à la propriété privée. Exception permettant au juge judiciaire d\'intervenir dans une affaire administrative.', ref: 'P2·C4' },

    /* Z */
    { t: 'ZAN', d: 'Zéro Artificialisation Nette : objectif fixé par la loi Climat et Résilience 2021. Réduire de 50% le rythme d\'artificialisation des sols d\'ici 2031 et atteindre le ZAN absolu en 2050.', ref: 'P7·C1' },
    { t: 'ZFA', d: 'Zone Franche d\'Activité : dispositif fiscal (LODEOM 2009) accordant des abattements aux entreprises implantées en outre-mer pour compenser les surcoûts de l\'insularité et stimuler l\'emploi.', ref: 'P8·C2' },

    /* Termes supplémentaires */
    { t: 'CGFP', d: 'Code Général de la Fonction Publique : entré en vigueur le 1er mars 2022, il codifie les trois statuts de la fonction publique (État, territoriale, hospitalière) en un texte unique. Remplace les lois du 13/07/1983, 26/01/1984, 11/01/1984 et 09/01/1986.', ref: 'P4·C1' },
    { t: 'CLM', d: 'Congé de Longue Maladie : congé accordé au fonctionnaire atteint d\'une maladie nécessitant un traitement prolongé. Durée max : 3 ans (1 an plein traitement + 2 ans demi-traitement). Soumis à l\'avis du comité médical.', ref: 'P4·C2' },
    { t: 'CLD', d: 'Congé de Longue Durée : congé accordé pour des affections graves (liste réglementaire). Durée max : 5 ans (3 ans plein + 2 ans demi-traitement). Plus protecteur que le CLM.', ref: 'P4·C2' },
    { t: 'DETR', d: 'Dotation d\'Équipement des Territoires Ruraux : aide de l\'État aux communes rurales et petites villes pour financer leurs investissements (voirie, bâtiments publics, équipements numériques). Distribuée par le préfet.', ref: 'P3·C1' },
    { t: 'DSIL', d: 'Dotation de Soutien à l\'Investissement Local : dotation d\'État finançant les projets structurants des collectivités (priorités : écologie, numérique, résilience sanitaire). Distribuée par les préfets de région.', ref: 'P3·C1' },
    { t: 'DUERP', d: 'Document Unique d\'Évaluation des Risques Professionnels : obligation légale pour tout employeur public. Recense tous les risques (physiques, chimiques, psychosociaux) et le plan d\'actions de prévention. Mis à jour chaque année et à chaque changement important.', ref: 'P4·C3' },
    { t: 'FIA', d: 'Formation Initiale d\'Application : formation obligatoire dispensée par le CNFPT à tout lauréat d\'un concours territorial. Sa durée varie selon le cadre d\'emplois (ex : 6 mois pour les attachés). Elle combine apports théoriques et périodes en collectivité.', ref: 'P4·C1' },
    { t: 'FIPHFP', d: 'Fonds pour l\'Insertion des Personnes Handicapées dans la Fonction Publique : finance les aménagements de postes et actions en faveur de l\'emploi des travailleurs handicapés dans les trois versants de la FP. Collectivités : obligation d\'emploi de 6% d\'agents RQTH.', ref: 'P4·C2' },
    { t: 'GEPP', d: 'Gestion des Emplois et des Parcours Professionnels : nouvelle appellation de la GPEC depuis la loi de transformation de la fonction publique de 2019. Démarche prospective d\'adaptation des ressources humaines aux besoins futurs.', ref: 'P4·C2' },
    { t: 'HATVP', d: 'Haute Autorité pour la Transparence de la Vie Publique : institution indépendante créée par la loi Sapin I (2013). Elle reçoit et publie les déclarations de patrimoine et d\'intérêts des élus et hauts fonctionnaires. Prévient les conflits d\'intérêts.', ref: 'P2·C2' },
    { t: 'ISST', d: 'Inspecteur Santé Sécurité Travail : agent de l\'État (DREETS) qui contrôle le respect des règles d\'hygiène et de sécurité dans les services publics, y compris les collectivités territoriales. Peut formuler des injonctions.', ref: 'P4·C3' },
    { t: 'Lanceur d\'alerte', d: 'Personne signalant un crime, délit, manquement grave à la loi ou danger grave et imminent. Protégé par la loi Sapin II (2016, renforcée 2022) contre les représailles. Dans la FPT : possibilité de saisir le référent déontologue ou de déposer en ligne.', ref: 'P4·C3' },
    { t: 'ORSEC', d: 'Organisation de la Réponse de SEcurité Civile : dispositif de gestion des crises prévu par la loi de modernisation de la sécurité civile (2004). Activé par le préfet pour coordonner l\'ensemble des acteurs publics et privés en cas de catastrophe.', ref: 'P7·C3' },
    { t: 'Référent déontologue', d: 'Personne chargée de conseiller les agents et de recevoir les alertes éthiques dans la FPT. Obligatoire depuis la loi Sapin II. Peut être mutualisé avec le CDG. Doit être un tiers indépendant.', ref: 'P4·C3' },
    { t: 'RQTH', d: 'Reconnaissance de la Qualité de Travailleur Handicapé : délivrée par la MDPH. Ouvre des droits spécifiques dans la FPT (aménagement du poste, priorité de mutation, temps partiel de droit). La collectivité peut bénéficier d\'aides du FIPHFP pour les aménagements.', ref: 'P4·C2' },
    { t: 'RSU', d: 'Rapport Social Unique : document annuel obligatoire présenté au CST, regroupant toutes les données RH de la collectivité (effectifs, rémunérations, formations, conditions de travail, égalité F/H). Il remplace l\'ancien bilan social depuis la loi de 2019.', ref: 'P4·C1' },
    { t: 'Télétravail', d: 'Mode d\'organisation du travail permettant à un agent d\'exercer ses fonctions à distance (domicile ou tiers-lieu) grâce au numérique. Encadré par le décret du 5 mai 2020. Droits : équipement, prise en charge des frais, droit à la déconnexion. Maximum 3 jours/semaine en général.', ref: 'P4·C2' }
  ];

  /* Build alphabet index */
  var byLetter = {};
  TERMES.forEach(function (t) {
    var l = t.t.charAt(0).toUpperCase();
    if (!byLetter[l]) byLetter[l] = [];
    byLetter[l].push(t);
  });
  var letters = Object.keys(byLetter).sort();

  var alphabetBtns = letters.map(function (l) {
    return '<button class="glossaire-letter-btn" data-letter="' + l + '">' + l + '</button>';
  }).join('');

  var sectionsHtml = letters.map(function (l) {
    var items = byLetter[l].map(function (t) {
      return '<div class="glossaire-item" data-term="' + t.t.toLowerCase() + '">' +
        '<div class="glossaire-term">' + t.t + '</div>' +
        '<div class="glossaire-def">' + t.d + '</div>' +
        '<div class="glossaire-ref">→ ' + t.ref + '</div>' +
        '</div>';
    }).join('');
    return '<div class="glossaire-section" id="gloss-' + l + '">' +
      '<div class="glossaire-letter-head">' + l + '</div>' +
      items +
      '</div>';
  }).join('');

  var html = '<section id="glossaire" class="page-section">' +
    '<div class="glossaire-header">' +
    '  <h1>📖 Glossaire</h1>' +
    '  <p style="color:var(--text-muted)">' + TERMES.length + ' termes essentiels du concours d\'Attaché Territorial</p>' +
    '</div>' +
    '<div class="glossaire-search">' +
    '  <input type="text" id="glossaire-input" placeholder="Rechercher un terme (ex : décentralisation, DGF, CTM…)">' +
    '</div>' +
    '<div class="glossaire-alphabet">' + alphabetBtns + '</div>' +
    sectionsHtml +
    '</section>';

  var container = document.querySelector('.main-content');
  if (container && !document.getElementById('glossaire')) {
    container.insertAdjacentHTML('beforeend', html);
  }

  /* Search handler */
  document.addEventListener('input', function (e) {
    if (e.target.id !== 'glossaire-input') return;
    var q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.glossaire-item').forEach(function (el) {
      var term = el.dataset.term || '';
      var text = el.textContent.toLowerCase();
      el.classList.toggle('hidden', q.length > 0 && !text.includes(q));
    });
    document.querySelectorAll('.glossaire-section').forEach(function (sec) {
      var visible = sec.querySelectorAll('.glossaire-item:not(.hidden)').length;
      sec.style.display = visible === 0 ? 'none' : '';
    });
  });

  /* Letter jump */
  document.addEventListener('click', function (e) {
    var lb = e.target.closest('.glossaire-letter-btn');
    if (!lb) return;
    var target = document.getElementById('gloss-' + lb.dataset.letter);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
