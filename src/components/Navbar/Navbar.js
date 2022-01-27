import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Navbar.styles";

function Navbar() {
  return (
    <Wrapper>
      <div className="nav">
        <li className="nav-links">
          <Link to={"/"} className="nav-item">
            Home
          </Link>
        </li>
        <li className="nav-links">
          <Link to={"SearchForm"} className="nav-item">
            Search
          </Link>
        </li>

        <li className="nav-links">
          <Link to="About" className="nav-item">
            About
          </Link>
        </li>
      </div>
    </Wrapper>
  );
}

export default Navbar;
