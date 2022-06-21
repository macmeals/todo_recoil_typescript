//グローバルStateを使う為のuseContextを読み込み
//TodoListContextを読み込み
import { useContext } from "react";
import { TodoContext } from "../component/provider/TodoProvider";
import { useCallback } from "react";

// type Index = {
//   index: number;
// };

export const useDeleteTodo = () => {
  // グローバルStateの変数を引き出す
  const { incompleteTodos, setIncompleteTodos } = useContext(TodoContext);

  //Todoを削除する処理：関数deleteTodo
  const deleteTodo = useCallback(
    (index: number) => {
      const deleteTodos = [...incompleteTodos]; // 削除する対象のデータ配列を関数deleteTodoに格納
      deleteTodos.splice(index, 1); // index番号から１番目の要素を削除
      setIncompleteTodos(deleteTodos); // グローバルStateにdeleteTodosを格納）
    },
    [incompleteTodos] // 第二引数にグローバルStateにdeleteTodosを格納
  );

  // 必要な処理、関数を返す
  return { deleteTodo };
};
