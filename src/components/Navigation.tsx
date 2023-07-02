import React from "react";
import "./style-navigation.css"
import Logo from "./Logo";
import Sites from "./Sites";

const Navigation: React.FC = () => {
  return (
    <div className="navigation_component">
      <Logo></Logo>
      <Sites></Sites>
    </div>
  );
};

export default Navigation;
