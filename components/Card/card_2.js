export class Card {
    constructor(idConteneur, titre, contenu, progressBar, progresInitial, id) {
        this.id = id;
        this.contenu = contenu;
        this.progressBar = progressBar;
        this.progresUnitaire = progresInitial / contenu.quizz.length;
        
        // État de la card
        this.estOuvert = true;
        
        // Récupération du parent
        this.parentDom = document.getElementById(idConteneur);
        
        // Éléments principaux stockés en propriétés de classe
        this.dom = {};
        
        // Initialisation
        this.render();
    }

    /**
     * Crée toute la structure HTML de la card
     */
    render() {
        // Conteneur principal
        this.dom.card = this.createElement("div", "card", { id: this.id });
        this.parentDom.appendChild(this.dom.card);

        // Section Cours
        this.createSectionCours();

        // Section Quiz
        this.createSectionQuiz();

        // Liaison des événements globaux
        this.bindEvents();
    }

    createSectionCours() {
        const section = this.createElement("div", "section_cours", {}, this.dom.card);
        const header = this.createElement("div", "conteneur_titre", {}, section);
        
        this.createElement("h2", "titre_section", { textContent: this.contenu.titre }, header);
        
        this.dom.btnAction = this.createElement("button", "button_action", { 
            textContent: "<",
            style: "transform: rotate(-90deg)"
        }, header);

        this.dom.conteneurCours = this.createElement("div", "conteneur_cours", {
            style: "color: var(--white); display: flex;"
        }, section);

        this.createElement("div", "contenue_cours", { innerHTML: this.contenu.cours }, this.dom.conteneurCours);
    }

    createSectionQuiz() {
        this.dom.sectionQuiz = this.createElement("div", "section_quiz", {}, this.dom.card);
        const header = this.createElement("div", "conteneur_titre", {}, this.dom.sectionQuiz);
        this.createElement("h3", "titre_quiz", { textContent: "Questionnaire" }, header);

        const conteneurQuizz = this.createElement("div", "conteneur_quizz", { style: "color: var(--white)" }, this.dom.sectionQuiz);
        const conteneurQuestion = this.createElement("div", "conteneur_question", {}, conteneurQuizz);

        // Génération des questions
        this.contenu.quizz.forEach((quizData, index) => {
            this.renderQuestion(quizData, index, conteneurQuestion);
        });
    }

    renderQuestion(data, qIndex, parent) {
        this.createElement("h4", "question", { textContent: data.question }, parent);
        const conteneurReponses = this.createElement("div", "conteneur_reponses", {}, parent);

        let reserverVerif = [];
        let isQuestionValidee = false;

        data.reponses.forEach((reponseTexte, rIndex) => {
            const divReponse = this.createElement("div", "conteneur_reponse", {
                style: "padding: 5px; border-radius: 100px;"
            }, conteneurReponses);

            const inputId = `${qIndex}_${rIndex}_${this.id}`;
            const input = this.createElement("input", "", {
                type: data.type,
                value: rIndex,
                id: inputId,
                name: `${this.id}_${qIndex}`
            }, divReponse);

            this.createElement("label", "", {
                textContent: reponseTexte,
                htmlFor: inputId
            }, divReponse);

            // Gestion du clic sur une réponse
            input.addEventListener("click", () => {
                this.handleResponseClick(input, divReponse, data, conteneurReponses);
                
                // Logique de progression
                const reponsesChoisies = Array.from(conteneurReponses.querySelectorAll('input:checked')).map(i => i.value);
                const estCorrect = this.checkSuccess(reponsesChoisies, data.valide);

                if (estCorrect && !isQuestionValidee) {
                    this.progressBar.UpdateProgressBar(this.progresUnitaire);
                    isQuestionValidee = true;
                } else if (!estCorrect && isQuestionValidee) {
                    this.progressBar.UpdateProgressBar(-this.progresUnitaire);
                    isQuestionValidee = false;
                }
            });
        });
    }

    handleResponseClick(input, divParent, data, conteneurReponses) {
        if (data.type === "radio") {
            // Reset visuel pour les radios
            conteneurReponses.querySelectorAll(".conteneur_reponse").forEach(el => el.style.backgroundColor = "transparent");
        }

        const estValide = data.valide.includes(input.value);
        
        if (input.checked) {
            divParent.style.backgroundColor = estValide ? "var(--vert)" : "var(--rouge)";
        } else {
            divParent.style.backgroundColor = "transparent";
        }
    }

    checkSuccess(choisis, attendus) {
        if (choisis.length !== attendus.length) return false;
        return choisis.every(val => attendus.includes(val));
    }

    bindEvents() {
        this.dom.btnAction.addEventListener("click", () => this.toggleCollapse());
    }

    toggleCollapse() {
        this.estOuvert = !this.estOuvert;
        const display = this.estOuvert ? "flex" : "none";
        const rotation = this.estOuvert ? "-90deg" : "90deg";

        this.dom.conteneurCours.style.display = display;
        this.dom.sectionQuiz.style.display = this.estOuvert ? "block" : "none";
        this.dom.btnAction.style.transform = `rotate(${rotation})`;
    }

    /**
     * Helper pour créer des éléments plus rapidement
     */
    createElement(tag, className, props = {}, parent = null) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        Object.assign(el, props);
        if (parent) parent.appendChild(el);
        return el;
    }
}