import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../heplers/constants";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async () => {
    const newsEesponse = await axios.get(`${url}/newstories.json`);
    const news = newsEesponse.data.slice(0, 100);
    
    const promiseResponse = await Promise.all(news.map(async elem => {
      const res = await axios.get(`${url}/item/${elem}/.json`);
      return res.data;
    }));

    return promiseResponse;
  }
)