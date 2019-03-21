// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Input, NavItem} from 'react-materialize';
//Importando css e scss files
import './stylesheet/navbar.css';

//navbar
const Navbar = () => (
    <Navbar className="navbar-info" brand='logo' right>
      <NavItem onClick={() => console.log('test click')}>Download E-book</NavItem>
      <NavItem href='components.html'>Conheça</NavItem>
    </Navbar>  
);

export default Navbar;