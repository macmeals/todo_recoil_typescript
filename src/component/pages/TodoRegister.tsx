// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect } from "react";
import { Image } from "../Image";
import { Button } from "../Button";
import { LinkText } from "../LinkText";

//日付用ライブラリ：react-day-pickerをインポート
import { DayPicker } from "react-day-picker"; // v8.0.５
import "react-day-picker/dist/style.css"; // v8.0.5

//message用ライブラリ：react-hot-toastをインポート
import { Toaster } from "react-hot-toast";

//カスタムHookを読み込み
import { useImageGet } from "../../hook/useImageGet"; //画像取得
import { useAddTodos } from "../../hook/useAddtodos"; //Todo登録処理

//グローバルStateを使う為のuseContextを読み込み
//TodoListContextを読み込み
import { useContext } from "react";
import { TodoContext } from "../provider/TodoProvider";

export const TodoRegister = () => {
  // カスタムHookから変数apiPokemonBack,,関数imageFetchを取得
  const { apiPokemonBack, imageFetch } = useImageGet();
  // カスタムHookから変数apiPokemonBack,,関数imageFetchを取得
  const { todoFetch, valueFetch, startDayFetch, endDayFetch } = useAddTodos();

  // グローバルStateの変数群を取り出す。
  const { newTodo, startDate, endDate } = useContext(TodoContext);

  // Todoページマウント時のみ関数imageFetch()を実施
  useEffect(() => {
    imageFetch();
  }, []);

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

  return (
    <div css={registerStyles}>
      <h2>Todo登録</h2>
      {/* ピカチュウの画像をImageコンポーネントで呼び出す */}
      <Image url={apiPokemonBack} />
      <div css={matrixStyles}>
        <div css={registerStyles}>
          <p>１．Todo開始日</p>
          {/* カスタムHookから取得した関数startDayFetchを利用 */}
          <DayPicker onDayClick={startDayFetch} />
          {startDate ? (
            <p> 【Todo開始日】{startDate}</p>
          ) : (
            <p>開始日を選択して下さい</p>
          )}
        </div>
        <div css={registerStyles}>
          <p>２．Todo完了日</p>
          {/* カスタムHookから取得した関数endDayFetchを利用 */}
          <DayPicker onDayClick={endDayFetch} />
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
        onChange={valueFetch}
      />
      {/* Buttonコンポーネントにアロー関数でカスタムHookから取得した関数todoFetchを渡す。 */}
      <Button onClickEvent={() => todoFetch()}>登録</Button>
      <Toaster />
      <LinkText destination={"/todolist"}>Todo一覧へ</LinkText>
    </div>
  );
};
