import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import Dashboard from "./views/Dashboard";
import Landing from "./views/Landing";

export default function App() {
  const token = localStorage.getItem("token");
  const [isToken, setIsToken] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, []);

  return (
    <React.Fragment>
      <RecoilRoot>{isToken ? <Dashboard /> : <Landing />}</RecoilRoot>
    </React.Fragment>
  );
}
