import { createAsyncThunk } from "@reduxjs/toolkit";
import { privatApi } from "services/http";

export const getContactsThunk = createAsyncThunk("contacts/get", async (_, thunkAPI) => {
    try {
        const { data } = await privatApi.get("/contacts");
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const addContactThunk = createAsyncThunk("contacts/add", async (values, thunkAPI) => {
    try {
        const { data } = await privatApi.post("/contacts", values);

        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContactThunk = createAsyncThunk("contacts/delete", async (contactId, thunkAPI) => {
    try {
        const { data } = await privatApi.delete(`/contacts/${contactId}`);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

