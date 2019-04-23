// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col} from 'react-materialize';
// Importando css e scss
import './stylesheet/header-content.scss';
// Importando img


//importando componentes

//Content
const HeaderContent = () => (
    <div>
        <div className="header-content content" id="toHome">
            <div className="header-background"></div>
            <Row>
                <Col m={12} s={12}>
                    <div className="header-title">
                        <h1>Criação de sites, sistemas e negócios digitais.</h1>
                        <p>Ter um bom website, pode ser a diferença entre um negócio bem sucedido ou não e com nossos serviços otimizados, nunca foi tão acessível ter presença digital, então não fique de fora.</p>
                        <a href="/" className="btn-class">FAÇA PARTE</a>
                    </div>
                </Col>
                
                <Col m={12} s={12}>
                    
                </Col>
            </Row>
        </div>    
    </div>    
);

export default HeaderContent;