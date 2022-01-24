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
import ReactTest from "./components/ReactTest";
import Navbar from "./components/Navbar";
import { AppContext, AppProvider } from "./context";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeRecipe />}></Route>
          <Route path="SearchForm" element={<SearchForm />}></Route>
          <Route path="ReactTest" element={<ReactTest />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
