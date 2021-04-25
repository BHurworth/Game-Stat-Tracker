import React from "react";

 export function CsgoNewsCard(props) {

  return (
    <div id="tourn-card">
      <h1 className="tourn-title">{props.title}</h1>
      <h3 className="tourn-starttime">{props.contents}</h3>
      <h5 className="tourn-starttime">
        <a href={props.url}>{props.url}</a>
      </h5>
    </div>
  );
}

