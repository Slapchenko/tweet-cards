import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://643d083af0ec48ce904fe02f.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleFollow = createAsyncThunk(
  "users/toggleFollow",
  async (userId, thunkAPI) => {
    try {
      const { data: user } = await axios.get(`/users/${userId}`);
      user.follow = !user.follow;
      user.followers = user.follow ? user.followers + 1 : user.followers - 1;
      const response = await axios.put(`/users/${userId}`, user);
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
