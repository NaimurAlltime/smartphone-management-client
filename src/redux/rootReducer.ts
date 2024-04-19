import { baseApi } from "./api/baseApi";
// import smartphoneReducer from "./features/smartphone/smartphoneSlice";
import authReducer from "./features/auth/authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filterReducer from "./features/filter/filterSlice";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: persistedAuthReducer,
  // smartphone: smartphoneReducer,
  filter: filterReducer,
};
