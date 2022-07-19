import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function goSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
