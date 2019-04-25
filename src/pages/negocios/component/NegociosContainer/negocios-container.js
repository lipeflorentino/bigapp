// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col} from 'react-materialize';

// Importando css
import './stylesheet/negocios-container.scss';
import '../../../sites/component/SiteContainer/stylesheet/site-container.scss';

import { Link } from 'react-router-dom';

import img from './img/ideias2.png';


const NegociosContainer = () => (
    
    <div>
        <div className="s-container s-container-green">
            <h2>Tem uma <strong>ideia inovadora</strong>? Ou mesmo uma ideia maluca. Nunca foi tão fácil tirá-las do papel.</h2>
            <div className="n-content">
                <Row>
                    <Col m={8} s={12}>
                        <div className="n-infos">
                            <div className="n-infos-rect">
                                <div className="n-infos-count">
                                    <div className="n-infos-circle">
                                        <p>1</p>
                                    </div>
                                </div>
                                <div className="n-infos-text">
                                    <h3>Análise e Validação</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem</p>
                                </div>
                            </div>
                            <div className="n-line"></div>
                            <div className="n-infos-rect">
                                <div className="n-infos-count">
                                    <div className="n-infos-circle">
                                        <p>2</p>
                                    </div>
                                </div>
                                <div className="n-infos-text">
                                    <h3>Modelagem do MVP</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem</p>
                                </div>
                            </div>
                            <div className="n-line"></div>
                            <div className="n-infos-rect">
                                <div className="n-infos-count">
                                    <div className="n-infos-circle">
                                        <p>3</p>
                                    </div>
                                </div>
                                <div className="n-infos-text">
                                    <h3>Desenvolvimento do Produto</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col m={4} s={12}>
                        <div className="n-infos">
                            <div className="n-infos-img">
                                <img src={img} title="" alt=""></img>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="s-call">
                <p><strong>Não adie mais, comece agora mesmo!</strong></p>
                <Link to="/contato" onClick={window.scrollTo(0, 0)} className="btn-class">SAIBA COMO</Link>
            </div>
        </div>
    </div>
    
    
    
);

export default NegociosContainer;    