import { createAsyncThunk } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from 'services/contactsApi';
export const fetchRegister = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const result = await register(credentials);
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const result = await login(credentials);
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLogout = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      const result = await logout(credentials);
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRefresh = createAsyncThunk(
  'auth/refresh',
  async (credentials, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) thunkAPI.rejectWithValue('user not authorization');
    try {
      const result = await refresh(token);
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
