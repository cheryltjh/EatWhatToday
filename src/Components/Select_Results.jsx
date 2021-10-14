import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

function Select_results({
  recipe,
  handleToggle,
  toggle,
  id,
  setRecipeURL,
  recipeURL,
}) {
  // type, cuisine needed
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired=true`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((Data) => {
        setRecipeURL(Data.sourceUrl);
        console.log(Data.sourceUrl);
      });
  }, [toggle]);

  useEffect(() => {
    window.open(recipeURL, "_blank");
  }, [recipeURL]);

  return (
    <Container sx={{ py: 1 }} maxWidth="md">
      <Box sx={{ "& button": { m: 5, p: 2 } }}>
      <Link to="/">
      <Button
              variant="outlined"
              color="warning"
              size="large"
              sx={{ margin: 1 }}
            >
        Regenerate again!
        </Button>
      </Link>
      </Box>
      <Grid container spacing={4}>
        {recipe.results.map((object, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={object.image}
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {object.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
            {object.summary}
          </Typography>
                </CardContent>
                <Button size="big" onClick={() => handleToggle(object)}>
                  Get recipe!
                </Button>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Select_results;