import React from 'react';
import Logo from '../assets/favicon.png';
import User from '../assets/user.jpeg';
import {ReactComponent as MagnifyingGlass} from '../assets/magnifying-glass.svg';
import {ReactComponent as Bookmark} from '../assets/bookmark.svg';
import {ReactComponent as Chat} from '../assets/chat.svg';


function Header() {
  return (
    <header class="header">
      <img src={Logo} alt="trillo logo" class="logo" />

      <form action="#" class="search">
          <input type="text" class="search__input" placeholder="Search hotels" />
          <button class="search__button">
           <MagnifyingGlass className="search__icon"/>
          </button>
      </form>

      <nav class="user-nav">
          <div class="user-nav__icon-box">
            <Bookmark className="user-nav__icon"/>
            <span class="user-nav__notification">7</span>
          </div>
          <div class="user-nav__icon-box">
            <Chat className="user-nav__icon"/>
            <span class="user-nav__notification">13</span>
          </div>
          <div class="user-nav__user">
              <img src={User} alt="User photo" className="user-nav__user-photo" />
              <span class="user-nav__user-name">Tarus</span>
          </div>
      </nav>
  </header>
  )
}

export default Header
