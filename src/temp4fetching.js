//Can delete from here
const fetchRecipes = async () => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/search?apiKey=${appKey}`
  );
  const data = await response.json();

  const { results } = data;

  // console.log(typeof results);

  if (results) {
    const newRecipes = results.map((item) => {
      const { id, servings, sourceUrl } = item;

      return {
        recipeId: id,
        serveNum: servings,
        url: sourceUrl,
      };
    });
    // setRecipes(newRecipes);
  }

  // console.log(data);
  // data.results.forEach((name) => {
  //   console.log(name.title);
  // });
  // setRecipes(data.results);
};
//can Delete To Here
