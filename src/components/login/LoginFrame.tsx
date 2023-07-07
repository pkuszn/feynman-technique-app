import React, { useState } from "react";
import "./style-login.css";

const LoginFrame: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSaved, setIsSaved] = useState<Boolean>(false);
  const [username, setUsername] = useState<string>("");
  
  //TODO: Navigate to /home after successfull login

  const saveDataHandler = () => {
    sessionStorage.setItem("name", username);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
    getDataHandler();
  };

  //TODO: For debug purpose only!
  const getDataHandler = () => {
    alert(sessionStorage.getItem("name"));
  }

  //TODO: Needs to authenticate user with API
  return (
    <div className="login__component-frame">
      <p className="login__component-subcomponent" id="login__component-text">
        Sign in to your account
      </p>
      <input
        className="login__component-subcomponent"
        id="login__component-user"
        placeholder="Your login"
        type="text"
        value={username}
        onChange={({ target }) => {
          setUsername(target.value);
        }}
      />
      <input
        className="login__component-subcomponent"
        id="login__component-password"
        placeholder="Your password"
        type="password"
      />
      <button
        className="login__component-subcomponent"
        id="login_component-login"
        onClick={saveDataHandler}
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginFrame;
