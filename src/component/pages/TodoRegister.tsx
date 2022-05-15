// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const TodoRegister = () => {
  // const registerStyle = css`
  //   display: flex;
  //   justify-content: center;
  //   flex-direction: column;
  //   align-items: center;
  // `;

  const registerStyles = css({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  });

  // const matrixStyle = css`
  //   display: flex;
  //   width: 50vw;
  //   justify-content: space-between;
  // `;

  const matrixStyles = css({
    display: "flex",
    width: "50vw",
    justifyContent: "space-between",
  });

  // const inputStyle = css`
  //   width: 600px;
  // `;

  const inputStyles = css({
    width: "600", // 600px
  });

  return (
    // <div css={registerStyle}>
    <div css={registerStyles}>
      <h2>Todo登録</h2>
      {/* ピカチュウの画像をImageコンポーネントで呼び出す */}
      {/* <Image url={apiPokemonBack} /> */}
      {/* <div css={matrixStyle}> */}
      <div css={matrixStyles}>
        {/* <div css={registerStyle}> */}
        <div css={registerStyles}>
          <p>１．Todo開始日</p>
          {/* カスタムHookから取得した関数startDayFetchを利用 */}
          {/* <DayPicker onDayClick={startDayFetch} />
          {startDate ? (
            <p> 【Todo開始日】{startDate}</p>
          ) : (
            <p>開始日を選択して下さい</p>
          )} */}
        </div>
        {/* <div css={registerStyle}> */}
        <div css={registerStyles}>
          <p>２．Todo完了日</p>
          {/* カスタムHookから取得した関数endDayFetchを利用 */}
          {/* <DayPicker onDayClick={endDayFetch} /> */}
          {/* {endDate ? (
            <p>【Todo終了日】{endDate}</p>
          ) : (
            <p>終了日を選択して下さい</p>
          )} */}
        </div>
      </div>
      <p>３．Todoタスク</p>
      <input css={inputStyles} />
      {/* <input
        css={inputStyle}
        type="text"
        value={newTodo}
        カスタムHookから取得した関数valueFetchを利用
        onChange={valueFetch}
      />
      Buttonコンポーネントにアロー関数でカスタムHookから取得した関数todoFetchを渡す。
      <Button onClickEvent={() => todoFetch()}>登録</Button>
      <Toaster />
      <LinkText destination={"/todolist"}>Todo一覧へ</LinkText> */}
    </div>
  );
};
