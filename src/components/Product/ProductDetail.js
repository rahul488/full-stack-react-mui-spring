import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import GradientTable from "./ProductGradient";
import { Review, Ratings } from "../index";

export const ProductDetails = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <Card elevation={20}>
          {/* <InnerImageZoom src="images/chicken-n-corn-delight.jpg" zoomSrc="images/chicken-n-corn-delight.jpg" height="140" /> */}
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="images/chicken-n-corn-delight.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "self-start",
            }}
          >
            <Ratings />
            <Box>
              <Typography variant="h6">
                <CurrencyRupeeIcon />
                <span>90</span>
              </Typography>
            </Box>
          </CardActions>
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Button variant="contained" color="warning" size="small">
              To Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginRight: "10px" }}
              size="small"
            >
              Buy Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={7}>
        <GradientTable />
      </Grid>
      <Grid item xs={12} md={5}></Grid>
      <Grid item xs={12} md={7}>
        <Review />
      </Grid>
    </Grid>
  );
};
