import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useAppSelector } from 'redux/hooks/hooks';
// import { selectAuthToken } from 'redux/auth/auth.selector';
// import { selectUser } from 'redux/auth/auth.selector';
// import { setToken } from 'redux/auth/auth.thunk';
import axios from 'axios';
import { IContact, IContactWithoutId, IEditContact } from 'types/contactsType';

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    // const saveToken = useAppSelector(selectAuthToken);
    // const saveUser = useAppSelector(selectUser);

    // if (saveToken === null) {
    //   return fulfillWithValue(saveUser);
    // }

    try {
      //   setToken(saveToken);
      const { data } = await axios.get('/contacts');
      return data as IContact[];
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return rejectWithValue(message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact: IContactWithoutId, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data as IContact;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId: string, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data as IContact;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const editContact = createAsyncThunk(
  'contacts/change',
  async (contact: IEditContact, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `/contacts/${contact.id}`,
        contact.item
      );
      return data as IContact;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
