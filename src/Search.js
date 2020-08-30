import React from 'react';
import './Search.css'
import { Link, withRouter } from 'react-router-dom';

function Search(props) {
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(e);
        props.handleSubmit(e);
        props.history.push("/movie-review");
    }
    
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
            <input className="ipt" placeholder="movie..." type="text" value={props.text || ""} 
            onChange={props.handleinput} />
            </form>
        </div>
    );
}

export default withRouter(Search);