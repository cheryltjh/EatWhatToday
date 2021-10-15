import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import React, { useState, useEffect } from "react";
import Selectcuisine from "./Components/Select_Cuisine";
import Selecttype from "./Components/Select_Type";
import Selectresults from "./Components/Select_Results";
import RandomMeal from "./Components/RandomMeal";
//import { sampleRandom } from "./Components/Data";

function App() {
  const [toggleType, setToggleType] = useState(false);
  const [toggle, setToggle] = useState (false);
  const [id, setId] = useState();
  const [recipeURL, setRecipeURL] = useState();
  const [recipe, setRecipe] = useState();
  const [chosenCuisine, setchosenCuisine] = useState();
  const [chosenType, setChosenType] = useState();
  const [randomMeal, setRandomMeal] = useState([]);
  //const [randomMeal, setRandomMeal] = useState(sampleRandom);

  const url1 = `https://www.themealdb.com/api/json/v1/1/random.php`

  // const handleRandom = () => {
  //   fetch(url1)
  //     .then((response) => response.json())
  //     .then((Data) => {
  //       setRandomMeal(Data);
  //     });
  // };

  const handleRandom = () => {
    fetch(url1)
      .then((response) => response.json())
      .then((response) => {
        setRandomMeal(response.meals[0]);
      });
  };

  useEffect(() => {
    handleRandom()
  }, []);

  const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${chosenCuisine}&type=${chosenType}&apiKey=${process.env.REACT_APP_API_KEY}`;

  const handleToggle = (event) => {
    setToggle(!toggle);
    const selectedID = event.CurrentTarget.getAttribute("class");
    setId(selectedID);
  };
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setRecipe(response);
      });
  }, [toggleType]);

  return (
    <>
      <div className="App">
        <NavBar handleRandom={handleRandom}/>
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
            setRecipeURL={setRecipeURL}
            recipeURL={recipeURL}
          />
        </Route>
      </div>
    </>
  );
}

export default App;