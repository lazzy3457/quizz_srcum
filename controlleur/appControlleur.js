// import ScrollButton from "./function/scroll_button.js";
import ProgressBar from "../function/ProgressBar.js";
import { Card } from "../function/card.js";

const progress_bar = new ProgressBar("navbar");

Card("main", "Titre de l'étape", "je suis du cours <p> comment faire du frommage</p> <ul><li>miam</li><li>tacos</li></ul><h3>miam</h3>");

progress_bar.UpdateProgressBar(10);

