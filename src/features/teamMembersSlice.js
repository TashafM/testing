import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };
export const teamMembersSlice = createSlice({
  name: "teamMembers",
  initialState: [],
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
    selectedIds : (state,action) => {
      return action.payload
    }
  },
});


export const {selectedIds} = teamMembersSlice.actions;
export default teamMembersSlice.reducer;