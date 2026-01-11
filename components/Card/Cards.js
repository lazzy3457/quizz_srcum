// import ProgressBar from "./ProgressBar";

const liste = {};

export default class Cards {

    constructor (conteneur, titre, data, progressBar, progret, id, sommaire) {

        this.progressBar = progressBar;
        this.conteneur = conteneur;
        this.id = id;
        this.sommaire = sommaire;

        this.data = data[id];
        this.cours = data[id].cours;
        this.quizz = data[id].quizz
        this.titre = this.data.titre;

        this.contenue = data;

        this.nb_bonne_reponse = [];

        this.progress = progret / this.quizz.length;
        this.progret = progret;

        
        this.reponse_utilisateur = [] // [{liste_reponse : [4], element_html : null }] id de la reponse idex du tableau
        this.quizz.forEach((question, index) => {
            this.reponse_utilisateur.push({liste_reponse : [], element_html : [] });
        });
        this.liste_conteneur_correction = [];

        this.visibiliy = true;

        this.termimer = false;

        this.Init();
    }

    Init () {

        this.conteneur_html = document.getElementById(this.conteneur);
        this.card = document.createElement("div");
        this.card.className = "card";
        this.card.id = this.id;
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

        // titre de la card
        this.titre_cours = document.createElement("h2");
        this.titre_cours.className = "titre_section";
        this.titre_cours.textContent = this.titre; 
        this.conteneur_titre_cours.appendChild(this.titre_cours);

        // button ouverture et fermeture
        this.button_action = document.createElement("button");
        this.button_action.textContent = "<";
        this.button_action.className = "button_action";
        this.button_action.style.transform = "rotate(-90deg)";
        this.conteneur_titre_cours.appendChild(this.button_action);

        this.button_action.addEventListener("click", () => {
        if (this.visibiliy) {
            this.visibiliy = false;
            this.conteneur_cours.style.display = "none";
            this.section_quiz.style.display = "none";
            this.button_action.style.transform = "rotate(90deg)";

        }
        else {
            this.visibiliy = true;
            this.conteneur_cours.style.display = "flex";
            this.section_quiz.style.display = "block";
            this.button_action.style.transform = "rotate(-90deg)";

        }
    })

        

        // div qui contient le cours 
        this.conteneur_cours = document.createElement("div");
        this.conteneur_cours.className = "conteneur_cours";
        this.section_cours.appendChild(this.conteneur_cours);

        // div qui contiens le cours sous forme de paragraphe
        this.contenu_cours = document.createElement("div");
        this.contenu_cours.className = "contenue_cours"
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

        

        this.data.quizz.forEach((questionnaire, y) => {
            // conteneur d'une question
            this.conteneur_question = document.createElement("div");
            this.conteneur_question.className = "conteneur_question";
            this.conteneur_quiz.appendChild(this.conteneur_question);
            
            this.SectionQuestion(questionnaire, y);
        })

        this.conteneur_button = document.createElement("div")
        this.conteneur_button.className = "conteneur_button";
        this.conteneur_quiz.appendChild(this.conteneur_button);


        this.button_validate = document.createElement("button");
        this.button_validate.textContent = "Validé";
        this.conteneur_button.appendChild(this.button_validate);
        this.button_validate.addEventListener("click", () => {
            this.TraitementReponse();
        })

        this.button_suivant = document.createElement("button");
        this.button_suivant.textContent = "Suivant";
        this.conteneur_button.appendChild(this.button_suivant);
        this.button_suivant.addEventListener("click", () => {
            this.allerVersCarte(this.id + 1)
        })
        this.button_suivant.style.display = "none";
    }

    allerVersCarte(index) {
        const cible = document.getElementById(index);
        if (cible) {
            cible.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.warn("La carte " + index + " n'a pas encore été générée.");
        }
    }

    SectionQuestion (questionnaire, y) {

        // conteneur d'une question
        let conteneur_question = document.createElement("div");
        conteneur_question.className = "conteneur_question";
        this.conteneur_quiz.appendChild(conteneur_question);
        //
        let question = document.createElement("h4");
        question.className = "question";
        question.textContent = questionnaire.question;
        this.conteneur_question.appendChild(question);

        let conteneur_reponses = document.createElement("div");
        conteneur_reponses.className = "conteneur_reponses";
        this.conteneur_question.appendChild(conteneur_reponses);

        let table_verif = [];
        let progress_bar_update = false;

        let conteneur_correction = document.createElement("div");

        questionnaire.reponses.forEach((reponse, i) => {
            let div_reponse = document.createElement("div")
            div_reponse.className = "conteneur_reponse";
            let input_reponse = document.createElement("input");
            let label_reponse = document.createElement("label");

            input_reponse.type = questionnaire.type;
            console.log(questionnaire.type);
            input_reponse.value = i;
            input_reponse.id = y + "_" + i + "_" + this.id;
            input_reponse.name = y;
            label_reponse.textContent = reponse;
            label_reponse.htmlFor = y + "_" + i + "_" + this.id;
            let etat_question = false;

            div_reponse.appendChild(input_reponse);
            div_reponse.appendChild(label_reponse);
            conteneur_reponses.appendChild(div_reponse);

            input_reponse.addEventListener("click", () => {
                this.GestionEnregistrementReponse(input_reponse, div_reponse, y, i);
            })
        });

        this.conteneur_question.appendChild(conteneur_correction);
        this.liste_conteneur_correction.push(conteneur_correction);

        
    }

    GestionEnregistrementReponse (input, div_reponse, id_question, id_reponse) {
        let info = this.reponse_utilisateur[id_question];
        if (input.type == "radio") {
            if (this.reponse_utilisateur[id_question].element_html[0]) {
                this.reponse_utilisateur[id_question].element_html[0].style.backgroundColor = "transparent";
            }               

            this.reponse_utilisateur[id_question].liste_reponse = [];
            this.reponse_utilisateur[id_question].element_html = [];

            this.reponse_utilisateur[id_question].liste_reponse.push((id_reponse).toString());
            this.reponse_utilisateur[id_question].element_html.push(div_reponse);
        }
        else if (info.liste_reponse.includes(id_reponse)) {
            this.reponse_utilisateur[id_question].liste_reponse = this.reponse_utilisateur[id_question].liste_reponse.filter(item => item !== id_reponse);
            this.reponse_utilisateur[id_question].element_html = this.reponse_utilisateur[id_question].element_html.filter(item => item !== div_reponse);
        }
        else {
            this.reponse_utilisateur[id_question].liste_reponse.push((id_reponse).toString());
            this.reponse_utilisateur[id_question].element_html.push(div_reponse);
        }
    }

    TraitementReponse () {
        if (this.id + 1 < this.contenue.length) {
            this.sommaire.deverrou(this.id + 1); // deverrouille la prochaine partie
        }

        // this.progressBar.UpdateProgressBar(-this.progress * this.nb_bonne_reponse.length);


        console.log(this.reponse_utilisateur)
        this.reponse_utilisateur.forEach((reponse, i) => {
            reponse.liste_reponse.forEach((valeur, y) => {

                // console.log(this.quizz[i].valide, i, valeur)

                valeur = +valeur + 1;

                // console.log(this.quizz[i].valide, i, valeur)


                if (this.quizz[i].valide.includes(valeur.toString())) {
                    reponse.element_html[y].style.backgroundColor = "var(--vert)";
                    this.liste_conteneur_correction[i].innerHTML = ``;

                    if (!this.nb_bonne_reponse.includes(i)) {
                        this.nb_bonne_reponse.push(i);
                        this.progressBar.UpdateProgressBar(this.progress);

                    }
                    console.log(this.nb_bonne_reponse);

                }
                else {
                    reponse.element_html[y].style.backgroundColor = "var(--rouge)";
                    let correction = document.createElement("p");
                    correction.className = "correction";
                    let indice = parseInt(this.quizz[i].valide[0])-1;
                    correction.textContent = "Correction : " +  this.quizz[i].reponses[indice];
                    this.liste_conteneur_correction[i].innerHTML = ``;
                    this.liste_conteneur_correction[i].appendChild(correction);

                    if (this.nb_bonne_reponse.includes(i)) {
                        this.nb_bonne_reponse = this.nb_bonne_reponse.filter(item => item !== i);
                        this.progressBar.UpdateProgressBar(-this.progress);


                    }
                }
            })
        })

        // this.progressBar.UpdateProgressBar(this.progress * this.nb_bonne_reponse.length);
        // console.log(this.nb_bonne_reponse);
        if (this.termimer == false) {
            this.AfficherSuivant();
        }
        this.button_suivant.style.display = "block";
        // this.button_validate.style.display = "none";
        this.termimer = true;

    }
    
    AfficherSuivant() {
    // 1. Calculer l'index suivant
    const suivantIndex = this.id + 1;

    // 2. Vérifier s'il reste des données dans ton tableau global 'contenue'
    if (this.contenue[suivantIndex]) {
        // 3. Créer la nouvelle instance de carte
        // On utilise les mêmes paramètres que le constructeur original
        new Cards(
            this.conteneur, 
            "pika pika",  // titre tmp
            this.contenue, 
            this.progressBar, 
            this.progret, 
            suivantIndex, 
            this.sommaire
        );
        
        
    } else {
        alert(
            "Félicitations, vous avez terminé toutes les sections !" + 
            "\n" + 
            "Avec un total de " + this.progressBar.pourcentage + "% de bonne réponses"
        );
    }
}

    
}

