import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <li className="nav-links">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="nav-links">
        <Link to="SearchForm">Search</Link>
      </li>
      <li className="nav-links">
        <a href="">About</a>
      </li>
    </div>
  );
}

export default Navbar;
