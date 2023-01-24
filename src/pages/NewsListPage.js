import React, { useEffect } from "react"
import NewsList from "../components/NewsList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../services/fetchNews";
import { setComments, setCurrentPage } from "../store/slices/newsSlice";
import { IconButton, Container } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from "../components/SearchBar";
import { Box } from "@mui/system";
import CenteredLoading from "../components/CenteredLoading";

const NewListPage = (props) => {

  const dispatch = useDispatch();
  const news = useSelector(state => state.news.news);
  const status = useSelector(state => state.news.newsStatus);

  const [filter, setFilter] = useState("");
  const [filteredNews, setFilteredNews] = useState(news);

  useEffect(() => {
    dispatch(setCurrentPage({}));
    dispatch(setComments([]));
  }, []);

  useEffect(() => {
    setFilteredNews(news.filter(item => {
      return item.title.toLowerCase().includes(filter.toLowerCase());
    }))
  }, [filter, news]);

  if (status === "pending") return <CenteredLoading />;

  if (status === "rejected") return <h1>Something went wrong</h1>;

  if (status === "fulfilled") return (
    <Container maxWidth="md" sx={{mb: 3}}>
      <Box
        sx={{
          display: "flex",
          alignContent: "space-between"
        }}
      >
        <SearchBar filter={filter} setFilter={setFilter} />
        <IconButton 
          sx={{
            width: 50,
            height: 50
          }}
          onClick={() => dispatch(fetchNews())}
        >
          <RefreshIcon />
        </IconButton>
      </Box>
      <NewsList news={filteredNews}/>
    </Container>
  )
};

export default NewListPage;
