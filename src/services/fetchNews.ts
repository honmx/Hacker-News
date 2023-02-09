import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { INews } from "types/News";
import { url } from "../heplers/constants";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (_, { rejectWithValue }) => {
    try {
      const newsResponse = await axios.get<INews[]>(`${url}/newstories.json`);
      const news = newsResponse.data.slice(0, 100);

      const promiseResponse = await Promise.all(news.map(async elem => {
        const res = await axios.get(`${url}/item/${elem}/.json`);
        return res.data;
      }));

      return promiseResponse;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
)