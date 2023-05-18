import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import {
  addContact,
  editContact,
  deleteContact,
  getContacts,
} from './contacts.thunk';
import { IContact } from 'types/contactsType';

interface IContactsState {
  items: IContact[];
  isLoading: boolean;
  error: unknown;
}

const initialState: IContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(
        getContacts.fulfilled,
        (state, { payload }: PayloadAction<IContact[]>) => {
          state.items = payload;
        }
      )
      .addCase(
        addContact.fulfilled,
        (state, { payload }: PayloadAction<IContact>) => {
          state.items.push(payload);
        }
      )
      .addCase(
        deleteContact.fulfilled,
        (state, { payload }: PayloadAction<IContact>) => {
          state.items = state.items.filter(({ id }) => id !== payload.id);
        }
      )
      .addCase(
        editContact.fulfilled,
        (state, { payload }: PayloadAction<IContact>) => {
          const idx = state.items.findIndex(({ id }) => id === payload.id);
          state.items[idx] = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.pending,
          addContact.pending,
          deleteContact.pending,
          editContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled,
          editContact.fulfilled
        ),
        state => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
