import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MovieList";
import NewFilm from "./NewFilm";

function App() {
  return (
    <div className="App">
      <MovieList />
      <NewFilm />
    </div>
  );
}

export default App;
