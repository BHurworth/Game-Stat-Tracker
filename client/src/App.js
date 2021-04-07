//import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "./components/Data/Data.js";
import { Navbar } from "./components/Navigation/Navbar.js";
import {Section1} from "./components/Section1/Section1.js"
import {SteamIdForm} from "./components/Data/SteamIdForm.js";

import useStyles from "./styles";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Section1></Section1>
      <SteamIdForm></SteamIdForm>
     
    </div>
  );
}

export default App;
