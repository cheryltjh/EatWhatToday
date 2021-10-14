import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Selectcuisine from "./Components/Select_Cuisine";
import Selecttype from "./Components/Select_Type";
import Selectresults from "./Components/Select_Results";
import RandomMeal from "./Components/RandomMeal";
import { sampleRandom } from "./Components/Data";
import { Button } from "@mui/material";

function App() {
  const [toggle, setToggle] = useState(false);
  const [toggleType, setToggleType] = useState(false);
  const [id, setId] = useState();
  const [recipeURL, setRecipeURL] = useState();
  const [recipe, setRecipe] = useState();
  const [chosenCuisine, setchosenCuisine] = useState();
  const [chosenType, setChosenType] = useState();
  const [randomMeal, setRandomMeal] = useState(sampleRandom);

  const handleToggle = (e) => {
    setToggle(!toggle);
    const selectedID = e.currentTarget.parentNode.getAttribute("class");
    setId(selectedID);
    console.log(id);
  };

  const handleRandom = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((jsonData) => {
        setRandomMeal(jsonData);
      });
  }
  const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${chosenCuisine}&type=${chosenType}&apiKey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        setRecipe(jsonData);
        console.log(jsonData);
      });
  }, [toggleType]);

  return (
    <>
    <div className="App">
      <NavBar handleRandom={handleRandom}/>
      <Route exact path="/">
        <Home />
        <section className="controls">
          <Link to="/select_cuisine">
            <Button variant="Outlined" style={{color:'black'}} sx={{margin: 10}}>Get Your Recipes!</Button>
          </Link>
        </section>
      </Route>
      <Route path="/RandomMeal">
        <RandomMeal randomMeal={randomMeal}/>
      </Route>
      <Route path="/select_cuisine">
        <Selectcuisine setchosenCuisine={setchosenCuisine} />
      </Route>
      <Route path="/select_type">
        <Selecttype
          setChosenType={setChosenType}
          setToggleType={setToggleType}
          toggleType={toggleType}
        />
      </Route>
      <Route path="/select_results">
        <Selectresults
          recipe={recipe}
          handleToggle={handleToggle}
          id={id}
          toggle={toggle}
          setRecipeURL={setRecipeURL}
          recipeURL={recipeURL}
        />
      </Route>
    </div>
    </>
  );
}

export default App;