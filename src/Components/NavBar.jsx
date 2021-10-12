import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <>
    <nav>
    <Link className="Home" exact to="/">Eat What Leh?</Link>
    <Link className="recipes" to="/recipes">Recipes</Link>
  </nav>
  </>
  );
}

export default Navbar;