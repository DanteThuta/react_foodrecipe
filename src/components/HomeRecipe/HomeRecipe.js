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
            <section className="recipegrid">
              <div className="image-section">
                <img src={image} alt="No Image" className="recipe-image" />
              </div>
              <div className="recipe-infos">
                {/* <img src="" alt="image not show" /> */}
                <h3>Lorem, ipsum dolor.</h3>

                <h4>Persever</h4>
                <li>Lorem, ipsum dolor.</li>

                <h4>Instructions</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <button className="detail-btn">Details</button>
              </div>
            </section>
          </div>
        </Content>
      </Wrapper>
    </>
  );
}

export default HomeRecipe;
