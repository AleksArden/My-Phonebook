import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "constants/constants.status";
import { addContactThunk, deleteContactThunk, getContactsThunk } from "./contacts.thunk";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        status: STATUS.idle,
        error: null,
        // currentContact: null,
    },
    // reducers: {
    //     openContactAction(state, { payload }) {
    //         state.currentContact = null;
    //         state.currentContact = payload;
    //     }
    // },
    extraReducers: builder => {
        builder.addCase(getContactsThunk.pending, state => {
            state.status = STATUS.loading;
        })
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.status = STATUS.success;
                state.error = null;
            })
            .addCase(getContactsThunk.rejected, (state, { payload }) => {
                state.error = payload;
                state.status = STATUS.error;
            })
            .addCase(addContactThunk.pending, state => {
                state.status = STATUS.loading;
            })
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.status = STATUS.success;
                state.error = null;
                state.items.push(payload);
            })
            .addCase(addContactThunk.rejected, (state, { payload }) => {
                state.status = STATUS.error;
                state.error = payload;
            })
            .addCase(deleteContactThunk.pending, state => {
                state.status = STATUS.loading;
            })
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.status = STATUS.success;
                state.error = null;
                state.items = state.items.filter(({ id }) => id !== payload.id)
            })
            .addCase(deleteContactThunk.rejected, (state, { payload }) => {
                state.status = STATUS.error;
                state.error = payload;
            })
    }
})

export const { openContactAction } = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer