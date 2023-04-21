import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const ProductGradient = () => {
  return (
    <Paper elevation={20}>
      <Box p={5}>
        <Typography variant="h6" color="peru">
          Ingredients used
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </Typography>
      </Box>
    </Paper>
  );
};
export default ProductGradient;
