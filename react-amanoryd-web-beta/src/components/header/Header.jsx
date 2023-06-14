import React from 'react'
import './header.css'
import CTA from './CTA'
import IMAGEN from '../../assets/cocina1.jpg'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bienvenido a</h5>
        <h1>Amano, Reformas y Decoración</h1>
        <h5 className="text-light">Reformas y Decoración</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="mainpic">
          <img src={IMAGEN} alt="imagen"/>
        </div>

      </div>
    </header>
  )
}

export default Header