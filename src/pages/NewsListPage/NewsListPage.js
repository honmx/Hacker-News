import React from "react"
import NewsList from "../../components/NewsList/NewsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../services/fetchNews";
// import s from "./NewListPage.module.css"

const NewListPage = (props) => {

  const dispatch = useDispatch();

  const status = useSelector(state => state.news.newsStatus);

  const handleClick = () => {
    dispatch(fetchNews());
  }

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Something went wrong</h1>;
  if (status === "fulfilled") return (
    <div>
      <button onClick={() => dispatch(fetchNews())}>Refresh</button>
      <NewsList />
    </div>
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
