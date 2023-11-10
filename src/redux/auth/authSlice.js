import {
  fetchLogin,
  fetchLogout,
  fetchRefresh,
  fetchRegister,
} from 'redux/auth/operations';

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isRefresh: false },

  extraReducers: builder => {
    builder
      .addCase(fetchRegister.fulfilled, (state, action) => {
        // action is inferred correctly here
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        // action is inferred correctly here
        state.user = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(fetchRefresh.fulfilled, (state, action) => {
        // action is inferred correctly here
        state.user = action.payload.user;
        state.isRefresh = true;
        // state.token = action.payload.token;
      })

      .addCase(fetchLogout.fulfilled, (state, action) => {
        // action is inferred correctly here
        state.user = null;
        state.token = null;
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time

      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = true;
          state.error = null;
        }
      );

    // You can apply a "matcher function" to incoming actions
    // .addMatcher(isActionWithNumberPayload, (state, action) => {})
    // and provide a default case if no other handlers matched
  },
});

export const authReducer = authSlice.reducer;

// https://redux-toolkit.js.org/api/createReducer#builderaddcase
