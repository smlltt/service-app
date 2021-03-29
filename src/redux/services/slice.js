import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "services",
  initialState: {
    value: 0,
    items: [],
    isLoading: false,
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
    // servicesFetched: {
    //   prepare(services) {
    //     return { payload: { services } };
    //   },
    //   reducer(state, action) {
    //     state.items = action.payload.services;
    //   },
    // },
    fetchingStarted: (state) => {
      state.isLoading = true;
    },
    fetchServicesSuccess: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
  },
});
