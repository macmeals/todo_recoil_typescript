// import React from "react";
import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

// グローバルStateをRecoilとして利用するため、それをインポート
import { RecoilRoot } from "recoil";

root.render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);

reportWebVitals();
