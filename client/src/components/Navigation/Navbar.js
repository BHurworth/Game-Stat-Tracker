import React from 'react'

export function Navbar() {
    return (
        <div>
        <header className = "nav-header">
        <h2 className = "logo"><a href = "index.html">CS:GO STAT TRACKER</a></h2>
        <nav>
        <ul className = "nav-links">
                <li><a href = "#"  className = "links">Projects</a></li>
                <li><a href = "#"  className = "links">Photography</a></li>
                <li><a href = "#"  className = "links">About</a></li>
            </ul> 
        </nav>
        {/* <a href = "#section4"><button>Contact</button></a>  */}
        </header> 
        </div>
    )
}


