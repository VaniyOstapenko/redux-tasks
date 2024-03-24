import { createSlice } from "@reduxjs/toolkit";

const validationEmail = createSlice({
  name: "validationEmail",
  initialState: "",
  reducers: {
    getInput: function (state, params) {
      return params.payload;
    },
  },
});

export const { getInput } = validationEmail.actions;
export default validationEmail.reducer;
