import { configureStore } from "@reduxjs/toolkit";
import informationreducer from "./informationSlice";

const store = configureStore({
  reducer: {
    info: informationreducer,
  },
});

export default store;
