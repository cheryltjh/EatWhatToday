import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, AppBar, Button, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#F9E4B7',
    },
    secondary: {
      main: '#F9E4B7',
      contrastText: '#000000',
    }
  }
})

function Navbar({ handleRandom }) {
  return (
    <>
    <ThemeProvider theme={theme}>
    <AppBar position="relative" color="primary">
        <Toolbar>
        <Button variant="text" color="secondary">
        <Link className="Home" exact to="/" style={{ color:'black', textDecoration: 'none' }}>
         Home
        </Link>
        </Button>
        <Button variant="text" color="secondary" sx={{ml: 75}}>
        <Link className="RandomMeal" to="/RandomMeal" onClick={handleRandom} style={{ color:'black', textDecoration: 'none' }}>
          Random Meal Generator
        </Link>
        </Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </>
  );
}

export default Navbar;

