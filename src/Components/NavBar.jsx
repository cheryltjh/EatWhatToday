import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, AppBar, Button } from "@mui/material";

function Navbar({ handleRandom }) {
  return (
    <>
    <AppBar position="relative" color="warning">
        <Toolbar>
        <Button variant="contained" color="warning">
        <Link className="Home" exact to="/" style={{ textDecoration: 'none' }}>
         Home
        </Link>
        </Button>
        <Button variant="contained" color="warning" sx={{ml: 50}}>
        <Link className="RandomMeal" to="/RandomMeal" onClick={handleRandom} style={{ textDecoration: 'none' }}>
          Random Meal Generator
        </Link>
        </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

