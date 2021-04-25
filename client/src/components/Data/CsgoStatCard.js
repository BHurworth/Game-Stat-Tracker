import React from 'react'
import {CsgoDataCard} from "./CsgoDataCard.js"

function CsgoStatCard(props) {

const statData = props.data.data;
const statNumbers = props.dataNumbers;

console.log(statNumbers);
    return (
      <div className="csgo-stat-card">
        <h6 className="data-title">{props.title}</h6>
        <div className="csgo-data-container">
          <CsgoDataCard data={statData[statNumbers.n1]}></CsgoDataCard>
          <CsgoDataCard data={statData[statNumbers.n2]}></CsgoDataCard>
          <CsgoDataCard data={statData[statNumbers.n3]}></CsgoDataCard>
          <CsgoDataCard data={statData[statNumbers.n4]}></CsgoDataCard>
          <CsgoDataCard data={statData[statNumbers.n5]}></CsgoDataCard>
          <CsgoDataCard data={statData[statNumbers.n6]}></CsgoDataCard>
          <CsgoDataCard data={statData[statNumbers.n7]}></CsgoDataCard>
          <CsgoDataCard data={statData[statNumbers.n8]}></CsgoDataCard>
        </div>
      </div>
    );
}

export default CsgoStatCard
