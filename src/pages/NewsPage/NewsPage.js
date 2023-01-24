import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchNewsById } from "../../services/fetchNewsById";
import News from "../../components/News/News";
import { CircularProgress, IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { Container } from "@mui/system";

const NewsPage = (props) => {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentPage = useSelector(state => state.news.currentPage);
  const currentPageStatus = useSelector(state => state.news.currentPageStatus);

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

  if (currentPageStatus === "rejected") return <h1>Something went   wrong</h1>;

  if (currentPageStatus === "fulfilled") return (
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
      <News news={currentPage} />
    </Stack>
  )
};

export default NewsPage;
