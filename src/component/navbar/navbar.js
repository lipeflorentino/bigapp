// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Input, NavItem, Navbar} from 'react-materialize';
//Importando css e scss files
import './stylesheet/navbar.scss';
//Importando js files
import "./javascript/scroll-to-navigate.js";
import logo from '../../img/big_logo_new_03.png';
    
const icon = (
  <span class="logo">
    <a href="/">
      <img src={logo} height="33" width="80" alt="<BIG/>" />
    </a>
  </span>
);

//navbar
const Nav = () => (
  
    <Navbar brand="<BIG/>" right>
      <NavItem className="toHome">HOME</NavItem>
      <NavItem className="toEbook" onClick={() => alert('test click')}>E-BOOK</NavItem>
      <NavItem className="toDigital">SOLUÇÕES DIGITAIS</NavItem>
      <NavItem className="toClientes">CLIENTES</NavItem>
      <NavItem className="toContato">CONTATO</NavItem>
    </Navbar>  
);

export default Nav;