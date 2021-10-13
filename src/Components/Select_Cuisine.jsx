// import React, { useState, useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Cuisines } from "./Data";

const allCuisines = Cuisines.map((element) => {
  return <option value={element}>{element}</option>;
});


function Select_cuisine() {
//   const [addCuisine, setAddCuisine] = useState({cuisine: ""});
//   const inputCuisine = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setAddCuisine({
//       type: inputCuisine.current.value,
//     });
//   };

  return (
    <>
      <select name="cuisine" id="cuisine" >
      {/* <select name="cuisine" id="cuisine" ref={inputCuisine} value={allCuisines} onClick={handleSubmit} > */}
        {allCuisines}
      </select>
      <Link to="/select_type">
        <button>Select Your Cuisine!</button>
      </Link>
    </>
  );
}

export default Select_cuisine;