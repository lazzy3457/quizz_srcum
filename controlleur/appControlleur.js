// import ScrollButton from "./function/scroll_button.js";
import ProgressBar from "../components/ProgressBar/ProgressBar.js";
import { Card } from "../components/Card/Card_1.js";

const progress_bar = new ProgressBar("navbar");

const contenue = [
  {
    "cours": "<h2>Partie 1 : Introduction et Constat de l'Évolution</h2><p>L'évolution de la gestion de projet montre une transition des méthodes classiques (comme De Sanctis, adaptées au BTP) vers des méthodes adaptées à l'informatique. Les statistiques de 2020 révèlent que les <b>méthodes Agiles</b> ont un taux de succès de <b>42%</b>, bien supérieur au modèle Waterfall. On note également 100% d'échecs complets en moins avec l'Agilité.</p>",
    "quizz": [
      {
        "question": "À quel type de projet les méthodes classiques étaient-elles initialement adaptées ?",
        "reponses": [
          "Le développement d'applications mobiles",
          "La construction de ponts et de bâtiments",
          "L'évolution graphique des technologies"
        ],
        "type": "radio",
        "valide": ["1"]
      },
      {
        "question": "Selon les statistiques de 2020, quel était le taux de succès des projets Agiles ?",
        "reponses": ["10%", "42%", "100%"],
        "type": "radio",
        "valide": ["1"]
      },
      {
        "question": "Quelle est la conclusion principale de la comparaison Agilité vs Classique ?",
        "reponses": [
          "Les deux méthodes se valent",
          "Les méthodes classiques sont meilleures pour l'informatique",
          "Les méthodes agiles sont bien supérieures pour l'informatique"
        ],
        "type": "radio",
        "valide": ["2"]
      }
    ]
  },
  {
    "cours": "<h2>Partie 2 : Causes d'Échec et Méthode en V</h2><p>L'échec informatique provient souvent d'un <b>manque de clarté</b> du besoin initial. Contrairement au BTP, les <b>spécifications évoluent</b> constamment (ex: ChatGPT). La <b>méthode en V</b> échoue souvent par son manque de réactivité : son processus séquentiel interdit tout retour en arrière une fois la réalisation commencée.</p>",
    "quizz": [
      {
        "question": "Quelle est la première cause d'échec des projets informatiques ?",
        "reponses": [
          "Le manque de compétences techniques",
          "Le coût trop élevé",
          "Le manque de clarté et mauvaise définition du besoin"
        ],
        "type": "radio",
        "valide": ["2"]
      },
      {
        "question": "Quel est le problème majeur de la méthode en V ?",
        "reponses": [
          "Elle est trop rapide",
          "Elle ne permet pas de revenir sur la conception en phase de réalisation",
          "Elle n'est pas adaptée à la vidéo"
        ],
        "type": "radio",
        "valide": ["1"]
      }
    ]
  },
  {
    "cours": "<h2>Partie 3 : Facteurs d'Échec et Scrum</h2><p>L'échec n'est pas dû à la mauvaise programmation, mais souvent à des <b>priorités non définies</b> et un manque de qualité. Parmi les méthodes Agiles, <b>Scrum</b> est la plus populaire car elle est la plus cadrée (organisation 'presque militaire').</p>",
    "quizz": [
      {
        "question": "Pourquoi la priorité est-elle mal gérée en méthode classique ?",
        "reponses": [
          "On pense que tout doit exister et être fonctionnel immédiatement",
          "Les équipes ne travaillent pas assez",
          "Il n'y a pas de budget"
        ],
        "type": "radio",
        "valide": ["0"]
      },
      {
        "question": "Quelle méthode agile est la plus populaire et structurée ?",
        "reponses": ["Kanban", "Waterfall", "Scrum"],
        "type": "radio",
        "valide": ["2"]
      }
    ]
  },
  {
    "cours": "<h2>Partie 4 : Concepts de Scrum et Agilité</h2><p>Le <b>Sprint</b> est un cycle de 2 à 4 semaines aboutissant à un incrément. L'agilité repose sur la <b>communication face à face</b>, la bienveillance et l'utilisation d'un <b>Tableau de Bord</b> pour suivre l'avancement et l'engagement de l'équipe.</p>",
    "quizz": [
      {
        "question": "Quelle est la durée habituelle d'un Sprint ?",
        "reponses": ["1 an", "2 à 4 semaines", "1 jour"],
        "type": "radio",
        "valide": ["1"]
      },
      {
        "question": "Quels sont les principes clés de l'Agilité ? (Plusieurs réponses)",
        "reponses": [
          "Communication face à face",
          "La bienveillance",
          "Rapports écrits hebdomadaires"
        ],
        "type": "checkbox",
        "valide": ["0", "1"]
      }
    ]
  },
  {
    "cours": "<h2>Partie 5 : Livrables du Projet Pédagogique</h2><p>Le projet consiste à créer un support pédagogique sur Scrum et un test d'évaluation associé. L'évaluation portera sur la <b>qualité</b>, l'<b>exactitude</b>, l'<b>originalité</b> et la <b>pertinence du test</b>. Le code technique ne sera pas évalué.</p>",
    "quizz": [
      {
        "question": "Qu'est-ce qui NE sera PAS évalué lors du projet ?",
        "reponses": [
          "L'exactitude des explications",
          "La pertinence technique ou le code",
          "L'originalité"
        ],
        "type": "radio",
        "valide": ["1"]
      },
      {
        "question": "Quels éléments doivent être fournis ? (Plusieurs réponses)",
        "reponses": [
          "Un support pédagogique",
          "Un test d'évaluation (QCM)",
          "Le code source complet de l'application"
        ],
        "type": "checkbox",
        "valide": ["0", "1"]
      }
    ]
  }
];
contenue.forEach(element => {
    Card("main", "Titre de l'étape", element, progress_bar, 100 / contenue.length);
});

// progress_bar.UpdateProgressBar(10);

