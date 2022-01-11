import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipeById, setrecipeById] = useState();
  const appKey = "73b423238828427f8020a4b6d4fa9900";

  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${appKey}`;
  // console.log(url);

  const testurl = `https://jsonplaceholder.typicode.com/users`;

  const fetchRecipebyId = async () => {
    try {
      const response = await fetch(url);

      const data = await response.json();
      // console.log (data.vegetarian);
      const result = data;
      setrecipeById(result);
      // const results = data;
      // console.log(results);

      // setrecipeById(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipebyId();
  }, [id]);

  if (recipeById) {
    <div>loading</div>;
  }
  return (
    <div>
      <img></img>

      <div className="recipe-info">
        <p> {id}</p>
        <p> fat - {recipeById.vegatarian}</p>

        <p> Cooking Time</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
