// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

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
      </div>
      <Link to="/todoregister">Todo登録</Link>
    </div>
  );
};
