import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning container">
      <div className="row">
        <h3 className="partOfSpeech text-decoration-underline">
          {props.meaning.partOfSpeech}
        </h3>
      </div>
      <div className="row">
        <div className="col-9">
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
        </div>{" "}
        <div className="col-3">
          <ul className="Synonyms list-unstyled text-center rounded ">
            {props.meaning.synonyms.map(function (synonym, index) {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
