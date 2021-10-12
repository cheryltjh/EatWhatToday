import React from "react";
import { Link } from "react-router-dom";
import { Cuisines } from "./Data";

const allCuisines = Cuisines.map((element) => {
  return <option value={element}>{element}</option>;
});
function Select_cuisine() {
  return (
    <>
      <select name="cuisine" id="cars">
        {allCuisines}
      </select>
      <Link to="/select_type">
        <button>Select Your Cuisine!</button>
      </Link>
    </>
  );
}

export default Select_cuisine;