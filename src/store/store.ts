import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slices/newsSlice"; 

const store = configureStore({
  reducer: {
    news: newsSlice
  }
})

export { store };
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch