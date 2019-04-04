// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize

//Importando css e scss files
import './stylesheet/sidenav.scss';
//Importando js files
import "./javascript/sidenav-script.js";

//sidenav
const SideNav = () => (
    <div className="vNav">
        <ul className="vNav">
            <li>
                <a href="#toHome">
                    <div className="label">HOME</div>
                </a>
            </li>
            <li>
                <a href="#toDigital">
                    <div className="label">SOLUÇÕES</div>
                </a>
            </li>
            <li>
                <a href="#toFeatures">
                    <div className="label">SAIBA MAIS</div>
                </a>
            </li>
            <li>
                <a href="#toEmpresa">
                    <div className="label">SOBRE</div>
                </a>
            </li>
            <li>
                <a href="#toCliente">
                    <div className="label">CLIENTES</div>
                </a>
            </li>
            <li>
                <a href="#toFooter">
                    <div className="label">CONTATO</div>
                </a>
            </li>
        </ul>
    </div>
);

export default SideNav;