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
                <h2>Quem somos?</h2>
                <div className="title-underline"></div>
            </div>
            <Row>
                <Col m={6} s={12}>
                    <div className="emp-box">
                        <div id="emp-bus" className="emp-rect">
                            <span><i class="fa fa-suitcase"></i><p>Business</p></span>
                        </div>
                        <div id="emp-inteli" className="emp-rect">
                            <span><i class="fa fa-trophy"></i><p>Intelligence</p></span>
                        </div>
                        <div id="emp-great" className="emp-rect">
                            <span><i class="fa fa-rocket"></i><p>Greatness</p></span>
                        </div>
                    </div>
                </Col>
                <Col m={6} s={12}>
                    <div className="emp-padding emp-text">
                        <p><strong>A BIG</strong> aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa.</p>
                        <p>O objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
                        <p>Aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa.</p>
                    </div>
                </Col>
            </Row>
        </div>    
    </div>    
);

export default EmpresaContent;