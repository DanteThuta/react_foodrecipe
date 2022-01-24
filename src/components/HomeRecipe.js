import React from "react";
import { useGlobalContext } from "../context";

function HomeRecipe() {
  const { setRecipes } = useGlobalContext();
  return (
    <div>
      <h2>Welcome from Recipes</h2>

      <section className="recipegrid">
        <img></img>
        <h2>tete</h2>
        <p>dsfdf</p>
      </section>
    </div>
  );
}

export default HomeRecipe;
