import React, { useState } from "react";
import "./app.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ProductDetails, CustomDrawer } from "./components/index";
import { Cart, Home, Categories, Login, WishList } from "./Pages/index";

function App() {
  const [mode, setMode] = useState("light");

 const theme = createTheme({
    palette: {
      mode: mode,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ThemeProvider theme={theme}>
              <Box bgcolor={"background.default"} color={"text.primary"}>
                <CustomDrawer mode={mode} setMode={setMode}/>
              </Box>
            </ThemeProvider>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="all-categories" element={<Categories />} />
          <Route path="/home/details/:id" element={<ProductDetails />} />
          <Route path="carts" element={<Cart />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
