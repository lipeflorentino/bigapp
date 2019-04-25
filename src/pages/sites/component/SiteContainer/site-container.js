// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col} from 'react-materialize';

// Importando css
import './stylesheet/site-container.scss';

import { Link } from 'react-router-dom';

const SiteContainer = () => (
    
    <div>
        <div className="s-content">
            <h2>Preços</h2>
            <p> Algumas de nossas soluções de <strong>sites</strong>, escolha a que melhor cabe no seu bolso.</p>
            <div className="s-prices">
                <Row>
                    <Col m={4} s={12}>
                        <div className="s-prices-rect s-active">
                            <h3>Básico</h3>
                            <h4>R$ 350*</h4>
                            <ul>
                                <li>Layout pré-definido</li>
                                <li>Design multiplataforma</li>
                                <li>Otimizado (SEO)</li>
                                <li>SPA (single page aplication)</li>
                                <li>Estático</li>
                                <li>15 dias de manutenção grátis</li>
                                <li></li>
                            </ul>   
                            <Link to="/contato" onClick={window.scrollTo(0, 0)} className="btn-class">CONTRATE AGORA</Link>
                        </div>
                    </Col>
                    <Col m={4} s={12}>
                        <div className="s-prices-rect s-active">
                            <h3>Customizado</h3>
                            <h4>R$ 800*</h4>
                            <ul>
                                <li>Layout personalizado</li>
                                <li>Design multiplataforma</li>
                                <li>Otimizado (SEO)</li>
                                <li>Até 6 páginas</li>
                                <li>Estático</li>
                                <li>1 mês de manutenção grátis</li>
                                <li></li>
                            </ul>   
                            <Link to="/contato" onClick={window.scrollTo(0, 0)} className="btn-class">CONTRATE AGORA</Link>
                        </div>
                    </Col>
                    <Col m={4} s={12}>
                        <div className="s-prices-rect s-active">
                            <h3>Avançado</h3>
                            <h4>R$ 1500*</h4>
                            <ul>
                                <li>Layout personalizado</li>
                                <li>Design multiplataforma</li>
                                <li>Otimizado (SEO)</li>
                                <li>Múltiplas Páginas</li>
                                <li>Dinâmico</li>
                                <li>1 mês de manutenção grátis</li>
                                <li></li>
                                <li></li>
                            </ul>   
                            <Link to="/contato" onClick={window.scrollTo(0, 0)} className="btn-class">CONTRATE AGORA</Link>
                        </div>
                    </Col>
                </Row>
            </div>
            <p>*a partir de</p>
         </div>    
    </div>
    
    
    
);

export default SiteContainer;    