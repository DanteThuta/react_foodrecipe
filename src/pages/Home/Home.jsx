import React from "react";

//components
import { MealList } from "../../components";

const Home = ({ sampleMeals }) => {
  return (
    <div>
      <MealList sampleMeals={sampleMeals} />
    </div>
  );
};

export default Home;
