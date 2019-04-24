// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import {Navbar} from 'react-materialize';
//Importando css e scss files
import './stylesheet/navbar.scss';
//Importando js files
import "./javascript/click-to-navigate.js";
import logo from '../../img/logo/big_logo_new_06.png';

import { Link } from 'react-router-dom';
    
const icon = (
  <span className="logo">
    <img src={logo} height="60" width="60" alt="<BIG/>" />
  </span>
);

//navbar
const Nav = () => (
  
    <Navbar brand={icon} right>
      <li><Link to="/sites">SITES</Link></li>
      <li><Link to="/sistemas">SISTEMAS</Link></li>
      <li><Link to="/negocios">NEGÓCIOS DIGITAIS</Link></li>
      <li><Link to="/contato">CONTATO</Link></li>
    </Navbar>  
);

export default Nav;