//グローバルStateを使う為のuseContextを読み込み
//TodoListContextを読み込み
import { useContext } from "react";
import { TodoContext } from "../component/provider/TodoProvider";

export const useAddTodos = () => {
  // グローバルStateの変数群を取り出す。
  const { setStartDate, setEndDate, setNewTodo } = useContext(TodoContext);

  //todoタスクのテキストボックスで入力した値を保存する
  const valueFetch = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value);

  // 開始日の状態を保存。onDayClickのイベントハンドラーはdayという引数で日程を取得可能
  // 取得した日程をstartDateの状態を保管。引数にDate型を適応する必要がある。
  const startDayFetch = (day: Date) => {
    setStartDate(day.toLocaleDateString());
  };

  // 終了日の状態を保存 onDayClickのイベントハンドラーはdayという引数で日程を取得可能
  // 取得した日程をendDateの状態を保管。引数にDate型を適応する必要がある。
  const endDayFetch = (day: Date) => {
    setEndDate(day.toLocaleDateString());
  };

  // 必要な処理、関数を返す
  return { valueFetch, startDayFetch, endDayFetch };
};
