import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SampleResults, SampleRecipe } from "./Data";
// import Select_cuisine from "./Select_Cuisine";
// import Select_type from "./Select_Type";

function Select_results({ handleToggle, toggle, id, setRecipeURL, recipeURL }) {
  // type, cuisine needed
  // const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${allCuisine}&type=${allType}&apiKey=${process.env.REACT_APP_API_KEY}`
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired=true`
    
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        setRecipeURL(jsonData.sourceUrl);
        console.log(jsonData.sourceUrl);
      });
  }, [toggle, id, setRecipeURL, url]);

  useEffect(() => {
    window.open(recipeURL, "_blank");
  }, [recipeURL]);

  //   const allResults = ((object, index) => {
  //   return (
  //     <>
  //       <div key={object.id} className={object.id}>
  //         <p key={index}>{object.title}</p>
  //         <img src={object.image} alt="" />
  //       <button onClick={handleToggle}> Get recipe!</button>
  //       </div>
  //     </>
  //   );
  // });

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