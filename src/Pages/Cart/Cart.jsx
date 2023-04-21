import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Ratings, QuantityMeter } from "../../components/index";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export const Cart = () => {
  const fakeCart = [
    {
      name: "pizza",
      images: "/images/baked-cheesy-momo-meal.jpg",
      price: 121,
    },
    {
      name: "pizza",
      images: "/images/baked-cheesy-momo-meal.jpg",
      price: 121,
    },
    {
      name: "pizza",
      images: "/images/baked-cheesy-momo-meal.jpg",
      price: 121,
    },
    {
      name: "pizza",
      images: "/images/baked-cheesy-momo-meal.jpg",
      price: 121,
    },
    {
      name: "pizza",
      images: "/images/baked-cheesy-momo-meal.jpg",
      price: 121,
    },
    {
      name: "pizza",
      images: "/images/baked-cheesy-momo-meal.jpg",
      price: 121,
    },
  ];

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {fakeCart.map((cart, i) => (
        <React.Fragment key={i}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={cart.images}
                alt="green iguana"
              />
              <CardContent sx={{ padding: "10px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h5">{cart.name}</Typography>
                  <Ratings />
                </Box>
                <Typography variant="h6" textAlign="end">
                  <CurrencyRupeeIcon />
                  <span>90</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <QuantityMeter />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button color="error" variant="contained">
              Remove
            </Button>
            <Button
              color="success"
              variant="outlined"
              sx={{ marginLeft: ".5rem" }}
            >
              Checkout
            </Button>
          </Grid>
        </React.Fragment>
      ))}
      <Grid xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
            margin: "1rem",
            background: "yellow",
          }}
        >
          <Typography textAlign="left" variant="h6">
            SubTotal
          </Typography>
          <Typography variant="h6" textAlign="end">
            <CurrencyRupeeIcon />
            <span>90</span>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
