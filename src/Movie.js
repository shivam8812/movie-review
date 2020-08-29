import React from 'react';
import { Link } from 'react-router-dom';
import "./Movie.css"
function Movie(props) {
    const movie=props.movie;
    const movieData=<div>
        <Link to="/" className="lk">
        <div className="box">
            <div className="hm">
          <h1 className="home">home</h1>
          </div>
          </div>
        </Link>
        <img src={movie.Poster} />
        <h1>Actors</h1> <div className="jtext">{movie.Actors}</div>
        <h1>Description</h1> <div className="jtext">{movie.Plot}</div> 
        <h1>Rating </h1> <div className="jtext">{movie.imdbRating}</div>
        <h1>Released Date </h1> <div className="jtext">{movie.Released}</div>
        <h1>BoxOffice Collection </h1> <div className="jtext">{movie.BoxOffice}</div>
        </div>
    return (
        <div>
            {movieData}
        </div>
    );
}

export default Movie;