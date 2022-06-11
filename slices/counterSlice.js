import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  userName: "rob",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; //state.value = state.value+1
    },
    decrement: (state) => {
      state.value = +1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    changeName: (state) => {
      state.userName = "Jerry";
    },
  },
});

export const { increment, decrement, incrementByAmount, changeName } =
  counterSlice.actions;
export default counterSlice.reducer;
