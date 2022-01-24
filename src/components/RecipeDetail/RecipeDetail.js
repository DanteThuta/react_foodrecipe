import axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Wrapper, Content } from "./RecipeDetail.styles";
import image from "../imgtest/hinapic.jpg";

function RecipeDetail() {
  const { id } = useParams();
  const [recipeById, setrecipeById] = useState({});
  const [temp, setTemp] = useState({});
  const [error, setError] = useState("");
  const appKey = "73b423238828427f8020a4b6d4fa9900";

  const url = `https://api.spoonacular.com/recipeso/${id}/information?includeNutrition=true&apiKey=${appKey}`;
  // console.log(url);

  // useEffect(() => {
  //   axios
  //     .get(`${url}`)
  //     .then((res) => {
  //       const data = res.data;
  //       console.log(data);
  //       console.log(data.vegetarian);

  //       setrecipeById(data);
  //     })
  //     .catch((error) => {
  //       // throw new Error("Cannot Perform");
  //       console.log(error.message);
  //       const errorMsg = error.message;
  //       setError(errorMsg);

  //       // setError(error);
  //     });
  // }, [id]);

  if (error) {
    return <p> {error}</p>;
  }

  return (
    <>
      <Wrapper>
        <Content>
          <div className="heading">
            <h2>Toping Heading</h2>
          </div>
          <div className="recipe-detail">
            <div className="img-section">
              <img src={image} className="image" alt="no image" />
            </div>
            <div className="recipe-details">
              <div className="recipe-single">
                <h3>heading:</h3>
                <p>test</p>
              </div>
              <div className="recipe-single">
                <h3>heading:</h3>
                <p>test</p>
              </div>
              <div className="recipe-single">
                <h3>heading:</h3>
                <p>test</p>
              </div>
            </div>
          </div>
        </Content>
      </Wrapper>
    </>
  );
}

export default RecipeDetail;
