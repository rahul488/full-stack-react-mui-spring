import { Typography, useTheme } from "@mui/material";
import { StyledFooter } from "../../Style";

const Footer = () => {
  const theme = useTheme();
  return (
    <StyledFooter bgcolor={theme.palette.mode === 'light' ? theme.palette.background.paper : "background.default"} color={"text.primary"}>
      <Typography>PizzaTou &copy; 2023 </Typography>
    </StyledFooter>
  );
};

export default Footer;
