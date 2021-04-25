import axios from "axios";
import React, { useState, useEffect } from "react";
import { Data } from "./CsgoData.js";
import {CsgoProfile} from "../Data/CsgoProfile.js"
import Spinner from "../Misc/Spinner.js";
import {CsgoData} from "./CsgoData"


function SteamIdForm(props) {
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
    setfindingStats(false);
    setstatLoader(true);
    let csgoUrl = `http://localhost:5000/csgo/${id}`;
    
    // `http://localhost:5000/csgo/${id}`;                     
    // `https://game-stat-tracker-server.herokuapp.com/csgo/${id}`;

    let steamUrl = `http://localhost:5000/steam/${id}`;

  //   http://localhost:5000/steam/${id};
  // `https://game-stat-tracker-server.herokuapp.com/steam/${id}`;

    const requestCsgo = axios.get(csgoUrl);
    const requestSteam = axios.get(steamUrl);

    axios
      .all([requestCsgo, requestSteam])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          console.log(responseOne);
          console.log(responseTwo);
          setCsgoData(responseOne.data.playerstats.stats);
          setSteamIdData(responseTwo.data.response.players);
          setfindingStats(true);
          setstatLoader(false);
        })
      )
      .catch((errors) => {
        console.log(errors);
      });

      console.log(steamIdData[0].avatarfull);
      

    e.preventDefault();
  };

  const [steamId, setSteamId] = useState({
    steamId: 0,
  });

    const [findingStats, setfindingStats] = useState(false);
    const [statLoader, setstatLoader] = useState(false);



return (
  <div id="section2" className={props.className}>
    <h1>CS:GO personal stat checker</h1>
    <h5 id="steam-id-example">Try: 76561198106917090</h5>

    <div class="search_wrap search_wrap_6">
      <div class="search_box">
        <input
          name="steamID"
          type="text"
          class="input"
          placeholder="Enter Steam64 ID"
          onChange={(event) => {
            const value = event.target.value;
            setSteamId({ ...steamId, steamId: value });
            console.log(steamId);
          }}
        ></input>
        <div class="btn" onClick={(e) => getDatas(e, steamId.steamId)}>
          <p>Enter</p>
        </div>
      </div>
    </div>

    {/* <Data
        personaName={steamIdData[0].personaname}
        totalKills={csgoData[0].value}
        totalDeaths={csgoData[1].value}
        totalPlaytime={csgoData[2].value}
        totalKnifeKills={csgoData[9].value}
      /> */}
    {statLoader ? <Spinner size="small"></Spinner> : null}
    {findingStats ? (
      <CsgoProfile
        profilePicture={steamIdData[0].avatarfull}
        personaName={steamIdData[0].personaname}
        playtime={csgoData[2].value}
        profileUrl={steamIdData[0].profileurl}
      ></CsgoProfile>
    ) : null}
    {findingStats ? <CsgoData data={csgoData}></CsgoData> : null}
  </div>
);
  }
  


export default SteamIdForm;
