import React from "react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convert } from "../../heplers/convert";
import { fetchComments, fetch } from "../../services/fetchComments";
import Comments from "../Comments/Comments";
// import s from "./Comment.module.css"

const Comment = (props) => {

  const [childrenComments, setChildrenComments] = useState([]);
  const rootComments = useSelector(state => state.news.currentPage.kids);
  const dispatch = useDispatch();

  const text = props.text
    .replace(/&#?(\w+);/gi, (match) => convert(match))
    .replace(/<(\w+)\/?>/g, " ")
    .replace(/  /g, " ")

  const handleClick = () => {
    fetch(props.kids)
      .then(res => setChildrenComments(res));
  }

  // console.log(childrenComments);

  return (
    <li>
      { text }
      {
        !props.deleted &&
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
