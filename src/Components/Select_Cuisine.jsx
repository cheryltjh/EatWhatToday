import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Cuisines } from "./Data";

function Select_cuisine({ setchosenCuisine }) {
  const inputCuisine = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setchosenCuisine(inputCuisine.current.value);
  };

  const allCuisines = Cuisines.map((element) => {
    return (
      <option value={element} onClick={handleSubmit}>
        {element}
      </option>
    );
  });

  return (
    <>
      <select name="cuisine" id="cuisine" ref={inputCuisine}>
        {allCuisines}
      </select>
      <Link to="/select_type">
        <button>Select Your Cuisine!</button>
      </Link>
    </>
  );
}

export default Select_cuisine;