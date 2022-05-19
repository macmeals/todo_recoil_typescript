import { TodoList } from "../component/pages/TodoList";
import { Page404 } from "../component/pages/Page404";

export const TodoListRoutes = [
  { path: "", children: <TodoList /> },
  { path: "*", children: <Page404 /> },
];
