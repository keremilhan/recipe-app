import React from 'react'
import { useLocation } from "react-router-dom";

const Details = (props) => {
  const location = useLocation();
  console.log(location.state.recipe);
  const recipe = location.state.recipe;  
  return (
    <div>{recipe.recipe.label}</div>
  )
}

export default Details