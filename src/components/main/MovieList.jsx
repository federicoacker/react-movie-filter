
import { movieArray } from "../../utils/data.js";
import Movie from "./Movie.jsx";

function MovieList() {
  return (
    movieArray.map(movie => 
        <Movie 
            key={ movie.id }
            title={ movie.title } 
            image={ movie.image } 
            genre={ movie.genre }
        />)
  )
}

export default MovieList