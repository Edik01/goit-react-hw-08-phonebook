import {
  fetchAddContact,
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/operations';

const { createSlice } = require('@reduxjs/toolkit');

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers:
    //   addContact: (state, action) => {
    //     state.items = [...state.items, action.payload];
    //   },
    //   changeFilter: (state, action) => {
    //     state.filter = action.payload;
    //   },
    //   deleteContact: (state, action) => {
    //     state.items = state.items.filter(contact => {
    //       return contact.id !== action.payload;
    //     });
    //   },
    // },
    builder => {
      builder
        .addCase(fetchAllContacts.fulfilled, (state, action) => {
          // action is inferred correctly here
          state.items = [...state.items, ...action.payload];
        })
        // You can chain calls, or have separate `builder.addCase()` lines each time
        .addCase(fetchAddContact.fulfilled, (state, action) => {
          state.items = [...state.items, action.payload];
        })
        .addCase(fetchDeleteContact.fulfilled, (state, action) => {
          state.items = state.items.filter(contact => {
            return contact.id !== action.payload.id;
          });
        });

      // You can apply a "matcher function" to incoming actions
      // .addMatcher(isActionWithNumberPayload, (state, action) => {})
      // and provide a default case if no other handlers matched
    },
});

export const { changeFilter } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

// https://redux-toolkit.js.org/api/createReducer#builderaddcase
