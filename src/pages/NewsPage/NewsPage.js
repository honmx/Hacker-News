import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { fetchNewsById } from "../../services/fetchNewsById";
import News from "../../components/News/News";
// import s from "./NewsPage.module.css"

const NewsPage = (props) => {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const match = useMatch("/")

  const currentPage = useSelector(state => state.news.currentPage);
  const currentPageStatus = useSelector(state => state.news.currentPageStatus);

  // debugger;

  useEffect(() => {
    // console.log("mount");
    dispatch(fetchNewsById(id));
    // debugger;  
  }, [dispatch, id]);

  // console.log("=POST==DATA=====================================")
  // console.log(currentPage);

  if (currentPageStatus === "pending") return <h1>Loading...</h1>;
  if (currentPageStatus === "rejected") return <h1>Something went wrong</h1>;
  if (currentPageStatus === "fulfilled") return (
    <div>
      <button onClick={() => navigate("/")}>Back</button>
      <News news={currentPage} />
    </div>
  )

  // return (
  //   <div>
  //     { currentPageStatus === "pending" ? <h1>Loading...</h1> : "" }
  //     { currentPageStatus === "rejected" ? "" : "" }
  //     <button onClick={() => navigate("/")}>Back</button>
  //     <News news={currentPage} />
  //   </div>
  // )
};

export default NewsPage;
