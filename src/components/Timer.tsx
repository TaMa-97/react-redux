/**
 * @component
 * Timer：storeからタイマーの状態とアクション（start, stop, reset, increment）を取得して実行するコンポーネント
 * useDispatchとuseSelector使ってstoreとやり取りする
 */

import React, { useEffect } from "react";
// useDispatch：Redux のディスパッチ（送信）関数を取得するためのフック（ディスパッチ関数は、Redux アクションをストアに送信するため）
// useSelector：Redux ストアの状態を取得するためのフック（ストアの状態を引数として受け取って必要な状態の部分を返す）
import { useSelector, useDispatch } from "react-redux";
import { start, stop, reset, increment } from "../timerSlice";
import { AppSelector } from "../types";

const Timer: React.FC = () => {
  // Redux ストアにアクションを送信するための関数
  const dispatch = useDispatch();
  // タイマーの時間を取得
  const time = useSelector((state: AppSelector) => state.timer.time);
  // タイマーがアクティブかどうかを取得
  const isActive = useSelector((state: AppSelector) => state.timer.isActive);

  // タイマーの動作を実装する（useEffectで関数の実行タイミングをレンダリング後まで遅らせる）
  // isActive と dispatch が変更されたときに、useEffect 内のコードを実行する
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    // タイマーがアクティブな場合
    if (isActive) {
      // 1秒ごとにタイマーの時間を増やす
      interval = setInterval(() => {
        dispatch(increment());
      }, 1000);
    } else {
      // タイマーが非アクティブな場合、interval をクリアする
      if (interval) clearInterval(interval);
    }

    // コンポーネントが画面から消えた時に interval をクリアする
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, dispatch]);

  // タイマー表示とボタンを返す
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={() => dispatch(start())}>Start</button>
      <button onClick={() => dispatch(stop())}>Stop</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Timer;
