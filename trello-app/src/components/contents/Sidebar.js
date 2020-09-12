import React from 'react';
import {ReactComponent as Home} from '../../assets/home.svg';
import {ReactComponent as Flight} from '../../assets/aircraft-take-off.svg';
import {ReactComponent as Key} from '../../assets/key.svg';
import {ReactComponent as Map} from '../../assets/map.svg';



function Sidebar() {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        <li className='side-nav__item side-nav__item--active'>
          <a href='#' className='side-nav__link'>
            <Home className='side-nav__icon'/>
            <span>Hotel</span>
          </a>
        </li>
        <li className='side-nav__item'>
          <a href='#' className='side-nav__link'>
            <Flight className='side-nav__icon'/>
            <span>Flight</span>
          </a>
        </li>
        <li className='side-nav__item'>
          <a href='#' className='side-nav__link'>
            <Key className='side-nav__icon'/>
            <span>Car rental</span>
          </a>
        </li>
        <li className='side-nav__item'>
          <a href='#' className='side-nav__link'>
            <Map className='side-nav__icon'/>
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className='legal'>
        &copy; 2020 by Trello. All rights reserved.
      </div>
    </nav>
  )
}

export default Sidebar
