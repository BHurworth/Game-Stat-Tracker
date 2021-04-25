import React from "react";
import { CsgoNewsCard } from "./CsgoNewsCard.js";

export function CsgoNews(props) {
  return (
    <div id="tourn-container" className={props.className}>
      <h1 className="tourn-title">Latest CS:GO news</h1>
      <div id="tournament-cards">
        {props.data.map((data) => {
          data.contents = data.contents.replace(/<\/?[^>]+(>|$)/g, "");
          return (
            <CsgoNewsCard
              title={data.title}
              contents={data.contents}
              date={data.date}
              url={data.url}
            ></CsgoNewsCard>
          );
        })}
      </div>
    </div>
  );
}
