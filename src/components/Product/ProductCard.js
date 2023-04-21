import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { Link } from "react-router-dom";

export const ProductCard = ({isWishlist=false}) => {
  return (
    <Grid container spacing={2}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i, index) => (
        <Grid item md={4} sm={6} lg={4} key={index} padding="20px">
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/images/chicken-n-corn-delight.jpg"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component={Link}
                to={`details/${i}`}
              >
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <IconButton aria-label="add to cart" color="primary" size="large">
                <AddShoppingCartIcon />
              </IconButton>
              <IconButton aria-label="wishlist" color="error" size="large">
                {isWishlist ? <HeartBrokenIcon aria-label="wishlist" size="large"/> :<FavoriteIcon aria-label="wishlist" size="large" />}
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
