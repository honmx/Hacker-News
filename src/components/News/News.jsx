import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { fetchComments } from "../../services/fetchComments";
import Comments from "../Comments/Comments";
import s from "./News.module.css"

const News = ({ news }) => {

  const [comments, setComments] = useState([]);

  const fetch = () => {
    fetchComments(news.kids)
      .then(res => setComments(res));
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      News:
      { news.title }
      <br />
      <button onClick={fetch}>Update comments</button>
      <br />
      Comments:
      <Comments comments={comments} />
    </div>
  )
};

export default News;
