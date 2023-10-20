import React from 'react'
import './style-panel.css'
import {BsXLg} from "react-icons/bs"; 

const NavigationSide = () => {
  return (
    <div className="panel_navigation">
      <div className="panel_navigation__component_exit">
        <BsXLg size={30}/>
      </div>
      <a href="#">Rozpocznij</a>
      <a href="#">Zapisz jako obraz</a>
      <a href="#">Zapisz jako plik</a>
      <a href="#">Cofnij</a>
    </div>
  )
}

export default NavigationSide