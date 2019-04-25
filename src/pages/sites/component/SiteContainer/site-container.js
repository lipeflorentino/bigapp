// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col} from 'react-materialize';

// Importando css
import './stylesheet/site-container.scss';

import { Link } from 'react-router-dom';
import img from './img/sites.png';
import img4 from './img/sites4.jpg';
import img3 from './img/sites3.png';

const SiteContainer = () => (
    
    <div>
        <div className="s-container">
            <h2>As melhores soluções de <strong>sites</strong> que cabem no seu bolso. Nunca foi tão fácil ter presença digital.</h2>
            <div className="s-infos-rect">
                <div className="s-infos">
                    <Row>
                        <Col m={6} s={12}>
                            <div className="s-infos-img">
                                <img src={img} title="" alt=""></img>
                            </div>
                        </Col>
                        <Col m={6} s={12}>
                            <div className="s-infos-text">
                                <h3>Sites com layout <i>User Friendly</i></h3>
                                <p>texto falando sobre o beneficio citado na imagem ao lado. Esse texto irá transmitir a mensagem segundo o título acima, para que justifique o uso do texto.</p>
                            </div>
                        </Col>
                    </Row>
                </div>    
                <div className="s-infos">
                    <Row>
                        <Col m={6} s={12}>
                            <div className="s-infos-text">
                                <h3>Sites com design responsivo</h3>
                                <p>texto falando sobre o beneficio citado na imagem ao lado. Esse texto irá transmitir a mensagem segundo o título acima, para que justifique o uso do texto.</p>
                            </div>
                        </Col>
                        <Col m={6} s={12}>
                            <div className="s-infos-img">
                                <img src={img4} title="" alt=""></img>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="s-infos">
                    <Row>
                        <Col m={6} s={12}>
                            <div className="s-infos-img">
                                <img src={img3} title="" alt=""></img>
                            </div>
                        </Col>
                        <Col m={6} s={12}>
                            <div className="s-infos-text">
                                <h3>Sites otimizados (SEO)</h3>
                                <p>texto falando sobre o beneficio citado na imagem ao lado. Esse texto irá transmitir a mensagem segundo o título acima, para que justifique o uso do texto.</p>
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
                                <li>30 dias de manutenção grátis</li>
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