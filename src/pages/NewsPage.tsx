import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { fetchNewsById } from "../services/fetchNewsById";
import News from "../components/News";
import { CircularProgress, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { Container } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../store/hook";

const NewsPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currentPageStatus = useAppSelector(state => state.news.currentPageStatus);

  useEffect(() => {
    dispatch(fetchNewsById(id));
  }, [dispatch, id]);

  if (currentPageStatus === "pending") return (
    <Container sx={{
        marginInline: "auto !important",
        width: 50,
        height: 50
      }}
    >
      <CircularProgress />
    </Container>
  );

  if (currentPageStatus === "rejected") return <Typography variant="h1">Something went wrong</Typography>;

  if (currentPageStatus === "fulfilled") {
    return (
      <Stack direction="row" sx={{mb: 4}}>
        <IconButton 
          onClick={() => navigate("/")}
          sx={{
            width: 50,
            height: 50,
            mr: 5
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <News />
      </Stack>
    )
  }

  return null;
};

export default NewsPage;
