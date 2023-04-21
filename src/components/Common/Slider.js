import { CardMedia } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BoxContainer } from "../../Style";

export const Slider = () => {
  return (
    <Carousel
      autoPlay
      showArrows={true}
      showStatus
      showIndicators
      showThumbs={false}
    >
      <BoxContainer>
        <CardMedia
          component="img"
          src="images/chicken-n-corn-delight.jpg"
          alt="pizza"
        />
      </BoxContainer>
      <BoxContainer>
        <CardMedia
          component="img"
          src="images/choco-sundae.jpg"
          alt="desserts"
        />
      </BoxContainer>
      <BoxContainer>
        <CardMedia
          component="img"
          src="images/creamy-garlic-bread-six.jpg"
          alt="sides"
        />
      </BoxContainer>
      <BoxContainer>
        <CardMedia
          component="img"
          src="images/pepsi-family-combo.jpg"
          alt="drinks"
        />
      </BoxContainer>
    </Carousel>
  );
};
