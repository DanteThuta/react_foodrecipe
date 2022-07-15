import React from "react";
import "./MealList.css";
import Image from "../img/pinky.png";

const MealList = ({ sampleMeals }) => {
  return (
    <div className="meallist-container">
      {sampleMeals.map((item, idx) => (
        <div key={idx} className="meal-section">
          <div className="img-section">
            <img className="img-item" src={Image} alt="Some Image" />
          </div>
          <div className="meal-info">
            <p>{item.name}</p>
            <p>Types</p>
            <span>Info</span>
          </div>
        </div>
      ))}
      {/* <div className="meal-section">
        <div className="img-section">
          <img src="" alt="" />
        </div>
        <div className="meal-info">
          <p>Name</p>
          <p>Types</p>
          <span>Info</span>
        </div>
      </div> */}
    </div>
  );
};

export default MealList;
