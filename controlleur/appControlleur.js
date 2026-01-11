import ProgressBar from "../components/ProgressBar/ProgressBar.js";
import Sommaire from "../components/Sommaire/Sommaire.js";
import Cards from "../components/Card/Cards.js";

const progress_bar = new ProgressBar("navbar");

const contenue = [
  {
    "titre": "Partie 1 : Introduction et Constat de l'Évolution",
    "cours": "<h2>L'évolution de la gestion de projet</h2><p>Les méthodes classiques, comme celle de De Sanctis, étaient initialement adaptées aux projets traditionnels (construction de ponts, de bâtiments). Cependant, l'avènement de l'informatique a nécessité de nouvelles approches.</p><h3>Statistiques Clés (2020)</h3><p>Les méthodes agiles montrent un taux de succès de <strong>42%</strong> pour les projets respectant délais, budget et ambitions. À l'inverse, la méthode Waterfall présente environ <strong>100% d'échecs complets en plus</strong> par rapport aux méthodes agiles.</p><p><strong>Conclusion :</strong> Les méthodes agiles sont bien supérieures pour les projets informatiques.</p>",
    "quizz": [
      {
        "question": "À quel type de projet les méthodes classiques comme celle de De Sanctis étaient-elles initialement adaptées ?",
        "reponses": [
          "Le développement d'applications mobiles",
          "La gestion de projet d'intelligence artificielle",
          "La construction de ponts et de bâtiments",
          "L'évolution graphique des technologies"
        ],
        "type": "radio",
        "valide": ["3"]
      },
      {
        "question": "Selon les statistiques de 2020, quel était le taux de succès des projets informatiques utilisant les méthodes agiles ?",
        "reponses": ["100%", "Un taux inférieur à Waterfall", "42%", "10%"],
        "type": "radio",
        "valide": ["3"]
      },
      {
        "question": "Quelle est la conclusion principale de la comparaison statistique ?",
        "reponses": [
          "Succès similaire entre les deux méthodes",
          "Les méthodes classiques sont supérieures en informatique",
          "Les méthodes agiles sont bien supérieures pour l'informatique",
          "Le succès ne dépend pas de la méthode"
        ],
        "type": "radio",
        "valide": ["3"]
      }
    ]
  },
  {
    "titre": "Partie 2 : Les Causes d'Échec des Projets Informatiques",
    "cours": "<h2>Pourquoi les projets échouent-ils ?</h2><ol><li><strong>Manque de clarté :</strong> C'est la première cause. Il faut comprendre le vrai besoin (ex: acquisition client vs simple page Facebook).</li><li><strong>Évolution des spécifications :</strong> Contrairement au BTP, l'informatique change vite (ex: arrivée de ChatGPT).</li><li><strong>Manque de réactivité :</strong> Lié à la rigidité de la méthode en V.</li></ol><h3>Le problème de la Méthode en V</h3><p>Processus séquentiel : une fois en phase de réalisation, il est impossible de revenir sur la conception, comme pour un tournage de film après l'écriture du scénario.</p>",
    "quizz": [
      {
        "question": "Quelle est la première cause d'échec des projets informatiques ?",
        "reponses": [
          "Manque de compétences des programmeurs",
          "Manque de clarté et mauvaise définition du besoin",
          "Coût trop élevé",
          "Utilisation de l'Agile"
        ],
        "type": "radio",
        "valide": ["2"]
      },
      {
        "question": "Quel élément est volatile et peut causer l'échec d'un projet informatique ?",
        "reponses": [
          "La durée du projet",
          "La bienveillance",
          "L'évolution des spécifications",
          "La phase de réalisation"
        ],
        "type": "radio",
        "valide": ["3"]
      },
      {
        "question": "Quel est le problème majeur de la méthode en V ?",
        "reponses": [
          "Elle est trop rapide",
          "Impossibilité de revenir sur la conception en phase de réalisation",
          "Pas adaptée à la vidéo",
          "Elle ne définit pas les besoins"
        ],
        "type": "radio",
        "valide": ["2"]
      }
    ]
  },
  {
    "titre": "Partie 3 : Facteurs d'Échec et Introduction à Scrum",
    "cours": "<h2>Autres facteurs d'échec</h2><ul><li><strong>Priorités non définies :</strong> Vouloir que tout fonctionne tout de suite.</li><li><strong>Manque de qualité :</strong> Défaut de tests appropriés.</li><li><strong>Ambitions non prévues :</strong> Évolution des usages.</li></ul><p>L'échec n'est généralement pas dû à une mauvaise programmation technique.</p><h2>Focus sur Scrum</h2><p>C'est la méthode agile la plus populaire car elle est très cadrée, structurée et presque \"militaire\".</p>",
    "quizz": [
      {
        "question": "Qu'est-ce qui mène souvent à des problèmes de priorisation ?",
        "reponses": [
          "L'engagement de l'équipe",
          "L'idée que tout doit exister et être fonctionnel",
          "Le tableau de bord",
          "La communication"
        ],
        "type": "radio",
        "valide": ["2"]
      },
      {
        "question": "L'échec est-il dû à une mauvaise programmation ?",
        "reponses": [
          "Oui, c'est la cause principale",
          "Non, c'est rarement dû aux compétences techniques",
          "Seulement en méthode classique",
          "La qualité du code n'importe pas"
        ],
        "type": "radio",
        "valide": ["2"]
      },
      {
        "question": "Quelle méthode est dite 'presque militaire' et très populaire ?",
        "reponses": ["Waterfall", "Kanban", "Méthode en V", "Scrum"],
        "type": "radio",
        "valide": ["4"]
      }
    ]
  },
  {
    "titre": "Partie 4 : Concepts Clés et Principes de Scrum",
    "cours": "<h2>Le Sprint</h2><p>Un sprint est un incrément (portion de travail) de 2 à 4 semaines, suivi d'une inspection.</p><h2>Principes Agiles</h2><ul><li><strong>Communication face à face :</strong> Quotidienne et directe.</li><li><strong>Bienveillance :</strong> Cruciale pour gérer le stress.</li><li><strong>Tableau de Bord :</strong> Outil visuel pour suivre l'avancement et l'engagement.</li></ul><p><strong>Avantage majeur :</strong> Le projet peut s'arrêter à tout moment, limitant les pertes financières si le produit ne convient pas.</p>",
    "quizz": [
      {
        "question": "Comment appelle-t-on une période de travail de 2 à 4 semaines dans Scrum ?",
        "reponses": ["Cahier fonctionnel", "Réalisation", "Sprint", "Inspection"],
        "type": "radio",
        "valide": ["3"]
      },
      {
        "question": "Quel est un principe clé des interactions agiles ?",
        "reponses": [
          "Rapports écrits longs",
          "Communication face à face quotidienne",
          "Conception générale préalable",
          "Hiérarchie militaire"
        ],
        "type": "radio",
        "valide": ["2"]
      },
      {
        "question": "Quel est le but du Tableau de Bord ?",
        "reponses": [
          "Spécifications détaillées",
          "Support pédagogique",
          "Communication et suivi visuel",
          "Remplacer l'équipe"
        ],
        "type": "radio",
        "valide": ["3"]
      }
    ]
  },
  {
    "titre": "Partie 5 : Les Livrables du Projet Pédagogique",
    "cours": "<h2>Consignes du projet</h2><p>Vous devez créer un support pédagogique expliquant Scrum et un test (QCM) associé.</p><h3>Critères d'évaluation</h3><ul><li>Qualité générale et exactitude.</li><li><strong>Originalité et design :</strong> créativité du support.</li><li><strong>Pertinence du test :</strong> lien direct avec votre cours.</li></ul><p><em>Note : Le code technique ne sera pas évalué.</em></p>",
    "quizz": [
      {
        "question": "Quel élément doit être en lien direct avec le support pédagogique ?",
        "reponses": ["Vidéo", "Cahier fonctionnel", "Test d'évaluation", "Tableau de bord"],
        "type": "radio",
        "valide": ["3"]
      },
      {
        "question": "Quel critère concerne l'aspect visuel et créatif ?",
        "reponses": [
          "Exactitude",
          "Pertinence du test",
          "Changement de nom",
          "Design et originalité"
        ],
        "type": "radio",
        "valide": ["4"]
      },
      {
        "question": "Qu'est-ce qui ne sera PAS évalué ?",
        "reponses": [
          "Originalité",
          "Qualité du support",
          "Pertinence technique ou code",
          "Exactitude des explications"
        ],
        "type": "checkbox",
        "valide": ["3", "2"]
      }
    ]
  }
];

const sommaire = new Sommaire(contenue, "main", progress_bar);

const seuille = 100 / contenue.length;

contenue.forEach((element, i) => {
    const card = new Cards("main", "Titre de l'étape", element, progress_bar, seuille, i);
});

// progress_bar.UpdateProgressBar(10);

