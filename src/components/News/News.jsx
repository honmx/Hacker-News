import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../services/fetchComments";
import Comments from "../Comments/Comments";
import s from "./News.module.css"

const News = ({ news }) => {

  // const [comments, setComments] = useState([]);

  // const fetch = () => {
  //   fetchComments(news.kids)
  //     .then(res => setComments(res));
  // }
  // console.log(news);

  const comments = useSelector(state => state.news.currentPageComments);
  
  const dispatch = useDispatch();
  // debugger;
  useEffect(() => {
    // debugger;
    dispatch(fetchComments(news.kids));
  }, [dispatch, news.kids]);


  // debugger;
  return (
    <div>
      News:
      { news.title }
      <br />
      <button onClick={() => dispatch(fetchComments(news.kids))}>Update comments</button>
      <br />
      Comments:
      <Comments comments={comments} />
    </div>
  )
};

export default News;
