import { Box, Container } from "@mui/material";
import React from "react"
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = (props) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <Header />
      <Container 
        maxWidth="md"
        sx={{
          mt: 3,
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
        }}
      >
        <Outlet />
      </Container>
    </Box>
  )
};

export default Layout;
