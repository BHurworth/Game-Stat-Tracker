//import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import React, { useState, useEffect } from "react";
//import axios from "axios";
//import { Data } from "./components/Data/Data.js";

import csgoStat from "./pages/csgoStat.js";
import index from "./pages/index.js";
import rlStat from "./pages/rlStat.js";
import lolStat from "./pages/lolStat.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={index} />
      <Route exact path="/csgo" component={csgoStat} />
      <Route exact path="/rl" component={rlStat} />
      <Route exact path="/lol" component={lolStat} />
    </Router>
  );
}

export default App;
