
export default class ProgressBar {

    constructor(conteneur, sommaire) {
        // conteneur : id du conteneur de la progress bar
        const main = document.getElementById(conteneur);

        this.sommaire = sommaire // permet la gestion des lock pour le sommaire

        this.progress_bar = document.createElement("div");
        this.affiche_pourcentage = document.createElement("p");
        this.conteneur = document.createElement("div");
        this.progress_bar.className = "progress_bar";
        this.pourcentage = 0;
        this.size = 200;
        this.contenu = document.createElement("div");
        
        main.appendChild(this.progress_bar);
        this.progress_bar.appendChild(this.conteneur);
        this.progress_bar.appendChild(this.affiche_pourcentage);
        this.conteneur.appendChild(this.contenu);


        this.conteneur.style.width = this.size + "px";
        this.conteneur.style.backgroundColor = "var(--grey_card_open)";
        this.conteneur.style.borderRadius = "100px"
        this.conteneur.style.padding = " 5px";

        this.contenu.style.backgroundColor = "var(--vert)";
        this.contenu.style.borderRadius = "100px"
        this.contenu.style.padding = " 5px 0";

        this.Render();

    }   

    UpdateProgressBar (nb) {
        if (this.pourcentage + nb <= 100) {
            this.pourcentage += nb;
        }
        else {
            return ;
        }

        this.Render();
    }

    Render () {

        const largeurPx = Math.round((this.size * this.pourcentage) / 100);        
        this.affiche_pourcentage.textContent = Math.round(this.pourcentage) + "%";
        this.contenu.style.width = largeurPx + "px";
    }

}