import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./services/fetchNews";
import s from "./App.css";
import NewsListPage from "./pages/NewsListPage/NewsListPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const App = (props) => {

  const idOfNewsWithALotCommentsToTest = 34475743;

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
