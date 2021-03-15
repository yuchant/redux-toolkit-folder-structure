/**
 * Let's put a thunk in its own file, because it's a large complex thunk
 * or isolated behavior and we want to keep the action and the reducer close by.
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
import delay from "delay";
import { sliceActions } from "./slice";

export const myThunk = createAsyncThunk(
  "slice/myThunk",
  async (payload, thunkApi) => {
    /**
     * Let's use an action created by createSlice
     */
    thunkApi.dispatch(sliceActions.close());
    await delay(250);
    thunkApi.dispatch(sliceActions.open());

    return true;
  }
);

export const addMyThunkReducers = (builder) => {
  builder.addCase(myThunk.fulfilled, (state, action) => {
    state.isThunkFulfilled = true;
  });
};
