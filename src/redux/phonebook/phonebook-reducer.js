import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from "./phonebook-action";

const contacts = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],
  [action.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [action.filter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
