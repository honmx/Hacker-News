import React from "react"
import s from "./News.module.css"

const News = ({ news }) => {



  return (
    <div>
      { news.title }
    </div>
  )
};

export default News;
