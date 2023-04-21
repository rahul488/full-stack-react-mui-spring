import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Content from "./Content";
import Footer from "./Footer";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SideBar from "./Sidebar";
import { StyledToolbar, Icons, UserProfile, Search } from "../../Style";

export const CustomDrawer = ({ setMode, mode }) => {
  const [menu, setMenu] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Box display="flex" alignItems="center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setSidebar(!sidebar)}
            >
              <MenuOpenIcon />
            </IconButton>
            <Typography
              variant="h5"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Ecom-web
            </Typography>
            <LocalPizzaIcon sx={{ display: { xs: "block", sm: "none" } }} />
          </Box>
          <Search>
            <InputBase placeholder="Search your favorites" />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <ShoppingBagIcon />
            </Badge>
            <Badge badgeContent={2} color="error">
              <FavoriteBorderIcon color="red" />
            </Badge>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              onClick={() => setMenu(true)}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            />
          </Icons>
          <UserProfile onClick={() => setMenu(true)}>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            />
          </UserProfile>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={menu}
          onClose={() => setMenu(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
      <Stack direction="row" justifyContent="space-between">
        {sidebar && <SideBar sidebar={sidebar} mode={mode} setMode={setMode} />}
        <Content sidebar={sidebar} />
      </Stack>
      <Footer />
    </>
  );
};
