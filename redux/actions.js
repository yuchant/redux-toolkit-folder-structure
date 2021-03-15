import { sliceActions } from "./slice";
import { myThunk } from "./thunk";

export const sliceActionsAll = {
  ...sliceActions,
  myThunk,
};
