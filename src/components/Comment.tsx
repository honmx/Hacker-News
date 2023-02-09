import { Avatar, ListItem, ListItemButton, Typography, Box, Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import React, { FC } from "react"
import { useState } from "react";
import { fetch } from "../services/fetchComments";
import Comments from "./Comments";
import { IComment } from "types/Comment";

interface Props {
  comment: IComment;
}

const Comment: FC<Props> = ({ comment }) => {

  const [childrenComments, setChildrenComments] = useState<IComment[]>([]);

  const handleClick = () => {
    fetch(comment.kids as number[])
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
        <Typography>{comment.by}</Typography>
      </Stack>
      <Box sx={{display: "flex"}}>
        <Typography sx={{flexWrap: "wrap"}} dangerouslySetInnerHTML={{__html: comment.text}} />
      </Box>
      {
        comment.kids &&
        <ListItemButton
          onClick={handleClick}
          sx={{ p: 0.3, ml: 2 }}
        >
          {comment.kids.length === 1 ? `1 reply` : `${comment.kids.length} replies`}
          <ArrowDropDownIcon />
        </ListItemButton>
      }
      {<Comments comments={childrenComments} />}
    </ListItem>
  )
};

export default Comment;
