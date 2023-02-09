import React, { useEffect } from "react"
import NewsList from "../components/NewsList";
import { useState } from "react";
import { fetchNews } from "../services/fetchNews";
import { IconButton, Container, Typography } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from "../components/SearchBar";
import { Box } from "@mui/system";
import CenteredLoading from "../components/CenteredLoading";
import { useAppDispatch, useAppSelector } from "store/hook";

const NewListPage = () => {

  const dispatch = useAppDispatch();
  const news = useAppSelector(state => state.news.news);
  const status = useAppSelector(state => state.news.newsStatus);

  const [filter, setFilter] = useState("");
  const [filteredNews, setFilteredNews] = useState(news);

  useEffect(() => {
    setFilteredNews(news.filter(item => {
      return item.title.toLowerCase().includes(filter.toLowerCase());
    }))
  }, [filter, news]);

  if (status === "pending") return <CenteredLoading />;

  if (status === "rejected") return <Typography variant="h1">Something went wrong</Typography>;

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

  return null;
};

export default NewListPage;
