import React from "react";
import { Navbar } from "../components/Navigation/Navbar.js";
import { Section1 } from "../components/index/Section1.js";

import "../App.css";

function index() {
  return (
    <div>
      <Navbar />
      <Section1 />
    </div>
  );
}

export default index;
