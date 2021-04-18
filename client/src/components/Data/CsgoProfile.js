import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  BrowserRouter,
} from "react-router-dom";



export function CsgoProfile({profilePicture, personaName, playtime, profileUrl}) {
    return (
      <div className="csgo-profile">
        <a href = {profileUrl} className="imag">
          <img src={profilePicture}></img>
        </a>
        <h5>{personaName}</h5>
        <h5 id="playtime">Ingame playtime: {Math.round(playtime / 3600)}</h5>
        {/* <h5 id="profile-url">{profileUrl}</h5> */}
      </div>
    );
}


