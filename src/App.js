import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Selectcuisine from "./Components/Select_Cuisine";
import Selecttype from "./Components/Select_Type";
import Selectresults from "./Components/Select_Results";
import RandomMeal from "./Components/RandomMeal";
import styled from "styled-components";

const Button = styled.button`
  padding: 3px 3px;
  margin: 6px 2px;
  border: 1px solid black;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  @media only screen and (max-width: 600px) {
    border: 1px solid black;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    position: relative;
  }
  &:hover {
    background-color: rgb(228, 228, 228);
  }
  &:active {
    background-color: grey;
  }
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

function App() {
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState();
  const [recipeURL, setRecipeURL] = useState();

  const handleToggle = (e) => {
    setToggle(!toggle);
    const selectedID = e.currentTarget.parentNode.getAttribute("class");
    setId(selectedID);
    console.log(id);
  };

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
        <section className="controls">
          <LinkStyled to="/select_cuisine">
            <Button>Get Your Recipes!</Button>
          </LinkStyled>
        </section>
        <Route path="/RandomMeal">
          <RandomMeal />
        </Route>
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
    </div>
  );
}

export default App;