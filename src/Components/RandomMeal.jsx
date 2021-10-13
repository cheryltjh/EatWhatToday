// import React, { useEffect } from 'react'
import React from "react";
import { Link } from "react-router-dom";
// import { SampleResults, SampleRecipe } from "./Data";

function RandomMeal() {
    return (
      <>
      <h1>No preference?</h1>
    <p>Click the button below for a random generated meal!</p>
    <Link to="/RandomMeal">
        <button>Generate again!</button>
      </Link>
    </>
    )
  }
  
  export default RandomMeal;

// function RandomMeal({ idMeal, setRandomMeal }) {
//     const url = `https://www.themealdb.com/api/json/v1/1/random.php`
    
//     useEffect(() => {
//       fetch(url)
//         .then((response) => response.json())
//         .then((Data) => {
//           setRandomMeal(Data.meals[0]);
//         });
//     }, [idMeal, setRandomMeal, url]);

//     const allResults = SampleResults.results.map((object, index) => {
//       return (
//         <>
//           <div key={object.id} className={object.idMeal}>
//             <p key={index}>{object.strMeal}</p>
//             <img src={object.strMealThumb} alt="" />
//           <button onClick> Get random recipe!</button>
//           </div>
//         </>
//       );
//     });
  
//     console.log(SampleRecipe.sourceUrl);
  
//     return (
//       <>
//         <p>Results are here!!</p>
//         {allResults}
//         <Link to="/randomMeal">
//           <button>Regenerate again!</button>
//         </Link>
//       </>
//     );
//   }

  
//   export default RandomMeal;