// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

// import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import { css, keyframes } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

//DayPicker用のCSSの読み込み
import "react-day-picker/dist/style.css"; //react-day-picker v8.0.5

export const App = () => {
  const headerStyles = css({
    textAlign: "center",
  });

  const appHeaderStyles = css({
    backgroundColor: "#282c34",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "40vmin",
  });

  const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

  const appLogoStyles = css({
    height: "20vmin",
    // Keyflameは``で記述する事。また変数で指定する前に記載する事（この場合${logoSpin}で使う前
    animation: `${logoSpin} infinite 20s linear`,
  });

  return (
    <div>
      <div css={headerStyles}>
        <header css={appHeaderStyles}>
          <img src={logo} css={appLogoStyles} alt="logo" />
        </header>
      </div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

// function App() {
//   return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }

export default App;
