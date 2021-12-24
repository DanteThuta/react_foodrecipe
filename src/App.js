import "./App.css";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";
import SearchForm from "./components/SearchForm";
import HomeRecipe from "./components/HomeRecipe";
import Navbar from "./components/Navbar";
import { AppContext, Provider } from "./context";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeRecipe />}></Route>
          <Route path="SearchForm" element={<SearchForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
