import { createSlice } from "@reduxjs/toolkit";
import { TSmartPhone } from "../../../types/smartphone";

type TSmartphoneState = {
  smartphones: TSmartPhone[];
};

const initialState: TSmartphoneState = {
  smartphones: [],
};

const smartphoneSlice = createSlice({
  name: "smartphones",
  initialState,
  reducers: {
    setSmartphones: (state, action) => {
      const { smartphones } = action.payload;
      state.smartphones = smartphones;
    },
    addSmartphone: (state, action) => {
      state.smartphones.push(action.payload);
    },
    updateSmartphone: (state, action) => {
      const { id, updatedSmartphone } = action.payload;
      const index = state.smartphones.findIndex((s) => s._id === id);
      if (index !== -1) {
        state.smartphones[index] = {
          ...state.smartphones[index],
          ...updatedSmartphone,
        };
      }
    },
    deleteSmartphone: (state, action) => {
      const id = action.payload;
      state.smartphones = state.smartphones.filter((s) => s._id !== id);
    },
  },
});

export const {
  setSmartphones,
  addSmartphone,
  updateSmartphone,
  deleteSmartphone,
} = smartphoneSlice.actions;

export default smartphoneSlice.reducer;
