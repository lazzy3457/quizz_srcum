
export default class Sommaire {

    constructor (data, conteneur_html, progress_bar) {
        this.data = data;

        this.div = document.getElementById(conteneur_html);

        this.conteneur = document.createElement("div");
        this.conteneur.id = "sommaire";
        this.div.appendChild(this.conteneur);

        this.liste_lien = [];


        this.init();
    }

    init () {
        this.data.forEach((element, i) => {
            // creation du conteneur du lien
            let conteneur_lien = document.createElement("div")
            this.conteneur.appendChild(conteneur_lien);

            let titre = document.createElement("h2");
            titre.textContent = element.titre;

            let lien = document.createElement("a");
            lien.href = "#" + i;
            lien.className = "sommaire_button"
            lien.textContent = "aller a la section";

            conteneur_lien.appendChild(titre);
            conteneur_lien.appendChild(lien);


        });
    }

    verrou () {

    }
}