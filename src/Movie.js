import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios'
import "./Movie.css"
function Movie(props) {
    const [movie,setmovie]=useState({});
    let { movieID } = useParams();
    useEffect(() => {
            console.log(movieID);
            const movieurl = `https://www.omdbapi.com/?&plot=full&apikey=ed691149&i=${movieID}`;
            axios.get(movieurl).then((repos) => {
              const moviedata = repos.data;
              console.log(moviedata);
              setmovie(
                moviedata
              )});               
    },[]);
    const movieData=<div>
        <Link to="/movie-review" className="lk">
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