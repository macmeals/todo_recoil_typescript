//グローバルStateを使う為のuseContextを読み込み
//TodoListContextを読み込み
// import { useContext } from "react";
import { useRecoilState } from "recoil";
import { TodoLists } from "../atoms/TodoList";
// import { TodoContext } from "../component/provider/TodoProvider";
import { useCallback } from "react";

export const useCompleteTodo = () => {
  // グローバルStateの変数を引き出す
  // const { incompleteTodos, setIncompleteTodos } = useContext(TodoContext);
  const [incompleteTodos, setIncompleteTodos] = useRecoilState(TodoLists);

  const completeTodo = useCallback(
    (id: number) => {
      {
        // スプレット構文を使い、incompleteAtomを更新
        const completeTodos = incompleteTodos.map((item) => {
          // 対象の要素でない場合、そのまま要素を返却（対象かどうかはidで管理）
          if (item.id !== id) return { ...item };
          // 対象の要素の場合、completeFlag: trueを更新して返す（対象かどうかはidで管理）
          return { ...item, completeFlag: true };
        });
        setIncompleteTodos(completeTodos);
      }
    },
    [incompleteTodos]
  );
  // 必要な処理、関数を返す
  return { completeTodo };
};
