import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Select_results({ recipe, handleToggle, toggle, id, setRecipeURL, recipeURL }) {
  // type, cuisine needed
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired=true`
    
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((Data) => {
        setRecipeURL(Data.sourceUrl);
        console.log(Data.sourceUrl);
      });
  }, [toggle]);

  useEffect(() => {
    window.open(recipeURL, "_blank");
  }, [recipeURL]);

  const allResults = recipe.results.map((object, index) => {
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

  return (
    <>
      <p>Results are here!!</p>
      {allResults}
      <Link to="/">
        <button>Regenerate again!</button>
      </Link>
    </>
  );
}

export default Select_results;