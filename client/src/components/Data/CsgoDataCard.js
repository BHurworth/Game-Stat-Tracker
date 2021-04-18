import React from 'react'



export function CsgoDataCard(props) {


    return (
      <div className="csgo-data-card" id="csgo-data-card">
        <h4 className = "csgo-data-card-h4">{props.data.name}</h4>
        <h2 className = "csgo-data-card-h2">{props.data.value}</h2>
      </div>
    );
}

