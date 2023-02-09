import { List } from "@mui/material";
import React, { FC } from "react"
import { useAppSelector } from "store/hook";
import { IComment } from "types/Comment";
import CenteredLoading from "./CenteredLoading";
import Comment from "./Comment";

interface Props {
  comments: IComment[]
}

const Comments: FC<Props> = ({ comments }) => {

  const status = useAppSelector(state => state.news.currentPageCommentsStatus);

  if (status === "pending") return <CenteredLoading />

  return (
    <List sx={{ overflow: "hidden", pb: 0 }}>
      {
        comments
          .filter(comment => !comment.dead)
          .map(comment => <Comment key={comment.id} comment={comment} />)
      }
    </List>
  )
};

export default Comments;
