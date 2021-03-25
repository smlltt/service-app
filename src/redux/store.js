import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./services/index";

const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
});

export default store;
