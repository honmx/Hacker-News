import { createSlice } from "@reduxjs/toolkit";
import { IComment } from "types/Comment";
import { fetchComments } from "../../services/fetchComments";
import { fetchNews } from "../../services/fetchNews";
import { fetchNewsById } from "../../services/fetchNewsById";
import { INews } from "../../types/News";

type Status = "pending" | "fulfilled" | "rejected" | null;

interface IInitialState {
  news: INews[];
  newsStatus: Status;
  currentPage: INews | {};
  currentPageStatus: Status;
  currentPageComments: IComment[];
  currentPageCommentsStatus: Status;
}

const initialState: IInitialState = {
  news: [],
  newsStatus: null,
  currentPage: {},
  currentPageStatus: null,
  currentPageComments: [],
  currentPageCommentsStatus: null
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setComments(state, action) {
      state.currentPageComments = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.newsStatus = "fulfilled";
      state.news = action.payload; 
    });
    builder.addCase(fetchNews.pending, (state) => {
      state.newsStatus = "pending";
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.newsStatus = "rejected"
    });
    builder.addCase(fetchNewsById.fulfilled, (state, action) => {
      state.currentPageStatus = "fulfilled";
      state.currentPage = action.payload;
    });
    builder.addCase(fetchNewsById.pending, (state) => {
      state.currentPageStatus = "pending";
    });
    builder.addCase(fetchNewsById.rejected, (state) => {
      state.currentPageStatus = "rejected";
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.currentPageCommentsStatus = "fulfilled";
      state.currentPageComments = action.payload;
    });
    builder.addCase(fetchComments.pending, (state) => {
      state.currentPageCommentsStatus = "pending";
    });
    builder.addCase(fetchComments.rejected, (state) => {
      state.currentPageCommentsStatus = "rejected";
    });
  }
});

export const { setComments, setCurrentPage } = newsSlice.actions;
export default newsSlice.reducer;