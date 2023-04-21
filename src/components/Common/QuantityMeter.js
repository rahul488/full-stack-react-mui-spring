import { Typography } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  StyledIconMinus,
  StyledIconPlus,
  StyledQuantitySpan,
  StyledQuantityWrapper,
} from "../../Style";

export const QuantityMeter = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (sign = "plus") => {
    if (sign === "plus") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <StyledQuantityWrapper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "60%",
        alignItems: "center",
      }}
    >
      <StyledIconPlus onClick={() => handleQuantity("plus")}>
        <AddCircleOutlineIcon fontSize="large" />
      </StyledIconPlus>
      <StyledQuantitySpan>
        <Typography textAlign="center" variant="h5">
          <span>{quantity}</span>
        </Typography>
      </StyledQuantitySpan>
      <StyledIconMinus onClick={() => handleQuantity("minus")}>
        <RemoveCircleOutlineIcon fontSize="large" />
      </StyledIconMinus>
    </StyledQuantityWrapper>
  );
};
