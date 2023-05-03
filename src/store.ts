import { configureStore } from "@reduxjs/toolkit";

// アプリで使うデータ（状態）を保管する場所（ストア）
const store = configureStore({
  reducer: {},
});

export default store;
