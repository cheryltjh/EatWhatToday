import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material'

function RandomMeal({ randomMeal }) {

  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
        }}
      >

    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={randomMeal.meals[0].strMealThumb} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {randomMeal.meals[0].strMeal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {randomMeal.meals[0].strInstructions}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </div>
  );
}
export default RandomMeal;
