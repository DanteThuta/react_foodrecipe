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
  const [temp, setTemp] = useState();

  //Home Menu Fetching
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

  //Search Function
  const fetchSearchRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${appKey}&query=${searchItem}`
    );
    const data = await response.json();

    setSearchResults(data.results);
  };
  useEffect(() => {
    fetchRecipes();
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
        temp,
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
