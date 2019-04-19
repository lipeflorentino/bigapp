// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
// Importando css e scss
import './stylesheet/empresa-content.scss';
// Importando img



//importando componentes

//Content
const EmpresaContent = () => (
    <div>
        <div className="empresa-content content" id="toEmpresa">
            <div className="emp-titulo">
                <h2>Quem somos?</h2>
                <div className="title-underline"></div>
            </div>
            <div className="emp-container">
                <Row>
                    <Col m={4} s={12}>
                        <div className="emp-box">
                            <div id="emp-bus" className="emp-rect">
                                <span><i className="fa fa-suitcase"></i><p>Business</p></span>
                            </div>
                            <div className="emp-text">
                                <p><strong>A BIG</strong> tem o foco total em ajudar no desenvolvimento de negócios bem sucedidos, essa é a nossa missão, o nosso propósito.</p>
                            </div>
                        </div>
                    </Col>
                    <Col m={4} s={12}>    
                        <div className="emp-box">
                            <div id="emp-inteli" className="emp-rect">
                                <span><i className="fa fa-trophy"></i><p>Intelligence</p></span>
                            </div>    
                            <div className="emp-text">
                                <p>Procuramos nos aprimorar todos os dias, aprender mais e evoluir sempre, e somente com inteligência somos capazes de fazer mais e melhor.</p>
                            </div>    
                        </div>    
                    </Col>    
                    <Col m={4} s={12}>    
                        <div className="emp-box">
                            <div id="emp-great" className="emp-rect">
                                <span><i className="fa fa-rocket"></i><p>Greatness</p></span>
                            </div>    
                            <div className="emp-text">
                                <p>Nossos sonhos são grandes e maior ainda é a nossa vontade de realizá-los.</p>
                            </div>
                        </div>    
                    </Col>    
                </Row>    
            </div>       
        </div>    
    </div>    
);

export default EmpresaContent;