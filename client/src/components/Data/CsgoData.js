import React from "react";
import CsgoStatCard from "./CsgoStatCard.js";

export function CsgoData(props) {
  
  const dataNumbers = {
      "n1": 0,
      "n2": 1,
      "n3": 3,
      "n4": 4,
      "n5": 5,
      "n6": 6,
      "n7": 7,
      "n8": 8,
    }
  const dataNumbers2 = {   "n1": 9, "n2": 10, "n3": 11, "n4": 12, "n5": 13, "n6": 14, "n7": 15, "n8": 16 }
  
  return (
    <div className="csgo-data">
      <CsgoStatCard
        data={props}
        dataNumbers={dataNumbers}
        title="General statistics"
      ></CsgoStatCard>
      <CsgoStatCard
        data={props}
        dataNumbers={dataNumbers2}
        title="Gun statistics"
      ></CsgoStatCard>
    </div>
  );
}
