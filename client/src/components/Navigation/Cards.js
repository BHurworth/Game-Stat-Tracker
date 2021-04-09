import React from 'react'
import Card from "../../components/Navigation/Card.js";


function Cards() {
    return (
      <div className="card-list">
        <Card
          title="Rocket League"
          img="https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_coverart.jpg"
        />

        <Card
          title="CS:GO"
          img="https://www.influxdata.com/wp-content/uploads/CSGO-logo.jpg"
        />

        <Card title="Rocket League" img="https://i.redd.it/46m4m8vwoxv31.png" />
      </div>
    );
}

export default Cards
