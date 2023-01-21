import React from "react"
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import s from "./Layout.module.css"

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
};

export default Layout;
