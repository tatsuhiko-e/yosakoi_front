import { configureStore } from '@reduxjs/toolkit';
import eventCardReducer from "./features/event/EventSlice";

export const store = configureStore({
  reducer: {
    eventCard: eventCardReducer,
  },
});