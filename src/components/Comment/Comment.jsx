import { Avatar, ListItem, ListItemButton, Typography, Box, Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import React from "react"
import { useState } from "react";
import { convert } from "../../heplers/convert";
import { fetch } from "../../services/fetchComments";
import Comments from "../Comments/Comments";

const Comment = (props) => {

  
  const [childrenComments, setChildrenComments] = useState([]);

  if (props.deleted) return null;
  
  const text = props.text
    .replace(/&#?(\w+);/gi, (match) => convert(match))
    .replace(/<(\w+)\/?>/g, " ")
    .replace(/  /g, " ");

  const handleClick = () => {
    fetch(props.kids)
      .then(res => setChildrenComments(res));
  }

  return (
    <ListItem sx={{
      flexDirection: "column",
      alignItems: "flex-start",
      ml: 2,
      pb: 0
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
      <Box sx={{display: "flex"}}>
        <Typography sx={{flexWrap: "wrap"}}>
          {text}
        </Typography>
      </Box>
      {
        !props.deleted &&
        props.kids &&
        <ListItemButton
          onClick={handleClick}
          sx={{ p: 0.3, ml: 2 }}
        >
          {props.kids.length === 1 ? `1 reply` : `${props.kids.length} replies`}
          <ArrowDropDownIcon />
        </ListItemButton>
      }
      {<Comments comments={childrenComments} />}
    </ListItem>
  )
};

export default Comment;
