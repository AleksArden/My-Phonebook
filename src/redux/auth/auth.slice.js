import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "constants/constants.status";
import { persistReducer } from 'redux-persist';
import { logInUserThunk, logOutUserThunk, registerUserThunk, refreshUserThunk } from "./auth.thunk";
import storage from "redux-persist/lib/storage";

const authInitState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    status: STATUS.idle,
    error: null,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    extraReducers: builder => {
        builder.addCase(registerUserThunk.pending, state => {
            state.status = STATUS.loading;
        })
            .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.status = STATUS.success;
                state.token = payload.token;
                state.error = null;
            })
            .addCase(registerUserThunk.rejected, (state, { payload }) => {
                state.status = STATUS.error;
                state.error = payload;
            })
            .addCase(logInUserThunk.pending, state => {
                state.status = STATUS.loading;
            })
            .addCase(logInUserThunk.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.status = STATUS.success;
                state.error = null;
            })
            .addCase(logInUserThunk.rejected, (state, { payload }) => {

                state.status = STATUS.error;
                state.error = payload;
            })
            .addCase(logOutUserThunk.pending, state => {
                state.status = STATUS.loading;
            })
            .addCase(logOutUserThunk.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.status = STATUS.idle;
                state.error = null;
            })
            .addCase(logOutUserThunk.rejected, (state, { payload }) => {
                state.status = STATUS.error;
                state.error = payload;
            })
            .addCase(refreshUserThunk.pending, state => {
                state.status = STATUS.idle;
                state.isRefreshing = true;
            })
            .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isRefreshing = false;
                state.error = null;
                state.status = STATUS.success;
            })
            .addCase(refreshUserThunk.rejected, (state, { payload }) => {
                state.status = STATUS.error;
                state.error = payload;
                state.isRefreshing = false;
            })

    }
})
const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ["token", "user"]
}

export const authReducer = persistReducer(
    persistConfig,
    authSlice.reducer
);