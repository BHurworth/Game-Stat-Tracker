import React from 'react'
import Card from "../../components/Navigation/Card.js";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";


function Cards() {

    return (
      <div className="card-list">
        <Card
          id="nA"
          title="Rocket League"
          img="https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_coverart.jpg"
          link="/rl"
        />

        <Card
          title="CS:GO"
          img="https://www.influxdata.com/wp-content/uploads/CSGO-logo.jpg"
          link="/csgo"
        />

        <Card
          id="nA"
          title="Rocket League"
          img="https://i.redd.it/46m4m8vwoxv31.png"
          link="/lol"
        />
      </div>
    );
}

export default Cards
