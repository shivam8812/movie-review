import React from 'react';
import "./MoviesList.css"
import { Link } from 'react-router-dom';
function MoviesList(props) {
    const movies=props.movies;
    const a=movies.map(movie => 
        {   
            return <div className="movie" key={movie.imdbID}>
                <Link to={`/${movie.imdbID}`}>
                    <img src={movie.Poster} />
                </Link>
                    <p>{movie.Title}</p>
                </div>
        })
    return (
        <div className="movieslist">
            {a}
        </div>
    );
}

export default MoviesList;