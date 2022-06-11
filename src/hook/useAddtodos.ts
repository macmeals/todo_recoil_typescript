//グローバルStateを使う為のuseContextを読み込み
//TodoListContextを読み込み
import { useContext } from "react";
import { TodoContext } from "../component/provider/TodoProvider";

//message用ライブラリ：react-hot-toastをインポート
import toast from "react-hot-toast";

export const useAddTodos = () => {
  // グローバルStateの変数群を取り出す。
  const {
    newTodo,
    setNewTodo,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    incompleteTodos,
    setIncompleteTodos,
  } = useContext(TodoContext);

  //Todoを追加する処理：関数todoFetchVoidFunction : React.MouseEventHandler<HTMLButtonElement>
  const todoFetch: VoidFunction = () => {
    if (newTodo === "") return;
    const newTodos = [
      ...incompleteTodos,
      {
        id: incompleteTodos.length,
        todo: newTodo,
        completeFlag: false,
        from: startDate,
        end: endDate,
      },
    ];
    // setIncompleteTodosにnewTodosの状態を登録
    setIncompleteTodos(newTodos);
    // setNewTodoに空の状態を登録
    setNewTodo("");
    toast.success("Todoを登録しました.");
    setStartDate(undefined); // 開始日をリセット
    setEndDate(undefined); // 終了日をリセット
    console.log(incompleteTodos);
  };

  //todoタスクのテキストボックスで入力した値を保存する
  //onchangeのイベントハンドラーの型を保存
  const valueFetch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);

  // 開始日の状態を保存。onDayClickのイベントハンドラーはdayという引数で日程を取得可能
  // 取得した日程をstartDateの状態を保管。引数にDate型を適応する必要がある。
  const startDayFetch = (day: Date) => {
    const clickedday = day.toLocaleDateString();
    // setStartDate(day.toLocaleDateString());
    setStartDate(clickedday);
  };

  // 終了日の状態を保存 onDayClickのイベントハンドラーはdayという引数で日程を取得可能
  // 取得した日程をendDateの状態を保管。引数にDate型を適応する必要がある。
  const endDayFetch = (day: Date) => {
    setEndDate(day.toLocaleDateString());
  };

  // 必要な処理、関数を返す
  return { todoFetch, valueFetch, startDayFetch, endDayFetch };
};
