import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "../../services/fetchComments";
import { fetchNews } from "../../services/fetchNews";
import { fetchNewsById } from "../../services/fetchNewsById";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    newsStatus: "",
    currentPage: {},
    currentPageStatus: "",
    currentPageComments: [],
    currentPageCommentsStatus: ""
  },
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
      // debugger;
    });
    builder.addCase(fetchNewsById.pending, (state) => {
      state.currentPageStatus = "pending";
    });
    builder.addCase(fetchNewsById.rejected, (state) => {
      state.currentPageStatus = "rejected";
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.currentPageCommentsStatus = "fulfilled";
      // debugger;
      state.currentPageComments = action.payload;
    });
    builder.addCase(fetchComments.pending, (state, action) => {
      state.currentPageCommentsStatus = "pending";
    });
  }
});

export const { setComments, setCurrentPage } = newsSlice.actions;
export default newsSlice.reducer;