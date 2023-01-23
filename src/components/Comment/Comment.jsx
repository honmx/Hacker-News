import { Avatar, ListItem, ListItemButton, Typography, Box, Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import React, { useEffect, useRef } from "react"
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

  if (props.deleted) return null;

  const text = props.text
    .replace(/&#?(\w+);/gi, (match) => convert(match))
    .replace(/<(\w+)\/?>/g, " ")
    .replace(/  /g, " ");

  const handleClick = () => {
    fetch(props.kids)
      .then(res => setChildrenComments(res));
  }

  // const btn = !props.deleted &&
  // props.kids &&
  // <button onClick={handleClick}>{props.kids.length} replies</button>

  // debugger;

  console.log(props);

  return (
    <ListItem sx={{
      flexDirection: "column",
      alignItems: "flex-start",
      ml: 2,
      // borderBottom: 1
    }}
    >
      <Stack 
        direction="row"
        spacing={1.5}
        sx={{
          alignItems: "center",
          mb: 1
        }}
      >
        <Avatar />
        <Typography>{props.by}</Typography>
      </Stack>
      <Typography>
        {text}
      </Typography>
      {
        !props.deleted &&
        props.kids &&
        <ListItemButton
          onClick={handleClick}
          sx={{ p: 0.3, ml: 2 }}

        >
          {props.kids.length} replies
          <ArrowDropDownIcon />
        </ListItemButton>
      }
      {
        <Comments comments={childrenComments} />
      }
    </ListItem>
  )
};

export default Comment;
