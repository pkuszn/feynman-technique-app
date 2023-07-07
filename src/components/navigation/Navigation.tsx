import React from "react";
import "./style-navigation.css"
import Logo from "./Logo";
import Menu from "./Menu";
import UserControl from "./UserControl";

const Navigation: React.FC = () => {
  return (
    <div className="navigation_component">
      <Logo></Logo>
      <Menu></Menu>
      <UserControl/>
    </div>
  );
};

export default Navigation;
