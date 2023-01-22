import React, { useEffect } from "react"
import NewsList from "../../components/NewsList/NewsList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../services/fetchNews";
import { setComments, setCurrentPage } from "../../store/slices/newsSlice";
import { IconButton, CircularProgress, Container } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from "../../components/SearchBar";
import { Box } from "@mui/system";
// import s from "./NewListPage.module.css"

const NewListPage = (props) => {

  const dispatch = useDispatch();
  const news = useSelector(state => state.news.news);
  const status = useSelector(state => state.news.newsStatus);

  const [filter, setFilter] = useState("");
  const [filteredNews, setFilteredNews] = useState(news);

  // debugger;

  useEffect(() => {
    dispatch(setCurrentPage({}));
    dispatch(setComments([]));
  }, []);

  useEffect(() => {
    setFilteredNews(news.filter(item => {
      return item.title.includes(filter);
    }))
  }, [filter, news]);

  if (status === "pending") return <CircularProgress color="primary" />;

  if (status === "rejected") return <h1>Something went wrong</h1>;

  if (status === "fulfilled") return (
    <Container maxWidth="md">
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
          <RefreshIcon color="primary" />
        </IconButton>
      </Box>
      <NewsList news={filteredNews}/>
    </Container>
  )

  // return (
  //   <div>
  //     { status === "pending" ? <h1>Loading...</h1> : "" }
  //     { status === "rejected" ? "" : "" }
  //     <button onClick={handleClick}>Refresh</button>
  //     <NewsList />
  //   </div>
  // )
};

export default NewListPage;
