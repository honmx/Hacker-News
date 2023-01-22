import React from "react"
import { useState } from "react";
import { convert } from "../../heplers/convert";
import { fetchComments } from "../../services/fetchComments";
import Comments from "../Comments/Comments";
// import s from "./Comment.module.css"

const Comment = (props) => {

  const [childrenComments, setChildrenComments] = useState([]);

  // debugger;
  const text = props.text
    .replace(/&#?(\w+);/gi, (match) => convert(match))
    .replace(/<(\w+)\/?>/g, " ")
    .replace(/  /g, " ")

  const handleClick = () => {
    fetchComments(props.kids)
      .then(res => setChildrenComments(res));
  }

  console.log(childrenComments);

  return (
    <li>
      { text }
      {
        props.kids &&
        <button onClick={handleClick}>{props.kids.length} replies</button>
      }
      {
        <Comments comments={childrenComments} />
      }
    </li>
  )
};

export default Comment;
