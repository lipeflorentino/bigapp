// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando css e scss
import './stylesheet/empresa-content.scss';
// Importando img
import empresa_img from './img/empresa.jpg';


//importando componentes

//Content
const EmpresaContent = () => (
    <div>
        <div className="empresa-content content" id="toEmpresa">
            <div className="emp-titulo">
                <h3>QUEM SOMOS?</h3>
                <div className="title-underline"></div>
            </div>
            <div className="emp-padding emp-text">
                <p><strong>A BIG</strong> aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa, o objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
                <p>Aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa, o objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
                <p>Aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa, o objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
            </div>
            <Row>
                <Col m={4} s={12}>
                    <div className="emp-infos">
                        <div className="emp-losango">
                            <span><i class="fa fa-suitcase"></i></span>
                        </div>    
                        <h4>Tecnologia</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                    
                </Col>
                <Col m={4} s={12}>
                    <div className="emp-infos">
                        <div className="emp-losango">
                            <span><i class="fa fa-trophy"></i></span>
                        </div> 
                        <h4>Pessoas</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                </Col>
                <Col m={4} s={12}>
                    <div className="emp-infos">
                        <div className="emp-losango">
                            <span><i class="fa fa-rocket"></i></span>
                        </div> 
                        <h4>Gestão</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col m={4} s={12}>
                    <div className="emp-infos">
                        <div className="emp-losango">
                            <span><i class="fa fa-suitcase"></i></span>
                        </div>    
                        <h4>Tecnologia</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                    
                </Col>
                <Col m={4} s={12}>
                    <div className="emp-infos">
                        <div className="emp-losango">
                            <span><i class="fa fa-trophy"></i></span>
                        </div> 
                        <h4>Pessoas</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                </Col>
                <Col m={4} s={12}>
                    <div className="emp-infos">
                        <div className="emp-losango">
                            <span><i class="fa fa-rocket"></i></span>
                        </div> 
                        <h4>Gestão</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                </Col>
            </Row>
        </div>    
    </div>    
);

export default EmpresaContent;