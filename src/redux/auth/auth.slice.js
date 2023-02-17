import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "constants/constants.status";
import { persistReducer } from 'redux-persist';
import { logInUserThunk, logOutUserThunk, registerUserThunk } from "./auth.thunk";
import storage from "redux-persist/lib/storage";

const authInitState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    status: STATUS.idle,
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
            })
            .addCase(registerUserThunk.rejected, state => {
                state.status = STATUS.error;
            })
            .addCase(logInUserThunk.pending, state => {
                state.status = STATUS.loading;
            })
            .addCase(logInUserThunk.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.status = STATUS.success;
            })
            .addCase(logInUserThunk.rejected, state => {
                state.status = STATUS.error;
            })
            .addCase(logOutUserThunk.pending, state => {
                state.status = STATUS.loading;
            })
            .addCase(logOutUserThunk.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.status = STATUS.idle;
            })
            .addCase(logOutUserThunk.rejected, state => {
                state = STATUS.error;
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