// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Input, NavItem, Navbar} from 'react-materialize';
//Importando css e scss files
import './stylesheet/sidenav.scss';
//Importando js files
import "./javascript/sidenav-script.js";

//sidenav
const SideNav = () => (
    <div class="vNav">
        <ul class="vNav">
            <li>
                <a href="#toHome">
                    <div class="label">HOME</div>
                </a>
            </li>
            <li>
                <a href="#toDigital">
                    <div class="label">SOLUÇÕES</div>
                </a>
            </li>
            <li>
                <a href="#toEbook">
                    <div class="label">E-BOOK</div>
                </a>
            </li>
            <li>
                <a href="#toEmpresa">
                    <div class="label">QUEM SOMOS</div>
                </a>
            </li>
            <li>
                <a href="#toCliente">
                    <div class="label">CLIENTES</div>
                </a>
            </li>
            <li>
                <a href="#toFooter">
                    <div class="label">CONTATO</div>
                </a>
            </li>
        </ul>
    </div>
);

export default SideNav;