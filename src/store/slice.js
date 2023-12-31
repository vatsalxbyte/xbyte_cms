// import { createSlice } from '@reduxjs/toolkit';

// const sideBarSlice = createSlice({
//   name: 'sidebar',
//   initialState: [],
//   reducers: {
//     rootReducer: (state, action) => {
//       state.push({
//         id: Date.now(),
//         text: action.payload,
//         completed: false,
//       });
//     }
//   },
// });

// export const { rootReducer } = sideBarSlice.actions;
// export default sideBarSlice.reducer;


// sidebarSlice.js

import { createSlice } from '@reduxjs/toolkit';
import TASKS from '../json';



const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isSidebarOpen: false,
    showTooltip: false,
    taskList:TASKS
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
      state.showTooltip = true;
    },
    hideTooltip: (state) => {
      state.showTooltip = false;
    },

  },
});

export const { toggleSidebar, hideTooltip  } = sideBarSlice.actions;
export default sideBarSlice.reducer;

