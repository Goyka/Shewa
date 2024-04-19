import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Default from "./design/layouts/Default";
import App from "./App";
import Auth from "./views/Auth";
import Landing from "./views/Landing";
import Privacy from "./views/Privacy";
import ErrorPage from "./views/ErrorPage";
import Dashboard from "./views/Dashboard";
import Register from "./views/Register";

function Main() {
  return (
    <BrowserRouter>
      <Default>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/user/login" element={<Auth />} />
          <Route path="/user/join" element={<Register />} />
          <Route path="/docs/user_privacy" element={<Privacy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={true} // 마우스 호버 시 토스트의 타이머를 일시 중지
        />
      </Default>
    </BrowserRouter>
  );
}

// 기존 ReactDOM.render() 호출을 새로운 createRoot() API 사용으로 변경
const container = document.getElementById("root");
if (container !== null) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
} else {
  console.error("The root container element not found!");
}
