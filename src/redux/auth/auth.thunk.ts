import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectAuthToken, selectUser } from './auth.selector';
import Notiflix from 'notiflix';
import {
  IUser,
  IUserResponse,
  IUserWithoutName,
  IUserWithoutPassword,
} from 'types/userTypes';
import { store } from 'redux/store';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (values: IUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', values);
      setToken(data.token);
      return data as IUserResponse;
    } catch (error) {
      console.log(error);
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      if (message === 'Request failed with status code 400') {
        Notiflix.Notify.failure('This name or email is no longer available', {
          position: 'center-top',
          cssAnimationStyle: 'from-top',
        });
        return rejectWithValue(null);
      }
      return rejectWithValue(message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (values: IUserWithoutName, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', values);
      setToken(data.token);
      return data as IUserResponse;
    } catch (error) {
      console.log(error);
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      if (message === 'Request failed with status code 400') {
        Notiflix.Notify.failure('Incorrectly entered email or password', {
          position: 'center-top',
          cssAnimationStyle: 'from-top',
        });
        return rejectWithValue(null);
      }
      return rejectWithValue(message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      setToken('');
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return rejectWithValue(message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    const saveToken = selectAuthToken(store.getState());
    const saveUser = selectUser(store.getState());
    if (saveToken === null) {
      return fulfillWithValue(saveUser);
    }

    try {
      setToken(saveToken);
      const { data } = await axios.get('/users/current');

      return data as IUserWithoutPassword;
    } catch (error) {
      console.log(error);
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return rejectWithValue(message);
    }
  }
);
