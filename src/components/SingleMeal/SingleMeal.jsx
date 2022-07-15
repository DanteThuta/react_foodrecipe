import React from "react";
import "./SingleMeal.css";

import Image from "../img/pinky.png";

const SingleMeal = () => {
  return (
    <div className="singlemeal-section">
      <div className="img-section">
        <img src={Image} className="img-item" alt="Some Image" />
      </div>
      <div className="meal-info">
        <h2>SingleMeal Section</h2>
        <h3>Name</h3>
        <h3>Type</h3>
      </div>
    </div>
  );
};

export default SingleMeal;
