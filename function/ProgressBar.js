
export default class ProgressBar {

    constructor(conteneur) {
        // conteneur : id du conteneur de la progress bar
        const main = document.getElementById(conteneur);

        this.progress_bar = document.createElement("div");
        this.affiche_pourcentage = document.createElement("p");
        this.conteneur = document.createElement("div");
        this.progress_bar.className = "progress_bar";
        this.pourcentage = 50;
        this.size = 200;
        this.contenu = document.createElement("div");
        
        main.appendChild(this.progress_bar);
        this.progress_bar.appendChild(this.conteneur);
        this.progress_bar.appendChild(this.affiche_pourcentage);
        this.conteneur.appendChild(this.contenu);

        this.affiche_pourcentage.textContent = this.pourcentage + "%";

        this.conteneur.style.width = this.size + "px";
        this.conteneur.style.backgroundColor = "var(--grey_card_open)";
        this.conteneur.style.borderRadius = "100px"
        this.conteneur.style.padding = " 5px";

        this.contenu.style.width = (this.size * this.pourcentage / 100) + "px";
        this.contenu.style.backgroundColor = "var(--vert)";
        this.contenu.style.borderRadius = "100px"
        this.contenu.style.padding = " 5px 0";



    }   

    UpdateProgressBar (nb) {
        if (this.pourcentage + nb < 100) {
            this.pourcentage += nb;
        }
        else {
            return ;
        }

        this.contenu.style.width = (this.size * this.pourcentage / 100) + "px";
        this.affiche_pourcentage.textContent = this.pourcentage + "%";
    }

}