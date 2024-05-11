import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TUser } from "@/types/user.type";

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setRegister: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
  },
});

export const { setUser, logout, setRegister } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
