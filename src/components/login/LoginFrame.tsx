import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style-login.css";

const LoginFrame: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isSaved, setIsSaved] = useState<Boolean>(false);
    const [username, setUsername] = useState<string>("");
    const navigate = useNavigate();

    //TODO: Navigate to /home after successfull login

    const saveDataHandler = () => {
        sessionStorage.setItem("name", username);
        setIsSaved(true);
        setTimeout(() => {
            setIsSaved(false);
        }, 2000);
        getDataHandler();
        navigate('/home')
    };

    //TODO: For debug purpose only!
    const getDataHandler = () => {
        alert(sessionStorage.getItem("name"));
    };

    //TODO: Needs to authenticate user with API
    return (
        <div className="login__component-frame">
            <p
                className="login__component-subcomponent"
                id="login__component-text"
            >
                Zaloguj się na konto
            </p>
            <input
                className="login__component-subcomponent"
                id="login__component-user"
                placeholder="Twój login"
                type="text"
                value={username}
                onChange={({ target }) => {
                    setUsername(target.value);
                }}
            />
            <input
                className="login__component-subcomponent"
                id="login__component-password"
                placeholder="Twoje hasło"
                type="password"
            />
            <button
                className="login__component-subcomponent"
                id="login_component-login"
                onClick={saveDataHandler}
            >
                ZALOGUJ SIĘ
            </button>
        </div>
    );
};

export default LoginFrame;
