// import ProgressBar from "./ProgressBar";

const liste = {};

export function Card(conteneur, titre, contenue, progressBar, progret, id) {
    // le conteneur : est l'element html qui va receuillir la card
    // le titre : est le titre de la card
    // le contenue : est le cours et les question au format JSON
    // {cours : "<h2>je suis du cours</h2><p>explication du cours</p>",
    //   quizz : [{question : "question 1", reponses : ["reponse 1", "reponse 2", "reponse 3"], type : "radio", valide : ["index_bonne_reponse"]}, {question : "question 1", reponses : ["reponse 1", "reponse 2", "reponse 3"], type : "checkbox", valide : ["index_bonne_reponse1", "index_bonne_reponse2"]}]}

    let div = document.getElementById(conteneur);

    // div de la card
    let card = document.createElement("div")
    card.className = "card";
    card.id = id;
    div.appendChild(card)

    // div de la partie coursA
    let section_cours = document.createElement("div");
    section_cours.className = "section_cours";
    card.appendChild(section_cours);4

    // la div titre de la partie cours
    let conteneur_titre_cours = document.createElement("div");
    conteneur_titre_cours.className = "conteneur_titre";
    section_cours.appendChild(conteneur_titre_cours);

    // titre de la card
    let titre_cours = document.createElement("h2");
    titre_cours.className = "titre_section";
    titre_cours.textContent = contenue.titre;
    conteneur_titre_cours.appendChild(titre_cours);

    // button ouverture et fermeture
    let button_action = document.createElement("button");
    button_action.className = "button_action";
    button_action.textContent = "<";
    button_action.style.transform = "rotate(-90deg)";

    conteneur_titre_cours.appendChild(button_action);

    // div qui contient le cours 
    let conteneur_cours = document.createElement("div");
    conteneur_cours.className = "conteneur_cours";
    conteneur_cours.style.color = "var(--white)";
    section_cours.appendChild(conteneur_cours);

    // div qui contiens le cours sous forme de paragraphe
    let contenu_cours = document.createElement("div");
    contenu_cours.innerHTML = contenue.cours;
    contenu_cours.className = "contenue_cours"
    conteneur_cours.appendChild(contenu_cours);

    let etat = true;

    //&uarr; fleche du haut
    //&darr; fleche du bas  
    // action du button d'ouverture et fermeture
    // a faire avec button_action.innerHTML.

    button_action.addEventListener("click", () => {
        if (etat) {
            etat = false;
            conteneur_cours.style.display = "none";
            section_quiz.style.display = "none";
            button_action.style.transform = "rotate(90deg)";
        }
        else {
            etat = true;
            conteneur_cours.style.display = "flex";
            section_quiz.style.display = "block";
            button_action.style.transform = "rotate(-90deg)";

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
    let conteneur_quizz = document.createElement("div");
    conteneur_quizz.className = "conteneur_quizz";
    conteneur_quizz.style.color = "var(--white)";
    section_quiz.appendChild(conteneur_quizz);

    // conteneur d'une question
    let conteneur_question = document.createElement("div");
    conteneur_question.className = "conteneur_question";
    conteneur_quizz.appendChild(conteneur_question);


    // const quizz = [{question : "question 1", reponses : ["reponse 1", "reponse 2", "reponse 3"], type : "radio", valide : ["2"]}, {question : "question 1", reponses : ["reponse 1", "reponse 2", "reponse 3"], type : "checkbox", valide : ["2", "1"]}];
    const quizz = contenue.quizz;
    let add_progeress_bar = progret / quizz.length;

    quizz.forEach((questionnaire, y) => {
        //
        let question = document.createElement("h4");
        question.className = "question";
        question.textContent = questionnaire.question;
        conteneur_question.appendChild(question);

        let conteneur_reponses = document.createElement("div");
        conteneur_reponses.className = "conteneur_reponses";
        conteneur_question.appendChild(conteneur_reponses);

        let table_verif = [];
        let progress_bar_update = false;


        questionnaire.reponses.forEach((reponse, i) => {
            let div_reponse = document.createElement("div");
            div_reponse.className = "conteneur_reponse";
            div_reponse.style.padding = "5px";
            div_reponse.style.borderRadius = "100px";
            let input_reponse = document.createElement("input");
            let label_reponse = document.createElement("label");

            input_reponse.type = questionnaire.type;
            input_reponse.value = i;
            input_reponse.id = y + "_" + i + "_" + id;
            input_reponse.name = y;
            label_reponse.textContent = reponse;
            label_reponse.htmlFor = y + "_" + i + "_" + id;
            let etat_question = false;




            div_reponse.appendChild(input_reponse);
            div_reponse.appendChild(label_reponse);
            conteneur_reponses.appendChild(div_reponse);

            input_reponse.addEventListener("click", () => {
                if (questionnaire.type == "radio") {
                    conteneur_reponses.childNodes.forEach(reponse_reset => {
                        reponse_reset.style.backgroundColor = "transparent";
                    })
                    table_verif = [];
                }
                table_verif.push(input_reponse.value);
                if (etat_question == true) {
                    div_reponse.style.backgroundColor = "transparent";
                    input_reponse.checked = false;
                    etat_question = false;
                    table_verif = table_verif.filter(value => value !== input_reponse.value)

                }
                else if (questionnaire.valide.includes(input_reponse.value)) {
                    div_reponse.style.backgroundColor = "var(--vert)";
                    etat_question = true;
                    input_reponse.checked = true;

                }
                else {
                    div_reponse.style.backgroundColor = "var(--rouge)";
                    etat_question = true;
                    input_reponse.checked = true;
                }

                const sontEgaux = table_verif.sort().join(',') === questionnaire.valide.sort().join(',');
                if (sontEgaux && progress_bar_update == false) {
                    progressBar.UpdateProgressBar(add_progeress_bar);
                    progress_bar_update = true;
                }
                if (progress_bar_update == true && sontEgaux == false) {
                    progressBar.UpdateProgressBar(-add_progeress_bar);
                    progress_bar_update = false;
                }

            })

        })

    });



}