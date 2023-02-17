import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "constants/constants.status";
import { logInUserThunk, registerUserThunk } from "./auth.thunk";

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
    }
})

export const authReducer = authSlice.reducer;