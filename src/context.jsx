import React, { useState, useEffect, useContext, Children } from "react";
import axios from "axios";

const url = "www.themealdb.com/api/json/v1/1/search.php?f=a";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {
    axios.get(url).then((response) => {
      const data = response.data.results;
      console.log(data);
    });
    //   .catch(error)(console.log(error));
  }, []);
  return <AppContext.Provider value="">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
