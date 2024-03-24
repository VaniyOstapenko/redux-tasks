import { createSlice } from "@reduxjs/toolkit";

const getSum = createSlice({
  name: "getSum",
  initialState: { inp1: "", inp2: "", result: 0 },
  reducers: {
    changeUnput1: function (state, params) {
      return { ...state, inp1: params.payload };
    },
    changeUnput2: function (state, params) {
      return { ...state, inp2: params.payload };
    },
    sumInputs: function (state) {
      return { ...state, result: +state.inp1 + +state.inp2 };
    },
  },
});

export const { changeUnput1, changeUnput2, sumInputs } = getSum.actions;
export default getSum.reducer;
