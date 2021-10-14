import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import React, { useState, useEffect } from "react";
import Selectcuisine from "./Components/Select_Cuisine";
import Selecttype from "./Components/Select_Type";
import Selectresults from "./Components/Select_Results";
import RandomMeal from "./Components/RandomMeal";
import { sampleRandom } from "./Components/Data";

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
    // const selectedID = e.currentTarget.parentNode.getAttribute("class");
    // setId(selectedID);
    console.log(e);
  };

  const handleRandom = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((Data) => {
        setRandomMeal(Data);
      });
  };
  const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${chosenCuisine}&type=${chosenType}&apiKey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((Data) => {
        setRecipe(Data);
        console.log(Data);
      });
  }, [toggleType]);

  return (
    <>
      <div className="App">
        <NavBar handleRandom={handleRandom} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/RandomMeal">
          <RandomMeal randomMeal={randomMeal} />
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
