import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../heplers/constants";
import { setNews } from "../store/slices/newsSlice";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (_, thunkAPI) => {
    const newsEesponse = await axios.get(`${url}/newstories.json`);
    const news = newsEesponse.data.slice(0, 100);
    
    const promiseResponse = await Promise.all(news.map(async elem => {
      const res = await axios.get(`${url}/item/${elem}/.json`);
      return res.data;
    }));

    return promiseResponse;

    // const newsResponse = await axios.get(`${url}/item/${news[3]}.json`);
    // console.log(newsResponse.data);
  }
)