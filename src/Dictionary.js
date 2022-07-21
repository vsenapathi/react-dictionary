import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function goSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary container pt-3 pb-5">
      <form onSubmit={goSearch}>
        <input
          type="search"
          id="searchbox"
          onChange={handleKeywordChange}
          className="rounded-pill text-center d-block"
          placeholder="search"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
