import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <span className="definition">{definition.definition}</span>
              <br />
              <em className="example">{definition.example}</em>
              <br />{" "}
            </p>
          </div>
        );
      })}
      <ul className="Synonyms">
        {props.meaning.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
      ;
    </div>
  );
}
