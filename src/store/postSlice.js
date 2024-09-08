import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [], // Initial state for posts is an empty array
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload.posts; // Set posts to the payload received
    },
    clearPosts: (state) => {
      state.posts = []; // Clear posts array
    },
  },
});

export const { addPosts, clearPosts } = postsSlice.actions;

export default postsSlice.reducer;
