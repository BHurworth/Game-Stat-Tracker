import React from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./TournamentDataCards.js";

function TournamentsData(props) {
  console.log(props.data);


  return (
    <div id="tourn-container" className={props.className}>
      <h1 className="tourn-title">Tournaments</h1>
        <div id="tournament-cards">
            {props.data.map((data) => {
            return (
                <Card
                // img={data.league.image_url}
                name={data.name}
                beginTime={data.begin_at}
                endTime={data.end_at}
                ></Card>
            );
            })}
        </div>
    </div>
  );
}

export default TournamentsData;
