import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://643d083af0ec48ce904fe02f.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const url = new URL("/users", axios.defaults.baseURL);
      url.searchParams.append("page", 1);
      url.searchParams.append("limit", 8);

      const response = await axios.get(url.toString());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://643d083af0ec48ce904fe02f.mockapi.io';

// export const fetchUsers = createAsyncThunk(
//   'users/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/users');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
