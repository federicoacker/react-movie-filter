

import Movie from "./Movie.jsx";

function MovieList({movieArray}) {
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