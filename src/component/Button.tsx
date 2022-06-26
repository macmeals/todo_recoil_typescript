// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { memo } from "react";
import type { ReactNode } from "react";
import type { FC } from "react";

type Props = {
  onClickEvent: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

//Buttonコンポーネントに型をつける。
export const Button: FC<Props> = memo((props) => {
  const { onClickEvent } = props;
  const StyledButton = styled.button`
    color: black;
    background-color: white;
    display: inline-block;
    padding: 0.5em 1.7em;
    margin: 30px 15px 30px 15px;
    border: 1px solid black;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
    text-align: center;
    transition: all 0.2s;

    &:hover {
      color: white;
      background-color: black;
    }
  `;
  console.log("Buttonのレンダリング");

  return (
    <div>
      <StyledButton
        //eventのeを引数にする。
        onClick={(e) => {
          onClickEvent(e);
        }}
      >
        {props.children}
      </StyledButton>
    </div>
  );
});
Button.displayName = "Button"; //ESlintのメモ化のエラーを回避
