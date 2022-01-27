import axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Wrapper, Content } from "./RecipeDetail.styles";
import image from "../imgtest/hinapic.jpg";

function RecipeDetail() {
  const { id } = useParams();
  const [recipeById, setrecipeById] = useState([]);
  const [temp, setTemp] = useState({});
  const [error, setError] = useState("");
  const appKey = "73b423238828427f8020a4b6d4fa9900";

  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${appKey}`;
  // console.log(url);

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        // console.log(res);
        const data = res.data;
        // console.log(data.dishTypes.length);
        // console.log(data);
        setrecipeById(data);
      })
      .catch((error) => {
        // throw new Error("Cannot Perform");
        console.log(error.message);
        const errorMsg = error.message;
        setError(errorMsg);

        // setError(error);
      });
  }, [id]);

  if (error) {
    return <p> {error}</p>;
  }

  return (
    <>
      <Wrapper>
        <Content>
          <div className="heading">
            <h2>{recipeById.title}</h2>
          </div>
          <div className="recipe-detail">
            <div className="img-section">
              <img
                src={`https://spoonacular.com/recipeImages/${id}-312x150`}
                className="image"
                alt="no image"
              />
            </div>
            <div className="recipe-details">
              <div className="recipe-single">
                <h3>Dish Types:</h3>

                {/* {recipeById.dishTypes.length > 1 &&
                  recipeById.forEach((dishType) => {
                    <p>{dishType.dishTypes}</p>;
                  })} */}

                {/* {recipeById.dishTypes.map((dishType) => (
                  <p> {dishType}</p>
                ))} */}
                <p>{recipeById.dishTypes}</p>
              </div>
              <div className="recipe-single">
                <h3>Instructions</h3>
                <p>{recipeById.instructions}</p>
              </div>
              <div className="recipe-single">
                <h3>Summary:</h3>
                <p>{recipeById.summary}</p>
              </div>
            </div>
          </div>
        </Content>
      </Wrapper>
    </>
  );
}

export default RecipeDetail;
