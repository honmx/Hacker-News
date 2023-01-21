import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "../../services/fetchNews";
import { fetchNewsById } from "../../services/fetchNewsById";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    newsStatus: "",
    currentPage: {},
    currentPageStatus: "",
  },
  reducers: {
    setNews(state, action) {
      state.news = action.payload;
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
  }
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;