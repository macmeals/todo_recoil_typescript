// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect } from "react";
import { Image } from "../Image";
import { Button } from "../Button";
import { LinkText } from "../LinkText";
import { FC } from "react";

//日付用ライブラリ：react-day-pickerをインポート
import { DayPicker } from "react-day-picker"; // v8.0.５

//message用ライブラリ：react-hot-toastをインポート
import { Toaster } from "react-hot-toast";

//カスタムHookを読み込み
import { useImageGet } from "../../hook/useImageGet"; //画像取得
import { useAddTodos } from "../../hook/useAddTodos"; //Todo登録処理

//Recoil及び各種ATOMを読み込み
import { useRecoilValue } from "recoil";
import { NewTodo } from "../../atoms/NewTodo";
import { StartDate } from "../../atoms/StartDate";
import { EndDate } from "../../atoms/EndDate";

//emotionのスタイルをつける
const registerStyles = css({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const matrixStyles = css({
  display: "flex",
  width: "50vw",
  justifyContent: "space-between",
});

const inputStyles = css({
  width: "600px",
});

export const TodoRegister: FC = () => {
  // カスタムHookから変数apiPokemonBack,,関数imageFetchを取得
  const { apiPokemonBack, imageFetch } = useImageGet();
  // カスタムHookから変数apiPokemonBack,,関数imageFetchを取得
  const { onAddTodoLists, onTodoValue, onClickedStartDay, onClickedEndDay } =
    useAddTodos();

  //RecoilのAtomのNewTodo,startDate,endDateから値を取得する。（Todo内容、開始日、終了日）
  const newTodo = useRecoilValue(NewTodo);
  const startDate = useRecoilValue(StartDate);
  const endDate = useRecoilValue(EndDate);

  // Todoページマウント時のみ関数imageFetch()を実施
  useEffect(() => {
    imageFetch();
  }, []);

  return (
    <div css={registerStyles}>
      <h2>Todo登録</h2>
      {/* ピカチュウの画像をImageコンポーネントで呼び出す */}
      <Image url={apiPokemonBack} />
      <div css={matrixStyles}>
        <div css={registerStyles}>
          <p>１．Todo開始日</p>
          {/* カスタムHookから取得した関数onClickedStartDayを利用 */}
          <DayPicker onDayClick={onClickedStartDay} />
          {startDate ? (
            <p> 【Todo開始日】{startDate}</p>
          ) : (
            <p>開始日を選択して下さい</p>
          )}
        </div>
        <div css={registerStyles}>
          <p>２．Todo完了日</p>
          {/* カスタムHookから取得した関数endDayFetchを利用 */}
          <DayPicker onDayClick={onClickedEndDay} />
          {endDate ? (
            <p>【Todo終了日】{endDate}</p>
          ) : (
            <p>終了日を選択して下さい</p>
          )}
        </div>
      </div>
      <p>３．Todoタスク</p>
      <input
        css={inputStyles}
        type="text"
        value={newTodo}
        // カスタムHookから取得した関数valueFetchを利用
        onChange={onTodoValue}
      />
      {/* Buttonコンポーネントにア ロー関数でカスタムHookから取得した関数todoFetchを渡す。 */}
      <Button onClickEvent={() => onAddTodoLists()}>登録</Button>
      <Toaster />
      <LinkText destination={"/todolist"}>Todo一覧へ</LinkText>
    </div>
  );
};
