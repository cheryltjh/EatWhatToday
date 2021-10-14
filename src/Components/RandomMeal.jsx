import React from "react";

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