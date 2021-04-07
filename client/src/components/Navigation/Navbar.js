import React from 'react'

export function Navbar() {
    return (
        <div>
        <header className = "nav-header">
        <h2 className = "logo"><a href = "index.html">STAT TRACKER</a></h2>
        <nav>
        <ul className = "nav-links">
                <li><a href = "#"  className = "links">CSGO</a></li>
                <li><a href = "#"  className = "links">Rocket League</a></li>
                <li><a href = "#"  className = "links">Warzone</a></li>
            </ul> 
        </nav>
        {/* <a href = "#section4"><button>Contact</button></a>  */}
        </header> 
        </div>
    )
}


