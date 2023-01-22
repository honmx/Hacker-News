import React from "react"
import { useRef } from "react";
import { useSelector } from "react-redux";
import Comment from "../Comment/Comment";
// import s from "./Comments.module.css"

const Comments = ({ comments }) => {
 
  const status = useSelector(state => state.news.currentPageCommentsStatus);

  if (status === "pending") return <h1>Loading...</h1>

  return (
    <ul>
      {
        comments.map(comment => {
          // debugger;
          return <Comment key={comment.id} {...comment} />
        })
      }
    </ul>
  )
};

export default Comments;
