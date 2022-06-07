import { createContext } from "react";
import { useState } from "react";
import type { ReactNode } from "react";

//imcompletTodoの型を定義
type Todos = {
  id: number;
  todo: string;
  completeFlag: boolean;
  from: string | undefined;
  end: string | undefined;
};

//contextの器を作成.合わせてCreateContextの型も作成する。
//アサーションで型も付与する。
export const TodoContext = createContext(
  {} as {
    newTodo: string;
    setNewTodo: React.Dispatch<React.SetStateAction<string>>;
    incompleteTodos: Todos[];
    setIncompleteTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
    startDate: string | undefined;
    setStartDate: React.Dispatch<React.SetStateAction<string | undefined>>;
    endDate: string | undefined;
    setEndDate: React.Dispatch<React.SetStateAction<string | undefined>>;
  }
);

export const TodoProvider = (props: { children: ReactNode }) => {
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

  //TodoContext.Providerで挟むProps
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
