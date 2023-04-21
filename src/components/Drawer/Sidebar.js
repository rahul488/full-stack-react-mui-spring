import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AnimationIcon from "@mui/icons-material/Animation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link as ROutelink } from "react-router-dom";
import { StyledSidebar } from "../../Style";

const SideBar = ({ sidebar, mode, setMode }) => {
  return (
    <Slide in={sidebar} direction="right">
      <StyledSidebar>
        <Box>
          <List>
            <ListItem disablePadding component={ROutelink} to="">
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={ROutelink} to="all-categories">
              <ListItemButton>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="All Categories" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AnimationIcon />
                </ListItemIcon>
                <ListItemText primary="My Orders" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={ROutelink} to="carts">
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="My Cart" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={ROutelink} to="wishlist">
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary="My Wishlist" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="My Accounts" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() =>
                  mode === "light" ? setMode("dark") : setMode("light")
                }
              >
                <ListItemIcon>
                  <DarkModeIcon />
                </ListItemIcon>
                <Switch defaultChecked={mode === "light" ? false : true} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </StyledSidebar>
    </Slide>
  );
};
export default SideBar;
