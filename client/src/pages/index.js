import React from 'react'
import { Navbar } from "../components/Navigation/Navbar.js";
import Cards from "../components/Navigation/Cards.js"
import { Section1 } from "../components/Section1/Section1.js";

import "../App.css";

function index() {
    return (
      <div>
        <Navbar />
        <Section1 />
      </div>
    );
}

export default index

