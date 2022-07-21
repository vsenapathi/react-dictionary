import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic pb-3">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="audioIcon"
      >
        listen
      </a>{" "}
      {props.phonetic.text}
    </div>
  );
}
