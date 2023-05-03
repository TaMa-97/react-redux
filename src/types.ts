//アプリケーション全体で使用する型を定義
import { RootState } from "./store";

export type AppDispatch = typeof store.dispatch;
export type AppSelector = RootState;
