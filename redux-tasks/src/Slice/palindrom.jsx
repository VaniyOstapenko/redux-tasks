import { createSlice } from "@reduxjs/toolkit";

const palindrom = createSlice({
  name: "palindrom",
  initialState: "",
  reducers: {
    getStr: function (state, params) {
      return params.payload;
    },
  },
});

export const { getStr } = palindrom.actions;
export default palindrom.reducer;
