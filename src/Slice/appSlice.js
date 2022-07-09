import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};

export const appSlice = createSlice({
  name: "Global",
  initialState,
  reducers: {
    incrementCount(state,action) {
      state.count += action.payload;
    },
    decrementCount(state,action) {
      if(state.count>0){
      state.count -= action.payload;
      }
    },
    resetCount(state,action) {
      state.count = action.payload;
    },
  },
});

export const { incrementCount, decrementCount, resetCount } = appSlice.actions;

export default appSlice.reducer;
