import { Paper } from "@mui/material";
import React from "react"
import { NavLink } from "react-router-dom";
import s from "./NewsItem.module.css"

const NewsItem = ({ news }) => {
  return (
    <Paper
      elevation={7}
      sx={{p: 3}}
    >
      <NavLink to={`/${news.id}`}>{ news.title }</NavLink>
    </Paper>
  )
};

export default NewsItem;
