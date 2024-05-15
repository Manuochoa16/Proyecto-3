import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  appointments: [],
};

export const todoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addAppointment: (state, action) => {
      console.log(action.payload);
      state.appointments = action.payload;
      console.log(state.appointments.id);
    },
  },
});

export const { setUser, addAppointment } = todoSlice.actions;
