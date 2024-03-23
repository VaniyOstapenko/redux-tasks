import { createSlice } from "@reduxjs/toolkit";

const counter1 = createSlice({
  name: "counter1",
  initialState: 0,
  reducers: {
    increment: function (state) {
      return state + 1;
    },
  },
});

export const { increment } = counter1.actions;
export default counter1.reducer;
