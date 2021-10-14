import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Mealtype } from "./Data";


function Select_type({setChosenType,setToggleType,toggleType}) {
  
  const inputType = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setChosenType(inputType.current.value);
  };

  const handleToggleType = (e) => {
    setToggleType(!toggleType);
  };
  
  const allTypes = Mealtype.map((element) => {
    return <option value={element} onClick={handleSubmit}>{element}</option>;
  });

  return (
    <>
    <select name="type" id="type" ref={inputType}>
      {allTypes}
      </select>
      <Link to="/select_results">
        <button onClick={handleToggleType}>Select Your Type!</button>
      </Link>
    </>
  );
}

export default Select_type;