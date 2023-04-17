// import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = state => state.users.items;

export const selectIsLoading = state => state.users.isLoading;

export const selectError = state => state.users.error;

export const selectFilter = state => state.filter.value;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter], (contacts, filter) => contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter.toLowerCase()))
// );