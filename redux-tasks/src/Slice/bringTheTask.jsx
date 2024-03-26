import { createSlice } from "@reduxjs/toolkit";

const bringTheTask = createSlice({
  name: "bringTheTask",
  initialState: { array: ["сон", "работа", "учёба", "зарядка"], result: "" },
  reducers: {
    inputValue: function (state, params) {
      return { ...state, result: params.payload };
    },
    addTask: function (state, params) {
      return { ...state, array: [...state.array, state.result] };
    },
    deleteTask: function (state, params) {
      const res = state.array.filter((el) => el !== params.payload);
      return { ...state, array: res };
    },
  },
});

export const { inputValue, addTask, deleteTask } = bringTheTask.actions;
export default bringTheTask.reducer;
