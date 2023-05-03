import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timerSlice";

// アプリで使うデータ（状態）を保管する場所（ストア）
const store = configureStore({
  // タイマーに関する処理を登録
  reducer: {
    timer: timerReducer,
  },
});

export default store;
