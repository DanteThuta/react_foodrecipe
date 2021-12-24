import React from "react";

function SearchForm() {
  return (
    <div className="searchForm">
      <form>
        <h2>Type your Recipe:</h2>
        <input type="text" className="searchInput"></input>

        <button className="searchBtn">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
