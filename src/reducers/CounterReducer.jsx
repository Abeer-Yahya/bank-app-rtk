import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incre: (state, action) => {
      state.value++;
    },
    decre: (state, action) => {
      state.value--;
    },
  },
});
export const counterState = (state) => state.counter.value;
export const { decre, incre } = counterSlice.actions;
export default counterSlice.reducer;
