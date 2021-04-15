import React from "react";

function TournamentDataCards(props) {
  var beginTimeUk = new Date(props.beginTime);
  var endTimeUk = new Date(props.endTime);
  beginTimeUk = beginTimeUk.toString();
  endTimeUk = endTimeUk.toString();
  beginTimeUk = beginTimeUk.split("+")[0]
  endTimeUk = endTimeUk.split("+")[0];


  return (
    <div id="tourn-card">
      <img src={props.img}></img>
      <h1 className="tourn-title">{props.name}</h1>
      <h3 className="tourn-starttime">Starts at: {beginTimeUk}</h3>
      <h3>Ends at: {endTimeUk}</h3>
    </div>
  );
}

export default TournamentDataCards;
