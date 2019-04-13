// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import {Row, Col} from 'react-materialize';
// Importando css e scss
import './stylesheet/digital-content.scss';
// Importando img
import img from '../../img/multiplataform2.png';
import site_img from '../../img/multiplataform2.png';
// Importando js
import './javascript/mini-menu.js';

//importando componentes

//Content
const DigitalContent = () => (
    <div>
        <div className="dc-titulo">
            <Row>
                <Col m={6} s={12}>
                    <div className="dc-title-img dc-title-img-show">
                        <img src={site_img} title="" alt=""></img>
                    </div>
                </Col>
                <Col m={6} s={12}>
                    <div className="dc-title-text">
                        <h2>NOSSAS SOLUÇÕES</h2>
                        <p>Texto para atrair a atenção do visitante para as soluções da empresa, falar sobre o padrão de qualidade e outras coisas que valorizem a empresa.</p>
                        <a href="/" className="btn-class">Link Button</a>
                    </div>
                </Col>
                <div className="clearfix"></div>
            </Row>
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
            <Row>
                <Col m={12} s={12}>
                    <div className="dc-container">
                        <div id="site" className="dc-text dc-show">
                            <h3>Sites</h3>
                            <p>Este texto que fala sobre desenvolvimento de sites, a importância de ter presença digital através de sites, SEO e muito mais.</p>
                            <a href="/" className="btn-class">Link Button</a>
                        </div>
                        
                        <div id="sistema" className="dc-text">
                            <h3>Sistemas</h3>
                            <p>Aqui vai entrar um texto que fala sobre desenvolvimento de sistemas, a importância de ter presença digital através de sites, SEO e muito mais.</p>
                            <a href="/" className="btn-class">Link Button</a>
                        </div>
                        
                        <div id="ideias" className="dc-text">
                            <h3>Negócios Digitais</h3>
                            <p>Um outro texto que aborda o desenvolvimento de ideias, a importância de ter presença digital através de sites, SEO e muito mais.</p>
                            <a href="/" className="btn-class">Link Button</a>
                        </div>
                        
                        <div id="design" className="dc-text">
                            <h3>Design</h3>
                            <p>Agora este texto aqui fala sobre desenvolvimento de designs, também sobre a importância de ter presença digital através de sites, SEO e muito mais.</p>
                            <a href="/" className="btn-class">Link Button</a>
                        </div>
                    </div>
                </Col>    
            </Row>
            <div className="clearfix"></div>
        </div>
    </div>
);

export default DigitalContent;