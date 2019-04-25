// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
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
                            <span><i className="fa fa-suitcase"></i></span>
                        </div>    
                        <h4>Tecnologia</h4>
                        <p>Acreditamos na tecnologia como um agente de transformação, capaz de mudar a realidade.</p>
                    </div>
                    
                </Col>
                <Col m={4} s={12}>
                    <div id="info-pessoas" className="p-infos">
                        <div className="p-losango">
                            <span><i className="fa fa-trophy"></i></span>
                        </div> 
                        <h4>Pessoas</h4>
                        <p>Tudo que vale a pena é feito por pessoas e para pessoas, essa ideia é fundamental para o nosso negócio.</p>
                    </div>
                </Col>
                <Col m={4} s={12}>
                    <div id="info-gestao" className="p-infos">
                        <div className="p-losango">
                            <span><i className="fa fa-rocket"></i></span>
                        </div> 
                        <h4>Gestão</h4>
                        <p>Gestão se tornou parte fundamental das empresas do futuro, uma gestão consciente é indispensável.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col m={4} s={12}>
                    <div id="info-negocios" className="p-infos">
                        <div className="p-losango">
                            <span><i className="fa fa-suitcase"></i></span>
                        </div>    
                        <h4>Negócios</h4>
                        <p>Nosso principal foco é em negócios, pequenas empresas e empreendedores.</p>
                    </div>
                    
                </Col>
                <Col m={4} s={12}>
                    <div id="info-marcas" className="p-infos">
                        <div className="p-losango">
                            <span><i className="fa fa-trophy"></i></span>
                        </div> 
                        <h4>Ideias</h4>
                        <p>Elas transformam o mundo, acreditamos nesse potencial e procuramos auxiliar na construção de novos caminhos.</p>
                    </div>
                </Col>
                <Col m={4} s={12}>
                    <div id="info-proposito" className="p-infos">
                        <div className="p-losango">
                            <span><i className="fa fa-rocket"></i></span>
                        </div> 
                        <h4>Propósito</h4>
                        <p>Ser agentes de transformação é o que nos move é o nosso propósito.</p>
                    </div>
                </Col>
            </Row>
        </div>    
    </div>    
);

export default PilaresContent;