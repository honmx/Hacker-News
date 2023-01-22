import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../heplers/constants";


export const fetchComments = createAsyncThunk(
  "news/fetchComments",
  async (arrOfId) => {
    return fetch(arrOfId);  
  }
)

export const fetch = async (arrOfId) => {
  // debugger;
  if (!arrOfId) return [];
  const comments = await Promise.all(arrOfId.map(id => {
    return axios.get(`${url}/item/${id}.json`)
                .then(res => res.data);
  }));
  return comments;
}