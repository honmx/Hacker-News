import { Avatar, Paper, Stack, Box, Typography, Container } from "@mui/material";
import React from "react"
import { NavLink } from "react-router-dom";
import { getTimeDifference } from "../../heplers/getTimeDifference";
import s from "./NewsItem.module.css"

const NewsItem = ({ news }) => {

  const timeDifference = getTimeDifference(new Date().getTime(), news.time * 1000);

  return (
    <NavLink
      to={`/${news.id}`}
      style={{ textDecoration: "none" }}
    >
      <Paper
        elevation={7}
        sx={{
          p: 3,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{
            width: "130px",
            position: "relative"
          }}>
            <Avatar></Avatar>
            <Typography variant="body2" sx={{ position: "absolute" }}>{news.by}</Typography>
          </Box>
          <Container>
            <Stack sx={{ position: "relative" }}>
              <Typography>{news.title}</Typography>
              <Typography sx={{ mb: -1 }}>{timeDifference}</Typography>
            </Stack>
          </Container>
          <Stack
            spacing={-0.5}
            sx={{
              display: "flex",
              alignItems: "flex-end"
            }}
          >
            <Typography>Score</Typography>
            <Typography>{news.score}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </NavLink>
  )
};

export default NewsItem;
