//import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "./components/Data/Data.js";
import { Navbar } from "./components/Navigation/Navbar.js";
import {Section1} from "./components/Section1/Section1.js"

import useStyles from "./styles";
import "./App.css";

function App() {
  const classes = useStyles();

  const [steamId, setSteamId] = useState({
    steamId: 0,
  });
  const [steamIdData, setSteamIdData] = useState([{}]);
  const [csgoData, setCsgoData] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  //  const getSteamData = (e) => {
  //    axios
  //      .get("http://localhost:5000/csgo/76561198106917090")
  //      .then(function (response) {
  //        console.log(response.data[1].response.players[0]);
  //        setSteamIdData(response.data[1].response.players[0]);
  //      });
  //    e.preventDefault();
  //  };

  const getDatas = (e, id) => {
    let csgoUrl = `http://localhost:5000/csgo/${id}`;
    let steamUrl = `http://localhost:5000/steam/${id}`;

    const requestCsgo = axios.get(csgoUrl);
    const requestSteam = axios.get(steamUrl);

    axios
      .all([requestCsgo, requestSteam])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          setCsgoData(responseOne.data.playerstats.stats);
          setSteamIdData(responseTwo.data.response.players);
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
    e.preventDefault();
  };

  // const getCsgoData = (e) => {
  //   axios
  //     .get("http://localhost:5000/csgo/76561198106917090")
  //     .then(function (response) {
  //       setCsgoData(response.data[1].playerstats.stats);

  //     });
  //   e.preventDefault();
  // };

  // const getSteamData = (e) => {
  //      axios
  //        .get("http://localhost:5000/steam/76561198106917090")
  //        .then(function (response) {
  //         setSteamIdData(response.data.response.players);
  //        });
  //      e.preventDefault();
  //    };

  console.log(csgoData);
  console.log(steamIdData);

  // const yo = (e) => {
  //   console.log("YO");
  //   e.preventDefault();
  // }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Section1></Section1>
      <Data
        personaName={steamIdData[0].personaname}
        totalKills={csgoData[0].value}
        totalDeaths={csgoData[1].value}
        totalPlaytime={csgoData[2].value}
        totalKnifeKills={csgoData[9].value}
      />
      <div>{steamIdData.personaname}</div>
      <form>
        <label>
          steamID:
          <input
            type="number"
            name="steamID"
            onChange={(event) => {
              const value = event.target.value;
              setSteamId({ ...steamId, steamId: value });
              console.log(steamId);
            }}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => getDatas(e, steamId.steamId)}
        />
      </form>
    </div>
  );
}

export default App;
