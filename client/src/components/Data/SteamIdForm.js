import axios from "axios";
import React, { useState, useEffect } from "react";
import { Data } from "../Data/Data.js";

export function SteamIdForm() {
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

  const [steamId, setSteamId] = useState({
    steamId: 0,
  });

  return (
    <div id="section2">
      <form id="stat-form">
        <h1 class="stat-header">Enter your Steam ID</h1>
        <label>
          steamID:
          <input
            type="text"
            id="steam-id"
            placeholder="Enter Steam64 ID"
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
          id="submit-button"
          value="Submit ID"
          onClick={(e) => getDatas(e, steamId.steamId)}
        />
      </form>

      <Data
        personaName={steamIdData[0].personaname}
        totalKills={csgoData[0].value}
        totalDeaths={csgoData[1].value}
        totalPlaytime={csgoData[2].value}
        totalKnifeKills={csgoData[9].value}
      />
    </div>
  );
}
