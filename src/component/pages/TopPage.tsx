// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const TopPage = () => {
  // const topStyle = css`
  //   display: flex;
  //   justify-content: center;
  //   flex-direction: column;
  //   align-items: center;
  // `;

  //TypeScriptでEmotionのCSSを記載。
  const topStyles = css({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  });

  return (
    <div>
      {/* <div css={topStyle}> */}
      <div css={topStyles}>
        <h1>Todoアプリ</h1>
      </div>
    </div>
  );
};
