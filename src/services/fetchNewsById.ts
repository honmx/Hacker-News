import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../heplers/constants";

export const fetchNewsById = createAsyncThunk(
  "news/fetchNewsById",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/item/${id}.json`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
)