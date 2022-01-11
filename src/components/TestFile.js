import React, { useEffect } from "react";

function TestFile() {
  //   const appID = "6b6789ca";
  const appKey = "73b423238828427f8020a4b6d4fa9900";

  const fetchRecipes = async () => {
    // setLoading(false);
    // let response = fetch(
    //   `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`
    // );
    // let data = response.json();
    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${appKey}&query=pizza`
    );
    const data = await response.json();
    console.log(data.results);
    data.results.forEach((name) => {
      console.log(name.title);
    });
  };

  useEffect(() => {
    fetchRecipes();
  });
  return (
    <div>
      <p>testFile</p>
    </div>
  );
}

export default TestFile;

// https://api.spoonacular.com/recipes/search?apiKey=73b423238828427f8020a4b6d4fa9900&query=pizza
