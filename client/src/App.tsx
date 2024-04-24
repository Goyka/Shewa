import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { RecoilRoot } from "recoil";
import "./App.css";
// import Dashboard from "./views/Dashboard";
// import Landing from "./views/Landing";

export default function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/landing");
    }
  }, []);

  return (
    <RecoilRoot>
      <React.Fragment></React.Fragment>
    </RecoilRoot>
  );
}
