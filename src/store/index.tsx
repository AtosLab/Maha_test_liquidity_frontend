import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import settingDetailReducer from "./store.slice.settingDetail";

const store = configureStore({
  reducer: {
    settingDetailInfor: settingDetailReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
