// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
// Importando css e scss
import './stylesheet/features-content.scss';
import img from './img/celular2.png';


//importando componentes

//Content
const FeaturesContent = () => (
    <div>
        <div className="features-content content" id="toFeatures">
            <div className="fe-titulo">
                <h2>Por quê ter presença Digital?</h2>
                <div className="title-underline"></div>
            </div>
            <Row>
                <Col m={8} s={12}>
                    <div className="fc-box">
                        <div id="feature1" className="fc-features">
                            <span><i className="fa fa-at"></i></span>
                            <h3>Conectado</h3>
                            <p>O mundo está cada vez mais digital, presença online através de <strong>sites</strong> ou <strong>sistemas</strong> é um diferencial competitivo.</p>
                        </div>
                        <div id="feature2" className="fc-features">
                            <span><i className="fa fa-bar-chart"></i></span>
                            <h3>Clientes</h3>
                            <p>Esteja online e veja cada vez mais potenciais clientes chegarem até você.</p>
                        </div>
                        <div className="clearfix"></div>
                        <div id="feature3" className="fc-features">
                            <span><i className="fa fa-cloud"></i></span>
                            <h3>Nuvem</h3>
                            <p>Com recursos na nuvem você não tem dor de cabeça com infra-estrutura ou segurança.</p>
                        </div>
                        <div id="feature4" className="fc-features">
                            <span><i className="fa fa-code"></i></span>
                            <h3>Tecnologia</h3>
                            <p>Cada dia surgem novas tecnologias, se atualizar é essencial.</p>
                        </div>
                    </div>
                </Col>
                <Col m={4} s={12}>
                    <div className="fc-img">
                        <img src={img} title="sites-dispositivos-móveis" alt="sites em dispositivos móveis"></img>
                    </div>
                </Col>
                <div className="clearfix"></div>
            </Row>
        </div>    
    </div>    
);

export default FeaturesContent;