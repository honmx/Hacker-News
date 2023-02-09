import { Stack, Paper, IconButton, Typography, Avatar, Link } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh"
import React, { FC } from "react"
import { useEffect } from "react";
import { fetchComments } from "../services/fetchComments";
import Comments from "./Comments";
import { useAppDispatch, useAppSelector } from "store/hook";
import { INews } from "types/News";

const News: FC = () => {

  const dispatch = useAppDispatch();

  const news = useAppSelector(state => state.news.currentPage) as INews;
  const comments = useAppSelector(state => state.news.currentPageComments);

  useEffect(() => {    
    if (news.kids) dispatch(fetchComments(news.kids));
  }, [dispatch, news.kids]);

  return (
    <Paper
      elevation={12}
      sx={{
        width: "100%",
        p: 5,
        borderRadius: 5
      }}
    >
      <Stack spacing={3}>
        {/* news -> */}
        <Stack spacing={3}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "flex-end" }}
          >
            <Typography variant="subtitle2">By:</Typography>
            <Avatar />
            <Typography variant="subtitle2">{news.by}</Typography>
          </Stack>
          <Typography variant="h5">{news.title}</Typography>
          <Link
            href={news.url}
            target="_blank"
            underline="hover"
            sx={{ width: 60 }}
          >
            Read all
          </Link>
          <Typography
            variant="subtitle2"
            sx={{ marginLeft: "auto !important" }}
          >
            {new Date(news.time * 1000).toLocaleString()}
          </Typography>
        </Stack>
        {/* comments  -> */}
        <Stack
          direction="row"
          spacing={3}
          sx={{ alignItems: "center" }}
        >
          <IconButton
            onClick={() => {
              if (news.kids) dispatch(fetchComments(news.kids))
            }}
            sx={{
              width: 50,
              height: 50
            }}
          >
            <RefreshIcon />
          </IconButton>
          <Typography>Comments:</Typography>
        </Stack>
        <Comments comments={comments} />
      </Stack>
    </Paper>
  )
};

export default News;
