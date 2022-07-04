import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./container/signUp/SignUp";
import LogIn from "./container/logIn/LogIn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SignUp />
  //   <BrowserRouter>
  //   <Routes>

  //   </Routes>
  //     <App />
  //   </BrowserRouter>
);
