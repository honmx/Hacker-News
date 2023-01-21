import React from "react"
import NewsList from "../../components/NewsList/NewsList";
import { useSelector } from "react-redux";
// import s from "./NewListPage.module.css"

const NewListPage = (props) => {

  const status = useSelector(state => state.news.newsStatus);

  return (
    <div>
      { status === "pending" ? <h1>Loading...</h1> : "" }
      { status === "rejected" ? "" : "" }
      <NewsList />
    </div>
  )
};

export default NewListPage;
