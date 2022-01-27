import axios from "axios";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { isPersistedState } from "./components/helpers";

// const appID = "6b6789ca";
const appKey = "73b423238828427f8020a4b6d4fa9900";
// const url = `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [searchItem, setSearchItem] = useState("");

  //Home Menu Fetching

  useEffect(() => {
    // testing for Session
    //to retrive Data from Session (Not from API)
    const sessionState = isPersistedState("homeState");

    // if (sessionState) {
    //   console.log("Fetched from Session");
    //   setRecipes(sessionState);
    //   return;
    // }

    //testing by Axios
    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${appKey}&query=${searchItem}`
      )
      .then((res) => {
        const data = res.data.results;

        const newRecipes = data.map((item) => {
          const { id, title, servings, sourceUrl, readyInMinutes } = item;

          return {
            recipeId: id,
            serveNum: servings,
            url: sourceUrl,
            readyTime: readyInMinutes,
            title,
          };
        });
        setRecipes(newRecipes);

        //for Search Results
        setSearchResults(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchItem]);

  // for SessionStorage
  useEffect(() => {
    sessionStorage.setItem("homeState", JSON.stringify(recipes));
  }, [recipes]);

  //for Single Recipe

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        recipes,
        setRecipes,
        searchItem,
        searchResults,
        setSearchResults,
        setSearchItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
