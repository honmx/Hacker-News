import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IComment } from "types/Comment";
import { url } from "../heplers/constants";


export const fetchComments = createAsyncThunk(
  "news/fetchComments",
  async (arrOfId: number[], { rejectWithValue }) => {
    try {
      return fetch(arrOfId);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
)

export const fetch = async (arrOfId: number[]) => {
  if (!arrOfId) return [];

  const comments = await Promise.all<IComment>(arrOfId.map(async id => {
    const res = await axios.get(`${url}/item/${id}.json`);
    return res.data;
  }));

  return comments;
}