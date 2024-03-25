import { useState } from "react";

const NewFilm = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [posteurl, setPosteurl] = useState("");
  const [note, setNote] = useState("");
  const [films, setFilms] = useState([]);

  const handleTitleChange = (e) => {
    setTitre(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePosteurlChange = (e) => {
    setPosteurl(e.target.value);
  };
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddFilm = () => {
    const filmajouter = {
      titre: titre,
      description: description,
      posteurl: posteurl,
      note: note,
    };
    setFilms([...films, filmajouter]);

    setTitre("");
    setDescription("");
    setPosteurl("");
    setNote("");
  };

  return (
    <div>
      <div className="bloglist">
        {films.map((film, index) => (
          <div key={index}>
            <h1>Liste des Films Ajouter</h1>
            <a href="" className="blog-title">
              TITRE :{film.titre}
            </a>
            <p className="blog-description-date">{film.description}</p>
            <h5 className="blog-author">{film.posteurl}</h5>
            <small>{film.note}</small>
          </div>
        ))}
      </div>
      <h1>Vous pouvez ajouter un nouveau film</h1>
      <input
        type="text"
        placeholder="Titre"
        onInput={handleTitleChange}
        value={titre}
      />
      <input
        type="text"
        placeholder="Description"
        onInput={handleDescriptionChange}
        value={description}
      />
      <input
        type="text"
        placeholder="PosteURL"
        onInput={handlePosteurlChange}
        value={posteurl}
      />
      <input
        type="text"
        placeholder="Note"
        onInput={handleNoteChange}
        value={note}
      />
      <input type="button" value="add" onClick={handleAddFilm} />
    </div>
  );
};

export default NewFilm;
