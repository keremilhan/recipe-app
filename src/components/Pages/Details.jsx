import React from 'react'
import { useLocation } from "react-router-dom";
import { StyledDetails,Header,RecipeContainer,NutrientsContainer,ImgContainer,IngredientsContainer, WrapperContainer } from '../styles/Details.style';

const Details = (props) => {
  const location = useLocation();
  const recipe = location.state.recipe;  
  return (
    <StyledDetails>
      <Header>{recipe.recipe.label}</Header>
      <RecipeContainer>
        <ImgContainer>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        </ImgContainer>
        <WrapperContainer>
          <NutrientsContainer>
            <h2>Nutrients</h2>
            <p>
              {recipe.recipe.totalNutrients.CA.label} :{" "}
              {Math.round(recipe.recipe.totalNutrients.CA.quantity)}
              {recipe.recipe.totalNutrients.CA.unit}
            </p>
            <p>
              {recipe.recipe.totalNutrients.CHOCDF.label} :{" "}
              {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}
              {recipe.recipe.totalNutrients.CHOCDF.unit}
            </p>
            <p>
              {recipe.recipe.totalNutrients.CHOLE.label} :{" "}
              {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)}
              {recipe.recipe.totalNutrients.CHOLE.unit}
            </p>
            <p>
              {recipe.recipe.totalNutrients.ENERC_KCAL.label} :{" "}
              {Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}
              {recipe.recipe.totalNutrients.ENERC_KCAL.unit}
            </p>
            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
          </NutrientsContainer>
          <IngredientsContainer>
            <h2>Ingredients</h2>
            {recipe.recipe.ingredientLines.map((line, index) => (
            <div key={index}>
              <p>
                {index + 1} - {line}
              </p>
              <br />
            </div>
            ))}
          </IngredientsContainer>
        </WrapperContainer>

      </RecipeContainer>
      <ImgContainer></ImgContainer>

    </StyledDetails>
  )
}

export default Details