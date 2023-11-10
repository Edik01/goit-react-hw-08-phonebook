import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {
  return state.contact.items;
};
export const selectFilter = state => {
  return state.contact.filter;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
