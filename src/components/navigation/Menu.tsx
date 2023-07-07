import React, { useEffect, useState } from 'react'
import "./style-navigation.css"

const Menu: React.FC = () => {
  const [isUserLogged, setButtonName] = useState<Boolean>(false);
  const [isCleared, setIsCleared] = useState<Boolean>(false);

  const isSessionEstablishedHandler = () => {
    const name: string | null = sessionStorage.getItem("name");
    if (name === "" || name === null) {
      setButtonName(false);
    }
    else {
      setButtonName(true);
    }
  }

  const clearSessionNameHandler = () => {
    sessionStorage.removeItem("name");

    setIsCleared(true);
    setTimeout(() => {
      setIsCleared(false);
    }, 2000);
  }
  
  useEffect(() => {
    isSessionEstablishedHandler();
  });

  return (
    <div className='navigation__menu'>
          <a className="navigation__menu-element" href="/home">STRONA GŁÓWNA</a>
          <a className="navigation__menu-element" href="/learn">ROZPOCZNIJ SESJĘ</a>
          <a className="navigation__menu-element" href="/corpus">KORPUS JĘZYKOWY APLIKACJI</a>
          <a className="navigation__menu-element" href="/help">POMOC</a>
          <a className="navigation__menu-element" href="/about">O AUTORZE</a>
          {
            isUserLogged === false 
              //TODO: Navigate to /home after successfull logout
              ? <a className="navigation__menu-element" href="/login">ZALOGUJ SIĘ</a> 
              : <a className="navigation__menu-element" role='button' href='#' onClick={clearSessionNameHandler}>WYLOGUJ SIĘ</a>
          }
    </div>
  )
}

export default Menu