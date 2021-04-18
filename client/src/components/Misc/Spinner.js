import React from "react";

function Spinner(props) {
  return (
      <div className={`loader ${props.size}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
  );
}

export default Spinner;
