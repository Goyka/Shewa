import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./App.css";

export default function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      toast.info("Welcome back!");
      navigate("/dashboard");
    } else {
      navigate("/landing");
    }
  }, []);

  return <></>;
}
