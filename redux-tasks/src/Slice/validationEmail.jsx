import { createSlice } from "@reduxjs/toolkit";

const isValidEmail = createSlice({
  name: "isValidEmail",
  initialState: '',
  reducers: {
    getEmail: function (state) {
      if (!/^[\S]+\@+[a-z]+\.[a-z]{2,4}$/gm.test(state)) {
        return true;
      } else {
        return false;
      }
    },
    getInput: function (state, params) {
      return params.payload;
    },
  },
});

export const { getEmail, getInput } = isValidEmail.actions;
export default isValidEmail.reducer;
