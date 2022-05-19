// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Page404 = () => {
  // const Page404Style = css`
  //   display: flex;
  //   justify-content: center;
  //   flex-direction: column;
  //   align-items: center;
  // `;

  const page404styles = css({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  });

  return (
    // <div css={Page404Style}>
    <div css={page404styles}>
      <h2>Error:404</h2>
      <p>エラーページです。</p>
      <p>URLを確認下さい</p>
      {/* <Link to="/todoregister">Todo登録</Link> */}
    </div>
  );
};
