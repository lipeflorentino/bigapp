// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando css e scss
import './stylesheet/digital-content.scss';
// Importando img
import img from '../../img/multiplataform2.png';
import site_img from '../../img/multiplataform2.png';
import sistema_img from '../../img/multiplataform2.png';
import ideias_img from '../../img/multiplataform2.png';
import design_img from '../../img/multiplataform2.png';
// Importando js
import './javascript/mini-menu.js';

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
            <div className="dc-menu">
                <ul>
                    <li><div id="display-site" className="losango dc-active"></div></li>
                    <li><div id="display-sistema" className="losango"></div></li>
                    <li><div id="display-ideias" className="losango"></div></li>
                    <li><div id="display-design" className="losango"></div></li>
                </ul>
            </div>
            
            <div id="site" className="dc-text">
                <h3>Sites</h3>
                <p>Este texto que fala sobre desenvolvimento de sites, a importância de ter presença digital através de sites, SEO e muito mais.</p>
                <a href="#" className="btn-class">Link Button</a>
            </div>
            
            <div id="sistema" className="dc-text">
                <h3>Sistemas</h3>
                <p>Aqui vai entrar um texto que fala sobre desenvolvimento de sistemas, a importância de ter presença digital através de sites, SEO e muito mais.</p>
                <a href="#" className="btn-class">Link Button</a>
            </div>
            
            <div id="ideias" className="dc-text">
                <h3>Consultores de Ideias</h3>
                <p>Um outro texto que aborda o desenvolvimento de ideias, a importância de ter presença digital através de sites, SEO e muito mais.</p>
                <a href="#" className="btn-class">Link Button</a>
            </div>
            
            <div id="design" className="dc-text">
                <h3>Design</h3>
                <p>Agora este texto aqui fala sobre desenvolvimento de designs, também sobre a importância de ter presença digital através de sites, SEO e muito mais.</p>
                <a href="#" className="btn-class">Link Button</a>
            </div>
            
            <div className="trapezio">
                <div id="site-img" className="digital-img">
                    <img src={site_img} title="" alt=""></img>
                </div>
                
                <div id="sistema-img" className="digital-img">
                    <img src={sistema_img} title="" alt=""></img>
                </div>
                
                <div id="ideias-img" className="digital-img">
                    <img src={ideias_img} title="" alt=""></img>
                </div>
                
                <div id="design-img" className="digital-img">
                    <img src={design_img} title="" alt=""></img>
                </div>
            </div>
        </div>
    </div>
);

export default DigitalContent;