import React from "React";
import { useContext } from "react";

const appKey = "6b6789ca";
const appAPI = "9111cabc5976a61fbbe53403abfd81f8";
const url = `https://api.edamam.com/search?q=chicken&app_id=${appAPI}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    setLoading(false);
    let response = fetch(`${url}`);
    let data = response.json();

    const { item } = data;
    console.log(item);
  };
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext };
