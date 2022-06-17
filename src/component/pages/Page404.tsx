// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LinkText } from "../LinkText";

export const Page404 = () => {
  const page404styles = css({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  });

  return (
    <div css={page404styles}>
      <h2>Error:404</h2>
      <p>エラーページです。</p>
      <p>URLを確認下さい</p>
      <LinkText destination={"/todoregister"}>Todo登録</LinkText>
    </div>
  );
};
