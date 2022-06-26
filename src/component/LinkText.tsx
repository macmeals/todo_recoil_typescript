// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { memo } from "react"; //LinkTextコンポーネントのメモ化
import type { ReactNode } from "react";
import type { FC } from "react";

type Props = {
  destination: string;
  children: ReactNode;
};

export const LinkText: FC<Props> = memo((props) => {
  const { destination } = props;
  const linkstyle = css`
    font-size: 20px;
    height: 50px;
  `;

  return (
    //State(linkStateの名前でPropsで渡されたState)は登録したTodo
    <Link to={destination} css={linkstyle}>
      {props.children}
    </Link>
  );
});
LinkText.displayName = "LinkText"; //ESlintのメモ化のエラーを回避
