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
    let conteneur_titre = document.createElement("div");
    conteneur_titre.className = "conteneur_titre";
    section_cours.appendChild(conteneur_titre);

    // titre de la card
    let titre_cours = document.createElement("h2");
    titre_cours.className = "titre_section";
    titre_cours.textContent = titre;
    conteneur_titre.appendChild(titre_cours);

    // button ouverture et fermeture
    let button_action = document.createElement("button");
    button_action.textContent = "action";
    conteneur_titre.appendChild(button_action);

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
}