import { List } from "@mui/material";
import React from "react"
import { useSelector } from "react-redux";
import CenteredLoading from "./CenteredLoading";
import Comment from "./Comment";

const Comments = ({ comments }) => {
 
  const status = useSelector(state => state.news.currentPageCommentsStatus);

  if (status === "pending") return <CenteredLoading />

  return (
    <List sx={{overflow: "hidden", pb: 0}}>
      {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </List>
  )
};

export default Comments;
