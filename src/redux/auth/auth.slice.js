import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "constants/constants.status";
import { registerUserThunk } from "./auth.thunk";

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
    }
})

export const authReducer = authSlice.reducer;