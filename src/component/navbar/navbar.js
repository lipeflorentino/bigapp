// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { NavItem, Navbar} from 'react-materialize';
//Importando css e scss files
import './stylesheet/navbar.scss';
//Importando js files
import "./javascript/click-to-navigate.js";
import logo from '../../img/logo/big_logo_new_06.png';
    
const icon = (
  <span className="logo">
    <img src={logo} height="60" width="60" alt="<BIG/>" />
  </span>
);

//navbar
const Nav = () => (
  
    <Navbar brand={icon} right>
      <NavItem href="/solucoes-digitais">SOLUÇÕES DIGITAIS</NavItem>
      <NavItem href="/oficina-de-startups">OFICIA DE STARTUPS</NavItem>
      <NavItem href="/sobre-a-big">SOBRE</NavItem>
      <NavItem href="/projetos">PROJETOS</NavItem>
      <NavItem href="/contato">CONTATO</NavItem>
    </Navbar>  
);

export default Nav;