import { Stack, Paper, IconButton, Box, Typography, Avatar, Link } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh"
import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../services/fetchComments";
import Comments from "../Comments/Comments";
import s from "./News.module.css"

const News = ({ news }) => {

  // const [comments, setComments] = useState([]);

  // const fetch = () => {
  //   fetchComments(news.kids)
  //     .then(res => setComments(res));
  // }
  // console.log(news);

  const comments = useSelector(state => state.news.currentPageComments);

  const dispatch = useDispatch();
  // debugger;
  useEffect(() => {
    // debugger;
    dispatch(fetchComments(news.kids));
  }, [dispatch, news.kids]);


  // debugger;


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
            onClick={() => dispatch(fetchComments(news.kids))}
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
