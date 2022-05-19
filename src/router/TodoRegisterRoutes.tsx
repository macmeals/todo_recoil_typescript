import { TodoRegister } from "../component/pages/TodoRegister";
import { Page404 } from "../component/pages/Page404";

export const TodoRegisterRoutes = [
  { path: "", children: <TodoRegister /> },
  { path: "*", children: <Page404 /> },
];
