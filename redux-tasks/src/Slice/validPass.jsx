import { createSlice } from "@reduxjs/toolkit";

const validPass = createSlice({
  name: "validPass",
  initialState: "",
  reducers: {
    getInput: function (state, params) {
      return params.payload;
    },
  },
});

export const { getInput } = validPass.actions;
export default validPass.reducer;
