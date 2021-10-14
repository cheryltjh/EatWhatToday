import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SampleResults, SampleRecipe } from "./Data";

function RandomMeal({ randomMeal }) {

  return (
    <>
      <p>{randomMeal.meals[0].strMeal}</p>
      <img src={randomMeal.meals[0].strMealThumb} alt="" />
      <p>{randomMeal.meals[0].strInstructions}</p>
    </>
  );
}
export default RandomMeal;