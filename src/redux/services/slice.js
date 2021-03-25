import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "counter",
  initialState: {
    value: 0,
    services: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setting: {
      prepare(services) {
        return { payload: { services } };
      },
      reducer(state, action) {
        state.services = action.payload.services;
      },
    },
  },
});
