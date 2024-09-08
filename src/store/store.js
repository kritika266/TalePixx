import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    //TODO: add more slices here for posts
    posts: postSlice,
  },
});

export default store;
