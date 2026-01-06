const liste = {};

export function Card (conteneur) {

    let div = document.getElementById(conteneur);

    let card = document.createElement("div")
    card.className = "card";
    div.appendChild(card)

    let section_cours = document.createElement("div");
    section_cours.className = "section_cours";
    card.appendChild(section_cours);

    let titre_cours = document.createElement("h2");
    titre_cours.textContent = "Titre de la partie";
    section_cours.appendChild(titre_cours);

    let contenu_cours = document.createElement("div");
    contenu_cours.innerHTML = "je suis du cours <p> teste </p>";
    section_cours.appendChild(contenu_cours);
}