import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [liste, setliste] = useState([
    {
      Titre: "Inception",
      Description:
        "Un voleur expérimenté est chargé d'implanter une idée dans l'esprit d'une personne en utilisant la technologie de l'inception",
      PosterURL: "URL de l'affiche d'Inception",
      Note: " 4.5 / 5 ",
    },

    {
      Titre: " Le Seigneur des Anneaux : La Communauté de l'Anneau ",
      Description:
        "Une adaptation épique du premier livre de la trilogie de J.R.R. Tolkien, suivant les aventures d'un groupe hétéroclite en quête de détruire un anneau maléfique.",
      PosterURL: "URL de l'affiche du Seigneur des Anneaux",
      Note: " 5 / 5",
    },

    {
      Titre: "Interstellar",
      Description:
        " Dans un futur où la Terre est sur le point de devenir inhabitable, un groupe d'explorateurs entreprend un voyage interstellaire pour trouver un nouvel endroit pour l'humanité.",
      PosterURL: " URL de l'affiche d'Interstellar ",
      Note: " 4.8 / 5",
    },
  ]);
  return (
    <div>
      <MovieCard liste={liste} title=" Liste des films recents" />
    </div>
  );
};

export default MovieList;
