// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col} from 'react-materialize';
//importando componente de media query
import MediaQuery from "react-responsive";
// Importando css
import './stylesheet/site-container.scss';

import { Link } from 'react-router-dom';
import img from './img/sites.jpg';
import img4 from './img/sites4.jpg';
import img3 from './img/seo.jpg';

const SiteContainer = () => (
    
    <div>
        <div className="s-container">
            <h2>As melhores soluções em <strong>sites</strong> que cabem no seu bolso. Nunca foi tão fácil ter presença digital.</h2>
            <div className="s-infos-rect">
                <div className="s-infos">
                    <Row>
                        <Col m={6} s={12}>
                            <div className="s-infos-img s-infos-img-top">
                                <img src={img} title="sites-user-friendly" alt="criação de sites user friendly"></img>
                            </div>
                        </Col>
                        <Col m={6} s={12}>
                            <div className="s-infos-text">
                                <h3>Sites com interface <i>User Friendly</i></h3>
                                <p>Sabemos a importância da experiência do usuário, por isso nossos <strong>websites</strong> possuem características <strong><i>User Friendly</i></strong> como carregamento rápido, navegação fluída, acessibilidade, entre outras.</p>
                            </div>
                        </Col>
                    </Row>
                </div>    
                <div className="s-infos">
                    <Row>
                        <MediaQuery query="(max-device-width: 600px)">
                            <Col s={12}>
                                <div className="s-infos-img s-infos-img-middle">
                                    <img src={img4} title="sites-design-responsivo" alt="criação de sites com design responsivo"></img>
                                </div>
                            </Col>
                        </MediaQuery>    
                        <Col m={6} s={12}>
                            <div className="s-infos-text">
                                <h3>Sites com design responsivo</h3>
                                <p>Com o crescimento do mercado dos dispositivos móveis como tablets e celulares, se tornou essencial que os <strong>websites</strong> se adaptem aos diferentes tipos de dispositivos e tamanhos de telas.</p>
                            </div>
                        </Col>
                        <MediaQuery query="(min-device-width: 601px)">
                            <Col m={6} s={12}>
                                <div className="s-infos-img s-infos-img-middle">
                                    <img src={img4} title="sites-design-responsivo" alt="criação de sites com design responsivo"></img>
                                </div>
                            </Col>
                        </MediaQuery>  
                    </Row>
                </div>
                <div className="s-infos">
                    <Row>
                        <Col m={6} s={12}>
                            <div className="s-infos-img s-infos-img-bottom">
                                <img src={img3} title="sites-otimizados-seo" alt="criação de sites otimizados (SEO)"></img>
                            </div>
                        </Col>
                        <Col m={6} s={12}>
                            <div className="s-infos-text">
                                <h3>Sites otimizados (SEO)</h3>
                                <p><strong>SEO</strong> ou <i>otimização para motores de busca</i> é um termo indispensável quando se fala em <strong>sites</strong>. Pois as técnicas usadas ajudam as suas páginas a se destacarem entre muitas outras, tornando o <strong>website</strong> da sua empresa mais visível nos mecanismos de busca como o <i>Google</i>.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="s-call">
                <p><strong>Não adie mais, comece agora mesmo!</strong></p>
                <Link to="/contato" onClick={window.scrollTo(0, 0)} className="btn-class">SAIBA COMO</Link>
            </div>    
        </div>
        <div className="s-content">
            <h2>Preços</h2>
            <p> Algumas de nossas soluções de <strong>sites</strong>, escolha a que melhor cabe no seu bolso.</p>
            <div className="s-prices">
                <Row>
                    <Col m={4} s={12}>
                        <div className="s-prices-rect s-active">
                            <h3>Básico</h3>
                            <h4>R$ 500*</h4>
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
                            <h3>Avançado</h3>
                            <h4>R$ 900*</h4>
                            <ul>
                                <li>Layout pré-definido</li>
                                <li>Design multiplataforma</li>
                                <li>Otimizado (SEO)</li>
                                <li>Até 6 páginas</li>
                                <li>Estático</li>
                                <li>30 dias de manutenção grátis</li>
                                <li></li>
                            </ul>   
                            <Link to="/contato" onClick={window.scrollTo(0, 0)} className="btn-class">CONTRATE AGORA</Link>
                        </div>
                    </Col>
                    <Col m={4} s={12}>
                        <div className="s-prices-rect s-active">
                            <h3>Customizado</h3>
                            <h4>R$ 2500*</h4>
                            <ul>
                                <li>Layout Customizado</li>
                                <li>Design multiplataforma</li>
                                <li>Otimizado (SEO)</li>
                                <li>Múltiplas Páginas</li>
                                <li>Dinâmico</li>
                                <li>30 dias de manutenção grátis</li>
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