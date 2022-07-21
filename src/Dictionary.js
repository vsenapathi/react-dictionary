import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {}
  function goSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey = `563492ad6f91700001000001d99228e7784245c4b42e730281663e53`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    axios.get(pexelsApiUrl).then(handlePexelsResponse);
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
