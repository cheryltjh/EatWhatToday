import React from "react";
import { Link } from "react-router-dom";
import { Mealtype } from "./Data";

const allTypes = Mealtype.map((element) => {
  return <option value={element}>{element}</option>;
});
function Select_type() {
  return (
    <>
      <select name="cuisine" id="cars">
        {allTypes}
      </select>
      <Link to="/select_results">
        <button>Select Your Type!</button>
        {/* https://api.spoonacular.com/recipes/complexSearch?cuisine=Cajun&type=main_course&apiKey={KEY} */}
      </Link>
    </>
  );
}

export default Select_type;