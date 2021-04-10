import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";


function Cards(props) {

    
    return (
      <div className="card" >
            <Link to={props.link} className="imag">
            <img src={props.img}></img>
            </Link>
      </div>
    );
}

export default Cards
