import { createSlice } from "@reduxjs/toolkit";

const getLengthText = createSlice({
  name: "getLengthText",
  initialState: 20,
  reducers: {
    getPlusStr: function (state) {
      return state + 1;
    },
    getMinusStr: function (state) {
      return state - 1;
    },
  },
});

export const { getPlusStr, getMinusStr } = getLengthText.actions;
export default getLengthText.reducer;
