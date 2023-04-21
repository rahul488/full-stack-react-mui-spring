import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export function Ratings() {
  const [value, setValue] = React.useState(4);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating name="simple-controlled" value={value} readOnly />
    </Box>
  );
}
