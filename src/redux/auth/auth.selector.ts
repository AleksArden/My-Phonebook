import { RootState } from 'redux/store';

export const selectAuthToken = (state: RootState) => state.auth.token;

export const selectUser = (state: RootState) => state.auth.user;

export const selectUserEmail = (state: RootState) => state.auth.user.email;

export const selectRefresh = (state: RootState) => state.auth.isRefreshing;

export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;

export const selectAuthError = (state: RootState) => state.auth.error;
