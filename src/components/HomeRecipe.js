import React from "react";
import { useGlobalContext } from "../context";
import RecipeDetail from "./RecipeDetail";
import { Link } from "react-router-dom";

function HomeRecipe() {
  const { recipes, setRecipes } = useGlobalContext();
  return (
    <>
      <div>
        <h2>Welcome from Recipes</h2>
      </div>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <section key={recipe.recipeId} className="recipegrid">
            <img
              src={`https://spoonacular.com/recipeImages/${recipe.id}-312x150`}
              alt="Loading... "
            />
            <h2>{recipe.title}</h2>
            <li>Cooking Time: {recipe.readyInMinutes} Minutes</li>
            <p>{recipe.serveNum}</p>
            <a href={recipe.url}>Link</a>

            <Link to={`recipe/${recipe.recipeId}`}>Detail</Link>
            <p> id : {recipe.id} </p>
          </section>
        ))}
      </div>
    </>
  );
}

export default HomeRecipe;
