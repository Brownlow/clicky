import React from 'react';
import './Header.css';

const Header = (props) => (
  
<nav className="navbar sticky-top">
  <div className="container">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item logo">Clicky App</li>
      <li className="nav-item messages mx-auto"> {props.clickMessage}</li>
      <li className="nav-item score">Score: {props.bestScore}</li>
      <li className="nav-item guesses">Guesses: {props.correctGuesses}</li>
    </ul>
  </div>
</nav>
) 
export default Header;