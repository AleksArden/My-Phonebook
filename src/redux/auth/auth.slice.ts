import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { logInUser, logOutUser, registerUser, refreshUser } from './auth.thunk';
import storage from 'redux-persist/lib/storage';
import { IUserResponse, IUserWithoutPassword } from 'types/userTypes';

interface IAuthState {
  user: IUserWithoutPassword;
  token: string | null;
  isLoading: boolean;
  error: unknown;
  isRefreshing: boolean;
}

const initialState: IAuthState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoading: false,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(
        registerUser.fulfilled,
        (state, { payload }: PayloadAction<IUserResponse>) => {
          state.user = payload.user;
          state.token = payload.token;
        }
      )
      .addCase(
        logInUser.fulfilled,
        (state, { payload }: PayloadAction<IUserResponse>) => {
          state.user = payload.user;
          state.token = payload.token;
        }
      )
      .addCase(logOutUser.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        console.log('1111111');
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, { payload }: PayloadAction<IUserWithoutPassword>) => {
          state.user = payload;
          state.isRefreshing = false;
        }
      )
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.token = null;
      })
      .addMatcher(
        isAnyOf(
          registerUser.pending,
          logInUser.pending,
          logOutUser.pending,
          refreshUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.fulfilled,
          logInUser.fulfilled,
          logOutUser.fulfilled,
          refreshUser.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.rejected,
          logInUser.rejected,
          logOutUser.rejected,
          refreshUser.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
