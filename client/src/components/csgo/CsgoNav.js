import React, { useState, useEffect } from "react";
import Card from "../Navigation/Card.js";
import SteamIdForm from "../Data/SteamIdForm.js";
import Tournaments from "../Data/Tournaments.js";
import axios from "axios";
import Spinner from "../Misc/Spinner.js"
import "../../App.css";

export function CsgoNav() {
  const [dataLoaded, setdataLoaded] = useState(false);

  const getData = () => {
    const url =
      "http://localhost:5000/csgo/tournaments";

      //"https://game-stat-tracker-server.herokuapp.com/csgo/tournaments";

    axios.get(url).then((response) => {
      settournamentData(response.data);
      setdataLoaded(true);
    });
  };

  const [mounted, setMounted] = useState(false);

  if (!mounted) {
    // setTimeout(() => getData(), 1000);
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

  if (dataLoaded === false) {
    return <Spinner></Spinner>
  } else if (dataLoaded === true) {
    return (
      <>
        <div className="csgo-card-list">
          <h1 onClick={() => toggleTab(1)}>Stat tracker</h1>
          <h1
            onClick={(e) => {
              toggleTab(2);
            }}
          >
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
          id = "trigger"
        ></SteamIdForm>
        <Tournaments
          className={toggleState === 2 ? "active-tab" : "tab"}
          data={tournamentData}
        ></Tournaments>
      </>
    );
  }
}
