import React from 'react';
import { Link } from 'react-router-dom';

function Movie(props) {
    const movie=props.movie;
    const movieData=<div>
        <Link to="/">
          <h1>home</h1>
        </Link>
        <img src={movie.Poster} />
        <h1>Actors: {movie.Actors}</h1>
        <h1>Description: {movie.Plot}</h1>
        <h1>Rating: {movie.imdbRating}</h1>
        <h1>Released Date: {movie.Released}</h1>
        <h1>BoxOffice Collection: {movie.BoxOffice}</h1>
        </div>
    return (
        <div>
            {movieData}
        </div>
    );
}

export default Movie;