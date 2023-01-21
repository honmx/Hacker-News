import React from "react"
import { NavLink } from "react-router-dom";
import s from "./NewsItem.module.css"

const NewsItem = ({ news }) => {
  return (
    <li>
      <NavLink to={`/${news.id}`}>{ news.title }</NavLink>
    </li>
  )
};

export default NewsItem;
