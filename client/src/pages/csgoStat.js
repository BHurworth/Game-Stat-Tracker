import React from 'react'
import { Navbar } from "../components/Navigation/Navbar.js";
import  SteamIdForm  from "../components/Data/SteamIdForm.js";
import { CsgoSection1 } from "../components/csgo/CsgoStatSection1";
import {CsgoNav} from "../components/csgo/CsgoNav.js"


function index() {

    return (
          <>
          <Navbar></Navbar>
          <CsgoSection1></CsgoSection1>
          <CsgoNav></CsgoNav>
        </>
    );
}

export default index
