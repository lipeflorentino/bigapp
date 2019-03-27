// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando css e scss
import './stylesheet/pilares-content.scss';


//importando componentes

//Content
const PilaresContent = () => (
    <div>
        <div className="pilares-content" id="toPilares">
            <div className="pc-text">
                <h3>Pilares</h3>
                <p>Aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa, o objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
                <p>Aqui vai entrar um texto falando sobre a BIG Soluções Gigitais, com foco no propósito da empresa, o objetivo é se aproximar do cpossível cliente, fazê-lo entender a marca e motivá-lo a usar os nossos serviços.</p>
            </div>
            <Row>
                <Col m={4} s={12}>
                    <div id="info-tecno" className="pc-infos-img">
                        
                    </div>
                </Col>
                <Col m={8} s={12}>
                    <div className="pc-infos-text">
                        
                    </div>
                </Col>
            </Row>
            <Row>
                <Col m={4} s={12}>
                    <div id="info-business" className="pc-infos-img">
                        
                    </div>
                </Col>
                <Col m={8} s={12}>
                    <div className="pc-infos-text">
                        
                    </div>
                </Col>
            </Row>
            <Row>
                <Col m={4} s={12}>
                    <div id="info-clientes" className="pc-infos-img">
                        
                    </div>
                </Col>
                <Col m={8} s={12}>
                    <div className="pc-infos-text">
                        
                    </div>
                </Col>
            </Row>
            <Row>
                <Col m={4} s={12}>
                    <div id="info-gestao" className="pc-infos-img">
                        
                    </div>
                </Col>
                <Col m={8} s={12}>
                    <div className="pc-infos-text">
                        
                    </div>
                </Col>
            </Row>
        </div>    
    </div>    
);

export default PilaresContent;