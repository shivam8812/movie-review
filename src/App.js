import React from 'react';
import './App.css';
import Search from './Search';
import axios from 'axios'
import MoviesList from './MoviesList'
import Movie from './Movie'
import { createHashHistory } from 'history'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      text:'',movies: [],movie: [],movieUrl:''
    }
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.getMoviesData=this.getMoviesData.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  
  handleInput(e){
    this.setState({
      text:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
      this.setState({
      text:e.target.value,movieUrl:"/"
    })
    this.getMoviesData();
  }
  
  getMoviesData(){
    //setAppState({ loading: true });
    const apiUrl = `https://www.omdbapi.com/?&plot=full&apikey=ed691149&s=${this.state.text}`;
    axios.get(apiUrl).then((repos) => {
      const allmovies = repos.data.Search;
      console.log(allmovies);
      if(repos.data.Response=="True"){
      this.setState({
        movies: allmovies,
      })}
      //setAppState({ loading: false, repos: allRepos });
    });
  }
  handleClick=(id)=> {
    console.log(id);
    const history= createHashHistory();
    const movieurl = `https://www.omdbapi.com/?&plot=full&apikey=ed691149&i=${id}`;
    axios.get(movieurl).then((repos) => {
      const moviedata = repos.data;
      console.log(moviedata);
      this.setState({
        movie: moviedata,movieUrl:(`/${id}`)
      });
      //history.push(this.state.movieUrl);
  })
}


  render(){
  return (
    <div className="App">
      <header className="header">
        <div>
        <h1>Movie Review</h1>
        </div>
      </header>
      <Router>
        
        <div>
          <Switch>
            <Route exact path="/movie-review">
            <Search handleinput={this.handleInput} text={this.state.text} handleSubmit={this.handleSubmit} />
            <MoviesList movies={this.state.movies} handleClick={this.handleClick} />
            </Route>
            <Route path={this.state.movieUrl}>
              <Movie movie={this.state.movie} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
  }
  }

export default App;
