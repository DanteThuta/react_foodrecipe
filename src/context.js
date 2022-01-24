import axios from "axios";
import React, { useEffect } from "react";
import { useState, useContext } from "react";

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
  //Can delete from here
  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${appKey}`
    );
    const data = await response.json();

    const { results } = data;

    // console.log(typeof results);

    if (results) {
      const newRecipes = results.map((item) => {
        const { id, servings, sourceUrl } = item;

        return {
          recipeId: id,
          serveNum: servings,
          url: sourceUrl,
        };
      });
      setRecipes(newRecipes);
    }

    // console.log(data);
    // data.results.forEach((name) => {
    //   console.log(name.title);
    // });
    // setRecipes(data.results);
  };
  //can Delete To Here

  //Search Function
  const fetchSearchRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${appKey}&query=${searchItem}`
    );
    const data = await response.json();

    setSearchResults(data.results);
  };
  useEffect(() => {
    // fetchRecipes();

    //testing by Axios
    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${appKey}&query=${searchItem}`
      )
      .then((res) => {
        const data = res.data.results;
        console.log(data);

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
      })
      .catch((error) => {
        console.log(error);
      });

    fetchSearchRecipe();
  }, [searchItem]);
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
