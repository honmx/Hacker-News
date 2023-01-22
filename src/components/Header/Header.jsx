import React from "react"
import { AppBar, Typography } from "@mui/material";
// import s from "./Header.module.css"

const Header = (props) => {
  return (
    <header>
      <AppBar
        position="static"
        sx={{p: 3, alignItems: "center"}}
      >
        <Typography
          variant="h4"
        >
          Hacker news
        </Typography>
      </AppBar>
    </header>
  )
};

export default Header;
