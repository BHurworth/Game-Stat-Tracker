import React, { useState, useEffect } from "react";
import Card from "../Navigation/Card.js";
import SteamIdForm from "../Data/SteamIdForm.js";
import Tournaments from "../Data/Tournaments.js";
import axios from "axios";
import "../../App.css";

export function CsgoNav() {

     const getData = (e) => {
       const url = "http://localhost:5000/csgo/tournaments";

       axios.get(url).then((response) => settournamentData(response.data));
      //  settournamentData(response.data);
     };

  const [mounted, setMounted] = useState(false);

  if (!mounted) {
    getData();
  }

  useEffect(() => {
    setMounted(true);
  }, []);


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

   const [tournamentData, settournamentData] = useState([{}]);



  return (
    <>
      <div className="csgo-card-list">
        <h1 onClick={() => toggleTab(1)}>Stat tracker</h1>
        <h1 onClick={(e) => {
          toggleTab(2)
        }}>
          Tournaments
        </h1>
        <h1
          onClick={(e) => {
            toggleTab(3);
          }}
        >
          Teams
        </h1>
      </div>
      <SteamIdForm
        className={toggleState === 1 ? "active-tab" : "tab"}
      ></SteamIdForm>
      <Tournaments
        className={toggleState === 2 ? "active-tab" : "tab"}
        data = {tournamentData}
      ></Tournaments>
    </>
  );
}
