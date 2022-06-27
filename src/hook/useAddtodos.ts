//グローバルStateを使う為のuseContextを読み込み
//TodoListContextを読み込み
// import { useContext } from "react";
// import { TodoContext } from "../component/provider/TodoProvider";

//Recoilを読み込み及び各種ATOMを読み込み
import { useRecoilState } from "recoil";
import { TodoLists } from "../atoms/TodoList";
import { NewTodo } from "../atoms/NewTodo";
import { StartDate } from "../atoms/StartDate";
import { EndDate } from "../atoms/EndDate";

//message用ライブラリ：react-hot-toastをインポート
import toast from "react-hot-toast";

//imcompletTodoの型を定義
type Todos = {
  id: number;
  todo: string;
  completeFlag: boolean;
  from: string | undefined;
  end: string | undefined;
};

export const useAddTodos = () => {
  // // グローバルStateの変数群を取り出す。
  // const {
  //   newTodo,
  //   setNewTodo,
  //   startDate,
  //   setStartDate,
  //   endDate,
  //   setEndDate,
  //   incompleteTodos,
  //   setIncompleteTodos,
  // } = useContext(TodoContext);

  // 未完了のTodo変数incompleteTodos、更新関数setIncompleteTodosをセット
  const [incompleteTodos, setIncompleteTodos] =
    useRecoilState<Todos[]>(TodoLists);

  // Todo内容の変数newTodo、更新関数setNewTodoをセット
  const [newTodo, setNewTodo] = useRecoilState<string>(NewTodo); // 開始日の変数startDate,更新関数setStartDateをセット

  // 開始日時の変数startDate、更新関数setStartDateをセット
  const [startDate, setStartDate] = useRecoilState<string | undefined>(
    StartDate
  );

  // 終了日時の変数endDate, 更新関数setEndDateをセット
  const [endDate, setEndDate] = useRecoilState<string | undefined>(EndDate);

  //Todoを追加する処理：関数todoFetchVoidFunction : React.MouseEventHandler<HTMLButtonElement>
  //フォームからでTodoデータをクリックして取得するので関数名をonAddTodoListsとする
  const onAddTodoLists: VoidFunction = () => {
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
    toast.success("Todoを登録しました."); //react-hot-toastのライブラリを導入
    setStartDate(undefined); // 開始日をリセット
    setEndDate(undefined); // 終了日をリセット
    console.log(incompleteTodos);
  };

  //todoタスクのテキストボックスで入力した値を保存する
  //onchangeのイベントハンドラーの型を保存
  //テキストボックスにTodoをOnするので、関数名onTodoValueにする
  const onTodoValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);

  // 開始日の状態を保存。onDayClickのイベントハンドラーはdayという引数で日程を取得可能
  // 取得した日程をstartDateの状態を保管。引数にDate型を適応する必要がある。
  // クリックしてStarddayを取得するので、onClickedStartDayとする
  const onClickedStartDay = (day: Date) => {
    const clickedStartday = day.toLocaleDateString();
    // setStartDate(day.toLocaleDateString());
    setStartDate(clickedStartday);
  };

  // 終了日の状態を保存 onDayClickのイベントハンドラーはdayという引数で日程を取得可能
  // 取得した日程をendDateの状態を保管。引数にDate型を適応する必要がある。
  // クリックしてEnddayを取得するので、onClickedEndDayとする
  const onClickedEndDay = (day: Date) => {
    const clickedEndday = day.toLocaleDateString();
    setEndDate(clickedEndday);
  };

  // 必要な処理、関数を返す
  return {
    onAddTodoLists,
    onTodoValue,
    onClickedStartDay,
    onClickedEndDay,
  };
};
