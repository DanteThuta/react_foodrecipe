import "./App.css";
import axios from "axios";
import React, { useContext, useEffect } from "react";

//components
import { Navbar, Home } from "./pages";
import { AppContext, Provider } from "./context";

function App() {
  const sampleMeals = [
    {
      name: "meal1",
      type: "type1",
      info: "lorem43434",
    },
    {
      name: "meal2",
      type: "type2",
      info: "lorem42323",
    },
  ];

  // const url = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);
  return (
    <div className="App">
      <Navbar />
      <Home sampleMeals={sampleMeals} />
    </div>
  );
}

export default App;
