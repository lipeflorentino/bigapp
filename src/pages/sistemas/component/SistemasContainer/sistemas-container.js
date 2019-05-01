// Importando o React
import React from "react";

// Importando os components necessários da lib react-materialize
import { Row, Col} from 'react-materialize';
//importando componente de media query
import MediaQuery from "react-responsive";
// Importando css
import './stylesheet/sistemas-container.scss';
import '../../../sites/component/SiteContainer/stylesheet/site-container.scss';

import { Link } from 'react-router-dom';

import img from './img/sistema3.jpg';
import img4 from './img/sistema2.jpg';
import img3 from './img/sistema.png';

const SistemasContainer = () => (
    
    <div>
        <div className="s-container s-container-purple">
            <h2>As melhores soluções em <strong>sistemas</strong> que cabem no seu bolso. Nunca foi tão fácil ter presença digital.</h2>
            <div className="s-infos-rect">
                <div className="s-infos">
                    <Row>
                        <Col m={6} s={12}>
                            <div className="s-infos-img st-infos-img-top">
                                <img src={img} title="sistemas-web-na-nuvem" alt="sistemas-web-na-nuvem"></img>
                            </div>
                        </Col>
                        <Col m={6} s={12}>
                            <div className="s-infos-text s-infos-text-purple">
                                <h3>Sistemas web com tecnologia <i>Cloud</i></h3>
                                <p>Não tenha dor de cabeça com infra-estrutura e equipamentos, armazenamos o seu <strong>sistema</strong> na <i>nuvem</i>, garantindo que ele esteja sempre seguro e funcionando.</p>
                            </div>
                        </Col>
                    </Row>
                </div>    
                <div className="s-infos">
                    <Row>
                        <MediaQuery query="(max-device-width: 600px)">
                            <Col s={12}>
                                <div className="s-infos-img st-infos-img-middle">
                                    <img src={img4} title="sistemas-web-facil-gerenciamento" alt="sistema web de facil gerenciamento"></img>
                                </div>
                            </Col>
                        </MediaQuery> 
                        <Col m={6} s={12}>
                            <div className="s-infos-text s-infos-text-purple">
                                <h3>Sistemas de fácil gerenciamento</h3>
                                <p>Nossos <strong>sistemas web</strong> são projetados para serem de fácil <i>usabilidade</i>, com paineis de controle e acesso <i>intuitivos</i>. Além do manual de uso ainda oferecemos treinamento para o uso do <strong>software</strong>.</p>
                            </div>
                        </Col>
                        <MediaQuery query="(min-device-width: 601px)">
                            <Col m={6} s={12}>
                                <div className="s-infos-img st-infos-img-middle">
                                    <img src={img4} title="sistemas-web-facil-gerenciamento" alt="sistema web de facil gerenciamento"></img>
                                </div>
                            </Col>
                        </MediaQuery>     
                    </Row>
                </div>
                <div className="s-infos">
                    <Row>
                        <Col m={6} s={12}>
                            <div className="s-infos-img st-infos-img-bottom">
                                <img src={img3} title="sistemas-web-personalizados" alt="sistemas web personalizados"></img>
                            </div>
                        </Col>
                        <Col m={6} s={12}>
                            <div className="s-infos-text s-infos-text-purple">
                                <h3>Sistemas personalizados</h3>
                                <p>Oferecemos soluções de <strong>sistemas web</strong> personalizados, com o objetivo de atender exatamente a necessidade do seu negócio.</p>
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
        <div className="s-content s-content-purple">
            <h2>Preços</h2>
            <p> Algumas de nossas soluções de <strong>sistemas</strong>, escolha a que melhor cabe no seu bolso.</p>
            <div className="s-prices">
                <Row>
                    <Col m={6} s={12}>
                        <div className="s-prices-rect s-prices-rect-purple s-active-purple">
                            <h3>Básico</h3>
                            <h4>R$ 800*</h4>
                            <ul>
                                <li>Layout pré-definido</li>
                                <li>Design multiplataforma</li>
                                <li>Otimizado</li>
                                <li>Cloud Storage</li>
                                <li>1 nível de acesso</li>
                                <li>30 dias de manutenção grátis</li>
                                <li></li>
                            </ul>   
                            <Link to="/contato" onClick={window.scrollTo(0, 0)} className="btn-class">CONTRATE AGORA</Link>
                        </div>
                    </Col>
                    <Col m={6} s={12}>
                        <div className="s-prices-rect s-prices-rect-purple s-active-purple">
                            <h3>Customizado</h3>
                            <h4>R$ 2000*</h4>
                            <ul>
                                <li>Layout personalizado</li>
                                <li>Design multiplataforma</li>
                                <li>Otimizado</li>
                                <li>Cloud Storage</li>
                                <li>Até 3 níveis de acesso</li>
                                <li>30 dias de manutenção grátis</li>
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

export default SistemasContainer;    