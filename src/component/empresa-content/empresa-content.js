// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando css e scss
import './stylesheet/empresa-content.scss';


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
                <Col m={4} s={12}>
                    <div className="emp-infos">
                        <span><i class="fa fa-suitcase"></i><p>Business</p></span>
                    </div>
                </Col>
                <Col m={4} s={12}>
                    <div className="emp-infos">
                        <span><i class="fa fa-trophy"></i><p>Inteligence</p></span>
                    </div>
                </Col>
                <Col m={4} s={12}>
                    <div className="emp-infos">
                        <span><i class="fa fa-rocket"></i><p>Greatness</p></span>
                    </div>
                </Col>
            </Row>
            <div className="emp-text">
                <h3>A BIG</h3>
                <p>Aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa, o objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
                <p>Aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa, o objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
                <p>Aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa, o objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
            </div>
        </div>    
    </div>    
);

export default EmpresaContent;