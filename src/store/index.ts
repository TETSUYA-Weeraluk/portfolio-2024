import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeSlice";
import backOfficeReducer from "./backOfficeSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    backoffice: backOfficeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
