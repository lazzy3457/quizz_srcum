const liste = {};

export function Card (conteneur, titre, contenue) {

    let div = document.getElementById(conteneur);

    // div de la card
    let card = document.createElement("div")
    card.className = "card";
    div.appendChild(card)

    // div de la partie cours
    let section_cours = document.createElement("div");
    section_cours.className = "section_cours";
    card.appendChild(section_cours);

    // la div titre de la partie cours
    let conteneur_titre_cours = document.createElement("div");
    conteneur_titre_cours.className = "conteneur_titre";
    section_cours.appendChild(conteneur_titre_cours);

    // titre de la card
    let titre_cours = document.createElement("h2");
    titre_cours.className = "titre_section";
    titre_cours.textContent = titre;
    conteneur_titre_cours.appendChild(titre_cours);

    // button ouverture et fermeture
    let button_action = document.createElement("button");
    button_action.textContent = "action";
    conteneur_titre_cours.appendChild(button_action);

    // div qui contient le cours
    let conteneur_cours = document.createElement("div");
    conteneur_cours.className = "conteneur_cours";
    section_cours.appendChild(conteneur_cours);

    // div qui contiens le cours sous forme de paragraphe
    let contenu_cours = document.createElement("div");
    contenu_cours.innerHTML = contenue;
    conteneur_cours.appendChild(contenu_cours);

    let etat = true;

    button_action.addEventListener("click", () => {
        if (etat) {
            etat = false;
            conteneur_cours.style.display = "none";
        }
        else {
            etat = true;
            conteneur_cours.style.display = "flex";
        }
    })

    // div conteneur du quiz
    let section_quiz = document.createElement("div");
    section_quiz.className = "section_quiz";
    card.appendChild(section_quiz);

    // div conteneur du titre du quiz 
    let conteneur_titre_quiz = document.createElement("div");
    conteneur_titre_quiz.className = "conteneur_titre";
    section_quiz.appendChild(conteneur_titre_quiz);

    // titre du quiz
    let titre_quiz = document.createElement("h3");
    titre_quiz.className = "titre_quiz";
    titre_quiz.textContent = "Questionnaire";
    conteneur_titre_quiz.appendChild(titre_quiz);

    // conteneur du quiz
    let conteneur_quiz = document.createElement("div");
    conteneur_quiz.className = "conteneur_quiz";
    section_quiz.appendChild(conteneur_quiz);

    // conteneur d'une question
    let conteneur_question = document.createElement("div");
    conteneur_question.className = "conteneur_question";
    conteneur_quiz.appendChild(conteneur_question);

    //
    let question = document.createElement("h4");
    question.className = "question";
    question.textContent = "je suis la question"
    conteneur_question.appendChild(question);

    let conteneur_reponse = document.createElement("div");
    conteneur_reponse.className = "conteneur_reponse";
    conteneur_question.appendChild(conteneur_reponse);

    const reponse = [{question : "question 1", reponse : ["reponse 1", "reponse 2", "reponse 3"]}];

    



}