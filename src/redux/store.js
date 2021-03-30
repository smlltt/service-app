import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./services/index";
import serviceReducer from "./service/index";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    service: serviceReducer,
  },
});

export default store;
