import React from "react";

function TournamentDataCards(props) {
  return (
    <div>
      <img src={props.img}></img>
      <h1 className = "tourn-title">{props.name}</h1>
      <h3 className = "tourn-starttime">Starts at: {props.beginTime}</h3>
      <h3>Ends at: {props.endTime}</h3>
    </div>
  );
}

export default TournamentDataCards;
