import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonymsContainer container">
        <ul className="synonymsList">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  }
}
