// ポケモンAPIから画像情報を取得する部分をカスタムHook化
import axios from "axios";

// 無駄なレンダリングを防ぎ、State状態を管理する。
import { useState } from "react";
import { useCallback } from "react";

const url = "https://jsonplaceholder.typicode.com/todos";

export const useTextGet = () => {
  // useJsonのAPIから取得できる値の型をつける
  type JsonPlace = {
    userId: number;
    id: number;
    title: string;
    completed: Boolean;
  };

  // useJsonのState初期値はnullとする。
  const [textTitle, setTextTitle] = useState<string>("");
  const jsonFetch = useCallback(async () => {
    try {
      // JSONPlaceHolderのAPIからユーザーの情報をaxiosで取得
      // 型はJsonPlacess（オブジェクトの配列）
      const response = await axios.get<JsonPlace[]>(url);
      const title = response.data[1].title;
      setTextTitle(title);
    } catch {
      console.log("画像が取得できませんでした");
    }
  }, []);

  return { textTitle, jsonFetch }; // JSONPlaceHolderの情報を返す
};
