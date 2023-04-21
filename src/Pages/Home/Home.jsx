import { Stack } from "@mui/system";
import React from "react";
import { ProductCard, Slider } from "../../components/index";

export const Home = () => {
  return (
    <Stack spacing={2}>
      <Slider />
      <ProductCard />
    </Stack>
  );
};
