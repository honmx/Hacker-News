import React from "react"
import { useSelector } from "react-redux";
import NewsItem from "../NewsItem/NewsItem";
import s from "./NewsList.module.css"

const NewsList = (props) => {
  
  const news = useSelector(state => state.news.news);

  return (
    <ul>
      {
        news.map(elem => <NewsItem key={elem.id} news={elem} />)
      }
    </ul>
  )
};

export default NewsList;
