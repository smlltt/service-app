import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "service",
  initialState: {
    item: [],
    isLoading: false,
  },
  reducers: {
    fetchingStarted: (state) => {
      state.isLoading = true;
    },
    fetchServiceSuccess: (state, { payload }) => {
      state.item = payload;
      state.isLoading = false;
    },
  },
});
