import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
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
    <div className="Dictionary container">
      <form onSubmit={goSearch}>
        <input type="search" id="searchbox" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
