import "./App.css";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";
import SearchForm from "./components/SearchForm/SearchForm";
import HomeRecipe from "./components/HomeRecipe/HomeRecipe";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import TestFile from "./components/TestFile";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { AppContext, Provider } from "./context";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomeRecipe header="Welcome to Recipes Center by Mac " />}
          ></Route>
          <Route path="/SearchForm" element={<SearchForm />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/recipe/:id" element={<RecipeDetail />}></Route>
          <Route
            path="/SearchForm/recipe/:id"
            element={<RecipeDetail />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
