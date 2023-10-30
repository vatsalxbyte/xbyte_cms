import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export default store;
