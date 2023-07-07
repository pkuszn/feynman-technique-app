import React from 'react'
import "./style-navigation.css"

const Menu = () => {
  return (
    <div className='navigation__menu'>
          <a className="navigation__menu-element" href="/home">STRONA GŁÓWNA</a>
          <a className="navigation__menu-element" href="/corpus">KORPUS JĘZYKOWY APLIKACJI</a>
          <a className="navigation__menu-element" href="/about">O AUTORZE</a>
          <a className="navigation__menu-element" href="/help">POMOC</a>
          <a className="navigation__menu-element" href="/login">ZALOGUJ SIĘ</a>
    </div>
  )
}

export default Menu