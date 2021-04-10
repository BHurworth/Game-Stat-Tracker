import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

export function Navbar() {
    return (
      <div>
        <header className="nav-header">
          <Link to="/" className="reactNavLink">
            <h2 className="logo">STAT TRACKER</h2>
          </Link>
          <nav>
            <ul className="nav-links">
              <Link to="/rl" className="reactNavLink">
                <li className="links">Rocket League</li>
              </Link>

              <Link to="/csgo" className="reactNavLink">
                <li className="links">CS:GO</li>
              </Link>

              <Link to="/lol" className="reactNavLink">
                <li className="links">League of Legends</li>
              </Link>
            </ul>
          </nav>
          {/* <a href = "#section4"><button>Contact</button></a>  */}
        </header>
      </div>
    );
}


