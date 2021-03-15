import { createSlice } from "@reduxjs/toolkit";
import { myThunk, addMyThunkReducers } from "./thunks";

export const slice = createSlice({
  name: "slice",
  initialState: {
    isOpen: false,
    isThunkFulfilled: false,
  },
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    addMyThunkReducers(builder);
  },
});

export const sliceActions = slice.actions;
export const sliceReducer = slice.reducer;
