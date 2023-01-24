import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./services/fetchNews";
import NewsListPage from "./pages/NewsListPage/NewsListPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

// id of news with a lot comments to test: 34475743;

const App = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());

    const interval = setInterval(() => {
      dispatch(fetchNews());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<NewsListPage />} />
          <Route path=":id" element={<NewsPage />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;
