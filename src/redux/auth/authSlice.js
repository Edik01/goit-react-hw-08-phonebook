import {
  fetchLogin,
  fetchLogout,
  fetchRefresh,
  fetchRegister,
} from 'redux/auth/operations';

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isRefresh: false, isLogin: false },

  extraReducers: builder => {
    builder
      .addCase(fetchRegister.fulfilled, (state, action) => {
        // action is inferred correctly here
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        // action is inferred correctly here
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })

      .addCase(fetchRefresh.pending, (state, action) => {
        // action is inferred correctly here
        state.isRefresh = true;
        // state.token = action.payload.token;
      })
      .addCase(fetchRefresh.fulfilled, (state, action) => {
        // action is inferred correctly here
        state.user = action.payload;
        state.isRefresh = false;
        state.isLogin = true;

        // state.token = action.payload.token;
      })
      .addCase(fetchRefresh.rejected, (state, action) => {
        // action is inferred correctly here

        state.isRefresh = false;
        // state.token = action.payload.token;
      })

      .addCase(fetchLogout.fulfilled, (state, action) => {
        // action is inferred correctly here
        state.user = null;
        state.token = null;
        state.isLogin = false;
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time

      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );

    // You can apply a "matcher function" to incoming actions
    // .addMatcher(isActionWithNumberPayload, (state, action) => {})
    // and provide a default case if no other handlers matched
  },
});

export const authReducer = authSlice.reducer;

// https://redux-toolkit.js.org/api/createReducer#builderaddcase
