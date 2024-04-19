import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./App.css";

export default function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      toast.success("로그인 정보가 있습니다. 대쉬보드로 이동합니다.");
      navigate("/dashboard");
    } else {
      navigate("/landing");
    }
  }, []);

  return <></>;
}
