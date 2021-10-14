import React from "react";
import { Link } from "react-router-dom";


function Navbar({handleRandom}) {

return (
  <>
<nav>
<Link className="Home" exact to="/">Eat What Leh?</Link>
<Link className="RandomMeal" to="/RandomMeal" onClick={handleRandom}>Random Meal</Link>
</nav>
</>
);
}

export default Navbar;
