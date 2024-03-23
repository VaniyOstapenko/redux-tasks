import { createSlice } from "@reduxjs/toolkit";

const see = createSlice({
  name: "see",
  initialState: false,
  reducers: {
    getText: function (state) {
      return true;
    },
    notGetText: function (state) {
      return false;
    },
  },
});

export const { getText, notGetText } = see.actions;
export default see.reducer;
