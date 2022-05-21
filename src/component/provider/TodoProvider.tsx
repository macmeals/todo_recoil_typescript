import { createContext } from "react";
import { useState } from "react";
import type { ReactNode } from "react";

//contextの器を作成
export const TodoContext = createContext({});

export const TodoProvider = (props: { children: ReactNode }) => {
  type Todos = {
    id: number;
    todo: string;
    completeFlag: boolean;
    from: string;
    end: string;
  };

  //  Todo内容を格納する変数newTodo、状態を格納する変数setNewTodoをセット
  //  型はジェネリクスで指定(string型)
  const [newTodo, setNewTodo] = useState<string>("");

  //  開始日時を格納する変数startDate、状態を格納するsetStartDateをセット
  //  型はジェネリクスで指定(string型かUndefined)
  const [startDate, setStartDate] = useState<string | undefined>(undefined);

  //  終了日時を格納する変数endDate、状態を格納する変数setEndDateをセット
  //  型はジェネリクスで指定(string型かUndefined)
  const [endDate, setEndDate] = useState<string | undefined>(undefined);

  // Todo内容、開始日時、終了日時を格納する変数incompleteTodos、状態を格納する変数setIncompleteTodosをセット
  // 型はジェネリクスで指定(配列,要素もTodoで指定)
  const [incompleteTodos, setIncompleteTodos] = useState<Todos[]>([]);

  const { children } = props;

  return (
    //valueに渡したい値を渡す。ここでは上記４つのstateを渡す。
    //createContextをProviderのコンポーネントで囲む
    <TodoContext.Provider
      value={{
        newTodo,
        setNewTodo,
        incompleteTodos,
        setIncompleteTodos,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
