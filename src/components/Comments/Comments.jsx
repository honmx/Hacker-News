import React from "react"
import { useRef } from "react";
import Comment from "../Comment/Comment";
// import s from "./Comments.module.css"

const Comments = ({ comments }) => {
 

  return (
    <ul>
      {
        comments.map(comment => {
          // debugger;
          return <Comment {...comment} />
        })
      }
    </ul>
  )
};

export default Comments;
