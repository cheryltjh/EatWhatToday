import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Box } from "@mui/material";
import Banner from "./Banner.png";

function Home() {
  return (
    <>
      <img src={Banner} alt="Banner" />
      <Container maxWidth="sm" sx={{ p: 5 }}></Container>
      <Box sx={{ '& button': { m: -15, p:2 } }}>
      <section className="controls">
        <Link to="/select_cuisine">
          <Button variant="outlined" color="warning" size="large" sx={{ margin: 1 }}>
            Get Your Recipes!
          </Button>
        </Link>
      </section>
      </Box>
    </>
  );
}

export default Home;