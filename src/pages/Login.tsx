import React from "react";
import "./style-pages.css";
import LoginFrame from "../components/login/LoginFrame";

const Login: React.FC = () => {
  return (
    <div className="login__page">
      <form id="login__form">
        <LoginFrame />
      </form>
    </div>
  );
};

export default Login;
