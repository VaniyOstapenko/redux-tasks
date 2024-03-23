import { createSlice } from "@reduxjs/toolkit";

const palindrom2 = createSlice({
  name: "palindrom2",
  initialState: { value: "", isPalindrom: "false" },
  reducers: {
    getStr: function (state, params) {
      return { ...state, value: params.payload };
    },
    getPalindrom: function (state, params) {
      if (state.value == state.value.split("").reverse().join("")) {
        return { ...state, isPalindrom: "true" };
      } else {
        return { ...state, isPalindrom: "false" };
      }
    },
  },
});

export const { getStr, getPalindrom } = palindrom2.actions;
export default palindrom2.reducer;
