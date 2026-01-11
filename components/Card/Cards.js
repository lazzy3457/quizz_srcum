// import ProgressBar from "./ProgressBar";

const liste = {};

export default class Cards {

    constructor (conteneur, titre, data, progressBar, progret, id) {

        this.progressBar = progressBar;
        this.conteneur = conteneur;
        this.id = id;
        this.progret = progret;

        this.data = data;
        this.cours = data.cours;
        this.quizz = data.quizz
        this.titre = this.data.titre;

        this.visibiliy = true;

        this.Init();
    }

    Init () {

        this.conteneur_html = document.getElementById(this.conteneur);
        this.card = document.createElement("div");
        this.card.className = "card";
        this.conteneur_html.appendChild(this.card);

        this.SectionCours();

        this.SectionQuizz();
    }

    SectionCours () {

        // div de la partie cours
        this.section_cours = document.createElement("div");
        this.section_cours.className = "section_cours";
        this.card.appendChild(this.section_cours);

        // la div titre de la partie cours
        this.conteneur_titre_cours = document.createElement("div");
        this.conteneur_titre_cours.className = "conteneur_titre";
        this.section_cours.appendChild(this.conteneur_titre_cours);

        // button ouverture et fermeture
        this.button_action = document.createElement("button");
        this.button_action.textContent = "action";
        this.conteneur_titre_cours.appendChild(this.button_action);

        this.button_action.addEventListener("click", () => {
        if (this.visibiliy) {
            this.visibiliy = false;
            this.conteneur_cours.style.display = "none";
            this.section_quiz.style.display = "none";
        }
        else {
            this.visibiliy = true;
            this.conteneur_cours.style.display = "flex";
            this.section_quiz.style.display = "block";
        }
    })

        // titre de la card
        this.titre_cours = document.createElement("h2");
        this.titre_cours.className = "titre_section";
        this.titre_cours.textContent = this.titre; 
        this.conteneur_titre_cours.appendChild(this.titre_cours);

        // div qui contient le cours 
        this.conteneur_cours = document.createElement("div");
        this.conteneur_cours.className = "conteneur_cours";
        this.section_cours.appendChild(this.conteneur_cours);

        // div qui contiens le cours sous forme de paragraphe
        this.contenu_cours = document.createElement("div");
        this.contenu_cours.innerHTML = this.cours;
        this.conteneur_cours.appendChild(this.contenu_cours);

        
    }
 
    SectionQuizz () {
        // div conteneur du quiz
        this.section_quiz = document.createElement("div");
        this.section_quiz.className = "section_quiz";
        this.card.appendChild(this.section_quiz);

        // div conteneur du titre du quiz 
        this.conteneur_titre_quiz = document.createElement("div");
        this.conteneur_titre_quiz.className = "conteneur_titre";
        this.section_quiz.appendChild(this.conteneur_titre_quiz);

        // titre du quiz
        this.titre_quiz = document.createElement("h3");
        this.titre_quiz.className = "titre_quiz";
        this.titre_quiz.textContent = "Questionnaire";
        this.conteneur_titre_quiz.appendChild(this.titre_quiz);

        // conteneur du quiz
        this.conteneur_quiz = document.createElement("div");
        this.conteneur_quiz.className = "conteneur_quiz";
        this.section_quiz.appendChild(this.conteneur_quiz);

        // conteneur d'une question
        this.conteneur_question = document.createElement("div");
        this.conteneur_question.className = "conteneur_question";
        this.conteneur_quiz.appendChild(this.conteneur_question);

        this.data.quizz.forEach((questionnaire, y) => {
            this.SectionQuestion(questionnaire, y);
        })
    }

    SectionQuestion (questionnaire, y) {
        //
        this.question = document.createElement("h4");
        this.question.className = "question";
        this.question.textContent = questionnaire.question;
        this.conteneur_question.appendChild(this.question);

        this.conteneur_reponses = document.createElement("div");
        this.conteneur_reponses.className = "conteneur_reponses";
        this.conteneur_question.appendChild(this.conteneur_reponses);

        let table_verif = [];
        let progress_bar_update = false;


        questionnaire.reponses.forEach((reponse, i) => {
            this.div_reponse = document.createElement("p")
            this.div_reponse.className = "conteneur_reponse";
            this.input_reponse = document.createElement("input");
            this.label_reponse = document.createElement("label");

            this.input_reponse.type = questionnaire.type;
            this.input_reponse.value = i;
            this.input_reponse.id = y + "_" + i;
            this.input_reponse.name = y;
            this.label_reponse.textContent = reponse;
            this.label_reponse.htmlFor = y + "_" + i;
            this.etat_question = false;




            this.div_reponse.appendChild(this.input_reponse);
            this.div_reponse.appendChild(this.label_reponse);
            this.conteneur_reponses.appendChild(this.div_reponse);
        });
    }
}

