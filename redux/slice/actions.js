import { sliceActions } from "./slice";
import { myThunk } from "./thunks";

export const sliceActionsAll = {
  ...sliceActions,
  myThunk,
};
