import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { selectFilter } from 'redux/filter/filter.selector';

export const selectGetContacts = (state: RootState) => state.contacts.items;

export const selectCurrentContact = (state: RootState) =>
  state.contacts.currentContact;

export const selectContactIsLoading = (state: RootState) =>
  state.contacts.isLoading;

export const selectOpenModalDelete = (state: RootState) =>
  state.contacts.isOpenModalDelete;

export const selectOpenModalEdit = (state: RootState) =>
  state.contacts.isOpenModalEdit;

export const selectContactsError = (state: RootState) => state.contacts.error;

export const selectFilterContacts = createSelector(
  [selectGetContacts, selectFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
