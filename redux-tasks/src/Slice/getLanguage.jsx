import { createSlice } from "@reduxjs/toolkit";

const getLanguage = createSlice({
  name: "getLanguage",
  initialState: "Rus",
  reducers: {
    getLang: function (state, params) {
      return params.payload;
    },
  },
});

export const { getLang } = getLanguage.actions;
export default getLanguage.reducer;
