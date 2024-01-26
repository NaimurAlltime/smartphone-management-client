import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TSmartPhone } from "../../../types/smartphone";

type TinitialState = {
  smartphones: TSmartPhone[];
};

const initialState: TinitialState = {
  smartphones: [],
};

const smartphoneSlice = createSlice({
  name: "smartphones",
  initialState,
  reducers: {
    addSmartphone: (state, action: PayloadAction<TSmartPhone>) => {
      state.smartphones.push({ ...action.payload });
    },
    // removeSmartphone: (state, action: PayloadAction<string>) => {
    //   state.todos = state.smartphones.filter((todo) => todo.id != action.payload);
    // },
  },
});

export const { addSmartphone } = smartphoneSlice.actions;

export default smartphoneSlice.reducer;
