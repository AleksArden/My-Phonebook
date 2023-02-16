import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicApi, token } from "http/http";

export const registerUserThunk = createAsyncThunk('auth/register', async (values, thunkAPI) => {
    try {
        const { data } = await publicApi.post("/users/signup", values);
        token.set(data.token)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

