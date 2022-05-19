// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TodoList = () => {
  const todoStyles = css({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  });

  const todoTitleStyles = css({
    width: "80vw",
    backgroundColor: "#eee6e6",
  });

  const todoListStyles = css({
    width: "80vw",
    paddingInlineStart: "0",
  });

  // StyledListからpropsを受け取り、todoFlagがtrueの場合、text-decoration:line-throughとなる
  // const StyledList = styled.li`
  //   display: flex;
  //   padding-left: 20px;
  //   align-items: center;
  //   > p {
  //     width: 20vw;
  //     text-decoration: ${(props) => (props.todoflag ? "line-through" : "")};
  //     margin-block-start: 0;
  //     margin-block-end: 0;
  //   }
  //   &:nth-of-type(2n) {
  //     background-color: #ffeded;
  //   }
  // `;

  const StyledLists = styled("li")`
    display: flex;
    padding-left: 20px;
    align-items: center;
    > p {
      width: 20vw;
      text-decoration: "line-through";
      margin-block-start: 0;
      margin-block-end: 0;
    }

    &:nth-of-type(2n) {
      background-color: #ffeded;
    }
  `;

  const TodoTitles = styled("div")`
    display: flex;
    margin-left: 20px;
    > p {
      width: 20vw;
    }
  `;

  // const { incompleteTodos } = useContext(TodoListContext)

  // カスタムHookから変数useImage,関数imageFetchを取得
  // const { textTitle, jsonFetch } = useTextGet()
  // カスタムHookから関数deleteTodoを取得
  // const { deleteTodo } = useDeleteTodo()
  // カスタムHookから関数completeTodoを取得
  // const { completeTodo } = useCompleteTodo()

  // TodoList.jsx時のみ関数jsonFetch()を実施
  // useEffect(() => {
  //   jsonFetch()
  // }, [])

  return (
    // <div css={todoStyle}>
    <div css={todoStyles}>
      <h2>Todo一覧</h2>
      {/* カスタムHookで読み込んだJSONPlaceHolderのデータを格納した変数apiJson*/}
      {/* <p>{textTitle}</p> */}
      {/* <div css={todoTitleStyle}> */}
      <div css={todoTitleStyles}>
        <TodoTitles>
          <p>Todo開始日</p>
          <p>Todo終了日</p>
          <p>Todoタスク</p>
        </TodoTitles>
      </div>
      {/* <ul css={todoListStyle}> */}
      <ul css={todoListStyles}>
        <StyledLists>
          <p>test</p>
        </StyledLists>
        {/* {incompleteTodos.map((todos, index) => {
          return (
            <StyledList key={todos.id} todoflag={todos.completeFlag}>
              <p>{todos.from}</p>
              <p>{todos.end}</p>
              <p>{todos.todo}</p> */}
        {/* Buttonコンポーネントにアロー関数でカスタムHookで読み込んだ関数deleteTodoを渡す。indexは引数 */}
        {/* <Button onClickEvent={() => deleteTodo(index)}>削除</Button> */}
        {/* Buttonコンポーネントにアロー関数でカスタムHookで読み込んだ関数completeTodoを渡す。indexは引数 */}
        {/* <Button onClickEvent={() => completeTodo(index)}>完了</Button> */}
        {/* </StyledList> */}
        {/* ); */}
        {/* })} */}
      </ul>
      {/* <LinkText destination={"/todoregister"}>Todo登録</LinkText> */}
    </div>
  );
};
