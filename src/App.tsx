import React, { useEffect } from "react";
import { fetchNews } from "./services/fetchNews";
import NewsListPage from "./pages/NewsListPage";
import NewsPage from "./pages/NewsPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import { useAppDispatch } from "./store/hook";

// id of news with a lot comments to test: 34475743;

const App = () => {

  const dispatch = useAppDispatch();

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
