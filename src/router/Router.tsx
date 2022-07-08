import { Route, Routes } from "react-router-dom";
import { TodoListRoutes } from "./TodoListRoutes";
import { TodoRegisterRoutes } from "./TodoRegisterRoutes";
import { TopPage } from "../component/pages/TopPage";
import { Page404 } from "../component/pages/Page404";
import type { ReactNode } from "react";

export const Router = () => {
  // インポートしたオブジェクトの型

  type MapTypes = {
    path: string;
    children: ReactNode; //childrenはコンポーネントを指すのでReactNode型を指定
  };

  return (
    <Routes>
      {/* react router v6 doesn't support exact anymore. exactは使わない*/}
      <Route path="" element={<TopPage />} />
      <Route path="todoregister">
        {/* Map関数の展開した値：route1に型：mapTypesをつける */}
        {TodoRegisterRoutes.map((route1: MapTypes) => (
          <Route
            key={route1.path}
            path={`${route1.path}`}
            element={route1.children}
          />
        ))}
      </Route>
      <Route path="todolist">
        {/* Map関数の展開した値：route２に型：mapTypesをつける */}
        {TodoListRoutes.map((route2: MapTypes) => (
          <Route
            key={route2.path}
            path={`${route2.path}`}
            element={route2.children}
          />
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
