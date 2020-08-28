import React from 'react';
import './Search.css'
import { Link } from 'react-router-dom';

function Search(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
            <input className="ipt" placeholder="movie..." type="text" value={props.text || ""} onChange={props.handleinput} />
            </form>
        </div>
    );
}

export default Search;