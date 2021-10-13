import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Mealtype } from "./Data";

const allTypes = Mealtype.map((element) => {
  return <option value={element}>{element}</option>;
});

function Select_type() {
//   const [addType, setAddType] = useState({type: ""});
//   const inputType = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setAddType({
//       type: inputType.current.value,
//     });
//   };

  return (
    <>
    <select name="type" id="type">
      {/* <select name="type" id="type" ref={inputType} value={allTypes} onClick={handleSubmit} > */}
      {allTypes}
      </select>
      <Link to="/select_results">
        <button>Select Your Type!</button>
      </Link>
    </>
  );
}

export default Select_type;