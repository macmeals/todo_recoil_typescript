// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

//日付用ライブラリ：react-day-pickerをインポート
import { DayPicker } from "react-day-picker"; //react-day-picker v8.0.５
import "react-day-picker/dist/style.css"; //react-day-picker v8.0.5

export const TopPage: FC = () => {
  //TypeScriptでEmotionのCSSを記載。
  const topStyles = css({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  });

  return (
    <div>
      <div css={topStyles}>
        <h1>Todoアプリ</h1>
        <Link to="/todoregister">Todo登録</Link>
        <DayPicker />
      </div>
    </div>
  );
};
