import React from "react";
import "./style-navigation.css"
import Logo from "./Logo";
import Menu from "./Menu";

const Navigation: React.FC = () => {
  return (
    <div className="navigation_component">
      <Logo></Logo>
      <Menu></Menu>
    </div>
  );
};

export default Navigation;
