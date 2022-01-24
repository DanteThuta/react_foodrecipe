import styled from "styled-components";

export const Wrapper = styled.div`
  /* For Navbar Component */

  width: 100%auto;
  background-color: #444;
  color: white;

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-links {
    list-style: none;
    padding: 1em 1.5em;
  }

  .nav-item {
    text-decoration: none;
    padding: 10px 15px;
    color: white;
  }

  .nav-item:hover {
    background-color: royalblue;
    border-radius: 10px;
    opacity: 0.8;
  }
`;
