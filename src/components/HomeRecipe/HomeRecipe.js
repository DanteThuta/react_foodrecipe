import React from "react";
import { useGlobalContext } from "../../context";
import { Wrapper, Content } from "./HomeRecipe.styles";
import image from "../imgtest/hinapic.jpg";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import { Link } from "react-router-dom";

function HomeRecipe({ header }) {
  const { recipes, setRecipes } = useGlobalContext();
  return (
    <>
      <Wrapper>
        <Content>
          <div>
            <h2>{header}</h2>
          </div>
          <div className="recipe-container">
            {recipes.map((recipe) => (
              <section key={recipe.recipeId} className="recipegrid">
                <img
                  src={`https://spoonacular.com/recipeImages/${recipe.recipeId}-312x150`}
                  alt="Loading... "
                  className="recipe-image"
                />

                <h3>{recipe.title}</h3>
                <li>Cooking Time: {recipe.readyTime} Minutes</li>
                <p> Person Amount for Food: {recipe.serveNum}</p>

                <button className="detail-btn">
                  <Link
                    to={`recipe/${recipe.recipeId}`}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Detail
                  </Link>
                </button>
              </section>
            ))}
          </div>
        </Content>
      </Wrapper>
    </>
  );
}

export default HomeRecipe;
