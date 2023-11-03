import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {
  return state.items;
};
export const selectFilter = state => {
  return state.filter;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
