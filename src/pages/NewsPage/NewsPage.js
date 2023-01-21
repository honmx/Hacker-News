import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNewsById } from "../../services/fetchNewsById";
import News from "../../components/News/News";
// import s from "./NewsPage.module.css"

const NewsPage = (props) => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const currentPage = useSelector(state => state.news.currentPage);
  const currentPageStatus = useSelector(state => state.news.currentPageStatus);

  useEffect(() => {
    dispatch(fetchNewsById(id));
  }, [])

  return (
    <div>
      { currentPageStatus === "pending" ? <h1>Loading...</h1> : "" }
      { currentPageStatus === "rejected" ? "" : "" }
      <News news={currentPage} />
    </div>
  )
};

export default NewsPage;
