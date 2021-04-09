//import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import React, { useState, useEffect } from "react";
//import axios from "axios";
//import { Data } from "./components/Data/Data.js";

import csgoStat from "./pages/csgoStat.js";
import index from "./pages/index.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";


import "./App.css";




function App() {
  return (
   <Router>
     <Route path="/" component={index} />
    </Router>
  );
}

export default App;
