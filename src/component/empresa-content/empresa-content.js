// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando css e scss
import './stylesheet/empresa-content.scss';
// Importando img
import emp_img from './img/empresa.jpg';


//importando componentes

//Content
const EmpresaContent = () => (
    <div>
        <div className="empresa-content content" id="toEmpresa">
            <div className="emp-titulo">
                <h3>QUEM SOMOS?</h3>
                <div className="title-underline"></div>
            </div>
            <Row>
                <Col m={12} s={12}>
                    <div className="emp-padding emp-text">
                        <p><strong>A BIG</strong> aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa, o objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
                        <p>Aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa, o objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
                        <p>Aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa, o objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
                    </div>
                </Col>
                <Col m={12} s={12}>
                    <div className="emp-img">
                        <div className="emp-rectangle"></div>
                        <div className="emp-rectangle2"></div>
                        <img src={emp_img} title="" alt=""></img>
                    </div>
                </Col>
            </Row>
        </div>    
    </div>    
);

export default EmpresaContent;