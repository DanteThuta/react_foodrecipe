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


  //temp for Detail

  {/* <p>{recipeById.vegetarian}</p> */}
  <p>{recipeById.title}</p>

  <p>{temp.dishTypes}</p>
  <p>{temp.instructions}</p>
  <p>
    {" "}
    {temp.weightWatcherSmartPoints
      ? temp.weightWatcherSmartPoints
      : "Loading"}
  </p>
  <p> {id}</p>
  {/* <p> fat -{recipeById.vegaman} </p> */}

  <p> Cooking Time</p>