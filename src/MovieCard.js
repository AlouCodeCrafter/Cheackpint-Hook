const MovieCard = ({ liste, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="bloglist">
        {liste.map((attribut) => (
          <div key={"id"} className="blog">
            <a href="" className="blog-title">
              {" TITRE  : "}
              {attribut.Titre}{" "}
            </a>
            <small className="blog-description-date">
              {" "}
              {attribut.Description}{" "}
            </small>
            <p className="blog-author"> {attribut.PosterURL} </p>
            <small> Note : {attribut.Note}</small>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCard;
