// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { css } from "@emotion/react";
import { LinkText } from "../LinkText";

//日付用ライブラリ：react-day-pickerをインポート
import { DayPicker } from "react-day-picker"; //react-day-picker v8.0.５

//TypeScriptでEmotionのCSSを記載。
const topStyles = css({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

export const TopPage: FC = () => {
  return (
    <div>
      <div css={topStyles}>
        <h1>Todoアプリ</h1>
        <LinkText destination={"/todoregister"}>Todo登録</LinkText>
        <DayPicker />
      </div>
    </div>
  );
};
