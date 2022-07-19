import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="nonreferrer">
        <span role={img}>🔈</span>
      </a>{" "}
      {props.phonetic.text}
    </div>
  );
}
