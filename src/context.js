import React, { useEffect } from "react";
import { useState, useContext } from "react";

const appKey = "6b6789ca";
const appAPI = "55122f95c8478c9d512f65fb4545a1c8";
const url = `https://api.edamam.com/search?q=chicken&app_id=${appAPI}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    setLoading(false);
    let response = fetch(`${url}`);
    // let data = response.json();
    // console.log(typeof response);
    // setRecipes(data);

    // const { item } = data;
    // console.log(item);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <AppContext.Provider value={setRecipes}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
``;
