import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ButtonBase from "@mui/material/ButtonBase";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Categories = () => {
  const brands = [
    {
      name: "Piza",
      image: "/images/chicken-tikka.jpg",
    },
    {
      name: "Sides",
      image: "/images/spicy-baked-chicken-wings.jpg",
    },
    {
      name: "Drinks",
      image: "/images/masala-mirinda.jpg",
    },
    {
      name: "Desserts",
      image: "/images/choco-sundae.jpg",
    },
  ];
  const deals = [
    {
      name: "baked-cheesy-momo-meal",
      images: "/images/baked-cheesy-momo-meal.jpg",
    },
    {
      name: "bogo-delivery",
      images: "/images/bogo-delivery.jpg",
    },
    {
      name: "half-priced-wednesday-delivery",
      images: "/images/half-priced-wednesday-delivery.jpg",
    },
    {
      name: "kids-treat",
      images: "/images/kids-treat.jpg",
    },
    {
      name: "momo-mia-choco-sundae-meal",
      images: "/images/momo-mia-choco-sundae-meal.jpg",
    },
    {
      name: "momo-mia-meal",
      images: "/images/momo-mia-meal.jpg",
    },
    {
      name: "one-plus-one",
      images: "/images/one-plus-one.jpg",
    },
    {
      name: "stuffed-crust-meal.jpg",
      images: "/images/stuffed-crust-meal.jpg",
    },
    {
      name: "stuffed-crust-meal2",
      images: "/images/stuffed-crust-meal2.jpg",
    },
  ];

  const StyledCard = styled(Card)(({ theme }) => ({
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.1,
      },
      "& .MuImageButton": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageButton = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" textAlign="center">
          Categories
        </Typography>
      </Grid>
      {brands.map((brand) => (
        <Grid item key={brand.title} xs={12} md={6}>
          <StyledCard>
            <CardMedia
              component="img"
              image={brand.image}
              title="green iguana"
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <ImageButton>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ color: "white", border: "1px solid white" }}
                className="MuImageButton"
              >
                {brand.name}
              </Button>
            </ImageButton>
          </StyledCard>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Typography variant="h5" textAlign="center">
          Top Deals
        </Typography>
      </Grid>
      {deals.map((deal, index) => (
        <Grid item key={index} xs={12} md={4}>
          <StyledCard>
            <CardMedia
              component="img"
              image={deal.images}
              title="green iguana"
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <ImageButton>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ color: "#ffffff", border: "1px solid red" }}
                className="MuImageButton"
              >
                Shop Now
              </Button>
            </ImageButton>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};
