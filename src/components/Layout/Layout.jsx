import { Container } from "@mui/material";
import React from "react"
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import s from "./Layout.module.css"

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container 
        maxWidth="md"
        sx={{
          mt: 3,
        }}
      >
        <Outlet />
      </Container>
    </>
  )
};

export default Layout;
