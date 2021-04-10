import React from 'react'
import { Navbar } from "../components/Navigation/Navbar.js";
import { Section1 } from "../components/Section1/Section1.js";
import { SteamIdForm } from "../components/Data/SteamIdForm.js";

function index() {
    return (
        <div className="App">
          <Navbar></Navbar>
          <SteamIdForm></SteamIdForm>
        </div>
    );
}

export default index
