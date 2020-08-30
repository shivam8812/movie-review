import React from 'react';
import './App.css';
import Search from './Search';
import axios from 'axios'
import MoviesList from './MoviesList'
import Movie from './Movie'
import { createBrowserHistory } from "history";
import { useHistory,withRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
const customHistory = createBrowserHistory();

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      text:'',movies: [],movie: [],movieUrl:''
    }
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.getMoviesData=this.getMoviesData.bind(this);
  }
  handleInput(e){
    this.setState({
      text:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    //history.push("/movie-review");
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
  componentDidMount(){
    console.log(this.props,"abs")
  }


  render(){
  return (
    <div className="App">
      <header className="header">
        <div>
        <h1>Movie Information</h1>
        </div>
      </header>
      <Router history={customHistory}>
        
        <div>
        <Search handleinput={this.handleInput} text={this.state.text} handleSubmit={this.handleSubmit} />
          <Switch>
            <Route exact path="/movie-review">
              <MoviesList movies={this.state.movies} />
            </Route>
            <Route path="/:movieID">
              <Movie  />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
  }
  }

export default App;
