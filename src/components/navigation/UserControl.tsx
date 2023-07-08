import React, { useEffect, useState } from "react";
import "./style-navigation.css";
import { AiOutlineUser } from "react-icons/ai";

const UserControl: React.FC = () => {
    const [userName, getUsername] = useState<string>("");

    useEffect(() => {
        getSessionNameHandler();
    });

    const getSessionNameHandler = () => {
        const name: string | null = sessionStorage.getItem("name");
        getUsername(name === "" || name === null ? "Unknown" : name);
    };

    return (
        <div className="navigation_user_control__component">
            <p id="navigation_user_control__component-text">{userName}</p>
            <AiOutlineUser
                size={40}
                id="navigation_user_control__component-icon"
            />
        </div>
    );
};

export default UserControl;
