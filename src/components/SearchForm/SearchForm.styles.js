import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  /* For SearchForm Component */
  .searchForm {
    /* background-color: linen; */

    padding: 25px 10px;
  }

  .searchInput {
    padding: 10px 15px;
    border: 0;
    border-radius: 15px;
  }

  //For Item Displayed Component (Copy from HomeRecipe)
  h2 {
    display: inline-block;
    font-size: 2em;
    padding: 10px 25px;
    background: transparent;
    background-color: grey;
    border: 1px solid white;
    border-radius: 10px;
  }

  .recipegrid {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

    display: flex;
    flex-direction: column;
    width: 500px;
    min-height: auto;

    /* padding: 30px 0; */
    margin: 40px auto;

    border-bottom: 1px solid #888;
    border-radius: 10px;

    transition: 1s all;
  }

  .recipegrid:hover {
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  }

  .recipegrid li {
    list-style: none;
  }

  .recipe-image {
    object-fit: fit;
    width: 100%;
    height: 300px;

    border-radius: 5px 5px 0 0;
  }

  .detail-btn {
    background-color: #0da6ff;
    color: black;

    padding: 1em 1.2em;
    border: 0;
    font-size: 1em;
    border-radius: 10px;
    text-decoration: none;
  }
`;
