import React from 'react'
import { Navbar } from "../components/Navigation/Navbar.js";
import { Section1 } from "../components/Section1/Section1.js";
import { SteamIdForm } from "../components/Data/SteamIdForm.js";
import { CsgoSection1 } from "../components/csgo/csgoSection1";

function index() {
    return (
          <>
          <Navbar></Navbar>
          <CsgoSection1></CsgoSection1>
          <SteamIdForm></SteamIdForm>
        </>
    );
}

export default index
