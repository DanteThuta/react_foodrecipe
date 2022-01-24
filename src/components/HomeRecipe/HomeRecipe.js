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
                  src={`https://spoonacular.com/recipeImages/${recipe.id}-312x150`}
                  alt="Loading... "
                />
                <h2>{recipe.title}</h2>
                <li>Cooking Time: {recipe.readyTime} Minutes</li>
                <p>{recipe.serveNum}</p>

                <button className="detail-btn">
                  <Link to={`recipe/${recipes.recipeId}`}>Detail</Link>
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
