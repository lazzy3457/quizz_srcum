
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
        this.conteneur_titre = document.createElement("div");
        this.conteneur_titre.className = "conteneur_titre"

        this.titre_sommaire = document.createElement ("h1");
        this.titre_sommaire.textContent = "Carte d'apprentissage"

        this.conteneur_titre.appendChild(this.titre_sommaire);
        this.conteneur.appendChild(this.conteneur_titre)

        this.conteneur_card = document.createElement("div");
        this.conteneur.appendChild(this.conteneur_card);
        this.conteneur_card.className = "conteneur_card";

        this.data.forEach((element, i) => {
            // creation du conteneur du lien
            let conteneur_lien = document.createElement("div")
            conteneur_lien.className = "sommaire_card";
            this.conteneur_card.appendChild(conteneur_lien);

            let titre = document.createElement("h2");
            titre.textContent = element.titre;
            
            let  lien; 

            if (i == 0) {
                lien = document.createElement("a");
                lien.href = "#" + i;
                lien.className = "sommaire_button"
                lien.textContent = "Aller vers la section";
            }
            else {
                lien = document.createElement("p");
                lien.className = "sommaire_button"
                lien.textContent = "Validé l'étape precedente";
            }

            this.liste_lien.push(lien);

            conteneur_lien.appendChild(titre);
            conteneur_lien.appendChild(lien);


        });
    }

    deverrou (index) {
        let lien = document.createElement("a");
        lien.href = "#" + index;
        lien.className = "sommaire_button"
        lien.textContent = "Aller vers la section";

        this.liste_lien[index].replaceWith(lien);
    }
}