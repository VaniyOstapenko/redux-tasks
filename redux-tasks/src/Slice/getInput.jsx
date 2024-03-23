import { createSlice } from "@reduxjs/toolkit";

const getInput = createSlice({
  name: "getInput",
  initialState: "",
  reducers: {
    getStr: function (state, params) {
      return params.payload;
    },
  },
});

export const { getStr } = getInput.actions;
export default getInput.reducer;
