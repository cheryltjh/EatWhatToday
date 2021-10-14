import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import { Cuisines } from "./Data";
import { Button, Box, Container } from "@mui/material";

function Select_cuisine({ setchosenCuisine }) {
  const inputCuisine = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setchosenCuisine(inputCuisine.current.value);
  };

  const Cuisines = [
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];

  const allCuisines = Cuisines.map((element) => {
    return (
      <option value={element} onClick={handleSubmit}>
        {element}
      </option>
    );
  });

  return (
    <>
      <Container maxWidth="sm" sx={{ p: 5 }}>
        <select name="cuisine" id="cuisine" ref={inputCuisine}>
          {allCuisines}
        </select>
        <Box sx={{ "& button": { m: 10, p: 2 } }}>
          <Link to="/select_type">
            <Button
              variant="outlined"
              color="warning"
              size="large"
              sx={{ margin: 1 }}
            >
              Select Your Cuisine!
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}

export default Select_cuisine;
