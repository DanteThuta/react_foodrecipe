import React, { useState, useRef, useEffect } from "react";
import { Wrapper, Content } from "./SearchForm.styles";
import { AppContext, Provider, useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

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
      <Wrapper>
        <Content>
          <div className="searchForm">
            <form onSubmit={submitHandler}>
              <h1>Search Your Favorite Meal:</h1>
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
            {searchResults.length < 1 && (
              <h2>Nothing Found for "{searchItem}"</h2>
            )}
            {searchItem ? (
              searchResults.map((item) => (
                <section key={item.id} className="recipegrid">
                  <img
                    src={`https://spoonacular.com/recipeImages/${item.id}-312x150`}
                    alt="Loading... "
                  />

                  <h2>{item.title}</h2>
                  <li>Cooking Time: {item.readyInMinutes} Minutes</li>
                  <p>{item.serveNum}</p>

                  <button className="detail-btn">
                    <Link
                      to={`recipe/${item.id}`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Detail
                    </Link>
                  </button>
                </section>
              ))
            ) : (
              <h2> "Search Something to Eat"</h2>
            )}
          </div>
        </Content>
      </Wrapper>
    </>
  );
}

export default SearchForm;
