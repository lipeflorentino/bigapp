// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col} from 'react-materialize';

// Importando css
import './stylesheet/negocios-container.scss';
import '../../../sites/component/SiteContainer/stylesheet/site-container.scss';

import { Link } from 'react-router-dom';


const NegociosContainer = () => (
    
    <div>
        <div className="s-container s-container-green">
            <h2>Tem uma <strong>ideia inovadora</strong>? Ou mesmo uma ideia maluca. Nunca foi tão fácil tirá-las do papel.</h2>
            <div className="n-content">
                <Row>
                    <Col m={12} s={12}>
                        <div className="n-infos">
                            <div className="n-infos-rect">
                                <div className="n-infos-count">
                                    <div className="n-infos-circle">
                                        <p>1</p>
                                    </div>
                                </div>
                                <div className="n-infos-text">
                                    <h3>Análise e Validação</h3>
                                    <p>Iremos ouvir a sua ideia, discutí-la e analisá-la para que possamos chegar a um entendimento sobre a ideia e assim possamos trabalhar nela.</p>
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
                                    <p>Após a análise inicial iremos definir de que forma trabalharemos na sua ideia de modo que ela se torne um modelo de negócio e então criaremos um MVP (produto mínimo viável) a partir dela.</p>
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
                                    <p>Após apresentarmos o MVP e validá-lo junta ao cliente, iremos trabalhar no desenvolvimento do produto final.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="s-call">
                <p><strong>Bem simples não? Comece agora mesmo!</strong></p>
                <Link to="/contato" onClick={window.scrollTo(0, 0)} className="btn-class">SAIBA COMO</Link>
            </div>
        </div>
    </div>
    
    
    
);

export default NegociosContainer;    