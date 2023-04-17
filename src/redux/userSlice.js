import { createSlice, createAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(toggleFollow, (state, action) => {
        const user = state.items.find((user) => user.id === action.payload);
        if (user) {
          user.follow = !user.follow;
          user.followers = user.follow
            ? user.followers + 1
            : user.followers - 1;
        }
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const toggleFollow = createAction("users/toggleFollow");
export const usersReducer = usersSlice.reducer;
