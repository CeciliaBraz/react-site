import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
  return (
    <div class="NavBar">
      <ul class="Menu">
        <li><Link to="/Meu">Feito por Mim</Link></li>
        <li><Link to="/Pronto">Pronto</Link></li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;