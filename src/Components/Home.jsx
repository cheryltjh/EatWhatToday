import React from 'react';
import { Typography } from "@mui/material";
import { Container } from "@mui/material";

function Home() {
  return (
    <>
    <Container maxWidth="sm" sx={{p: 10}}>
      <Typography variant="h5" align="center" width="600px">
      <h1>Don't know what to eat?</h1>
    </Typography>
      <p>Simply filter for your cuisine preference by clicking on the selections.</p>
      <p>Click on the meal that you want to find ideas for.</p>
      <p>A random but relevant recipe will be generated!</p>
      <p>If what you see doesn’t appeal to you, you can pop back to the recipe generator for more.</p>
      <p>Keep clicking until you find something that gets your mouth watering!</p>
      </Container>
  </>
  )
}

export default Home;