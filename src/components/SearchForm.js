import React, { useState, useRef, useEffect } from "react";
import { AppContext, Provider, useGlobalContext } from "../context";

function SearchForm() {
  const { searchItem, setSearchItem, searchResults, setSearchResults } =
    useGlobalContext();
  const searchValue = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    let recipe = e.target.value;
    setSearchItem(recipe);
    console.log(recipe);
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <>
      <div className="searchForm">
        <form onSubmit={submitHandler}>
          <h2>Search Your Favorite Meal:</h2>
          <input
            type="text"
            className="searchInput"
            ref={searchValue}
            onChange={onChangeHandler}
            // autoFocus="true"
          ></input>

          {/* <button className="searchBtn" onClick={submitHandler}>
            Submit
          </button> */}
        </form>
      </div>
      <div>
        {searchResults.length < 1 && <h2>Nothing Found for "{searchItem}"</h2>}
        {searchItem ? (
          searchResults.map((item) => (
            <section className="recipegrid">
              <img
                src={`https://spoonacular.com/recipeImages/${item.id}-312x150`}
                alt="Loading ..."
              />
              <h2>{item.title}</h2>
              <li>Cooking Time:{item.readyInMinutes} Minutes</li>
            </section>
          ))
        ) : (
          <h2> "Search Something to Eat"</h2>
        )}
      </div>
    </>
  );
}

export default SearchForm;
