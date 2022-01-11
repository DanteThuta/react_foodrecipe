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
import RecipeDetail from "./components/RecipeDetail";
import TestFile from "./components/TestFile";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { AppContext, Provider } from "./context";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeRecipe />}></Route>
          <Route path="SearchForm" element={<SearchForm />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/recipe/:id" element={<RecipeDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
