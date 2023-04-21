import styled from "@emotion/styled";
import {
  Box,
  LinearProgress,
  Toolbar,
  linearProgressClasses,
} from "@mui/material";

// Drawer Style Start

//Drawer

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
export const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

export const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export const UserProfile = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

//Content
export const StyleContentBox = styled(Box)(({ theme, sidebar }) => ({
  marginLeft: sidebar ? "300px" : "0px",
  padding: "20px",
  paddingBottom: "5rem",
  transition: "ease-out 0.2s",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0",
  },
}));

//Footer
export const StyledFooter = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  left: 0,
  bottom: 0,
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
}));

//sidebar
export const StyledSidebar = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "2",
  position: "fixed",
  height: "100%",
  width: "250px",
  zIndex: "99",
  [theme.breakpoints.down("md")]: {
    zIndex: "999",
    background: "#1760a5",
  },
  [theme.breakpoints.down("sm")]: {
    zIndex: "999",
  },
}));

//Common Style start

//QuantityMeter

export const StyledQuantitySpan = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "2rem",
  borderRadius: "1rem",
}));
export const StyledQuantityWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "60%",
  alignItems: "center",
}));

export const StyledIconPlus = styled(Box)(({ theme }) => ({
  background: "green",
  color: "white",
  borderRadius: "2rem",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));
export const StyledIconMinus = styled(Box)(({ theme }) => ({
  background: "red",
  color: "white",
  borderRadius: "2rem",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

//Review
export const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, color }) => ({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "grey",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: color,
    },
  })
);

//slider
export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "700px",
  width: "100%",
  paddingLeft: "20px",
  [theme.breakpoints.down("sm")]: {
    height: "400px",
    padding: "10px",
  },
}));

//Product Style Start
