import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* background-color: red; */
`;

export const Content = styled.div`
  width: 80%;

  // border: 1px solid black;
  margin: 2em auto;
  padding: 2em 0.5em;

  .recipe-detail {
    display: flex;
    justify-content: space-evenly;
    padding: 0 0.5em;
  }

  .recipe-details {
    /* background-color: #ff7a70; */

    width: 50%;
  }

  .img-section {
    display: flex;

    justify-content: center;
    align-items: center;
  }

  .image {
    width: 300px;
    height: 200px;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    .recipe-detail {
      flex-direction: column;
    }

    .recipe-details {
      margin: 10px auto;
    }
  }
`;
