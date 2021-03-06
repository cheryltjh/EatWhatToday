import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Box, Container } from "@mui/material";

function Select_type({ setChosenType, setToggleType, toggleType }) {
  const inputType = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setChosenType(inputType.current.value);
  };

  const handleToggleType = (e) => {
    setToggleType(!toggleType);
  };

  const Mealtype = [
    "Appetizer",
    "Bread",
    "Breakfast",
    "Dessert",
    "Fingerfood",
    "Main Course",
    "Salad",
    "Soup",
    "Side Dish",
    "Sauce",
    "Snack",
  ];

  const allTypes = Mealtype.map((cuisines) => {
    return (
      <option value={cuisines} onClick={handleSubmit}>
        {cuisines}
      </option>
    );
  });

  return (
    <>
      <Container maxWidth="sm" sx={{ p: 5 }}>
        <select name="type" id="type" ref={inputType}>
          {allTypes}
        </select>
        <Box sx={{ "& button": { m: 10, p: 2 } }}>
          <Link to="/select_results">
            <Button
              variant="outlined"
              color="warning"
              size="large"
              sx={{ margin: 1 }}
              onClick={handleToggleType}
            >
              Select Your Type!
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}

export default Select_type;