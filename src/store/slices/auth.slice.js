import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login:(state,action)=>{
      state = action.payload
    },
    logout:(state,action)=>{
      state = null
    }
  },
});

export default authSlice.reducer;

export const {login, logout} = authSlice.actions;
