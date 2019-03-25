// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando css e scss
import './stylesheet/digital-content.scss';
// Importando img
import img from '../../img/multiplataform2.png';

//importando componentes

//Content
const DigitalContent = () => (
    <div>
        <div className="dc-titulo">
            <h2>NOSSAS SOLUÇÕES</h2>
            <div className="title-underline"></div>
            <p>Texto para atrair a atenção do visitante para as soluções da empresa.</p>
        </div>
        <div className="digital-content content" id="toDigital">
            <div className="digital-background"></div>
            <div className="dc-text">
                <h3>Sites</h3>
                <p>Aqui vai entrar um texto que fala sobre desenvolvimento de sites, a importância de ter presença digital através de sites, SEO e muito mais.</p>
                <a href="#" class="btn-class">Link Button</a>
            </div>
            <div className="trapezio">
                <div className="digital-img">
                    <img src={img} title="" alt=""></img>
                </div>
            </div>
        </div>
    </div>
);

export default DigitalContent;