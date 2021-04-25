import React, { useState, useEffect } from "react";
import Card from "../Navigation/Card.js";
import SteamIdForm from "../Data/SteamIdForm.js";
import Tournaments from "../Data/Tournaments.js";
import axios from "axios";
import Spinner from "../Misc/Spinner.js";
import {CsgoNews} from "../Data/CsgoNews.js"
import "../../App.css";

export function CsgoNav() {
  const [dataLoaded, setdataLoaded] = useState(false);

  const getData = () => {
    const csgoTournUrl = "http://localhost:5000/csgo/tournaments";

    // "http://localhost:5000/csgo/tournaments";
    //"https://game-stat-tracker-server.herokuapp.com/csgo/tournaments";

    const csgoNewsUrl = "http://localhost:5000/csgo/news";

    // "http://localhost:5000/csgo/news";
    //"https://game-stat-tracker-server.herokuapp.com/csgo/news";

    const requestTourn = axios.get(csgoTournUrl);
    const requestNews = axios.get(csgoNewsUrl);

    axios
      .all([requestTourn,requestNews])
      .then(axios.spread((...responses) => {
        const tournamentResponse = responses[0];
        const newsResponse = responses[1];
        settournamentData(tournamentResponse.data);
        setnewsData(newsResponse.data.appnews.newsitems);
        console.log(newsResponse.data.appnews.newsitems);
        setdataLoaded(true);
      }));
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
    const [newsData, setnewsData] = useState([{}]);

  if (dataLoaded === false) {
    return <Spinner size="large"></Spinner>;
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
            News
          </h1>
        </div>
        <SteamIdForm
          className={toggleState === 1 ? "active-tab" : "tab"}
          id="trigger"
        ></SteamIdForm>
        <Tournaments
          className={toggleState === 2 ? "active-tab" : "tab"}
          data={tournamentData}
        ></Tournaments>
        <CsgoNews
          className={toggleState === 3 ? "active-tab" : "tab"}
          data={newsData}
        ></CsgoNews>
      </>
    );
  }
}
