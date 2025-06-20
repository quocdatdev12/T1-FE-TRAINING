import { createSlice } from "@reduxjs/toolkit";
// import { increment } from "../../redux/features/couter";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    decrement: (state) => {
      return {
        ...state,
        count: state.count - 1,
      };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
