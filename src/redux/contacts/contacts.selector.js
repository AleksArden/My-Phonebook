import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "redux/filter/filter.selector";

export const selectGetContacts = state => state.contacts.items;

export const selectCurrentContact = state => state.contacts.currentContact;

export const selectFilterContacts = createSelector(
    [selectGetContacts, selectFilter], (items, filter) => {

        const normalizedFilter = filter.toLowerCase();

        return items?.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
        );
    }
)