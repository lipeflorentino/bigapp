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
            <div className="pc-background"></div>
            <div className="pc-background-img"></div>
            <Row>
                <Col m={4} s={12}>
                    <div id="info-tecno" className="p-infos">
                        <div className="p-losango">
                            <span><i class="fa fa-suitcase"></i></span>
                        </div>    
                        <h4>Tecnologia</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                    
                </Col>
                <Col m={4} s={12}>
                    <div id="info-pessoas" className="p-infos">
                        <div className="p-losango">
                            <span><i class="fa fa-trophy"></i></span>
                        </div> 
                        <h4>Pessoas</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                </Col>
                <Col m={4} s={12}>
                    <div id="info-gestao" className="p-infos">
                        <div className="p-losango">
                            <span><i class="fa fa-rocket"></i></span>
                        </div> 
                        <h4>Gestão</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col m={4} s={12}>
                    <div id="info-negocios" className="p-infos">
                        <div className="p-losango">
                            <span><i class="fa fa-suitcase"></i></span>
                        </div>    
                        <h4>Negócios</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                    
                </Col>
                <Col m={4} s={12}>
                    <div id="info-marcas" className="p-infos">
                        <div className="p-losango">
                            <span><i class="fa fa-trophy"></i></span>
                        </div> 
                        <h4>Marcas</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                </Col>
                <Col m={4} s={12}>
                    <div id="info-proposito" className="p-infos">
                        <div className="p-losango">
                            <span><i class="fa fa-rocket"></i></span>
                        </div> 
                        <h4>Propósito</h4>
                        <p>Um breve texto explicando um pouco do que se trata o conteudo apresentado.</p>
                    </div>
                </Col>
            </Row>
        </div>    
    </div>    
);

export default PilaresContent;