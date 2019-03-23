// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando css e scss
import './stylesheet/header-content.scss';
// Importando img
import logo from '../../img/multiplataform2.png';

//importando componentes

//Content
const HeaderContent = () => (

    <div className="header-content content" id="toHome">
        <Row>
            <Col m={7} s={12}>
                <div className="header-title">
                    <h1>O Título do header otimizado para o SEO.</h1>
                    <p>Um texto para captar a atenção do usuário e aumentar a taxa de conversão.</p>
                    <p className="p-subscription">Coloque aqui o seu e-mail e receba gratuitamente o e-book</p>
                    <a class="btn">Button</a>
                </div>
            </Col>
            
            <Col m={5} s={12}>
                <div className="header-img">
                    <img src={logo}></img>
                </div>
            </Col>
        </Row>
    </div>    
);

export default HeaderContent;