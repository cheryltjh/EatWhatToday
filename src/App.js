import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Selectcuisine from "./Components/Select_Cuisine";
import Selecttype from "./Components/Select_Type";
import Selectresults from "./Components/Select_Results";

function App() {
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState();
  const [recipeURL, setRecipeURL] = useState();

  const handleToggle = (e) => {
    setToggle(!toggle);
    const selectedID = e.currentTarget.parentNode.getAttribute("class");
    setId(selectedID);
  };

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
        <section className="controls">
          <Link to="/select_cuisine">
            <button>Get Your Recipes!</button>
          </Link>
        </section>
        {/* <SelectCuisine mealData={mealData} /> */}
      </Route>
      <Route path="/select_cuisine">
        <Selectcuisine />
      </Route>
      <Route path="/select_type">
        <Selecttype />
      </Route>
      <Route path="/select_results">
        <Selectresults
          handleToggle={handleToggle}
          id={id}
          toggle={toggle}
          setRecipeURL={setRecipeURL}
          recipeURL={recipeURL}
        />
      </Route>

      {/* {mealData && <SelectCuisine mealData={mealData} />} */}
    </div>
  );
}

export default App;