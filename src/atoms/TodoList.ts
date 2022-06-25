// 変数incompleteAtomと更新関数 setIncompleteAtom

import { atom } from "recoil";

//imcompletTodoの型を定義
type Todos = {
  id: number;
  todo: string;
  completeFlag: boolean;
  from: string | undefined;
  end: string | undefined;
};

// TodoListの情報をAtomで状態管理を行う。
export const TodoListAtom = atom<Todos[]>({
  key: "incompleteTodo",
  default: [],
});
