//タイマーアプリに必要なデータと処理

// createSlice：状態とそれを変更する処理（リデューサー）を簡単に作成するためのもの
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 型定義
interface TimerState {
  time: number; // タイマーの時間
  isActive: boolean; // タイマーが動いているかどうかのフラグ
}

// タイマーの初期値
const initialState: TimerState = {
  time: 0,
  isActive: false,
};

// タイマーに関する処理
// （createSliceを使うことで状態とリデューサーを一つのオブジェクトにまとめることができる、他の部分で状態や処理を簡単に使うことができる）
const timerSlice = createSlice({
  name: "timer", // 処理名
  initialState, // 状態の初期値
  reducers: {
    // 状態を変更する処理のリスト
    // タイマーを開始
    start: (state) => {
      state.isActive = true;
    },
    // タイマーを停止
    stop: (state) => {
      state.isActive = false;
    },
    // タイマーをリセット
    reset: (state) => {
      state.time = 0;
      state.isActive = false;
    },
    // タイマーの時間を増やす
    increment: (state) => {
      state.time += 1;
    },
  },
});

export const { start, stop, reset, increment } = timerSlice.actions;
export default timerSlice.reducer;
