import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };
export const teamMembersSlice = createSlice({
  name: "teamMembers",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByValue: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});


export const { increment, decrement, incrementByValue } = teamMembersSlice.actions;
export default teamMembersSlice.reducer;