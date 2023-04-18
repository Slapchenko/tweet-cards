import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, toggleFollow } from "./operations";
import axios from 'axios';

axios.defaults.baseURL = 'https://643d083af0ec48ce904fe02f.mockapi.io';

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
      .addCase(toggleFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedUser = action.payload;
        const userIndex = state.items.findIndex((user) => user.id === updatedUser.id);
        if (userIndex >= 0) {
          state.items[userIndex] = updatedUser;
        }
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});


export const usersReducer = usersSlice.reducer;

// import { createSlice, createAction } from "@reduxjs/toolkit";
// import { fetchUsers } from "./operations";

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// export const usersSlice = createSlice({
//   name: "users",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(toggleFollow, (state, action) => {
//         const user = state.items.find((user) => user.id === action.payload);
//         if (user) {
//           user.follow = !user.follow;
//           user.followers = user.follow
//             ? user.followers + 1
//             : user.followers - 1;
//         }
//       })
//       .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
//       .addMatcher(
//         (action) => action.type.endsWith("/rejected"),
//         handleRejected
//       );
//   },
// });

// export const toggleFollow = createAction("users/toggleFollow");
// export const usersReducer = usersSlice.reducer;
