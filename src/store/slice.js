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
//       console.log('Added todo:', state[state.length - 1]);
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
    // setTasks: (state, action) => {
    //   console.log("logtest", action.payload);
    //   state.tasks = action.payload;
    // },
   
  },
});

export const { toggleSidebar, hideTooltip  } = sideBarSlice.actions;
export default sideBarSlice.reducer;

