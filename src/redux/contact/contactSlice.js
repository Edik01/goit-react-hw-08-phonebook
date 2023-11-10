import {
  fetchAddContact,
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/contact/operations';

const { createSlice } = require('@reduxjs/toolkit');

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '', error: null, isLoading: false },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        // action is inferred correctly here

        state.items = action.payload;
        state.isLoading = false;
      })
      // You can chain calls, or have separate builder.addCase() lines each time
      .addCase(fetchAddContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.isLoading = false;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => {
          return contact.id !== action.payload.id;
        });
        state.isLoading = false;
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = true;
          state.error = null;
        }
      );
  },
});

export const { changeFilter } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

// https://redux-toolkit.js.org/api/createReducer#builderaddcase
