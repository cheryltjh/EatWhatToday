import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SampleResults, SampleRecipe } from "./Data";

// const allResults = SampleResults.results.map((element) => {
//     return <option value={element}>{element}</option>;
//   });

//

function Select_results({ handleToggle, toggle, id, setRecipeURL, recipeURL }) {
  useEffect(() => {
    fetch(
      // type, cuisine needed
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired=true`
    )
      .then((response) => response.json())
      .then((jsonData) => {
        setRecipeURL(jsonData.sourceUrl);
        console.log(jsonData.sourceUrl);
      });
  }, [toggle]);

  useEffect(() => {
    window.open(recipeURL, "_blank");
  }, [recipeURL]);

  const allResults = SampleResults.results.map((object, index) => {
    return (
      <>
        <div key={object.id} className={object.id}>
          <p key={index}>{object.title}</p>
          <img src={object.image} alt="" />
        <button onClick={handleToggle}> Get recipe!</button>
        </div>
      </>
    );
  });

  console.log(SampleRecipe.sourceUrl);

  // console.log(SampleResults.results.length)
  return (
    <>
      <p>Results are here!!</p>
      {allResults}
      <Link to="/">
        <button>Renegerate again!</button>
      </Link>
    </>
  );
}

export default Select_results;