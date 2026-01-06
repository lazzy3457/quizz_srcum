
export default class ProgressBar {

    constructor() {
        const main = document.getElementById("main");

        this.progress_bar = document.createElement("div");
        this.affiche_pourcentage = document.createElement("p");
        this.conteneur = document.createElement("div");
        this.pourcentage = 0;
        this.size = 200;
        this.contenu = document.createElement("div");

        main.appendChild(this.progress_bar);
        this.progress_bar.appendChild(this.conteneur);
        this.progress_bar.appendChild(this.affiche_pourcentage);
        this.conteneur.appendChild(this.contenu);

        this.affiche_pourcentage.textContent = this.pourcentage + "%";

        this.conteneur.style.width = this.size + "px";
        this.conteneur.style.backgroundColor = "var(--grey)";
        this.contenu.style.width = this

        this.contenu.width


    }

    UpdateProgressBar (nb) {
         
    }

}