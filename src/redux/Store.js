import { configureStore } from "@reduxjs/toolkit";
import countLovesReducer from "./CountLoves";
import searchReducer from "./Search";
import authReducer from "./auth";
import CarsReducer from "./CarSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "userName",
  storage,
};

const rootReducer = combineReducers({
  countLoves: countLovesReducer,
  search: searchReducer,
  auth: authReducer,
  cars: CarsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
